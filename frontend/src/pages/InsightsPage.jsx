const insights = [
  {
    title: "Ad copy performance",
    detail: "Shorter copy (60-90 chars) lifted CTR by 12%. Keep urgency words upfront.",
    tag: "Ads",
  },
  {
    title: "Organic social",
    detail: "Tweets between 180-220 chars saw 9% more replies. Emojis decreased saves.",
    tag: "Social",
  },
  {
    title: "Support macros",
    detail: "Macros under 320 chars reduced handling time by 18%. Trim greetings for speed.",
    tag: "Support",
  },
];

const InsightsPage = () => {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-wide text-secondary/80">Team intelligence</p>
        <h1 className="text-3xl font-semibold text-muted">Content insights</h1>
        <p className="mt-2 text-white/60">
          Use aggregated metrics to guide tone, length, and clarity across every channel.
        </p>
      </div>
      <div className="grid gap-4">
        {insights.map((item) => (
          <article
            key={item.title}
            className="glass rounded-2xl border border-white/10 p-5 shadow-card transition hover:border-secondary/50"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold text-muted">{item.title}</h2>
              <span className="rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                {item.tag}
              </span>
            </div>
            <p className="mt-2 text-white/70">{item.detail}</p>
          </article>
        ))}
      </div>
    </main>
  );
};

export default InsightsPage;
