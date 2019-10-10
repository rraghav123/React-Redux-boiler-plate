const path = require("path");

const cdnUploader = "";
const WebpackOnBuildPlugin = require("on-build-webpack");

const CONTAINER_URL = "";
const BUILD_NUMBER = process.env.BUILD_NUMBER;
const BUILD_DIR = path.join(__dirname, "..", "src/dist/");
const CDNOPTIONS = Object.freeze({
  build_env: process.env.buildEnvironment,
  build_dir: BUILD_DIR,
  build_number: BUILD_NUMBER,
  container_name: "",
});


module.exports = () => ({
  plugins: [new WebpackOnBuildPlugin(() => {
    cdnUploader(JSON.stringify(CDNOPTIONS));
  })],
  output: {
    publicPath: `${CONTAINER_URL}/${BUILD_NUMBER}/`,
  },
});
