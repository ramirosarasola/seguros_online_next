import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface BankCodes {
  [key: string]: string;
}

interface cardBINs {
  [key: string]: string;
}

// Lista de códigos de bancos con sus denominaciones
const bankCodes: BankCodes = {
  "007": "BANCO DE GALICIA Y BUENOS AIRES S.A.U.",
  "011": "BANCO DE LA NACION ARGENTINA",
  "014": "BANCO DE LA PROVINCIA DE BUENOS AIRES",
  "015": "INDUSTRIAL AND COMMERCIAL BANK OF CHINA",
  "016": "CITIBANK N.A.",
  "017": "BANCO BBVA ARGENTINA S.A.",
  "020": "BANCO DE LA PROVINCIA DE CORDOBA S.A.",
  "027": "BANCO SUPERVIELLE S.A.",
  "029": "BANCO DE LA CIUDAD DE BUENOS AIRES",
  "034": "BANCO PATAGONIA S.A.",
  "044": "BANCO HIPOTECARIO S.A.",
  "045": "BANCO DE SAN JUAN S.A.",
  "065": "BANCO MUNICIPAL DE ROSARIO",
  "072": "BANCO SANTANDER ARGENTINA S.A.",
  "083": "BANCO DEL CHUBUT S.A.",
  "086": "BANCO DE SANTA CRUZ S.A.",
  "093": "BANCO DE LA PAMPA SOCIEDAD DE ECONOMÍA M",
  "094": "BANCO DE CORRIENTES S.A.",
  "097": "BANCO PROVINCIA DEL NEUQUÉN SOCIEDAD ANÓNIMA",
  "131": "BANK OF CHINA LIMITED SUCURSAL BUENOS AIRES",
  "143": "BRUBANK S.A.U.",
  "147": "BIBANK S.A.",
  "150": "HSBC BANK ARGENTINA S.A.",
  "158": "OPEN BANK ARGENTINA S.A.",
  "165": "JPMORGAN CHASE BANK, NATIONAL ASSOCIATION",
  "191": "BANCO CREDICOOP COOPERATIVO LIMITADO",
  "198": "BANCO DE VALORES S.A.",
  "247": "BANCO ROELA S.A.",
  "254": "BANCO MARIVA S.A.",
  "259": "BANCO BMA S.A.U.",
  "266": "BNP PARIBAS",
  "268": "BANCO PROVINCIA DE TIERRA DEL FUEGO",
  "269": "BANCO DE LA REPUBLICA ORIENTAL DEL URUGUAY",
  "277": "BANCO SAENZ S.A.",
  "281": "BANCO MERIDIAN S.A.",
  "285": "BANCO MACRO S.A.",
  "299": "BANCO COMAFI SOCIEDAD ANONIMA",
  "300": "BANCO DE INVERSION Y COMERCIO EXTERIOR S.A.",
  "301": "BANCO PIANO S.A.",
  "305": "BANCO JULIO SOCIEDAD ANONIMA",
  "309": "BANCO RIOJA SOCIEDAD ANONIMA UNIPERSONAL",
  "310": "BANCO DEL SOL S.A.",
  "311": "NUEVO BANCO DEL CHACO S.A.",
  "312": "BANCO VOII S.A.",
  "315": "BANCO DE FORMOSA S.A.",
  "319": "BANCO CMF S.A.",
  "321": "BANCO DE SANTIAGO DEL ESTERO S.A.",
  "322": "BANCO INDUSTRIAL S.A.",
  "330": "NUEVO BANCO DE SANTA FE SOCIEDAD ANONIMA",
  "331": "BANCO CETELEM ARGENTINA S.A.",
  "332": "BANCO DE SERVICIOS FINANCIEROS S.A.",
  "338": "BANCO DE SERVICIOS Y TRANSACCIONES S.A.",
  "339": "RCI BANQUE S.A.",
  "340": "BACS BANCO DE CREDITO Y SECURITIZACION S.A.",
  "341": "BANCO MASVENTAS S.A.",
  "384": "WILOBANK S.A.U.",
  "386": "NUEVO BANCO DE ENTRE RÍOS S.A.",
  "389": "BANCO COLUMBIA S.A.",
  "426": "BANCO BICA S.A.",
  "431": "BANCO COINAG S.A.",
  "432": "BANCO DE COMERCIO S.A.",
  "435": "BANCO SUCREDITO REGIONAL S.A.U.",
  "448": "BANCO DINO S.A.",
};

