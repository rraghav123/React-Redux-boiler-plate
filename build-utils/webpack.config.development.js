module.exports = () => ({
  devServer: {
    proxy: {
      '/planchoice': {
        target: 'http://10.14.0.83:8083',
        bypass(req, res, proxyOptions) {
          if (req.headers.accept.indexOf('html') !== -1) {
            console.log('Skipping proxy for browser request.');
            return '/index.html';
          }
        },
      },
    },
    host: '0.0.0.0',
  },
  output: {
    publicPath: '/',
  },
  devtool: 'source-map',
});
