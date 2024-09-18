import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Algoritmo de Luhn para validar el número de tarjeta de crédito
export const isValidCreditCardNumber = (value: string) => {
  // Elimina todos los espacios y guiones del número de tarjeta
  const cleaned = value.replace(/\D/g, "");

  let sum = 0;
  let shouldDouble = false;

  for (let i = cleaned.length - 1; i >= 0; i--) {
    let digit = parseInt(cleaned[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
};

// Función para validar el formato y la validez de la fecha de vencimiento
export const isValidExpiryDate = (value: string) => {
  const regex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
  if (!regex.test(value)) return false;

  const [month, year] = value.split("/").map(Number);
  if (month < 1 || month > 12) return false;

  const currentYear = new Date().getFullYear() % 100; // últimos 2 dígitos del año actual
  const currentMonth = new Date().getMonth() + 1; // obtener el mes actual

  if (year < currentYear || (year === currentYear && month < currentMonth)) {
    return false; // fecha en el pasado
  }

  return true;
};

const validateCBUDigit = (cbu: string, weights: number[]) => {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(cbu[i], 10) * weights[i];
  }
  const mod = sum % 10;
  return mod === 0 ? 0 : 10 - mod;
};

// Función para validar el CBU
export const isValidCBU = (value: string) => {
  if (!/^\d{22}$/.test(value)) return false;

  const block1 = value.slice(0, 8);
  const block2 = value.slice(8, 22);

  const validDigit1 = validateCBUDigit(block1, [7, 1, 3, 9, 7, 1, 3]);
  const validDigit2 = validateCBUDigit(
    block2,
    [3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3]
  );

  return (
    validDigit1 === parseInt(block1[7], 10) &&
    validDigit2 === parseInt(block2[13], 10)
  );
};

// Función para validar el VIN
export const isValidVIN = (value: string) => {
  const regex = /^[A-HJ-NPR-Z0-9]{17}$/;
  return regex.test(value);
};

// Función para validar el número de motor
export const isValidEngineNumber = (value: string) => {
  const regex = /^[A-Za-z0-9]+$/;
  return regex.test(value);
};

// Funcion para ingresar la fecha de vencimiento en formato MM/AA de la tarjeta de credito
export const formatExpirationDate = (value: string) => {
  const sanitizedValue = value.replace(/\D/g, ""); // Elimina todo lo que no sea número
  if (sanitizedValue.length >= 2) {
    return sanitizedValue.slice(0, 2) + "/" + sanitizedValue.slice(2, 4);
  }
  return sanitizedValue;
};
