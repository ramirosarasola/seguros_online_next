"use client"; // Esto indica que este es un Client Component

import Script from "next/script";
import { useEffect, useState } from "react";

interface BannerProps {
  title: string;
  buttonLabel: string;
  onButtonClick?: () => void;
}

const CotizarBanner = ({ title, buttonLabel }: BannerProps) => {
  const [visible, setVisible] = useState(false);

  const onButtonClick = () => {
    setVisible(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 3000); // Mostrar banner después de 3 segundos

    return () => clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
  }, []);

  return (
    <>
      <Script
        id="wokan-script"
        src="//webpack.wokan.com.ar/app/v1/init.js"
        strategy="lazyOnload"
        onLoad={() => {
          /*@ts-ignore eslint-disable-line*/
          wokanInitWebpack({
            sid: process.env.NEXT_PUBLIC_WOKAN_SID,
            mainColor: "#1570B1",
          });
        }}
      />

      {/* Fondo negro con transición de opacidad controlada por el estado `visible` */}

      <div
        className={`w-screen h-screen bg-black fixed top-0 left-0 transition-opacity duration-700 ease-in-out ${
          visible ? "opacity-80" : "opacity-0 z-[-100]"
        }`}
      ></div>

      {/* Banner con el botón */}
      <div
        className={`fixed bottom-20 left-0 right-0 bg-primary p-4 text-white z-50 transition-transform transform duration-700 ease-in-out ${
          visible ? "block" : "hidden"
        }`}
      >
        <button
          onClick={onButtonClick}
          className="rounded-full absolute top-[-0.75rem] right-[1rem] p-2 h-[1.5rem] w-[1.5rem] bg-black flex items-center justify-center"
        >
          X
        </button>
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          <input type="hidden" data-wokan-auto="marca" value={"brandCode"} />
          <button
            type="submit"
            data-wokan-auto-cotizar
            onClick={onButtonClick}
            className="bg-white text-black px-4 py-2 rounded-md font-semibold animate-pulse"
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </>
  );
};

export default CotizarBanner;
