import Image from "next/image";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight } from "./icons";

const css = (v: Record<string, string | number>) => v as React.CSSProperties;

function HeroCard({ className }: { className: string }) {
  return (
    <div className={`glass hero-card ${className}`} data-enter="" style={css({ "--d": 700 })}>
      <span className="eyebrow mono">
        <span>01 — {personalInfo.title}</span>
      </span>
      <p className="title">{personalInfo.tagline}</p>
      <div className="stack-line">{personalInfo.headlineStack}</div>
    </div>
  );
}

function HeroCta() {
  return (
    <>
      <ul className="hero-avail">
        <li>
          <span className="eyebrow mono">
            <span className="dot" />
            <span>Aberto a oportunidades</span>
          </span>
        </li>
      </ul>
      <span className="hero-cta">
        <a href="#projects" className="btn">
          Ver projetos <ArrowRight />
        </a>
      </span>
    </>
  );
}

export function Hero() {
  const letters = personalInfo.brand.split("");
  return (
    <section className="container-site hero">
      <div className="hero-top mono" data-enter="">
        <span>Portfólio / {new Date().getFullYear()}</span>
        <span>{personalInfo.locationShort}</span>
      </div>
      <div className="hero-stage">
        <div className="hero-word">
          <h1 className="display">
            <span className="letters" aria-hidden="true">
              {letters.map((l, i) => (
                <span key={i}>
                  <span style={css({ "--i": i })}>{l}</span>
                </span>
              ))}
            </span>
            <span className="sr-only">
              {personalInfo.name}, {personalInfo.title.toLowerCase()}
            </span>
          </h1>
        </div>
        <div className="hero-portrait" data-enter="" style={css({ "--d": 350, "--rise": "60px" })}>
          <div className="hero-photo">
            <Image src="/me.jpg" alt={`Foto de ${personalInfo.name}`} fill priority sizes="(min-width: 768px) 540px, 80vw" />
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="hero-mobile">
        <HeroCard className="" />
        <div data-enter="" style={css({ marginTop: "28px", "--d": 800 })}>
          <HeroCta />
        </div>
      </div>

      {/* desktop */}
      <HeroCard className="desk" />
      <div className="hero-side" data-enter="" style={css({ "--d": 820 })}>
        <HeroCta />
      </div>
    </section>
  );
}
