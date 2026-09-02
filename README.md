# Food Portfolio Website

A professional, modern portfolio website built with **Angular 17+** and advanced **SCSS styling**. Features a stunning UI with smooth animations, contact section with email and phone integration, and is optimized for hosting on free platforms.

## 🌟 Features

✨ **Modern Design**
- Light Professional theme with elegant gold accents
- Smooth animations and transitions
- Responsive mobile-first design
- Beautiful gradient backgrounds

📧 **Contact Integration**
- Email redirect to Gmail
- Clickable phone number
- Contact form with validation
- Social media links

🎨 **Advanced Styling**
- SCSS with nested selectors
- CSS animations (fade, slide, float, pulse)
- Gradient text and backgrounds
- Glassmorphism effects
- Responsive grid layouts

📱 **Fully Responsive**
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly interface
- Optimized performance
- SEO-friendly markup

## 📁 Project Structure

```
PortfolioWebsite/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/              # Navigation with scroll tracking
│   │   │   ├── hero/                # Hero section with CTA
│   │   │   ├── about/               # About & stats section
│   │   │   ├── services/            # Services showcase
│   │   │   ├── portfolio/           # Portfolio with filters
│   │   │   ├── contact/             # Contact form & info
│   │   │   └── footer/              # Footer with links
│   │   ├── app.component.ts         # Root component
│   │   └── app.config.ts            # Angular config
│   ├── styles.scss                  # Global styles & animations
│   ├── index.html                   # Entry HTML
│   └── main.ts                      # Bootstrap
├── angular.json                     # Angular CLI config
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
└── karma.conf.js                    # Test config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd PortfolioWebsite
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the development server:
```bash
npm start
```

Open `http://localhost:4200` in your browser.

### Production Build

Create an optimized production build:
```bash
npm run build:prod
```

The build artifacts will be in `dist/portfolio/`.

## 🎨 Customization

### Update Contact Information
Edit [src/app/components/contact/contact.component.ts](src/app/components/contact/contact.component.ts):
```typescript
email = 's.m@p.com';
phone = '91';
```

### Modify Content
- **Hero section**: [src/app/components/hero/hero.component.html](src/app/components/hero/hero.component.html)
- **Services**: [src/app/components/services/services.component.ts](src/app/components/services/services.component.ts)
- **Portfolio**: [src/app/components/portfolio/portfolio.component.ts](src/app/components/portfolio/portfolio.component.ts)

### Adjust Styling
- **Global styles**: [src/styles.scss](src/styles.scss)
- **Colors**: Change `#b8860b` (gold) throughout SCSS files
- **Fonts**: Poppins is imported from Google Fonts

## 🌐 Deployment on Vercel (Free)

### Step 1: Create Vercel Account
1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub account
3. Authorize Vercel

### Step 2: Connect Your Repository
1. Push your code to GitHub
2. Import project in Vercel dashboard
3. Select the `PortfolioWebsite` folder as root
4. Set Build Command: `npm run build:prod`
5. Set Output Directory: `dist/portfolio`

### Step 3: Deploy
1. Click "Deploy"
2. Your site will be live at `https://portfolio-xxxx.vercel.app`
3. Get free custom domain integration

### Alternative Free Hosting Options

**Firebase Hosting**
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

