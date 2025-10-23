# ASP.NET Core + Vite + Tailwind + jQuery Starter

Modern starter template with Tailwind CSS, Vite, and jQuery.

## 🚀 Quick Start

### 1. Install
```bash
npm install
```

### 2. Development
```bash
# Terminal 1
npm run dev

# Terminal 2
dotnet watch
```

### 3. Production
```bash
# Build assets
npm run build

# Run
dotnet run --launch-profile Production
```

## 📦 Tech Stack
- ASP.NET Core 7.0
- Vite 6.2
- Tailwind CSS 3.4
- jQuery 3.7

## 📁 Structure
```
src/
  css/main.css      ← Tailwind styles
  js/main.js        ← jQuery code
Views/
  Home/
  Shared/
wwwroot/dist/       ← Build output
```

## 🎨 Components

**Buttons:** `.btn-primary`, `.btn-secondary`, `.btn-success`, `.btn-danger`

**Cards:** `.card`, `.card-header`, `.card-body`, `.card-footer`

**Forms:** `.form-group`, `.form-label`, `.form-control`

**Alerts:** `.alert-success`, `.alert-danger`, `.alert-info`, `.alert-warning`

## ⚠️ Important

**Production must use:**
```bash
dotnet run --launch-profile Production
```

**NOT** `ASPNETCORE_ENVIRONMENT=Production dotnet run` (launchSettings overrides it)

## ⚙️ Tailwind Purge (Content)

Tailwind automatically removes unused CSS in production:

**Verify purge is working:**
```bash
npm run build
ls -lh wwwroot/dist/css/main.css  # Should be ~15 KB, not 3+ MB
```

**Content paths (tailwind.config.js):**
```javascript
content: [
  "./Views/**/*.cshtml",           // Scans all Razor files
  "./src/**/*.{js,ts,jsx,tsx}",    // Scans all JS files
]
```

**Add new folders?** Update `content` array in `tailwind.config.js`

## 🐛 Troubleshooting

**No styles in production?**
1. Run `npm run build`
2. Use `--launch-profile Production`
3. Check page source shows `/dist/js/main.js` not `localhost:5173`

**CSS too large?**
1. Check `tailwind.config.js` content paths
2. Make sure all View folders are included
3. Run `npm run build` again

---

Ready to code! 🎉
