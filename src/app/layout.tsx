import Image from 'next/image';
import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';
import localFont from '@next/font/local'

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Teste QA',
};

const poppins = localFont({
  src: [
    {
      path: '../../public/fonts/Poppins-Regular.ttf',
      weight: '400'
    },
    {
      path: '../../public/fonts/Poppins-Bold.ttf',
      weight: '700'
    }
  ],
  variable: '--font-poppins'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
        <Head>
          <title>{metadata.title}</title>
        </Head>
      <header>
        <div className="header-container">
          <div className="header-logo">
            <Image
              src="/logo-header.png"
              alt="logo-header"
              width={100}
              height={30}
            />
          </div>
          <nav className="header-nav">
            <span className="header-text">Nossa historia</span>
            <span className="header-text">Produtos</span>
            <span className="header-text">Contato</span>
            <span className="header-text">Blog</span>
          </nav>
        </div>
      </header>
      <body>
        {children}
      </body>
    </>
  );
}
