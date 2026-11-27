import { personalInfo } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container-site">
        <div className="rule" data-rule="" aria-hidden="true" />
        <div className="foot-row mono">
          <span>
            © {new Date().getFullYear()} {personalInfo.name}
          </span>
          <span className="made">Feito em {personalInfo.locationShort} · Next.js</span>
          <a href="#topo">Voltar ao topo ↑</a>
        </div>
      </div>
      <div className="foot-word-wrap" data-reveal-group="" aria-hidden="true">
        <p className="display foot-word" data-reveal-item="" style={{ "--rise": "45%" } as React.CSSProperties}>
          {personalInfo.brand}
        </p>
      </div>
    </footer>
  );
}
