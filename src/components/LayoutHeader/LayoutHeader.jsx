import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { nanoid } from 'nanoid';

import { Box } from 'constants/Box';
import { NavBtn, ListItem } from './LayoutHeader.styled';

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
    <ListItem key={id}>
      <NavBtn to={to} end>
        {text}
      </NavBtn>
    </ListItem>
  ));

  return (
    <Box
      as="header"
      display="grid"
      gridTemplateRow="250px 1fr"
      width="100vw"
      mb={3}
      backgroundColor="muted"
      pt={3}
    >
      <Box display="flex">{navBtns}</Box>
      <Suspense fallback={<div>Loading page...</div>}>
        <Outlet />
      </Suspense>
    </Box>
  );
}
