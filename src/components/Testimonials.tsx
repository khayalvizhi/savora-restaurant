import { Star } from "lucide-react";

const reviews = [
  { name: "Ananya R.", text: "The truffle pasta was the best I have had in the city. Service was warm and the room is beautiful.", rating: 5 },
  { name: "Karthik S.", text: "We celebrated our anniversary here. The lava cake alone is worth the visit.", rating: 5 },
  { name: "Meera P.", text: "Great food, relaxed atmosphere and quick delivery when we ordered at home.", rating: 4 },
];

export default function Testimonials() {
  return (
    <section className="bg-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-serif text-4xl md:text-5xl text-center">What Our Guests Say</h2>
        <div className="mt-3 mx-auto w-20 h-0.5 bg-gold" />
        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {reviews.map((r) => (
            <figure key={r.name} className="bg-card border border-gold/20 rounded-2xl p-8">
              <div className="flex gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((n) => (
                  <Star key={n} size={18} className={n <= r.rating ? "fill-gold text-gold" : "text-mute/40"} />
                ))}
              </div>
              <blockquote className="text-mute leading-relaxed">“{r.text}”</blockquote>
              <figcaption className="mt-6 font-serif text-gold">{r.name}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
