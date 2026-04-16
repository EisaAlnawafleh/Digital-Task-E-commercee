import { products } from "@/app/data/products";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-5xl bg-[#131313] rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2">
        <div className="bg-[#101010] flex items-center justify-center p-10 relative group">
          <img
            src={product.image}
            className="w-full max-w-sm  transform duration-700  object-contain  group-hover:scale-110"
            alt={product.name}
          />

          <span className="absolute top-4 left-4 bg-cyan-400 text-black text-xs px-3 py-1 rounded-full font-bold">
            NEW
          </span>
        </div>
        <div className="p-8 space-y-6">
          <span className="text-cyan-400 text-xs tracking-widest uppercase">
            {product.category}
          </span>

          <h1 className="text-3xl md:text-4xl font-bold leading-tight">
            {product.name}
          </h1>

          <p className="text-gray-400 text-sm leading-relaxed">
            {product.description}
          </p>

          <div className="flex items-center gap-2 text-yellow-400 text-sm">
            ★★★★★
            <span className="text-gray-400">(128 reviews)</span>
          </div>

          <p className="text-2xl font-bold text-white">${product.price}</p>

          <div className="bg-[#0f0f0f] p-3 rounded-xl text-gray-400 text-sm">
            {product.specs}
          </div>

          <div className="grid grid-cols-2 gap-3 text-xs text-gray-400">
            <div>✔ Fast Delivery</div>
            <div>✔ Secure Payment</div>
            <div>✔ Warranty Included</div>
            <div>✔ 24/7 Support</div>
          </div>

          <button className="w-full py-3 cursor-pointer transform duration-300 rounded-full bg-cyan-400 text-black font-bold hover:bg-cyan-300 transition hover:scale-[1.02]">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
