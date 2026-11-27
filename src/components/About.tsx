import Image from "next/image";
import { experiences, personalInfo } from "@/data/portfolio";
import { ScrollWords } from "./Motion";
import { SectionHead } from "./SectionHead";

const css = (v: Record<string, string | number>) => v as React.CSSProperties;

export function About() {
  const [lede, ...more] = personalInfo.about;
  // Linha do tempo em ordem cronológica
  const timeline = [...experiences].sort((a, b) => a.startYear - b.startYear);

  return (
    <section id="about" className="container-site section" aria-labelledby="about-title">
      <SectionHead label="04 — Sobre" meta="Quem escreve o código" />
      <div className="about-grid">
        <div data-reveal-group="">
          <div data-reveal-item="">
            <h2 id="about-title" className="display h2" data-mask="">
              Código que
              <br />
              resolve problemas.
            </h2>
            <ScrollWords className="lede" text={lede} />
            <div className="about-more">
              {more.map((p) => (
                <p key={p.slice(0, 20)}>{p}</p>
              ))}
            </div>
          </div>
          <h3 className="timeline-h mono" data-reveal-item="" style={css({ "--i": 2 })}>
            Linha do tempo
          </h3>
          <ol className="timeline">
            {timeline.map((e, i) => (
              <li key={e.id} data-reveal-item="" style={css({ "--i": 3 + i })}>
                <span className="n mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="y mono">
                  {e.startYear}
                  <span className="m-tag"> · {e.tag}</span>
                </span>
                <span className="t">
                  {e.position} · {e.shortCompany}
                </span>
                <span className="tag mono">{e.tag}</span>
              </li>
            ))}
          </ol>
        </div>
        <figure className="portrait photo" data-reveal="" style={css({ "--i": 2, "--rise": "40px" })}>
          <figcaption className="mono">{personalInfo.locationShort}</figcaption>
          <Image src="/me.jpg" alt={`Foto de ${personalInfo.name}`} fill sizes="(min-width: 768px) 50vw, 100vw" />
        </figure>
      </div>
    </section>
  );
}
