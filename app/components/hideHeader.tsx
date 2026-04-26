"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const HeaderWrapper = () => {
  const pathname = usePathname();

  const hideHeader = pathname === "/Login" || pathname.startsWith("/product/");

  if (hideHeader) return null;

  return <Header />;
};

export default HeaderWrapper;
