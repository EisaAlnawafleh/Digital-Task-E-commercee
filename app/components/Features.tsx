"use client";
import { motion } from "framer-motion";
const Features = () => {
  const data = [
    {
      title: "Fast Global Fleet",
      desc: "Delivery across 200 planetary sectors within 24 hours of fabrication.",
      icon: "🚀",
    },
    {
      title: "Intergalactic Warranty",
      desc: "Comprehensive coverage that spans the entire known star systems.",
      icon: "🛡️",
    },
    {
      title: "Quantum Encryption",
      desc: "Military-grade protection using lattice-based cryptographic algorithms.",
      icon: "🔐",
    },
    {
      title: "Carbon Neutral",
      desc: "100% sustainable manufacturing powered by Dyson-sphere energy.",
      icon: "🌿",
    },
  ];

  return (
    <div
      style={{ background: "var(--bg)" }}
      className=" text-white pt-10 pb-16 px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ color: "var(--text_body)" }}
        className="text-4xl font-bold text-center mb-12"
      >
        Engineered for Excellence
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-wrap justify-center gap-6"
      >
        {data.map((item, index) => (
          <div
            style={{ background: "var(--card2)" }}
            key={index}
            className="  rounded-2xl p-6 w-[280px] hover:scale-105 transition duration-300"
          >
            <div className="text-3xl mb-4">{item.icon}</div>

            <h2
              style={{ color: "var(--text_body)" }}
              className="text-lg font-semibold mb-2"
            >
              {item.title}
            </h2>

            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Features;
