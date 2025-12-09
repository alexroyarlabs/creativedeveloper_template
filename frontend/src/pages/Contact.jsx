const Contact = () => {
  return (
    <main className="max-w-5xl mx-auto px-4 py-10 space-y-8">
      <div className="glass rounded-3xl border border-white/10 p-6 md:p-8 shadow-card">
        <p className="text-xs uppercase tracking-[0.22em] text-primary font-semibold">Contact</p>
        <h1 className="font-display text-3xl text-soft mt-2">Let&apos;s align on your text workflows.</h1>
        <p className="text-muted mt-2">
          Tell us what you are writing and which platforms you ship to. We will tune the counters and tone presets for
          you.
        </p>
      </div>
      <section className="grid gap-6 md:grid-cols-2">
        <form className="glass rounded-2xl border border-white/10 p-6 shadow-card space-y-4">
          <div>
            <label className="text-sm text-muted block mb-1" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Alex Rivera"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm text-muted block mb-1" htmlFor="email">
              Work email
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <div>
            <label className="text-sm text-muted block mb-1" htmlFor="focus">
              Primary channel
            </label>
            <select
              id="focus"
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            >
              <option>Product launches</option>
              <option>Sales outreach</option>
              <option>Support comms</option>
              <option>Social + community</option>
            </select>
          </div>
          <div>
            <label className="text-sm text-muted block mb-1" htmlFor="notes">
              What do you need?
            </label>
            <textarea
              id="notes"
              rows="4"
              placeholder="Short context on your team, brand voice, and character limits..."
              className="w-full rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-soft focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
          <button
            type="button"
            className="w-full py-3 rounded-xl bg-primary text-base font-semibold shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition"
          >
            Send request
          </button>
        </form>
        <div className="glass rounded-2xl border border-white/10 p-6 shadow-card space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted">Response time</p>
            <h3 className="font-display text-2xl text-soft mt-1">Under 24h</h3>
            <p className="text-muted mt-2">We reply fast with a tailored workspace deck.</p>
          </div>
          <div className="rounded-xl bg-white/5 border border-white/10 p-4">
            <p className="text-xs uppercase tracking-[0.14em] text-muted">What you get</p>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              <li className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/80 mt-1" />
                Pilot workspace with your character rules.
              </li>
              <li className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-accent/80 mt-1" />
                Quick onboarding call for your team.
              </li>
              <li className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-white/60 mt-1" />
                Early access to new tone tuning.
              </li>
            </ul>
          </div>
          <div className="rounded-xl border border-primary/30 bg-primary/10 p-4">
            <p className="text-primary font-semibold">Prefer async?</p>
            <p className="text-muted text-sm">Ping us at hello@pulsetext.studio</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
