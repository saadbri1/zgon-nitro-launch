export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="text-[10px] font-mono text-[var(--zgon-lime)] tracking-[0.3em]">[{index}]</span>
      <span className="h-px w-10 bg-[var(--zgon-lime)]/40" />
      <span className="text-[10px] font-mono uppercase tracking-[0.4em] text-[var(--zgon-muted)]">{label}</span>
    </div>
  );
}
