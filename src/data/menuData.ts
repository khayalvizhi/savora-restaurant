import { Category, MenuItemType } from "../types";

const img = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=800&q=80`;

// Filter bar options on the Menu page
export const categories: ("All" | Category)[] = [
  "All", "Indian", "Chinese", "Italian", "Continental", "Mexican", "Desserts", "Beverages",
];

export const menuItems: MenuItemType[] = [
  // Italian
  { id: 1, category: "Italian", name: "Classic Margherita Pizza", description: "Wood-fired crust, San Marzano tomato, fresh mozzarella and basil.", price: 549, rating: 5, image: img("photo-1574071318508-1cdbab80d002") },
  { id: 2, category: "Italian", name: "Truffle Mushroom Pasta", description: "Handmade tagliatelle in a creamy wild mushroom and black truffle sauce.", price: 749, rating: 5, image: img("photo-1621996346565-e3dbc646d9a9") },
  { id: 4, category: "Italian", name: "Creamy Alfredo Pasta", description: "Fettuccine tossed in parmesan cream with cracked black pepper.", price: 599, rating: 4, image: img("photo-1645112411341-6c4fd023714a") },
  { id: 9, category: "Italian", name: "Baked Lasagna", description: "Layers of pasta, slow-cooked ragù and béchamel under golden cheese.", price: 649, rating: 5, image: img("photo-1574894709920-11b28e7367e3") },
  // Continental
  { id: 3, category: "Continental", name: "Grilled Chicken Steak", description: "Herb-marinated chicken breast with garlic butter and roasted vegetables.", price: 699, rating: 4, image: img("photo-1600891964092-4316c288032e") },
  { id: 5, category: "Continental", name: "Gourmet Burger", description: "Char-grilled patty, aged cheddar, caramelised onions and brioche bun.", price: 499, rating: 4, image: img("photo-1568901346375-23c9450c58cd") },
  { id: 10, category: "Continental", name: "Pan-Seared Salmon", description: "Crisp-skinned salmon with lemon butter sauce and buttered greens.", price: 899, rating: 5, image: img("photo-1467003909585-2f8a72700288") },
  { id: 11, category: "Continental", name: "Creamy Mashed Potato Bowl", description: "Whipped potato, mushroom gravy and grilled chicken strips.", price: 429, rating: 4, image: img("photo-1432139555190-58524dae6a55") },
  // Mexican
  { id: 6, category: "Mexican", name: "Mexican Tacos", description: "Three soft tacos with spiced filling, fresh salsa and lime crema.", price: 449, rating: 5, image: img("photo-1565299585323-38d6b0865b47") },
  { id: 12, category: "Mexican", name: "Loaded Nachos", description: "Crisp tortilla chips with melted cheese, jalapeños, beans and guacamole.", price: 379, rating: 4, image: img("photo-1513456852971-30c0b8199d4d") },
  { id: 13, category: "Mexican", name: "Chicken Burrito", description: "Grilled chicken, rice, beans and cheese wrapped in a warm tortilla.", price: 479, rating: 4, image: img("photo-1626700051175-6818013e1d4f") },
  {
  id: 14,
  category: "Mexican",
  name: "Cheese Quesadilla",
  description: "Griddled tortilla filled with three cheeses, peppers and sour cream.",
  price: 399,
  rating: 4,
  image: "https://snapcalorie-webflow-website.s3.us-east-2.amazonaws.com/media/recipe_pics_v2/medium/classic_cheese_quesadillas.jpg"
  },
  // Desserts
  { id: 7, category: "Desserts", name: "Chocolate Lava Cake", description: "Warm dark chocolate cake with a molten centre and vanilla ice cream.", price: 349, rating: 5, image: img("photo-1624353365286-3f8d62daad51") },
  { id: 8, category: "Desserts", name: "Classic Tiramisu", description: "Espresso-soaked ladyfingers layered with mascarpone and cocoa.", price: 329, rating: 5, image: img("photo-1571877227200-a0d98ea607e9") },
  { id: 15, category: "Desserts", name: "New York Cheesecake", description: "Creamy baked cheesecake on a buttery biscuit base with berry compote.", price: 319, rating: 5, image: img("photo-1533134242443-d4fd215305ad") },
  { id: 16, category: "Desserts", name: "Walnut Brownie Sundae", description: "Fudgy brownie, vanilla ice cream and hot chocolate sauce.", price: 299, rating: 4, image: img("photo-1606313564200-e75d5e30476c") },
  // Indian
  { id: 17, category: "Indian", name: "Butter Chicken", description: "Tandoori chicken simmered in a rich tomato and butter gravy.", price: 549, rating: 5, image: img("photo-1603894584373-5ac82b2ae398") },
  {
  id: 18,
  category: "Indian",
  name: "Hyderabadi Chicken Biryani",
  description: "Fragrant basmati layered with spiced chicken, saffron and fried onions.",
  price: 499,
  rating: 5,
  image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy%2Cf_auto%2Cq_auto%2Cw_400/RX_THUMBNAIL/IMAGES/VENDOR/2026/5/25/8c447cd8-467c-4efb-a26b-b4f25481cae7_1324795.jpg"
  },
  { id: 19, category: "Indian", name: "Paneer Tikka", description: "Charred cottage cheese marinated in yoghurt and spices, served with mint chutney.", price: 429, rating: 4, image: img("photo-1567188040759-fb8a883dc6d8") },
  { id: 20, category: "Indian", name: "Masala Dosa", description: "Crisp rice crepe with spiced potato filling, sambar and chutneys.", price: 249, rating: 4, image: img("photo-1668236543090-82eba5ee5976") },
  // Chinese
  { id: 21, category: "Chinese", name: "Hakka Noodles", description: "Wok-tossed noodles with crunchy vegetables and soy.", price: 349, rating: 4, image: img("photo-1585032226651-759b368d7246") },
  { id: 22, category: "Chinese", name: "Veg Manchurian", description: "Crisp vegetable dumplings in a garlic, ginger and soy sauce.", price: 329, rating: 4, image: img("photo-1525755662778-989d0524087e") },
  { id: 23, category: "Chinese", name: "Schezwan Fried Rice", description: "Smoky wok-fried rice with a spicy Schezwan kick.", price: 369, rating: 4, image: img("photo-1603133872878-684f208fb84b") },
  { id: 24, category: "Chinese", name: "Steamed Dim Sum Basket", description: "Six handmade dumplings with chilli oil and black vinegar dip.", price: 399, rating: 5, image: img("photo-1496116218417-1a781b1c416c") },
  // Beverages
  { id: 25, category: "Beverages", name: "Mango Lassi", description: "Chilled yoghurt blended with ripe Alphonso mango.", price: 179, rating: 5, image: img("photo-1527661591475-527312dd65f5") },
  { id: 26, category: "Beverages", name: "Cold Coffee", description: "Iced espresso blended with milk and a scoop of vanilla ice cream.", price: 199, rating: 4, image: img("photo-1461023058943-07fcbe16d735") },
  { id: 27, category: "Beverages", name: "Virgin Mojito", description: "Fresh mint, lime and soda over crushed ice.", price: 189, rating: 4, image: img("photo-1551538827-9c037cb4f32a") },
  { id: 28, category: "Beverages", name: "Masala Chai", description: "Slow-brewed tea with ginger, cardamom and warm spices.", price: 129, rating: 4, image: img("photo-1571934811356-5cc061b6821f") },
];
