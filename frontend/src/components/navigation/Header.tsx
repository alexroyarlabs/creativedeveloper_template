import { useLocation, NavLink } from 'react-router-dom';
import Button from '../ui/Button';

const navItems = [
  { to: '/', label: 'Inicio' },
  { to: '/crear', label: 'Crear partida' },
  { to: '/como-funciona', label: 'Cómo funciona' },
  { to: '/carton', label: 'Cartón demo' }
];

const Header = () => {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-30 bg-cream/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 md:px-6 lg:px-8">
        <NavLink to="/" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint text-xl font-bold text-ink shadow-soft transition-transform duration-150 group-hover:-translate-y-0.5">
            B
          </div>
          <div className="leading-tight">
            <span className="text-sm font-semibold uppercase tracking-[0.18em] text-ink/60">
              Bingo familiar
            </span>
            <p className="text-lg font-bold text-ink">El bingo de siempre, sin líos</p>
          </div>
        </NavLink>
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `text-sm font-semibold transition-colors hover:text-ink ${
                  isActive ? 'text-ink' : 'text-ink/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <span className="hidden text-xs font-medium uppercase tracking-[0.12em] text-ink/60 sm:block">
            {pathname === '/crear' ? 'Listo para compartir' : 'Organiza en segundos'}
          </span>
          <Button to="/crear" variant="primary" size="md">
            Crear partida
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
