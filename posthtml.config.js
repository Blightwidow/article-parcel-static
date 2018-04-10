module.exports = {
  parser: require("posthtml-pug")({}),
  plugins: [
    require("posthtml-include")({
      root: `${__dirname}/src/`
    })
  ]
};
