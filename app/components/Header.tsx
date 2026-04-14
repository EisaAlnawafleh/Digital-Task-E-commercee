"use client";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import BurgerMenu from "./menu";
import Link from "next/link";
const Header = () => {
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchs, setSearchs] = useState("");
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <div
      data-aos="fade-down"
      className={`${scrolled ? "shadow-[0_0_20px_black]" : ""}    fixed top-0 h-20 pt-5 w-screen gap-5 z-50 rounded-b-xl bg-surface/60 bg-zinc-950/60 backdrop-blur-md `}
    >
      <div className="flex flex-row  items-center justify-around    text-[#898787]">
        <div>
          <div className="header-name ">Digtial Task Phone</div>
        </div>
        <div className=" flex-row gap-5 hidden xl:flex ">
          <div className="text-[#1fb6cd] border-b font-bold cursor-pointer ">
            Home
          </div>
          <div className="hover:text-white cursor-pointer transform-all duration-300">
            SHOP
          </div>
          <div className="hover:text-white cursor-pointer transform-all duration-300">
            Categories
          </div>
          <div className="hover:text-white cursor-pointer transform-all duration-300">
            Deals
          </div>
          <div className="hover:text-white cursor-pointer transform-all duration-300">
            Contact
          </div>
        </div>
        <div className="search-wrapper flex items-center ">
          <div className="search-full hidden sm:flex group-hover items-center w-96 h-10 bg-[#1a1919] rounded-2xl px-2 gap-2">
            <i className="ri-search-line cursor-pointer"></i>
            <input
              type="text"
              placeholder="Search technology..."
              className="flex-1 bg-transparent text-white focus:outline-none"
            />
          </div>
        </div>
        <div className="xl:hidden flex items-center gap-2">
          <button
            onClick={() => setSearch(!search)}
            className="search-btn w-10 h-10 bg-[#1a1919] rounded-full flex items-center justify-center"
          >
            <i className="ri-search-line text-white text-xl"></i>
          </button>
          <BurgerMenu />
        </div>
        <div className=" hidden xl:flex  flex-row gap-5 text-2xl  text-white">
          <i className="ri-global-line hover:bg-[#17181a] h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"></i>
          <i className="ri-moon-line hover:bg-[#17181a] h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"></i>
          <i className="ri-heart-line hover:bg-[#17181a] h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"></i>
          <i className="ri-shopping-cart-2-line hover:bg-[#17181a] h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"></i>
          <Link href="/Login">
            <i className="ri-user-line hover:bg-[#17181a] h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"></i>
          </Link>
        </div>
      </div>
      <div
        className={`${
          search ? "translate-y-0" : "translate-y-full"
        } fixed inset-0 z-50   w-screen h-screen bg-black/95  transform transition-transform duration-300 ease-in-out`}
      >
        <div className="flex flex-col items-center justify-start pt-20 px-4 h-full">
          <button
            onClick={() => setSearch(false)}
            className="absolute top-5 left-5 text-white text-3xl"
          >
            ✕
          </button>

          <div className="w-full max-w-2xl text-center md:text-left mb-6">
            <h3 className="text-2xl font-semibold text-center text-white">
              what are you looking for
            </h3>
          </div>

          <div className="w-full max-w-2xl">
            <div className="flex items-center bg-[#1a1919] rounded-xl px-4 h-12 gap-2">
              <i className="ri-search-line text-xl text-gray-400"></i>

              <input
                type="search"
                value={searchs}
                onChange={(e) => setSearchs(e.target.value)}
                placeholder="Enter the search term"
                className="flex-1 bg-transparent text-white focus:outline-none"
              />
            </div>

            <div className="mt-4 text-gray-400 text-sm">
              {searchs === "" ? null : "No results found"}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
