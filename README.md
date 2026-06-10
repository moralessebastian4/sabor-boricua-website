# Morales Digital CT

A responsive five-page service website for Morales Digital CT, built with React, Vite, Tailwind CSS, and Framer Motion.

## Official links

- Website: [moralesdigitalct.com](https://moralesdigitalct.com)
- GitHub: [moralessebastian4/morales-digital-ct](https://github.com/moralessebastian4/morales-digital-ct)

## Local setup

```bash
npm install
npm run dev
```

Open the local URL shown by Vite.

## Production build

```bash
npm run build
npm run preview
```

The production files are created in `dist/`.

## Deploy to Vercel

This repository is connected to the Vercel project named `morales-digital-ct`.

- Framework preset: `Vite`
- Install command: `npm install`
- Build command: `npm run build`
- Output directory: `dist`
- Root directory: repository root

Pushing to the `main` branch automatically creates a production deployment.

## Easy edits

- Main content and package details: `src/data/siteData.js`
- Page content: `src/pages`
- Shared navigation, footer, FAQ, and cards: `src/components`
- Colors and typography: `tailwind.config.js` and `src/index.css`
- Portfolio images: `public/images`

Business phone, email, and Instagram details are stored in `src/data/contact.js`. The quote form opens the visitor's email app and addresses the request to `sebastianmoralesct@gmail.com`.

## Notes

- Dark mode preference is saved in the browser.
- Portfolio projects are concept demonstrations.
- The site is fully static and does not require environment variables or a backend.
