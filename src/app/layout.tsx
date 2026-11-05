import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Darkz OCR Utility — Download',
  description: 'Capture a screen area, read images and PDFs, and copy text instantly with Darkz OCR Utility for Windows.',
  applicationName: 'Darkz OCR Utility',
  icons: { icon: '/icon.svg' },
};

export const viewport: Viewport = {
  themeColor: '#0a100e',
  colorScheme: 'dark',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
