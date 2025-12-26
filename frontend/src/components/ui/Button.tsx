import { ComponentProps, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

type ButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'ghost' | 'soft';
  size?: 'sm' | 'md' | 'lg';
  to?: string;
} & ComponentProps<'button'>;

const baseStyles =
  'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink/60';

const sizeStyles = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2.5 text-sm',
  lg: 'px-5 py-3 text-base'
};

const variantStyles = {
  primary:
    'bg-ink text-cream shadow-soft hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 focus-visible:ring-2 focus-visible:ring-ink/40',
  ghost: 'bg-white/70 text-ink hover:bg-mint/60 border border-ink/10',
  soft:
    'bg-mint text-ink hover:bg-deepMint hover:text-cream border border-ink/5 hover:-translate-y-0.5'
};

const Button = ({ children, variant = 'primary', size = 'md', to, className, ...props }: ButtonProps) => {
  if (to) {
    return (
      <Link to={to} className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)}>
        {children}
      </Link>
    );
  }

  return (
    <button className={clsx(baseStyles, sizeStyles[size], variantStyles[variant], className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
