import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from './Provider';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Slate play',
  description: 'Slate play',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="light">
      <body className={inter.className}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
