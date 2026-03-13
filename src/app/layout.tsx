import HeaderWrapper from '@/components/shared/HeaderWrapper';
import SmoothScrollProvider from '@/components/shared/SmoothScroll';
import FooterWrapper from '@/components/shared/footer/FooterWrapper';
import { AppContextProvider } from '@/context/AppContext';
import { ModalProvider } from '@/context/ModalContext';
import { interTight } from '@/utils/font';
import { generateMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import { ReactNode, Suspense } from 'react';
import './globals.css';

export const metadata: Metadata = {
  ...generateMetadata(),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${interTight.variable} antialiased`}>
        <AppContextProvider>
          <ModalProvider>
            <Suspense>
              <SmoothScrollProvider>
                <HeaderWrapper />
                
                {children}
                <FooterWrapper />
              </SmoothScrollProvider>
            </Suspense>
          </ModalProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}
