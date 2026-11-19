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
    date: "Oct 2026",
    description: "Paper on FALCON for synthetic NL2SQL data generation published at AKBC 2026",
    link: "https://aclanthology.org/2026.akbc-1.6/",
    linkText: "FALCON for synthetic NL2SQL data generation",
    preview: { title: "ACL Anthology", domain: "aclanthology.org", description: "FALCON: A Model and Dataset Agnostic Framework for Synthetic Data Generation for NL2SQL Pairs", favicon: gfav("aclanthology.org") },
  },
  {
    date: "Oct 2026",
    description: "Paper on Skill-based Agentic Evaluation for Real-time Data Science Tasks presented at COLM 2026 Workshop",
    link: "https://arxiv.org/abs/2609.16487",
    linkText: "Skill-based Agentic Evaluation for Real-time Data Science Tasks",
    preview: { title: "arXiv Paper", domain: "arxiv.org", description: "Skill-based Agentic Evaluation for Real-time Data Science Tasks — COLM 2026 Workshop in AI Measurement", favicon: gfav("arxiv.org") },
  },
  {
    date: "Sep 2026",
    description: "Paper on REALMS for real-time exact audience sizing accepted at IEEE ICDM 2026",
    link: "https://arxiv.org/abs/2609.30547",
    linkText: "REALMS for real-time exact audience sizing",
    preview: { title: "arXiv Paper", domain: "arxiv.org", description: "REALMS: An AI-Assistant Conversational System for Real-Time Exact Audience Sizing over High-Dimensional Nested Profiles", favicon: gfav("arxiv.org") },
  },
  {
    date: "Mar 2026",
    description: "Presented Adobe CX Enterprise Coworker and agentic workflows at Adobe Summit 2026",
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7453311224286445568/",
    linkText: "Adobe Summit 2026",
    preview: { title: "Adobe Summit 2026", domain: "linkedin.com", description: "Presented Adobe CX Enterprise Coworker and agentic workflows at Adobe Summit 2026", favicon: gfav("linkedin.com") },
  },
  {
    date: "Mar 2026",
    description: "Invited panelist at the Spartan Analytics x Braven Portfolio Workshop at SJSU",
    link: "https://www.linkedin.com/feed/update/urn:li:ugcPost:7442777233397833728/",
    linkText: "Braven Portfolio Workshop",
    preview: { title: "Braven at SJSU", domain: "linkedin.com", description: "Projects to Profession: Data Analytics Portfolio Workshop in collaboration with Braven at SJSU", favicon: gfav("linkedin.com") },
  },
  {
    date: "Feb 2026",
    description: "Invited industry panelist for the AI4ALL Ignite accelerator program",
    link: "https://www.instagram.com/p/DaiGTS4mjZn/",
    linkText: "AI4ALL Ignite",
    preview: { title: "AI4ALL Ignite Panel", domain: "instagram.com", description: "Industry panel session for students in the AI4ALL Ignite Accelerator program", favicon: gfav("instagram.com") },
  },
  {
    date: "Feb 2026",
    description: "Joined YMCA of San Francisco as Board Member, Urban Philanthropy Board",
    link: "https://www.ymca.org/locations/urban-services-ymca",
    linkText: "YMCA of San Francisco",
    preview: { title: "YMCA of San Francisco", domain: "ymca.org", description: "Urban Services YMCA — community development and youth programs", favicon: gfav("ymca.org") },
  },
  {
    date: "Jan 2026",
    description: "Paper on Human-LLM Collaborative Feature Engineering published at ICLR 2026",
    link: "https://proceedings.iclr.cc/paper_files/paper/2026/file/e0fbc0f2e35e58aeffe5524a69ba90e5-Paper-Conference.pdf",
    linkText: "Human-LLM Collaborative Feature Engineering",
    preview: { title: "ICLR 2026 Proceedings", domain: "iclr.cc", description: "Human-LLM Collaborative Feature Engineering for Tabular Data — Official ICLR 2026 PDF", favicon: gfav("iclr.cc") },
  },
  {
    date: "Apr 2025",
    description: "Work on VAE-Based Out-of-Distribution Detectors featured on Duckietown",
    link: "https://duckietown.com/vae-based-out-of-distribution-detectors-for-embedded-systems/",
    linkText: "featured on Duckietown",
    preview: {
      title: "Duckietown Research Feature",
      domain: "duckietown.com",
      description: "Compressing VAE-based OOD detectors for real-time deployment in Duckietown with pruning, quantization, and knowledge distillation.",
      favicon: gfav("duckietown.com"),
    },
  },
  {
    date: "Apr 2025",
    description: "Served as ACL Industry Track Paper Reviewer (ACL 2025, 2026)",
  },
  {
    date: "Aug 2024",
    description: "Paper on Compressing VAE-Based OOD Detectors accepted at IEEE RTCSA 2024",
    link: "https://www.computer.org/csdl/proceedings-article/rtcsa/2024/879500a037/20IjIKOA1Ko",
    linkText: "Compressing VAE-Based OOD Detectors",
    preview: { title: "IEEE Computer Society (RTCSA 2024)", domain: "computer.org", description: "Compressing VAE-Based Out-of-Distribution Detectors for Embedded Deployment — IEEE RTCSA 2024", favicon: gfav("computer.org") },
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
