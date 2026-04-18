import "aos/dist/aos.css";
import Image from "next/image";
const Reviews = () => {
  return (
    <div data-aos="fade-down">
      <section
        style={{ background: "var(--bg)", color: "var(--text)" }}
        className="py-24  mx-auto px-8 flex-wrap"
      >
        <h2 className="text-center font-label uppercase tracking-widest text-on-surface-variant mb-16">
          User Reviews
        </h2>

        <div className="flex flex-row flex-wrap justify-center items-center  gap-7">
          <div
            style={{ background: "var(--bg_Rev)" }}
            className="bg-surface-container-high p-10 w-full sm:w-[48%] lg:w-[30%] flex flex-col justify-between  rounded-3xl"
          >
            <div className="flex gap-1 mb-6 text-primary">
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  className="material-symbols-outlined text-[#1fb6cd]"
                >
                  <i className="ri-star-line"></i>
                </span>
              ))}
            </div>

            <p className="italic  mb-8 text-on-surface-variant">
              &quot;The build quality of the Ether X1 is unlike anything
              I&apos;ve held.&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  width={60}
                  height={60}
                  alt="User"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBdEe6JK0VEmLfyCZekGJA92JrD12CkYtN9LSkyw2nDFHJm0KIeNQ8MuKYSt30K_T0SvUvhVoJhnuFQ0OX1-oPA_bkNWuYEwlqCkKa3UK8RpwgeK_EXJa4jW8dP-l_c05gctDWIo-kFFhzWn9XAt4uCne42B_Ki5IVd1IIilTpAe8Svb1UUC2EdANuwbBJzdDNBeT9fdne2kB15bplcVnmsp3hnGNUC2-dWXCqkbBFdZ3P-m-uAwEKfsUKHq2zmjR4lwA9kcrcKIE8"
                />
              </div>
              <div>
                <p className="font-bold">Julian V.</p>
                <p className="text-xs text-on-surface-variant">Architect</p>
              </div>
            </div>
          </div>

          <div
            style={{ background: "var(--bg_Rev)" }}
            className="bg-surface-container-high p-10 w-full sm:w-[48%] lg:w-[30%] flex flex-col justify-between bg-[#131313] rounded-3xl"
          >
            <div className="flex gap-1 mb-6 text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">
                  <i className="ri-star-line text-[#1fb6cd]"></i>
                </span>
              ))}
            </div>

            <p className="italic  mb-8 text-on-surface-variant">
              &quot;Shipping was incredibly fast and the unboxing experience
              felt like a luxury event.&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  width={60}
                  height={60}
                  alt="User"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtfjw-ylRrTi-6pWbiUQHMWDvi17aA2jEJlKzx0tFcO8Dj1YDdPI2sOGZHbxnRr7K39iLuqGCjIPeMIumJ74ByCIgNc84_JRX1gMplYBsGySbhCT8V7-IqKU1HWWKB4vYuY_AnWwp1Vsh2IFc7RRd0Mv-p4bylb2tC2ZBQ8_R7pYLVg64DN1XCu5wVIbsbyzVpymM98Mk5nE2_zmVTeVGE9tOy9T0TP5Qeulgq3yYnL7QOY4cmfgaXsoI_i-NNYi_gAyrQjmDih2I"
                />
              </div>
              <div>
                <p className="font-bold">Sarah K.</p>
                <p className="text-xs text-on-surface-variant">
                  Product Designer
                </p>
              </div>
            </div>
          </div>

          <div
            style={{ background: "var(--bg_Rev)" }}
            className="bg-surface-container-high w-full sm:w-[48%] lg:w-[30%] bg-[#131313] flex flex-col justify-between p-10 rounded-3xl"
          >
            <div className="flex gap-1 mb-6 text-primary">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined">
                  <i className="ri-star-line text-[#1fb6cd]"></i>
                </span>
              ))}
            </div>

            <p className="italic  mb-8 text-on-surface-variant">
              &quot;The integration between my Ether watch and phone is
              seamless.&quot;
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Image
                  width={60}
                  height={60}
                  alt="User"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCroPvN5vowf6Vdm9-E2ea-ztK92NYyaPvhcP4VlKI4xEGhT6he481hwFuoK3QfTfDJD7FffSZdWegMPJgCXZjDqzFWfa0-8iqzRJJ6OO6k8qHLB5j5h8YlDH88doBMdkPZlh3PS13qIn0u2ZoQmLes1YSM2Rx5M9OMFaOxDWrcGcy_1VyH22yu5dkWrxDIJ93NMMPEuk82OCymrveU0YzlvgbEFbkAF-XSltjGsXlYgUwazGo4IRdJ2ttknP7VhDOLTUj5KbGXOpE"
                />
              </div>
              <div>
                <p className="font-bold">Marcus T.</p>
                <p className="text-xs text-on-surface-variant">
                  Tech Journalist
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
