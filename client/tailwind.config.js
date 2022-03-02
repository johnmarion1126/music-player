module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        RedHat: ['Red Hat Display'],
      },
      dropShadow: {
        '4xl': [
          '0 10px 25px rgba(0, 0, 0, 0.60)',
        ],
      },
    },
  },
  plugins: [],
};
