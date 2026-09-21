# Kadala Fire and Safety East Africa — Website

A static, multi-page marketing website for Kadala Fire and Safety East Africa Limited (KFSEA). Built with plain HTML, CSS and JavaScript — no framework, no build step, no server-side code required.

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

This is a static site — any local web server works. From this folder:

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

No build step, CI configuration, or dependencies are required — the repository is ready to deploy as-is.

## Notes

- Content accuracy, media provenance, and an itemized list of information still required from the client are tracked separately in the project handover document, not in this repository.
- Do not remove the `#header-mount,#footer-mount{display:contents}` rule in `styles.css` — it is required for correct header/footer rendering.
