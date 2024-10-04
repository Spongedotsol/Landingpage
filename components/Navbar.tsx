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
        <Image 
          src="/spongenobg.png"
          alt="Sponge Logo"
          width={48}  // 調整寬度以適應您的需求
          height={48} // 調整高度以適應您的需求
          className="mr-2" // 在圖片和文字之間添加一些間距
        />
        <Link href="/">Sponge</Link>
      </div>
      <Link 
          href="/launch-app" 
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300"
        >
          Launch App
        </Link>
      </div>
  );
}