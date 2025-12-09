const StatCard = ({ title, value, trend, helper }) => {
  return (
    <div className="glass rounded-2xl border border-white/10 p-5 shadow-card">
      <div className="text-sm text-white/60">{title}</div>
      <div className="mt-3 flex items-baseline gap-3">
        <div className="text-3xl font-bold text-muted">{value}</div>
        {trend && (
          <span className="rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-secondary">
            {trend}
          </span>
        )}
      </div>
      {helper && <p className="mt-3 text-sm text-white/60">{helper}</p>}
    </div>
  );
};

export default StatCard;
