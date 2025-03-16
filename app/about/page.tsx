import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen w-full mt-20 overflow-hidden md:px-16 lg:px-36 xl:px-52">
      <div className="z-[-1] absolute w-screen h-screen scale-50 translate-x-1/4 translate-y-1/4">
        <Image
          src="/images/adelphan.png"
          fill
          alt="Background pattern"
          objectFit="contain"
          priority
        />
      </div>
      <div className="container mx-auto px-4 py-12 z-10">
        <h1 className="text-4xl font-bold mb-6">About Open Free Energy</h1>
        <div className="space-y-6">
          <p className="text-lg">
            Open Free Energy sits at the nexus of academia and industry. Our
            software is designed to be stable, reliable, and thoroughly tested,
            as required by industry, while also providing tools that make it
            easier for academics to develop the new methods that will become the
            next industry standards. We build bridges that enable both academic
            and industrial users to benefit from bleeding edge methods being
            developed by free energy experts.
          </p>

          <p className="text-lg">
            Our work includes developing packages aimed at enhancing
            interoperability of existing software, as well as taking maintenance
            responsibilities for useful existing packages in need of an active
            maintainer. In addition to the packages that are officially part of
            the Open Free Energy portfolio, our team regularly contributes to
            open source projects in the broader ecosystem.
          </p>

          <p className="text-lg">
            The Open Free Energy project is a hosted software project of the
            Open Molecular Software Foundation (OMSF). The Open Free Energy
            Fund, managed by OMSF, receives contributions from industrial
            partners and uses them to support continued work on Open Free
            Energy.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl font-bold mb-4">Industry partners</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <Link
                href="https://www.astrazeneca.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                AstraZeneca
              </Link>
            </li>
            <li>
              <Link
                href="https://www.bayer.com/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Bayer
              </Link>
            </li>
            <li>
              <Link
                href="https://www.boehringer-ingelheim.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Boehringer Ingelheim
              </Link>
            </li>
            <li>
              <Link
                href="https://www.bms.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Bristol Myers Squibb
              </Link>
            </li>
            <li>
              <Link
                href="https://www.confotherapeutics.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Confo Therapeutics
              </Link>
            </li>
            <li>
              <Link
                href="https://www.lilly.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Eli Lilly
              </Link>
            </li>
            <li>
              <Link
                href="https://www.gene.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Genentech, a member of the Roche Group
              </Link>
            </li>
            <li>
              <Link
                href="https://www.gsk.com/en-gb/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                GSK
              </Link>
            </li>
            <li>
              <Link
                href="https://www.janssen.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Janssen Pharmaceutica NV
              </Link>
            </li>
            <li>
              <Link
                href="https://www.merckgroup.com/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Merck KGaA
              </Link>
            </li>
            <li>
              <Link
                href="https://www.pfizer.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                Pfizer
              </Link>
            </li>
            <li>And others...</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
