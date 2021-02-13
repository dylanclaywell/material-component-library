const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const plugins = [new CleanWebpackPlugin()]

if (isDev) {
  plugins.push(
    new HtmlPlugin({
      filename: 'index.html',
      template: 'public/index.html',
    })
  )
}

const entry = isDev
  ? path.resolve(__dirname, './src/App.tsx')
  : path.resolve(__dirname, './src/index.ts')
const libraryTarget = isDev ? undefined : 'commonjs'

module.exports = {
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
  },
  entry,
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget,
  },
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['@babel/plugin-transform-object-assign'],
            presets: [
              '@babel/preset-env',
              '@babel/preset-react',
              '@babel/preset-typescript',
            ],
          },
        },
      },
    ],
  },
}
