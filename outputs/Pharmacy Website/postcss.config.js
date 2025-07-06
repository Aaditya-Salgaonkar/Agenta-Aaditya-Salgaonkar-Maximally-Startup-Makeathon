module.exports = {
  plugins: [
    "tailwindcss",
    "postcss-preset-env",
    ["postcss-nested", { unwrap: false }],
    "postcss-import",
    "postcss-simple-vars",
  ],
};