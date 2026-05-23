export interface NewsItem {
  date: string;
  description: string;
  link?: string;
  linkText?: string;
}

export const news: NewsItem[] = [
  {
    date: "Jan 2026",
    description: "Paper on Human-LLM Collaborative Feature Engineering published at ICLR 2026",
    link: "https://arxiv.org/abs/2601.21060",
    linkText: "Human-LLM Collaborative Feature Engineering",
  },
  {
    date: "Feb 2026",
    description: "Joined YMCA of San Francisco as Board Member, Urban Philanthropy Board",
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
  },
  {
    date: "Oct 2024",
    description: "Winner, Cal Hacks @ Berkeley 2024 — Vespa Track",
  },
  {
    date: "Oct 2023",
    description: "1st Prize, CMU HackAuton 2023 — Sustainable AI",
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
  },
  {
    date: "Jun 2021",
    description: "Winner, SAP Cloud Track — iNTUition v7.0 Hackathon",
    link: "https://www.linkedin.com/posts/ntusg_crowdsourcing-artificialintellience-machinelearning-activity-6809832748312866816-Rz0-/",
    linkText: "Winner",
  },
  {
    date: "Nov 2020",
    description: "Finalist, Microsoft AI for Accessibility Hackathon (APAC, 11 countries)",
    link: "https://www.ntu.edu.sg/computing/news-events/news/detail/finalist-in-microsoft-ai-for-accessibility-hackathon",
    linkText: "Finalist",
  },
  {
    date: "Jul 2020",
    description: "Most Promising Leader Award — NTU PEAK Leadership Program",
    link: "https://www.youtube.com/watch?v=g91mpiJ3FEU",
    linkText: "NTU PEAK Leadership Program",
  },
];
