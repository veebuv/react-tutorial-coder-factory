var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{test: /\.js$/, loaders: ['react-hot','babel'], exclude: /node_modules/,},
    {test: /\.css$/, loaders: [ 'style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]']}
    ]
  },
  "eslintConfig" : {
    "parser": "babel-eslint"
  }
};
