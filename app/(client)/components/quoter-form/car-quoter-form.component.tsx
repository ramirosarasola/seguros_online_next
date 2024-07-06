"use client";
import configApi, { cleanupDuplicateFancyboxOverlay } from "@/lib/config";
import Script from "next/script";
import { useEffect, useRef } from "react";

const apiUrl = "http://localhost:8081";

const CarFormQuoter = () => {
  const brandSelectRef = useRef<HTMLSelectElement>(null);

  // useEffect(() => {
  //   // Crear y agregar el primer script
  //   const script1 = document.createElement("script");
  //   script1.id = "wokan-script";
  //   script1.src = "//webpack.wokan.com.ar/app/v1/init.js";

  //   // Función para cargar el segundo script después de que el primero se haya cargado
  //   const loadSecondScript = () => {
  //     const script2 = document.createElement("script");
  //     script2.id = "wokan-script-2";
  //     script2.innerHTML = `wokanInitWebpack({ sid: '${configApi.sid}' , mainColor:'#1570B1' })`;
  //     document.body.appendChild(script2);
  //   };

  //   // Agregar un evento load al primer script para cargar el segundo script
  //   script1.onload = loadSecondScript;

  //   // Agregar el primer script al body
  //   document.body.appendChild(script1);

  //   // Función de limpieza al desmontar el componente
  //   return () => {
  //     if (script1) {
  //       document.body.removeChild(script1);
  //     }
  //     const script2 = document.getElementById("wokan-script-2");
  //     if (script2) {
  //       document.body.removeChild(script2);
  //     }
  //   };
  // }, []); // Asegúrate de que este useEffect se ejecute solo una vez al montar/desmontar el componente

  const contratarUrl = `${apiUrl}/api/cotizacion`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cleanupDuplicateFancyboxOverlay();
  };

  return (
    <>
      <Script
        id="wokan-script"
        src="//webpack.wokan.com.ar/app/v1/init.js"
        strategy="lazyOnload"
        onLoad={() => {
          // const script = document.createElement("script");
          // script.innerHTML = `wokanInitWebpack({ sid: '${"1483@65e0d911de58b"}' , mainColor:'#1570B1' })`;

          /*@ts-ignore eslint-disable-line*/
          wokanInitWebpack({
            sid: "1483@65e0d911de58b",
            mainColor: "#1570B1",
            // document.body.appendChild(script);
          });
        }}
      />
      <form
        id="formQuoter"
        method="post"
        action="cotizador/"
        onSubmit={handleSubmit}
        className="relative p-8 bg-white bg-opacity-70 h-fit rounded shadow-md w-full mx-auto mt-4 flex flex-col md:grid md:gap-2 md:grid-cols-1 lg:flex lg:flex-col lg:justify-between"
      >
        <h1 className="text-2xl font-bold text-center mb-4 font-[Varela Round] text-primary">
          Seguros para Autos - Mejoramos cualquier presupuesto. La mejor
          cobertura por el mejor precio!
        </h1>

        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <input
            type="hidden"
            data-wokan-auto="contratarUrl"
            value={contratarUrl}
          />

          <label htmlFor="brand" className="flex flex-col flex-1">
            Marca:
            <select
              ref={brandSelectRef}
              id="brand"
              name="brand"
              data-wokan-auto="marca"
              required
              className="h-12 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option id="brandFirstOption" value="">
                {"Marca"}
              </option>
            </select>
          </label>

          <label htmlFor="year" className="flex flex-col flex-1">
            Año:
            <select
              id="year"
              name="year"
              data-wokan-auto="anio"
              className="h-12 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option>Año</option>
            </select>
          </label>

          <label htmlFor="model" className="flex flex-col flex-1">
            Modelo:
            <select
              id="model"
              name="model"
              data-wokan-auto="modelo"
              className="h-12 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option>Modelo</option>
            </select>
          </label>

          <label htmlFor="version" className="flex flex-col flex-1">
            Versión:
            <select
              id="version"
              name="version"
              data-wokan-auto="version"
              className="h-12 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option>Versión</option>
            </select>
          </label>
          <button
            type="submit"
            data-wokan-auto-cotizar
            className="w-52 lg:flex-1 mt-4 bg-primary uppercase font-bold text-white rounded-sm py-2 mx-auto lg:items-center h-12"
          >
            Cotizar
          </button>
        </div>
      </form>
    </>
  );
};

export default CarFormQuoter;
