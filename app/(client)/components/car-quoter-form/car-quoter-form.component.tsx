"use client";

import { useRef } from "react";
import Script from "next/script";

// const apiUrl = configApi.apiUrl;

const CarFormQuoter = () => {
  const brandSelectRef = useRef<HTMLSelectElement>(null);
  const contratarUrl = `${'localhost:8080'}/api/cotizacion`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <>
      <Script
        id="wokan-script"
        src="//webpack.wokan.com.ar/app/v1/init.js"
        strategy="afterInteractive"
        onLoad={() => {
          // Ensure the function exists before calling it
          if (typeof window.wokanInitWebpack === 'function') {
            window.wokanInitWebpack({ sid: '1483@65e0d911de58b', mainColor: '#1570B1' });
          } else {
            console.error('wokanInitWebpack is not defined');
          }
        }}
      />

      <form
        id="formQuoter"
        method="post"
        action="cotizador/"
        onSubmit={handleSubmit}
        className="p-8 bg-white rounded shadow-md w-full h-fit flex flex-col mt-4 bg-opacity-80"
      >
        <h1 className="text-2xl font-bold mb-4">
          Seguros para Autos - ¡Cotizá Online el Seguro de tu Auto y Ahorrá hasta un 30%!
        </h1>

        <div className="space-y-4 flex items-center justify-between">
          <input
            type="hidden"
            data-wokan-auto="contratarUrl"
            value={contratarUrl}
          />

          <label htmlFor="brand" className="flex flex-1">
            Marca:
            <select
              ref={brandSelectRef}
              id="brand"
              name="brand"
              data-wokan-auto="marca"
              required
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Marca</option>
            </select>
          </label>

          <label htmlFor="year" className="flex flex-1">
            Año:
            <select
              id="year"
              name="year"
              data-wokan-auto="anio"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option>Año</option>
            </select>
          </label>

          <label htmlFor="model" className="flex flex-1">
            Modelo:
            <select
              id="model"
              name="model"
              data-wokan-auto="modelo"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option>Modelo</option>
            </select>
          </label>

          <label htmlFor="version" className="flex flex-1">
            Versión:
            <select
              id="version"
              name="version"
              data-wokan-auto="version"
              className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option>Versión</option>
            </select>
          </label>

          <button data-wokan-auto-cotizar onSubmit={(e) => handleSubmit}>Cotizar</button>
        </div>
      </form>
    </>
  );
};

export default CarFormQuoter;
