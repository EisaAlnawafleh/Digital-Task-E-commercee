import Image from "next/image";
import "aos/dist/aos.css";
const Body = () => {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col lg:flex-row px-5 md:px-10 lg:px-15 gap-8 md:gap-12 lg:gap-15 pt-30 md:pt-40 lg:pt-70 justify-around"
    >
      <div
        data-aos="fade-left"
        className="flex flex-col gap-6 md:gap-10 text-white text-center lg:text-left items-center lg:items-start"
      >
        <div className="text-[16px] md:text-[20px] text-[#81ecff]">
          The Future is Here
        </div>
        <div className="text-[32px] md:text-[44px] lg:text-[56px] leading-none">
          Experience <br /> the{" "}
          <span className="text-[#81ecff]">Digital Task Phone</span>{" "}
        </div>
        <div className=" text-[20px] text-[#898787]">
          Ultra-premium mobile technology meets <br /> surgical precision
          design. Redefining what you <br /> expect from a smartphone.
        </div>
        <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start items-center">
          {" "}
          <div className=" shadow-[0_0_10px_rgba(129,236,255,0.3)]  cursor-pointer transform duration-300 hover:scale-105 text-black border bg-[#81ecff] w-37.5 h-14 font-medium flex justify-center items-center rounded-3xl">
            SHOP NOW
          </div>
          <div className="w-54 h-14 hover:bg-[#26262666]/120 transform duration-300 bg-[#26262666] cursor-pointer font-medium  flex justify-center items-center rounded-3xl">
            EXPLORE DEALS
          </div>
        </div>
      </div>
      <div>
        <div data-aos="fade-right" className="relative  group">
          <Image
            width={500}
            height={650}
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLVB_hxFWsQ8KEoVGAXxxW-5O6JXlhto-9r8Z_5OTHP3q1w7eGH8vadSaFeVOYyDvEvbaOdoJk-GMMkwv47pcyYEeaGb5qXnLGdHNmFCPb9nWeL_RP0oIMTa3e6tgI0DNGZpGmLCxQ4DRqk6jlFJV91wLaGvcLzqmU5sn310K77P3R-IucaGNjgChbmxdYEoMxeR6LnsL38y3GQc-MY8U7fedEaVpUPBZOq8rdkjGXdLcKNPBwS2NUWcxb64s4iX7D0FOSeIT6RaI"
            alt="Luxury Smartphone mockup"
            className="relative rounded-[3rem] hover:scale-105 rotate-0 lg:rotate-6 lg:group-hover:rotate-0 transition-all duration-500 max-h-150 w-auto border-10 border-[#26262666] mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Body;
