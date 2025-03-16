import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@radix-ui/react-hover-card";
import Link from "next/link";
import { Book } from "lucide-react";
import { Project } from "@/TextStructure/Projects/Projects";

const ProjectCard = ({ name, repo, docs, description }: Project) => {
  const repoUrl = `https://github.com/${repo}`;

  return (
    <Card className="p-0 w-[37rem] h-[29rem] flex flex-col justify-center items-center overflow-hidden">
      <div className="w-full h-2/3 relative">
        <Image
          src={`/images/main/p383a.png`}
          layout="fill"
          objectFit="cover"
          alt={`${name} project`}
        />
      </div>
      <div className="w-full h-1/3 flex flex-col justify-between items-start text-left gap-4 p-2 pt-0">
        <div className="flex flex-row justify-start items-center w-full gap-2">
          <h2 className="text-2xl font-semibold inline-block">{name}</h2>
          <HoverCard>
            <HoverCardTrigger className="translate-y-[2px]">
              <Link href={repoUrl} target="_blank">
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
          {docs && (
            <HoverCard>
              <HoverCardTrigger className="translate-y-[2px]">
                <Link href={docs} target="_blank">
                  <Book size={24} />
                </Link>
              </HoverCardTrigger>
              <HoverCardContent
                align="end"
                className="bg-background border p-1 text-sm rounded-md"
              >
                Docs
              </HoverCardContent>
            </HoverCard>
          )}
        </div>
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </Card>
  );
};

export default ProjectCard;
