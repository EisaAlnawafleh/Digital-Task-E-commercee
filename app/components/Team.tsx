"use client";
import { motion } from "framer-motion";
const Team = () => {
  return (
    <div
      style={{ background: "var(--bg)" }}
      className="bg-[#05070d] text-white py-20 px-6"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="text-center mb-16"
      >
        <h1
          style={{ color: "var(--text_body)" }}
          className="text-4xl font-bold"
        >
          The Architects
        </h1>
        <p className="text-gray-400 mt-2">Meet the minds behind the Nebula.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-wrap justify-center gap-45"
      >
        <div className="text-center group cursor-pointer">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-cyan-500"></div>

            <img
              src="image/img_user.jpeg"
              alt=""
              className="w-full grayscale hover:grayscale-0 h-full object-cover rounded-full border border-gray-700 group-hover:scale-105 transition duration-500"
            />
          </div>

          <h2
            style={{ color: "var(--text_body)" }}
            className="mt-6 text-xl font-semibold"
          >
            eisa
          </h2>

          <p className="text-cyan-400 text-sm font-bold mt-1">
            front end developer
          </p>
        </div>
        <div className="text-center group cursor-pointer">
          <div className="relative w-48 h-48 mx-auto">
            <div className="absolute inset-0 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition duration-500 bg-[#aa70ff]"></div>

            <img
              src="https://avatars.githubusercontent.com/u/179719134?v=4"
              alt=""
              className=" grayscale hover:grayscale-0 transition duration-500 w-full h-full object-cover rounded-full border border-gray-700 group-hover:scale-105 "
            />
          </div>

          <h2
            style={{ color: "var(--text_body)" }}
            className="mt-6 text-xl font-semibold"
          >
            ezz
          </h2>

          <p className="text-[#aa70ff] font-bold text-sm mt-1">
            back end developer
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default Team;
