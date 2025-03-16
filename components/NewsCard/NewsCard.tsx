import { NewsItem } from "@/TextStructure/News/News";
import React from "react";

const NewsCard = ({ title, categories, content, links }: NewsItem) => {
  return (
    <div className="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden max-w-md">
      <div className="p-6">
        <div className="flex flex-col space-y-2">
          {categories.map((category, index) => (
            <span
              key={index}
              className="text-xs font-medium text-blue-600 uppercase"
            >
              {category}
            </span>
          ))}
          <h3 className="text-xl font-bold tracking-tight">{title}</h3>
        </div>
        <div className="mt-4 text-sm text-muted-foreground line-clamp-3">
          {content}
        </div>
        {categories.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((tag, index) => (
              <span
                key={index}
                className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        {links && (
          <div className="mt-6 flex items-center justify-between">
            <div className="flex space-x-4">
              {links.github && (
                <a
                  href={links.github}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  GitHub
                </a>
              )}
              {links.documentation && (
                <a
                  href={links.documentation}
                  className="text-sm font-medium text-blue-600 hover:underline"
                >
                  Documentation
                </a>
              )}
              {links.other &&
                Object.entries(links.other).map(([label, url], index) => (
                  <a
                    key={index}
                    href={url}
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {label}
                  </a>
                ))}
            </div>
            {links.other?.["Try it out"] && (
              <a
                href={links.other["Try it out"]}
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
              >
                Try it out
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsCard;
