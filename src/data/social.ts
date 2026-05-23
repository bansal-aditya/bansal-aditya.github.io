export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export const socialLinks: SocialLink[] = [
  {
    platform: "linkedin",
    url: "https://www.linkedin.com/in/aditya-bansal-10",
    label: "LinkedIn",
  },
  {
    platform: "scholar",
    url: "https://scholar.google.com/citations?user=_5ynCbkAAAAJ&hl=en",
    label: "Google Scholar",
  },
  {
    platform: "github",
    url: "https://github.com/bansal-aditya",
    label: "GitHub",
  },
  {
    platform: "twitter",
    url: "https://twitter.com/_AdityaBansal_",
    label: "Twitter",
  },
  {
    platform: "email",
    url: "mailto:adityabansal10@gmail.com",
    label: "Email",
  },
];
