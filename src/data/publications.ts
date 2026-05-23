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
  },
  {
    title: "Compressing VAE-Based Out-of-Distribution Detectors for Embedded Deployment",
    authors: "A Bansal, M Yuhas, A Easwaran",
    venue: "IEEE RTCSA 2024",
    year: 2024,
    links: {
      paper: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    },
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
  },
  {
    title: "Classification of EEG Signals for Brain Computer Interfaces: A Machine Learning Approach",
    authors: "A Bansal, C Guan",
    venue: "ICUR 2020 (Monash University & University of Warwick)",
    year: 2020,
    links: {
      paper: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    },
  },
  {
    title: "Neural Network Compression Techniques for Out-of-Distribution Detection",
    authors: "A Bansal",
    venue: "B.Eng Thesis, Nanyang Technological University",
    year: 2022,
    links: {
      paper: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    },
  },
];
