"use client";
import Script from "next/script";

const apiUrl = process.env.NEXT_PUBLIC_BASE_URL;

const CarFormQuoter = () => {
  const contratarUrl = `${apiUrl}/api/cotizacion`;

  return (
    <>
      <Script
        id="wokan-script"
        src="//webpack.wokan.com.ar/app/v1/init.js"
        strategy="lazyOnload"
        onLoad={() => {
          /*@ts-ignore eslint-disable-line*/
          wokanInitWebpack({
            sid: "1483@65e0d911de58b",
            mainColor: "#1570B1",
          });
        }}
      />
      <form
        id="formQuoter"
        method="post"
        action="cotizador/"
        className="relative max-w-[1200px] p-8 bg-white bg-opacity-70 h-fit rounded shadow-md w-full mx-auto mt-4 flex flex-col md:grid md:gap-2 md:grid-cols-1 lg:flex lg:flex-col lg:justify-between"
      >
        <h1 className="text-lg md:text-xl font-bold text-center mb-4 font-[Varela Round] text-primary">
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
            {/* Marca: */}
            <select
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
            {/* Año: */}
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
            {/* Modelo: */}
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
            {/* Versión: */}
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
