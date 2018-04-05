const path = require('path')
const packagejson = require('../package.json')

const paths = {
  base: path.resolve('src'),
  app: path.resolve('src/com/company/cube/CubeGame.ts'),
  dist: path.resolve('dist'),
  tsp: path.resolve('tps.sh'),
}

module.exports = {
  entry: {
    app: paths.app,
  },
  output: {
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  plugins: [],
}
