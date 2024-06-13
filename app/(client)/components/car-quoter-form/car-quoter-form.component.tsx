"use client";

import { useEffect, useRef, useState } from "react";

const apiUrl = 'http://localhost:8081';

const CarFormQuoter = () => {
  const brandSelectRef = useRef<HTMLSelectElement>(null);
  const contratarUrl = `${apiUrl}/api/cotizacion`;
  const [wokanLoaded, setWokanLoaded] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    if (!wokanLoaded) {
      const script = document.createElement('script');
      script.src = "//webpack.wokan.com.ar/app/v1/init.js";
      script.async = true;
      script.onload = () => {
        if (typeof window.wokanInitWebpack === 'function') {
          window.wokanInitWebpack({ sid: '1483@65e0d911de58b', mainColor: '#1570B1' });
          setWokanLoaded(true);
        } else {
          console.error('wokanInitWebpack is not defined');
          setWokanLoaded(false);
        }
      };
      document.body.appendChild(script);
    }
  }, [wokanLoaded]);

  return (
    <>
      <form
        id="formQuoter"
        method="post"
        action="cotizador/"
        onSubmit={handleSubmit}
        className="relative p-8 bg-white bg-opacity-70 h-fit rounded shadow-md w-full mx-auto mt-4 flex flex-col md:grid md:gap-2 md:grid-cols-1 lg:flex lg:flex-col lg:justify-between"
      >
        <h1 className="text-2xl font-bold text-center mb-4 font-[Varela Round] text-primary">
        Seguros para Autos - Mejoramos cualquier presupuesto. La mejor cobertura por el mejor precio!
        </h1>

        <div className="flex space-y-4 flex-col lg:flex-row lg:gap-4 lg:items-end">
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
              className="h-10 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option value="">Marca</option>
            </select>
          </label>

          <label htmlFor="year" className="flex flex-col flex-1">
            Año:
            <select
              id="year"
              name="year"
              data-wokan-auto="anio"
              className="h-10 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="h-10 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
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
              className="h-10 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              <option>Versión</option>
            </select>
          </label>
        <button
          data-wokan-auto-cotizar
          className="w-52 lg:flex-1 mt-4 bg-primary uppercase font-bold text-white rounded-md py-2 mx-auto lg:items-center h-10"
          onSubmit={(e) => handleSubmit}
        >
          Cotizar
        </button>
        </div>

      </form>
    </>
  );
};

export default CarFormQuoter;