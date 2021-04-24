const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = merge(common, {
	mode: "production",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, "css-loader"]
			},
		]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "index.css"
		}),
	],
	optimization: {
		minimize: true,
		minimizer: [
			new CssMinimizerPlugin()
		]
	}
});