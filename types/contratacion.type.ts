export interface Contratacion {
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
  dataAutoId: number;
  fechaHora: string;
  contratado: boolean;
  tipoDni: string;
  dni: string;
  direccion: string;
  altura: string;
  piso: string;
  depto: string;
  telefonoAlternativo: string;
  patente: string;
  numeroMotor: string;
  numeroChasis: string;
  cargoFotos: boolean;
  fechaVigenciaPoliza: string;
  metodoPago: string;
  cbu: string;
  tarjetaNumero: string;
  tarjetaVencimiento: string;
  tarjetaTitular: string;
}
