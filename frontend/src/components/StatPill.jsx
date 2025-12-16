export default function StatPill({ label, value, icon }) {
  return (
    <div className="flex items-center gap-3 bg-slate-800/70 rounded-lg px-4 py-3 border border-slate-700/50">
      {icon && <div className="text-primary text-xl">{icon}</div>}
      <div>
        <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
        <p className="text-lg font-bold text-light-text">{value}</p>
      </div>
    </div>
  )
}
