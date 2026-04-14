"use client";
import Body from "./components/body";
import Curated from "./components/Curated";
import FlashSale from "./components/FlashSale";
import Footer from "./components/Footer";
import Product from "./components/product";
import Reviews from "./components/Review";

import AOSProvider from "./components/AOSProvider";
export default function Home() {
  return (
    <div>
      <AOSProvider>
        <Body />
        <Curated />
        <Product />
        <FlashSale />
        <Reviews />
        <Footer />
      </AOSProvider>
    </div>
  );
}
