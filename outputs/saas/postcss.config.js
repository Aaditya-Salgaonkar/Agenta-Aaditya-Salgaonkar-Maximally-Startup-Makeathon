module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")(), require("autoprefixer")()],
      },
    },
  ],
};