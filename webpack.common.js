const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/client/index.js',
	devtool: 'source-map',
	stats: 'verbose',
	module: {
		rules: [
			{
				test: '/.js$/',
				exclude: /node_modules/,
				loader: 'babel-loader',
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},

	output: {
		libraryTarget: 'var',
		library: 'Client',
	},
};
