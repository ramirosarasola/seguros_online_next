import { isValidCBU, isValidCreditCardNumber, isValidEngineNumber, isValidExpiryDate, isValidVIN } from "@/lib/utils";
import { time } from "console";
import { z } from "zod";

export const houseSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  lastname: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  codArea: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  contactHour: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  address: z.string().trim().min(1, {
    message: "Address is required.",
  }),
  houseType: z.string().trim().min(1, {
    message: "House type is required.",
  }),
})

export const biciSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  lastname: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  codArea: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  contactHour: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  address: z.string().trim().min(1, {
    message: "Address is required.",
  }),
  value: z.string().trim().min(1, {
    message: "Value is required.",
  }),
})

export const caucionSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  lastname: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  codArea: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  contactHour: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  tipoContrato: z.string().trim().min(1, {
    message: "Address is required.",
  }),
  consulta: z.string().trim().min(10, {
    message: "Consulta is required.",
  }),
})

export const artSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  lastname: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  codArea: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  contactHour: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  cuit: z.string().trim().min(1, {
    message: "Contact hour is required.",
  })
})

export const comercioSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  lastname: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  codArea: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  contactHour: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  consulta: z.string().trim().min(10, {
    message: "Address is required.",
  }),
})

export const alquilerSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  lastname: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  codArea: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  contactHour: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  consulta: z.string().trim().min(1, {
    message: "Value is required.",
  }),
})

export const contactSchema = z.object({
  name: z.string().trim().min(1, {
    message: "Name is required.",
  }),
  lastname: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
  codArea: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  phone: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  contactHour: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  consulta: z.string().trim().min(10, {
    message: "Value is required.",
  }),
})

export const contratacionSchema = z.object({
  id: z.string().trim().min(1, {
    message: "ID is required.",
  }),
  tipo_dni: z.string().trim().min(1, {
    message: "DNI is required.",
  }),
  dni: z.string().trim().min(1, {
    message: "DNI is required.",
  }),
  direccion: z.string().trim().min(8,{
    message: "Invalid email address.",
  }),
  altura: z.string().trim().min(1, {
    message: "Code area is required.",
  }),
  piso: z.string().trim().min(1, {
    message: "Phone is required.",
  }),
  depto: z.string().trim().min(1, {
    message: "Contact hour is required.",
  }),
  telefono_alt: z.string().trim().min(10, {
    message: "Value is required.",
  }),
  patente: z.string().trim().min(1, {
    message: "Value is required.",
  }),
  numero_motor: z.string().trim().min(1, {
    message: "Value is required.",
  }).min(5, {
    message: "Engine number must be at least 5 characters long.",
  }).max(20, {
    message: "Engine number must be at most 20 characters long.",
  }).refine((value) => isValidEngineNumber(value), {
    message: "Invalid engine number. Only alphanumeric characters are allowed.",
  }),
  numero_chasis: z.string().trim().min(1, {
    message: "Value is required.",
  }).refine((value) => value.length === 17, {
    message: "VIN must be exactly 17 characters long.",
  }).refine((value) => isValidVIN(value), {
    message: "Invalid VIN.",
  }),
  fecha_vigencia: z.string().trim().min(1, {
    message: "Value is required.",
  }),
  metodo_pago: z.string().trim().min(1, {
    message: "Value is required.",
  }),
  numero_tarjeta: z.string().trim().min(1, {
    message: "Value is required.",
  }).refine((value) => {
    // Validar que tenga el formato de un número de tarjeta de crédito
    const regex = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
    return regex.test(value) && isValidCreditCardNumber(value);
  }, {
    message: "Invalid credit card number.",
  }),
  vencimiento_tarjeta: z.string().trim().min(1, {
    message: "Value is required.",
  }).refine((value) => isValidExpiryDate(value), {
    message: "Invalid expiry date.",
  }),
  titular_tarjeta: z.string().trim().min(1, {
    message: "Value is required.",
  }),
  cbu: z.string().trim().min(22, {
    message: "CBU must be 22 digits long.",
  }).max(22, {
    message: "CBU must be 22 digits long.",
  }).refine((value) => isValidCBU(value), {
    message: "Invalid CBU.",
  }),
})