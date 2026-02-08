export type ResourceCategory =
  | "Cloud"
  | "AI & Data"
  | "Developer Tools";

export type SkillLevel = "Beginner" | "Intermediate";

export type ResourceItem = {
  slug: string;
  title: string;
  description: string;
  category: ResourceCategory;
  level: SkillLevel;
  product: string;
  icon_label: string;
  accent: "azure" | "ai" | "dev" | "power" | "security";
  cta_label: string;
  url: string;
  featured: boolean;
  why: string;
  who: string;
  learn: string[];
};

export const resource_categories: ResourceCategory[] = [
  "Cloud",
  "AI & Data",
  "Developer Tools",
];

export const resources: ResourceItem[] = [
  {
    slug: "ai-fundamentals-responsible-ai",
    title: "Introduction to AI in Azure",
    description:
      "Follow the AI-900 course to build a strong foundation in Azure AI concepts.",
    category: "AI & Data",
    level: "Beginner",
    product: "Azure AI",
    icon_label: "AI",
    accent: "ai",
    cta_label: "Open on Microsoft Learn",
    url: "https://learn.microsoft.com/training/courses/ai-900t00?wt.mc_id=studentamb_487799",
    featured: true,
    why: "This course is the official starting point for Azure AI fundamentals.",
    who: "Students preparing for AI-900 or exploring Azure AI for the first time.",
    learn: [
      "Core AI concepts and workloads in Azure",
      "Responsible AI principles",
      "Key Azure AI services and scenarios",
    ],
  },
  {
    slug: "azure-students-free-credit",
    title: "Azure for Students",
    description:
      "Build in the cloud with free Azure credits and student-friendly onboarding.",
    category: "Cloud",
    level: "Beginner",
    product: "Azure",
    icon_label: "AZ",
    accent: "azure",
    cta_label: "Get student access",
    url: "https://azure.microsoft.com/en-us/free/students?wt.mc_id=studentamb_487799",
    featured: true,
    why: "Getting hands-on Azure access is the fastest way to learn by building.",
    who: "Students who want to deploy projects without upfront cloud costs.",
    learn: [
      "Set up an Azure student account",
      "Understand credit limits and usage",
      "Start building cloud projects with guidance",
    ],
  },
  {
    slug: "ai-dev-days-hackathon",
    title: "AI Dev Days Hackathon",
    description:
      "Build AI apps, agents, and secure DevOps solutions with Microsoft experts.",
    category: "Developer Tools",
    level: "Intermediate",
    product: "Microsoft Reactor",
    icon_label: "AD",
    accent: "dev",
    cta_label: "View event details",
    url: "https://developer.microsoft.com/en-us/reactor/events/26647/?wt.mc_id=devcomhomepage_26647_webpage_reactor&wt.mc_id=studentamb_487799",
    featured: true,
    why: "Hackathons accelerate learning through real builds and community support.",
    who: "Students ready to apply AI concepts in a collaborative environment.",
    learn: [
      "Plan and ship an AI prototype",
      "Use secure DevOps practices",
      "Connect with Microsoft developer community mentors",
    ],
  },
  {
    slug: "microsoft-startups-ai",
    title: "Transform Your Startup with AI",
    description:
      "Explore how Microsoft supports AI-driven startups with tooling and guidance.",
    category: "AI & Data",
    level: "Intermediate",
    product: "Microsoft for Startups",
    icon_label: "SU",
    accent: "ai",
    cta_label: "Explore startup resources",
    url: "https://www.microsoft.com/en/startups/ai?wt.mc_id=studentamb_487799",
    featured: true,
    why: "Students building startups can see how to scale AI products responsibly.",
    who: "Founders, builders, and student teams exploring AI ventures.",
    learn: [
      "Startup-ready AI tooling guidance",
      "Program benefits and resources",
      "Paths to scale responsibly",
    ],
  },
  {
    slug: "generative-ai-and-agents",
    title: "Introduction to generative AI and agents",
    description:
      "Learn the fundamentals of generative AI and agent patterns with practical examples on Microsoft Learn.",
    category: "AI & Data",
    level: "Beginner",
    product: "Microsoft Learn",
    icon_label: "GA",
    accent: "ai",
    cta_label: "Open on Microsoft Learn",
    url: "https://learn.microsoft.com/training/modules/fundamentals-generative-ai/?wt.mc_id=studentamb_487799",
    featured: true,
    why: "Covers core generative AI concepts and how agents work — a practical starting point for students.",
    who: "Students exploring generative AI, agents, and prompt engineering.",
    learn: [
      "Core generative AI concepts",
      "Agent patterns and lifecycle",
      "Responsible AI principles and best practices",
    ],
  },
  {
    slug: "microsoft-learn-student-hub-certifications",
    title: "Microsoft Learn Student Hub — Student certifications",
    description:
      "Explore certification paths, exam prep, and student resources to earn Microsoft certifications.",
    category: "Cloud",
    level: "Beginner",
    product: "Microsoft Learn",
    icon_label: "SC",
    accent: "azure",
    cta_label: "Open on Microsoft Learn",
    url: "https://learn.microsoft.com/training/student-hub/certifications?WT.mc_id=academic-88008-leestott&wt.mc_id=studentamb_487799",
    featured: true,
    why: "Central hub to discover certification paths, exam preparation, and student offers.",
    who: "Students preparing for certifications or seeking validated skills and career readiness.",
    learn: [
      "Find role-based certification paths and study plans",
      "Access exam prep resources and practice tests",
      "Discover student discounts, offers, and next steps for career readiness",
    ],
  }
];
