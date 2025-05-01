import Image from 'next/image';
import { JSX } from 'react';

export function Background(): JSX.Element {
  return (
    <div className="film-card__bg" style={{ height: '210px', width: '100%' }}>
      <Image
        src="/img/bg-the-grand-budapest-hotel.jpg"
        alt="The Grand Budapest Hotel"
        fill
        style={{
          objectFit: 'cover',
          zIndex: 0,
        }}
      />
    </div>
  );
}
