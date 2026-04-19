"use client";
import { useState } from "react";
import { useCart } from "../hooks/useCart";
import { motion } from "framer-motion";
type ProductDetailsProps = {
  product: Product;
};
export const ProductDetails = ({ product }: ProductDetailsProps) => {
  const [qty, setQty] = useState<number>(1);
  const { add } = useCart();

  if (!product) return <p>Loading...</p>;

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.7,
        ease: [0.25, 0.1, 0.25, 1], 
      }}
      className="p-20 text-white"
    >
      <img src={product.image} className="w-80" />
      <h1 className="text-4xl">{product.name}</h1>
      <p>{product.description}</p>
      <p className="text-xl">${product.price}</p>

      <div className="flex items-center gap-4">
        <button onClick={() => setQty((q) => Math.max(1, q - 1))}>-</button>
        <span>{qty}</span>
        <button onClick={() => setQty((q) => q + 1)}>+</button>
      </div>

      <button
        onClick={() => add(product, qty)}
        className="mt-4 px-6 py-3 bg-cyan-400 text-black rounded-full"
      >
        Add to Cart
      </button>
    </motion.div>
  );
};
