const PrimaryButton = ({ children, as = "button", href, onClick, className = "", variant = "primary" }) => {
  const base =
    "inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition shadow-lg shadow-primary/25";
  const variants = {
    primary: "bg-primary text-white hover:brightness-110",
    ghost: "bg-white/5 text-muted border border-white/10 hover:border-secondary hover:text-secondary",
  };
  const Component = as;
  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${className}`}
    >
      {children}
    </Component>
  );
};

export default PrimaryButton;
