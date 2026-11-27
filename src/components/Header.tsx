"use client";

import { useEffect, useRef, useState } from "react";
import { personalInfo } from "@/data/portfolio";
import { ArrowRight, MenuIcon } from "./icons";

const NAV = [
  { id: "projects", label: "Projetos", num: "02" },
  { id: "stack", label: "Stack", num: "03" },
  { id: "about", label: "Sobre", num: "04" },
  { id: "experience", label: "Experiência", num: "05" },
];
const MENU = [...NAV, { id: "contact", label: "Contato", num: "06" }];

export function Header() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [closing, setClosing] = useState(false);
  const barRef = useRef<HTMLSpanElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // Barra de progresso + seção ativa
  useEffect(() => {
    let ticking = false;
    const update = () => {
      ticking = false;
      const max = document.documentElement.scrollHeight - innerHeight;
      if (barRef.current) barRef.current.style.transform = `scaleX(${max > 0 ? scrollY / max : 0})`;
      const line = innerHeight * 0.35;
      let current = "";
      for (const { id } of MENU) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= line) current = id;
      }
      setActive(current);
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };
    update();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => {
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  const close = () => {
    if (!open) return;
    setOpen(false);
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setClosing(true);
    setTimeout(() => setClosing(false), 200);
  };

  // Fecha com Esc ou clique fora
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        close();
        btnRef.current?.focus();
      }
    };
    const onClick = (e: MouseEvent) => {
      const t = e.target as Node;
      if (!menuRef.current?.contains(t) && !btnRef.current?.contains(t)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open]);

  const visible = open || closing;

  return (
    <>
      <header className="site-header">
        <div className="header-bar">
          <a href="#topo" className="brand" aria-label={`${personalInfo.firstName} Dev, início`}>
            <b>{personalInfo.brand}</b> <span>DEV</span>
          </a>
          <nav className="main-nav" aria-label="Seções">
            <ul>
              {NAV.map((n) => (
                <li key={n.id}>
                  <a
                    href={`#${n.id}`}
                    className={active === n.id ? "is-active" : undefined}
                    aria-current={active === n.id ? "location" : undefined}
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="header-actions">
            <a href="#contact" className="cta-pill">
              Fale comigo <ArrowRight />
            </a>
            <button
              ref={btnRef}
              type="button"
              className="menu-btn"
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              aria-controls="menu"
              onClick={() => (open ? close() : setOpen(true))}
            >
              <MenuIcon open={open} />
            </button>
          </div>
          <span ref={barRef} className="scroll-progress" aria-hidden="true" />
        </div>
      </header>

      <div className="menu-layer">
        <div>
          <div
            ref={menuRef}
            id="menu"
            className={`menu${visible ? " menu-pop" : ""}`}
            role="dialog"
            aria-label="Menu"
            hidden={!visible}
            data-closing={closing ? "" : undefined}
          >
            <nav aria-label="Menu">
              <ul>
                {MENU.map((n, i) => (
                  <li key={n.id} data-menu-item="" style={{ "--i": i } as React.CSSProperties}>
                    <a
                      href={`#${n.id}`}
                      className={`menu-link${active === n.id ? " is-active" : ""}`}
                      onClick={close}
                    >
                      <span className="num mono">{n.num}</span>
                      <span className="label">{n.label}</span>
                      <ArrowRight size={20} />
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="menu-foot" data-menu-item="" style={{ "--i": MENU.length } as React.CSSProperties}>
              <p className="avail mono">
                <i aria-hidden="true" />
                Aberto a oportunidades
              </p>
              <a href={`mailto:${personalInfo.email}`} className="mail">
                {personalInfo.email}
              </a>
              <p className="socials mono">
                <a href={personalInfo.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
