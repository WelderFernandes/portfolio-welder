import { personalInfo, stats } from "@/data/portfolio";
import { getContributions, getLastCommit } from "@/lib/github";
import { ArrowUpRight } from "./icons";

const css = (v: Record<string, string | number>) => v as React.CSSProperties;
/** No celular aparecem só as últimas semanas */
const MOBILE_WEEKS = 13;

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("pt-BR", { day: "2-digit", month: "short", year: "numeric" });
}

export async function Numbers() {
  const [contrib, commit] = await Promise.all([
    getContributions(personalInfo.githubUser),
    getLastCommit(personalInfo.githubUser),
  ]);

  return (
    <section className="container-site" aria-label="Números">
      <div className="rule" data-rule="" aria-hidden="true" />
      <div className="numbers-body">
        <dl className="stats" data-reveal-group="">
          {stats.map((s, i) => (
            <div key={s.label} className="stat" data-reveal-item="" style={css({ "--i": i })}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="display" data-count={s.value} data-suffix={s.suffix} aria-label={`${s.value}${s.suffix}`}>
                {s.value}
                {s.suffix}
              </dd>
              <dd className="lbl mono" aria-hidden="true">
                <span className="short">{s.short}</span>
                <span className="long">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>

        {contrib && (
          <div className="heat-wrap">
            <div className="rule" data-rule="" aria-hidden="true" />
            <div className="heat-body">
              <div className="heat-head">
                <p className="mono">
                  <span>{contrib.total.toLocaleString("pt-BR")} contribuições no último ano</span>
                  <a href={personalInfo.github} target="_blank" rel="noreferrer">
                    GitHub @{personalInfo.githubUser} <ArrowUpRight size={16} />
                  </a>
                </p>
                <div className="heat-legend mono" aria-hidden="true">
                  <span style={{ marginRight: 8 }}>Menos</span>
                  {[0, 1, 2, 3, 4].map((l) => (
                    <i key={l} style={{ background: `var(--heat-${l})` }} />
                  ))}
                  <span style={{ marginLeft: 8 }}>Mais</span>
                </div>
              </div>
              <div className="heat-grid" data-reveal-group="" aria-hidden="true">
                <div className="heat-days mono">
                  <span />
                  <span />
                  <span>Seg</span>
                  <span />
                  <span>Qua</span>
                  <span />
                  <span>Sex</span>
                  <span />
                </div>
                <div className="heat-cols">
                  {contrib.weeks.map((w, wi) => (
                    <div key={wi} className={`heat-col${wi < contrib.weeks.length - MOBILE_WEEKS ? " old" : ""}`}>
                      <span className="m mono">{w.month}</span>
                      {w.days.map((d, di) => (
                        <span
                          key={di}
                          className="c"
                          data-heat=""
                          title={d.date || undefined}
                          style={css({
                            "--w": wi,
                            background: d.level < 0 ? "transparent" : `var(--heat-${d.level})`,
                          })}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {commit && (
                <a href={commit.url} target="_blank" rel="noreferrer" className="commit" data-reveal="" style={css({ "--i": 2 })}>
                  <span className="k mono">
                    <span className="ping" aria-hidden="true" />
                    Último commit
                  </span>
                  <span className="msg">{commit.message}</span>
                  <span className="meta mono">
                    <span>{commit.repo}</span>
                    <span aria-hidden="true">·</span>
                    <time dateTime={commit.date}>{formatDate(commit.date)}</time>
                    <ArrowUpRight />
                  </span>
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
