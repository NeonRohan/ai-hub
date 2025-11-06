README.md - Research & AI Tools Hub

```markdown
# Research & AI Tools Hub 🔬🤖

A comprehensive collection of 100+ research tools, AI assistants, and productivity platforms - all in one place.

![Research & AI Tools Hub](https://img.shields.io/badge/Version-1.0.0-blue)
![License](https://img.shields.io/badge/License-MIT-green)

## ✨ Features

- **100+ Tools** - Curated collection of research and AI tools
- **Smart Categories** - Organized into 9 intuitive categories
- **AI Tool Finder** - Get personalized recommendations using Gemini AI
- **Mobile-First Design** - Fully responsive and touch-friendly
- **Instant Search** - Find tools quickly with real-time search
- **Slide-Out Menu** - Easy navigation on all devices
- **Free Access** - All tools are freely accessible

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Gemini API key (for AI features - [Get it here](https://makersuite.google.com/app/apikey))

### Installation

1. **Clone or Download**
   ```bash
   git clone https://github.com/NeonRohan/research-ai-tools-hub.git
```

1. Add Your API Key
   · Open js/script.js
   · Find const apiKey = "YOUR_API_KEY_HERE";
   · Replace with your actual Gemini API key
2. Open in Browser
   ```bash
   open index.html
   # or simply double-click index.html
   ```

📁 Project Structure

```
research-ai-tools-hub/
├── index.html              # Main application
├── css/
│   └── style.css          # All styles and responsive design
├── js/
│   ├── script.js          # Main functionality (add API key here)
│   └── tools-data.js      # Tools database (100+ tools)
├── README.md              # This file
└── assets/                # Images and icons (optional)
```

🛠️ How to Use

Browse by Category

1. Click the menu icon (☰) in top-right
2. Select from 9 categories:
   · 🤖 AI Chatbots (17 tools)
   · 🛠️ Utility Apps (7 tools)
   · 🌐 Research & Discovery (18 tools)
   · 📚 PDF & Database Search (12 tools)
   · 🤖 AI Research Tools (15 tools)
   · 📊 Data & Analytics (3 tools)
   · 🔍 Collaboration Tools (6 tools)
   · 🌏 Asian Platforms (8 tools)

Search Tools

· Use the search bar in header
· Search by tool name or description
· Real-time filtering as you type

AI Tool Finder

1. Describe your research task
2. Click "Get Tool Suggestions"
3. AI recommends the best tools for your needs

Example queries:

· "I need to analyze academic papers about climate change"
· "Find tools for team collaboration on research projects"
· "Suggest AI tools for data analysis and visualization"

🔧 Setup AI Assistant

Get Gemini API Key

1. Visit Google AI Studio
2. Sign in with Google account
3. Click "Create API Key"
4. Copy your key

Configure API Key

1. Open js/script.js
2. Find this line (around line 95):
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```
3. Replace with your actual key:
   ```javascript
   const apiKey = "AIzaSyC4R8ANL2HfT3q5B8N7M9V2XW1YzAbCdEf";
   ```

🌐 Browser Support

· ✅ Chrome 60+
· ✅ Firefox 55+
· ✅ Safari 12+
· ✅ Edge 79+
· ✅ Mobile browsers

🎨 Customization

Add New Tools

Edit js/tools-data.js:

```javascript
"category-name": [
    {
        name: "Tool Name",
        description: "Tool description",
        icon: "fas fa-icon-name",
        link: "https://tool-url.com"
    }
]
```

Modify Categories

Update categoryInfo in js/tools-data.js:

```javascript
"category-id": { 
    name: "Category Name", 
    icon: "fas fa-icon" 
}
```

Change Colors

Edit CSS variables in css/style.css:

```css
:root {
    --primary: #4a6cf7;
    --accent: #ff6b6b;
    /* Add your colors */
}
```

📱 Mobile Features

· Touch-optimized buttons (44px minimum)
· Slide-out navigation menu
· Responsive grid layout
· Fast loading and smooth animations

🔒 Security Notes

For production use:

1. Restrict API key to your domain in Google Cloud Console
2. Consider using a backend server for API calls
3. Implement rate limiting for AI features

🤝 Contributing

We welcome contributions! Here's how:

1. Fork the project
2. Add new tools to tools-data.js
3. Test on multiple devices
4. Submit a pull request

Adding New Tools

Tools should be:

· Free to use (or have free tier)
· Relevant for research or AI
· Properly categorized
· With accurate descriptions

📊 Statistics

· 100+ Tools and platforms
· 9 Categories
· 17 AI Chatbots
· 18 Research tools
· 12 PDF search engines
· Zero dependencies

🐛 Troubleshooting

Common Issues

AI Assistant not working:

· Check API key is correctly set
· Verify internet connection
· Check browser console for errors (F12)

Menu not opening on mobile:

· Ensure JavaScript is enabled
· Check for CSS/JS file loading errors

Search not filtering:

· Clear browser cache
· Check tools-data.js is loaded

Debug Mode

Open browser console (F12) to see:

· Tool loading status
· Filter operations
· API request logs

📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments

· Google Fonts - Poppins font family
· Font Awesome - Beautiful icons
· Google Gemini - AI capabilities
· All tool providers - For creating amazing free tools

📞 Support

· Documentation: GitHub Wiki
· Issues: GitHub Issues
· Email: roh.b.work@gmaik.com

🚀 Deployment

Static Hosting

Deploy to:

· GitHub Pages
· Netlify
· Vercel
· Any web server

No Build Required

Simply upload all files to your web host - no compilation needed!

---

<div align="center">

Happy Researching! 🎓✨

Your ultimate companion for academic and professional research

</div>
```

This README.md file provides:

1. Complete setup instructions
2. API key configuration guide
3. Usage examples
4. Troubleshooting section
5. Customization options
6. Mobile optimization details
7. Deployment instructions
8. Professional badges and formatting


