# LMG PR — The Star Maker of Silicon Valley.

Marketing website for [LMG PR](https://www.lmgpr.com), a strategic public relations firm specializing in launches for early-stage and bold tech companies. 500+ company launches, 1M+ media articles, 23+ years in the industry.

## Tech Stack

- **HTML / Tailwind CSS** — static site with utility-first styling (compiled CSS)
- **Vanilla JavaScript** — animations, carousels, and scroll-triggered reveals
- **Google Fonts** — Cormorant Garamond, Outfit, IBM Plex Mono
- **Vercel** — hosting with custom headers (caching, CSP, security)

## Project Structure

```
├── index.html            # Main landing page
├── privacy-policy.html   # Privacy policy
├── terms-of-service.html # Terms of service
├── css/styles.css        # Compiled Tailwind CSS (output)
├── src/input.css         # Tailwind CSS source (input)
├── tailwind.config.js    # Tailwind configuration
├── images/               # Client logos, headshots, and assets
├── vercel.json           # Vercel deployment config & security headers
├── robots.txt            # Search engine crawl rules
├── sitemap.xml           # XML sitemap
└── .htaccess             # Apache redirects (local dev)
```

## Local Development

Serve the project with any static file server:

```bash
# Using XAMPP (place in htdocs/lmgpr)
# Then open http://localhost/lmgpr

# Or with Python
python -m http.server 3000

# Or with Node
npx serve .
```

## Compiling Tailwind CSS

The site uses compiled Tailwind CSS (`css/styles.css`) instead of the CDN. If you add or change Tailwind classes in the HTML files, you need to recompile the CSS:

```bash
# Install dependencies (first time only)
npm install

# One-time build
npm run build:css

# Watch mode (auto-recompiles on file changes)
npm run watch:css
```

The configuration lives in `tailwind.config.js` (custom colors, fonts, etc.) and the source file is `src/input.css`. The output `css/styles.css` is committed to the repo so no build step is needed for deployment.

## Deployment

The site deploys to **Vercel** on push to `master`. The `vercel.json` file configures:

- Clean URLs (no `.html` extensions)
- Aggressive image caching (1 year, immutable)
- Security headers (CSP, X-Frame-Options, nosniff, Referrer-Policy, Permissions-Policy)

## SEO

- Meta tags and Open Graph tags on all pages
- Twitter Card support
- XML sitemap at `/sitemap.xml`
- Canonical URLs configured
