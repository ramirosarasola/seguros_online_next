'use client';

import { Cotizacion } from '@/types/cotizacion.type';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ContratacionForm } from './components/contratacion-form.component';

export default function ContratacionPage() {
  const pathname = usePathname();

  const cotizacionId = pathname?.split('/contratacion/')[1];
  

  const [cotizacion, setCotizacion] = useState<Cotizacion | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getContratacion = async (quoteId: string) => {
    try {
      const res = await fetch(`http://localhost:8081/api/retrieveData?quote=${quoteId}`);
      if (!res.ok) {
        throw new Error('Error fetching data');
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
  },[cotizacionId]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (!cotizacion) {
    return <div>No se encontró la cotización.</div>;
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center mb-4 font-[Varela Round] text-primary">
        Contratacion de seguro
      </h1>
      <div className="">
        <ContratacionForm cotizacion={cotizacion} />
      </div>
    </>
  );
}
