"use client";
import Image from "next/image";
import "aos/dist/aos.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const FlashSale = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 45,
    seconds: 12,
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        }

        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      id="sale"
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="mx-auto px-8 pt-10"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="bg-primary-container rounded-[3rem] p-12 overflow-hidden relative flex flex-col md:flex-row items-center gap-12"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.4),transparent_50%)]"></div>

        <div className="z-10 flex-1">
          <h2 className="text-on-primary-container text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-headline font-black mb-6 uppercase tracking-tighter">
            Midnight <br /> Flash Sale
          </h2>
          <p className="text-on-primary-container/80 text-xl font-body mb-8 max-w-sm">
            Up to 40% off on premium audio. Ends in:
          </p>

          <div className="flex gap-4">
            <div className="bg-on-primary-container text-primary-container p-4 rounded-2xl text-center min-w-15 sm:min-w-17.5 lg:min-w-20">
              <span className="text-3xl font-bold block">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Hours
              </span>
            </div>
            <div className="bg-on-primary-container text-primary-container p-4 rounded-2xl text-center min-w-15 sm:min-w-17.5 lg:min-w-20">
              <span className="text-3xl font-bold block">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Mins
              </span>
            </div>
            <div className="bg-on-primary-container text-primary-container p-4 rounded-2xl text-center min-w-15 sm:min-w-17.5 lg:min-w-20">
              <span className="text-3xl font-bold block">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-[10px] uppercase tracking-widest font-bold">
                Secs
              </span>
            </div>
          </div>
        </div>

        <div className="z-10 relative">
          <Image
            width={500}
            height={500}
            alt="Audio gear"
            className="w-full max-w-sm sm:max-w-md lg:max-w-lg"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOeRnC-gIZSj0EYhOV0D0egLx8zk_YsJwLwnQMnlRUyJPlNYQPo7Ur5UFx4DZjPdtpRR2OLV9V80H0WR_6AZCwnoBPUFKeDaMe8X40Qoip7XHCG-pP_sQkoh_Fu6RjINrmzld6kZ0YKORwiEDTlq5VlYspKF-QAhYwUMHUwfb7Py167pI_y0je252MCjwUzDvPJAIgNmXwC4S2ZrFyBBMkWuGayPGtbcAxXG8P3RaNMJChp7TrVaLF-aZabnpdLCXu4eMl53AQCoc"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default FlashSale;
