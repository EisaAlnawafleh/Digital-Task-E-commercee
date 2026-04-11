"use client";
import Body from "./components/body";
import Curated from "./components/Curated";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";
import Product from "./components/product";
import Reviews from "./components/Review";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
    <div>
      <Body />
      <Curated />
      <Product />
      <FlashSale />
      <Reviews />
      <Footer />
    </div>
  );
}
