/**
 * Dados públicos do GitHub, buscados no build (o site é exportado como estático).
 * Se o GitHub não responder, as funções retornam null e a página esconde o bloco.
 */

export interface HeatWeek {
  /** Rótulo do mês quando a semana abre um mês novo */
  month: string;
  days: { date: string; level: number }[];
}

export interface Contributions {
  total: number;
  weeks: HeatWeek[];
}

export interface LastCommit {
  message: string;
  repo: string;
  url: string;
  date: string;
}

const MONTHS = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const UA = { "User-Agent": "portfolio-build" };

export async function getContributions(user: string): Promise<Contributions | null> {
  try {
    const res = await fetch(`https://github.com/users/${user}/contributions`, { headers: UA });
    if (!res.ok) return null;
    const html = await res.text();

    const cells: { date: string; level: number }[] = [];
    // Cada dia é um <td ... data-date="AAAA-MM-DD" ... data-level="N">
    for (const m of html.matchAll(/<td[^>]*?data-date="(\d{4}-\d{2}-\d{2})"[^>]*?data-level="(\d)"/g)) {
      cells.push({ date: m[1], level: Number(m[2]) });
    }
    if (cells.length < 7) return null;
    cells.sort((a, b) => a.date.localeCompare(b.date));

    const totalMatch = html.match(/([\d.,]+)\s+contributions?\s+in the last year/);
    const total = totalMatch ? Number(totalMatch[1].replace(/[.,]/g, "")) : 0;

    // Agrupa em semanas começando no domingo
    const weeks: HeatWeek[] = [];
    for (const cell of cells) {
      const d = new Date(`${cell.date}T12:00:00Z`);
      if (d.getUTCDay() === 0 || weeks.length === 0) weeks.push({ month: "", days: [] });
      weeks[weeks.length - 1].days.push(cell);
    }
    // Rótulo do mês na primeira semana de cada mês (pula a primeira coluna, que é parcial)
    let prev = -1;
    weeks.forEach((w, i) => {
      const m = new Date(`${w.days[0].date}T12:00:00Z`).getUTCMonth();
      if (i > 0 && m !== prev) w.month = MONTHS[m];
      prev = m;
    });
    // Primeira semana pode começar no meio: completa o topo para alinhar os dias
    const first = weeks[0];
    const pad = new Date(`${first.days[0].date}T12:00:00Z`).getUTCDay();
    first.days = [...Array.from({ length: pad }, () => ({ date: "", level: -1 })), ...first.days];

    return { total, weeks };
  } catch {
    return null;
  }
}

export async function getLastCommit(user: string): Promise<LastCommit | null> {
  try {
    const res = await fetch(`https://api.github.com/users/${user}/events/public?per_page=30`, {
      headers: { ...UA, Accept: "application/vnd.github+json" },
    });
    if (!res.ok) return null;
    const events = (await res.json()) as Array<{
      type: string;
      created_at: string;
      repo: { name: string };
      payload: { head?: string; commits?: { sha: string; message: string }[] };
    }>;
    const push = events.find((e) => e.type === "PushEvent");
    if (!push) return null;

    const repoName = push.repo.name.split("/")[1] ?? push.repo.name;
    const fromPayload = push.payload.commits?.at(-1);
    const sha = fromPayload?.sha ?? push.payload.head;
    let message = fromPayload?.message;

    // O evento nem sempre traz a lista de commits: busca a mensagem pelo SHA
    if (!message && sha) {
      const c = await fetch(`https://api.github.com/repos/${push.repo.name}/commits/${sha}`, {
        headers: { ...UA, Accept: "application/vnd.github+json" },
      });
      if (c.ok) message = ((await c.json()) as { commit: { message: string } }).commit.message;
    }
    if (!message || !sha) return null;

    return {
      message: message.split("\n")[0],
      repo: repoName,
      url: `https://github.com/${push.repo.name}/commit/${sha}`,
      date: push.created_at,
    };
  } catch {
    return null;
  }
}
