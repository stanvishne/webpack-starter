var path = require('path');
var SRC = path.join(__dirname, 'src/');
var NODE_MODULES = path.join(__dirname, 'node_modules/');

var config = {
    entry: './src/index.js',               // entry point
    output: {                     // output folder
        path: './dist',           // folder path
        filename: 'bundle.js'     // file name
    },
    resolve: {
        root: [SRC, NODE_MODULES],                  // root folders for Webpack resolving, so we can now call require('greet')
        alias: {
          'actions': path.join(SRC, 'actions/'),    // sample alias, calling require('actions/file') will resolve to ./src/actions/file.js
        }
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel-loader']      // note that specifying 'babel' or 'babel-loader' is equivalent for Webpack
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ['react-hot', 'babel-loader']      // note that specifying 'babel' or 'babel-loader' is equivalent for Webpack
        },

        {
          test: /\.(css|scss)$/,
          loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] // Note that the order is important here, it means that 'style-loader' will be applied to the ouput of 'css-loader'
        },
        {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          loader: 'file?name=public/fonts/[name].[ext]'
        },
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file?name=public/images/[name].[ext]'
        }
      ]
    }
}


module.exports = config;
