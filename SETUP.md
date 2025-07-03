# Portfolio Website - Setup Instructions

## Quick Start

1. **Add Your Images**
   - Add your professional headshot as `public/headshot.jpg`
   - Add your resume as `public/resume.pdf`

2. **Configure Email**
   - Copy `.env.example` to `.env.local`
   - Set up Gmail app password and update environment variables

3. **Start Development**
   ```bash
   npm run dev
   ```

## Email Setup Guide

### Gmail Configuration
1. Go to your Google Account settings
2. Enable 2-factor authentication
3. Generate an app-specific password:
   - Go to Security > App passwords
   - Generate password for "Mail"
   - Use this password in `EMAIL_PASS`

### Environment Variables
```bash
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-character-app-password
EMAIL_TO=where-to-receive-emails@gmail.com
```

## Customization

### Update Your Information
Edit `src/data/portfolio.ts`:
- Personal details
- Skills and levels
- Projects
- Experience
- Education

### Add Your Resume
Place your resume as `public/resume.pdf`

### Add Your Headshot
Place your professional photo as `public/headshot.jpg` (400x400px recommended)

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Set environment variables in Vercel dashboard
4. Deploy

### Environment Variables for Production
- `EMAIL_USER`
- `EMAIL_PASS` 
- `EMAIL_TO`
- `NEXT_PUBLIC_SITE_URL`

## Features Complete
✅ Hero section with typewriter effect
✅ About section with downloadable resume
✅ Skills section with animated progress bars
✅ Projects section with hover effects
✅ Experience timeline
✅ Contact form with email integration
✅ Responsive navigation
✅ Smooth scrolling and animations
✅ SEO optimization
✅ Performance optimized

Your portfolio is now ready to use!
