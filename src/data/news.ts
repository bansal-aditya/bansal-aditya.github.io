export interface NewsItem {
  date: string;
  description: string;
  link?: string;
  linkText?: string;
  preview?: {
    title: string;
    domain: string;
    description: string;
    favicon: string;
  };
}

function gfav(domain: string) {
  return `https://www.google.com/s2/favicons?domain=${domain}&sz=64`;
}

export const news: NewsItem[] = [
  {
    date: "Jan 2026",
    description: "Paper on Human-LLM Collaborative Feature Engineering published at ICLR 2026",
    link: "https://arxiv.org/abs/2601.21060",
    linkText: "Human-LLM Collaborative Feature Engineering",
    preview: { title: "arXiv Paper", domain: "arxiv.org", description: "Human-LLM Collaborative Feature Engineering for Tabular Data", favicon: gfav("arxiv.org") },
  },
  {
    date: "Feb 2026",
    description: "Joined YMCA of San Francisco as Board Member, Urban Philanthropy Board",
    link: "https://www.ymca.org/locations/urban-services-ymca",
    linkText: "YMCA of San Francisco",
    preview: { title: "YMCA of San Francisco", domain: "ymca.org", description: "Urban Services YMCA — community development and youth programs", favicon: gfav("ymca.org") },
  },
  {
    date: "Apr 2025",
    description: "Serving as ACL Industry Track Paper Reviewer (ACL 2025, 2026)",
  },
  {
    date: "Aug 2024",
    description: "Paper on Compressing VAE-Based OOD Detectors accepted at IEEE RTCSA 2024",
    link: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    linkText: "Compressing VAE-Based OOD Detectors",
    preview: { title: "Google Scholar", domain: "scholar.google.com", description: "Compressing VAE-Based OOD Detectors for Embedded Deployment — IEEE RTCSA 2024", favicon: gfav("scholar.google.com") },
  },
  {
    date: "Oct 2024",
    description: "Winner, Cal Hacks @ Berkeley 2024 — Vespa Track",
  },
  {
    date: "Oct 2023",
    description: "1st Prize, CMU HackAuton 2023 — Sustainable AI",
    link: "https://autonlab.org/hackAuton/winners/",
    linkText: "HackAuton 2023",
    preview: { title: "HackAuton Winners", domain: "autonlab.org", description: "CMU Auton Lab Hackathon — 1st Prize in Sustainable AI track", favicon: gfav("autonlab.org") },
  },
  {
    date: "Nov 2022",
    description: "Winners, CMU AutoML Decathlon 2022",
  },
  {
    date: "May 2022",
    description: "NTU President Research Scholar Award for excellence in URECA Research",
  },
  {
    date: "Aug 2021",
    description: "3rd Prize Best Paper Award at STCAI 2021 & NTU URECA Research Excellence Award",
    link: "https://www.youtube.com/watch?v=YLWHUM8X52E&list=PLPuBpVL5aDFuZbYIifwUWmwh1ntBpnvP0&index=3",
    linkText: "STCAI 2021",
    preview: { title: "STCAI 2021 Presentation", domain: "youtube.com", description: "Using AI and Deep Learning to explain Brain Age Prediction Bias", favicon: gfav("youtube.com") },
  },
  {
    date: "Jun 2021",
    description: "Winner, SAP Cloud Track — iNTUition v7.0 Hackathon",
    link: "https://www.linkedin.com/posts/ntusg_crowdsourcing-artificialintellience-machinelearning-activity-6809832748312866816-Rz0-/",
    linkText: "Winner",
    preview: { title: "iNTUition v7.0", domain: "linkedin.com", description: "Winner of SAP Cloud Track — Southeast Asia's largest student hackathon", favicon: gfav("linkedin.com") },
  },
  {
    date: "Nov 2020",
    description: "Finalist, Microsoft AI for Accessibility Hackathon (APAC, 11 countries)",
    link: "https://www.ntu.edu.sg/computing/news-events/news/detail/finalist-in-microsoft-ai-for-accessibility-hackathon",
    linkText: "Finalist",
    preview: { title: "NTU News", domain: "ntu.edu.sg", description: "Finalist in Microsoft AI for Accessibility Hackathon — APAC region", favicon: gfav("ntu.edu.sg") },
  },
  {
    date: "Jul 2020",
    description: "Most Promising Leader Award — NTU PEAK Leadership Program",
    link: "https://www.youtube.com/watch?v=g91mpiJ3FEU",
    linkText: "NTU PEAK Leadership Program",
    preview: { title: "NTU PEAK Program", domain: "youtube.com", description: "NTU PEAK Leadership Programme — accelerated leadership development with industry partners", favicon: gfav("youtube.com") },
  },
];
