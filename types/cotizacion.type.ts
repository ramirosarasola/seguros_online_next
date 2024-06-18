export interface Cotizacion {
  id: number;
  nombre: string;
  email: string;
  telefono: string;
  codigoPostal: string;
  edad: number;
  sexo: string;
  estadoCivil: string;
  anio: number;
  marca: string;
  modelo: string;
  version: string;
  precio: number;
  esCero: boolean;
  tieneGnc: boolean;
  tieneRastreador: boolean;
  aseguradora: string;
  coberturaNombre: string;
  coberturaDetalle: string;
  cuotaMensual: number;
  sumaAsegurada: number;
  dataAutoId: string;
  fechaHora: string;
}