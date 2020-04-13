const TerserPlugin = require("terser-webpack-plugin");
const path = require("path");
const bundles = path.resolve(__dirname, "_bundles");

console.log(process.env.WEBPACK_ENV);
module.exports = (env, argv) => {
  const isProd = argv.mode === "production";
  return {
    mode: argv.mode,
    entry: "./src/index.ts",
    output: {
      filename: isProd ? "koji-lang.min.js" : "koji-lang.js",
      path: bundles,
      library: "Koji",
      libraryTarget: "umd"
    },
    resolve: {
      extensions: [".ts", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: "ts-loader",
          exclude: /node_modules/
        }
      ]
    },
    devtool: isProd ? false : "inline-source-map",
    optimization: {
      minimize: isProd,
      minimizer: [new TerserPlugin({ extractComments: "all" })]
    }
  };
};
