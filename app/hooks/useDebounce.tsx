"use client"
import { useState ,useEffect } from "react";
type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  specs: string;
  image: string;
};

export const useDebounce = <T,>(value: T, delay: number = 400): T => {
  const [debounced, setDebounced] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);

  return debounced;
};
