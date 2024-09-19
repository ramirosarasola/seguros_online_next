"use client";

import { Cotizacion } from "@/types/cotizacion.type";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ContratacionForm } from "./components/contratacion-form.component";

export default function ContratacionPage() {
  const pathname = usePathname();

  const cotizacionId = pathname?.split("/contratacion/")[1];

  const [cotizacion, setCotizacion] = useState<Cotizacion | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getContratacion = async (quoteId: string) => {
    try {
      const res = await fetch(
        `https://vps-3776803-x.dattaweb.com:8080/api/retrieveData?quote=${quoteId}`
      );
      if (!res.ok) {
        throw new Error("Error fetching data");
      }
      const data = await res.json();
      setCotizacion(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cotizacionId) {
      getContratacion(cotizacionId);
    }
  }, [cotizacionId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!cotizacion) {
    return <div>No se encontró la cotización.</div>;
  }

  return (
    <>
      <div className="">
        <ContratacionForm cotizacion={cotizacion} />
      </div>
    </>
  );
}
