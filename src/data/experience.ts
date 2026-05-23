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
    description: "AI Agent Orchestrator — an LLM driven agentic platform for Enterprise Marketing",
  },
  {
    dateRange: "2023",
    company: "Adobe",
    role: "ML Engineer Intern, Intelligent Services",
    logo: "/images/logos/adobe.png",
    description: "Developed tool-augmented LLM application for API execution and task planning",
  },
  {
    dateRange: "2022 — 2024",
    company: "Carnegie Mellon University",
    role: "M.S. Computational Data Science",
    logo: "/images/logos/cmu.png",
    description: "",
  },
  {
    dateRange: "2021",
    company: "IIT Madras",
    role: "Research Intern",
    logo: "/images/logos/iitm.png",
    description: "Weather and climate forecasting using deep learning techniques",
  },
  {
    dateRange: "2021",
    company: "Dyson",
    role: "ML Engineer (Research)",
    logo: "/images/logos/dyson.png",
    description: "Short-term time series forecasting for air quality prediction",
  },
  {
    dateRange: "2020 — 2021",
    company: "SAP",
    role: "Full-Stack Developer & Software Engineer",
    logo: "/images/logos/sap.png",
    description: "ML recommendation system for enterprise LMS",
  },
  {
    dateRange: "2020",
    company: "Amazon Web Services",
    role: "Student Consultant, NTU PEAK",
    logo: "/images/logos/aws.png",
    description: "NTU PEAK Leadership Program",
  },
  {
    dateRange: "2019",
    company: "Rivigo",
    role: "Software Intern",
    logo: "/images/logos/rivigo.png",
    description: "",
  },
];
