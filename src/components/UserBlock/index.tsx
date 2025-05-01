import Image from 'next/image';
import Link from 'next/link';

interface UserBlockProps {
  isAuth: boolean;
  name?: string;
  avatarUrl?: string;
}

export default function UserBlock({
  isAuth,
  name = 'User',
  avatarUrl = 'img/avatar.jpg',
}: UserBlockProps) {
  return (
    <ul className="user-block">
      {isAuth ? (
        <>
          <li className="user-block__item">
            <div className="user-block__avatar" title={name}>
              <Image src={`/${avatarUrl}`} alt={`${name} avatar`} width={63} height={63} />
            </div>
          </li>
          <li className="user-block__item">
            <a href="#" className="user-block__link">
              Sign out
            </a>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link href={'/login'} className="user-block__link">
            Sign in
          </Link>
        </li>
      )}
    </ul>
  );
}
