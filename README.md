# Personal Portfolio Website

A clean, modern, and responsive personal portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Scrolling** - Elegant navigation between sections
- **Mobile Menu** - Hamburger menu for mobile devices  
- **Modern Animations** - Smooth fade-in effects and hover animations
- **Easy to Customize** - Simple structure with clear comments
- **No Dependencies** - Pure HTML, CSS, and JavaScript

## 📁 Structure

```
Portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js          # JavaScript functionality
├── images/            # Images folder
│   └── README.md      # Image guidelines
└── README.md          # This file
```

## 🎯 Sections

1. **About** - Personal introduction with profile photo
2. **Skills** - Technical skills organized by category
3. **Projects** - Portfolio projects showcase
4. **Experience** - Professional timeline
5. **Contact** - Contact information

## 🛠️ Setup

### Quick Start

1. **Open the website**
   - Simply double-click `index.html` to open in your browser

2. **Customize your content**
   - Open `index.html` in a text editor
   - Replace placeholder text with your information
   - Update social media links
   - Add your images to the `images/` folder

3. **Customize colors** (optional)
   - Edit CSS variables in `styles.css` (lines 11-19)

### Run with Local Server (Optional)

For better development experience:

```bash
# Using Python 3
python3 -m http.server 8000

# Then visit http://localhost:8000
```

## ✏️ Customization Guide

### Update Your Information

**Profile & About Section:**
- Replace "Your Name" with your actual name
- Update the introduction text
- Add your profile photo as `images/profile.jpg` (300x300px recommended)

**Social Media Links:**
- Update GitHub, LinkedIn, Twitter links
- Update email address

**Skills Section:**
- Add/remove skills in each category
- Categories: Frontend, Backend, Database & Tools

**Projects Section:**
- Add project screenshots to `images/` folder
- Update project titles, descriptions, and links
- Modify tech stack tags

**Experience Section:**
- Update job titles, companies, and dates
- Modify descriptions and achievements
- Add or remove timeline items

**Contact Section:**
- Update email, phone, location
- Update social media links

### Change Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-color: #4A90E2;      /* Main blue */
    --secondary-color: #667EEA;    /* Secondary purple-blue */
    --text-dark: #2C3E50;          /* Dark text */
    --text-light: #5A6C7D;         /* Light text */
}
```

## 📷 Images

Place your images in the `images/` folder:

- `profile.jpg` - Your profile photo (300x300px)
- `project1.jpg` - Project screenshot (400x250px)
- `project2.jpg` - Project screenshot (400x250px)  
- `project3.jpg` - Project screenshot (400x250px)

**Note:** Placeholder images will show if you don't add your own images yet.

## 🌐 Deployment

### GitHub Pages (Free & Easy)

1. Create a GitHub account
2. Create a repository named `yourusername.github.io`
3. Upload all files to the repository
4. Visit `https://yourusername.github.io`

### Other Options

- **Netlify** - Drag and drop deployment
- **Vercel** - Quick deployment with custom domains
- **Cloudflare Pages** - Fast global deployment

## 🖥️ Browser Support

- Chrome ✅
- Firefox ✅
- Safari ✅
- Edge ✅
- Opera ✅

## 📝 Tips

- Keep descriptions concise and impactful
- Use high-quality images (but keep file sizes under 500KB)
- Update your portfolio regularly with new projects
- Test on mobile devices before deploying

## 🐛 Troubleshooting

**Images not showing?**
- Check file names match exactly (case-sensitive)
- Verify images are in the `images/` folder

**Mobile menu not working?**
- Make sure `script.js` is linked in `index.html`
- Check browser console for errors

**Styling issues?**
- Clear browser cache (Ctrl+F5 or Cmd+Shift+R)
- Verify `styles.css` is linked correctly

## 📄 License

Free to use for personal and commercial purposes.

## 🙋 Support

For questions or issues, check the comments in the HTML file for detailed guidance on each section.

---

**Built with ❤️ using HTML, CSS, and JavaScript**

