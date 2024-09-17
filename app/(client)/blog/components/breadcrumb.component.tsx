"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const Breadcrumbs = () => {
  const router = usePathname();

  // Obtiene la ruta actual y la divide en segmentos
  const pathSegments = router.split("/").filter((segment) => segment);

  return (
    <nav aria-label="breadcrumbs" className="text-gray-500 mb-4">
      <ul className="flex space-x-2">
        {/* Enlace a Inicio */}
        <li>
          <Link href="/">
            <span
              className={pathSegments[0] === "/" ? "underline font-bold" : ""}
            >
              Inicio
            </span>
          </Link>
        </li>

        {pathSegments.map((segment, index) => {
          const isLast = index === pathSegments.length - 1;

          // Construye la ruta progresivamente
          const href = "/" + pathSegments.slice(0, index + 1).join("/");

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                // Si es el último segmento, solo se muestra el texto subrayado
                <span className="underline font-bold">
                  {decodeURIComponent(segment)}
                </span>
              ) : (
                // Si no es el último, se renderiza como un enlace
                <Link href={href}>
                  <span>{decodeURIComponent(segment)}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
