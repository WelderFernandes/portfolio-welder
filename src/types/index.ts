export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  /** Rótulo curto exibido no card (ex.: "Web · Gestão pública") */
  kind: string;
  projectUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  /** Nome curto usado em "Onde usei" e na linha do tempo */
  shortCompany: string;
  position: string;
  period: string;
  startYear: number;
  /** Rótulo mono da linha do tempo (ex.: "Fullstack") */
  tag: string;
  description: string;
  technologies: string[];
}

export type SkillCategory = "frontend" | "backend" | "database" | "tools";
export type SkillLevel = "beginner" | "intermediate" | "advanced" | "expert";

export interface Skill {
  name: string;
  category: SkillCategory;
  level: SkillLevel;
}
