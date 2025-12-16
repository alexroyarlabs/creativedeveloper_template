import SectionTitle from '../components/SectionTitle'
import TextAnalyzer from '../components/TextAnalyzer'

export default function Analyzer() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Text Analyzer"
          subtitle="Paste or type your text to get instant analysis and insights"
          centered
        />
        
        <div className="mt-12">
          <TextAnalyzer />
        </div>
        
        {/* Info Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-light-text mb-2">💡 Pro Tip</h3>
            <p className="text-slate-400 text-sm">
              Use the sample text button to see how the analyzer works with real content.
            </p>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-light-text mb-2">🔒 Privacy</h3>
            <p className="text-slate-400 text-sm">
              All analysis happens in your browser. Your text is never sent to our servers.
            </p>
          </div>
          <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/30">
            <h3 className="text-lg font-semibold text-light-text mb-2">⚡ Real-time</h3>
            <p className="text-slate-400 text-sm">
              Get instant feedback as you type with live character and word counting.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
