const Logo = () => (
  <a href="/" className="flex items-center gap-3 text-muted hover:text-secondary transition">
    <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 text-secondary shadow-glow">
      <span className="text-lg font-bold">CC</span>
    </div>
    <div>
      <p className="text-base font-semibold">Characters Counter</p>
      <p className="text-xs text-white/60">Precision writing toolkit</p>
    </div>
  </a>
);

export default Logo;
