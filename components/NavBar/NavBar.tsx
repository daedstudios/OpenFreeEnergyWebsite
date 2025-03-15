import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="top-0 left-0 fixed w-full h-20 flex flex-row justify-between bg-foreground z-100">
      <Image
        src="/images/Squaredcircle_white_text.svg"
        alt="Open Free Energy"
        width={200}
        height={50}
        className="ml-6"
      />
      <div className="flex items-center space-x-6 mr-6">
        <Link
          href="/about"
          className="text-white hover:text-gray-300 transition-colors"
        >
          About
        </Link>
        <Link
          href="/projects"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Projects
        </Link>
        <Link
          href="/our-team"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Our Team
        </Link>
        <Link
          href="/news"
          className="text-white hover:text-gray-300 transition-colors"
        >
          News
        </Link>
        <Link
          href="/get-involved"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Getting Involved
        </Link>
        <Link
          href="/careers"
          className="text-white hover:text-gray-300 transition-colors"
        >
          Careers
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
