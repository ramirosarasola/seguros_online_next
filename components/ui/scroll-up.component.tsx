"use client";
import { useState, useEffect } from "react";

const ScrollUpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 250) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <div
          onClick={handleClick}
          className="bg-slate-800 w-fit h-[50px] flex items-center justify-center cursor-pointer fixed bottom-4 right-[100px] text-white p-4 shadow-lg transition-opacity"
        >
          <span className="text-white">Cotizar!</span>
        </div>
      )}
    </>
  );
};

export default ScrollUpButton;
