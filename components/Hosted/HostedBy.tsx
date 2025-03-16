import React from "react";
import { Card } from "../ui/card";
import Image from "next/image";

const HostedBy = () => {
  return (
    <div className=" md:px-16 lg:px-36 xl:px-52">
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
    </div>
  );
};

export default HostedBy;
