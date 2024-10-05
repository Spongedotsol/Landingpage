import React from "react";
import { BentoGridDemo } from "../components/bentobox";
import { TypewriterEffectSmoothDemo } from "../components/Hero";
import { NavbarDemo } from "../components/Navbar";
import { Footer } from "../components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  icons: {
    icon: '/spongenobg.png',
  },
};

const Page = () => {
  return (
    <div>
      <NavbarDemo />
      <TypewriterEffectSmoothDemo />
      <BentoGridDemo />
      <Footer />
    </div>
  );
};

export default Page;
