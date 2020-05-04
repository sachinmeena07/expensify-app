//entry-output
const path=require('path');

module.exports={
entry:'./src/app.js',
output: {
    path: path.join(__dirname,'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
 
module :{
  rules:[{
    loader:'babel-loader',
    test:/\.js$/,
   exclude: /node_modules/ /* to exclude all the files */,
   
  },{
    test: /\.s?css$/,
    use:[
      'style-loader',
      'css-loader',
      'sass-loader'
    ]
  }]
},
devtool:'cheap-module-eval-source-map',
devServer: {
  contentBase:path.join(__dirname,'public'),
  historyApiFallback : true             /***to get http address for first page load,loading from seerver 1st time */
},
}