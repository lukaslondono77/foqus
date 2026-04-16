# GitHub Pages Deployment Guide

## How It Works

This project is configured to work both locally and on GitHub Pages automatically:

### Local Development
- Base path: `/` (root)
- Images: `/images/filename.jpg`
- Manifest: `/manifest.webmanifest`

### GitHub Pages Production
- Base path: `/foqus/` (subdirectory)
- Images: `/foqus/images/filename.jpg`
- Manifest: `/foqus/manifest.webmanifest`

## Deployment Steps

1. **Build for Production**
   ```bash
   npm run build:prod
   ```

2. **Deploy to GitHub Pages**
   - Push your changes to the `main` branch
   - GitHub Pages will automatically build and deploy from the `gh-pages` branch
   - The site will be available at: `https://yourusername.github.io/foqus/`

## File Structure After Build

The production build creates:
```
dist/
├── index.html (with /foqus/ base path)
├── manifest.webmanifest (with /foqus/ paths)
├── assets/ (JS and CSS files)
├── images/ (copied from public/images/)
└── sw.js (service worker)
```

## Automatic Path Handling

The `src/utils/paths.ts` utility automatically handles path differences:
- In development: `getImagePath('logo.jpg')` → `/images/logo.jpg`
- In production: `getImagePath('logo.jpg')` → `/foqus/images/logo.jpg`

## Troubleshooting

If images don't load on GitHub Pages:
1. Check that the `gh-pages` branch contains the `dist/` folder contents
2. Verify GitHub Pages is configured to deploy from the `gh-pages` branch
3. Ensure the repository is public (GitHub Pages doesn't work with private repos on free plans)

## Local Testing

To test the production build locally:
```bash
npm run build:prod
npm run preview
```

This will serve the production build locally so you can verify everything works before deploying. 