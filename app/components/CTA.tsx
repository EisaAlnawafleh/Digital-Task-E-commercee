"use client"
import { motion } from "framer-motion";
const CTA = () => {
  return (
    <div
      style={{ background: "var(--bg_Header)" }}
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-8 md:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        style={{ background: "var(--card2)" }}
        className="   max-w-4xl mx-auto glass-card rounded-3xl p-6 sm:p-8 md:p-12 text-center flex flex-col items-center justify-center"
      >
        <h2
          style={{ color: "var(--text_body)" }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 md:mb-8"
        >
          Join Digtial Task Phone today.
        </h2>

        <p
          style={{ color: "var(--text)" }}
          className="mb-6 md:mb-10 text-sm sm:text-base md:text-lg "
        >
          Step into the next evolution of connectivity. Be the first to own the{" "}
          <br />
          interface of tomorrow.
        </p>

        <div
          style={{ color: "var(--text_body)" }}
          className=" hover:scale-105 cursor-pointer transform duration-300 w-32 sm:w-36 md:w-40 h-10 md:h-13 text-sm md:text-basehover:shadow-[0_0_20px_rgba(105,218,255,0.4)] transform duration-300 font-[500] cursor-pointer rounded-[10px] flex justify-center items-center  bg-gradient-to-r from-sky-400 to-purple-500"
        >
          Get Started
        </div>
      </motion.div>
    </div>
  );
};

export default CTA;
