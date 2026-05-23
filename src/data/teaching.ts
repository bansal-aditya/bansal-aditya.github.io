export interface TeachingItem {
  dateRange: string;
  role: string;
  organization: string;
  description: string;
  link?: string;
  linkText?: string;
}

export const teaching: TeachingItem[] = [
  {
    dateRange: "Spring 2026",
    role: "Leadership Coach",
    organization: "San Jose State University (Braven)",
    description: "Coached 10+ SJSU students through Braven's Leadership & Career Accelerator, supporting career readiness and leadership development.",
    link: "https://bebraven.org",
    linkText: "Braven",
  },
  {
    dateRange: "Fall, Spring 2023",
    role: "Graduate AI Mentor (PAIR Program)",
    organization: "Carnegie Mellon University",
    description: "Mentored undergraduate students to pursue AI/ML research through the Paths to AI Research Program, promoting research among underrepresented students.",
    link: "https://sites.google.com/andrew.cmu.edu/ai-mentoring",
    linkText: "PAIR Program",
  },
  {
    dateRange: "Fall 2023",
    role: "Graduate Teaching Assistant — Machine Learning in Practice (05-834)",
    organization: "Carnegie Mellon University, under Prof Carolyn Rose",
    description: "Conducted recitations, homework sessions, office hours, and grading for ~110 students.",
    link: "https://www.hcii.cmu.edu/course/applied-machine-learning",
    linkText: "Course Page",
  },
  {
    dateRange: "Spring 2023",
    role: "Graduate Teaching Assistant — Introduction to Machine Learning (10-601)",
    organization: "Carnegie Mellon University, under Prof Matt Gormley",
    description: "Conducted recitations, homework sessions, office hours, and grading for ~300 students.",
    link: "https://www.cs.cmu.edu/~mgormley/courses/10601/",
    linkText: "Course Page",
  },
  {
    dateRange: "Fall 2023",
    role: "Mathematics Tutor (PLUS Program)",
    organization: "CMU & Stanford",
    description: "Held weekly sessions for ~15 middle school students through a personalized math tutoring program combining human + AI.",
    link: "https://www.tutors.plus/",
    linkText: "PLUS Program",
  },
  {
    dateRange: "Fall 2021",
    role: "Peer Tutor — Algorithm Design & Analysis (CZ-2101)",
    organization: "Nanyang Technological University, under Prof Huang Shell Ying",
    description: "Tutored 15 second-year students to clarify concepts after formal classes.",
  },
];
