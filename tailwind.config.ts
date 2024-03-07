import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",

  theme: {
    
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '260px',
      md: '768px',
      lg: '1024px',
      xl: '1400px',
    },
    extend: {
      backgroundImage: {
        singerOverlay: 'url(/assets/hero/singer-overlay.png)',
        newsletter: 'url(/b111.png)'
      },
      fontFamily: {
        alexBrush: ['var(--font-alexBrush)', 'sans-serif'],
        montserrat: ['var(--font-monsterrat)', 'sans-serif'],
        poppins: ['var(--font-Poppins)', 'sans-serif'],
        // font-family: 'Poppins', sans-serif;
      },
      colors: {
        primary: '#201F23',
        secondary: '#15138',
        tertiary: '#201F23',
        orange: '#FFA500',
        green: '#BCD6D2',
        accent: {
          DEFAULT: '#7f1cfc',
          hover: '#6519c6',
        },
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
export default config;
