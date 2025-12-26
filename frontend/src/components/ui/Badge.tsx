import clsx from 'clsx';
import { ReactNode } from 'react';

type BadgeProps = {
  children: ReactNode;
  tone?: 'mint' | 'coral' | 'ink' | 'yellow';
};

const toneStyles = {
  mint: 'bg-mint/70 text-ink',
  coral: 'bg-coral/15 text-coral border border-coral/40',
  ink: 'bg-ink text-cream',
  yellow: 'bg-mellowYellow/60 text-ink'
};

const Badge = ({ children, tone = 'mint' }: BadgeProps) => (
  <span
    className={clsx(
      'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.08em]',
      toneStyles[tone]
    )}
  >
    {children}
  </span>
);

export default Badge;
