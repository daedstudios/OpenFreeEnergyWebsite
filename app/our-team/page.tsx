"use client";
import TeamCard from "@/components/TeamCard/TeamCard";
import { team_data } from "@/TextStructure/TeamPage/Team";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <>
      <motion.h1
        className="text-4xl text-center mt-40"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Our Team
      </motion.h1>
      <motion.h2
        className="text-2xl text-center mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        We&apos;ve assembled a team of talented developers with significant
        experience in the realm of computational chemistry.
      </motion.h2>
      <motion.div
        className="mt-20 flex flex-row flex-wrap justify-center gap-8 md:px-16 lg:px-36 xl:px-52"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        {[...team_data]
          .sort((a, b) => a.order - b.order)
          .map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 * index }}
            >
              <TeamCard
                name={member.name}
                position={member.position}
                affiliation={member.affiliation}
                image_path={member.image_path}
                github={member.github}
                scholar={member.scholar}
                blurb={member.blurb}
                order={member.order}
              />
            </motion.div>
          ))}
      </motion.div>
    </>
  );
};

export default page;
