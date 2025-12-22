import { NavLink, useLocation, useNavigate } from "react-router-dom";

const navItems = [
  { path: "/editor", label: "Editor" },
  { path: "/plantillas", label: "Plantillas" },
  { path: "/galeria", label: "Galería" }
];

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === "/";

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 backdrop-blur bg-canvas/70">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <button
          className="flex items-center gap-3 text-white"
          onClick={() => navigate("/")}
          aria-label="Ir a inicio"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-slate-950 font-black">
            CS
          </div>
          <div className="text-left">
            <p className="font-semibold leading-tight">ChatScene</p>
            <p className="text-xs text-slate-400">Historias como chats</p>
          </div>
        </button>
        <nav className="flex items-center gap-2 text-sm font-medium text-slate-300">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 transition ${
                  isActive ? "bg-white/10 text-white" : "hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <button className="btn-ghost" onClick={() => navigate("#ayuda")}>
            Ayuda
          </button>
          <button
            className="btn-primary hidden sm:inline-flex"
            onClick={() => navigate("/editor")}
          >
            Comenzar
          </button>
          {!isHome && (
            <button
              className="btn-secondary sm:hidden"
              aria-label="Comenzar"
              onClick={() => navigate("/editor")}
            >
              Comenzar
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
