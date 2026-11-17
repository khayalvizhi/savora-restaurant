import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, Menu, X, UtensilsCrossed } from "lucide-react";

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const links = [
  { label: "Home", to: "/" },
  { label: "Menu", to: "/menu" },
  { label: "About", to: "/about" },
  { label: "Offers", to: "/offers" },
  { label: "Contact", to: "/contact" },
];

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  const [open, setOpen] = useState(false);

  // Gold + underline for the page you are on
  const desktopClass = ({ isActive }: { isActive: boolean }) =>
    `pb-1 border-b-2 transition-colors ${isActive ? "text-gold border-gold" : "text-mute border-transparent hover:text-gold"}`;
  const mobileClass = ({ isActive }: { isActive: boolean }) =>
    `block transition-colors ${isActive ? "text-gold" : "text-mute hover:text-gold"}`;

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-ink/80 backdrop-blur-md border-b border-gold/20">
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 text-gold font-serif text-2xl tracking-widest">
          <UtensilsCrossed size={24} /> SAVORA
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === "/"} className={desktopClass}>{l.label}</NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button onClick={onCartClick} aria-label="Open cart" className="relative p-2 text-white hover:text-gold transition-colors">
            <ShoppingCart size={22} />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 min-w-[20px] h-5 px-1 rounded-full bg-gold text-ink text-xs font-semibold flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>
          <button onClick={() => setOpen(!open)} aria-label="Toggle menu" className="md:hidden p-2 text-white">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul className="md:hidden bg-charcoal border-t border-gold/20 px-6 py-4 space-y-4">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink to={l.to} end={l.to === "/"} onClick={() => setOpen(false)} className={mobileClass}>{l.label}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
