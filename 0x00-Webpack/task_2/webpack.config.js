const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: path.resolve(__dirname, './js/dashboard_main.js'),
  },
    output: {
    path: path.resolve(__dirname, './public'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
	use: ["style-loader", "css-loader"]
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
	type: 'asset/resource'
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
	use: [
          'file-loader',
	   {
	     loader: 'image-webpack-loader',
	     options: {
	       mozjpeg: {
		 progressive: true,
	       },
	       optipng: {
	         enabled: false,
	       },
	       pngquant: {
		 quality: [0.65, 0.9],
		 speed: 4,
	       },
	       gifsicle: {
		 interlaced: false,
	       },
	       webp: {
		 quality: 75,
	       },
	     },
	   },
	],
      },
    ]
  }
};
