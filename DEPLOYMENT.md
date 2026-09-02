# Deployment Guide for GoDaddy

This Angular website is a static site. Build it locally, then upload the generated files to the GoDaddy hosting document root.

### Prerequisites
- A GoDaddy hosting plan connected to the purchased domain
- Access to GoDaddy cPanel or File Manager
- Node.js 18 or newer on the computer used to build the site

### Step-by-Step Deployment

#### 1. **Build the Website**
```bash
npm install
npm run build:prod
```

The files to upload are inside `dist/portfolio/`. Upload the contents of that folder, including `.htaccess`, not the folder itself.

#### 2. **Open the GoDaddy Hosting Files**
1. Sign in to GoDaddy and open **My Products**.
2. Open **Web Hosting** and choose **Manage** for the hosting plan.
3. Open **cPanel Admin** or **File Manager**.
4. Open the document root for the purchased domain. This is commonly `public_html/` for the primary domain, or a domain-specific folder for an additional domain.

#### 3. **Upload the Production Files**
1. Back up or remove existing files in the domain's document root if this is a new site.
2. Upload every file and folder from `dist/portfolio/` into that document root.
3. Confirm that `index.html` and `.htaccess` are directly inside the document root.
4. Visit the domain over HTTPS and test the page on desktop and mobile.

GoDaddy's File Manager may hide files beginning with a dot. Enable **Show Hidden Files** before checking `.htaccess`. FTP users can upload it with FileZilla.

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

## 🌐 Domain and HTTPS

If the domain and hosting are in GoDaddy, connect the domain to the hosting plan and use the document root assigned to that domain. If the domain was purchased in another GoDaddy account, the account owner must grant hosting or DNS access, or point the domain's DNS records to the hosting plan.

Enable GoDaddy's SSL certificate for the domain, then enable HTTPS redirect if available. DNS and SSL changes can take time to propagate.

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

### Build Fails
**Solution**: Check that `dist/portfolio` is created locally:
```bash
npm run build:prod
dir dist\portfolio
```

### 404 Errors on Routes
**Solution**: Upload the generated `.htaccess` file to the same folder as `index.html`. It is included automatically in `dist/portfolio/` by the Angular build.

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

1. **Enable Compression** in GoDaddy/cPanel if available
2. **Use CDN** (Vercel handles this)
3. **Optimize Images** (use .webp)
4. **Lazy Load** components
5. **Minify CSS** (automatic in prod build)

---

## 📊 Monitor Your Site

### Add Monitoring
- Google Analytics
- Hotjar (heatmaps)
- LogRocket (session replay)

---

## 🔐 Security

- ✅ HTTPS enabled through GoDaddy SSL
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
