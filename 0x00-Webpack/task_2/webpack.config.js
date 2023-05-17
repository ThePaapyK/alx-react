const path = require('path');

module.exports = {
  rules: [
    {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    },
    {
      test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
      type: 'asset/resource'
    }
  ]
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
  },
    output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  }
};