// Mapa con los BINs y sus respectivas entidades emisoras
const cardBINs: cardBINs = {
  "4": "Visa",
  "51": "MasterCard",
  "52": "MasterCard",
  "53": "MasterCard",
  "54": "MasterCard",
  "55": "MasterCard",
  "34": "American Express",
  "37": "American Express",
  "6011": "Discover",
  "65": "Discover",
  // Puedes seguir agregando más BINs para otros emisores
};

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Función para identificar la entidad bancaria a partir del número de tarjeta
export const getCardIssuer = (cardNumber: string): string | null => {
  if (!/^\d{13,19}$/.test(cardNumber)) {
    return null; // Número de tarjeta inválido
  }

  const bin6 = cardNumber.slice(0, 6);
  const bin4 = cardNumber.slice(0, 4);
  const bin2 = cardNumber.slice(0, 2);
  const bin1 = cardNumber.slice(0, 1);

  // Comparamos los prefijos más largos primero para obtener coincidencias
  if (cardBINs[bin6]) return cardBINs[bin6];
  if (cardBINs[bin4]) return cardBINs[bin4];
  if (cardBINs[bin2]) return cardBINs[bin2];
  if (cardBINs[bin1]) return cardBINs[bin1];

  return null; // Si no hay coincidencias
};

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

// Función para identificar la entidad por el código del CBU
const identifyBankByCBU = (cbu: string) => {
  const bankCode = cbu.slice(0, 3); // Los primeros 3 dígitos son el código del banco
  // alert(bankCodes[bankCode] || "Entidad no identificada");
  return bankCodes[bankCode] || "Entidad no identificada";
};

// Función para validar el dígito del CBU
const validateCBUDigit = (cbu: string, weights: number[]) => {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    sum += parseInt(cbu[i], 10) * weights[i];
  }
  const mod = sum % 10;
  return mod === 0 ? 0 : 10 - mod;
};

// Función para validar el CBU y obtener la entidad
export const isValidCBU = (value: string) => {
  if (!/^\d{22}$/.test(value)) return false;

  const block1 = value.slice(0, 8);
  const block2 = value.slice(8, 22);

  const validDigit1 = validateCBUDigit(block1, [7, 1, 3, 9, 7, 1, 3]);
  const validDigit2 = validateCBUDigit(
    block2,
    [3, 9, 7, 1, 3, 9, 7, 1, 3, 9, 7, 1, 3]
  );

  const isValid =
    validDigit1 === parseInt(block1[7], 10) &&
    validDigit2 === parseInt(block2[13], 10);

  if (isValid) {
    const bankName = identifyBankByCBU(value);
    return { isValid: true, bank: bankName };
  }

  return { isValid: false, bank: null };
};
// Función para validar el VIN
export const isValidVIN = (value: string) => {
  // const regex = /^[A-HJ-NPR-Z0-9]{17}$/;
  // return regex.test(value);
  // must not be empty
  if (value === "") {
    return false;
  }
};

// Función para validar el número de motor
export const isValidEngineNumber = (value: string) => {
  // const regex = /^[A-Za-z0-9]+$/;
  // return regex.test(value);
  // must not be empty
  if (value === "") {
    return false;
  }
};

// Funcion para ingresar la fecha de vencimiento en formato MM/AA de la tarjeta de credito
export const formatExpirationDate = (value: string) => {
  const sanitizedValue = value.replace(/\D/g, ""); // Elimina todo lo que no sea número
  if (sanitizedValue.length >= 2) {
    return sanitizedValue.slice(0, 2) + "/" + sanitizedValue.slice(2, 4);
  }
  return sanitizedValue;
};
