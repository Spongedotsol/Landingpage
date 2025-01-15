import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import Head from 'next/head';
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

// import './globals.css'
// import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SPONGE',
  description: 'First ETF-like LST'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        若想在整個頁面外層套一圈綠色框，可以使用以下方式：
        border-8 border-[#90B873] p-0 min-h-screen
      */}
      <body className="border-8 border-[#90B873] min-h-screen">
        {children}
      </body>
    </html>
  )
}


// export const metadata: Metadata = {
//   title: "Sponge",
//   description: "The crypto investment market index on Solana",
//   icons: {
//     icon: '/spongenobg.png',
//   },
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" >
//       <body className={inter.className}>
//         <div className="bg-white dark:bg-black">
//           {children}
//         </div>
//       </body>
//     </html>
//   );
// }
