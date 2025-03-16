import React from "react";
import HorizontalCard from "@/components/HorizontalCard/HorizontalCard";
import { whatwedoText } from "@/TextStructure/HomePage/Homepage";

const WhatWeDo = () => {
  return (
    <div className="flex flex-col justify-center gap-8 w-full  md:px-16 lg:px-36 xl:px-52 py-10">
      <h2 className="text-3xl text-center py-2 font-bold">What We Do</h2>
      {whatwedoText.map((card, index) => (
        <HorizontalCard
          key={index}
          heading={card.heading}
          content={card.content}
          reversed={card.reversed}
          image={card.image}
        />
      ))}
    </div>
  );
};

export default WhatWeDo;
