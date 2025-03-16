export interface TeamMember {
  name: string;
  position: string;
  affiliation?: string;
  image_path: string;
  github: string;
  scholar?: string;
  blurb: string;
  order: number;
}

export const team_data: TeamMember[] = [
  {
    name: "Alyssa Travitz",
    position: "Senior Research Software Engineer",
    affiliation: "OpenFE Staff",
    image_path: "https://avatars.githubusercontent.com/u/31974495?v=4",
    github: "atravitz",
    scholar: "citations?user=Rm4jcz4AAAAJ&hl=en",
    blurb:
      "Alyssa is an infrastructure-focused software engineer with OpenFE. She completed her Ph.D. in Macromolecular Science & Engineering and Scientific Computing at the University of Michigan where she used molecular dynamics techniques to create mulitscale models of complex fluids. Having developed scientific software in both academic and industry settings, she is passionate about creating robust open-source ecosystems.",
    order: 1,
  },
  {
    name: "David L. Mobley",
    position: "Project Director",
    image_path: "https://faculty.uci.edu/get_image?facultyId=5908",
    github: "davidlmobley",
    scholar: "citations?user=k4Q4JN8AAAAJ&hl=en",
    blurb:
      "David Mobley currently serves as interim Project Directory for the Open Free Energy project. He was a founding TAC member of the project.",
    order: 0,
  },
  {
    name: "David Dotson",
    position: "Core Developer",
    affiliation: "Datryllic",
    image_path: "https://avatars.githubusercontent.com/u/1326811?v=4",
    github: "dotsdl",
    scholar: "citations?hl=en&user=tN3FOxgAAAAJ",
    blurb: "",
    order: 2,
  },
  {
    name: "David W.H. Swenson",
    position: "(Emeritus) Senior Software Scientist",
    image_path: "https://avatars.githubusercontent.com/u/8178546?v=4",
    github: "dwhswenson",
    blurb:
      "David received his Ph.D. in Chemistry from the University of California, Berkeley in 2011, and worked as a postdoc at the University of Amsterdam and the École Normale Supérieure de Lyon. Since 2014, he has been a principal developer for OpenPathSampling. When not coding, he is often creating culinary or cocktail concoctions. During his time at OpenFE, David worked on various parts of our infrastructure including but not limited to; the underlying API (e.g. gufe), the openfe CLI, and a new execution engine (Exorcist).",
    order: 3,
  },
  {
    name: "Hannah Baumann",
    position: "Scientific Software and Method Developer",
    affiliation: "OpenFE Staff",
    image_path:
      "https://avatars.githubusercontent.com/u/43765638?s=400&u=3ed84cd4637bcdbdeca0bf50863d771b0e989710&v=4",
    github: "hannahbaumann",
    scholar: "citations?user=WsgtyHAAAAAJ&hl=en",
    blurb:
      "Hannah is a software developer with Open Free Energy and is hosted by Bayer AG as a visiting scientist. She received her Ph.D. from the University of California Irvine where her research focused on developing methods for binding free energy calculations. In her freetime, Hannah enjoys running along the Spree or hiking and camping in the mountains.",
    order: 1,
  },
  {
    name: "Irfan Alibay",
    position: "Science and Infrastructure Lead",
    affiliation: "OpenFE Staff",
    image_path: "/images/team/IrfanAlibay.jpg",
    github: "IAlibay",
    scholar: "citations?user=te0aWHMAAAAJ&hl=en",
    blurb:
      "Irfan specialises in open source software development and using various molecular dynamics based methods (primarily alchemical) to probe Protein-Ligand interactions. He has been working as Science Lead with OpenFE since 2022, has been acting as interim Infrastructure Lead since May 2024. In his spare time Irfan contributes to other open source projects notably the MDAnalysis library.",
    order: 0,
  },
  {
    name: "Ian Kenney",
    position: "Core Developer",
    affiliation: "Datryllic",
    image_path: "https://avatars.githubusercontent.com/u/7085164?v=4",
    github: "ianmkenney",
    scholar: "citations?hl=en&user=SKI0vH4AAAAJ",
    blurb: "",
    order: 2,
  },
  {
    name: "Iván Pulido",
    position: "Core Developer",
    affiliation: "Chodera Lab, MSKCC",
    image_path: "/images/team/IvanPulido.jpg",
    github: "ijpulidos",
    scholar: "citations?user=lbC8CcQAAAAJ&hl=en",
    blurb: "",
    order: 2,
  },
  {
    name: "James Baggs Eastwood",
    position: "Project Manager",
    affiliation: "OpenFE Staff",
    image_path: "/images/team/JamesEastwood.jpg",
    github: "jameseastwood",
    blurb:
      "James is currently working in a position split between OpenFE and OpenFF. He received his Ph.D. in chemistry from New York University, where he studied the conformations and dynamics of macrocycles and worked on design algorithms for synthetic foldamers. When not at his computer, James can be found playing or tinkering with electronic musical instruments, biking around Manhattan, or introducing a toddler to the wonders of the world.",
    order: 0,
  },
  {
    name: "Josh Horton",
    position: "Software Scientist",
    affiliation: "OpenFE Staff",
    image_path: "/images/team/JoshHorton.jpg",
    github: "jthorton",
    scholar: "citations?user=qmngJQsAAAAJ&hl=en",
    blurb:
      "Josh received his Ph.D from the University of Newcastle in the Cole group. His research focused on developing bespoke atomistic models based on highly accurate quantum chemical calculations to aid in efficient computer-aided drug design and has a track record of encapsulating these workflows in open-source software.",
    order: 1,
  },
  {
    name: "Mike Henry",
    position: "Software Scientist",
    affiliation: "Joint OpenFE Staff and Chodera Lab, MSKCC",
    image_path: "https://avatars.githubusercontent.com/u/11765982?v=4",
    github: "mikemhenry",
    scholar: "citations?user=RgstaoUAAAAJ&hl=en",
    blurb:
      "Mike is a software scientist in the Chodera Lab at Memorial Sloan Kettering Cancer Center in New York City. His time is split between Open Free Energy and maintaining and developing packages part of the OpenMM ecosystem--focusing on free energy methods and machine learning. Mike specializes in scientific developer operations and reproducible scientific workflows using container technology.",
    order: 1,
  },
  {
    name: "Benjamin Ries",
    position:
      "(Emeritus) Software Scientist / Post Doc, OpenFE & Boehringer Ingelheim",
    image_path: "/images/team/BenjaminRies.jpg",
    github: "RiesBen",
    scholar: "citations?hl=en&user=r07_fl4AAAAJ",
    blurb:
      "Benjamin worked with OpenFE through a Post Doc position split between the Open Free Energy consortium and Boehringer Ingelheim in Biberach. He studied Biochemistry and Bioinformatics at the Eberhard-Karls University Tübingen and worked on free energy calculation methods during his PhD at ETH Zurich. His work focused on facilitating the easy and efficient use of FE methods. During his leisure time, Benjamin hikes, bikes, or climbs mountains in his vicinity.",
    order: 3,
  },
];
