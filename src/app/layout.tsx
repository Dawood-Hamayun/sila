// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Quicksand, Outfit, Indie_Flower, Comic_Neue } from 'next/font/google';

// Define fonts
const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-outfit',
  display: 'swap',
});

const indieFlower = Indie_Flower({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-indie-flower',
  display: 'swap',
});

const comicNeue = Comic_Neue({
  weight: ['300', '400', '700'],
  subsets: ['latin'],
  variable: '--font-comic-neue',
  display: 'swap',
});

// Define metadata for SEO
export const metadata: Metadata = {
  title: 'SILA School - Free Primary Education for Underprivileged Children',
  description: 'SILA School is an NGO providing free quality primary education to underprivileged children, with ongoing support for students who wish to continue their studies. Join us in empowering children through education.',
  keywords: 'NGO, education, underprivileged children, free education, primary school, child empowerment, education charity',
  openGraph: {
    title: 'SILA School - Empowering Children Through Free Education',
    description: 'SILA School is an NGO providing free quality primary education to underprivileged children, with ongoing support for students who wish to continue their studies.',
    url: 'https://silaschool.org',
    siteName: 'SILA School',
    images: [
      {
        url: '/images/og-sila-children.jpg',
        width: 1200,
        height: 630,
        alt: 'SILA School children learning together',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${quicksand.variable} ${outfit.variable} ${indieFlower.variable} ${comicNeue.variable}`}>
      <body className="min-h-screen font-sans text-neutral-800 bg-neutral-50 antialiased">
        {children}
      </body>
    </html>
  );
}