# Zaigham Abbas | Data Scientist Portfolio

Static portfolio website (HTML, CSS and JavaScript only). No build step and no dependencies.

Live site (after you deploy): https://zaighamabbas1234.github.io/

## Deploy on GitHub Pages

1. Sign in to GitHub and create a **public** repository named exactly `Zaighamabbas1234.github.io`.
2. Upload the **contents** of this folder (not the folder itself) to the repository:
   - On the web: open the new repository, choose *Add file > Upload files*, drag in everything (including the `assets` folder and the hidden `.nojekyll` file) and commit.
   - Or from a terminal inside this folder:
     ```
     git init
     git add .
     git commit -m "Add portfolio website"
     git branch -M main
     git remote add origin https://github.com/Zaighamabbas1234/Zaighamabbas1234.github.io.git
     git push -u origin main
     ```
3. In the repository open *Settings > Pages*, set **Source** to *Deploy from a branch*, choose branch `main` and folder `/ (root)`, then save.
4. Wait one or two minutes, then open https://zaighamabbas1234.github.io/

## After it is live

- Submit `https://zaighamabbas1234.github.io/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Add the site link to your LinkedIn and GitHub profiles. This helps search engines and AI assistants find it.
- Check the link preview with the LinkedIn Post Inspector.

## Project structure

```
index.html                    page content, SEO tags and structured data
assets/css/style.css          all styles
assets/js/main.js             animations and interactions
assets/img/profile.webp       your photo
assets/img/og-image.jpg       link-preview image (1200x630)
assets/Zaigham_Abbas_CV.pdf   file used by the Download Resume card
favicon.svg, apple-touch-icon.png
robots.txt, sitemap.xml, llms.txt   search engine and AI crawler files
404.html, .nojekyll           GitHub Pages helpers
```

## Editing

- Change text in `index.html`.
- Replace your CV by overwriting `assets/Zaigham_Abbas_CV.pdf` (keep the file name).
- Preview locally with `python -m http.server` and open http://localhost:8000
- Using a custom domain? Update the domain in `index.html` (canonical, og:url, og:image, structured data), `robots.txt`, `sitemap.xml` and `llms.txt`, and add a `CNAME` file.
