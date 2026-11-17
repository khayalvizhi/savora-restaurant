export type Category =
  | "Indian" | "Chinese" | "Italian" | "Continental"
  | "Mexican" | "Desserts" | "Beverages";

// Shape of one dish on the menu
export interface MenuItemType {
  id: number;
  name: string;
  description: string;
  price: number; // in ₹
  rating: number; // 1 to 5
  image: string;
  category: Category;
}

// A dish in the cart = a dish + how many the guest wants
export interface CartItem extends MenuItemType {
  quantity: number;
}
