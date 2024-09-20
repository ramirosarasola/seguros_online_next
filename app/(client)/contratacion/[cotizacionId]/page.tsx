import { Cotizacion } from "@/types/cotizacion.type";
import { ContratacionForm } from "./components/contratacion-form.component";

// Revalidate si quisieras usar ISR (Incremental Static Regeneration)
// export const revalidate = 60;

async function getCotizacion(cotizacionId: string) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/retrieveData?quote=${cotizacionId}`,
      { cache: "no-store" } // Esto asegura que la data sea fresca en cada request (SSR)
    );

    // Log del estado de la respuesta
    console.log("Estado de la respuesta:", res.status);

    if (!res.ok) {
      throw new Error("Error fetching data");
    }

    const cotizacion: Cotizacion = await res.json();
    return cotizacion;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

export default async function ContratacionPage({
  params,
}: {
  params: { cotizacionId: string };
}) {
  const cotizacion = await getCotizacion(params.cotizacionId);

  if (!cotizacion) {
    return <div>No se encontró la cotización.</div>;
  }

  return (
    <div>
      <ContratacionForm cotizacion={cotizacion} />
    </div>
  );
}
