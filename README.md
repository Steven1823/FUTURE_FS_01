# Steven Kingoro - Portfolio Website

A modern, responsive portfolio website built with Angular 19, showcasing software development projects and woodworking craftsmanship. Features a professional design with smooth animations, contact form integration via EmailJS, and a comprehensive CV modal.

## 🚀 Live Demo

Visit the live portfolio: [Your Portfolio URL]

## ✨ Features

- **Modern Design**: Clean, professional interface with dark theme
- **Responsive Layout**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive CV Modal**: View detailed CV information in an elegant modal
- **Contact Form**: Functional contact form with EmailJS integration
- **Project Showcase**: Display of both software and woodworking projects
- **Smooth Animations**: Hover effects and micro-interactions
- **Mobile Navigation**: Collapsible mobile menu
- **Professional Sections**:
  - Hero section with introduction
  - About section with journey overview
  - Projects gallery (software & carpentry)
  - Contact form with social links

## 🛠️ Technologies Used

- **Frontend**: Angular 19, TypeScript
- **Styling**: Tailwind CSS, LESS
- **Email Service**: EmailJS
- **Build Tool**: Angular CLI
- **Package Manager**: npm

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v18 or higher)
- npm (v9 or higher)
- Angular CLI (v19 or higher)

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up EmailJS** (for contact form functionality)
   - Create an account at [EmailJS.com](https://www.emailjs.com/)
   - Follow the setup instructions in `EMAILJS_SETUP.md`
   - Update the EmailJS configuration in `src/app/services/email.service.ts`

4. **Start the development server**
   ```bash
   npm start
   # or
   ng serve
   ```

5. **Open your browser**
   Navigate to `http://localhost:4200`

## 📧 EmailJS Configuration

To enable the contact form:

1. **Create EmailJS Account**: Sign up at [EmailJS.com](https://www.emailjs.com/)
2. **Add Email Service**: Configure your email provider (Gmail, Outlook, etc.)
3. **Create Email Template**: Use the template provided in `EMAILJS_SETUP.md`
4. **Update Configuration**: Replace the placeholder values in:
   - `src/app/services/email.service.ts`
   - `src/environments/environment.ts`
   - `src/environments/environment.prod.ts`

Detailed setup instructions are available in `EMAILJS_SETUP.md`.

## 🏗️ Build for Production

```bash
# Build the project
npm run build

# The build artifacts will be stored in the `dist/` directory
```

## 📁 Project Structure

```
src/
├── app/
│   ├── services/
│   │   └── email.service.ts          # EmailJS integration
│   ├── app.component.html             # Main template
│   ├── app.component.ts               # Main component logic
│   ├── app.component.less             # Component styles
│   └── app.config.ts                  # App configuration
├── assets/                            # Static assets (images, CV)
├── environments/                      # Environment configurations
├── styles.less                        # Global styles
└── tailwind.css                       # Tailwind CSS imports
```

## 🎨 Customization

### Personal Information
Update your personal details in `src/app/app.component.ts`:
- Name and title
- Contact information
- Skills and experience
- Project details
- CV data

### Styling
- **Colors**: Modify the color scheme in `tailwind.config.js`
- **Fonts**: Update font families in the Tailwind configuration
- **Layout**: Adjust spacing and layout in component templates

### Images
Replace the placeholder images in `src/assets/` with your own:
- Profile photo
- Project screenshots
- CV document

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Optimized images with alt text
- Clean URL structure

## 🚀 Deployment

### Netlify (Recommended)
1. Build the project: `npm run build`
2. Deploy the `dist/my-portfolio` folder to Netlify
3. Configure custom domain (optional)

### Other Platforms
The built application can be deployed to any static hosting service:
- Vercel
- GitHub Pages
- Firebase Hosting
- AWS S3

## 📄 Available Scripts

- `npm start` - Start development server
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes
- `npm test` - Run unit tests
- `ng generate component [name]` - Generate new component

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Contact

**Steven Kingoro**
- Email: stevekingoro@gmail.com
- Phone: +254 768 558 357
- LinkedIn: [Steven Kingoro](https://www.linkedin.com/in/steven-kingoro-658472350)
- GitHub: [Steven1823](https://github.com/Steven1823)
- Location: Nairobi, Kenya

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Angular team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- EmailJS for the email service integration
- Pexels for stock photography

---

**Built with ❤️ by Steven Kingoro**