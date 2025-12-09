import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-base/80 backdrop-blur-md mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3 items-start">
        <div>
          <p className="text-sm uppercase tracking-[0.18em] text-muted">PulseText Studio</p>
          <h4 className="font-display text-2xl text-soft mt-2">Craft better content, faster.</h4>
          <p className="text-muted mt-3">
            Modern workspace for shaping concise, on-brand communication with live insights.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div>
            <p className="text-muted uppercase tracking-[0.12em] text-xs mb-3">Navigate</p>
            <div className="flex flex-col gap-2">
              <NavLink to="/" className="hover:text-primary">
                Overview
              </NavLink>
              <NavLink to="/solutions" className="hover:text-primary">
                Solutions
              </NavLink>
              <NavLink to="/tools" className="hover:text-primary">
                Workspace
              </NavLink>
            </div>
          </div>
          <div>
            <p className="text-muted uppercase tracking-[0.12em] text-xs mb-3">Social</p>
            <div className="flex flex-col gap-2">
              <a href="https://www.linkedin.com" className="hover:text-primary" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href="https://www.dribbble.com" className="hover:text-primary" target="_blank" rel="noreferrer">
                Dribbble
              </a>
              <a href="https://www.github.com" className="hover:text-primary" target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
        <div className="glass rounded-2xl p-4 border border-white/10">
          <p className="text-xs uppercase tracking-[0.24em] text-primary font-semibold">Stay in sync</p>
          <p className="text-soft font-display text-lg mt-2">Weekly digest on text analytics.</p>
          <div className="mt-4 flex gap-2">
            <input
              aria-label="Email"
              type="email"
              placeholder="you@company.com"
              className="flex-1 rounded-xl bg-white/5 border border-white/10 px-3 py-2 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
            <button className="px-4 py-2 rounded-xl bg-primary text-base font-semibold shadow-primary/20 shadow-lg hover:-translate-y-0.5 transition">
              Join
            </button>
          </div>
          <p className="text-muted text-xs mt-3">No spam. Just signal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
