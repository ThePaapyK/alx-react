const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');


module.exports = {
  mode: 'development',
  entry: {
    header: path.resolve(__dirname, './modules/header/header.js'),
    body: path.resolve(__dirname, './modules/body/body.js'),
    footer: path.resolve(__dirname, './modules/footer/footer.js')
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {
      directory: path.join(__dirname, "./public"),
    },
    port: 8564,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack Output",
    }),
    new CleanWebpackPlugin()
  ],
  output: {
    path: path.resolve(__dirname, './public'),
    filename: '[name].js',
  },
  optimization: {
    runtimeChunk: 'single',
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
