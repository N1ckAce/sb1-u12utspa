import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'NotePad - Premium Note Taking',
  description: 'A premium note-taking application with a Notion-like experience',
  keywords: ['notes', 'note-taking', 'productivity', 'markdown', 'writing'],
  authors: [{ name: 'NotePad Team' }],
  creator: 'NotePad',
  publisher: 'NotePad',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://notepad-app.com'),
  openGraph: {
    title: 'NotePad - Premium Note Taking',
    description: 'A premium note-taking application with a Notion-like experience',
    url: 'https://notepad-app.com',
    siteName: 'NotePad',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NotePad - Premium Note Taking',
    description: 'A premium note-taking application with a Notion-like experience',
    creator: '@notepad_app',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="min-h-screen bg-gray-50">
          {children}
        </div>
        <Toaster />
      </body>
    </html>
  );
}