(function () {
  var path = require('path');

  module.exports = {
    entry:  './app/main.js',
    output: {
      path: path.resolve(__dirname, 'builds'),
      filename: 'bundle.js'
    },
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a legal name to reference
        query: {
          presets: ['es2015']
        }
      }
    ]
  };
})();