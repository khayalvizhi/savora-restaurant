import MenuSection from "../components/MenuSection";
import { MenuItemType } from "../types";

export default function MenuPage({ onAdd }: { onAdd: (item: MenuItemType) => void }) {
  return <MenuSection onAdd={onAdd} />;
}
