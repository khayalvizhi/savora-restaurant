import { useState } from "react";
import { categories, menuItems } from "../data/menuData";
import { Category, MenuItemType } from "../types";
import MenuItem from "./MenuItem";

interface MenuSectionProps {
  onAdd: (item: MenuItemType) => void;
}

export default function MenuSection({ onAdd }: MenuSectionProps) {
  const [selected, setSelected] = useState<"All" | Category>("All");

  // filter() keeps only the dishes in the chosen category
  const visibleItems = menuItems.filter((item) => selected === "All" || item.category === selected);

  return (
    <section className="bg-charcoal pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="font-serif text-4xl md:text-5xl">Our Signature Menu</h1>
          <p className="mt-4 text-mute">Carefully crafted dishes for unforgettable moments.</p>
          <div className="mt-6 mx-auto w-20 h-0.5 bg-gold" />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12" role="tablist" aria-label="Menu categories">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={selected === cat}
              onClick={() => setSelected(cat)}
              className={`px-5 py-2 rounded-full border text-sm font-medium transition-colors ${
                selected === cat
                  ? "bg-gold text-ink border-gold"
                  : "border-gold/40 text-mute hover:text-gold hover:border-gold"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item) => (
            <MenuItem key={item.id} item={item} onAdd={onAdd} />
          ))}
        </div>
      </div>
    </section>
  );
}
