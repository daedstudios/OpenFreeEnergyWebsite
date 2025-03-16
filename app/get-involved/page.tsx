"use client";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
export default function GetInvolved() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="container mx-auto px-4 py-12 max-w-4xl mt-40"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.header className="mb-10" variants={itemVariants}>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Getting Involved
        </h1>
        <p className="text-xl text-gray-600">Get in touch!</p>
      </motion.header>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Joining the Consortium
        </h2>
        <motion.p className="mb-6 text-gray-700" variants={itemVariants}>
          If your company is interested in open-source tools for biomolecular
          simulation, and would benefit from having free tools for free energy
          calculations, please consider funding the project and joining the
          consortium.
        </motion.p>

        <motion.h3
          className="text-xl font-semibold mb-4"
          variants={itemVariants}
        >
          Consortium members benefit from:
        </motion.h3>
        <motion.ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
          {[
            "Dedicated private support and training",
            "Prioritised feature requests",
            "Participation of your company's scientist in our regular meetings",
            "Accelerating the development of the next generation of tools",
            "Ensuring the ongoing maintenance of key software",
          ].map((item, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {item}
            </motion.li>
          ))}
        </motion.ul>

        <motion.p className="mb-2 text-gray-700" variants={itemVariants}>
          All contributions are made via our non-profit host organisation{" "}
          <motion.a
            href="https://www.omsf.io"
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            The Open Molecular Software Foundation
          </motion.a>
        </motion.p>
        <Card className="flex flex-col justify-center items-center bg-[#31394D] text-background">
          <p>Hosted By</p>
          <Image
            src="/open-molecular.svg"
            alt="Open Molecular Logo"
            width={200}
            height={160}
          />
          <p>Open Molecular Software Foundation.</p>
        </Card>
      </motion.section>

      <motion.section
        className="mb-12"
        variants={itemVariants}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-2">
          Collaborations
        </h2>
        <motion.p
          className="text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          We are also actively seeking academic collaborations in the free
          energy space, please get in touch at{" "}
          <motion.a
            href="mailto:OpenFreeEnergy@omsf.io"
            className="text-blue-600 hover:text-blue-800 hover:underline"
            whileHover={{ scale: 1.05 }}
          >
            OpenFreeEnergy@omsf.io
          </motion.a>
          .
        </motion.p>
      </motion.section>
    </motion.div>
  );
}
