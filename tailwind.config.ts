import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1570B1',
        secondary: '#FFFFFF',
        accent: '#e7e7e7',
        danger: '#E53E3E',
        success: '#38A169',
        warning: '#DD6B20',
        info: '#3182CE',
        light: '#F7FAFC',
        dark: '#2D3748',
      },
      fontFamily: {
        sans: ['Helvetica', 'Arial', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'serif'],
        mono: ['Menlo', 'Monaco', 'Courier New', 'monospace'],
        title: ['Merriweather', 'serif'],
        subtitle: ['Open Sans', 'sans-serif'],
        paragraph: ['Roboto', 'sans-serif'],
      },
      fontSize: {
        'title-xl': ['2.25rem', '2.5rem'], // 36px font size with 40px line height
        'title-lg': ['1.875rem', '2.25rem'], // 30px font size with 36px line height
        'title-md': ['1.5rem', '2rem'], // 24px font size with 32px line height
        'subtitle-xl': ['1.25rem', '1.75rem'], // 20px font size with 28px line height
        'subtitle-lg': ['1.125rem', '1.5rem'], // 18px font size with 24px line height
        'subtitle-md': ['1rem', '1.5rem'], // 16px font size with 24px line height
        'paragraph-lg': ['1rem', '1.5rem'], // 16px font size with 24px line height
        'paragraph-md': ['0.875rem', '1.25rem'], // 14px font size with 20px line height
        'paragraph-sm': ['0.75rem', '1rem'], // 12px font size with 16px line height
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;