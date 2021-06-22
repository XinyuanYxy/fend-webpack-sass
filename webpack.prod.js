const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = merge(common, {
	mode: 'production',
	plugins: [
		new HtmlWebPackPlugin({
			template: './src/client/views/index.html',
			filename: './index.html',
		}),
		new MiniCssExtractPlugin({ filename: '[name].css' }),
		new WorkboxPlugin.GenerateSW(),
	],
	optimization: {
		minimizer: [new TerserPlugin({}), new CssMinimizerPlugin({})],
	},
});
