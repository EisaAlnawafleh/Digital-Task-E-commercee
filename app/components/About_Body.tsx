import Image from "next/image";
import { motion } from "framer-motion";
const About_Body = () => {
  return (
    <div
      style={{ background: "var(--bg_Header)" }}
      className="py-20 md:py-32 px-6 mt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16 max-w-6xl mx-auto"
      >
        <div className="flex flex-col gap-6 text-center md:text-left w-full md:w-1/2">
          <h2
            style={{ color: "var(--text_body)" }}
            className="text-[22px] sm:text-[30px] md:text-[48px] lg:text-[64px] font-bold leading-tight"
          >
            Redefining the
            <span className="block bg-gradient-to-r from-sky-300 to-purple-400 text-transparent bg-clip-text">
              Future of Mobility
            </span>
          </h2>

          <p
            style={{ color: "var(--text)" }}
            className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 max-w-md mx-auto md:mx-0"
          >
            At Digital Task Phone, we don’t just build phones...
          </p>

          <div className="flex flex-row gap-4 justify-center md:justify-start">
            <button className=" hover:scale-105  cursor-pointer transform duration-300 w-32 sm:w-36 md:w-40 h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base bg-gradient-to-r from-sky-400 to-purple-500 rounded-lg hover:shadow-[0_0_20px_rgba(105,218,255,0.4)]">
              Shop The Future
            </button>

            <button className="w-32 cursor-pointer transform duration-300 sm:w-36 md:w-40 h-10 sm:h-11 md:h-12 text-xs sm:text-sm md:text-base bg-[#1f1f22]/90 hover:bg-[#1f1f22] rounded-lg">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/2">
          <div className="w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[460px]">
            <Image
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6dgXqYkhREyIZiDOkKtigd4JWXZDoU0qagUR1Jla_x_xo6xckOMXte6ZGUGPl-Vv7u0G5qnQk-89Nr6mSryW34IJ_d0lcs3ryCC_20-A8At6B8phISGZ_ygZKXE__V5KN_giX2t6Hg8czN6jlpZFnhlSFRMGRMTpRU6vDwGdWuL4di8if20pUmqXZt3mMZZ0UyGnp-FkgteIY0aBmzkEaDdtDJZYY5r3SXiCRfkDXVUQgrFJpESHWPJz9rjjQRW8RQyc293BaOnM"
              alt=""
              width={600}
              height={600}
              className="w-full h-auto rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About_Body;
