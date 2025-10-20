/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gold: '#FFD700',
          orange: '#FF6B35',
          amber: '#FFBF00',
        },
        secondary: {
          deepRed: '#8B0000',
          burgundy: '#800020',
        },
        neutral: {
          darkBg: '#0F0F0F',
          lightText: '#F5F5F5',
          gray: '#6B7280',
        },
      },
      backgroundImage: {
        'phoenix-gradient': 'linear-gradient(135deg, #FFD700 0%, #FF6B35 50%, #8B0000 100%)',
        'hero-gradient': 'linear-gradient(to bottom, rgba(15, 15, 15, 0.8), rgba(15, 15, 15, 0.95))',
      },
    },
  },
  plugins: [],
}
