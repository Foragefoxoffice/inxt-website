'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

const FooterWrapper = () => {
  const pathname = usePathname();

  // Hide footer on dashboard
  if (pathname.startsWith('/dashboard')) return null;

  return <Footer />;
};

FooterWrapper.displayName = 'FooterWrapper';
export default FooterWrapper;
