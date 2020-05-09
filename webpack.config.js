const path = require('path');

module.exports = ( env, argv ) => ({
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    watchContentBase: true,
    port: 3000,
    open: true
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              url: false
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false,
              plugins: [
                require('autoprefixer')({
                  grid: true
                })
              ]
            }
          },
          { loader: 'sass-loader',
            options: {
              sourceMap: false
            }
          }
        ],
      }
    ]
  }
});
