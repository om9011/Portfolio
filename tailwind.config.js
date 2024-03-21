/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Ubuntu"],
      },
      backgroundColor: {
        primary: '#373543',
        secondary: '#292833',
        tertiary: '#F5B962', // New color
      },
      textColor: {
        primary: '#FCFEFF',
        secondary: '#9495A4',
        tertiary: '#F5B962', // New color
      },
      height: {
        '95vh': '85vh', // New height
      },
    },
  },
  plugins: [],
};
