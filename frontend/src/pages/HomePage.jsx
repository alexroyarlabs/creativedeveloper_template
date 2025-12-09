import PrimaryButton from "../components/PrimaryButton";
import StatCard from "../components/StatCard";
import CharacterCounter from "../components/CharacterCounter";

const HomePage = () => {
  const stats = [
    { title: "Drafts analyzed", value: "184k", trend: "+12%", helper: "This month across campaigns" },
    { title: "Average length", value: "137 chars", helper: "Optimized for social and ads" },
    { title: "Teams onboarded", value: "240", trend: "+8%", helper: "Marketing, product, support" },
  ];

  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-secondary/40 bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary">
                Live character intelligence
              </div>
              <h1 className="text-4xl font-bold leading-tight text-muted sm:text-5xl">
                Keep every draft <span className="gradient-text">on-message</span> and on-limit.
              </h1>
              <p className="text-lg text-white/70">
                Characters Counter gives teams a sleek workspace to track limits, surface overages, and
                polish content before it ships across channels.
              </p>
              <div className="flex flex-wrap gap-3">
                <PrimaryButton as="a" href="/counter">
                  Open the counter
                </PrimaryButton>
                <PrimaryButton variant="ghost" as="a" href="/about">
                  Learn more
                </PrimaryButton>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-white/60">
                <span className="rounded-full bg-white/5 px-3 py-1">Instant counts</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Channel presets</span>
                <span className="rounded-full bg-white/5 px-3 py-1">Collab ready</span>
              </div>
            </div>
            <div className="shimmer rounded-3xl border border-white/10 bg-card/70 p-6 shadow-card">
              <p className="text-sm uppercase tracking-wide text-secondary/80">Preview</p>
              <CharacterCounter />
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-white/10 bg-surface/70">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <p className="text-xs uppercase tracking-wide text-secondary/80">Operational clarity</p>
              <h2 className="text-2xl font-semibold text-muted">Usage at a glance</h2>
            </div>
            <PrimaryButton variant="ghost" as="a" href="/insights">
              View insights
            </PrimaryButton>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat) => (
              <StatCard key={stat.title} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
