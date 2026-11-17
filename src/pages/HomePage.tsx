import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import MenuItem from "../components/MenuItem";
import Testimonials from "../components/Testimonials";
import { menuItems } from "../data/menuData";
import { MenuItemType } from "../types";

// Dishes shown as highlights on the home page
const highlightIds = [2, 17, 10, 7];

export default function HomePage({ onAdd }: { onAdd: (item: MenuItemType) => void }) {
  const highlights = menuItems.filter((item) => highlightIds.includes(item.id));

  return (
    <>
      <Hero />
      <section className="bg-charcoal py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="font-serif text-4xl md:text-5xl">Chef’s Highlights</h2>
            <p className="mt-4 text-mute">Guest favourites, cooked to order.</p>
            <div className="mt-6 mx-auto w-20 h-0.5 bg-gold" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <MenuItem key={item.id} item={item} onAdd={onAdd} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="inline-block border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-ink transition-colors">
              View Full Menu
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
