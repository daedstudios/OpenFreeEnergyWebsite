import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-20 h-[15rem] flex justify-between items-center border-t-1 overflow-hidden">
      <div className="flex">
        <div className="relative h-[15rem] w-[15rem] animate-spin duration-[20s]">
          <Image src="/images/Squaredcircle.svg" alt="OEF Logo" fill />
        </div>
        <div className="flex flex-col justify-evenly items-start text-5xl font-bold text-left">
          <p>Open</p>
          <p>Free</p>
          <p>Energy</p>
        </div>
      </div>
      <div className="flex flex-row justify-evenly items-center pr-2 gap-6">
        <Image
          src="/githubdark.svg"
          alt="Google Scholar"
          width={60}
          height={60}
          className="inline-block"
        />{" "}
        <Image
          src="/zenodo-icon-blue.svg"
          alt="Google Scholar"
          width={60}
          height={60}
          className="inline-block"
        />{" "}
        <Image
          src="/X_logo.png"
          alt="Google Scholar"
          width={60}
          height={60}
          className="inline-block"
        />
      </div>
    </div>
  );
};

export default Footer;
