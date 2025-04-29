import './styles/main.css';

import type { Metadata } from 'next';
import { JSX } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'What to Watch — Next Gen Online Cinema',
  description:
    'Watch the latest movies online in high quality for free. Rate, review, and choose only the best from the world of cinema.',
  openGraph: {
    title: 'What to Watch — Next Gen Online Cinema',
    description:
      'Watch the latest movies online in high quality for free. Rate, review, and choose only the best from the world of cinema.',
    siteName: 'What to Watch',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): JSX.Element {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
