/** @type {import('tailwindcss').Config} */
export const content = ['./src/**/*.{html,js,jsx,ts,tsx}'];
export const theme = {
  extend: {
    screens: {
      'sm': '640px', // Pantalla pequeña (móviles)
      'md': '768px', // Pantalla mediana (tabletas)
      'lg': '1024px', // Pantalla grande (laptops)
      'xl': '1280px', // Pantalla extra grande (desktops)
      '2xl': '1536px', // Pantallas más grandes
    },
  },
};
export const plugins = [];