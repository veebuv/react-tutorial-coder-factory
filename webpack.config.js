module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{test: /\.js$/, loader: 'babel', exclude: /node_modules/,},
    {test: /\.css$/, loaders: [ 'style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]']}
    ]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './'
  }
};
