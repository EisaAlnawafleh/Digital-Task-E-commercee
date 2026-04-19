import "aos/dist/aos.css";
import Link from "next/link";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <div
      style={{ background: "var(--bg)", color: "var(--text)" }}
      className="grid grid-cols-1 md:grid-cols-4 gap-12 pt-20 px-12 py-20 border-t border-zinc-800/30  mx-auto"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-col gap-6"
      >
        <div className="text-xl font-black text-zinc-100 font-headline">
          Digtial Task Phone
        </div>
        <p className="text-zinc-500 font-body text-sm">
          Your destination for cutting-edge smartphones and smart accessories.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-col gap-4"
      >
        <h4 className="text-cyan-400 font-headline tracking-wide text-xs uppercase font-bold">
          Quick Links
        </h4>
        <ul className="flex flex-col gap-2">
          <li className="hover:text-[var(--footer_text)] transform duration-300">
            <Link href="/product">
              <div>Shop</div>
            </Link>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-[var(--footer_text)] hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              New Arrivals
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-[var(--footer_text)] hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Best Sellers
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-[var(--footer_text)] hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Brands
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-col gap-4"
      >
        <h4 className="text-cyan-400 font-headline tracking-wide text-xs uppercase font-bold">
          Support
        </h4>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-[var(--footer_text)] hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-[var(--footer_text)] hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-[var(--footer_text)] hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-[var(--footer_text)] hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Shipping Info
            </a>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{
          duration: 0.7,
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="flex flex-col gap-6"
      >
        <h4 className="text-cyan-400 font-headline tracking-wide text-xs uppercase font-bold">
          Newsletter
        </h4>
        <div className="relative group">
          <input
            style={{ background: "var(--Search)" }}
            className="w-full  border-none rounded-lg py-3 px-4 text-xs font-label focus:ring-1 focus:ring-cyan-400 transition-all outline-none"
            placeholder="ENTER EMAIL"
            type="email"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 text-cyan-400 material-symbols-outlined">
            <i className="ri-arrow-right-line text-2xl cursor-pointer "></i>
          </button>
        </div>

        <div className="flex gap-4">
          <span className="material-symbols-outlined text-zinc-500 hover:text-cyan-400 cursor-pointer transition-colors duration-300">
            <i className="ri-share-line text-2xl"></i>
          </span>
          <span className="material-symbols-outlined text-zinc-500 hover:text-cyan-400 cursor-pointer transition-colors duration-300">
            <i className="ri-global-line text-2xl"></i>
          </span>
          <span className="material-symbols-outlined text-zinc-500 hover:text-cyan-400 cursor-pointer transition-colors duration-300">
            <i className="ri-rss-line text-2xl"></i>
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default Footer;
