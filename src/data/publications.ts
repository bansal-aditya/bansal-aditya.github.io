export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: number;
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
    title: "Human-LLM Collaborative Feature Engineering for Tabular Data",
    authors: "Z Li, A Bansal, J Li, S He, Z Lu, M Zhang, Q Liu, Y Yang, S Jain, M Yin, et al.",
    venue: "ICLR 2026",
    year: 2026,
    links: {
      paper: "https://arxiv.org/abs/2601.21060",
    },
    preview: { title: "arXiv Preprint", domain: "arxiv.org", description: "Human-LLM Collaborative Feature Engineering for Tabular Data", favicon: gfav("arxiv.org") },
  },
  {
    title: "Compressing VAE-Based Out-of-Distribution Detectors for Embedded Deployment",
    authors: "A Bansal, M Yuhas, A Easwaran",
    venue: "IEEE RTCSA 2024",
    year: 2024,
    links: {
      paper: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    },
    preview: { title: "Google Scholar", domain: "scholar.google.com", description: "Compressing VAE-Based OOD Detectors for Embedded Deployment", favicon: gfav("scholar.google.com") },
  },
  {
    title: "Using Explainable AI Methods to Explain Bias in Brain Age Prediction",
    authors: "A Bansal, C Tushar, C Guan",
    venue: "STCAI 2021 · 3rd Prize Best Paper Award",
    year: 2021,
    links: {
      paper: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
      video: "https://www.youtube.com/watch?v=YLWHUM8X52E&list=PLPuBpVL5aDFuZbYIifwUWmwh1ntBpnvP0&index=3",
    },
    preview: { title: "Google Scholar", domain: "scholar.google.com", description: "Using Explainable AI to explain Bias in Brain Age Prediction", favicon: gfav("scholar.google.com") },
  },
  {
    title: "Classification of EEG Signals for Brain Computer Interfaces: A Machine Learning Approach",
    authors: "A Bansal, C Guan",
    venue: "ICUR 2020 (Monash University & University of Warwick)",
    year: 2020,
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
    links: {
      paper: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    },
    preview: { title: "Google Scholar", domain: "scholar.google.com", description: "Neural Network Compression for OOD Detection — B.Eng Thesis", favicon: gfav("scholar.google.com") },
  },
];
