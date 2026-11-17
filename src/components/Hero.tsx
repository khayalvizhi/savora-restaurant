import { Link } from "react-router-dom";
import { Award } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center text-center px-6">
      <img
        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1920&q=80"
        alt="Fine dining plate"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/60 to-ink" />

      <div className="relative max-w-3xl animate-fadeUp">
        <span className="inline-flex items-center gap-2 border border-gold/50 bg-ink/50 text-gold rounded-full px-4 py-1.5 text-sm mb-8">
          <Award size={16} /> Award-winning fine dining
        </span>
        <h1 className="font-serif text-5xl md:text-7xl font-semibold leading-tight">Where Every Bite Tells a Story.</h1>
        <p className="mt-6 text-lg md:text-xl text-mute">Experience extraordinary flavours crafted with passion.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/menu" className="bg-gold text-ink font-semibold px-8 py-3 rounded-full hover:bg-bronze hover:text-white transition-colors">
            Explore Menu
          </Link>
          <Link to="/contact" className="border border-gold text-gold px-8 py-3 rounded-full hover:bg-gold hover:text-ink transition-colors">
            Book a Table
          </Link>
        </div>
      </div>
    </section>
  );
}
