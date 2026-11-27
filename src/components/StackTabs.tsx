"use client";

import { useRef, useState, type ReactNode } from "react";

export interface StackItem {
  icon: string;
  name: string;
  style: "prod" | "proj" | "study";
  badge: string;
  where: string;
}
export interface StackCategory {
  id: string;
  label: string;
  items: StackItem[];
}

export function StackTabs({ categories, legend }: { categories: StackCategory[]; legend: ReactNode }) {
  const [current, setCurrent] = useState(categories[0].id);
  const [switched, setSwitched] = useState(0);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const cat = categories.find((c) => c.id === current) ?? categories[0];

  const select = (id: string, focus = false) => {
    setCurrent(id);
    setSwitched((n) => n + 1);
    if (focus) tabsRef.current[categories.findIndex((c) => c.id === id)]?.focus();
  };

  return (
    <>
      <div className="stack-bar">
        <div className="scroll-x">
          <div className="tablist" role="tablist" aria-label="Categorias">
            {categories.map((c, i) => {
              const on = c.id === current;
              return (
                <button
                  key={c.id}
                  ref={(el) => {
                    tabsRef.current[i] = el;
                  }}
                  type="button"
                  className="tab"
                  role="tab"
                  id={`stack-tab-${c.id}`}
                  aria-controls="stack-panel"
                  aria-selected={on}
                  tabIndex={on ? 0 : -1}
                  onClick={() => select(c.id)}
                  onKeyDown={(e) => {
                    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
                    if (!dir) return;
                    e.preventDefault();
                    select(categories[(i + dir + categories.length) % categories.length].id, true);
                  }}
                >
                  {c.label}
                  <span className="count mono">{String(c.items.length).padStart(2, "0")}</span>
                </button>
              );
            })}
          </div>
        </div>
        {legend}
      </div>

      <div className="stack-panel" role="tabpanel" id="stack-panel" aria-labelledby={`stack-tab-${cat.id}`}>
        {/* key força o replay da animação do painel a cada troca de aba */}
        <ul key={switched} className={`stack-grid${switched ? " panel-in" : ""}`}
          data-reveal-group=""
          data-visible={switched ? "" : undefined}
        >
          {cat.items.map((t, i) => (
            <li
              key={t.name}
              className="tech"
              data-reveal-item=""
              data-panel-item={switched ? "" : undefined}
              style={{ "--i": i } as React.CSSProperties}
            >
              <div className="tech-top">
                <span className="tech-icon" aria-hidden="true">
                  {t.icon}
                </span>
                <span className={`badge mono ${t.style}`}>{t.badge}</span>
              </div>
              <div>
                <h3 className="display">{t.name}</h3>
                {t.where && (
                  <p className="mono">
                    <span>Onde usei · </span>
                    {t.where}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

