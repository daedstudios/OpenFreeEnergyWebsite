import TeamCard from "@/components/TeamCard/TeamCard";
import { team_data } from "@/TextStructure/TeamPage/Team";
import React from "react";

const page = () => {
  return (
    <>
      <h1 className="text-4xl text-center mt-40">Our Team</h1>
      <h2 className="text-2xl text-center mt-4">
        We&apos;ve assembled a team of talented developers with significant
        experience in the realm of computational chemistry.
      </h2>
      <div className="mt-20 flex flex-row flex-wrap justify-center gap-8 px-16">
        {[...team_data]
          .sort((a, b) => a.order - b.order)
          .map((member, index) => (
            <TeamCard
              key={index}
              name={member.name}
              position={member.position}
              affiliation={member.affiliation}
              image_path={member.image_path}
              github={member.github}
              scholar={member.scholar}
              blurb={member.blurb}
              order={member.order}
            />
          ))}
      </div>
    </>
  );
};

export default page;
