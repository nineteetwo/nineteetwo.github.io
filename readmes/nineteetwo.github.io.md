# nineteetwo — personal portfolio

> a dark, retro-futurist personal website built with vanilla HTML, CSS, and JavaScript.  
> deployed on **GitHub Pages** · updated nightly via **GitHub Actions**

---

## overview

a minimalist portfolio designed around a dark-navy / cyan aesthetic, inspired by visual-novel interfaces and retro terminal UIs.  
no frameworks. no build tools. just hand-crafted code.

---

## pages

| page | description |
|---|---|
| `/` | landing page with pixel-art star background |
| `/projects.html` | project cards fetched from GitHub (topic-based, not limited to 6) |
| `/project.html?repo=...` | individual project page with cached README rendered as markdown |
| `/contact.html` | contact details in a terminal-style layout |
| `/cv/` | resume / CV section |

---

## how projects work

repositories tagged with the **`portfolio`** topic on GitHub are automatically pulled nightly.

```
GitHub Actions (00:00 UTC)
  ├── fetches all repos tagged `portfolio` via GraphQL
  ├── saves metadata → pinned-repos.json
  └── caches each README → readmes/<repo-name>.md
```

no API calls are made on the visitor's end — everything is pre-fetched and served as static files.

---

## tech stack

- **HTML / CSS / JS** — no frameworks, no build step
- **Special Elite** — primary display font (Google Fonts)
- **marked.js** — client-side markdown → HTML rendering
- **GitHub Actions** — nightly data pipeline (repo metadata + README cache)
- **GitHub Pages** — static hosting

---

## design system

```css
--clr-bg:     rgb(20, 27, 45)    /* deep navy */
--clr-text:   rgb(224, 248, 250) /* icy cyan  */
--clr-nav:    rgb(252, 254, 243) /* soft white */
--clr-accent: rgba(224, 248, 250, 0.4)
```

typography: `Special Elite` for headings · `Liberation Serif` for body · `Comic Sans MS` for the logo (intentional)

---

## i18n

the site supports **4 languages** via a lightweight client-side translation system (`i18n.js`):

- 🇬🇧 english
- 🇹🇷 turkish
- 🇩🇪 german
- 🇯🇵 japanese

language preference is stored in `localStorage` and applied on every page load.

---

## local development

no build step required — open any `.html` file directly, or serve with:

```bash
npx serve .
```

---

## license

[MIT](LICENSE)
