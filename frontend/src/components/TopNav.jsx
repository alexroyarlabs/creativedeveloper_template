import { NavLink, useLocation } from 'react-router-dom';

const links = [
  { label: 'Overview', to: '/' },
  { label: 'Solutions', to: '/solutions' },
  { label: 'Tools', to: '/tools' },
  { label: 'Contact', to: '/contact' }
];

const TopNav = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="sticky top-0 z-30 backdrop-blur-lg bg-base/70 border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-primary/20 border border-primary/50 flex items-center justify-center text-primary font-display font-semibold shadow-glow">
            <span>PX</span>
          </div>
          <div>
            <p className="text-sm text-muted uppercase tracking-[0.18em]">PulseText Studio</p>
            <p className="font-display text-lg text-soft">Text intelligence lab</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-1">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-all duration-150 ${
                  isActive
                    ? 'bg-primary/20 text-soft border border-primary/40 shadow-glow'
                    : 'text-muted hover:text-soft hover:bg-white/5'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-xs text-muted text-right">
            <p className="uppercase tracking-[0.24em] text-primary font-semibold">Beta</p>
            <p className="text-white/70">Adaptive copy toolkit</p>
          </div>
          <NavLink
            to="/tools"
            className={`px-4 py-2 rounded-full font-semibold text-sm bg-primary text-base shadow-lg shadow-primary/20 hover:-translate-y-0.5 transition ${
              isHome ? 'hover:shadow-xl hover:shadow-primary/30' : ''
            }`}
          >
            Launch workspace
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default TopNav;
