import { experiences, projects, skillCategories, skillLevels, skills } from "@/data/portfolio";
import { ScrollWords } from "./Motion";
import { SectionHead } from "./SectionHead";
import { StackTabs, type StackCategory } from "./StackTabs";

/** "React.js" e "React" contam como a mesma tecnologia; "Prisma ORM" como "Prisma". */
const norm = (s: string) =>
  s
    .toLowerCase()
    .replace(/\.js$/, "")
    .replace(/\s+orm$/, "")
    .trim();

/** Siglas curtas para o ícone de cada tecnologia */
const ICONS: Record<string, string> = {
  "react.js": "Re",
  "react native": "RN",
  typescript: "TS",
  javascript: "JS",
  html5: "</>",
  css3: "{ }",
  "tailwind css": "Tw",
  "material ui": "MU",
  expo: "Ex",
  "node.js": "Nd",
  "nest.js": "Ns",
  "adonis.js": "Ad",
  php: "php",
  laravel: "Lv",
  postgresql: "Pg",
  mysql: "My",
  "prisma orm": "Pr",
  typeorm: "TO",
  git: "Git",
  docker: "Dk",
  "vs code": "VS",
  figma: "Fg",
};

/** Onde a tecnologia aparece: experiências primeiro, depois projetos. */
function whereUsed(name: string) {
  const n = norm(name);
  const places = [
    ...experiences.filter((e) => e.technologies.some((t) => norm(t) === n)).map((e) => e.shortCompany),
    ...projects.filter((p) => p.technologies.some((t) => norm(t) === n)).map((p) => p.title),
  ];
  return places.slice(0, 2).join(" · ");
}

export function Stack() {
  const categories: StackCategory[] = skillCategories.map((c) => ({
    id: c.id,
    label: c.label,
    items: skills
      .filter((s) => s.category === c.id)
      .map((s) => {
        const level = skillLevels[s.level === "beginner" ? "intermediate" : s.level];
        return {
          icon: ICONS[s.name.toLowerCase()] ?? s.name.slice(0, 2),
          name: s.name,
          style: level.style,
          badge: level.label,
          where: whereUsed(s.name),
        };
      }),
  }));

  const legend = (
    <ul className="legend mono">
      {Object.values(skillLevels).map((l) => (
        <li key={l.label}>
          <span className={`badge ${l.style}`}>{l.label}</span>
          {l.hint}
        </li>
      ))}
    </ul>
  );

  return (
    <section id="stack" className="container-site section" aria-labelledby="stack-title">
      <div data-reveal="">
        <SectionHead label="03 — Stack" meta={`${skills.length} tecnologias`} />
        <div className="title-row">
          <h2 className="display h2" data-mask="">
            <span id="stack-title">
              Ferramentas
              <br />
              que eu uso.
            </span>
          </h2>
          <ScrollWords
            className="lede"
            text="Cada tecnologia mostra o nível de domínio e onde foi usada: nas empresas em que trabalhei e nos meus projetos."
          />
        </div>
      </div>
      <StackTabs categories={categories} legend={legend} />
    </section>
  );
}
