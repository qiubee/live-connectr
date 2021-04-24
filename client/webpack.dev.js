const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
	mode: "development",
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"]
			}
		]
	},
	devServer: {
		hot: true,
		stats: "minimal",
		inline: true,
		port: 5000,
		contentBase: path.resolve(__dirname, "dist"),
		publicPath: "/",
		watchContentBase: true,
		quiet: true,
		clientLogLevel: "warn"
	}
});