import { GoogleAnalytics } from '@next/third-parties/google';
import { StackProvider } from '@stackframe/stack';
import { Inter } from 'next/font/google';
import type { JSX, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { MEASUREMENT_ID } from '@/constants/googleConstants';
import stackServerApp from '@/lib/stackAuth/server/stackServerApp';

import './globals.css';

export { metadata } from '@/app-config/metadata';
export { viewport } from '@/app-config/viewport';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>): JSX.Element {
  return (
    <html lang="en">
      <body className={`h-dvh ${inter.className}`}>
        <StackProvider app={stackServerApp}>
          {children}
          <ToastContainer position="top-center" theme="colored" />
        </StackProvider>
      </body>
      <GoogleAnalytics gaId={MEASUREMENT_ID} />
    </html>
  );
}
