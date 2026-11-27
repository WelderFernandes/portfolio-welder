/** Linha + rótulo numerado ("03 — Stack") + meta à direita, padrão de todas as seções. */
export function SectionHead({ label, meta, rule = true }: { label: string; meta?: string; rule?: boolean }) {
  return (
    <>
      {rule && <div className="rule" data-rule="" aria-hidden="true" />}
      <div className="sec-head">
        <span className="eyebrow mono">
          <span className="dot" />
          <span>{label}</span>
        </span>
        {meta && <span className="sec-meta mono">{meta}</span>}
      </div>
    </>
  );
}
