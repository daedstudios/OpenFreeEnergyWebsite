"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import React from "react";

const CareerItem = ({ skill }: { skill: string }) => {
  return (
    <motion.li
      className="mb-2 pl-4 border-l-2 border-teal-500"
      initial={{ opacity: 0, x: -10 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      {skill}
    </motion.li>
  );
};

export default function CareersPage() {
  const skills = [
    "familiarity with alchemical free energy calculations",
    "knowledge of cheminformatics algorithms",
    "experience with Python and software engineering best practices",
    "track record of contributing to open source projects",
    "history of collaborating between different projects",
  ];

  return (
    <div className="mt-40 max-w-4xl mx-auto px-4 py-12">
      <motion.h1
        className="text-4xl font-bold mb-2 text-gray-800"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Careers
      </motion.h1>

      <motion.p
        className="text-xl text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Join us!
      </motion.p>

      <motion.div
        className="bg-gradient-to-r from-teal-50 to-blue-50 p-8 rounded-lg shadow-sm mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <p className="mb-4 text-gray-700">
          The Open Free Energy fund is currently searching for software
          scientists to join our fully remote team. Ideal candidates will be
          expected to have a foundation in molecular simulation and experience
          developing associated software.
        </p>
        <p className="mb-4 text-gray-700">
          One or more of the following would also be beneficial:
        </p>
        <ul className="mb-6 space-y-1">
          {skills.map((skill, index) => (
            <CareerItem key={index} skill={skill} />
          ))}
        </ul>

        <div className="mt-6">
          <Link
            href="https://omsf.io/about/careers/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-medium px-6 py-3 rounded-md transition-colors duration-300 hover:scale-105 transform"
          >
            Visit OMSF Careers Page
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
