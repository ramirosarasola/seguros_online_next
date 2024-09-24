import { CloudArrowDownIcon, FaceFrownIcon } from "@heroicons/react/24/outline";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SegurosOnline | 404 - Página no encontrada",
  description:
    "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
  openGraph: {
    title:
      "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
    description:
      "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
    url: "https://www.segurosonline.com.ar/",
    siteName: "SegurosOnline",
    images: [
      {
        url: "https://www.segurosonline.com.ar/seguros-online-op.png",
      },
    ],
    locale: "es-AR",
    type: "website",
  },
  twitter: {
    title:
      "Seguros Para Autos | SegurosOnline | Mejoramos cualquier Presupuesto",
    description:
      "Cotizá seguros para autos online. Mejorá tu póliza actual ahorrando hasta un 30% sin perder beneficios. Trabajamos con todas las aseguradoras, Cotizá Ya!",
    images: ["https://www.segurosonline.com.ar/seguros-online-op.png"],
    card: "summary_large_image",
    creator: "@SegurosOnline",
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div>
          <FaceFrownIcon className="mx-auto h-24 w-24 text-blue-600" />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            404 - Página no encontrada
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Lo sentimos, la página que estás buscando no existe.
          </p>
        </div>
        <div className="mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition duration-150 ease-in-out"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}
