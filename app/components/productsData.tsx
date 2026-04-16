"use client";

import { useEffect, useState } from "react";
import { products as data } from "../data/products";

type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  description: string;
  specs: string;
  image: string;
};

export default function Page() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      setLoading(true);

      setTimeout(() => {
        setProducts(data);
        setError(null);
        setLoading(false);
      }, 1000);
    } catch {
      setError("Error loading products");
      setLoading(false);
    }
  }, []);

  return <div></div>;
}
