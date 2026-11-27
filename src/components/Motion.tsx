"use client";

import { useEffect } from "react";

/**
 * Motor das animações de scroll, montado uma vez na página.
 * Trabalha sobre atributos data-* renderizados no servidor:
 * - data-reveal / data-reveal-group / data-rule / data-mask → recebem data-visible ao entrar na tela
 * - data-scroll-words → palavras acendem conforme a rolagem
 * - data-count → números contam até o valor final
 * Também leva direto à seção quando a página abre com hash (ex.: /#stack).
 */
export function Motion() {
  useEffect(() => {
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const selector = "[data-reveal],[data-reveal-group],[data-rule],[data-mask]";

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.setAttribute("data-visible", "");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    const observeAll = () =>
      document.querySelectorAll(selector).forEach((el) => {
        if (!el.hasAttribute("data-visible")) io.observe(el);
      });
    observeAll();

    // Painéis trocados pelas abas inserem novos elementos: observa-os também
    const mo = new MutationObserver(observeAll);
    mo.observe(document.querySelector("main") ?? document.body, { childList: true, subtree: true });

    // Contagem
    const fmt = (n: number) => n.toLocaleString("pt-BR");
    const countIO = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          countIO.unobserve(e.target);
          const el = e.target as HTMLElement;
          const end = Number(el.dataset.count);
          const suf = el.dataset.suffix ?? "";
          if (reduced) continue;
          const t0 = performance.now();
          const dur = 1400;
          const tick = (t: number) => {
            const p = Math.min(1, (t - t0) / dur);
            const k = 1 - Math.pow(1 - p, 4);
            el.textContent = fmt(Math.round(end * k)) + (p === 1 ? suf : "");
            if (p < 1) requestAnimationFrame(tick);
          };
          el.textContent = "0";
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.4 },
    );
    document.querySelectorAll("[data-count]").forEach((el) => countIO.observe(el));

    // Palavras que acendem
    const blocks = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-words]")).map((el) => ({
      el,
      words: Array.from(el.querySelectorAll<HTMLElement>("[data-word]")),
    }));
    const updateWords = () => {
      const vh = innerHeight;
      for (const b of blocks) {
        if (b.el.hasAttribute("data-words-done")) continue;
        const r = b.el.getBoundingClientRect();
        const p = Math.max(0, Math.min(1, (vh * 0.85 - r.top) / (r.height + vh * 0.3)));
        const lit = Math.round(p * b.words.length);
        b.words.forEach((w, i) => {
          w.style.opacity = i < lit ? "1" : "0.18";
        });
        if (lit >= b.words.length) b.el.setAttribute("data-words-done", "");
      }
    };
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        updateWords();
        ticking = false;
      });
    };
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    updateWords();

    // Abrindo com hash: pula para a seção depois que fontes e layout assentam
    const jump = () => {
      const t = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
      // "instant": "auto" herdaria o scroll-behavior: smooth do <html>
      if (t) t.scrollIntoView({ behavior: "instant", block: "start" });
    };
    if (location.hash) {
      history.scrollRestoration = "manual";
      jump();
      document.fonts?.ready.then(jump);
    }

    return () => {
      io.disconnect();
      mo.disconnect();
      countIO.disconnect();
      removeEventListener("scroll", onScroll);
      removeEventListener("resize", onScroll);
    };
  }, []);

  return null;
}

/** Texto cujas palavras acendem com a rolagem. */
export function ScrollWords({
  text,
  as: Tag = "p",
  className,
  id,
}: {
  text: string;
  as?: "p" | "h2";
  className?: string;
  id?: string;
}) {
  const words = text.trim().split(/\s+/);
  return (
    <Tag className={className} id={id} data-scroll-words="" aria-label={text}>
      {words.map((w, i) => (
        <span key={i} data-word="" aria-hidden="true">
          {w}{" "}
        </span>
      ))}
    </Tag>
  );
}
