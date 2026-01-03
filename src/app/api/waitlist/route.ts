import { NextResponse } from 'next/server';
import { waitlistSchema } from '@/lib/validations';

// Rate limiting: Simple in-memory store (use Redis in production)
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 100;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitStore.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitStore.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>]/g, '') // Remove potential XSS characters
    .slice(0, 255); // Limit length
}

export async function POST(request: Request) {
  try {
    // Get IP address for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    
    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, message: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validation = waitlistSchema.safeParse(body);

    if (!validation.success) {
      const errors = validation.error.issues.map((issue) => ({
        field: issue.path[0],
        message: issue.message,
      }));

      return NextResponse.json(
        { 
          success: false, 
          message: 'Validation failed', 
          errors 
        },
        { status: 400 }
      );
    }

    // Sanitize inputs
    const { name, email } = validation.data;
    const sanitizedName = sanitizeInput(name);
    const sanitizedEmail = sanitizeInput(email.toLowerCase());

    // TODO: Save to database (Prisma example)
    // const waitlistEntry = await prisma.waitlist.create({
    //   data: {
    //     name: sanitizedName,
    //     email: sanitizedEmail,
    //     ipAddress: ip,
    //     createdAt: new Date(),
    //   },
    // });

    // TODO: Send confirmation email (Resend example)
    // await resend.emails.send({
    //   from: 'Stackwise <hello@stackwise.io>',
    //   to: sanitizedEmail,
    //   subject: 'Welcome to Stackwise Waitlist! 🚀',
    //   html: `
    //     <h1>Welcome, ${sanitizedName}!</h1>
    //     <p>You're now on the Stackwise waitlist. We'll notify you when we launch in February 2026.</p>
    //     <p>As one of our first 100 users, you'll receive a lifetime 50% discount on the Pro plan.</p>
    //   `,
    // });

    console.log('New waitlist signup:', { name: sanitizedName, email: sanitizedEmail });

    return NextResponse.json(
      {
        success: true,
        message: 'Successfully joined the waitlist! Check your email for confirmation.',
      },
      { 
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.error('Waitlist API error:', error);

    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { success: false, message: 'Method not allowed' },
    { status: 405 }
  );
}
