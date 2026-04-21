"use client";
import { motion } from "framer-motion";
const Stats = () => {
  return (
    <div
      style={{ background: "var(--bg_Header)" }}
      className="py-24 px-8 md:px-20 "
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 text-center"
      >
        <div className="flex flex-col gap-5">
          <div className="text-6xl font-extrabold text-primary text-[#69daff]">
            2M+
          </div>
          <p
            style={{ color: "var(--text_body)" }}
            className="uppercase text-xs"
          >
            Units Sold
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-6xl font-extrabold text-secondary text-[#d674ff]">
            50+
          </div>
          <p
            style={{ color: "var(--text_body)" }}
            className="uppercase text-xs"
          >
            Global Hubs
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="text-6xl font-extrabold text-primary-fixed text-[#69daff]">
            99%
          </div>
          <p
            style={{ color: "var(--text_body)" }}
            className="uppercase text-xs"
          >
            Satisfied Users
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Stats;
