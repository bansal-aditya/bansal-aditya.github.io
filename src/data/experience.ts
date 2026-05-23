export interface ExperienceItem {
  dateRange: string;
  company: string;
  role: string;
  logo?: string;
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    dateRange: "2024 — present",
    company: "Adobe",
    role: "ML Engineer, AI Agent Orchestrator",
    logo: "/images/logos/adobe.png",
    description: "R&D of the Adobe AI Agent Orchestrator — an LLM driven agentic platform for Enterprise Marketing. Developed an AI Assistant for the Adobe Experience Platform.",
  },
  {
    dateRange: "2023",
    company: "Adobe",
    role: "ML Engineer Intern, Intelligent Services",
    logo: "/images/logos/adobe.png",
    description: "Developed tool-augmented LLM application for API execution and task planning. First prize in the Intern Project Showcase.",
  },
  {
    dateRange: "2022 — 2024",
    company: "Carnegie Mellon University",
    role: "M.S. Computational Data Science",
    logo: "/images/logos/cmu.png",
    description: "GPA 4.02/4.00. Research in ML compression, explainable AI, and human-LLM collaboration.",
  },
  {
    dateRange: "2021",
    company: "IIT Madras",
    role: "Research Intern",
    logo: "/images/logos/iitm.png",
    description: "Weather and climate forecasting using deep learning techniques on ERA5 reanalysis data.",
  },
  {
    dateRange: "2021",
    company: "Dyson",
    role: "ML Engineer (Research)",
    logo: "/images/logos/dyson.png",
    description: "Short-term time series forecasting for air quality prediction. Designed a novel correction-based LightGBM model improving accuracy by 2.5%.",
  },
  {
    dateRange: "2020 — 2021",
    company: "SAP",
    role: "Full-Stack Developer & Software Engineer",
    logo: "/images/logos/sap.png",
    description: "ML recommendation system for corporate LMS. Reduced API latency by 55% through multithreading and database optimization.",
  },
  {
    dateRange: "2020",
    company: "Amazon Web Services",
    role: "Student Consultant, NTU PEAK",
    logo: "/images/logos/aws.png",
    description: "Won Best Ideation Award and Most Promising Leader Award in the PEAK Leadership Programme.",
  },
  {
    dateRange: "2019",
    company: "Rivigo",
    role: "Software Intern",
    logo: "/images/logos/rivigo.png",
    description: "Developed backend APIs in GoLang for client authentication and MySQL database integration.",
  },
];
