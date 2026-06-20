# My Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a dark theme with smooth animations and easy-to-customize data structure.

## 🚀 Features

- ✨ Modern dark theme with cyan accent colors
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎨 Smooth animations and transitions
- 🔗 Easy project linking (GitHub, demos, external links)
- 📝 Simple JSON-based data management (no database needed)
- 🌐 GitHub Pages ready
- ⚡ Fast and lightweight

## 📁 Project Structure

```
my-portfolio/
├── index.html           # Main HTML template
├── css/
│   └── style.css       # All styling and responsive design
├── js/
│   └── script.js       # Dynamic data loading and interactions
├── data/
│   └── portfolio.json  # Your portfolio data (name, projects, skills, etc.)
└── README.md           # This file
```

## 🛠️ How to Customize

### 1. Edit Your Personal Info
Open `data/portfolio.json` and update:
- `personal.name` - Your name
- `personal.title` - Your professional title
- `personal.bio` - Short bio
- `personal.profileImage` - URL to your profile picture

### 2. Add Your Skills
In `data/portfolio.json`, update the `skills` array:
```json
{
  "category": "Backend / Database",
  "skills": ["Node.js", "Python", "PostgreSQL", ...]
}
```

### 3. Add Your Projects
In `data/portfolio.json`, update the `projects` array:
```json
{
  "title": "Your Project Name",
  "category": "Full Stack",
  "description": "What does this project do?",
  "githubLink": "https://github.com/yourname/project",
  "demoLink": "https://demo.com",
  "projectLink": "https://project.com"
}
```

### 4. Update Social Links
In `data/portfolio.json`, update the `social` object:
```json
{
  "github": "https://github.com/yourname",
  "linkedin": "https://linkedin.com/in/yourname",
  "twitter": "https://twitter.com/yourhandle",
  "email": "your-email@example.com"
}
```

## 🌐 Deploy to GitHub Pages

1. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and save

2. **Your site will be live at:**
   ```
   https://rani735.github.io/my-portfolio
   ```

3. **Any changes pushed to main will auto-deploy!**

## 🎨 Customize Colors

Open `css/style.css` and modify the variables at the top:

```css
:root {
    --primary-color: #00d4ff;      /* Main cyan color */
    --secondary-color: #1a1a2e;    /* Dark background */
    --accent-color: #0f3460;       /* Lighter accent */
    --text-light: #e0e0e0;         /* Light text */
}
```

## 📋 Sections

- **Hero/Header** - Introduction with profile picture and CTA buttons
- **Navigation** - Sticky nav bar with smooth scrolling
- **About** - Your introduction and story
- **Skills** - Organized by category with tag display
- **Projects** - Grid of project cards with links
- **Contact** - Social links and contact form
- **Footer** - Copyright information

## 💡 Tips

- Update your profile picture URL to a real image (use Gravatar, GitHub avatar, or host on Imgur)
- Add 3-4 quality projects to showcase your work
- Keep descriptions concise and impactful
- Test links before deploying
- Use HTTPS links when possible
- Add keywords to your bio for better SEO

## 📧 Contact Form

The contact form opens the user's email client. To make it functional:
1. Update `your-email@example.com` in `js/script.js` (line with "mailto:")
2. Or integrate with a backend service like Formspree or EmailJS

## 🔄 Version Control

```bash
# Initial setup
git clone https://github.com/rani735/my-portfolio.git
cd my-portfolio

# Make changes to portfolio.json or other files
git add .
git commit -m "Update portfolio with new project"
git push origin main
```

## 📱 Browser Support

- Chrome/Chromium ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Mobile browsers ✅

## 📄 License

Feel free to use this template for your portfolio!

---

**Happy coding! 🚀**