import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sponge",
  description: "The crypto investment market index on Solana",
  icons: {
    icon: '/spongenobg.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <Head>
        <link rel="icon" href="/spongenobg.png" sizes="any" />
      </Head>
      <body className={inter.className}>
        <div className="bg-white dark:bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}
