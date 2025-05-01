import './styles/main.css';

import type { Metadata } from 'next';
import { JSX } from 'react';

import SvgSprite from '@/components/SvgSprite';

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
        <SvgSprite />
        <main>{children}</main>
      </body>
    </html>
  );
}
