import SectionTitle from '../components/SectionTitle'
import Card from '../components/Card'
import { dashboardKPIs, recentAnalyses } from '../data/mockData'

export default function Dashboard() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Dashboard"
          subtitle="Track your text analysis history and performance metrics"
          centered
        />
        
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {dashboardKPIs.map((kpi, index) => (
            <Card key={index} className="text-center">
              <p className="text-sm text-slate-400 uppercase tracking-wide mb-2">
                {kpi.label}
              </p>
              <p className="text-4xl font-bold text-light-text mb-2">
                {kpi.value}
              </p>
              <p className={`text-sm font-semibold ${
                kpi.trend === 'up' ? 'text-accent' : 'text-red-500'
              }`}>
                {kpi.change} from last month
              </p>
            </Card>
          ))}
        </div>
        
        {/* Recent Analyses Table */}
        <div className="mt-12">
          <Card>
            <h3 className="text-2xl font-bold text-light-text mb-6">Recent Analyses</h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                      Title
                    </th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                      Date
                    </th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                      Characters
                    </th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                      Words
                    </th>
                    <th className="text-right py-3 px-4 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                      Readability
                    </th>
                    <th className="text-left py-3 px-4 text-slate-400 font-semibold text-sm uppercase tracking-wide">
                      Tone
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentAnalyses.map((analysis) => (
                    <tr
                      key={analysis.id}
                      className="border-b border-slate-700/50 hover:bg-slate-800/30 transition-colors"
                    >
                      <td className="py-4 px-4 text-light-text font-medium">
                        {analysis.title}
                      </td>
                      <td className="py-4 px-4 text-slate-400">
                        {new Date(analysis.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </td>
                      <td className="py-4 px-4 text-right text-slate-400">
                        {analysis.characters.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right text-slate-400">
                        {analysis.words.toLocaleString()}
                      </td>
                      <td className="py-4 px-4 text-right">
                        <span
                          className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            analysis.readability >= 70
                              ? 'bg-accent/20 text-accent'
                              : analysis.readability >= 50
                              ? 'bg-primary/20 text-primary'
                              : 'bg-red-500/20 text-red-400'
                          }`}
                        >
                          {analysis.readability}
                        </span>
                      </td>
                      <td className="py-4 px-4 text-slate-400">
                        {analysis.tone}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
        
        {/* Charts Section Placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
          <Card>
            <h3 className="text-xl font-bold text-light-text mb-4">Analysis Trends</h3>
            <div className="h-64 flex items-center justify-center text-slate-500">
              <div className="text-center">
                <div className="text-4xl mb-2">📊</div>
                <p>Chart visualization would go here</p>
              </div>
            </div>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-light-text mb-4">Content Distribution</h3>
            <div className="h-64 flex items-center justify-center text-slate-500">
              <div className="text-center">
                <div className="text-4xl mb-2">🥧</div>
                <p>Pie chart visualization would go here</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
