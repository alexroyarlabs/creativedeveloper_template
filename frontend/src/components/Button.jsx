export default function Button({ children, variant = 'primary', className = '', onClick, type = 'button', ...props }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-200 focus-ring disabled:opacity-50 disabled:cursor-not-allowed'
  
  const variants = {
    primary: 'bg-primary text-main hover:bg-primary/90 shadow-lg shadow-primary/20',
    accent: 'bg-accent text-main hover:bg-accent/90 shadow-lg shadow-accent/20',
    outline: 'border-2 border-primary text-primary hover:bg-primary hover:text-main',
    ghost: 'text-primary hover:bg-primary/10',
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
