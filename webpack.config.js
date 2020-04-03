module.exports = {
  mode:"development", 
  watch: false,
  entry: {    
    kollovium :'./client/app.js',
  },
  
  output: {
    path: __dirname + '/build',
    filename: '[name]-bundle.js'
  },
}