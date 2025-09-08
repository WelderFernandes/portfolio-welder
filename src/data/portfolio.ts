import { Project, Experience, Skill } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestão Municipal",
    description:
      "Sistema completo para gestão de processos municipais desenvolvido com React, Node.js e PostgreSQL. Inclui módulos para protocolo, recursos humanos e controle financeiro.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "Tailwind CSS",
    ],
    imageUrl: "/images/projeto1.jpg",
    projectUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "2",
    title: "App Mobile de Delivery",
    description:
      "Aplicativo mobile para delivery de comida desenvolvido com React Native e Expo. Backend em Node.js com Nest.js e banco PostgreSQL.",
    technologies: ["React Native", "Expo", "Node.js", "Nest.js", "PostgreSQL"],
    imageUrl: "/images/projeto2.jpg",
    projectUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Dashboard Analytics",
    description:
      "Dashboard para análise de dados com gráficos interativos. Desenvolvido com React, TypeScript e integração com APIs REST.",
    technologies: [
      "React",
      "TypeScript",
      "Chart.js",
      "Material UI",
      "REST API",
    ],
    imageUrl: "/images/projeto3.jpg",
    projectUrl: "#",
    githubUrl: "#",
    featured: true,
  },
];

export const experiences: Experience[] = [
  {
    id: "1",
    company: "Prefeitura Municipal de Cariacica",
    position: "Desenvolvedor Fullstack",
    period: "2022 - Presente",
    description:
      "Desenvolvimento e manutenção de sistemas web para gestão municipal. Responsável por implementar novas funcionalidades e otimizar performance dos sistemas existentes.",
    technologies: [
      "React",
      "Node.js",
      "PostgreSQL",
      "TypeScript",
      "PHP",
      "Laravel",
    ],
  },
  {
    id: "2",
    company: "UniSales - Centro Universitário Salesiano",
    position: "Desenvolvedor Frontend",
    period: "2021 - 2022",
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

export const personalInfo = {
  name: "Welder Nascimento Fernandes",
  title: "Desenvolvedor Fullstack",
  description:
    "Desenvolvedor apaixonado por tecnologia com experiência em React, Node.js e desenvolvimento mobile. Especializado em criar soluções web modernas e eficientes.",
  email: "welderx3@gmail.com",
  linkedin: "https://www.linkedin.com/in/welder-n-fernandes",
  github: "https://github.com/welder-fernandes",
  location: "Cariacica, Espírito Santo, Brasil",
};
