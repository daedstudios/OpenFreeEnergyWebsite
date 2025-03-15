import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="relative w-full overflow-hidden min-h-screen bg-foreground flex flex-row items-center justify-between px-20">
      <Image
        src="/background.png"
        fill
        alt="Background pattern"
        className="object-cover z-0"
        priority
      />
      <div className="relative z-10 container mx-auto px-4 py-12 w-[50%] text-background text-3xl">
        The Open Free Energy initiative is dedicated to the development of
        open-source tools for binding free energy calculations to guide
        pharmaceutical drug design and discovery.
      </div>
      <div className="w-[50%] h-full relative">
        <div className="rounded-[53.125rem]  bg-[radial-gradient(50%_50%_at_50%_50%,rgba(153,237,229,0.20)_0%,rgba(178,241,235,0.16)_25.52%,rgba(215,246,243,0.10)_43.23%,rgba(234,249,247,0.07)_82.29%,rgba(251,251,251,0.04)_100%)]  shadow-[0px_0px_20px_2px_#64CCC5] blur-[125px] w-[53rem] h-[53rem]" />
        <Image
          src="/images/molecule.webp"
          fill
          alt="Background pattern"
          priority
          objectFit="contain"
        />
      </div>
    </div>
  );
};

export default HeroSection;
