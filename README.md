# W1F3 Website

The official website source for [W1F3](https://github.com/sambui-Electron/W1F3), built with React, Vite, Tailwind CSS and deployed to GitHub Pages using GitHub Actions.

## Run locally

Requirements: Node.js 20.19+ or 22.12+ and npm.

```bash
npm install
npm run dev
```

Vite prints a local URL (normally `http://localhost:5173`). The first `npm install` creates `package-lock.json`; keep that lockfile committed with future changes. To create and preview a production build:

```bash
npm run build
npm run preview
```

## Deploy with GitHub Pages

1. Create a separate public repository named `W1F3-Website` under the W1F3 GitHub owner.
2. Add the contents of this project to the repository root. Keep `.github/workflows/deploy.yml` in that exact location.
3. Push the files to the `main` branch.
4. In the repository, open **Settings → Pages**.
5. Under **Build and deployment**, set **Source** to **GitHub Actions**.
6. Open the **Actions** tab. The `Deploy website to GitHub Pages` workflow builds the site and publishes the `dist` folder.
7. After the workflow completes, use the Pages URL shown in the workflow summary or in **Settings → Pages**.

The Vite configuration reads `GITHUB_REPOSITORY` during Actions builds and automatically sets the project-site base path. It defaults to `/` when running locally. You can therefore change the website repository name without manually editing asset paths.

## Website content

The main project links are configured near the top of `src/App.jsx`:

```js
const REPO = 'https://github.com/sambui-Electron/W1F3'
const RELEASES = `${REPO}/releases/latest`
const VERSION = 'v0.5.2'
```

When publishing a new W1F3 release, update `VERSION` to match the latest published tag. The download buttons intentionally open the GitHub latest-release page instead of assuming a particular asset filename; users can select the current ZIP, executable, and checksum assets there.

The terminal preview is drawn with HTML and CSS rather than a screenshot, so it remains crisp and responsive. It is an illustrative representation, not a capture of a specific machine's output.

## Project structure

```text
W1F3-Website/
├── .github/workflows/deploy.yml
├── public/favicon.svg
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Theme

The light and dark themes use the Nord palette. The selected theme is saved in local storage; first visit follows the visitor's operating-system preference.
# W1F3-Website
