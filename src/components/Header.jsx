import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  const linkBase = "text-sm text-gray-400 hover:text-white transition-colors duration-200 relative";

  const linkActive = "text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-full after:bg-primary after:rounded-full";

  return (
    <header className="sticky top-0 z-50 backdrop-blur-lg bg-background/70 border-b border-border">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
            <NavLink
                to="/"
                className="text-lg font-semibold tracking-tight flex items-center gap-1"
                >
                <span className="text-white">use</span>
                <span className="text-primary drop-shadow-[0_0_6px_rgba(139,92,246,0.5)]">
                    AI
                </span>
                <span className="text-white">today</span>
            </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}>Home</NavLink>
            <NavLink to="/blog" className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}>Blog</NavLink>
            <NavLink to="/tools" className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}>AI Tools</NavLink>
            <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? linkActive : ""}`}>About</NavLink>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-4 py-2 text-sm rounded-lg bg-primary hover:bg-primaryHover text-white transition">
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden flex flex-col gap-1.5"
            onClick={() => setOpen(!open)}
          >
            <span className={`w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-2" : ""}`}/>
            <span className={`w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`}/>
            <span className={`w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-2" : ""}`}/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${open ? "max-h-80 border-t border-border" : "max-h-0"}`}>
        <div className="px-4 py-6 flex flex-col gap-5 bg-surface">
          <NavLink onClick={() => setOpen(false)} to="/">Home</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/blog">Blog</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/tools">AI Tools</NavLink>
          <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>

          <button className="mt-4 px-4 py-2 rounded-lg bg-primary text-white">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
}
