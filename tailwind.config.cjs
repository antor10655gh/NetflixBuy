const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#5CE1E6",
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
});
