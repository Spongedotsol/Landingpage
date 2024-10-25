import React from "react";
import Image from 'next/image';
import { cn } from "@/utils/cn";

const MarqueeText = ({ children }: { children: React.ReactNode }) => (
  <div className="marquee-container overflow-hidden w-full">
    <div className="marquee-content whitespace-nowrap animate-marquee">
      {children}
      <span className="mx-4">•</span>
      {children}
    </div>
  </div>
);

const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-3 sm:grid-rows-4 gap-4 max-w-7xl mx-auto p-4",
        "auto-rows-fr",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  colSpan = 1,
  rowSpan = 1,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  colSpan?: number;
  rowSpan?: number;
}) => {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out",
        `sm:col-span-${colSpan} sm:row-span-${rowSpan}`,
        "hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1",
        "h-full",
        className
      )}
    >
      {header}
      <div className="p-4 h-full flex flex-col justify-center">
        <h3 className="font-bold text-lg mb-2">{title}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
};

export function BentoGridDemo() {
  return (
    <BentoGrid>
      <BentoGridItem
        title={
          <div className="flex justify-between items-start w-full">
            <div className="text-lg font-semibold">The First ETF-Like LST on Solana</div>
          </div>
            }
        className="flex items-center justify-center bg-cyan-300 hover:bg-cyan-400"
      />
<BentoGridItem
  title={
    <div className="flex justify-between items-start w-full">
      <div className="text-sm font-semibold text-white">Strategic Assets Allocation</div>
    </div>
  }
  description={
    <>
      <h3 className="text-2xl font-semibold mb-4 text-white">Sponge Vaults</h3>
    </>
  }
  className="flex items-center justify-center bg-blue-300 hover:bg-blue-400 p-6"
      />
      <BentoGridItem
  title={
    <div className="flex justify-between items-start w-full">
      <div className="text-sm font-semibold text-gray-500">Bridging Liquidity to SVM chains</div>
      <div className="text-sm font-semibold text-gray-500"></div>
    </div>
  }
  description={
    <>
      <div className="mt-auto">
        <MarqueeText>
          <span className="text-2xl font-semibold mb-4 mx-4">Solana</span>
          <span className="text-2xl font-semibold mb-4 mx-4">SVM</span>
          <span className="text-2xl font-semibold mb-4 mx-4">SVM L2s</span>
        </MarqueeText>
      </div>
    </>
  }
  className="flex flex-col justify-between bg-gray-100 hover:bg-gray-200 p-6"
      />
      <BentoGridItem
        header={
          <div className="w-full h-full flex items-center justify-center">
            <Image 
              src="/followx.jpg" 
              alt="followx" 
              width={250} 
              height={250} 
              objectFit="contain"
            />
          </div>
        }
        className="bg-white hover:bg-gray-100"
      />
      <BentoGridItem
        header={
          <div className="w-full h-full flex items-center justify-center">
            <Image 
              src="/spongewordsnobg.png" 
              alt="Sponge" 
              width={500} 
              height={500} 
              objectFit="contain"
            />
          </div>
        }
        className="bg-orange-200 hover:bg-orange-300"
      />
      <BentoGridItem
        title={
          <div className="flex justify-between items-start w-full">
            <div className="text-lg font-semibold">Stake SOL Get Exposure from Bluechips</div>
          </div>
            }
        className="flex items-center justify-center bg-cyan-300 hover:bg-cyan-400"
      />
      <BentoGridItem
        title={
          <div>
            <div className="text-sm font-semibold text-white">SVM Multi-Chains Liquidity Marketplace</div>
          </div>
        }
        description={
          <>
            <h3 className="text-2xl font-semibold mb-4 text-white">Sponge Pools</h3>
          </>
        }
        className="flex items-center justify-center bg-indigo-300 hover:bg-indigo-400"
      />
      <BentoGridItem
        title={
          <div className="flex justify-between items-start w-full">
            <div className="text-lg font-semibold text-gray-500">Stake Assets, Pay IRL</div>
          </div>
            }
            description={
              <>
                <h3 className="text-2xl font-semibold mb-4">Sponge Pay</h3>
              </>
            }
        className="flex items-center justify-center bg-red-200 hover:bg-red-300 sm:col-span-2"
      />
    </BentoGrid>
  );
}

export { BentoGrid, BentoGridItem };