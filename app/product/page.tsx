"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProductCard } from "../components/ProductCard";
import { useDebounce } from "../hooks/useDebounce";
import { useCart } from "../hooks/useCart";
import { products as productsData } from "../data/products";

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
    <div className="bg-[#0e0e0e] min-h-screen text-white flex flex-col lg:flex-row p-4 sm:p-6 gap-6 mt-20 lg:mt-30">
      {/* Sidebar */}
      <div className="w-full lg:w-54 bg-[#131313] p-4 sm:p-6 rounded-2xl space-y-4">
        {["All", "Smartphones", "Tablets", "Smartwatches"].map((c) => (
          <button
            key={c}
            onClick={() => setCategory(c)}
            className={`block w-full text-left cursor-pointer ${
              category === c ? "text-cyan-400" : "text-gray-400"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 space-y-6">
        {/* Search */}
        <input
          value={query}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setQuery(e.target.value)
          }
          placeholder="Search..."
          className="w-full bg-[#1a1919] px-4 py-3 rounded-xl focus:outline-0 text-sm sm:text-base"
        />

        {/* حالات */}
        {loading && <p>Loading...</p>}
        {error && <p className="text-red-400">{error}</p>}
        {!loading && filtered.length === 0 && <p>No products</p>}

        {/* Products Grid */}
        <div
          className="
        grid 
        grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-2 
        lg:grid-cols-3 
        xl:grid-cols-4 
        gap-4 sm:gap-6
      "
        >
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} onAdd={add} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StoreUI;
