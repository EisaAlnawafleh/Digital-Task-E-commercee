"use client"
import { motion } from "framer-motion";
const MissionVision = () => {
  return (
    <div
      style={{ background: "var(--bg_Header)" }}
      className="w-full h-100  flex items-center justify-center px-6 my-30"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-col md:flex-row gap-6 max-w-6xl w-full"
      >
        <div
          style={{ background: "var(--card3)" }}
          className="flex-1 bg-gradient-to-br from-[#111827] to-[#0b0f19] p-8 rounded-2xl shadow-lg"
        >
          <div className="mb-6"></div>

          <h2
            style={{ color: "var(--text_body)" }}
            className="text-white text-2xl font-bold mb-4"
          >
            Our Mission
          </h2>

          <p
            style={{ color: "var(--text)" }}
            className="text-gray-400 leading-relaxed"
          >
            To democratize the next generation of mobile computing. We believe
            that cutting-edge, quantum-ready technology shouldn't be a luxury—it
            should be the standard for human connection.
          </p>
        </div>

        <div
          style={{ background: "var(--card3)" }}
          className="flex-1 bg-gradient-to-br from-[#1f1b2e] to-[#0b0f19] p-8 rounded-2xl shadow-lg"
        >
          <div className="mb-6"></div>

          <h2
            style={{ color: "var(--text_body)" }}
            className="text-white text-2xl font-bold mb-4"
          >
            Our Vision
          </h2>

          <p
            style={{ color: "var(--text)" }}
            className="text-gray-400 leading-relaxed"
          >
            To orchestrate the global transition into the 2030 digital nebula.
            We envision a world where physical and digital realities are
            indistinguishable through seamless Nova hardware.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default MissionVision;
