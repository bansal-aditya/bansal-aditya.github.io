export interface NewsItem {
  date: string;
  description: string;
  link?: string;
  linkText?: string;
}

export const news: NewsItem[] = [
  {
    date: "2024",
    description: "Paper on Compressing VAE-Based OOD Detectors accepted at IEEE RTCSA 2024",
    link: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    linkText: "Compressing VAE-Based OOD Detectors",
  },
  {
    date: "2021",
    description: "Presented research on Brain Age Prediction Bias at STCAI 2021",
    link: "https://www.youtube.com/watch?v=YLWHUM8X52E&list=PLPuBpVL5aDFuZbYIifwUWmwh1ntBpnvP0&index=3",
    linkText: "Brain Age Prediction Bias",
  },
  {
    date: "Jun 2021",
    description: "Winner, SAP Cloud Track — iNTUition v7.0 Hackathon",
    link: "https://www.linkedin.com/posts/ntusg_crowdsourcing-artificialintellience-machinelearning-activity-6809832748312866816-Rz0-/",
    linkText: "Winner",
  },
  {
    date: "Nov 2020",
    description: "Finalist, Microsoft AI for Accessibility Hackathon",
    link: "https://www.ntu.edu.sg/computing/news-events/news/detail/finalist-in-microsoft-ai-for-accessibility-hackathon",
    linkText: "Finalist",
  },
  {
    date: "Jul 2020",
    description: "Featured in NTU PEAK Leadership Program",
    link: "https://www.youtube.com/watch?v=g91mpiJ3FEU",
    linkText: "NTU PEAK Leadership Program",
  },
];
