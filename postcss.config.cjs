const postcssPresetEnv = require("postcss-preset-env");
const autoPrefixer = require("autoprefixer");
const cssNano = require("cssnano");

const config = {
  plugins: [
    postcssPresetEnv({
      stage: 3,
      features: {
        "nesting-rules": true,
        "media-query-ranges": true,
      },
    }),
    autoPrefixer(),
    cssNano(),
  ],
};

module.exports = config;
