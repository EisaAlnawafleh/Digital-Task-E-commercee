"use client"
import { motion } from "framer-motion";
const TimeLine = () => {
  return (
    <div className="pt-14 px-8 md:px-2 pb-10 bg-surface-container-low">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="max-w-7xl mx-auto"
      >
        <div className="mb-16 text-center">
          <span className="label-md uppercase tracking-[0.2em] text-[#d674ff] text-secondary font-bold mb-4 block">
            Genesis
          </span>
          <h2
            style={{ color: "var(--text_body)" }}
            className="font-headline text-4xl md:text-5xl font-bold tracking-tight"
          >
            Our Journey
          </h2>
        </div>

        <div className="relative space-y-12">
          <div className="relative flex flex-col md:flex-row md:items-center justify-between group">
            <div className="md:w-5/12 mb-4 md:mb-0 text-left md:text-right">
              <h3 className="font-headline text-2xl text-[#69daff] font-bold text-primary mb-2">
                2024
              </h3>
              <p
                style={{ color: "var(--text)" }}
                className="text-on-surface-variant"
              >
                Digital Task Phone is born with a bold vision: transforming
                smartphones into intelligent task-driven companions powered by
                adaptive AI.
              </p>
            </div>

            <div
              style={{ color: "var(--text_body)" }}
              className="  point absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background z-10"
            ></div>
            <div className="md:w-5/12"></div>
          </div>

          <div className="relative flex flex-col md:flex-row md:items-center justify-between group">
            <div className="md:w-5/12"></div>

            <div
              style={{ color: "var(--text_body)" }}
              className=" point absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-secondary border-4 border-background z-10"
            ></div>

            <div className="md:w-5/12 text-left">
              <h3 className="font-headline text-2xl text-[#d674ff] font-bold text-secondary mb-2">
                2026
              </h3>
              <p
                style={{ color: "var(--text)" }}
                className="text-on-surface-variant"
              >
                Introduction of TaskOS, a smart mobile system designed to
                organize, predict, and automate daily tasks seamlessly in real
                time.
              </p>
            </div>
          </div>

          <div className="relative flex flex-col md:flex-row md:items-center justify-between group">
            <div className="md:w-5/12 text-left md:text-right">
              <h3 className="font-headline text-2xl text-[#69daff] font-bold text-primary mb-2">
                Today
              </h3>
              <p
                style={{ color: "var(--text)" }}
                className="text-on-surface-variant"
              >
                Expanding into a fully connected digital ecosystem, where your
                phone doesn’t just respond — it thinks, plans, and acts ahead of
                you.
              </p>
            </div>

            <div
              style={{ color: "var(--text_body)" }}
              className=" point absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-fixed border-4 border-background z-10"
            ></div>
            <div className="md:w-5/12"></div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TimeLine;
