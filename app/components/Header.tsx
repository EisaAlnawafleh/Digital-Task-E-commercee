"use client";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import BurgerMenu from "./menu";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";
const Header = () => {
  const { toggleTheme, theme } = useTheme();
  const [search, setSearch] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchs, setSearchs] = useState("");
  const pathname = usePathname();

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
    <div data-aos="fade-down" className="fixed top-0 z-50">
      <div
        style={{ background: "var(--bg_Header)", color: "var(--text)" }}
        className={`${scrolled ? "shadow-[var(--shadow)]" : ""}  ${theme}  h-20 pt-5 w-screen gap-5  rounded-b-xl bg-surface/60  backdrop-blur-md `}
      >
        <div className="flex flex-row  items-center justify-around    text-[#898787]">
          <div>
            <div style={{ color: "var(--text)" }} className={`header-name `}>
              Digtial Task Phone
            </div>
          </div>
          <div className=" flex-row gap-5 hidden xl:flex ">
            <Link href="/">
              <div
                style={{ color: "var(--text)" }}
                className={` font-bold cursor-pointer tr ${pathname === "/" ? "text-[#1fb6cd] border-b" : "hover:text-white"} `}
              >
                Home
              </div>
            </Link>
            <Link href="/product">
              <div
                style={{ color: "var(--text)" }}
                className={` font-bold cursor-pointer ${pathname === "/product" ? "text-[#1fb6cd] border-b" : "hover:text-white"} `}
              >
                SHOP
              </div>
            </Link>
            <div
              style={{ color: "var(--text)" }}
              className={` font-bold cursor-pointer ${pathname === " Categories" ? "text-[#1fb6cd] border-b" : "hover:text-white"} `}
            >
              Categories
            </div>
            <div
              style={{ color: "var(--text)" }}
              className={`font-bold cursor-pointer ${pathname === " Deals" ? "text-[#1fb6cd] border-b" : "hover:text-white"} `}
            >
              Deals
            </div>
            <div
              style={{ color: "var(--text)" }}
              className={` font-bold cursor-pointer ${pathname === " Contact" ? "text-[#1fb6cd] border-b" : "hover:text-white"} `}
            >
              Contact
            </div>
          </div>
          <div className="search-wrapper flex items-center ">
            <div
              style={{ background: "var(--Search)" }}
              className="search-full hidden sm:flex group-hover items-center w-96 h-10  rounded-2xl px-2 gap-2"
            >
              <i className="ri-search-line cursor-pointer"></i>
              <input
                style={{ background: "var(--Search)" }}
                type="text"
                placeholder="Search technology..."
                className="flex-1 bg-transparent  focus:outline-none"
              />
            </div>
          </div>
          <div className="xl:hidden flex items-center gap-2">
            <button
              onClick={() => setSearch(!search)}
              className="search-btn w-10 h-10  rounded-full flex items-center justify-center"
            >
              <i
                style={{ color: "var(--text)" }}
                className="ri-search-line  text-xl"
              ></i>
            </button>
            <BurgerMenu />
          </div>
          <div className=" hidden xl:flex  flex-row gap-5 text-2xl  text-white">
            <i
              style={{ color: "var(--text)" }}
              className="ri-global-line   hover:bg-(--bg_hover) h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"
            ></i>
            <i
              style={{ color: "var(--text)" }}
              onClick={toggleTheme}
              className="ri-moon-line hover:bg-(--bg_hover) h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"
            ></i>
            <i
              style={{ color: "var(--text)" }}
              className="ri-heart-line hover:bg-(--bg_hover) h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"
            ></i>
            <Link href="/product">
              <i
                style={{ color: "var(--text)" }}
                className="ri-shopping-cart-2-line hover:bg-(--bg_hover) h-10 w-10 flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"
              ></i>
            </Link>
            <Link href="/Login">
              <i
                style={{ color: "var(--text)" }}
                className="ri-user-line  h-10 w-10 hover:bg-(--bg_hover) flex justify-center items-center rounded-[999] transform-all duration-300 cursor-pointer"
              ></i>
            </Link>
          </div>
        </div>
        <div
          style={{ background: "var(--bg)" }}
          className={`${
            search ? "translate-y-0 " : "translate-y-full "
          }  inset-0 z-50 fixed  w-screen h-screen bg-black/95  transform transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col items-center justify-start pt-20 px-4 h-full">
            <button
              style={{ color: "var(--text)" }}
              onClick={() => setSearch(false)}
              className="absolute top-5 left-5 text-white text-3xl"
            >
              ✕
            </button>

            <div className="w-full max-w-2xl text-center md:text-left mb-6">
              <h3
                style={{ color: "var(--text)" }}
                className="text-2xl font-semibold text-center text-white"
              >
                what are you looking for
              </h3>
            </div>

            <div className="w-full max-w-2xl">
              <div
                style={{ background: "var(--Search)" }}
                className="flex items-center bg-[#1a1919] rounded-xl px-4 h-12 gap-2"
              >
                <i className="ri-search-line text-xl text-gray-400"></i>

                <input
                  style={{ color: "var(--text)" }}
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
    </div>
  );
};

export default Header;
