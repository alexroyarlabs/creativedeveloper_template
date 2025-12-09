import CharacterCounter from '../components/CharacterCounter';

const tools = [
  { title: 'Tone tuner', description: 'Shift your message to confident, warm, or bold in one click.', status: 'Preview' },
  { title: 'Platform presets', description: 'Auto-apply LinkedIn, Twitter/X, or email character ranges.', status: 'Live' },
  { title: 'Collab comments', description: 'Collect feedback inline without breaking your flow.', status: 'Coming soon' }
];

const Tools = () => {
  return (
    <main className="max-w-6xl mx-auto px-4 py-10 space-y-10">
      <div className="glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-card">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Workspace</p>
            <h1 className="font-display text-3xl text-soft mt-2">Text tools engineered for signal.</h1>
            <p className="text-muted mt-2 max-w-2xl">
              Start with the live character counter, then layer tone tuning and platform presets. All data below is
              local and for demonstration only.
            </p>
          </div>
          <span className="px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-primary font-semibold">
            Realtime safe limits
          </span>
        </div>
      </div>
      <CharacterCounter />
      <section className="grid gap-4 md:grid-cols-3">
        {tools.map((tool) => (
          <div key={tool.title} className="glass rounded-2xl border border-white/10 p-5 shadow-card">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-soft">{tool.title}</h3>
              <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-muted">
                {tool.status}
              </span>
            </div>
            <p className="text-muted mt-2">{tool.description}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Tools;
