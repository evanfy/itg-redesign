/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-orange': '#f59e0b',
        'orange-hover': '#d97706',
        'bg-primary': '#ffffff',
        'bg-secondary': '#f9fafb',
        'bg-tertiary': '#f3f4f6',
        'text-primary': '#111827',
        'text-secondary': '#6b7280',
        'border-color': '#e5e7eb',
      },
    },
  },
  plugins: [],
}