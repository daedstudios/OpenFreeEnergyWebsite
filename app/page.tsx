import HeroSection from "@/components/HeroSection/HeroSection";
import HostedBy from "@/components/Hosted/HostedBy";
import WhatWeDo from "@/components/WhatWeDo/WhatWeDo";

// import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhatWeDo />
      <HostedBy />
    </>
  );
}
