import { useEffect, useState } from "react";

export default function ScrollTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return show ? (
    <button
      className="fixed bottom-5 right-5"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <div className="fixed bottom-8 right-8 z-[9999] bg-[#131313] text-white w-12 h-12 flex justify-center items-center rounded-full cursor-pointer hover:scale-110 transition">
        <i className="ri-arrow-up-line text-xl"></i>
      </div>
    </button>
  ) : null;
}
