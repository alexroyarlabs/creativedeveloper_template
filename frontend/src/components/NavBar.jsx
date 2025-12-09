import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import PrimaryButton from "./PrimaryButton";

const navLinkBase =
  "px-3 py-2 rounded-xl text-sm font-medium transition-colors duration-200 hover:text-secondary";

const NavBar = () => {
  return (
    <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-white/10">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Logo />
        <nav className="flex items-center gap-3">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-secondary" : "text-muted"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/counter"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-secondary" : "text-muted"}`
            }
          >
            Counter
          </NavLink>
          <NavLink
            to="/insights"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-secondary" : "text-muted"}`
            }
          >
            Insights
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${navLinkBase} ${isActive ? "text-secondary" : "text-muted"}`
            }
          >
            About
          </NavLink>
          <PrimaryButton as="a" href="/counter">
            Try now
          </PrimaryButton>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
