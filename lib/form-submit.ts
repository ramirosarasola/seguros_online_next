"use server";
import { contratacionSchema } from '@/app/schema/form-schema';

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
  const response = await fetch(`http://localhost:8081/api/contratar`, {
    method: 'POST',
    body: JSON.stringify(parsed.data),
    headers: { 'Content-Type': 'application/json' },
  });

  if (!response.ok) {
    return {
      message: "Error submitting form",
      fields: parsed.data,
    };
  }

  return { message: "Form submitted successfully" };
}