// @ts-ignore
import Aos from "aos";
import "aos/dist/aos.css";

const Curated = () => {
  return (
    <div
      data-aos="fade-down"
      className="flex flex-col gap-5 md:gap-8 lg:gap-10 justify-center items-center pt-20 md:pt-30 lg:pt-50 text-[#898787] px-5 md:px-10"
    >
      <div>CURATED COLLECTIONS</div>

      {/* Container */}
      <div className="flex flex-col lg:flex-row gap-5 w-full max-w-[1200px]">
        {/* Left Big Card */}
        <div
          data-aos="fade-right"
          className="cursor-pointer rounded-3xl w-full lg:w-[480px] p-8 relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

          <img
            alt="Smartphones"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXB3j_0SdZ3DNs66T9C6pPErogCXYMfTJZmXcsG-vAJ0Sw69pbDXmkgc2n-uHGxijDQL40pR0LPa-y6wTBrx1BpDtyrNatU4DIYyNSzBGQVFKhHIqryYznqCqhHW78od2E3I2In4L1x6HVdHyKRo1M4499QN13bJ7I54q9vQwm1rkVp6IZxUDjlGuVf2vSgxW5OXOmlgOlYWdyQRGQTcYzrsXlZFgycAg4K1B_I95Xf64hyDBi17_0x5vBhwFqO3saWmKVLpv-6FY"
          />

          <div className="relative z-20 h-full flex flex-col justify-end">
            <h3 className="text-2xl md:text-3xl font-bold text-white">
              Smartphones
            </h3>
            <p className="mb-4 text-sm md:text-base">
              The core of digital life.
            </p>
            <i className="ri-arrow-right-line text-[#1fb6cd] text-3xl"></i>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:gap-8 text-white w-full">
          <div className="flex flex-col sm:flex-row gap-5">
            <div
              data-aos="fade-left"
              className="w-full sm:w-1/2 h-60 cursor-pointer bg-[#201f1f] group rounded-2xl relative overflow-hidden"
            >
              <div className="pl-6 pt-5 flex flex-col gap-2">
                <i className="ri-macbook-line text-blue-700 text-2xl"></i>
                <div>Laptops</div>
              </div>

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvDvox4YmAO6o_8Z3YBr8sGqnTxyNEzDCCT8EoN4p_4QVzfQ3TuJbpvyandfor89Px4iwDHH3WmJuaLmKIQF4AlliDvotdIyG-xJazOkGBqrc7j5Z9Dlc1K4hcAGmKh_0wmqVeF0SVjG0bJ3nNf7H7T2rcJCh0wiTKzl8pzymbOfx537MXdxQ71iYMzlA7USFRT8wbBDdqU0Nzebt0BNKWoX6SW8UsANyTsBgpRwv-b9hR-55Yh11-0StS-OT_j3lUJEFJwX3T6xw"
                className="w-24 h-24 absolute -bottom-3.75 right-0 opacity-75 group-hover:scale-110 transition duration-300"
              />
            </div>

            <div
              data-aos="fade-left"
              className="w-full sm:w-1/2 h-60 cursor-pointer bg-[#201f1f] group rounded-2xl relative overflow-hidden"
            >
              <div className="pl-6 pt-5 flex flex-col gap-2">
                <i className="ri-timer-fill text-[#AC89FF] text-2xl"></i>
                <div>Smartwatches</div>
              </div>

              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAFo-xjav8cUmKxbvdeJKhF_2oNDPDcxjDVfWpDVmlp6786wzjjbzfa1crikrOT-itJ9JaBKI9NcMA9sXC6YAbezX2NRYdWG-7OHx8nXx1Wznwu1XNqUw9omxGAuIFfxUjg5Pn5n_d5WTtzCnDYF3ALrQbpES-__-Ce1VIHm1Z1Bcjoo_mmOOTZC8vVHOATvEM2fdgUPxk96GlPjZWjpDJQ-mhsf_Og74m-18-WsWFVjiGmDpF6W66Zl7E3RYpnMQ3VfJnRysmYstc"
                className="w-24 h-24 absolute bottom-[-10px] right-0 opacity-75 group-hover:scale-110 transition duration-300"
              />
            </div>
          </div>

          <div
            data-aos="fade-left"
            className="bg-[#201f1f] cursor-pointer rounded-3xl p-6 md:p-8 relative overflow-hidden h-60 group"
          >
            <div className="relative z-10 flex items-center justify-between">
              <div>
                <i className="ri-customer-service-fill text-blue-500 text-3xl mb-3"></i>
                <h3 className="text-xl md:text-2xl font-bold">Accessories</h3>
              </div>
            </div>

            <img
              alt="Headphones"
              className="absolute top-1/2 right-4 -translate-y-1/2 w-32 md:w-48 opacity-30 group-hover:opacity-60 transition-all duration-300"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDkiu6WAPB4SvAQtdMDNYvoq-wyaFZlAbgYwaSabQAHWzdm70uf8dg6sm28J0_HW1HqQjGx-mciFl-E715fT8rOY_RH_wui6KmrgCK2TrY6X5IMxciot7mf7ahV6JWu5DOV5RLnx3hvzuM3k9Q6SaQtorPy5A9bcEeWRozoeWILN9I7tw8dsryzSUFj8_00ZJQGPtyXeVTdnYKOLWIHGYDoKqiTcpC9wApKvSbwnUQlgS5RERkhOCOwdFDKCGmTSncFmx4bqbrDPlI"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Curated;
