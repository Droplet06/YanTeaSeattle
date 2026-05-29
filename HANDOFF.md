# YAN TEA Seattle — Project Handoff

**Live site:** https://droplet06.github.io/YanTeaSeattle
**Repository:** https://github.com/Droplet06/YanTeaSeattle
**Stack:** Pure static site — HTML + CSS + JS, no build tools, no dependencies

---

## What has been completed

### 1. Full static website, live on GitHub Pages
All pages are in a single `index.html`. The site is publicly accessible and deployed automatically on every push to `main`.

### 2. Brand direction established
- Hard-edged geometric minimalism (Swiss Style / International Typographic Style)
- Typography: Syne 800 (headings/wordmarks), DM Sans (body/UI), Noto Serif SC (Chinese text)
- Color palette: YAN TEA green `#2f7a48`, cream `#f7f4ec`, warm white `#fbfaf6`, charcoal `#1f241f`
- No bubble fonts, no rounded playful elements, no boba-shop clichés

### 3. Sections built
| Section | Status | Notes |
|---|---|---|
| Nav | Done | Fixed, blur backdrop, bilingual EN/中文 toggle, Order Now CTA |
| Hero | Done | Full-viewport, large headline, hero image with intentional crop, two CTAs |
| Featured Drinks | Done | 4-card text layout, category tag, Chinese name, English name, 22oz, price |
| Our Story | Done | Grid/YAN brand panel left, copy + stats right |
| Visit / Find Us | Done | Green full-bleed section, address/hours/phone, map panel with pin tooltip |
| Footer | Done | Brand logo, 3-link columns (Order / Connect / Visit), copyright |

### 4. Features
- Bilingual EN / 中文 toggle (all content duplicated, JS class toggle)
- Scroll-reveal animations on section elements
- Sticky nav with scroll shadow
- Drink card data driven from JS array (easy to update menu)
- Responsive layout (mobile breakpoints at 768px and 480px)
- Linked to Toast online ordering, Uber Eats, Yelp, Instagram, Facebook, Google Maps

---

## File structure

```
YanTeaSeattle/
├── index.html              # All page content
├── assets/
│   ├── css/main.css        # All styles (tokens, components, responsive)
│   ├── js/main.js          # Menu data, card renderer, lang toggle, scroll reveal
│   └── images/
│       ├── logo.png        # Brand logo
│       ├── hero/
│       │   └── hero-main.jpg   # Hero product photo
│       ├── about/          # Empty — placeholder for future about image
│       └── menu/           # Empty — placeholder for future drink photos
├── .gitignore
└── HANDOFF.md              # This file
```

---

## Next steps (priority order)

### High priority
1. **Real drink photos** — Add actual product images to `assets/images/menu/`. The JS card renderer already supports `<img>` in `.feat-img-area`; currently suppressed because images are missing. Once photos are added, uncomment the image block in `main.js → renderFeatured()`.
2. **Update menu data** — Edit the `menu` array in `assets/js/main.js`. Each item has: `cat`, `zh`, `en`, `price`, `soldOut`. The featured grid auto-selects 4 available items by priority category. Many items are currently marked `soldOut:true` — update when items return.
3. **Verify hours** — The Hours row currently says "Check Google Maps for current hours." Replace with actual hours text if available.

### Medium priority
4. **About section photo** — Add a real store or team photo to `assets/images/about/` and wire it into the `.about-visual` panel to replace the current YAN grid graphic.
5. **TikTok / WeChat links** — Footer has placeholder `href="#"` for TikTok and WeChat. Fill in real URLs when ready.
6. **Custom domain** — Purchase `yanteaseattle.com` (or similar) via Namecheap / Squarespace Domains (~$12/yr). Then set it in GitHub repo → Settings → Pages → Custom domain. Also add a `CNAME` file to the repo root containing just the domain name.
7. **Copyright year** — Footer says `© 2025`. Update to `© 2026` or make it dynamic.

### Low priority / future
8. **Full menu page** — Consider a separate `menu.html` if a complete menu listing is needed for SEO or accessibility.
9. **Google Analytics** — Add a GA4 `<script>` tag in `index.html <head>` to track traffic.
10. **OG / social meta tags** — Add Open Graph tags so link previews on iMessage/WeChat/Instagram look good.

---

## How to make changes on a new machine

```bash
# 1. Clone the repo
git clone https://github.com/Droplet06/YanTeaSeattle.git
cd YanTeaSeattle

# 2. Edit files (no build step needed — open index.html in browser directly)
# Edit: index.html, assets/css/main.css, assets/js/main.js

# 3. Push changes → site auto-deploys in ~1 min
git add -A
git commit -m "your message"
git push
```

You will need to authenticate with GitHub. Use a Personal Access Token (PAT):
- GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic)
- Scope: check `repo`
- Use token as password when `git push` prompts for credentials

**Live URL after push:** https://droplet06.github.io/YanTeaSeattle

---

## Working with Claude Code on the new machine

If continuing with Claude Code (claude.ai/code or VS Code extension):
- Open the cloned `YanTeaSeattle/` folder
- Claude will have full context of the codebase
- Reference this file and the commit history for context on decisions made