**Netlify**
1. Push to GitHub
2. Connect repository on [netlify.com](https://netlify.com)
3. Build command: `npm run build:prod`
4. Publish directory: `dist/portfolio`

**GitHub Pages**
```bash
npm install --save-dev angular-cli-ghpages
ng build --base-href "/portfolio/"
ngh --dir=dist/portfolio
```

## 📧 Email Integration

The email button redirects users to Gmail with pre-filled contact details:
```
https://mail.google.com/mail/u/0/?view=cm&fs=1&to=[EMAIL]&su=[SUBJECT]&body=[BODY]
```

Users must have Gmail open in their browser for this to work seamlessly.

## 📱 Phone Integration

The phone button uses the `tel:` protocol:
```
tel:+91XXXXXXXXXX
```

On mobile devices, clicking this link will initiate a call.

## 🎯 SEO Best Practices

- ✅ Semantic HTML structure
- ✅ Meta descriptions
- ✅ Responsive design
- ✅ Fast loading times
- ✅ Proper heading hierarchy
- ✅ Internal linking

## 🔧 Technologies Used

- **Framework**: Angular 17+
- **Language**: TypeScript 5.2+
- **Styling**: SCSS with advanced features
- **Animations**: CSS keyframes
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📊 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎨 Color Scheme

- **Primary**: #b8860b (Dark Goldenrod)
- **Dark Accent**: #8b6914
- **Light Background**: #f8f9fa
- **Text**: #1a1a1a / #333333
- **Gray**: #666666 / #999999

## 📚 Components Overview

### Navbar
- Sticky navigation with smooth scroll tracking
- Mobile-friendly hamburger menu
- Active section highlighting

### Hero
- Eye-catching main section
- Call-to-action buttons
- Smooth scroll indicator
- Float animations

### About
- Company statistics
- Skills with progress bars
- Animated counters

### Services
- 6 service cards with hover effects
- Icon display
- Category-based layout

### Portfolio
- Filterable project showcase
- Multiple categories
- Hover animations
- Category badges

### Contact
- Integrated contact form
- Email redirect to Gmail
- Phone call integration
- Social media links
- Success message

### Footer
- Company info
- Quick links
- Social icons
- Back-to-top button

## 🚀 Performance Optimization

- ✅ Lazy loading images
- ✅ CSS animations (GPU accelerated)
- ✅ Optimized bundle size
- ✅ Responsive images
- ✅ Minified assets

## 📝 License

This project is open source and available for commercial use.

## 🤝 Support

For questions or customization needs, refer to the component documentation or Angular official docs.

---

**Built with ❤️ using Angular + SCSS**

```

On mobile devices, clicking this link will initiate a call.

## 🎯 SEO Best Practices

- ✅ Semantic HTML structure
- ✅ Meta descriptions
- ✅ Responsive design
- ✅ Fast loading times
- ✅ Proper heading hierarchy
- ✅ Internal linking

## 🔧 Technologies Used

- **Framework**: Angular 17+
- **Language**: TypeScript 5.2+
- **Styling**: SCSS with advanced features
- **Animations**: CSS keyframes
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📊 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

## 🎨 Color Scheme

- **Primary**: #b8860b (Dark Goldenrod)
- **Dark Accent**: #8b6914
- **Light Background**: #f8f9fa
- **Text**: #1a1a1a / #333333
- **Gray**: #666666 / #999999

## 📚 Components Overview

### Navbar
- Sticky navigation with smooth scroll tracking
- Mobile-friendly hamburger menu
- Active section highlighting

### Hero
- Eye-catching main section
- Call-to-action buttons
- Smooth scroll indicator
- Float animations

### About
- Company statistics
- Skills with progress bars
- Animated counters

### Services
- 6 service cards with hover effects
- Icon display
- Category-based layout

### Portfolio
- Filterable project showcase
- Multiple categories
- Hover animations
- Category badges

### Contact
- Integrated contact form
- Email redirect to Gmail
- Phone call integration
- Social media links
- Success message

### Footer
- Company info
- Quick links
- Social icons
- Back-to-top button

## 🚀 Performance Optimization

- ✅ Lazy loading images
- ✅ CSS animations (GPU accelerated)
- ✅ Optimized bundle size
- ✅ Responsive images
- ✅ Minified assets

## 📝 License

This project is open source and available for commercial use.

## 🤝 Support

For questions or customization needs, refer to the component documentation or Angular official docs.

---

**Built with ❤️ using Angular + SCSS**

# Food Portfolio Website

A professional, modern portfolio website built with **Angular 17+** and advanced **SCSS styling**. Features a stunning UI with smooth animations, contact section with email and phone integration, and is optimized for hosting on free platforms.

## 🌟 Features

✨ **Modern Design**
- Light Professional theme with elegant gold accents
- Smooth animations and transitions
- Responsive mobile-first design
- Beautiful gradient backgrounds

📧 **Contact Integration**
- Email redirect to Gmail
- Clickable phone number
- Contact form with validation
- Social media links

🎨 **Advanced Styling**
- SCSS with nested selectors
- CSS animations (fade, slide, float, pulse)
- Gradient text and backgrounds
- Glassmorphism effects
- Responsive grid layouts

📱 **Fully Responsive**
- Works perfectly on desktop, tablet, and mobile
- Touch-friendly interface
- Optimized performance
- SEO-friendly markup

## 📁 Project Structure

```
PortfolioWebsite/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── navbar/              # Navigation with scroll tracking
│   │   │   ├── hero/                # Hero section with CTA
│   │   │   ├── about/               # About & stats section
│   │   │   ├── services/            # Services showcase
│   │   │   ├── portfolio/           # Portfolio with filters
│   │   │   ├── contact/             # Contact form & info
│   │   │   └── footer/              # Footer with links
│   │   ├── app.component.ts         # Root component
│   │   └── app.config.ts            # Angular config
│   ├── styles.scss                  # Global styles & animations
│   ├── index.html                   # Entry HTML
│   └── main.ts                      # Bootstrap
├── angular.json                     # Angular CLI config
├── package.json                     # Dependencies
├── tsconfig.json                    # TypeScript config
└── karma.conf.js                    # Test config
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd PortfolioWebsite
```

2. Install dependencies:
```bash
npm install
```

### Development Server

Start the development server:
```bash
npm start
```

Open `http://localhost:4200` in your browser.

### Production Build

Create an optimized production build:
```bash
npm run build:prod
```

The build artifacts will be in `dist/portfolio/`.

## 🎨 Customization

### Update Contact Information
Edit [src/app/components/contact/contact.component.ts](src/app/components/contact/contact.component.ts):
```typescript
email = 's.m@p.com';
phone = '91';
```

### Modify Content
- **Hero section**: [src/app/components/hero/hero.component.html](src/app/components/hero/hero.component.html)
- **Services**: [src/app/components/services/services.component.ts](src/app/components/services/services.component.ts)
- **Portfolio**: [src/app/components/portfolio/portfolio.component.ts](src/app/components/portfolio/portfolio.component.ts)

### Adjust Styling
- **Global styles**: [src/styles.scss](src/styles.scss)
- **Colors**: Change `#b8860b` (gold) throughout SCSS files
- **Fonts**: Poppins is imported from Google Fonts

## 🌐 Deployment on GoDaddy

Build with `npm run build:prod`, then upload the contents of `dist/portfolio/` to the GoDaddy domain's document root, commonly `public_html/`. The build includes `.htaccess` for Angular fallback routing. See [DEPLOYMENT.md](DEPLOYMENT.md) for the complete cPanel/File Manager steps.

## 📧 Email Integration

The email button redirects users to Gmail with pre-filled contact details:
```
https://mail.google.com/mail/u/0/?view=cm&fs=1&to=[EMAIL]&su=[SUBJECT]&body=[BODY]
```

Users must have Gmail open in their browser for this to work seamlessly.
