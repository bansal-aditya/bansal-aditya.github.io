export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
  image?: string;
  citations?: number;
  links: {
    paper?: string;
    code?: string;
    video?: string;
    slides?: string;
  };
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

export const publications: Publication[] = [
  {
    title: "FALCON: A Model and Dataset Agnostic Framework for Synthetic Data Generation for NL2SQL Pairs",
    authors: "D Lee, S Rumsey, J St. Clair, X Tang, A Bansal, Y Shi",
    venue: "AKBC 2026",
    year: 2026,
    image: "/images/publications/falcon.png",
    links: {
      paper: "https://aclanthology.org/2026.akbc-1.6/",
    },
    preview: { title: "ACL Anthology", domain: "aclanthology.org", description: "FALCON: A Model and Dataset Agnostic Framework for Synthetic Data Generation for NL2SQL Pairs", favicon: gfav("aclanthology.org") },
  },
  {
    title: "Skill-based Agentic Evaluation for Real-time Data Science Tasks",
    authors: "A Tamhane, R Addanki, A Aggarwal, A Bansal, R Wang, C Menguy, S Jain",
    venue: "COLM 2026 Workshop",
    year: 2026,
    image: "/images/publications/skillbased.png",
    links: {
      paper: "https://arxiv.org/abs/2609.16487",
    },
    preview: { title: "arXiv Preprint", domain: "arxiv.org", description: "Skill-based Agentic Evaluation for Real-time Data Science Tasks", favicon: gfav("arxiv.org") },
  },
  {
    title: "REALMS: An AI-Assistant Conversational System for Real-Time Exact Audience Sizing over High-Dimensional Nested Profiles",
    authors: "H Ma, A Bansal, S Lohiya, S Ranjan",
    venue: "IEEE ICDM 2026",
    year: 2026,
    image: "/images/publications/realms.png",
    links: {
      paper: "https://arxiv.org/abs/2609.30547",
    },
    preview: { title: "arXiv Preprint", domain: "arxiv.org", description: "REALMS: An AI-Assistant Conversational System for Real-Time Exact Audience Sizing over High-Dimensional Nested Profiles", favicon: gfav("arxiv.org") },
  },
  {
    title: "Human-LLM Collaborative Feature Engineering for Tabular Data",
    authors: "Z Li, A Bansal, J Li, S He, Z Lu, M Zhang, Q Liu, Y Yang, S Jain, M Yin, et al.",
    venue: "ICLR 2026",
    year: 2026,
    image: "/images/publications/humanllm.png",
    links: {
      paper: "https://proceedings.iclr.cc/paper_files/paper/2026/file/e0fbc0f2e35e58aeffe5524a69ba90e5-Paper-Conference.pdf",
    },
    preview: { title: "ICLR 2026 Proceedings", domain: "iclr.cc", description: "Human-LLM Collaborative Feature Engineering for Tabular Data — Official ICLR 2026 PDF", favicon: gfav("iclr.cc") },
  },
  {
    title: "Compressing VAE-Based Out-of-Distribution Detectors for Embedded Deployment",
    authors: "A Bansal, M Yuhas, A Easwaran",
    venue: "IEEE RTCSA 2024",
    year: 2024,
    image: "/images/publications/ood.png",
    links: {
      paper: "https://www.computer.org/csdl/proceedings-article/rtcsa/2024/879500a037/20IjIKOA1Ko",
    },
    preview: { title: "IEEE Computer Society (RTCSA 2024)", domain: "computer.org", description: "Compressing VAE-Based Out-of-Distribution Detectors for Embedded Deployment", favicon: gfav("computer.org") },
  },
  {
    title: "Using Explainable AI Methods to Explain Bias in Brain Age Prediction",
    authors: "A Bansal, C Tushar, C Guan",
    venue: "STCAI 2021 · 3rd Prize Best Paper Award",
    year: 2021,
    image: "/images/publications/brainage.png",
    links: {
      paper: "https://www.youtube.com/watch?v=YLWHUM8X52E&list=PLPuBpVL5aDFuZbYIifwUWmwh1ntBpnvP0&index=3",
      video: "https://www.youtube.com/watch?v=YLWHUM8X52E&list=PLPuBpVL5aDFuZbYIifwUWmwh1ntBpnvP0&index=3",
    },
    preview: { title: "STCAI 2021 Video Presentation", domain: "youtube.com", description: "Using Explainable AI Methods to Explain Bias in Brain Age Prediction", favicon: gfav("youtube.com") },
  },
  {
    title: "Classification of EEG Signals for Brain Computer Interfaces: A Machine Learning Approach",
    authors: "A Bansal, C Guan",
    venue: "ICUR 2020 (Monash University & University of Warwick)",
    year: 2020,
    image: "/images/publications/classification.png",
    links: {
      paper: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    },
    preview: { title: "Google Scholar", domain: "scholar.google.com", description: "Classification of EEG Signals for Brain Computer Interfaces", favicon: gfav("scholar.google.com") },
  },
  {
    title: "Neural Network Compression Techniques for Out-of-Distribution Detection",
    authors: "A Bansal",
    venue: "B.Eng Thesis, Nanyang Technological University",
    year: 2022,
    image: "/images/publications/compression.png",
    links: {
      paper: "https://dr.ntu.edu.sg/entities/publication/0ee44b5a-644a-4371-8daa-b6c9d8f709ca",
    },
    preview: { title: "NTU Digital Repository", domain: "dr.ntu.edu.sg", description: "Neural Network Compression Techniques for Out-of-Distribution Detection — NTU DR", favicon: gfav("ntu.edu.sg") },
  },
];
