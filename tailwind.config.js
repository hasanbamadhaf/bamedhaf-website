/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          900: '#0A3D62',
          800: '#0C4A75',
          700: '#0E5A8A',
          600: '#106BA3',
          500: '#1B7FB0',
          400: '#3093C3',
          300: '#48A9D8',
          200: '#7AC3E6',
          100: '#B8E1F5',
          50: '#E5F4FC',
        },
        accent: {
          600: '#00A896',
          500: '#00BFA5',
          400: '#02C39A',
          300: '#2DD4BF',
        },
        neutral: {
          900: '#1A202C',
          800: '#2D3748',
          700: '#4A5568',
          600: '#718096',
          500: '#A0AEC0',
          400: '#CBD5E0',
          300: '#E2E8F0',
          200: '#EDF2F7',
          100: '#F7FAFC',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Segoe UI', 'Roboto', 'system-ui', 'sans-serif'],
        display: ['Montserrat', 'Inter', 'sans-serif'],
        arabic: ['Cairo', 'Tajawal', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
