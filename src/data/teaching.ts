export interface TeachingItem {
  dateRange: string;
  role: string;
  organization: string;
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

export const teaching: TeachingItem[] = [
  {
    dateRange: "Spring 2026",
    role: "Leadership Coach",
    organization: "San Jose State University (Braven)",
    description: "Coached 10+ SJSU students through Braven's Leadership & Career Accelerator, supporting career readiness and leadership development.",
    link: "https://bebraven.org",
    linkText: "Braven",
    preview: { title: "Braven", domain: "bebraven.org", description: "Leadership & Career Accelerator for underrepresented college students", favicon: gfav("bebraven.org") },
  },
  {
    dateRange: "Fall, Spring 2023",
    role: "Graduate AI Mentor (PAIR Program)",
    organization: "Carnegie Mellon University",
    description: "Mentored undergraduate students to pursue AI/ML research through the Paths to AI Research Program, promoting research among underrepresented students.",
    link: "https://sites.google.com/andrew.cmu.edu/ai-mentoring",
    linkText: "PAIR Program",
    preview: { title: "Paths to AI Research", domain: "andrew.cmu.edu", description: "CMU mentorship program promoting AI research among underrepresented students", favicon: gfav("cmu.edu") },
  },
  {
    dateRange: "Fall 2023",
    role: "Graduate Teaching Assistant — Machine Learning in Practice (05-834)",
    organization: "Carnegie Mellon University, under Prof Carolyn Rose",
    description: "Conducted recitations, homework sessions, office hours, and grading for ~110 students.",
    link: "https://www.hcii.cmu.edu/course/applied-machine-learning",
    linkText: "Course Page",
    preview: { title: "Applied Machine Learning", domain: "hcii.cmu.edu", description: "CMU HCII — Machine Learning in Practice (05-834)", favicon: gfav("cmu.edu") },
  },
  {
    dateRange: "Spring 2023",
    role: "Graduate Teaching Assistant — Introduction to Machine Learning (10-601)",
    organization: "Carnegie Mellon University, under Prof Matt Gormley",
    description: "Conducted recitations, homework sessions, office hours, and grading for ~300 students.",
    link: "https://www.cs.cmu.edu/~mgormley/courses/10601-s23/people.html",
    linkText: "Course Page",
    preview: { title: "Intro to Machine Learning", domain: "cs.cmu.edu", description: "CMU 10-601 — Introduction to Machine Learning, Spring 2023, Prof Matt Gormley", favicon: gfav("cmu.edu") },
  },
  {
    dateRange: "Fall 2023",
    role: "Mathematics Tutor (PLUS Program)",
    organization: "CMU & Stanford",
    description: "Held weekly sessions for ~15 middle school students through a personalized math tutoring program combining human + AI.",
    link: "https://www.tutors.plus/",
    linkText: "PLUS Program",
    preview: { title: "PLUS Tutoring", domain: "tutors.plus", description: "Personalized math tutoring for middle school students — CMU & Stanford collaboration", favicon: gfav("tutors.plus") },
  },
  {
    dateRange: "Fall 2021",
    role: "Peer Tutor — Algorithm Design & Analysis (CZ-2101)",
    organization: "Nanyang Technological University, under Prof Huang Shell Ying",
    description: "Tutored 15 second-year students to clarify concepts after formal classes.",
  },
];
