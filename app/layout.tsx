import type { Metadata } from "next";
import { Inter, Nanum_Pen_Script, Poppins } from "next/font/google";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import "./globals.css";
import { twMerge } from "tailwind-merge";

config.autoAddCss = false

const inter = Inter({ subsets: ["latin"] });

const nanum = Nanum_Pen_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-nanum',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800', '900'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: "Sponge",
  description: "CDP stablecoins on SVM",
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
      <body className={twMerge(inter.className, nanum.variable, poppins.variable)}>
        <div className="bg-white dark:bg-black">
          {children}
        </div>
      </body>
    </html>
  );
}
