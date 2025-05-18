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
    try {
      await dispatch(logoutUser());
      router.push('/login');
    } catch (error) {
      console.error('Logout failed', error);
    }
  };

  const isAuth = Boolean(user);
  const name = user?.name || 'User';
  const avatarUrl = user?.avatar_Url || 'img/avatar.jpg';

  return (
    <ul className="user-block">
      {isAuth ? (
        <>
          <li className="user-block__item">
            <Link href="/mylist" className="user-block__avatar" title={name}>
              <Image src={`/${avatarUrl}`} alt={`${name} avatar`} width={63} height={63} />
            </Link>
          </li>
          <li className="user-block__item">
            <button
              type="button"
              className="user-block__link"
              onClick={handleLogout}
              aria-label="Sign out"
            >
              Sign out
            </button>
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
