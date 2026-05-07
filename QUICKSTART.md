# Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Install Dependencies
```bash
cd PortfolioWebsite
npm install
```

### 2. Start Dev Server
```bash
npm start
```

### 3. Open Browser
```
http://localhost:4200
```

### 4. View Your Portfolio
- Scroll through all sections
- Click "Send Email" to test Gmail integration
- Test phone button
- Try contact form

---

## 📝 Customization (2 minutes)

### Update Your Info
**File**: `src/app/components/contact/contact.component.ts`

```typescript
email = 'your-email@gmail.com';  // Change this
phone = '91';                     // Change this
```

### Update Contact Form Success
**File**: `src/app/components/contact/contact.component.ts`

The form currently redirects to Gmail. No backend needed! ✅

---

## 🎨 Quick Color Changes

**File**: `src/styles.scss`

Find and replace:
- `#b8860b` → Your favorite color
- `#8b6914` → Darker shade of your color

**Example**: Change to Blue
```scss
#667eea  → Primary color
#5568d3  → Darker shade
```

---

## 📱 Update Services

**File**: `src/app/components/services/services.component.ts`

```typescript
services = [
  {
    icon: '🍴',
    title: 'Your Service',
    description: 'Your description'
  },
  // Add more...
];
```

---

## 🖼️ Update Portfolio Items

**File**: `src/app/components/portfolio/portfolio.component.ts`

```typescript
projects = [
  {
    id: 1,
    title: 'Project Title',
    category: 'Category',
    emoji: '🍕',
    description: 'Project description'
  },
  // Add more...
];
```

---

## 🚀 Deploy in 3 Steps

### 1. Build Production
```bash
npm run build:prod
```

### 2. Push to GitHub
```bash
git add .
git commit -m "Portfolio ready"
git push
```

### 3. Deploy on Vercel
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repo
- It auto-deploys! ✅

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed guide.

---

## 📞 Email Integration

When users click "Send Email":
1. Gmail opens in new window
2. Pre-filled with your email
3. User adds their message
4. They send directly to you

**No backend/database needed!**

---

## 🎯 Test Checklist

- [ ] Home page loads smoothly
- [ ] Navbar scroll tracking works
- [ ] Email button opens Gmail
- [ ] Phone button shows number (or calls on mobile)
- [ ] Contact form validates
- [ ] Mobile responsive on iPhone
- [ ] Mobile responsive on Android
- [ ] All animations smooth
- [ ] Links work

---

## 📊 Available Commands

```bash
npm start              # Development server
npm run build:prod     # Production build
npm run watch          # Watch mode
npm test               # Run tests
npm run lint           # Check code quality
```

---

## 🎨 Sections Overview

1. **Navbar** - Sticky with scroll tracking
2. **Hero** - Main introduction
3. **About** - Your story & stats
4. **Services** - What you offer
5. **Portfolio** - Your work (filterable)
6. **Contact** - Email + Phone + Form
7. **Footer** - Links & social

---

## 💡 Tips

- Use emojis in portfolio items (🍕, 🍔, 🍜, etc.)
- Keep descriptions short (1-2 sentences)
- Add actual images later
- Update content monthly
- Share your URL everywhere!

---

## 🆘 Common Issues

**Port 4200 busy?**
```bash
npm start -- --port 4300
```

**Dependencies issue?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Build fails?**
```bash
ng build --configuration development
```

---

## 📖 Full Documentation

- [README.md](README.md) - Complete overview
- [DEPLOYMENT.md](DEPLOYMENT.md) - Hosting guide
- [Angular Docs](https://angular.io)

---

**You're all set! Start customizing and deploy! 🚀**
