'use client';

import { useAppContext } from '@/context/AppContext';
import { usePathname } from 'next/navigation';
import { Fragment } from 'react';
import Navbar from './navbar/Navbar';
import TopNavHeading from './TopNavHeading';

const HeaderWrapper = () => {
  const { showTopNavMarquee } = useAppContext();
  const pathname = usePathname();

  // Hide header on dashboard
  if (pathname.startsWith('/dashboard')) return null;

  return (
    <Fragment>
      {/* <TopNavHeading /> */}
      <Navbar showTopNav={showTopNavMarquee} />
    </Fragment>
  );
};

HeaderWrapper.displayName = 'HeaderWrapper';
export default HeaderWrapper;
