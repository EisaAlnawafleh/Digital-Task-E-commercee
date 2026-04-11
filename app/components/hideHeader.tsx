"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const HeaderWrapper = () => {
  const pathname = usePathname();

  const hideHeaderRoutes = ["/Login"];

  if (hideHeaderRoutes.includes(pathname)) return null;

  return <Header />;
};

export default HeaderWrapper;
