# Food Portfolio - Features & Customization Guide

## 🎨 Design Features

### Advanced Animations
- ✨ Fade In/Out animations
- 🎯 Slide In animations  
- 🎪 Float animations
- 💫 Pulse animations
- ✨ Glow effects
- 🔄 Smooth transitions

### Responsive Design
- 📱 Mobile-first approach
- 💻 Desktop optimized
- 📱 Tablet perfect
- ⚡ Fast loading
- 🎨 Beautiful on all screens

### Color Scheme
- **Primary**: Dark Goldenrod (#b8860b)
- **Accent**: Darker Gold (#8b6914)
- **Background**: Light Gray (#f8f9fa)
- **Text**: Dark (#1a1a1a)
- **Neutral**: Gray (#666666)

---

## 🔧 Customization Guide

### 1. Update Contact Information

**File**: `src/app/components/contact/contact.component.ts`

```typescript
email = 's.m@p.com';    // Your Gmail
phone = '91';           // Your phone (with country code)
```

### 2. Change Color Scheme

**File**: `src/styles.scss`

Replace all instances:
```scss
// Gold Theme
#b8860b → Your primary color
#8b6914 → Your secondary color

// Example: Blue Theme
#667eea
#5568d3
```

### 3. Update Company Name

Files to modify:
- `src/app/components/navbar/navbar.component.html` - Logo text
- `src/app/components/footer/footer.component.html` - Footer text
- `src/index.html` - Page title

### 4. Modify Services

**File**: `src/app/components/services/services.component.ts`

```typescript
services = [
  {
    icon: '🍴',              // Change emoji
    title: 'Service Name',    // Change title
    description: 'Description of your service...'
  },
  // Add more services...
];
```

### 5. Update Portfolio Items

**File**: `src/app/components/portfolio/portfolio.component.ts`

```typescript
projects = [
  {
    id: 1,
    title: 'Project Name',
    category: 'Category',      // Must match categories array
    emoji: '🍕',              // Choose emoji
    description: 'Description'
  },
  // Add more projects...
];
```

### 6. Customize About Section

**File**: `src/app/components/about/about.component.ts`

```typescript
stats = [
  { number: '10+', label: 'Years Experience' },
  { number: '500+', label: 'Happy Clients' },
  { number: '1000+', label: 'Projects Completed' },
  { number: '98%', label: 'Satisfaction Rate' }
];

skills = [
  { name: 'Your Skill', level: 95 },
  { name: 'Another Skill', level: 90 },
  // Add more skills...
];
```

---

## 🎯 Email & Phone Integration

### Email Feature
- Redirects to Gmail with pre-filled recipient
- User can add their own message
- No backend required!

```typescript
// In contact.component.ts
const gmailUrl = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${email}`;
window.open(gmailUrl, '_blank');
```

### Phone Feature
- Uses `tel:` protocol
- On mobile: initiates call
- On desktop: shows number

```typescript
window.location.href = `tel:${phone}`;
```

---

## 📝 Text Content

### Hero Section
**File**: `src/app/components/hero/hero.component.html`

```html
<h1>Welcome to Food</h1>
<p class="subtitle">Excellence in Every Bite</p>
<p class="description">Your tagline here...</p>
```

### About Section
**File**: `src/app/components/about/about.component.html`

```html
<p>Your company description...</p>
```

---

## 🎨 Styling Customization

### Change Button Style
**File**: `src/styles.scss`

```scss
.btn {
  background: linear-gradient(135deg, #b8860b, #8b6914);
  // Change these colors
}
```

### Modify Font
**File**: `src/index.html`

Currently uses Google Font "Poppins"

Change to:
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
```

Then update SCSS:
```scss
body {
  font-family: 'Roboto', sans-serif;
}
```

---

## 📱 Add Images

### Logo
1. Place image in `src/assets/images/logo.png`
2. Update navbar: `src/app/components/navbar/navbar.component.html`
3. Replace emoji with `<img src="assets/images/logo.png">`

### Hero Image
1. Place image in `src/assets/images/hero.jpg`
2. Update hero component
3. Replace emoji container with `<img>`

### Portfolio Items
Replace emojis with actual images:

```html
<img src="assets/images/project1.jpg" alt="Project 1">
```

---

## 🔗 Add Social Media Links

**File**: `src/app/components/footer/footer.component.html`

```html
<a href="https://facebook.com/yourpage">Facebook</a>
<a href="https://instagram.com/yourprofile">Instagram</a>
<a href="https://linkedin.com/in/yourprofile">LinkedIn</a>
```

---

## 📊 Analytics (Optional)

### Add Google Analytics

1. Get tracking ID from [analytics.google.com](https://analytics.google.com)
2. Add to `src/index.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

---

## 🚀 Performance Tips

1. **Compress Images**: Use .webp format
2. **Lazy Load**: Use `loading="lazy"` on images
3. **Minify CSS**: Automatic in prod build
4. **Optimize Bundle**: Check with `ng build --stats-json`

---

## 🔐 SEO Optimization

### Update Meta Tags

**File**: `src/index.html`

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="food, catering, chef, etc">
<meta name="author" content="Your Name">
```

---

## ✨ Advanced Features

### Add Contact Form Backend
Replace email redirect with actual form submission to backend service like:
- Firebase Realtime Database
- AWS Lambda
- Backend API

### Add Blog Section
Create new component:
```bash
ng generate component components/blog
```

### Add Photo Gallery
Use NgFor to loop through images:
```html
<img *ngFor="let image of images" [src]="image.url">
```

---

## 🎯 Pre-Deployment Checklist

- [ ] Update email address
- [ ] Update phone number
- [ ] Customize all services
- [ ] Add portfolio projects
- [ ] Change colors if needed
- [ ] Update about section
- [ ] Add social media links
- [ ] Test email redirect
- [ ] Test phone button
- [ ] Test contact form
- [ ] Mobile responsiveness verified
- [ ] Performance optimized

---

## 📞 Getting Help

- Angular Docs: https://angular.io/docs
- SCSS Guide: https://sass-lang.com/documentation
- Vercel Docs: https://vercel.com/docs
- GitHub Docs: https://docs.github.com

---

**Happy customizing! Your portfolio will be amazing! 🚀**
