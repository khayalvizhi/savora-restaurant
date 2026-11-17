import { Link } from "react-router-dom";

const offers = [
  { badge: "20% OFF", title: "Pasta Night", text: "Any pasta dish, every Wednesday evening.", image: "photo-1621996346565-e3dbc646d9a9" },
  { badge: "FREE DESSERT", title: "Family Feast", text: "Order for four or more and get a dessert on the house.", image: "photo-1571877227200-a0d98ea607e9" },
  { badge: "15% OFF", title: "Weekend Brunch", text: "Burgers, tacos and pizzas, Saturday and Sunday before 3 PM.", image: "photo-1568901346375-23c9450c58cd" },
];

export default function Offers() {
  return (
    <section className="bg-charcoal py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center">Special Offers</h2>
        <div className="mt-3 mx-auto w-20 h-0.5 bg-gold" />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {offers.map((o) => (
            <div key={o.title} className="relative rounded-2xl overflow-hidden border border-gold/30 min-h-[320px] flex items-end group">
              <img src={`https://images.unsplash.com/${o.image}?auto=format&fit=crop&w=800&q=80`} alt={o.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-transparent" />
              <span className="absolute top-4 left-4 bg-gold text-ink text-sm font-bold px-3 py-1 rounded-full">{o.badge}</span>
              <div className="relative p-6">
                <h3 className="font-serif text-2xl">{o.title}</h3>
                <p className="text-mute text-sm mt-1">{o.text}</p>
                <Link to="/menu" className="inline-block mt-4 bg-gold text-ink font-semibold px-6 py-2 rounded-full hover:bg-bronze hover:text-white transition-colors">
                  Order Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
