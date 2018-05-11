var DiskPlugin = require("webpack-disk-plugin");

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Everything else **first**.

    // Write out asset files to disk.
    new DiskPlugin({
      output: {
        path: "static/dev/js"
      },
      files: [
        { asset: "bundle.js" }
      ]
    }),
  ],
  module: {
    loaders: [
      {
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-1']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    },
    port: process.env.PORT || 8110
  }
};