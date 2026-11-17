import { Star, Plus } from "lucide-react";
import { MenuItemType } from "../types";

// Props: the dish to show, and what to do when "Add to Cart" is clicked
interface MenuItemProps {
  item: MenuItemType;
  onAdd: (item: MenuItemType) => void;
}

export default function MenuItem({ item, onAdd }: MenuItemProps) {
  return (
    <article className="group bg-card border border-gold/20 rounded-2xl overflow-hidden hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10 transition-all duration-300">
      <div className="overflow-hidden h-52 bg-charcoal">
        <img src={item.image} alt={item.name} loading="lazy" onError={(e) => { e.currentTarget.style.opacity = "0"; }} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
      </div>
      <div className="p-5 flex flex-col gap-3">
        <h3 className="font-serif text-xl">{item.name}</h3>
        <p className="text-mute text-sm leading-relaxed min-h-[60px]">{item.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-gold text-xl font-semibold">₹{item.price}</span>
          <div className="flex gap-0.5" aria-label={`${item.rating} out of 5 stars`}>
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={16} className={n <= item.rating ? "fill-gold text-gold" : "text-mute/40"} />
            ))}
          </div>
        </div>
        <button
          onClick={() => onAdd(item)}
          className="mt-1 flex items-center justify-center gap-2 bg-gold text-ink font-semibold py-2.5 rounded-full hover:bg-bronze hover:text-white transition-colors"
        >
          <Plus size={18} /> Add to Cart
        </button>
      </div>
    </article>
  );
}
