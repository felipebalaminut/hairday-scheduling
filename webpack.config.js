const path = require("path");

module.exports = {
  target: "web",
  mode: "development", // by default: production
  entry: path.resolve(__dirname, "src", "index.js"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"), // pasta servida
    },
    liveReload: true,
    port: 3000, // porta do servidor
    open: true, // abre o navegador automaticamente
  },
  module: {
    rules: [{}],
  },
};
