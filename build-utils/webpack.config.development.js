module.exports = () => ({
  devServer: {
    proxy: {
      "/api": {
        target: "",
      },
    },
    host: "0.0.0.0",
  },
  output: {
    publicPath: "/",
  },
  devtool: "source-map",
});
