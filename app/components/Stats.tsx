"use client";
import { motion } from "framer-motion";
import { useEffect, useState ,useRef } from "react";

type CounterProps = {
  target: number;
  suffix: string;
};

const Counter = ({ target, suffix }: CounterProps) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStart(true);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!start) return;

    let value = 0;
    const increment = target / 80;

    const timer = setInterval(() => {
      value += increment;

      if (value >= target) {
        value = target;
        clearInterval(timer);
      }

      setCount(Math.floor(value));
    }, 20);

    return () => clearInterval(timer);
  }, [start, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};
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
            <Counter target={2000000} suffix="+" />
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
            <Counter target={50} suffix="+" />
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
            <Counter target={99} suffix="%" />
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
