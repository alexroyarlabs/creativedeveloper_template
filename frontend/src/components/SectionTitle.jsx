export default function SectionTitle({ title, subtitle, centered = false }) {
  return (
    <div className={centered ? 'text-center' : ''}>
      <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  )
}
