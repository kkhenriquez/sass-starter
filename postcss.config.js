const postcssPresetEnv = require('postcss-preset-env'),
      purgecss = require('@fullhuman/postcss-purgecss'),
      mqpacker = require('@lipemat/css-mqpacker');

module.exports = {
  plugins: [
    postcssPresetEnv({
      autoprefixer: {
        supports: false,
        flexbox: "no-2009"
      }
    }),
    purgecss(),
    mqpacker()
  ]
}