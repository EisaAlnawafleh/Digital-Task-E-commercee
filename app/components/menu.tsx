"use client";
import { useState } from "react";

const BurgerMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative  ">
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

      {open && (
        <div
          data-aos="fade-left"
          className="
    fixed top-0 right-0
    h-screen w-50
    bg-[#111] text-white
    shadow-lg flex flex-col gap-4 z-50
   
  "
        >
          <div className="flex flex-col gap-8 text-2xl z-999 pl-5  pt-5">
            <div className="flex items-center gap-3">
              <i
                onClick={() => setOpen(false)}
                className="ri-close-large-line cursor-pointer"
              ></i>
              <span>Close</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-search-line text-xl cursor-pointer"></i>
              <span>Search</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-home-2-line cursor-pointer"></i>
              <span>Home</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-store-line cursor-pointer"></i>
              <span>Store</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-shopping-cart-2-line cursor-pointer"></i>
              <span>Cart</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-heart-line cursor-pointer"></i>
              <span>Wishlist</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-user-line cursor-pointer"></i>
              <span>Profile</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-percent-line cursor-pointer"></i>
              <span>Offers</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-phone-line cursor-pointer"></i>
              <span>Contact</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-moon-line cursor-pointer"></i>
              <span>Dark Mode</span>
            </div>

            <div className="flex items-center gap-3">
              <i className="ri-global-line cursor-pointer"></i>
              <span>Language</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BurgerMenu;
