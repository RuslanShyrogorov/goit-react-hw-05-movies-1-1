import { Link, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { nanoid } from 'nanoid';

const navItems = [
  {
    id: nanoid(),
    to: '/',
    text: 'home',
  },
  {
    id: nanoid(),
    to: '/movies',
    text: 'movies',
  },
];

export default function LayoutHeader() {
  const navBtns = navItems.map(({ id, to, text }) => (
    <li key={id}>
      <Link to={to}>{text}</Link>
    </li>
  ));

  return (
    <header>
      <ul>{navBtns}</ul>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </header>
  );
}
