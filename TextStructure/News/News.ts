export interface NewsItem {
  layout: string;
  title: string;
  categories: string[];
  content: string;
  links?: {
    github?: string;
    documentation?: string;
    other?: Record<string, string>;
  };
  date?: string; // We could add this if actual dates are available
}

export const newsItems: NewsItem[] = [
  {
    layout: "post",
    title: "OpenFE 1.0: Stable release!",
    categories: ["release"],
    content: `We are thrilled to announce the release of OpenFE v1.0, an open source Python package for performing alchemical free energy calculations. OpenFE is the flagship package of the Open Free Energy project, a nonprofit pre-competitive consortium hosted by the Open Molecular Software Foundation (OMSF).

Who is it for? We have a wide user base ranging from academics to industry partners in the pharmaceutical and biotech sectors. Whether you're looking for a simple, ready-to-go workflow to carry out your binding free energy calculations or you're a method developer or a power user who wants full control, OpenFE is your toolbox. It provides you with an environment of interchangeable tools and multiple ways to import your existing data and export results. OpenFE can be used either in Python or through a streamlined CLI.
Let's highlight some current features:

- Relative Binding/Hydration Free Energy Calculations using the Hybrid Topology approach, including the capability of charge changing transformations
- Absolute Hydration Free Energy Calculations
- "Vanilla" Molecular Dynamics (MD) simulations
- Automated setup approaches for the calculations
- Automated analysis of results

And that's not all! OpenFE is constantly evolving. We will continue to implement new features and improve our software. We are always eager to receive feedback from you.
So, let us know what you think! You can try it out in your browser at http://try.openfree.energy. Happy exploring Alchemical Free Energies with OpenFE!`,
    links: {
      github: "https://github.com/OpenFreeEnergy/openfe",
      documentation: "https://docs.openfree.energy/en/stable/",
    },
  },
  {
    layout: "post",
    title: "Lomap 2.0 released on conda-forge",
    categories: ["release"],
    content: `We've released Lomap 2.0 on conda-forge. Lomap is a useful tool for creating atom mappings between two lignand molecules, and we've taken responsibility for maintaining it, since it was no longer actively developed by the academic team that created it (David Mobley's group at University of California, Irvine).

One of our first maintenance tasks has been to make it easier for users to install Lomap. Therefore, we've made it possible to install Lomap using \`conda\`. To distinguish this line from the previous versions of Lomap, we're referring to this package as \`lomap2\`. It can be installed with the command:

\`conda install -c conda-forge lomap2\``,
  },
  {
    layout: "post",
    title: "OpenFE 0.1: Initial pre-release!",
    categories: ["release"],
    content: `We're proud to announce the very first public alpha release of OpenFE! This release focused on developing our model for a network of ligands for alchemical transformation, including identifying which atoms are mutating between ligands as well as visualizing the transformation.

We plan to release as we develop, in order to give the community access to our code as soon as possible, and elicit early feedback.

If you have \`\`conda\`\` installed, you can install OpenFE with the command: \`conda install -c conda-forge openfe\`. You can find more details about this release in the [release notes on GitHub](https://github.com/OpenFreeEnergy/openfe/releases/tag/v0.1).`,
  },
];
