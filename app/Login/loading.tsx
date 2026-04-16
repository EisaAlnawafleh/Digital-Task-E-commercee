"use client";

const PageLoader = () => {
  return (
    <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[speeder_0.4s_linear_infinite]">
        <span className="absolute top-[-19px] left-[60px] h-[5px] w-[35px] bg-black rounded-[2px_10px_1px_0]">
          <span className="absolute w-[30px] h-[1px] bg-black animate-[fazer1_0.2s_linear_infinite]"></span>
          <span className="absolute top-[3px] w-[30px] h-[1px] bg-black animate-[fazer2_0.4s_linear_infinite]"></span>
          <span className="absolute top-[1px] w-[30px] h-[1px] bg-black animate-[fazer3_0.4s_linear_infinite]"></span>
          <span className="absolute top-[4px] w-[30px] h-[1px] bg-black animate-[fazer4_1s_linear_infinite]"></span>
        </span>

        <div className="relative">
          <span className="absolute border-t-[6px] border-b-[6px] border-r-[100px] border-transparent border-r-black"></span>

          <span className="absolute right-[-110px] top-[-16px] w-[22px] h-[22px] bg-black rounded-full"></span>

          <span className="absolute right-[-98px] top-[-16px] border-r-[55px] border-b-[16px] border-transparent border-r-black"></span>

          <div className="absolute right-[-125px] top-[-15px] w-[20px] h-[12px] bg-black rounded-t-full rotate-[-40deg]"></div>
        </div>
      </div>

      <div className="absolute w-full h-full">
        <span className="absolute top-[20%] w-[20%] h-[2px] bg-black animate-[lf_0.6s_linear_infinite]"></span>
        <span className="absolute top-[40%] w-[20%] h-[2px] bg-black animate-[lf2_0.8s_linear_infinite]"></span>
        <span className="absolute top-[60%] w-[20%] h-[2px] bg-black animate-[lf3_0.6s_linear_infinite]"></span>
        <span className="absolute top-[80%] w-[20%] h-[2px] bg-black animate-[lf4_0.5s_linear_infinite]"></span>
      </div>

      <style jsx>{`
        @keyframes speeder {
          0% {
            transform: translate(2px, 1px) rotate(0deg);
          }
          50% {
            transform: translate(-1px, 3px) rotate(-1deg);
          }
          100% {
            transform: translate(1px, -2px) rotate(-1deg);
          }
        }

        @keyframes fazer1 {
          0% {
            left: 0;
          }
          100% {
            left: -80px;
            opacity: 0;
          }
        }
        @keyframes fazer2 {
          0% {
            left: 0;
          }
          100% {
            left: -100px;
            opacity: 0;
          }
        }
        @keyframes fazer3 {
          0% {
            left: 0;
          }
          100% {
            left: -50px;
            opacity: 0;
          }
        }
        @keyframes fazer4 {
          0% {
            left: 0;
          }
          100% {
            left: -150px;
            opacity: 0;
          }
        }

        @keyframes lf {
          0% {
            left: 200%;
          }
          100% {
            left: -200%;
            opacity: 0;
          }
        }
        @keyframes lf2 {
          0% {
            left: 200%;
          }
          100% {
            left: -200%;
            opacity: 0;
          }
        }
        @keyframes lf3 {
          0% {
            left: 200%;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }
        @keyframes lf4 {
          0% {
            left: 200%;
          }
          100% {
            left: -100%;
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default PageLoader;
