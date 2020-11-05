const path = require('path');

let libraryName = 'v-grid';
module.exports = {
  entry: {
    [libraryName]: './src/index.ts'
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].js',
    library: 'VGrid',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals: {
    vue: 'vue',
    '@revolist/revogrid': '@revolist/revogrid',
    '@revolist/revogrid/loader': '@revolist/revogrid/loader'
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};