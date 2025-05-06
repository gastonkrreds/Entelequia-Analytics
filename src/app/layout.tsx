import type { Metadata } from 'next';
import { Manrope, Lato } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['300', '400', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Entelequia Analytics',
  description: 'El arte de gobernar con datos.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${manrope.variable} ${lato.variable}`}>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow container mx-auto px-4 py-8">
          {children}
        </main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
