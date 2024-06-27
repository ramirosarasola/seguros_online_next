"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const apiUrl = 'http://localhost:8081';

const CarFormQuoter = () => {
  const brandSelectRef = useRef<HTMLSelectElement>(null);
  const contratarUrl = `${apiUrl}/api/cotizacion`;
  const [formData, setFormData] = useState({});
  const [brands, setBrands] = useState([]);
  const [years, setYears] = useState([]);
  const [models, setModels] = useState([]);
  const [versions, setVersions] = useState([]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  useEffect(() => {
    
    const endpoint = "https://webpack.wokan.com.ar/api/v1/data_auto/marcas";
    const headers = {
      "X-Wokan-Webpack-Sid": "1483@65e0d911de58b",
    };

    fetch(endpoint, {
      method: "GET",
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }
        return response.json();
      })
      .then((data) => {
        if (brands.length === 0) {
          setBrands(data.result);
        }
        // console.log("Respuesta exitosa:", data);
      })
      .catch((error) => {
        console.error("Error en la solicitud:", error.message);
      });
  }, []);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    if (name === "brand") {
      // Realizar la segunda solicitud para obtener los años
      const endpoint = `https://webpack.wokan.com.ar/api/v1/data_auto/anios?filter%5Bmarca%5D=${value}`;
      const headers = {
        "X-Wokan-Webpack-Sid": "1483@65e0d911de58b",
      };

      fetch(endpoint, {
        method: "GET",
        headers: headers,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error: ${response.status} - ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          setYears(data.result);
          // console.log("Años obtenidos:", data.result);
        })
        .catch((error) => {
          console.error("Error obteniendo años:", error.message);
        });
    }

    if (name === "year") {
      // Realizar la tercera solicitud para obtener los modelos
      const brandId = formData.brand;
      const endpoint = `https://webpack.wokan.com.ar/api/v1/data_auto/grupos?filter%5Bmarca%5D=${brandId}&filter%5Banio%5D=${value}`;
      const headers = {
        "X-Wokan-Webpack-Sid": "1483@65e0d911de58b",
      };

      fetch(endpoint, {
        method: "GET",
        headers: headers,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error: ${response.status} - ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          setModels(data.result);
          // console.log("Modelos obtenidos:", data.result);
        })
        .catch((error) => {
          console.error("Error obteniendo modelos:", error.message);
        });
    }

    if (name === "model") {
      // Realizar la cuarta solicitud para obtener las versiones
      const brandId = formData.brand;
      const year = formData.year;
      const groupId = value;
      const endpoint = `https://webpack.wokan.com.ar/api/v1/data_auto/modelos?filter%5Bmarca%5D=${brandId}&filter%5Banio%5D=${year}&filter%5Bgrupo%5D=${groupId}`;
      const headers = {
        "X-Wokan-Webpack-Sid": "1483@65e0d911de58b",
      };

      fetch(endpoint, {
        method: "GET",
        headers: headers,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(
              `Error: ${response.status} - ${response.statusText}`
            );
          }
          return response.json();
        })
        .then((data) => {
          setVersions(data.result);
          // console.log("Versiones obtenidas:", data.result);
        })
        .catch((error) => {
          console.error("Error obteniendo versiones:", error.message);
        });
    }
  };

  return (
    <>
       <Script async src="//webpack.wokan.com.ar/app/v1/init.js" onLoad={() => {
        wokanInitWebpack({ sid: '1483@65e0d911de58b', mainColor: '#1570B1' })
      }} />
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
              onChange={(e: any) => handleInputChange(e)}
            >
              <option value="">Marca</option>
              {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.descripcion}
              </option>
            ))}
            </select>
          </label>

          <label htmlFor="year" className="flex flex-col flex-1">
            Año:
            <select
              id="year"
              name="year"
              data-wokan-auto="anio"
              className="h-12 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e: any) => handleInputChange(e)}
            >
              <option>Año</option>
              {years.map((year) => (
              <option key={year.anio} value={year.anio}>
                {year.anio}
              </option>
            ))}
            </select>
          </label>

          <label htmlFor="model" className="flex flex-col flex-1">
            Modelo:
            <select
              id="model"
              name="model"
              data-wokan-auto="modelo"
              className="h-12 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e: any) => handleInputChange(e)}
            >
              <option>Modelo</option>
              {models.map((model) => (
              <option key={model.id} value={model.id}>
                {model.descripcion}
              </option>
            ))}
            </select>
          </label>

          <label htmlFor="version" className="flex flex-col flex-1">
            Versión:
            <select
              id="version"
              name="version"
              data-wokan-auto="version"
              className="h-12 p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              onChange={(e: any) => handleInputChange(e)}
            >
              <option>Versión</option>
              {versions.map((version) => (
              <option key={version.id} value={version.id}>
                {version.descripcion}
              </option>
            ))}
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