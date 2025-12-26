import { ReactNode } from 'react';
import clsx from 'clsx';

type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
  tone?: 'mint' | 'coral' | 'ink';
};

const InfoCard = ({ icon, title, description, tone = 'mint' }: InfoCardProps) => (
  <div
    className={clsx(
      'card-surface flex h-full flex-col gap-3 rounded-2xl p-5 transition-transform duration-150 hover:-translate-y-1',
      tone === 'coral' ? 'border-coral/20' : tone === 'ink' ? 'border-ink/10' : 'border-mint/30'
    )}
  >
    <div className="flex items-center gap-3">
      <span
        className={clsx(
          'flex h-10 w-10 items-center justify-center rounded-xl text-lg font-bold',
          tone === 'coral'
            ? 'bg-coral/15 text-coral'
            : tone === 'ink'
              ? 'bg-ink text-cream'
              : 'bg-mint/60 text-ink'
        )}
      >
        {icon ?? '✸'}
      </span>
      <h3 className="text-lg font-semibold text-ink">{title}</h3>
    </div>
    <p className="text-sm text-ink/75">{description}</p>
  </div>
);

export default InfoCard;
