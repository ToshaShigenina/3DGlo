const path = require('path');

module.export = {
  entry: {
    main: './src/index.js'
  },
  outpt: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].js',
    publicPath: '/dist'
  }
};
