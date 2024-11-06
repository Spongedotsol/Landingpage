"use client";
import React from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";
import Image from "next/image";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div
      className={cn("fixed top-0 inset-x-0 h-16 flex items-center justify-between px-4 md:px-8 z-50", className)}
    >
<div className="text-2xl font-bold flex items-center">
        <Link href="https://x.com/spongedotsol">
          <Image 
            src="/spongeColor.png"
            alt="Sponge Logo"
            width={250}  
            height={250} 
            className="mr-2" 
          />
        </Link>
      </div>
      <Link 
          href="https://app.spongehq.xyz/" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300"
        >
          Launch App
      </Link>
      </div>
  );
}