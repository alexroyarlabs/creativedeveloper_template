import { Link } from 'react-router-dom';

const highlights = [
  { title: 'Live clarity score', body: 'Watch your message sharpen with adaptive guidance tuned to your brand.' },
  { title: 'Content rituals', body: 'Reusable prompts and templates keep every drop of text consistent.' },
  { title: 'Signal heatmaps', body: 'Instantly see where you are verbose, vague, or tone-shifted.' }
];

const dashboard = [
  { label: 'Avg. characters', value: '212', delta: '+18%', tone: 'Punchy' },
  { label: 'Brand alignment', value: '92%', delta: '+6%', tone: 'On-voice' },
  { label: 'Time saved', value: '4.1h', delta: '-21%', tone: 'Weekly' },
  { label: 'Engagement lift', value: '1.8x', delta: '+12%', tone: 'Campaign' }
];

const Home = () => {
  return (
    <main className="space-y-16">
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-grid-tech bg-base/90 shadow-card">
        <div className="absolute inset-0 bg-hero-gradient opacity-70" aria-hidden />
        <div className="relative max-w-6xl mx-auto px-4 py-16 md:py-20">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-[0.3em] text-primary font-semibold">Character-first workflows</p>
            <h1 className="font-display text-4xl md:text-5xl text-soft mt-4 leading-tight">
              PulseText Studio keeps every character intentional.
            </h1>
            <p className="text-muted text-lg mt-4 max-w-2xl">
              A modern workspace that pairs a character counter with tone intelligence, helping teams trim noise,
              publish faster, and keep messaging aligned.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <Link
                to="/tools"
                className="px-6 py-3 rounded-full bg-primary text-base font-semibold shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition"
              >
                Open the counter
              </Link>
              <Link
                to="/solutions"
                className="px-6 py-3 rounded-full border border-white/15 text-soft hover:border-primary/50 hover:text-primary transition"
              >
                Explore playbooks
              </Link>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.title} className="glass rounded-2xl border border-white/10 p-4">
                  <p className="text-xs uppercase tracking-[0.18em] text-primary font-semibold">Signal</p>
                  <h3 className="text-lg font-semibold text-soft mt-2">{item.title}</h3>
                  <p className="text-muted mt-1">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 space-y-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Live control room</p>
            <h2 className="font-display text-3xl text-soft">Dashboard pulse</h2>
            <p className="text-muted mt-2 max-w-2xl">
              Monitor character health, tone, and time saved. Data is simulated for this preview.
            </p>
          </div>
          <Link
            to="/contact"
            className="px-4 py-2 rounded-full border border-white/10 text-sm text-muted hover:border-primary/50 hover:text-primary transition"
          >
            Book a demo
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {dashboard.map((item) => (
            <div
              key={item.label}
              className="glass rounded-2xl border border-white/10 p-4 highlight-border shadow-card"
            >
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.18em] text-muted">{item.label}</p>
                <span className="text-xs text-primary">{item.delta}</span>
              </div>
              <p className="text-3xl font-semibold text-soft mt-2">{item.value}</p>
              <p className="text-sm text-muted mt-1">{item.tone}</p>
            </div>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-[2fr,1fr]">
          <div className="glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-card">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.22em] text-muted">Workflow</p>
                <h3 className="font-display text-2xl text-soft mt-1">From raw text to ready-to-ship</h3>
              </div>
              <span className="px-3 py-1 rounded-full bg-primary/20 border border-primary/40 text-primary text-xs font-semibold">
                Guided
              </span>
            </div>
            <ul className="mt-6 space-y-4">
              {['Capture', 'Calibrate', 'Publish'].map((stage, index) => (
                <li key={stage} className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary font-semibold">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-soft font-semibold">{stage}</p>
                    <p className="text-muted">
                      {stage === 'Capture' && 'Pull drafts from anywhere and get instant character awareness.'}
                      {stage === 'Calibrate' && 'Adjust tone, tighten wording, and keep within platform thresholds.'}
                      {stage === 'Publish' && 'Ship content confidently with shareable specs and approvals.'}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-3xl border border-white/10 p-6 shadow-card">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Mini panel</p>
            <h4 className="font-display text-xl text-soft mt-2">Signal density</h4>
            <div className="mt-5 space-y-3">
              {[
                { label: 'Concise edits', value: 34, target: 48 },
                { label: 'On-voice snippets', value: 62, target: 80 },
                { label: 'Readability boosts', value: 24, target: 30 }
              ].map((row) => (
                <div key={row.label}>
                  <div className="flex items-center justify-between text-sm text-muted">
                    <span>{row.label}</span>
                    <span className="text-soft">{row.value}/{row.target}</span>
                  </div>
                  <div className="h-2 bg-white/5 rounded-full overflow-hidden mt-1">
                    <div
                      className="h-full bg-primary"
                      style={{ width: `${Math.min((row.value / row.target) * 100, 100)}%` }}
                      aria-hidden
                    />
                  </div>
                </div>
              ))}
            </div>
            <Link to="/tools" className="inline-flex mt-5 text-primary text-sm hover:underline">
              Try the character counter →
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
