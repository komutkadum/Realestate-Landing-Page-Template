module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    screens: {
      priceTable: '638px',
      tablet: '1023px',
      virtualTour: '1173px',
      brochure: '1286px',
    },
    extend: {},
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('@tailwindcss/forms'),
  ],
};
