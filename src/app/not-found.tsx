import Link from 'next/link';
import { JSX } from 'react';

export default function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <Link href="/">Return to home page</Link>
    </div>
  );
}
