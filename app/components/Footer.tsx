import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  return (
    <div
      data-aos="fade-down"
      className="grid grid-cols-1 md:grid-cols-4 gap-12 mt-20 px-12 py-20 border-t border-zinc-800/30 max-w-360 mx-auto"
    >
      <div data-aos="fade-right" className="flex flex-col gap-6">
        <div className="text-xl font-black text-zinc-100 font-headline">
          Digtial Task Phone
        </div>
        <p className="text-zinc-500 font-body text-sm">
          Your destination for cutting-edge smartphones and smart accessories.
        </p>
      </div>

      <div data-aos="fade-down" className="flex flex-col gap-4">
        <h4 className="text-cyan-400 font-headline tracking-wide text-xs uppercase font-bold">
          Quick Links
        </h4>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Shop
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              New Arrivals
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Best Sellers
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Brands
            </a>
          </li>
        </ul>
      </div>

      <div data-aos="fade-down" className="flex flex-col gap-4">
        <h4 className="text-cyan-400 font-headline tracking-wide text-xs uppercase font-bold">
          Support
        </h4>
        <ul className="flex flex-col gap-2">
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Privacy Policy
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Terms of Service
            </a>
          </li>
          <li>
            <a
              className="font-inter tracking-wide text-xs uppercase text-zinc-500 hover:text-zinc-200 hover:translate-x-1 transition-all duration-300"
              href="#"
            >
              Shipping Info
            </a>
          </li>
        </ul>
      </div>

      <div data-aos="fade-left" className="flex flex-col gap-6">
        <h4 className="text-cyan-400 font-headline tracking-wide text-xs uppercase font-bold">
          Newsletter
        </h4>
        <div className="relative group">
          <input
            className="w-full bg-zinc-800/50 border-none rounded-lg py-3 px-4 text-xs font-label focus:ring-1 focus:ring-cyan-400 transition-all outline-none"
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
      </div>
    </div>
  );
};

export default Footer;
