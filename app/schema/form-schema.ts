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