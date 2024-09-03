"use client";
import { text } from "body-parser";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Empower",
    },
    {
      text: "irl payments",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "with",
    },
    {
      text: "PayFi.",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base">
      A PayFi lending protocol lets you pay never irl
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <a href="https://a0ngksn2f5g.typeform.com/to/gdRj57UV#walletaddress=xxxxx">
          <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
        </a>
        <a href="https://app.gitbook.com/o/BNuVX7CrXwwVRVfoPJYx/s/fd5B7xCsSSRmyiwROZaJ/">
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Document
          </button>
        </a>
      </div>
    </div>
  );
}
