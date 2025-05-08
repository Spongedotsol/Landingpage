'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const images = [
  {
    src: "/landing/brands/brand2.png",
    alt: "Solana",
  },
  {
    src: "/landing/brands/brand3.png",
    alt: "Jito",
  },
  {
    src: "/landing/brands/brand4.png",
    alt: "Superteam",
  },
  {
    src: "/landing/brands/brand5.png",
    alt: "Solana",
  },
  {
    src: "/landing/brands/brand6.png",
    alt: "",
  },
  {
    src: "/landing/brands/brand7.png",
    alt: "",
  },
  {
    src: "/landing/brands/brand8.png",
    alt: "",
  },
  {
    src: "/landing/brands/brand9.png",
    alt: "Gen3",
  },
];

const LandingPage = () => {
  const ref = useRef((null as unknown) as HTMLDivElement);
  
  const [duration, setDuration] = useState(2);
  useEffect(() => {
    let factor = 1;
    if (ref.current) {
      const width = ref.current.clientWidth;
      const pwidth = ref.current.parentElement!.clientWidth;
      factor = (width - (width % pwidth)) / pwidth + 1;
    }
    // 258px的宽度按照2s内阅读完成的 滚动速度
    setDuration(factor * 2);
  }, [])

  return (
    <div className="flex flex-col align-between relative h-screen w-full overflow-hidden pb-10">
      <div
        className="absolute inset-0 bg-[url('/landing/bg.svg')] bg-contain
      rotate-[-15deg] scale-150 z-0"
      />

      <div className="absolute inset-0 bg-white opacity-90 z-10" />

      <div className="grid justify-between relative z-20 w-full h-full">
        <header className="flex items-center px-10 justify-center z-10">
          <div className="flex items-center gap-2 absolute top-10 left-10">
            <Link href='https://x.com/spongedotsol'>
              <p className="text-3xl font-nanum animate-pulse drop-shadow-[0_0_4px_rgba(0, 0, 0,0.8)]">Sponge</p>
            </Link>
            <div className="text-sm">Powered by</div>
            <Image
              src="/landing/hamburger.png"
              alt="menu"
              width={18}
              height={16}
              className="mr-2"
            />
          </div>
          <div className="flex items-center gap-10">
            <Link
              href="https://x.com/spongedotsol"
              className="font-poppins font-semibold transition-transform duration-300 hover:scale-105"
            >
              Product
            </Link>
            <Link
              href="https://x.com/spongedotsol"
              className="font-poppins font-semibold transition-transform duration-300 hover:scale-105"
            >
              About us
            </Link>
            <Link
              href="https://app.spongehq.xyz/"
              className="flex font-poppins font-semibold bg-[url('/landing/launch.png')] bg-cover w-[160px] h-[56px] justify-center items-center transition-transform duration-300 hover:scale-105"
            >
              launch app
            </Link>
          </div>
        </header>
        <section className="flex justify-between relative">
          <div className="grid grid-cols-5 justify-between font-poppins w-[105vw] leading-[0.8] -mx-[2.5vw] text-[444px] font-[900] text-center">
            <span>S</span>
            <span>P</span>
            <span>N</span>
            <span>G</span>
            <span>E</span>
          </div>

          <div className="font-poppins font-[800] text-5xl w-[105vw] absolute top-[120px] left-[-10px] rotate-[-5deg] bg-white uppercase flex items-center py-2" ref={ref} >
            <div className="border-black border-y-4 relative overflow-hidden">
              <div className="animate-marquee tracking-wide">
                Multichain liquidity infrastructure.
                Multichain liquidity infrastructure.
              </div>
            </div>
          </div>
        </section>
        <section className="flex justify-between mx-8">
          <div className="flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="uppercase font-poppins text-5xl font-black leading-none">
                invest in
              </p>
              <p className="uppercase font-poppins text-5xl font-black leading-none">
                crypto
              </p>
              <p
                className="uppercase font-poppins text-5xl text-white font-black leading-none"
                style={{
                  "-webkit-text-stroke": "1px black",
                  color: "white",
                }}
              >
                seamlessly
              </p>
            </div>
            <Link
              href="https://a0ngksn2f5g.typeform.com/to/yGReqBFt"
              className="transition-transform duration-300 hover:scale-105"
            >
              <Image
                src="/landing/join_btn.png"
                alt="Join the wait list"
                width={148}
                height={55}
                className=""
              />
            </Link>
            <div className="grid gap-4">
              <p className="font-nanum text-3xl">Supported by the best: </p>
              <div className="flex items-center gap-2">
                {images.map((image) => (
                  <div key={image.src} className="relative">
                    <Image
                      key={image.src}
                      src={image.src}
                      alt={image.alt}
                      width={41}
                      height={41}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-end gap-8">
            <Image
              src="/landing/mascot.png"
              alt="Mascot"
              width={365}
              height={318}
              className=""
            />
            <div className="grid">
              <div className="font-nanum font-black text-[58px] tracking-wider transition-transform duration-300 hover:scale-105">
                <svg
                  width="54"
                  height="58"
                  viewBox="0 0 54 58"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M53.616 54.0174C53.9947 55.3759 53.2005 56.7842 51.842 57.1629C50.4835 57.5416 49.0752 56.7474 48.6965 55.3889L53.616 54.0174ZM0.636262 9.30326C0.273552 7.94041 1.08433 6.54157 2.44718 6.17886L24.6561 0.268189C26.019 -0.0945214 27.4178 0.716257 27.7805 2.07911C28.1433 3.44196 27.3325 4.84081 25.9696 5.20352L6.22833 10.4574L11.4823 30.1987C11.845 31.5616 11.0342 32.9604 9.67134 33.3231C8.30848 33.6859 6.90964 32.8751 6.54693 31.5122L0.636262 9.30326ZM24.3193 23.8946L1.82341 10.8558L4.38444 6.43724L26.8804 19.476L24.3193 23.8946ZM48.6965 55.3889C44.9947 42.1106 36.2455 30.8071 24.3193 23.8946L26.8804 19.476C39.9604 27.0573 49.556 39.4544 53.616 54.0174L48.6965 55.3889Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="font-nanum rotate-[-15deg] font-black text-[58px] tracking-wider">
                Add liquidity
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
export default LandingPage;
