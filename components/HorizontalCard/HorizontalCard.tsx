import React from "react";
import { CardContent, CardTitle } from "../ui/card";
import Image from "next/image";

type HorizontalCardProps = {
  heading: string;
  content: string;
  reversed?: boolean;
  image?: string;
};

const HorizontalCard = ({
  heading,
  content,
  reversed,
  image,
}: HorizontalCardProps) => {
  return (
    <div
      className={`rounded-md overflow-hidden border flex ${
        reversed ? "flex-row-reverse" : "flex-row"
      } flex-wrap h-[50rem] md:h-[20rem] min-w-[20rem] py-0 hover:text-background hover:bg-foreground/30 duration-75`}
    >
      <div className="relative h-[20rem] w-[20rem] md:w-[40%]">
        {image && (
          <Image
            src={`/images/main/${image}`}
            alt={""}
            fill
            objectFit="fill"
            className="absolute"
          />
        )}
      </div>
      <div className="w-full md:w-[57%] p-3 flex flex-col justify-center gap-2">
        <CardTitle className="text-2xl">{heading}</CardTitle>
        <CardContent className="px-0 text-xl">{content}</CardContent>
      </div>
    </div>
  );
};

export default HorizontalCard;
