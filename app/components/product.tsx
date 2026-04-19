import Image from "next/image";
import "aos/dist/aos.css";
import Link from "next/link";
import { products } from "../data/products";
import { motion } from "framer-motion";
const Product = () => {
  return (
    <div style={{ background: "var(--bg_product)" }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="mx-20 m-auto overflow-hidden   pt-45  "
      >
        <div className="flex flex-row gap-10 pt-20 flex-wrap  justify-between  ">
          <div className="flex flex-col gap-3 justify-center ">
            <div style={{ color: "var(--text)" }} className="text-[32px]">
              Pinnacle <span className="text-[#1fb6cd]">Performance</span>
            </div>
            <div className="text-[#898787]">
              Selected masterpieces of engineering.
            </div>
          </div>
          <div className="text-[#1fb6cd]/80  justify-center    mt-4 flex gap-3 cursor-pointer">
            <Link href="/product">
              <div className="hover:text-[#1fb6cd] transform duration-300">
                View All
              </div>
            </Link>
            <i className="ri-arrow-right-line text-[#1fb6cd]/80 hover:text-[#1fb6cd] transform duration-300 "></i>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{
          once: true,
          amount: 0.2,
        }}
        className="flex mx-5 flex-wrap m-auto flex-row justify-center items-center   gap-8 p-8  mt-5 "
      >
        {products.slice(-6).map((item) => (
          <div
            key={item.id}
            style={{ background: "var(--card3)" }}
            className="group cursor-pointer w-full sm:w-[48%] lg:w-[30%] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2"
          >
            <Link href={`/product/${item.id}`} className="block">
              <div
                style={{ background: "var(--card3)" }}
                className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center"
              >
                <Image
                  width={300}
                  height={300}
                  alt=""
                  src={item.image}
                  className="w-4/5 rounded-2xl transition duration-500 object-contain"
                />
              </div>

              <h4
                style={{ color: "var(--text)" }}
                className="font-bold text-lg mb-1"
              >
                {item.name}
              </h4>
            </Link>

            <div className="flex justify-between items-center mt-3">
              <p style={{ color: "var(--text)" }} className="text-xl font-bold">
                ${item.price}
              </p>

              <button className="w-10 h-10 rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
                🛍️
              </button>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Product;
