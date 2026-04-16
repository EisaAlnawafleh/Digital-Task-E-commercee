"use client";
import { useState, useEffect } from "react";
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  specs: string;
  image: string;
};
type CartItem = Product & { qty: number };
export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const add = (product: Product, qty: number) => {
    setCart((prev) => [...prev, { ...product, qty }]);
  };

  return { cart, add };
};
