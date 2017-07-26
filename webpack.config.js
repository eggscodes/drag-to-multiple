
module.exports = {
  // sets entry point
  entry: './app/app.js',

  // designates file to output plain compiled JavaScript
  output: {

    // filename: 'app.js',
    filename: 'public/bundle.js'
  },

  // desribes transformations
  module: {
    // works with files with an .js or .jsx extension
    loaders: [{
      test: /\.jsx?$/,
      // processes files in src folder
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        // specifies transformations
        presets: ['react', 'es2015']
      }
    }]
  },

  // starts Webpack in a watch mode, so Webpack will rebuild the bundle on changes
  watch: true,

  // lets us debug our react code in Chrome dev tools
  devtool: 'eval-source-map'
};
