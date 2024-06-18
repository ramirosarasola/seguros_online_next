'use client';

import { Cotizacion } from '@/types/cotizacion.type';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

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
      <h1>Contratacion Page {cotizacionId}</h1>
      <div>
        <p>ID: {cotizacion.id}</p>
        <p>Nombre: {cotizacion.nombre}</p>
        <p>Email: {cotizacion.email}</p>
        <p>Teléfono: {cotizacion.telefono}</p>
        <p>Código Postal: {cotizacion.codigoPostal}</p>
        <p>Año: {cotizacion.anio}</p>
        <p>Marca: {cotizacion.marca}</p>
        <p>Modelo: {cotizacion.modelo}</p>
        <p>Aseguradora: {cotizacion.aseguradora}</p>
        <p>Cobertura Nombre: {cotizacion.coberturaNombre}</p>
      </div>
    </>
  );
}
