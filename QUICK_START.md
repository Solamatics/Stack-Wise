# Stackwise - Quick Start Guide

## 🚀 You're All Set!

Your Stackwise landing page is ready to go! The development server is running at:
**http://localhost:3000**

## ✅ What's Working

### Components Built
- ✅ **Navigation** - Sticky header with mobile menu
- ✅ **Hero** - Gradient background with waitlist form
- ✅ **Features** - 6 cards with icons and hover effects
- ✅ **Pricing** - Free & Pro plans comparison
- ✅ **FAQ** - 8 questions with accordion
- ✅ **CTA** - Final conversion section
- ✅ **Footer** - 4 columns with social links

### Functionality
- ✅ **Smooth Scroll** - Navigate between sections
- ✅ **Form Validation** - Client-side with Zod
- ✅ **API Route** - POST /api/waitlist endpoint
- ✅ **Animations** - Framer Motion throughout
- ✅ **Responsive** - Mobile, tablet, desktop
- ✅ **Accessible** - ARIA labels, keyboard nav
- ✅ **SEO Ready** - Meta tags, structured data

## 📋 Before You Launch

### 1. Add Content & Assets (Required)
```bash
# Add these files to public/ folder:
- favicon.ico
- apple-touch-icon.png
- og-image.png (1200x630 for social sharing)
- Any hero images or illustrations you want
```

### 2. Set Up Database (Required)
```bash
# Install Prisma
npm install prisma @prisma/client

# Initialize Prisma
npx prisma init

# Create schema (example):
# model Waitlist {
#   id        String   @id @default(cuid())
#   name      String
#   email     String   @unique
#   createdAt DateTime @default(now())
# }

# Run migrations
npx prisma migrate dev
```

Update [src/app/api/waitlist/route.ts](src/app/api/waitlist/route.ts) lines 66-72 with:
```typescript
const waitlistEntry = await prisma.waitlist.create({
  data: {
    name: sanitizedName,
    email: sanitizedEmail,
    ipAddress: ip,
  },
});
```

### 3. Set Up Email Service (Required)
```bash
# Install Resend (recommended)
npm install resend

# Add to .env.local:
RESEND_API_KEY=re_your_api_key_here
```

Update [src/app/api/waitlist/route.ts](src/app/api/waitlist/route.ts) lines 75-82 with your email logic.

### 4. Environment Variables
Create `.env.local`:
```env
# Database
DATABASE_URL="postgresql://..."

# Email
RESEND_API_KEY="re_..."

# Analytics (optional)
NEXT_PUBLIC_GA_ID="G-..."
```

## 🎨 Customization

### Change Colors
Edit [src/app/globals.css](src/app/globals.css) lines 10-17:
```css
--color-primary: #7C3AED;        /* Your primary color */
--color-accent: #10B981;         /* Your accent color */
```

### Update Copy
- **Hero headline**: [src/components/Hero.tsx](src/components/Hero.tsx) line 113
- **Features**: [src/components/Features.tsx](src/components/Features.tsx) lines 8-53
- **Pricing**: [src/components/Pricing.tsx](src/components/Pricing.tsx) lines 7-45
- **FAQ**: [src/components/FAQ.tsx](src/components/FAQ.tsx) lines 7-60

### Update Metadata (SEO)
Edit [src/app/layout.tsx](src/app/layout.tsx) lines 12-70 for:
- Page title
- Description
- Keywords
- Open Graph tags
- Twitter Card

## 🧪 Testing Checklist

### Local Testing
- [ ] Test all buttons and links
- [ ] Submit waitlist form (success/error states)
- [ ] Test mobile menu (hamburger)
- [ ] Test on mobile device (real device or DevTools)
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test smooth scroll between sections
- [ ] Verify all animations work
- [ ] Check responsiveness (375px, 768px, 1440px)

### Performance Testing
```bash
# Build for production
npm run build

# Test production build
npm run start

# Run Lighthouse audit in Chrome DevTools
# Target: 95+ on all metrics
```

### Accessibility Testing
- [ ] Use browser screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Check color contrast (use Chrome DevTools)
- [ ] Install axe DevTools extension and run audit
- [ ] Test with keyboard only (unplug mouse)

## 🚀 Deployment

### Deploy to Vercel (Easiest)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Follow prompts to link project
```

Or:
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your repository
5. Add environment variables
6. Deploy!

### Deploy to Netlify
```bash
# Build command: npm run build
# Publish directory: .next

# Add environment variables in Netlify dashboard
```

## 📊 Analytics Setup (Optional)

### Google Analytics
1. Get tracking ID from [Google Analytics](https://analytics.google.com)
2. Add to `.env.local`: `NEXT_PUBLIC_GA_ID=G-...`
3. Uncomment script in [src/app/layout.tsx](src/app/layout.tsx) line 120

### PostHog (Alternative)
```bash
npm install posthog-js
```

## 🐛 Troubleshooting

### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules
npm install

# Try building again
npm run build
```

### TypeScript Errors
```bash
# Check types
npm run build

# Most errors are in:
# - Missing types in src/types/index.ts
# - Incorrect props in components
```

### Styling Issues
- Make sure Tailwind CSS is processing correctly
- Check browser console for CSS errors
- Verify globals.css is imported in layout.tsx

## 📞 Support

For questions about this build:
1. Check [BUILD_SUMMARY.md](BUILD_SUMMARY.md) for detailed info
2. Review [README.md](README.md) for project overview
3. Read component comments for implementation details

## 🎯 Quick Commands

```bash
# Development
npm run dev              # Start dev server

# Production
npm run build            # Build for production
npm run start            # Start production server

# Quality
npm run lint             # Run ESLint
npx tsc --noEmit        # Check TypeScript types
```

## ✨ What's Next?

1. **Week 1**: Add database + email service
2. **Week 2**: Add real content and assets
3. **Week 3**: Test thoroughly and fix issues
4. **Week 4**: Deploy to production!

---

**Current Status**: 🎉 Fully functional development build
**Ready for**: Content population + Backend integration
**Estimated to Launch**: 2-3 weeks

Good luck with Stackwise! 🚀
