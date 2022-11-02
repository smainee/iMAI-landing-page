/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
          colors: {
        primary: {
          light: "var(--color-primary-light)",
          DEFAULT: "var(--color-primary)",
          dark: "var(--color-primary-dark)",
        },
        accent: {
          light: "var(--color-accent-light)",
          DEFAULT: "var(--color-accent)",
          dark: "var(--color-accent-dark)",
        },
        bgFqa: "#13172B",
        bgCoreTeam: "#F8F8F8",
        "gray-dark": "#C4C4C4",
        "gray-light": "#BCBBCA",
        "primary": "#05403D", 
      },
    },
  },
  plugins: [],
}
