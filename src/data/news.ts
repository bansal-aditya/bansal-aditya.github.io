export interface NewsItem {
  date: string;
  description: string;
  link?: string;
  linkText?: string;
  thumbnail?: string;
}

function ytThumb(url: string): string | undefined {
  const match = url.match(/(?:v=|\/)([\w-]{11})/);
  return match ? `https://img.youtube.com/vi/${match[1]}/mqdefault.jpg` : undefined;
}

const STCAI_YT = "https://www.youtube.com/watch?v=YLWHUM8X52E&list=PLPuBpVL5aDFuZbYIifwUWmwh1ntBpnvP0&index=3";
const PEAK_YT = "https://www.youtube.com/watch?v=g91mpiJ3FEU";

export const news: NewsItem[] = [
  {
    date: "2026",
    description: "Paper on Human-LLM Collaborative Feature Engineering published at ICLR 2026",
    link: "https://arxiv.org/abs/2601.21060",
    linkText: "Human-LLM Collaborative Feature Engineering",
  },
  {
    date: "2026",
    description: "Joined YMCA of San Francisco as Board Member, Urban Philanthropy Board",
  },
  {
    date: "2025",
    description: "Serving as ACL Industry Track Paper Reviewer (ACL 2025, 2026)",
  },
  {
    date: "2024",
    description: "Paper on Compressing VAE-Based OOD Detectors accepted at IEEE RTCSA 2024",
    link: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    linkText: "Compressing VAE-Based OOD Detectors",
  },
  {
    date: "2024",
    description: "Winner, Cal Hacks @ Berkeley 2024 — Vespa Track",
  },
  {
    date: "2023",
    description: "1st Prize, CMU HackAuton 2023 — Sustainable AI",
  },
  {
    date: "2022",
    description: "Winners, CMU AutoML Decathlon 2022",
  },
  {
    date: "2022",
    description: "NTU President Research Scholar Award for excellence in URECA Research",
  },
  {
    date: "2021",
    description: "3rd Prize Best Paper Award at STCAI 2021 & NTU URECA Research Excellence Award",
    link: STCAI_YT,
    linkText: "STCAI 2021",
    thumbnail: ytThumb(STCAI_YT),
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
    link: PEAK_YT,
    linkText: "NTU PEAK Leadership Program",
    thumbnail: ytThumb(PEAK_YT),
  },
];
