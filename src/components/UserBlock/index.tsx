'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logoutUser } from '@/store/slices/auth';

export default function UserBlock() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const { user } = useAppSelector((state) => state.auth);

  const handleLogout = async () => {
    await dispatch(logoutUser());
    router.push('/login');
  };

  const isAuth = Boolean(user);
  const name = user?.name || 'User';
  const avatarUrl = 'img/avatar.jpg';

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
            <a href="#" className="user-block__link" onClick={handleLogout}>
              Sign out
            </a>
          </li>
        </>
      ) : (
        <li className="user-block__item">
          <Link href="/login" className="user-block__link">
            Sign in
          </Link>
        </li>
      )}
    </ul>
  );
}
