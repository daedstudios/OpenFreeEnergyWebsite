import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { projects_data } from "@/TextStructure/Projects/Projects";
import React from "react";

const page = () => {
  return (
    <div className="mt-40 flex flex-row flex-wrap justify-center gap-8 md:px-16 lg:px-36 xl:px-52">
      <div className="w-full text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Projects</h1>
        <p className="text-lg text-gray-600">
          Open Free Energy develops and maintains several software tools used in
          alchemical free energy calculations.
        </p>
      </div>
      {projects_data.map((project, index) => (
        <ProjectCard
          key={index}
          name={project.name}
          repo={project.repo}
          docs={project.docs}
          description={project.description}
          role={project.role}
          condaInstall={project.condaInstall}
        />
      ))}
    </div>
  );
};

export default page;
