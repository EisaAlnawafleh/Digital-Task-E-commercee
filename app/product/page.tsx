"use client";

import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useDebounce } from "../hooks/useDebounce";
import { useCart } from "../hooks/useCart";
import { products as productsData } from "../data/products";
import { motion } from "framer-motion";
import ScrollTopButton from "../components/ScrollTop";
const StoreUI = () => {
  const [query, setQuery] = useState<string>("");
  const [category, setCategory] = useState<string>("All");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    setLoading(true);

    try {
      setTimeout(() => {
        setProducts(productsData);
        setLoading(false);
      }, 500);
    } catch {
      setError("Failed to load products");
      setLoading(false);
    }
  }, []);

  const { add } = useCart();
  const debouncedQuery = useDebounce<string>(query);

  const filtered = products.filter((p) => {
    const search = p.name.toLowerCase().includes(debouncedQuery.toLowerCase());
    const cat = category === "All" || p.category === category;
    return search && cat;
  });

  return (
    <div
      style={{ background: "var(--bg1)" }}
      className="min-h-screen text-white  flex-col md:flex-row  flex p-6 gap-6 pt-30"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        style={{ background: "var(--bg2)" }}
        className="w-full md:w-64  bg-[#131313]  p-6 rounded-2xl space-y-4"
      >
        {["All", "Smartphones", "Tablets", "Smartwatches"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`block cursor-pointer transform duration-300 ${
              category === c ? "text-cyan-400" : "text-gray-400"
            }`}
          >
            {c}
          </button>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="flex-1 space-y-6"
      >
        <input
          style={{ background: "var(--bg2)", color: "var(--text)" }}
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          placeholder="Search..."
          className="w-full bg-[#1a1919] px-4 py-3 rounded-xl focus:outline-0"
        />

        {loading && <p>Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && filtered.length === 0 && <p>No products</p>}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={add} />
          ))}
        </div>
      </motion.div>
      <ScrollTopButton />
    </div>
  );
};

export default StoreUI;
