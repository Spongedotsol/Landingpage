import Image from "next/image";
import { Button } from "@/components/ui/button";
import { nanumPen } from "../app/fonts";
import { poppins } from '../app/fonts' // 引入 Poppins


export function Hero() {
  return (
    <div className="relative pt-8 md:pt-16 pb-16 md:pb-24">
      {/* 大標題區：讓文字更大、貼近左右黑框 */}
      <div className="relative px-2 md:px-4">
        {/* 你可以視需求，讓文字略微超出或貼邊 */}
        <h1
          className="
    text-[15rem] /* 修改這裡變大 */
    sm:text-[19rem] /* 修改這裡變大 */
    md:text-[23rem] /* 修改這裡變大 */
    lg:text-[27rem] /* 修改這裡變大 */
    xl:text-[31rem] /* 修改這裡變大 */
    font-black
    leading-none
    tracking-tight
    // 原本就有 -mx-2 md:-mx-4，
    // 可以再往左一點，視覺上更貼邊
      -mx-14 md:-mx-16
  "
        >
          SPNGE
        </h1>
      </div>

      {/* 主要文字 + 圖片區 */}
      <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 px-4 md:px-8">
        {/* 文字文案區 */}
        <div className="crypto-invest-section">
          <h2 className={`${poppins.className} title`}>
            INVEST IN
            <br />
            CRYPTO
            <br />
            <span className={`${nanumPen.className} highlight`}>
              SEAMLESSLY
            </span>
          </h2>
        </div>

        {/* 海綿角色圖示 + 浮動文字 */}
        <div className="flex items-center justify-center">
          {/* Sponge Man 圖片 */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <Image
              src="/spongeMan.png"
              alt="Sponge Man"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>

          {/* 箭頭 + 浮動文字 */}
          <div className="flex flex-col items-center ml-2 md:ml-6">
            {/* 箭頭容器：在上面 */}
            <div className="transform origin-left">
              <Image
                src="/arrow.png"
                alt="arrow"
                width={60}
                height={60}
                style={{ objectFit: "contain" }}
              />
            </div>
            {/* 文字容器：在下面 */}
            <div
              className={`
                transform origin-left rotate-[-12deg] mt-4 md:mt-6
                translate-x-2 md:translate-x-4
              `}
            >
              <p className={`text-2xl md:text-4xl ${nanumPen.className}`}>
                Add liquidity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// export function Hero() {
//   return (
//     // 去掉原本 px-4, max-w-6xl 等限制寬度的 class，僅保留上下內距
//     <div className="relative pt-8 md:pt-16 pb-16 md:pb-24">
//       {/* 大標題區：用負邊距貼齊 OutlineContainer 的左右黑線 */}
//       <div className="relative -mx-6 md:-mx-8">
//         <h1 className="text-[10rem] sm:text-[12rem] md:text-[14rem] lg:text-[16rem] font-black leading-none tracking-tighter">
//           SPNGE
//         </h1>
//       </div>

//       {/* 主要文字 + 圖片區 */}
//       <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
//         {/* 文字文案區 */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-black leading-tight">
//             INVEST IN CRYPTO
//             <br />
//             <span className="text-[#90B873]">SEAMLESSLY</span>
//           </h2>
//           <Button variant="secondary" size="lg" className="mt-6">
//             Join the waitlist
//           </Button>
//         </div>

//         {/* 海綿角色圖示 + 浮動文字 */}

//         <div className="flex items-center justify-center">
//           {/* 左側：Sponge Man 圖片 */}
//           <div className="relative w-64 h-64">
//             <Image
//               src="/spongeMan.png"
//               alt="Sponge Man"
//               width={500}
//               height={500}
//               style={{ objectFit: "contain" }}
//             />
//           </div>

//           {/* 右側：箭頭 + 浮動文字，預設給點間距 */}

//           <div
//             className="
//     flex
//     flex-col       /* 垂直排列 */
//     items-center   /* 水平置中 */
//   "
//           >
//             {/* 箭頭容器：在上面 */}
//             <div
//               className="
//       transform
//       origin-left

//     "
//             >
//               {/* 箭頭 SVG (從右往左繪製) */}
//               <Image
//               src="/arrow.png"
//               alt="arrow"
//               width={50}
//               height={50}
//               style={{ objectFit: "contain" }}
//             />
//             </div>

//             {/* 文字容器：在下面 */}
//             <div
//               className="
//       transform
//       origin-left
//       rotate-[-12deg]   /* 讓文字整體傾斜 -12 度 */
//       mt-8             /* 與箭頭保持一點垂直間距 */
//       translate-x-4    /* 水平右移 1rem，增加一點偏移 */
//     "
//             >
//               <p className={`text-4xl ${nanumPen.className}`}>Add liquidity</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export function Hero() {
//   return (
//     <div className="relative pt-8 md:pt-16 pb-16 md:pb-24">
//       {/* 大標題區：去掉 max-w, mx-auto, px-4 */}
//       <div className="relative">
//         <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter">
//           SPNGE
//         </h1>
//       </div>

//       {/* 主要文字 + 圖片區 */}
//       <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8 px-6 md:px-8">
//         {/* 文案區域 */}
//         <div>
//           <h2 className="text-3xl md:text-4xl font-black leading-tight">
//             INVEST IN CRYPTO
//             <br />
//             <span className="text-[#90B873]">SEAMLESSLY</span>
//           </h2>
//           <Button variant="secondary" size="lg" className="mt-6">
//             Join the waitlist
//           </Button>
//         </div>

//         {/* 海綿角色圖示 + 浮動文字 */}
//         <div className="relative flex-1 flex justify-center">
//           <div className="relative w-64 h-64">
//             <Image
//               src="/spongeMan.png"
//               alt="Sponge Man"
//               width={500}
//               height={500}
//               style={{ objectFit: 'contain' }}
//             />
//             <div className="absolute top-0 right-0 transform translate-x-16 -rotate-12">
//               <p className="font-handwriting text-lg">Add liquidity</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export function Hero() {
//   return (
//     <div className="relative px-4 pt-8 md:pt-16 pb-16 md:pb-24">
//       <div className="max-w-6xl mx-auto">
//         {/* 大標題 */}
//         <div className="relative">
//           <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter">
//             SPNGE
//           </h1>
//         </div>

//         {/* 主要文字 + 圖片區 */}
//         <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
//           {/* 文案區域 */}
//           <div>
//             <h2 className="text-3xl md:text-4xl font-black leading-tight">
//               INVEST IN CRYPTO
//               <br />
//               <span className="text-[#90B873]">SEAMLESSLY</span>
//             </h2>
//             <Button variant="secondary" size="lg" className="mt-6">
//               Join the waitlist
//             </Button>
//           </div>

//           {/* 海綿角色圖示 + 浮動文字 */}
//           <div className="relative flex-1 flex justify-center">
//             <div className="relative w-64 h-64">
//               <Image
//                 src="/spongeMan.png"
//                 alt="Sponge Man"
//                 width={500}
//                 height={500}
//                 style={{ objectFit: 'contain' }}
//               />
//               <div className="absolute top-0 right-0 transform translate-x-16 -rotate-12">
//                 <p className="font-handwriting text-lg">Add liquidity</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export function Hero() {
//   return (
//     <div className="relative px-4 pt-8 md:pt-16 pb-16 md:pb-24">
//       <div className="max-w-6xl mx-auto">
//         <div className="relative">
//           <h1 className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter">
//             SPONGE
//           </h1>
//           <div className="absolute top-1/2 -translate-y-1/2 w-full overflow-hidden rotate-[-4deg]">
//             <div className="bg-black text-white py-2 whitespace-nowrap text-xl font-bold">
//               FIRST ETF-LIKE LST • FIRST ETF-LIKE LST • FIRST ETF-LIKE LST •
//             </div>
//           </div>
//         </div>

//         <div className="mt-8 md:mt-12 flex flex-col md:flex-row items-start md:items-center gap-8">
//           <div>
//             <h2 className="text-3xl md:text-4xl font-black leading-tight">
//               INVEST IN CRYPTO
//               <br />
//               <span className="text-[#90B873]">SEAMLESSLY</span>
//             </h2>
//             <Button variant="secondary" size="lg" className="mt-6">
//               Join the waitlist
//             </Button>
//           </div>

//           <div className="relative flex-1 flex justify-center">
//             <div className="relative w-64 h-64">
//             <Image
//               src="/spongeMan.png"
//               alt="Sponge"
//               width={500}
//               height={500}
//               objectFit="contain"
//             />
//               <div className="absolute top-0 right-0 transform translate-x-16 -rotate-12">
//                 <p className="font-handwriting text-lg">Add liquidity</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// "use client";

// import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
// export function TypewriterEffectSmoothDemo() {
//   const words = [
//     {
//       text: "Invest in crypto",
//     },
//     {
//       text: "Securely, ",
//     },
//     {
//       text: "Effortlessly and ",
//     },
//     {
//       text: "Seamlessly.",
//       className: "text-blue-500 dark:text-blue-500",
//     },
//   ];
//   return (
//     <div className="flex flex-col items-center justify-center h-[40rem]  ">
//       <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
//       An entry point for crypto investments
//       </p>
//       <TypewriterEffectSmooth words={words} />
//       <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
//         <a href="https://a0ngksn2f5g.typeform.com/to/yGReqBFt">
//           <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm
//                      transition duration-300 ease-in-out
//                      hover:bg-opacity-80
//                      active:bg-opacity-60 active:transform active:scale-95">
//             Join the waitlist
//           </button>
//         </a>
//         {/* <a href="">
//         <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
//           Document
//           </button>
//         </a> */}
//       </div>
//     </div>
//   );
// }
