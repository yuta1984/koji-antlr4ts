const path = require("path");
const rootPath = path.join(__dirname, "..");
const CompressionPlugin = require('compression-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: process.env.WEBPACK_ENV,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.ts",
  output: {
    filename: "koji-lang.js",
    path: __dirname + "/dist",
    library: "Koji",
    libraryTarget: "umd"
  },
  plugins: [new CompressionPlugin({
    filename: '[path].gz[query]',
    algorithm: 'gzip',
    test: /\.js$/,
    threshold: 10240,
    minRatio: 0.8
  })],
  // import 文で .ts ファイルを解決するため
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader"
      }
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: 'all',
    }),],
  },
};
