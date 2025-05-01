import { JSX } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface FilmLayoutProps {
  children: React.ReactNode;
}

export default function FilmLayout({ children }: FilmLayoutProps): JSX.Element {
  return (
    <>
      <Header pageTitle="Sign In" showBreadcrumbs={false} showUserBlock={false} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
