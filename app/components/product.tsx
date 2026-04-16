import Image from "next/image";
import "aos/dist/aos.css";
import Link from "next/link";
const Product = () => {
  return (
    <div data-aos="fade-down" className="bg-[#131313]">
      <div className="mx-20 m-auto overflow-hidden   mt-45  ">
        <div className="flex flex-row gap-10 pt-20 flex-wrap  justify-between  ">
          <div className="flex flex-col gap-3 justify-center ">
            <div className="text-[32px]" data-aos="fade-right">
              Pinnacle <span className="text-[#1fb6cd]">Performance</span>
            </div>
            <div data-aos="fade-right" className="text-[#898787]">
              Selected masterpieces of engineering.
            </div>
          </div>
          <div
            data-aos="fade-left"
            className="text-[#1fb6cd]/80  justify-center    mt-4 flex gap-3 cursor-pointer"
          >
            <Link href="/product">
              <div className="hover:text-[#1fb6cd] transform duration-300">
                View All
              </div>
            </Link>
            <i className="ri-arrow-right-line text-[#1fb6cd]/80 hover:text-[#1fb6cd] transform duration-300 "></i>
          </div>
        </div>
      </div>

      <div
        data-aos="fade-up"
        className="flex mx-5 flex-wrap m-auto flex-row justify-center items-center   gap-8 p-8  mt-5 "
      >
        <div className="group cursor-pointer  w-full sm:w-[48%] lg:w-[30%]  bg-[#131313] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2">
          <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
            <Image
              width={300}
              height={300}
              alt=""
              src="https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
              className="w-4/5 group-hover:scale-110 transition duration-500 object-contain"
            />
            <span className="absolute top-4 left-4 bg-cyan-400 text-black text-[10px] font-bold px-3 py-1 rounded-full">
              NEW
            </span>
          </div>

          <h4 className="text-white font-bold text-lg mb-1">iPhone 15 Pro</h4>

          <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
            ★ <span className="text-gray-400">4.9 (128 reviews)</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white text-xl font-bold">$999.00</p>
            <button className="w-10 h-10 cursor-pointer rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
              🛍️
            </button>
          </div>
        </div>

        <div className="group cursor-pointer  w-full sm:w-[48%] lg:w-[30%] bg-[#131313] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2">
          <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
            <Image
              width={300}
              height={300}
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA53HCm-tQHVgfJ96-3zyyfZtlDomaaqnnG35QjD_mMxbRN0qL3XEqPGbA3-NFG8uCJy3Yo8yaXpndkPZLVefETNKAzYVhPspMzg8RSd_PSwhk6PizhOqb4ID8VXuyRsbllFp0nyluGj6npNpr5iUcuYwU3BtW86bpYVd8uupxDB2nyM98FBswKDlyPrk1U8DQdTv9xcgo1gBYj0vz8iE9c9KkSwaU3lv2enqT-oJdVIRNyucKRnRnmqPmtmxB-VME8eNoiLSQzRWo"
              className="w-4/5 group-hover:scale-110 transition duration-500 object-contain"
            />
          </div>

          <h4 className="text-white font-bold text-lg mb-1">Smart Watch Pro</h4>

          <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
            ★ <span className="text-gray-400">4.8 (240 reviews)</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white text-xl font-bold">$349.00</p>
            <button className="w-10 h-10 cursor-pointer rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
              🛍️
            </button>
          </div>
        </div>

        <div className="group cursor-pointer  w-full sm:w-[48%] lg:w-[30%] bg-[#131313] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2">
          <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
            <Image
              width={300}
              height={300}
              alt=""
              src="https://images.unsplash.com/photo-1580910051074-3eb694886505"
              className="w-4/5 group-hover:scale-110 transition duration-500 object-contain"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              SALE -20%
            </span>
          </div>

          <h4 className="text-white font-bold text-lg mb-1">
            Samsung Galaxy S24
          </h4>

          <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
            ★ <span className="text-gray-400">4.7 (89 reviews)</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-xl font-bold">$699.00</p>
              <p className="text-gray-500 text-xs line-through">$899.00</p>
            </div>
            <button className="w-10 h-10 cursor-pointer rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
              🛍️
            </button>
          </div>
        </div>
        <div className="group cursor-pointer  w-full sm:w-[48%] lg:w-[30%] bg-[#131313] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2">
          <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
            <Image
              width={300}
              height={300}
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuChLhja0RCgMMR0xMOD5NFz2my_3XZezz7-9RKtkR8CJ1oGzeGdhebMOAkDq2uEoNhZ1_TjwKaZZz4q6q205oaCnX3L0b2r-6a7Tp6-e2ARhNsecYl_Jc-r4unxUbaKACKdeV4MAX0vl0Opy5XE0C76XSHm7RjJ8-B9bmw34xb-PxXsFRr6T7WRQttfDCAyLlz0i6OWtC5tdt-r2u446oO9cmvvKjlY28OnuYXTb7Vs56MZLxeRkQrgvXXzeviIEf09pmcojMxFxN4"
              className="w-4/5 group-hover:scale-110 transition duration-500 object-contain"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              SALE -20%
            </span>
          </div>

          <h4 className="text-white font-bold text-lg mb-1">Ether Mini S</h4>

          <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
            ★ <span className="text-gray-400">4.7 (89 reviews)</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-xl font-bold">$699.00</p>
              <p className="text-gray-500 text-xs line-through">$899.00</p>
            </div>
            <button className="w-10 h-10 cursor-pointer rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
              🛍️
            </button>
          </div>
        </div>
        <div className="group cursor-pointer  w-full sm:w-[48%] lg:w-[30%] bg-[#131313] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2">
          <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
            <Image
              width={300}
              height={300}
              alt=""
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-nV5pyGIVG3gd_xk8p64k-qBhJeTe8qaf_Gn_yKl-dVoa7suwGdSzdvX4Sr3XEnmGW152GYINOWOqCZO3LadWzUrNswevc7J1MF-YG8p_AT5xAj6GoHbWKOqZsdauyqQuZoSxtrIfO1U2nCokds_ZkJZY3fvUC3KdjjLPZuO6tdcP68XUNyadZax5WyCGar_0IVuZ0IztDVelnMBtnOVPtEnN9YiV6M96r3SVzyQQMVzSYytdNxrTECAQqk86rK-KJ74n9Spe9h8"
              className="w-4/5 group-hover:scale-110 transition duration-500 object-contain"
            />
            <span className="absolute top-4 left-4 bg-red-500 text-white text-[10px] font-bold px-3 py-1 rounded-full">
              SALE -10%
            </span>
          </div>

          <h4 className="text-white font-bold text-lg mb-1">
            Ether X1 Titanium
          </h4>

          <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
            ★ <span className="text-gray-400">4.7 (89 reviews)</span>
          </div>

          <div className="flex justify-between items-center">
            <div>
              <p className="text-white text-xl font-bold">$699.00</p>
              <p className="text-gray-500 text-xs line-through">$899.00</p>
            </div>
            <button className="w-10 h-10 cursor-pointer rounded-full bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
              🛍️
            </button>
          </div>
        </div>

        <div className="group cursor-pointer bg-[#131313]  w-full sm:w-[48%] lg:w-[30%] rounded-3xl p-6 transition-all duration-500 hover:shadow-[0_0_10px_rgba(0,255,255,0.1)] hover:-translate-y-2">
          <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-[#1a1a1a] flex items-center justify-center">
            <Image
              width={300}
              height={300}
              alt=""
              src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0"
              className="w-4/5 group-hover:scale-110 transition duration-500 object-contain"
            />
          </div>

          <h4 className="text-white font-bold text-lg mb-1">iPad Pro</h4>

          <div className="flex items-center gap-1 mb-4 text-yellow-400 text-sm">
            ★ <span className="text-gray-400">5.0 (52 reviews)</span>
          </div>

          <div className="flex justify-between items-center">
            <p className="text-white text-xl font-bold">$949.00</p>
            <button className="w-10 h-10 rounded-full cursor-pointer bg-[#1f1f1f] flex items-center justify-center hover:bg-cyan-400 hover:text-black transition">
              🛍️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
