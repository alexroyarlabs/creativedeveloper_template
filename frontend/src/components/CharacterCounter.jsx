import { useMemo, useState } from 'react';

const limit = 500;

const CharacterCounter = () => {
  const [text, setText] = useState('Push confident updates with a workspace that shows clarity, tone, and length in real time.');

  const stats = useMemo(() => {
    const length = text.length;
    const remaining = Math.max(limit - length, 0);
    const progress = Math.min((length / limit) * 100, 100);
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    const readingTime = Math.max(1, Math.round(words / 200));
    let tone = 'Neutral';
    if (length > 320) tone = 'Detailed';
    else if (length < 120) tone = 'Punchy';

    return { length, remaining, progress, words, readingTime, tone };
  }, [text]);

  const barColor = stats.progress > 90 ? 'bg-red-400' : stats.progress > 70 ? 'bg-accent' : 'bg-primary';

  return (
    <section className="grid gap-6 md:grid-cols-3">
      <div className="md:col-span-2 glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-card relative overflow-hidden">
        <div className="absolute inset-0 bg-hero-gradient opacity-40" aria-hidden />
        <div className="relative">
          <div className="flex items-center justify-between gap-3 flex-wrap">
            <div>
              <p className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Live counter</p>
              <h2 className="font-display text-2xl md:text-3xl text-soft mt-1">Shape text with instant signal</h2>
              <p className="text-muted mt-2 max-w-xl">
                Paste or write content below. Stay inside limits with visual feedback and granular stats.
              </p>
            </div>
            <span className="px-4 py-2 rounded-full bg-white/5 border border-primary/30 text-primary text-sm font-semibold">
              Limit {limit} characters
            </span>
          </div>
          <div className="mt-5 bg-base/60 border border-white/10 rounded-2xl p-4 highlight-border">
            <label className="text-sm text-muted mb-2 flex items-center justify-between">
              <span>Content</span>
              <span className="text-xs text-primary uppercase tracking-[0.2em]">Realtime</span>
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              maxLength={limit}
              className="w-full min-h-[220px] bg-transparent border border-white/5 rounded-xl p-4 text-soft focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition resize-none"
              placeholder="Type your announcement, email, or headline..."
            />
            <div className="mt-3">
              <div className="flex items-center justify-between text-xs text-muted">
                <span className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${stats.progress > 90 ? 'bg-red-400' : 'bg-primary'}`} />
                  Signal
                </span>
                <span>
                  {stats.length} / {limit}
                </span>
              </div>
              <div className="h-2 rounded-full bg-white/5 mt-2 overflow-hidden">
                <div
                  className={`h-full ${barColor} transition-all duration-300`}
                  style={{ width: `${stats.progress}%` }}
                  aria-hidden
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="space-y-4">
        <div className="glass rounded-2xl border border-white/10 p-5 shadow-card">
          <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Metrics</p>
          <div className="grid grid-cols-2 gap-3 text-sm">
            <Metric label="Characters" value={stats.length} accent />
            <Metric label="Remaining" value={stats.remaining} />
            <Metric label="Words" value={stats.words} />
            <Metric label="Read time" value={`${stats.readingTime} min`} />
            <Metric label="Tone" value={stats.tone} />
            <Metric label="Status" value={stats.remaining === 0 ? 'Maxed' : 'In range'} />
          </div>
        </div>
        <div className="glass rounded-2xl border border-white/10 p-5">
          <p className="text-xs uppercase tracking-[0.18em] text-muted mb-2">Guidance</p>
          <ul className="space-y-3 text-sm text-muted">
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-primary/80" />
              Aim for 120-300 characters for crisp outreach.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-accent/80" />
              Keep verbs active and front-loaded to increase clarity.
            </li>
            <li className="flex gap-3">
              <span className="mt-1 h-2.5 w-2.5 rounded-full bg-white/40" />
              Use the bar as a visual guardrail for platform limits.
            </li>
          </ul>
        </div>
      </aside>
    </section>
  );
};

const Metric = ({ label, value, accent = false }) => (
  <div className="rounded-xl bg-white/5 border border-white/10 px-3 py-2">
    <p className="text-xs text-muted">{label}</p>
    <p className={`text-lg font-semibold ${accent ? 'text-primary' : 'text-soft'}`}>{value}</p>
  </div>
);

export default CharacterCounter;
