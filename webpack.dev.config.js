const path = require('path')
const webpack = require('webpack');
module.exports = {
  // 入口
  entry:path.join(__dirname,'src/index.js'),
  output:{
    path:path.join(__dirname,'./dist'),
    filename:'bundle.js'
  },
  //mode: 'development',
  resolve: {
    alias: {
        pages: path.join(__dirname, 'src/pages'),
        component: path.join(__dirname, 'src/component'),
        router: path.join(__dirname, 'src/router'),
        // redux: path.join(__dirname, 'src/redux')
    }
  },
  module: {
    rules: [{
        test: /\.js$/,
        use: ['babel-loader?cacheDirectory=true'],
        include: path.join(__dirname, 'src')
    }]
  },
  entry: [
    'react-hot-loader/patch',
    path.join(__dirname, 'src/index.js')
  ],
  // proxy:{
  //   '/api':'http://localhost:8080'
  // },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    port: 8080,
    contentBase: path.join(__dirname, './dist'),
    historyApiFallback: true,
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin()
]
}