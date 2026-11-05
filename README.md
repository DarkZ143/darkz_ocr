# Darkz OCR Utility download page

Next.js App Router download page for the Windows x64 installer and portable build.

## Run locally

```powershell
npm.cmd install
npm.cmd run dev
```

Open `http://localhost:3000`.

## Production build

```powershell
npm.cmd run build
npm.cmd start
```

The installer download is hosted on Cloudflare R2 and configured in `src/app/page.tsx`. The portable build is served from `public/downloads/`. To publish a new release, update the hosted installer URL, replace the portable `.exe`, and update the displayed version in `src/app/page.tsx`.
