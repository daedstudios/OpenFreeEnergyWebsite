export type Project = {
  name: string;
  repo: string;
  docs?: string;
  condaInstall?: string;
  role: "maintainers" | "developers" | "flagship";
  description: string;
};

export const projects_data: Project[] = [
  {
    name: "cinnabar",
    repo: "OpenFreeEnergy/cinnabar",
    docs: "https://cinnabar.openfree.energy",
    condaInstall: "cinnabar",
    role: "maintainers",
    description:
      "Cinnabar (previously arsenic) is a tool for the analysis and plotting of networks of free energy results. It was originally developed by Hannah Bruce Macdonald while working at the Chodera lab and is now maintained and developed by the Open Free Energy team.",
  },
  {
    name: "gufe",
    repo: "OpenFreeEnergy/gufe",
    docs: "https://gufe.openfree.energy",
    condaInstall: "gufe",
    role: "developers",
    description:
      "Gufe (grand unified free energy) is designed for use by developers of free energy methods. It provides object models for expressing the chemical systems and the alchemical transformations between them (mappings) to form free energy networks. Protocols can then be applied to provide an estimate of the free energy difference between different systems.",
  },
  {
    name: "kartograf",
    repo: "OpenFreeEnergy/kartograf",
    docs: "https://kartograf.openfree.energy",
    condaInstall: "kartograf",
    role: "developers",
    description:
      "Kartograf is a package for creating atom mappings focused on the 3D geometry of input molecules. It was developed by us, to enable users to gain resulting atom mappings for RBFE calculations as close as possible to their input structures.",
  },
  {
    name: "konnektor",
    repo: "OpenFreeEnergy/konnektor",
    docs: "https://konnektor.openfree.energy",
    condaInstall: "konnektor",
    role: "developers",
    description:
      "Konnektor is a package for planning, modifying, and analyzing free energy transformation networks.",
  },
  {
    name: "lomap",
    repo: "OpenFreeEnergy/Lomap",
    docs: "https://lomap.readthedocs.io",
    condaInstall: "lomap2",
    role: "maintainers",
    description:
      "LOMAP is a tool for creating atom mappings between two ligand molecules. It was originally developed by the research lab of David Mobley at University of California, Irvine. Open Free Energy has taken responsibility for developing and maintaining this package.",
  },
  {
    name: "openfe",
    repo: "OpenFreeEnergy/openfe",
    docs: "https://openfe.readthedocs.org",
    condaInstall: "openfe",
    role: "flagship",
    description:
      "This is the flagship product of Open Free Energy. This library contains tools to create, simulate, and analyze networks of alchemical transformations. It also includes a command line interface and interactive visualization tools.",
  },
  {
    name: "pdbinf",
    repo: "OpenFreeEnergy/pdbinf",
    condaInstall: "pdbinf",
    role: "developers",
    description:
      "pdbinf (PDB informatics) is a package to load PDB and PDBx format models into RDKit, while applying bond connectivity and orders from PDBx template files, such as those provided in the Chemical Components Dictionary.",
  },
];
