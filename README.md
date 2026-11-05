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

Both installer downloads are hosted on Cloudflare R2 and configured in `src/app/page.tsx`. To publish a new release, update both hosted URLs and the displayed version there.
