module.exports = {
  plugins: [
    "postcss-import",
    "tailwindcss",
    "autoprefixer",
    {
      resolve: "postcss-preset-env",
      options: {
        stage: 3,
      },
    },
  ],
};