import { X, Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { CartItem } from "../types";

interface CartProps {
  open: boolean;
  items: CartItem[];
  onClose: () => void;
  onChangeQty: (id: number, change: number) => void;
  onRemove: (id: number) => void;
}

export default function Cart({ open, items, onClose, onChangeQty, onRemove }: CartProps) {
  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <>
      {/* Dark backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      {/* Sliding drawer */}
      <aside
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-md bg-charcoal border-l border-gold/30 flex flex-col transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gold/20">
          <h2 className="font-serif text-2xl text-gold">Your Cart</h2>
          <button onClick={onClose} aria-label="Close cart" className="text-mute hover:text-gold transition-colors"><X size={24} /></button>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center gap-3 text-mute text-center px-6">
            <ShoppingBag size={56} className="text-gold/60" />
            <p className="text-white text-lg">Your cart is empty</p>
            <p className="text-sm">Add a dish from the menu to get started.</p>
          </div>
        ) : (
          <>
            <ul className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.map((item) => (
                <li key={item.id} className="flex gap-4 bg-card border border-gold/10 rounded-xl p-3">
                  <img src={item.image} alt={item.name} className="w-20 h-20 rounded-lg object-cover" />
                  <div className="flex-1">
                    <div className="flex justify-between gap-2">
                      <h3 className="font-medium text-sm">{item.name}</h3>
                      <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.name}`} className="text-mute hover:text-red-400 transition-colors"><Trash2 size={16} /></button>
                    </div>
                    <p className="text-gold text-sm mt-1">₹{item.price}</p>
                    <div className="flex items-center gap-3 mt-2">
                      <button onClick={() => onChangeQty(item.id, -1)} aria-label="Decrease quantity" className="w-7 h-7 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"><Minus size={14} /></button>
                      <span className="w-5 text-center">{item.quantity}</span>
                      <button onClick={() => onChangeQty(item.id, 1)} aria-label="Increase quantity" className="w-7 h-7 rounded-full border border-gold/40 text-gold flex items-center justify-center hover:bg-gold hover:text-ink transition-colors"><Plus size={14} /></button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
            <div className="p-6 border-t border-gold/20">
              <div className="flex justify-between text-lg mb-4">
                <span className="text-mute">Total</span>
                <span className="text-gold font-semibold">₹{total}</span>
              </div>
              <button className="w-full bg-gold text-ink font-semibold py-3 rounded-full hover:bg-bronze hover:text-white transition-colors">
                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
}
