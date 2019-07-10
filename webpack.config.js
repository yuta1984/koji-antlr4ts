const path = require("path");
const rootPath = path.join(__dirname, "..");
module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: process.env.WEBPACK_ENV,

  // メインとなるJavaScriptファイル（エントリーポイント）
  entry: "./src/index.ts",
  output: {
    filename: "index.js",
    path: __dirname,
    library: "Koji",
    libraryTarget: "umd"
  },

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
  }
};
