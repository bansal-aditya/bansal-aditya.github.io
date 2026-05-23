export interface ExperienceItem {
  dateRange: string;
  company: string;
  role: string;
}

export const experience: ExperienceItem[] = [
  { dateRange: "2024 — present", company: "Adobe", role: "ML Engineer, Enterprise AI Agents" },
  { dateRange: "2022 — 2024", company: "Carnegie Mellon University", role: "M.S. Computational Data Science" },
  { dateRange: "2021", company: "IIT Madras", role: "Research Intern" },
  { dateRange: "2021", company: "Dyson", role: "ML Engineer (Research)" },
  { dateRange: "2020 — 2021", company: "SAP", role: "Innovation Labs & AI Services" },
  { dateRange: "2020", company: "Amazon Web Services", role: "Student Consultant, NTU PEAK" },
];
