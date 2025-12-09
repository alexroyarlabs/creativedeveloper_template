import PrimaryButton from "../components/PrimaryButton";

const values = [
  { title: "Clarity first", desc: "We obsess over brevity so every message lands fast and clean." },
  { title: "Teams aligned", desc: "Shared presets keep marketing, product, and support on the same playbook." },
  { title: "Shipping speed", desc: "Instant feedback cuts approval loops and keeps work moving." },
];

const AboutPage = () => {
  return (
    <main className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-10">
        <p className="text-xs uppercase tracking-wide text-secondary/80">About the toolkit</p>
        <h1 className="text-3xl font-semibold text-muted">Built for precise communication</h1>
        <p className="mt-3 text-white/70">
          Characters Counter is a modern SPA that helps teams measure character and word counts,
          enforce channel limits, and keep language crisp across campaigns.
        </p>
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {values.map((value) => (
          <div key={value.title} className="glass rounded-2xl border border-white/10 p-4 shadow-card">
            <h2 className="text-lg font-semibold text-muted">{value.title}</h2>
            <p className="mt-2 text-sm text-white/70">{value.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-10 rounded-3xl border border-white/10 bg-card/80 p-6 shadow-card">
        <h3 className="text-xl font-semibold text-muted">Ready to try it?</h3>
        <p className="mt-2 text-white/70">
          Spin up the workspace locally, share drafts with teammates, and track every character.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <PrimaryButton as="a" href="/counter">
            Open counter
          </PrimaryButton>
          <PrimaryButton variant="ghost" as="a" href="/insights">
            See insights
          </PrimaryButton>
        </div>
      </div>
    </main>
  );
};

export default AboutPage;
