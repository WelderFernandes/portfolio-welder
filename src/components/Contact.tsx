import { personalInfo } from "@/data/portfolio";
import { ScrollWords } from "./Motion";
import { SectionHead } from "./SectionHead";
import { ArrowRight, ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon, PinIcon } from "./icons";

const css = (v: Record<string, string | number>) => v as React.CSSProperties;

export function Contact() {
  const links = [
    { href: personalInfo.github, icon: <GithubIcon />, name: "GitHub", handle: `@${personalInfo.githubUser}`, external: true },
    { href: personalInfo.linkedin, icon: <LinkedinIcon />, name: "LinkedIn", handle: personalInfo.linkedinHandle, external: true },
    { href: `mailto:${personalInfo.email}`, icon: <MailIcon />, name: "E-mail", handle: "Escrever", external: false },
  ];

  return (
    <section id="contact" className="container-site section" aria-labelledby="contact-title">
      <SectionHead label="06 — Contato" meta="Oportunidades e projetos" />
      <ScrollWords as="h2" id="contact-title" className="display contact-h" text="Vamos conversar?" />
      <div className="contact-grid">
        <div data-reveal="" style={css({ "--i": 1 })}>
          <p className="k mono">E-mail</p>
          <a href={`mailto:${personalInfo.email}`} className="contact-mail">
            {personalInfo.email}
          </a>
          <span className="hero-cta" style={{ marginTop: 28 }}>
            <a href={`mailto:${personalInfo.email}`} className="btn">
              Enviar e-mail <ArrowRight />
            </a>
          </span>
        </div>
        <ul className="socials-list" data-reveal-group="">
          {links.map((l, i) => (
            <li key={l.name} data-reveal-item="" style={css({ "--i": i + 1 })}>
              <a href={l.href} {...(l.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                {l.icon}
                <span className="name">{l.name}</span>
                <span className="handle mono">{l.handle}</span>
                <ArrowUpRight className="arrow" />
              </a>
            </li>
          ))}
          <li data-reveal-item="" style={css({ "--i": 4 })}>
            <span className="loc">
              <PinIcon />
              <span className="name">Localização</span>
              <span className="handle mono">{personalInfo.locationShort}</span>
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}
