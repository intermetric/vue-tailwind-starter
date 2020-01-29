const purgecss = require("@fullhuman/postcss-purgecss")({
  content: ["./src/**/*.html", "./src/**/*.vue"],

  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-preset-env")({ stage: 1 }),
    /*require("cssnano")({
      preset: "default"
    }),*/
    ...(process.env.NODE_ENV === "production" ? [purgecss] : [])
  ]
};
