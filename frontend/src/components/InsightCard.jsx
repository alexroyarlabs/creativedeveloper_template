export default function InsightCard({ label, value, subtext }) {
  return (
    <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
      <p className="text-xs text-slate-400 uppercase tracking-wide mb-1">{label}</p>
      <p className="text-2xl font-bold text-light-text mb-1">{value}</p>
      {subtext && <p className="text-xs text-slate-500">{subtext}</p>}
    </div>
  )
}
