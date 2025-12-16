import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'

export default function About() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About CharacterCounter"
          subtitle="Your trusted partner for professional text analysis"
          centered
        />
        
        <div className="mt-12 space-y-8">
          <Card>
            <h3 className="text-2xl font-bold text-light-text mb-4">Our Mission</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              CharacterCounter was built to help writers, developers, and content creators 
              understand and optimize their text. We believe that better analysis leads to 
              better content, and we&apos;re committed to providing the most accurate and useful 
              text metrics available.
            </p>
            <p className="text-slate-400 leading-relaxed">
              Whether you&apos;re writing documentation, crafting marketing copy, or creating 
              social media posts, CharacterCounter gives you the insights you need to make 
              your content shine.
            </p>
          </Card>
          
          <Card>
            <h3 className="text-2xl font-bold text-light-text mb-4">What We Offer</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-2xl">✨</div>
                <div>
                  <h4 className="font-semibold text-light-text mb-1">Real-time Analysis</h4>
                  <p className="text-slate-400">
                    Get instant feedback on character counts, word frequencies, and more as you type.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🎯</div>
                <div>
                  <h4 className="font-semibold text-light-text mb-1">Readability Metrics</h4>
                  <p className="text-slate-400">
                    Understand how easy your text is to read with advanced scoring algorithms.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">💡</div>
                <div>
                  <h4 className="font-semibold text-light-text mb-1">Tone Detection</h4>
                  <p className="text-slate-400">
                    Discover the sentiment and emotional tone of your content automatically.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="text-2xl">🔒</div>
                <div>
                  <h4 className="font-semibold text-light-text mb-1">Privacy First</h4>
                  <p className="text-slate-400">
                    All processing happens in your browser. We never store or transmit your text.
                  </p>
                </div>
              </div>
            </div>
          </Card>
          
          <Card>
            <h3 className="text-2xl font-bold text-light-text mb-4">Our Technology</h3>
            <p className="text-slate-400 leading-relaxed mb-4">
              CharacterCounter is built with modern web technologies including React, 
              TailwindCSS, and advanced text processing algorithms. Our tool runs entirely 
              in your browser, ensuring fast performance and complete privacy.
            </p>
            <p className="text-slate-400 leading-relaxed">
              We continuously improve our analysis algorithms to provide more accurate and 
              useful insights for our users.
            </p>
          </Card>
          
          <Card className="text-center p-8">
            <div className="text-5xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold text-light-text mb-2">
              Ready to Get Started?
            </h3>
            <p className="text-slate-400 mb-6">
              Try CharacterCounter today and see the difference professional text analysis can make.
            </p>
            <a
              href="/analyzer"
              className="inline-block bg-primary text-main px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Start Analyzing
            </a>
          </Card>
        </div>
      </div>
    </div>
  )
}
