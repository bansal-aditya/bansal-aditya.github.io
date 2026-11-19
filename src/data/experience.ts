export interface ExperienceItem {
  dateRange: string;
  company: string;
  role: string;
  logo?: string;
  description?: string;
}

export const experience: ExperienceItem[] = [
  {
    dateRange: "2026 — present",
    company: "Google",
    role: "Software Engineer, AI/ML",
    logo: "/images/logos/google.svg",
    description: "Working on the Gemini Agent Platform",
  },
  {
    dateRange: "2024 — 2026",
    company: "Adobe",
    role: "ML Engineer, Enterprise AI",
    logo: "/images/logos/adobe.png",
    description: "Adobe CX Enterprise Coworker — an LLM driven agentic platform for Enterprise Marketing",
  },
  {
    dateRange: "2023",
    company: "Adobe",
    role: "ML Engineer Intern, Intelligent Services",
    logo: "/images/logos/adobe.png",
    description: "Tool-augmented LLM application for API execution and task planning",
  },

  {
    dateRange: "2021",
    company: "IIT Madras",
    role: "ML Researcher",
    logo: "/images/logos/iitm.png",
    description: "Weather and climate forecasting using deep learning techniques",
  },
  {
    dateRange: "2021",
    company: "Dyson",
    role: "ML Research Engineer",
    logo: "/images/logos/dyson.png",
    description: "Short-term time series forecasting for air quality prediction",
  },
  {
    dateRange: "2020 — 2021",
    company: "SAP",
    role: "Software Engineer",
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
    role: "Software Engineer",
    logo: "/images/logos/rivigo.png",
    description: "",
  },
];
