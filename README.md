# AID-UP Website

Static GitHub Pages-ready website for AID-UP, an e-health company focused on clinical engineering services:

- VR simulation for medical operative and educational purposes
- AI RAG model structuring
- Digital records management
- MCP development
- General physician services
- Detailed example projects for hospitals, universities, clinics, and enterprise health teams
- Contact paths for hospital integration, university partnerships, enterprise AI/MCP pilots, and physician services
- ES / EN / FR language switcher with translated page copy and email subjects

## Files

- `index.html` - single-page website
- `styles.css` - responsive visual system and diagrams
- `script.js` - footer year, link focus, and ES / EN / FR language switching
- `assets/aid-up-health-engineering-hero.png` - generated hero image for the site
- `COMPETITIVE_POSITIONING.md` - market references and messaging rationale
- `.nojekyll` - keeps GitHub Pages from applying Jekyll processing

## Publish To GitHub Pages

1. Create a GitHub repository, for example `aid-up`.
2. Upload these files to the repository root.
3. In GitHub, open `Settings` -> `Pages`.
4. Set `Source` to `Deploy from a branch`.
5. Select the `main` branch and `/root`, then save.
6. GitHub will publish the site at `https://<your-user>.github.io/<repo-name>/`.

## Customize Before Publishing

- Replace `contact@aid-up.com` in `index.html` with the real company email.
- Replace or add phone, city, WhatsApp, LinkedIn, appointment links, or separate institutional inboxes in the contact section.
- Add regulatory, privacy, or medical practice details required for the operating country.
- Replace the generated hero image if you have branded clinical or training photography.

## Language Links

The switcher updates the site in place and stores the selected language. Direct links also work:

- English: `index.html?lang=en`
- Spanish: `index.html?lang=es`
- French: `index.html?lang=fr`

## Image Generation Note

The hero image was generated with the built-in image generation tool and copied into `assets/aid-up-health-engineering-hero.png` for project use.
