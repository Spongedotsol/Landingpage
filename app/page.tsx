import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { OutlineContainer } from '@/components/OutlineContainer'


export default function Home() {
  return (
    <OutlineContainer>
      <Navigation />
      <Hero />
    </OutlineContainer>
  )
}




// import React from "react";
// import { BentoGridDemo } from "../components/bentobox";
// import { TypewriterEffectSmoothDemo } from "../components/Hero";
// import { NavbarDemo } from "../components/Navbar";
// import { Footer } from "../components/footer";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Sponge",
//   description:"Stake SOL, Get Exposure from Bluechips",
//   icons: {
//     icon: '/spongenobg.png',
//   },
// };

// const Page = () => {
//   return (
//     <div>
//       <NavbarDemo />
//       <TypewriterEffectSmoothDemo />
//       <BentoGridDemo />
//       <Footer />
//     </div>
//   );
// };

// export default Page;
