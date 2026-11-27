import { experiences } from "@/data/portfolio";
import { ScrollWords } from "./Motion";
import { SectionHead } from "./SectionHead";
import { CheckIcon } from "./icons";

const css = (v: Record<string, string | number>) => v as React.CSSProperties;
const TOPIC_H = 44;
const GAP = 12;
const STEP = TOPIC_H + GAP;

function Topic({ name }: { name: string }) {
  return (
    <div className="topic">
      <span>{name}</span>
      <CheckIcon />
    </div>
  );
}

/** Curvas pontilhadas do centro até cada tecnologia (altura depende de quantas há). */
function Curves({ side, count, height }: { side: "left" | "right"; count: number; height: number }) {
  const mid = height / 2;
  return (
    <svg width={100} height={height} className="curve" aria-hidden="true">
      {Array.from({ length: count }, (_, i) => {
        const y = TOPIC_H / 2 + i * STEP;
        const d = side === "left" ? `M100 ${mid} C50 ${mid} 50 ${y} 0 ${y}` : `M0 ${mid} C50 ${mid} 50 ${y} 100 ${y}`;
        return (
          <path
            key={i}
            d={d}
            fill="none"
            stroke="var(--petrol-2)"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeDasharray="1.5 5"
          />
        );
      })}
    </svg>
  );
}

function Stage({ n, position, company }: { n: number; position: string; company?: string }) {
  return (
    <div className="stage">
      <span className="n mono">{String(n).padStart(2, "0")}</span>
      <h3>{position}</h3>
      {company && <span className="co mono">{company}</span>}
    </div>
  );
}

export function Experience() {
  return (
    <section id="experience" className="container-site section" aria-labelledby="experience-title">
      <div data-reveal="">
        <SectionHead label="05 — Experiência" meta={`${experiences.length} empresas`} />
        <div className="title-row center">
          <h2 id="experience-title" className="display h2" data-mask="">
            Experiência.
          </h2>
          <ScrollWords className="lede" text="Onde trabalhei, o que construí e com quais tecnologias, da mais recente para a primeira." />
        </div>
      </div>

      <div className="xp-body">
        {/* desktop: espinha central */}
        <div className="xp-desk" data-reveal-group="">
          <div className="spine" aria-hidden="true">
            <div data-spine="" />
          </div>
          <ol>
            {experiences.map((e, i) => {
              const half = Math.ceil(e.technologies.length / 2);
              const left = e.technologies.slice(0, half);
              const right = e.technologies.slice(half);
              const height = Math.max(left.length, right.length) * STEP - GAP;
              return (
                <li key={e.id} data-reveal-item="" style={css({ "--i": i })}>
                  <div className="xp-row">
                    <ul>
                      {left.map((t) => (
                        <li key={t}>
                          <Topic name={t} />
                        </li>
                      ))}
                    </ul>
                    <Curves side="left" count={left.length} height={height} />
                    <div className="center" style={{ height }}>
                      <Stage n={i + 1} position={e.position} />
                    </div>
                    <Curves side="right" count={right.length} height={height} />
                    <ul>
                      {right.map((t) => (
                        <li key={t}>
                          <Topic name={t} />
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="xp-note">
                    <p className="when mono">
                      {e.period} · {e.company}
                    </p>
                    <p>{e.description}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>

        {/* mobile: espinha à esquerda */}
        <div className="xp-mob" data-reveal-group="">
          <div className="spine" aria-hidden="true">
            <div data-spine="" />
          </div>
          <ol>
            {experiences.map((e, i) => (
              <li key={e.id} data-reveal-item="" style={css({ "--i": i })}>
                <Stage n={i + 1} position={e.position} />
                <div className="xp-note">
                  <p className="when mono">
                    {e.period} · {e.shortCompany}
                  </p>
                  <p>{e.description}</p>
                </div>
                <ul>
                  {e.technologies.map((t) => (
                    <li key={t}>
                      <span className="tick" aria-hidden="true" />
                      <Topic name={t} />
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
