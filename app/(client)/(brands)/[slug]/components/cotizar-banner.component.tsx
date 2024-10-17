"use client"; // Esto indica que este es un Client Component

import { useRouter } from "next/navigation";
import Script from "next/script";
import { useEffect, useState } from "react";

interface BannerProps {
  title: string;
  buttonLabel: string;
  redirect?: boolean;
  onButtonClick?: () => void;
}

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

const CotizarBanner = ({
  title,
  buttonLabel,
  redirect = false,
}: BannerProps) => {
  const contratarUrl = `${apiUrl}/api/cotizacion`;
  const [visible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onButtonClick = () => {
    setIsOpen(false);
  };

  const navigateHome = () => {
    router.push("/");
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
      setIsOpen(true);
    }, 3000); // Mostrar banner después de 3 segundos

    const handleScroll = () => {
      // Verifica si el usuario ha scrolleado hasta el final de la página
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight
      ) {
        setVisible(false); // Oculta el banner si se ha llegado al final
      } else {
        setVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timer); // Limpiar el temporizador si el componente se desmonta
      window.removeEventListener("scroll", handleScroll); // Limpiar el event listener de scroll
    };
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

      {/* Banner con el botón */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-primary p-4 text-white z-40 transition-transform transform duration-700 ease-in-out ${
          !isOpen ? "hidden" : visible && isOpen ? "block" : "hidden"
        }`}
      >
        {/* <button
          onClick={onButtonClick}
          className="rounded-full absolute top-[0rem] right-[0rem] h-[3rem] w-[3rem] flex items-center justify-center"
        >
        </button> */}
        <div className="max-w-[1200px] mx-auto flex justify-between items-center">
          <h2 className="text-white text-xl font-bold">{title}</h2>
          {!redirect ? (
            <>
              <input
                type="hidden"
                data-wokan-auto="marca"
                // value={brandCode}
              />
              <input
                type="hidden"
                data-wokan-auto="contratarUrl"
                value={contratarUrl}
              />
              <button
                type="submit"
                data-wokan-auto-cotizar
                onClick={onButtonClick}
                className="bg-white text-black px-4 py-2 rounded-md font-semibold animate-pulse"
              >
                {buttonLabel}
              </button>
            </>
          ) : (
            <a
              href={"/"}
              className="bg-white text-black px-4 py-2 rounded-md font-semibold animate-pulse"
            >
              {buttonLabel}
            </a>
          )}
        </div>
      </div>
    </>
  );
};

export default CotizarBanner;
