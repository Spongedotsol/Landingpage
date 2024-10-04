import React from "react";
import Image from 'next/image';
import { cn } from "@/utils/cn";

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
        "grid grid-cols-3 grid-rows-4 gap-4 max-w-7xl mx-auto p-4",
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
        `col-span-${colSpan} row-span-${rowSpan}`,
        "hover:shadow-2xl hover:scale-[1.02] hover:-translate-y-1",
        className
      )}
    >
      {header}
      <div className="p-4">
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
          <div>
            <div>The crypto investment market index on Solana</div>
          </div>
        }
        className="flex items-center justify-center bg-blue-300 hover:bg-blue-400 row-span-1 col-span-1"
      />
      <BentoGridItem
        title="Multi Assets Vault"
        description="Strategic asset allocation"
        className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 row-span-1 col-span-1"
      />
      <BentoGridItem
        title="Multichain Liquidity"
        description="Solana, SVM L2, BTC"
        className="flex items-center justify-center bg-white hover:bg-gray-100 row-span-1 col-span-1"
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
        className="bg-gray-200 hover:bg-gray-300 row-span-1 col-span-1"
      />
      <BentoGridItem
        header={
          <div className="w-full h-full flex items-center justify-center">
            <Image 
              src="/spongewords.png" 
              alt="Sponge" 
              width={400} 
              height={400} 
              objectFit="contain"
            />
          </div>
        }
        className="bg-white hover:bg-gray-100 row-span-1 col-span-1"
      />
      <BentoGridItem
        title="Earn yields from different protocols"
        className="flex items-center justify-center bg-blue-300 hover:bg-blue-400 row-span-1 col-span-1"
      />
      <BentoGridItem
        title="Sponge Pools"
        description="Multi-chain Liquidity Marketplace"
        className="flex items-center justify-center bg-blue-300 hover:bg-blue-400 row-span-1 col-span-1"
      />
      <BentoGridItem
        title="Payfi Integration"
        description="Stake assets, pay irl"
        className="flex items-center justify-center bg-gray-200 hover:bg-gray-300 row-span-1 col-span-2"
      />
      {/* <BentoGridItem
        title="Our investors"
        description={<InvestorLogos />}
        className="bg-white hover:bg-gray-100 row-span-1 col-span-2"
      />
      <BentoGridItem
        title="We need your help to build this future"
        description={<LaunchAppButton />}
        className="bg-white hover:bg-gray-100 row-span-1 col-span-3"
      /> */}
    </BentoGrid>
  );
}


const JoinWaitlistButton = () => (
  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-200">
    Join Waitlist
  </button>
);