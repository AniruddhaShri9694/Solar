# Deployment Guide for Food Portfolio Website

This guide will help you deploy your portfolio to the internet for free on Vercel.

## 🚀 Quickest Method: Vercel (Recommended)

### Prerequisites
- GitHub account
- Your code pushed to GitHub
- Vercel account (free)

### Step-by-Step Deployment

#### 1. **Prepare Your Code**
```bash
# Build the project locally first to ensure no errors
npm install
npm run build:prod
```

#### 2. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/food-portfolio.git
git push -u origin main
```

#### 3. **Deploy on Vercel**
1. Go to [vercel.com](https://vercel.com)
2. Click "Sign Up" and use GitHub
3. Authorize Vercel
4. Click "New Project"
5. Select your repository
6. Configure:
   - **Framework**: Angular
   - **Build Command**: `npm run build:prod`
   - **Output Directory**: `dist/portfolio`
   - **Root Directory**: `./`

7. Click "Deploy"
8. **Wait 2-5 minutes** ⏳
9. Your site is live! 🎉

### Your Live URL
```
https://food-portfolio-xxxxx.vercel.app
```

---

## 📋 Alternative Methods

### Firebase Hosting
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
# Select "dist/portfolio" as public directory
npm run build:prod
firebase deploy
```

### Netlify (Drag & Drop)
1. Go to [netlify.com](https://netlify.com)
2. Sign up
3. **Drag and drop** `dist/portfolio` folder
4. Site goes live instantly!

### GitHub Pages
```bash
npm install --save-dev angular-cli-ghpages
ng build --base-href "/portfolio/"
ngh --dir=dist/portfolio
# Your site: https://username.github.io/portfolio
```

---

## ✅ Post-Deployment Checklist

- [ ] Test email button (should open Gmail)
- [ ] Test phone button (should dial)
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test contact form
- [ ] Check loading time
- [ ] Share your URL! 🎊

---

## 🔧 Custom Domain (Optional)

### Connect Your Domain on Vercel
1. Go to Vercel Project Settings
2. Click "Domains"
3. Add your domain (foodportfolio.com, etc.)
4. Add DNS records as shown
5. Done! ✅

### Free Domain Options
- **Freenom**: freenom.com (free .tk, .ml, etc.)
- **Vercel**: Free .vercel.app subdomain included
- **Netlify**: Free .netlify.app subdomain included

---

## 📱 Share Your Portfolio

### Copy Your Live URL
```
https://your-portfolio-url.vercel.app
```

### Where to Share
- 📧 Email signature
- 💼 LinkedIn profile
- 📱 WhatsApp/Instagram bio
- 🐦 Twitter/Twitter
- 📱 Business cards

### Example Sharing Text
```
Check out my Food Portfolio! 🍽️
[Your Live URL]

Ready to cater your next event or learn more about our services?
```

---

## 🆘 Troubleshooting

### Build Fails on Vercel
**Solution**: Check your `dist/portfolio` folder exists locally:
```bash
npm run build:prod
ls dist/portfolio/
```

### Email Button Not Working
**Solution**: Ensure user is logged into Gmail before clicking
- Or switch to form submission method

### 404 Errors on Routes
**Solution**: Create `vercel.json`:
```json
{
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

### Site Too Slow
**Solution**: Check bundle size:
```bash
npm run build:prod -- --stats-json
```

---

## 🎯 Performance Tips

1. **Enable Compression** on Vercel (automatic)
2. **Use CDN** (Vercel handles this)
3. **Optimize Images** (use .webp)
4. **Lazy Load** components
5. **Minify CSS** (automatic in prod build)

---

## 📊 Monitor Your Site

### Vercel Analytics
1. Go to Vercel Dashboard
2. Select your project
3. Check "Analytics" tab
4. View:
   - Pageviews
   - Response time
   - Error rates

### Add More Monitoring
- Google Analytics
- Hotjar (heatmaps)
- LogRocket (session replay)

---

## 🔐 Security

- ✅ HTTPS enabled (Vercel auto)
- ✅ Environment variables hidden
- ✅ No API keys exposed
- ✅ Regular backups (GitHub)

---

## 📞 Contact Integration

### Email Workflow
1. User clicks "Send Email"
2. Gmail opens with pre-filled message
3. User adds personal note
4. Sends to: `s.m@p.com`

### Phone Workflow
1. User clicks phone button
2. On mobile: Initiates call
3. On desktop: Shows phone number

---

## 🎨 Post-Launch Customization

### Update Portfolio Items
Edit `src/app/components/portfolio/portfolio.component.ts`:
```typescript
projects = [
  {
    id: 1,
    title: 'Your Project',
    category: 'Category',
    emoji: '🍕',
    description: 'Description'
  }
];
```

### Change Colors
Edit `src/styles.scss`:
```scss
// Old: #b8860b (Gold)
// New: Your preferred color
```

### Add Your Logo
Place image in `src/assets/images/`
Update navbar logo

---

## 🚀 Next Steps

1. ✅ Deploy on Vercel
2. ✅ Test all functionality
3. ✅ Add Google Analytics
4. ✅ Share on social media
5. ✅ Promote your URL
6. ✅ Update content regularly

---

## 📞 Support

For issues with:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Angular**: [angular.io/docs](https://angular.io/docs)
- **GitHub**: [github.com/help](https://github.com/help)

---

**Your portfolio is now live! 🎉 Start sharing and advertising!**
