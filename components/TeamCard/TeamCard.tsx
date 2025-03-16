import React from "react";
import { Card, CardContent, CardTitle } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Link from "next/link";
import { TeamMember } from "@/TextStructure/TeamPage/Team";

const TeamCard = ({
  name,
  position,
  affiliation,
  image_path,
  github,
  scholar,
  blurb,
}: TeamMember) => {
  return (
    <Card className="p-4 flex-col items-center w-[20rem]">
      <Avatar className="rounded-2xl w-36 h-36 overflow-hidden">
        <AvatarImage src={image_path} />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <CardTitle className="text-center text-2xl font-bold">{name}</CardTitle>
      <CardContent className="text-left p-0 flex flex-col gap-2">
        <p className="w-full text-xl font-semibold ">{position}</p>
        {affiliation && <p className="w-full text-xl ">{affiliation}</p>}
        <div>
          {scholar && (
            <HoverCard>
              <HoverCardTrigger className="mr-1">
                <Link href={scholar} target="_blank">
                  <Image
                    src="/google-scholar.svg"
                    alt="Google Scholar"
                    width={27}
                    height={27}
                    className="inline-block"
                  />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                align="end"
                className="bg-background border p-1 text-sm rounded-md"
              >
                Google Scholar
              </HoverCardContent>
            </HoverCard>
          )}
          <HoverCard>
            <HoverCardTrigger>
              <Link href={github} target="_blank">
                <Image
                  src="/githubdark.svg"
                  alt="github logo"
                  width={24}
                  height={24}
                  className="inline-block"
                />
              </Link>
            </HoverCardTrigger>
            <HoverCardContent
              align="end"
              className="bg-background border p-1 text-sm rounded-md"
            >
              Github
            </HoverCardContent>
          </HoverCard>
        </div>
        <p>{blurb}</p>
      </CardContent>
    </Card>
  );
};

export default TeamCard;
