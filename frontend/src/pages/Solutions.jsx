const useCases = [
  {
    title: 'Campaign teams',
    detail: 'Keep social and email assets within exact limits while staying on-tone.',
    tag: 'Precision'
  },
  {
    title: 'Product marketing',
    detail: 'Ship crisp release notes, in-product banners, and feature spotlights.',
    tag: 'Clarity'
  },
  {
    title: 'Support & success',
    detail: 'Give agents templates with counters to keep replies concise and empathetic.',
    tag: 'Consistency'
  },
  {
    title: 'Founders & ops',
    detail: 'Draft investor updates or announcements with live signal on readability.',
    tag: 'Speed'
  }
];

const playbooks = [
  { title: 'LinkedIn outreach', steps: ['120-160 chars', 'Punchy intro', 'Value + CTA'] },
  { title: 'App release note', steps: ['80-100 chars headline', 'Key impact', 'Link to docs'] },
  { title: 'Customer email', steps: ['Personal hook', 'Outcome statement', 'Friendly close'] }
];

const Solutions = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-12">
      <div className="glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Solutions</p>
        <h2 className="font-display text-3xl text-soft mt-2">Tailored for teams who ship words daily.</h2>
        <p className="text-muted mt-3 max-w-3xl">
          Choose the mode that fits your team and plug in your own character thresholds, tone lines, and approval flows.
          All content below is mock data to illustrate the experience.
        </p>
      </div>
      <section className="grid gap-6 md:grid-cols-2">
        {useCases.map((item) => (
          <article key={item.title} className="glass rounded-2xl border border-white/10 p-5 highlight-border shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold text-soft">{item.title}</h3>
              <span className="px-3 py-1 rounded-full text-xs bg-primary/15 text-primary border border-primary/30">
                {item.tag}
              </span>
            </div>
            <p className="text-muted mt-3">{item.detail}</p>
            <div className="mt-4 flex gap-2">
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted border border-white/10">
                Templates
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted border border-white/10">
                Counters
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 text-xs text-muted border border-white/10">
                Insights
              </span>
            </div>
          </article>
        ))}
      </section>
      <section className="glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Playbooks</p>
            <h3 className="font-display text-2xl text-soft mt-1">Ready-to-run cadences</h3>
            <p className="text-muted mt-2 max-w-2xl">
              Each playbook comes with character ranges, tone guidelines, and sample blocks you can tweak.
            </p>
          </div>
          <div className="px-4 py-2 rounded-full bg-accent/15 text-accent border border-accent/30 text-sm font-semibold">
            Safe ranges preloaded
          </div>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {playbooks.map((pb) => (
            <div key={pb.title} className="rounded-2xl bg-white/5 border border-white/10 p-4">
              <p className="text-sm text-muted uppercase tracking-[0.12em]">Use case</p>
              <h4 className="text-lg text-soft font-semibold mt-1">{pb.title}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                {pb.steps.map((step) => (
                  <li key={step} className="flex gap-2">
                    <span className="h-2 w-2 rounded-full bg-primary/80 mt-2" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Solutions;
