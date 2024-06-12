"use client";
import { useEffect } from "react";
import { preLoaderAnim } from "./loader";

import "./preloader.css";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);

  return (
    <div className="preloader text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
      <div className="texts-container text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px]">
        <span>Create,</span>
        <span>Build,</span>
        <span>Launch.</span>
        <div className="sub hidden"></div>
      </div>
    </div>
  );
};

export default PreLoader;
