# Bamedhaf Shipping Agency - Marketing Website

A modern, bilingual (Arabic/English) React marketing website for Bamedhaf Shipping Agency in Yemen.

## 🚀 Features

- **Bilingual Support**: Arabic (primary) and English with RTL support
- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design with sea-themed color palette
- **Split Hero**: Clear separation between Cargo and Passenger services
- **SEO Ready**: Semantic HTML and proper meta tags structure
- **Fast Performance**: Built with Vite for optimal loading speeds

## 📋 Pages

1. **Home** - Split hero showcasing both main services
2. **Cargo & Shipping Services** - Comprehensive cargo services information
3. **Passenger Trips** (Aden ↔ Berbera) - Travel booking information and pricing
4. **For Companies & NGOs** - B2B and NGO-focused services
5. **About Us** - Company history and values
6. **FAQ** - Frequently asked questions with accordion
7. **Contact** - Direct contact methods (WhatsApp, phone, email, Facebook)

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **Styling**: Tailwind CSS
- **Internationalization**: react-i18next
- **Icons**: React Icons
- **Animations**: Framer Motion (optional, can be added)

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Footer, LanguageSwitcher, PageLayout
│   ├── common/          # Reusable components (future)
│   ├── home/            # Home page specific components (future)
│   ├── cargo/           # Cargo page components (future)
│   ├── travel/          # Travel page components (future)
│   ├── faq/             # FAQ components
│   └── contact/         # Contact components
├── pages/               # All page components
│   ├── Home.jsx
│   ├── CargoServices.jsx
│   ├── PassengerTrips.jsx
│   ├── Companies.jsx
│   ├── About.jsx
│   ├── FAQ.jsx
│   └── Contact.jsx
├── i18n/
│   ├── config.js        # i18next configuration
│   └── locales/
│       ├── ar.json      # Arabic translations
│       └── en.json      # English translations
├── routes/
│   └── AppRoutes.jsx    # Route configuration
├── utils/
│   └── constants.js     # Contact info, prices, constants
├── styles/
│   └── index.css        # Global styles and Tailwind setup
├── App.jsx              # Main app component
└── main.jsx             # Entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm installed

### Installation

1. Navigate to the project directory:
   ```bash
   cd bamedhaf-website
   ```

2. Install dependencies (if not already done):
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit: `http://localhost:5173`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## 🎨 Customization

### Adding the Logo

1. Place your logo file in `public/assets/` (e.g., `logo.svg` or `logo.png`)
2. Update the logo reference in `src/components/layout/Header.jsx`:
   ```jsx
   <img src="/assets/logo.svg" alt="Bamedhaf" className="h-12" />
   ```
3. Extract colors from your logo and update `src/styles/index.css` and `tailwind.config.js`

### Updating Contact Information

Edit `src/utils/constants.js` to update:
- Email address
- Phone numbers
- WhatsApp link
- Facebook page URL
- Office address

### Updating Content

All content is stored in translation files:
- Arabic: `src/i18n/locales/ar.json`
- English: `src/i18n/locales/en.json`

Simply edit these JSON files to update any text on the website.

### Changing Colors

Update the color palette in two places:

1. **tailwind.config.js** - Tailwind color tokens
2. **src/styles/index.css** - CSS variables (in `:root`)

## 🌐 Deployment

### Option 1: Netlify (Recommended)

1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to Netlify
3. Or connect your GitHub repo for automatic deployments

**Netlify Settings:**
- Build command: `npm run build`
- Publish directory: `dist`

### Option 2: Bluehost (cPanel)

1. Build the project: `npm run build`
2. Upload the contents of the `dist/` folder to `public_html/`
3. Ensure your `.htaccess` file includes:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

### Option 3: Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Maintenance

### Adding New Pages

1. Create page component in `src/pages/`
2. Add translations to `ar.json` and `en.json`
3. Add route in `src/routes/AppRoutes.jsx`
4. Add navigation link in `src/components/layout/Header.jsx`

### Updating Facebook Page

The Facebook page URL is set in `src/utils/constants.js`. Update the `SOCIAL_MEDIA.facebook` constant with the actual Facebook page URL.

### Adding Images

Place images in `public/assets/images/` and reference them like:
```jsx
<img src="/assets/images/hero-cargo.jpg" alt="Cargo" />
```

## 🐛 Troubleshooting

### Build Issues

If you encounter build errors:
```bash
rm -rf node_modules
rm package-lock.json
npm install
npm run dev
```

### Routing Issues on Production

Make sure your server is configured to redirect all requests to `index.html` (SPA fallback).

### RTL (Arabic) Display Issues

Check that:
- `html` element has `dir="rtl"` attribute
- Arabic fonts (Cairo, Tajawal) are loading correctly

## 📞 Contact Information

**Bamedhaf Shipping Agency**
- 📱 WhatsApp: +967 771111440
- ☎️ Phone: 02245599
- 📧 Email: hasanbamadhaf@yahoo.com
- 📍 Location: Yemen - Aden - Al-Mualla - Main Street, next to Hael Mosque, Alsanfory Building, 3rd Floor

## 📄 License

© 2025 Bamedhaf Shipping Agency. All rights reserved.

---

**Built with ❤️ using React, Vite, and Tailwind CSS**
