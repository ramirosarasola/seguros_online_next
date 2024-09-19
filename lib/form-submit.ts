"use server";
import { contratacionSchema, houseSchema } from "@/app/schema/form-schema";

export type FormState = {
  message: string;
  fields?: Record<string, string | null | undefined>;
  issues?: string[];
};

export async function onSubmitAction(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data.entries());
  const parsed = contratacionSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  // Realizar una petición
  const response = await fetch(
    `https://segurosenlinea.com.ar:8080/api/contratar`,
    {
      method: "POST",
      body: JSON.stringify(parsed.data),
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    return {
      message: "Error submitting form",
      fields: parsed.data,
    };
  }

  return { message: "Form submitted successfully" };
}

export async function onSubmitActionHouseQuote(
  prevState: FormState,
  data: FormData
): Promise<FormState> {
  const formData = Object.fromEntries(data.entries());
  const parsed = houseSchema.safeParse(formData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(formData)) {
      fields[key] = formData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  const response = await fetch(
    "https://segurosenlinea.com.ar:8080/api/cotizacion/hogar",
    {
      method: "POST",
      body: JSON.stringify(parsed.data),
      headers: { "Content-Type": "application/json" },
    }
  );

  if (!response.ok) {
    return {
      message: "Error submitting form",
      fields: parsed.data,
    };
  }
  return { message: "Form submitted successfully" };
}
