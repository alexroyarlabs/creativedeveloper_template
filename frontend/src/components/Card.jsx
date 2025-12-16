export default function Card({ children, className = '', hover = false }) {
  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 shadow-lg ${
        hover ? 'hover-lift hover:shadow-xl hover:shadow-primary/5' : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
