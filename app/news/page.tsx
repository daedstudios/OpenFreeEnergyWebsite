"use client";
import NewsCard from "@/components/NewsCard/NewsCard";
import { newsItems } from "@/TextStructure/News/News";
import React from "react";
import { motion } from "framer-motion";

const page = () => {
  return (
    <div className="mt-40">
      <div className="container mx-auto px-4 mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
          News
        </h1>
        <motion.p
          className="text-lg md:text-xl text-center mb-10 text-gray-700"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.02 }}
        >
          Keep up with the latest about OpenFreeEnergy.
        </motion.p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-8 md:px-16 lg:px-36 xl:px-52">
        {newsItems.map((newsItem, index) => (
          <NewsCard
            key={index}
            title={newsItem.title}
            categories={newsItem.categories}
            content={newsItem.content}
            links={newsItem.links}
            layout="horizontal"
          />
        ))}
      </div>
    </div>
  );
};

export default page;
