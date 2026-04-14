"use client";
import { useState } from "react";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);
  const itemStyle =
    "flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition hover:bg-white/10 hover:translate-x-1";
  return (
    <div className="relative s ">
      <div
        onClick={() => setOpen(!open)}
        className="w-10 h-10 flex flex-col  justify-center items-center cursor-pointer rounded-lg hover:bg-[#17181a] transition"
      >
        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            open ? "rotate-45 translate-y-[6px]" : "-translate-y-[6px]"
          }`}
        ></span>

        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></span>

        <span
          className={`block w-6 h-[2px] bg-white transition-all duration-300 ${
            open ? "-rotate-45 -translate-y-[6px]" : "translate-y-[6px]"
          }`}
        ></span>
      </div>

      <div
        className={`
             ${open ? "translate-x-0" : "translate-x-full"}
             transform transition-transform duration-300 ease-in-out fixed  right-0 top-0 bg-black/40 backdrop-blur-2xl border-l border-white/10 shadow-2xl w-35  h-screen text-white/80flex flex-col gap-4 z-50`}
      >
        <div className="flex  flex-col gap-5 text-[14px]  pt-5 ">
          <div className={itemStyle + " text-red-400"}>
            <i
              onClick={() => setOpen(false)}
              className="ri-close-large-line cursor-pointer"
            ></i>
            <span>Close</span>
          </div>
          <hr />
          <div className={itemStyle}>
            <i className="ri-home-2-line cursor-pointer"></i>
            <span>Home</span>
          </div>
          <div className={itemStyle}>
            <i className="ri-search-line  cursor-pointer"></i>
            <span>Search</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-store-line cursor-pointer"></i>
            <span>Store</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-shopping-cart-2-line cursor-pointer"></i>
            <span>Cart</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-heart-line cursor-pointer"></i>
            <span>Wishlist</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-user-line cursor-pointer"></i>
            <span>Profile</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-percent-line cursor-pointer"></i>
            <span>Offers</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-phone-line cursor-pointer"></i>
            <span>Contact</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-moon-line cursor-pointer"></i>
            <span>Dark Mode</span>
          </div>

          <div className={itemStyle}>
            <i className="ri-global-line cursor-pointer"></i>
            <span>Language</span>
          </div>
        </div>
      </div>

      <div
        onClick={() => setOpen(false)}
        className={` ${open ? "fixed" : "hidden"}   inset-0  z-40  w-screen h-screen  bg-black/80`}
      ></div>
    </div>
  );
};

export default BurgerMenu;
