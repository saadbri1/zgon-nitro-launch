export function ZgonLogo({ className = "" }: { className?: string }) {
  return (
    <span className={`font-display font-black tracking-tight ${className}`}>
      <span className="text-[var(--zgon-lime)] text-glow-lime">Z</span>GON
    </span>
  );
}
