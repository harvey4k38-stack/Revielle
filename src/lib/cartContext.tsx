import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  addToCart: () => void;
  removeFromCart: () => void;
  clearCart: () => void;
  total: number;
  count: number;
}

const CartContext = createContext<CartContextType | null>(null);

const PRODUCT = { name: "Revielle Age-Defying Cream", price: 29.95 };
const STORAGE_KEY = "revielle_cart_qty";

export function CartProvider({ children }: { children: ReactNode }) {
  const [quantity, setQuantity] = useState<number>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? parseInt(saved, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, String(quantity));
  }, [quantity]);

  const addToCart = () => setQuantity((q) => q + 1);
  const removeFromCart = () => setQuantity((q) => Math.max(0, q - 1));
  const clearCart = () => setQuantity(0);

  const items: CartItem[] = quantity > 0 ? [{ ...PRODUCT, quantity }] : [];
  const total = +(quantity * PRODUCT.price).toFixed(2);
  const count = quantity;

  return (
    <CartContext.Provider value={{ items, addToCart, removeFromCart, clearCart, total, count }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
