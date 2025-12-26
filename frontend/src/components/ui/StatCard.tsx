import { ReactNode } from 'react';

type StatCardProps = {
  label: string;
  value: string;
  helper?: string;
  icon?: ReactNode;
};

const StatCard = ({ label, value, helper, icon }: StatCardProps) => (
  <div className="card-surface flex h-full flex-col gap-2 rounded-2xl p-5">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold uppercase tracking-[0.12em] text-ink/60">{label}</p>
      {icon}
    </div>
    <p className="text-3xl font-bold text-ink">{value}</p>
    {helper && <p className="text-sm text-ink/70">{helper}</p>}
  </div>
);

export default StatCard;
