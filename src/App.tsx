
import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { CheckCircle } from "lucide-react";
import type { CartItem, MenuItemType } from "./types";

import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import MenuPage from "./pages/MenuPage";
import AboutPage from "./pages/AboutPage";
import OffersPage from "./pages/OffersPage";
import ContactPage from "./pages/ContactPage";

// Scroll to top whenever the page changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

export default function App() {
  // Cart state shared across all pages
  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);

  // Add items to cart
  const addToCart = (item: MenuItemType) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.id === item.id);

      if (exists) {
        return prev.map((c) =>
          c.id === item.id
            ? { ...c, quantity: c.quantity + 1 }
            : c
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    setToast(`${item.name} added to cart`);

    setTimeout(() => {
      setToast(null);
    }, 2000);
  };

  // Update item quantity
  const changeQty = (id: number, change: number) => {
    setCart((prev) =>
      prev
        .map((c) =>
          c.id === id
            ? { ...c, quantity: c.quantity + change }
            : c
        )
        .filter((c) => c.quantity > 0)
    );
  };

  // Remove item from cart
  const removeItem = (id: number) => {
    setCart((prev) => prev.filter((c) => c.id !== id));
  };

  // Calculate total cart items
  const cartCount = cart.reduce(
    (sum, c) => sum + c.quantity,
    0
  );

  return (
    <div className="min-h-screen bg-ink">

      <ScrollToTop />

      <Navbar
        cartCount={cartCount}
        onCartClick={() => setCartOpen(true)}
      />

      <main>
        <Routes>
          <Route
            path="/"
            element={<HomePage onAdd={addToCart} />}
          />

          <Route
            path="/menu"
            element={<MenuPage onAdd={addToCart} />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/offers"
            element={<OffersPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />

          <Route
            path="*"
            element={<HomePage onAdd={addToCart} />}
          />
        </Routes>
      </main>

      <Footer />

      <Cart
        open={cartOpen}
        items={cart}
        onClose={() => setCartOpen(false)}
        onChangeQty={changeQty}
        onRemove={removeItem}
      />

      {/* Success notification */}
      {toast && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] animate-toastIn flex items-center gap-2 bg-card border border-gold text-white px-5 py-3 rounded-full shadow-lg shadow-gold/20">
          <CheckCircle size={18} className="text-gold" />
          {toast}
        </div>
      )}

    </div>
  );
}
