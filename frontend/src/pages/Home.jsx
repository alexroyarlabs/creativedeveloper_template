import Hero from '../components/Hero'
import SectionTitle from '../components/SectionTitle'
import FeatureCard from '../components/FeatureCard'
import Card from '../components/Card'
import Button from '../components/Button'
import { Link } from 'react-router-dom'
import { features } from '../data/mockData'

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Powerful Features for Text Analysis"
            subtitle="Everything you need to analyze, optimize, and understand your content"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="text-center p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
              Ready to Analyze Your Text?
            </h2>
            <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
              Start using CharacterCounter today and get instant insights into your content
            </p>
            <Link to="/analyzer">
              <Button variant="primary" className="text-lg px-8 py-4">
                Try it Now
              </Button>
            </Link>
          </Card>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            title="Why Choose CharacterCounter?"
            subtitle="Built for professionals who care about their content"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-5xl mb-4">⚡</div>
              <h3 className="text-xl font-bold text-light-text mb-2">Lightning Fast</h3>
              <p className="text-slate-400">
                Instant results with real-time analysis as you type
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-light-text mb-2">Beautiful Interface</h3>
              <p className="text-slate-400">
                Modern, clean design that makes text analysis enjoyable
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-light-text mb-2">Developer Friendly</h3>
              <p className="text-slate-400">
                Perfect for documentation, code comments, and technical writing
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
