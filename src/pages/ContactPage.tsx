
import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";

const fieldClass =
  "w-full bg-ink border border-gold/20 rounded-xl px-4 py-3 text-white placeholder:text-mute/60 focus:outline-none focus:border-gold transition-colors";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSent(false);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  const info = [
    { icon: MapPin, label: "Visit us", value: "12 Gold Street, Chennai, Tamil Nadu" },
    { icon: Phone, label: "Call us", value: "+91 98765 43210" },
    { icon: Mail, label: "Email us", value: "hello@savora.com" },
    { icon: Clock, label: "Opening hours", value: "Daily, 12 PM to 11 PM" },
  ];

  return (
    <section className="bg-ink pt-32 pb-24 px-6 min-h-screen">
      <div className="max-w-6xl mx-auto">

        <div className="text-center mb-14">
          <h1 className="font-serif text-4xl md:text-5xl text-white">
            Contact Us
          </h1>

          <p className="mt-4 text-mute">
            Book a table or send us an enquiry. We reply within a day.
          </p>

          <div className="mt-6 mx-auto w-20 h-0.5 bg-gold" />
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="space-y-4">
            {info.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card border border-gold/20 rounded-2xl p-6"
              >
                <div className="w-12 h-12 shrink-0 rounded-full bg-gold/10 text-gold flex items-center justify-center">
                  <Icon size={22} />
                </div>

                <div>
                  <h3 className="font-serif text-lg text-white">{label}</h3>
                  <p className="text-mute text-sm">{value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card border border-gold/20 rounded-2xl p-8">

            <h2 className="font-serif text-2xl text-gold mb-6">
              Send an enquiry
            </h2>

            {sent && (
              <div className="flex items-center gap-2 mb-6 border border-gold/50 bg-gold/10 text-gold rounded-xl px-4 py-3 text-sm">
                <CheckCircle size={18} />
                Thank you! We have received your message and will reply soon.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className={fieldClass}
              />

              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email address"
                className={fieldClass}
              />

              <input
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="Phone number (optional)"
                className={fieldClass}
              />

              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message or table booking request"
                className={fieldClass}
              />

              <button
                type="submit"
                className="w-full bg-gold text-ink font-semibold py-3 rounded-full hover:bg-bronze hover:text-white transition-colors"
              >
                Send Message
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
