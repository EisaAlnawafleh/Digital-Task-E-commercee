"use client";
import Link from "next/link";
type ProductCardProps = {
  product: Product;
  onAdd: (product: Product, qty: number) => void;
};
export const ProductCard = ({ product, onAdd }: ProductCardProps) => {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="group cursor-pointer w-full bg-[#131313] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2">
        <div
          className="relative aspect-square mb-6
       rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-4/5 group-hover:scale-110 transition duration-500 object-contain"
          />

          <span className="absolute top-4 left-4 bg-cyan-400 text-black text-[10px] font-bold px-3 py-1 rounded-full">
            NEW
          </span>
        </div>

        <h4 className="text-white font-bold text-lg mb-1">{product.name}</h4>

        <p className="text-gray-400 text-sm mb-3">{product.description}</p>

        <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
          ★ <span className="text-gray-400">4.9 (128 reviews)</span>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-white text-xl font-bold">${product.price}</p>

          <button
            onClick={() => onAdd(product, 1)}
            className="w-10 h-10 cursor-pointer rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition"
          >
            🛍️
          </button>
        </div>
      </div>
    </Link>
  );
};
