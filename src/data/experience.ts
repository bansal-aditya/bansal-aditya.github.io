export interface ExperienceItem {
  dateRange: string;
  company: string;
  role: string;
}

export const experience: ExperienceItem[] = [
  { dateRange: "2024 — present", company: "Adobe", role: "ML Engineer, AI Agent Orchestrator" },
  { dateRange: "2023", company: "Adobe", role: "ML Engineer Intern, Intelligent Services" },
  { dateRange: "2022 — 2024", company: "Carnegie Mellon University", role: "M.S. Computational Data Science" },
  { dateRange: "2021", company: "IIT Madras", role: "Research Intern" },
  { dateRange: "2021", company: "Dyson", role: "ML Engineer (Research)" },
  { dateRange: "2020 — 2021", company: "SAP", role: "Full-Stack Developer & Software Engineer" },
  { dateRange: "2020", company: "Amazon Web Services", role: "Student Consultant, NTU PEAK" },
  { dateRange: "2019", company: "Rivigo", role: "Software Intern" },
];
