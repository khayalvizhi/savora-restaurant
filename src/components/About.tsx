import { Leaf, ChefHat, Sparkles } from "lucide-react";

const features = [
  { icon: Leaf, title: "Premium Ingredients", text: "Seasonal produce and fine ingredients from trusted growers." },
  { icon: ChefHat, title: "Expert Chefs", text: "Our chefs bring years of international kitchen experience." },
  { icon: Sparkles, title: "Exceptional Experience", text: "Warm service and a setting made for long, memorable evenings." },
];

export default function About() {
  return (
    <section id="about" className="bg-ink py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
            alt="SAVORA restaurant interior"
            className="rounded-2xl border border-gold/30 w-full h-[420px] object-cover bg-charcoal"
          />
          <div>
            <h2 className="font-serif text-4xl md:text-5xl">About <span className="text-gold">SAVORA</span></h2>
            <p className="mt-6 text-mute leading-relaxed">
              SAVORA was founded on one idea: a meal should be an event. We pair classic recipes with modern technique, and every plate is cooked to order from <span className="text-gold">carefully chosen ingredients</span>.
            </p>
            <p className="mt-4 text-mute leading-relaxed">
              Whether it is a quiet dinner for two or a celebration with family, our team makes sure you leave with a <span className="text-gold">story worth retelling</span>.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-16">
          {features.map(({ icon: Icon, title, text }) => (
            <div key={title} className="bg-card border border-gold/20 rounded-2xl p-8 hover:border-gold/60 transition-colors">
              <div className="w-12 h-12 rounded-full bg-gold/10 text-gold flex items-center justify-center mb-5"><Icon size={24} /></div>
              <h3 className="font-serif text-xl">{title}</h3>
              <p className="mt-2 text-mute text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
