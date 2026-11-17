import { Link } from "react-router-dom";
import { UtensilsCrossed, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-gold/20 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
        <div>
          <div className="flex items-center gap-2 text-gold font-serif text-2xl tracking-widest"><UtensilsCrossed size={24} /> SAVORA</div>
          <p className="mt-4 text-mute text-sm leading-relaxed max-w-xs">Fine dining with bold flavours and warm hospitality. Taste the extraordinary.</p>
          <div className="flex gap-3 mt-6">
            {[Instagram, Facebook, Twitter].map((Icon, i) => (
              <a key={i} href="#" aria-label="Social link" className="w-10 h-10 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"><Icon size={18} /></a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Quick Links</h4>
          <ul className="space-y-2 text-mute text-sm">
            {[["Home", "/"], ["Menu", "/menu"], ["About", "/about"], ["Offers", "/offers"], ["Contact", "/contact"]].map(([label, to]) => (
              <li key={to}><Link to={to} className="hover:text-gold transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-serif text-lg mb-4">Contact</h4>
          <ul className="space-y-3 text-mute text-sm">
            <li className="flex gap-3"><MapPin size={18} className="text-gold shrink-0" /> 12 Gold Street, Chennai, Tamil Nadu</li>
            <li className="flex gap-3"><Phone size={18} className="text-gold shrink-0" /> +91 98765 43210</li>
            <li className="flex gap-3"><Mail size={18} className="text-gold shrink-0" /> hello@savora.com</li>
          </ul>
        </div>
      </div>
      <p className="mt-12 pt-6 border-t border-gold/10 text-center text-mute text-sm">© {new Date().getFullYear()} SAVORA. All rights reserved.</p>
    </footer>
  );
}
