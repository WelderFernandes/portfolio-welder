import Image from "next/image";
import { projects } from "@/data/portfolio";
import { SectionHead } from "./SectionHead";
import { ArrowUpRight } from "./icons";

const pad = (n: number) => String(n).padStart(2, "0");
const realLink = (u?: string) => (u && u !== "#" ? u : undefined);

export function Projects() {
  const total = projects.length;
  return (
    <section id="projects" className="container-site section" aria-labelledby="projects-title">
      <div data-reveal="">
        <SectionHead label="02 — Projetos" meta={`${pad(total)} projetos em destaque`} />
        <div className="title-row">
          <h2 className="display h2" data-mask="">
            <span id="projects-title">
              Projetos
              <br />
              selecionados.
            </span>
          </h2>
        </div>
      </div>

      <div className={`projects-grid${total === 3 ? " three" : ""}`} data-reveal-group="">
        {projects.map((p, i) => {
          const site = realLink(p.projectUrl);
          const code = realLink(p.githubUrl);
          return (
            <div key={p.id} data-reveal-item="" style={{ "--i": i } as React.CSSProperties}>
              <article className="card">
                <div className="card-media">
                  <Image src={p.imageUrl} alt={`Ilustração do projeto ${p.title}`} fill sizes="(min-width: 768px) 50vw, 100vw" />
                </div>
                <div className="card-body">
                  <div className="card-meta mono">
                    <span className="idx">
                      {pad(i + 1)} / {pad(total)}
                    </span>
                    <span>{p.kind}</span>
                  </div>
                  <h3 className="display">{p.title}</h3>
                  <p>{p.description}</p>
                  <div className="card-foot">
                    <ul>
                      {p.technologies.map((t) => (
                        <li key={t}>
                          <span className="chip mono">{t}</span>
                        </li>
                      ))}
                    </ul>
                    {site ? (
                      <a href={site} target="_blank" rel="noreferrer" className="ext">
                        Ver site <ArrowUpRight />
                        <span className="sr-only"> de {p.title} (abre em nova aba)</span>
                      </a>
                    ) : code ? (
                      <a href={code} target="_blank" rel="noreferrer" className="ext">
                        Ver código <ArrowUpRight />
                        <span className="sr-only"> de {p.title} (abre em nova aba)</span>
                      </a>
                    ) : (
                      <span className="private mono">Case privado</span>
                    )}
                  </div>
                </div>
              </article>
            </div>
          );
        })}
      </div>
    </section>
  );
}
