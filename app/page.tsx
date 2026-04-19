"use client";
import Body from "./components/body";
import Curated from "./components/Curated";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";
import Product from "./components/product";
import Reviews from "./components/Review";

export default function Home() {
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
