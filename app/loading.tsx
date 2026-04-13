"use client";

const SkeletonLoader = () => {
  return (
    <div className="fixed inset-0 overflow-hidden z-[9999]">
      <div className="loader ">
        <span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </span>
        <div className="base">
          <span></span>
          <div className="face"></div>
        </div>
      </div>
      <div className="longfazers">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default SkeletonLoader;
