import { JSX } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

interface MyListLayoutProps {
  children: React.ReactNode;
}

export default function MyListLayout({ children }: MyListLayoutProps): JSX.Element {
  return (
    <>
      <Header pageTitle="My List" showBreadcrumbs={false} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
