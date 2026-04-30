import { RootProvider } from 'fumadocs-ui/provider/next';
import type { Metadata } from 'next';
import './global.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

const siteDescription =
  'KovaServe is the Agentic Execution Cloud for neoclouds and private AI environments.';

export const metadata: Metadata = {
  title: {
    default: 'KovaServe Docs',
    template: '%s | KovaServe Docs',
  },
  description: siteDescription,
  metadataBase: new URL('https://docs.kovaserve.com'),
  icons: { icon: '/kf.png' },
  openGraph: {
    type: 'website',
    siteName: 'KovaServe Docs',
    title: 'KovaServe Docs',
    description: siteDescription,
    url: 'https://docs.kovaserve.com',
    images: [{ url: '/kf.png', width: 420, height: 420, alt: 'KovaServe' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KovaServe Docs',
    description: siteDescription,
    images: ['/kf.png'],
  },
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
