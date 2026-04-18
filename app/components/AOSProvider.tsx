"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  children: React.ReactNode;
};

const AOSProvider = ({ children }: Props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
      easing: "ease-in-out",
    });

    AOS.refresh();
  }, []);

  return <>{children}</>;
};

export default AOSProvider;
