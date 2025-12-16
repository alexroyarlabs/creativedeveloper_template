import { Link } from 'react-router-dom'
import Button from './Button'

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Analyze Your Text with
            <span className="block gradient-text">Precision & Insight</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto">
            Professional character counting, word analysis, and readability insights for writers, developers, and content creators.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/analyzer">
              <Button variant="primary" className="text-lg px-8 py-4">
                Start Analyzing
              </Button>
            </Link>
            <Link to="/dashboard">
              <Button variant="outline" className="text-lg px-8 py-4">
                View Dashboard
              </Button>
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { label: 'Active Users', value: '50K+' },
              { label: 'Texts Analyzed', value: '2M+' },
              { label: 'Languages', value: '15+' },
              { label: 'Accuracy', value: '99.9%' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                <p className="text-sm text-slate-400 uppercase tracking-wide">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
