import 'react-toastify/dist/ReactToastify.css';
import './styles/main.css';

import type { Metadata } from 'next';
import { JSX, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import SvgSprite from '@/components/SvgSprite';
import StoreProvider from '@/providers/StoreProvider';

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

export default function RootLayout({ children }: { children: ReactNode }): JSX.Element {
  return (
    <html lang="en">
      <body>
        <SvgSprite />
        <StoreProvider>
          <main>{children}</main>
        </StoreProvider>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
