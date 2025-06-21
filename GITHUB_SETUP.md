# GitHub Setup Guide

This guide will help you set up GitHub for your portfolio project and push your changes.

## 🚀 Quick Setup (If you already have a GitHub repository)

If you already have a GitHub repository created, you can push your changes directly:

```bash
# Initialize git repository (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio setup with Angular 19 and EmailJS integration"

# Add your GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Push to GitHub
git push -u origin main
```

## 📋 Complete Setup (If you need to create a new repository)

### Step 1: Create a GitHub Repository

1. **Go to GitHub**: Visit [github.com](https://github.com) and sign in
2. **Create New Repository**: Click the "+" icon → "New repository"
3. **Repository Settings**:
   - Repository name: `my-portfolio` or `steven-kingoro-portfolio`
   - Description: `Professional portfolio website built with Angular 19`
   - Set to **Public** (recommended for portfolios)
   - ✅ Add a README file
   - ✅ Add .gitignore (choose "Node" template)
   - Choose a license (MIT recommended)

### Step 2: Clone and Setup Local Repository

```bash
# Clone your new repository
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Navigate to the repository
cd YOUR_REPOSITORY_NAME

# Copy your portfolio files to this directory
# (Copy all files from your current project to this new directory)
```

### Step 3: Initial Commit and Push

```bash
# Add all files
git add .

# Commit your changes
git commit -m "Initial portfolio setup with Angular 19 and EmailJS integration

- Modern responsive design with Tailwind CSS
- Interactive CV modal with comprehensive information
- Contact form integration with EmailJS
- Project showcase for software and woodworking
- Mobile-responsive navigation
- Professional sections: Hero, About, Projects, Contact"

# Push to GitHub
git push origin main
```

## 🔧 Git Configuration (First Time Setup)

If this is your first time using Git, configure your identity:

```bash
# Set your name
git config --global user.name "Steven Kingoro"

# Set your email
git config --global user.email "stevekingoro@gmail.com"

# Set default branch name
git config --global init.defaultBranch main
```

## 📁 Recommended .gitignore

Make sure your `.gitignore` file includes:

```gitignore
# Dependencies
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
tmp/
out-tsc/

# Runtime data
pids
*.pid
*.seed
*.pid.lock

# Coverage directory used by tools like istanbul
coverage/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE files
.vscode/
.idea/
*.swp
*.swo

# OS generated files
.DS_Store
.DS_Store?
._*
.Spotlight-V100
.Trashes
ehthumbs.db
Thumbs.db

# Angular specific
.angular/cache/
```

## 🌟 Repository Best Practices

### Branch Strategy
```bash
# Create a development branch
git checkout -b develop

# Create feature branches for new features
git checkout -b feature/contact-form-enhancement
git checkout -b feature/new-project-showcase
```

### Commit Message Convention
Use clear, descriptive commit messages:

```bash
# Good examples:
git commit -m "Add EmailJS integration for contact form"
git commit -m "Update CV data with latest experience"
git commit -m "Fix mobile navigation responsiveness"
git commit -m "Add new woodworking project to showcase"

# Include more details for complex changes:
git commit -m "Implement CV modal with comprehensive information

- Add detailed education and certification sections
- Include skills categorization (technical, soft, craftsmanship)
- Add volunteer experience and hobbies
- Implement download CV functionality
- Add responsive design for mobile devices"
```

## 🚀 Deployment Integration

### GitHub Pages Setup
1. Go to your repository settings
2. Scroll to "Pages" section
3. Select source: "Deploy from a branch"
4. Choose branch: `main` and folder: `/dist/my-portfolio/browser`
5. Your site will be available at: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

### Automated Deployment with GitHub Actions
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Build
      run: npm run build
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./dist/my-portfolio/browser
```

## 📊 Repository Features to Enable

### 1. Issues and Project Management
- Enable Issues for bug tracking and feature requests
- Use Projects for organizing development tasks
- Create issue templates for bugs and feature requests

### 2. Security
- Enable Dependabot for dependency updates
- Set up branch protection rules for main branch
- Require pull request reviews for important changes

### 3. Documentation
- Keep README.md updated with latest features
- Add CHANGELOG.md for version history
- Include screenshots in repository

## 🔄 Regular Maintenance Commands

```bash
# Check status
git status

# Pull latest changes
git pull origin main

# Create and switch to new branch
git checkout -b feature/new-feature

# Stage specific files
git add src/app/app.component.ts
git add README.md

# Commit with detailed message
git commit -m "Update personal information and add new project"

# Push branch to GitHub
git push origin feature/new-feature

# Switch back to main branch
git checkout main

# Merge feature branch
git merge feature/new-feature

# Delete feature branch
git branch -d feature/new-feature
```

## 🎯 Next Steps After Setup

1. **Update Repository Description**: Add a clear description and topics
2. **Add Repository Topics**: `portfolio`, `angular`, `typescript`, `tailwindcss`
3. **Create Releases**: Tag important versions of your portfolio
4. **Add Social Links**: Link your GitHub in your portfolio
5. **Enable Discussions**: For community feedback on your work

## 📞 Need Help?

If you encounter any issues:
1. Check GitHub's documentation: [docs.github.com](https://docs.github.com)
2. Use GitHub's community forum: [github.community](https://github.community)
3. Contact support if needed

---

**Happy coding! 🚀**
</parameter>