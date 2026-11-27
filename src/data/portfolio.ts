import { Project, Experience, Skill, SkillCategory, SkillLevel } from "@/types";

export const personalInfo = {
  name: "Welder Nascimento Fernandes",
  firstName: "Welder",
  /** Palavra grande do hero e do rodapé */
  brand: "WELDER",
  title: "Desenvolvedor Fullstack",
  tagline: "Soluções web modernas e eficientes.",
  headlineStack: "React · Node.js · TypeScript · React Native",
  description:
    "Desenvolvedor apaixonado por tecnologia com experiência em React, Node.js e desenvolvimento mobile. Especializado em criar soluções web modernas e eficientes.",
  about: [
    "Sou um desenvolvedor fullstack com experiência sólida em tecnologias modernas como React, Node.js, TypeScript e desenvolvimento mobile com React Native. Atualmente trabalho na Prefeitura Municipal de Cariacica, onde desenvolvo e mantenho sistemas web para gestão municipal.",
    "Minha paixão pela tecnologia me leva a estar sempre aprendendo e explorando novas ferramentas e frameworks. Acredito que a tecnologia deve ser usada para resolver problemas reais e melhorar a vida das pessoas.",
    "Tenho experiência tanto no desenvolvimento frontend, criando interfaces modernas e responsivas, quanto no backend, construindo APIs robustas e escaláveis. Também trabalho com bancos de dados relacionais e tenho conhecimento em DevOps e deploy de aplicações.",
  ],
  email: "welderx3@gmail.com",
  linkedin: "https://www.linkedin.com/in/welder-n-fernandes",
  linkedinHandle: "welder-n-fernandes",
  github: "https://github.com/WelderFernandes",
  githubUser: "WelderFernandes",
  location: "Cariacica, Espírito Santo, Brasil",
  locationShort: "Cariacica · ES",
};

export const stats = [
  { value: 6, suffix: "+", label: "Anos de experiência", short: "Anos de exp." },
  { value: 15, suffix: "+", label: "Projetos concluídos", short: "Projetos" },
  { value: 10, suffix: "+", label: "Tecnologias", short: "Tecnologias" },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestão Municipal",
    kind: "Web · Gestão pública",
    description:
      "Sistema completo para gestão de processos municipais desenvolvido com React, Node.js e PostgreSQL. Inclui módulos para protocolo, recursos humanos e controle financeiro.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/gestao-municipal.svg",
    featured: true,
  },
  {
    id: "2",
    title: "App Mobile de Delivery",
    kind: "Mobile · Delivery",
    description:
      "Aplicativo mobile para delivery de comida desenvolvido com React Native e Expo. Backend em Node.js com Nest.js e banco PostgreSQL.",
    technologies: ["React Native", "Expo", "Node.js", "Nest.js", "PostgreSQL"],
    imageUrl: "/projects/delivery-app.svg",
    featured: true,
  },
  {
    id: "3",
    title: "Dashboard Analytics",
    kind: "Web · Dados",
    description:
      "Dashboard para análise de dados com gráficos interativos. Desenvolvido com React, TypeScript e integração com APIs REST.",
    technologies: ["React", "TypeScript", "Chart.js", "Material UI", "REST API"],
    imageUrl: "/projects/analytics.svg",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Prefeitura Municipal de Cariacica",
    shortCompany: "Prefeitura de Cariacica",
    position: "Desenvolvedor Fullstack",
    period: "2022 — Presente",
    startYear: 2022,
    tag: "Fullstack",
    description:
      "Desenvolvimento e manutenção de sistemas web para gestão municipal. Responsável por implementar novas funcionalidades e otimizar performance dos sistemas existentes.",
    technologies: ["React", "Node.js", "PostgreSQL", "TypeScript", "PHP", "Laravel"],
  },
  {
    id: "2",
    company: "UniSales - Centro Universitário Salesiano",
    shortCompany: "UniSales",
    position: "Desenvolvedor Frontend",
    period: "2021 — 2022",
    startYear: 2021,
    tag: "Frontend",
    description:
      "Desenvolvimento de interfaces web responsivas e sistemas acadêmicos. Colaboração em projetos de modernização da infraestrutura tecnológica da instituição.",
    technologies: ["React", "JavaScript", "CSS3", "HTML5", "Bootstrap"],
  },
];

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", category: "frontend", level: "expert" },
  { name: "React Native", category: "frontend", level: "advanced" },
  { name: "TypeScript", category: "frontend", level: "advanced" },
  { name: "JavaScript", category: "frontend", level: "expert" },
  { name: "HTML5", category: "frontend", level: "expert" },
  { name: "CSS3", category: "frontend", level: "expert" },
  { name: "Tailwind CSS", category: "frontend", level: "advanced" },
  { name: "Material UI", category: "frontend", level: "advanced" },
  { name: "Expo", category: "frontend", level: "advanced" },

  // Backend
  { name: "Node.js", category: "backend", level: "advanced" },
  { name: "Nest.js", category: "backend", level: "advanced" },
  { name: "Adonis.js", category: "backend", level: "intermediate" },
  { name: "PHP", category: "backend", level: "advanced" },
  { name: "Laravel", category: "backend", level: "advanced" },

  // Database
  { name: "PostgreSQL", category: "database", level: "advanced" },
  { name: "MySQL", category: "database", level: "advanced" },
  { name: "Prisma ORM", category: "database", level: "intermediate" },
  { name: "TypeORM", category: "database", level: "intermediate" },

  // Tools
  { name: "Git", category: "tools", level: "advanced" },
  { name: "Docker", category: "tools", level: "intermediate" },
  { name: "VS Code", category: "tools", level: "expert" },
  { name: "Figma", category: "tools", level: "intermediate" },
];

export const skillCategories: { id: SkillCategory; label: string }[] = [
  { id: "frontend", label: "Front-end" },
  { id: "backend", label: "Back-end" },
  { id: "database", label: "Banco de dados" },
  { id: "tools", label: "Ferramentas" },
];

export const skillLevels: Record<
  Exclude<SkillLevel, "beginner">,
  { label: string; hint: string; style: "prod" | "proj" | "study" }
> = {
  expert: { label: "Especialista", hint: "domínio completo", style: "prod" },
  advanced: { label: "Avançado", hint: "uso com autonomia", style: "proj" },
  intermediate: { label: "Intermediário", hint: "em evolução", style: "study" },
};
