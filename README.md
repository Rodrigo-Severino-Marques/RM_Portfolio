# Rodrigo Marques Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. This project serves as my personal portfolio, but I've made it available for the community to use, learn from, and customize for their own portfolios.

## 🌟 Features

- **Modern Design**: Clean, dark-themed UI with smooth animations
- **Multi-language Support**: Internationalization (i18n) with support for English, Spanish, French, German, and Portuguese
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Contact Form**: Integrated contact form using EmailJS
- **Sections Included**:
  - Hero section with profile and social links
  - About section
  - Skills showcase
  - Work experience
  - Education
  - Projects portfolio
  - Contact form
  - Footer

## 🚀 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React i18next** - Internationalization
- **EmailJS** - Contact form service
- **React Icons** - Icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/Rodrigo-Severino-Marques/RM_Portfolio.git
cd RM_Portfolio
```

2. **Install dependencies first** (required before running the dev server):
```bash
npm install
```

3. Set up EmailJS (optional, but required for contact form to work):
   - Create a free account at [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create an email service (Gmail, Outlook, etc.)
   - Create an email template
   - Get your Public Key from the Integration page
   - Create a `.env` file in the root directory with the following variables:
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id_here
   VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
   VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
   ```
   > **Note**: If EmailJS is not configured, the contact form will fall back to opening your default email client.

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist` directory.

## 📝 Customization

This portfolio is designed to be easily customizable. Here's what you can modify:

### Personal Information
- Update your profile image in `public/profile.jpg`
- Modify personal details in the translation files located in `src/i18n/locales/`
- Update social media links in the Hero component (`src/components/Hero.tsx`)

### Styling
- Colors and themes can be adjusted in `tailwind.config.js`
- Global styles are in `src/index.css`

### Content
- Edit section content in their respective component files in `src/components/`
- Update translations for all languages in `src/i18n/locales/`

### EmailJS Configuration
- **Important**: To enable the contact form, you need to:
  1. Register for a free account at [EmailJS](https://www.emailjs.com/)
  2. Create an email service (connect your Gmail, Outlook, etc.)
  3. Create an email template with the following variables: `{{from_name}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`
  4. Get your credentials (Service ID, Template ID, and Public Key)
  5. Create a `.env` file in the root directory (see `.env.example` if available) with:
     ```env
     VITE_EMAILJS_SERVICE_ID=your_service_id
     VITE_EMAILJS_TEMPLATE_ID=your_template_id
     VITE_EMAILJS_PUBLIC_KEY=your_public_key
     ```
  6. Restart the development server after creating/updating the `.env` file
- Without EmailJS configuration, the contact form will use a mailto fallback

## 🌍 Language Support

The portfolio supports multiple languages:
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Portuguese (pt-PT)

To add more languages, create a new JSON file in `src/i18n/locales/` following the existing structure.

## 📄 License

This project is open source and available for the community to use. Feel free to fork, modify, and use it for your own portfolio! However, **reselling this project or any derivative works is not permitted**.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the issues page.

## 📧 Contact

Rodrigo Marques - [rodrigo.severino.marques@gmail.com](mailto:rodrigo.severino.marques@gmail.com)

Project Link: [https://github.com/Rodrigo-Severino-Marques/RM_Portfolio](https://github.com/Rodrigo-Severino-Marques/RM_Portfolio)

---

**Note**: This is my personal portfolio, but I've shared it with the community so others can learn from it and use it as a starting point for their own portfolios. Feel free to customize it to make it your own! However, **reselling this project or any derivative works is strictly prohibited**.

