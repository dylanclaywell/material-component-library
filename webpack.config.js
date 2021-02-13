const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const plugins = [
  new CleanWebpackPlugin(),
  // new CopyPlugin({
  //   patterns: [{ from: 'src/main.d.ts', to: 'main.d.ts' }],
  // }),
]

module.exports = {
  optimization: {
    minimize: false,
  },
  mode: isDev ? 'development' : 'production',
  devtool: 'source-map',
  devServer: {
    contentBase: 'dist',
  },
  entry: path.resolve(__dirname, './src/index.ts'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    libraryTarget: 'commonjs',
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
  externals: {
    react: 'commonjs react',
    'react-dom': 'commonjs react-dom',
  },
}
