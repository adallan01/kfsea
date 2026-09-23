# Kadala Fire and Safety East Africa , Website

A static, multi-page marketing website for Kadala Fire and Safety East Africa Limited (KFSEA). Built with plain HTML, CSS and JavaScript , no framework, no build step, no server-side code required.

## Structure

```
index.html              Single entry point (hash-based client-side routing)
assets/
  styles.css             All styles (brand system, layout, components)
  graphics.js             SVG icon/illustration library
  content.js               Shared builders + Home/About/Solutions content
  content2.js             Fire Safety / Security / Service / Products catalogue
  content3.js               Training, Fire Marshals Club, Industries, Resources, Contact, forms
  content4.js               Home hero rewrite, storytelling sections, partner marquee, fire-class matrix
  content5.js                12 product category detail pages
  app.js                   Router, navigation, interactions, forms
  img/                      Photography
  video/                    Hero and ambient video
  logos/                    Partner logos
  kadala-logo.png / kadala-logo-light.png   Brand marks
```

## Running locally

This is a static site , any local web server works. From this folder:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser. (Opening `index.html` directly via `file://` will not work correctly because the router and fetch-based assets expect an HTTP origin.)

## Publishing to GitHub Pages

1. Create a new GitHub repository and push this folder's contents to its default branch (e.g. `main`):

   ```bash
   git init
   git add .
   git commit -m "Initial commit: KFSEA website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```

2. In the repository, go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source** to "Deploy from a branch", branch `main`, folder `/ (root)`.
4. Save. GitHub will publish the site at `https://<your-username>.github.io/<your-repo>/`.

No build step, CI configuration, or dependencies are required. The repository is ready to deploy as-is.

## Hero

The hero runs two clips in sequence rather than looping one. Each clip sits in its own
`<video>` layer so the change between them is a crossfade, not a black frame, and the second
clip only begins downloading once the first is about two and a half seconds in, which keeps
the opening payload small. Both layers respect reduced motion and Save-Data, where the poster
image carries the hero on its own.

## Responsive behaviour

The site is built mobile first through a single stylesheet. Verified across 37 routes at 320, 360, 390, 414, 600, 768, 1024, 1180, 1280, 1440, 1560, 1920 and 2560 pixels, and under device emulation for iPhone SE, iPhone 12, iPhone 14 Pro Max, Pixel 5, Galaxy S9+, iPad Mini and iPad Pro: no sideways scrolling, no console errors, no tap target under 32 pixels and no meaningful text under 12 pixels.

Two rules are load bearing and should not be removed:

- `index.html` must keep its `<!doctype html>` and its `<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">`. Without the viewport tag a phone renders the page at 980 pixels and zooms out, which makes every mobile rule in the stylesheet inactive.
- `.matrix-scroll,.table-wrap{position:relative}` keeps the absolutely positioned screen reader labels inside those scroll panels. Without it they escape the panel, stretch the page and make mobile browsers zoom out.

## Notes

- Content accuracy, media provenance, and an itemized list of information still required from the client are tracked separately in the project handover document, not in this repository.
- Do not remove the `#header-mount,#footer-mount{display:contents}` rule in `styles.css`. It is required for correct header and footer rendering.
- If this site is also published as a Claude artifact, that host supplies its own document skeleton, so the copy published there omits the doctype, `<html>`, `<head>` and `<body>` tags that this repository's `index.html` carries.
