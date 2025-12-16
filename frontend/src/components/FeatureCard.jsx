import Card from './Card'

export default function FeatureCard({ icon, title, description }) {
  return (
    <Card hover>
      <div className="text-4xl mb-4 text-primary">{icon}</div>
      <h3 className="text-xl font-bold mb-2 text-light-text">{title}</h3>
      <p className="text-slate-400">{description}</p>
    </Card>
  )
}
