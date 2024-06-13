import { z } from "zod";

export const schema = z.object({
  first: z.string().trim().min(1, {
    message: "First name is required.",
  }),
  last: z.string().trim().min(1, {
    message: "Last name is required.",
  }),
  email: z.string().trim().email({
    message: "Invalid email address.",
  }),
});

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