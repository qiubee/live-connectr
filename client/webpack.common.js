const HtmlWebpackPlugin = require("html-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
	entry: {
		main: "./src/app.js",
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				include: path.resolve(__dirname, "src"),
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: "asset/resource",
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			filename: "index.html",
			inject: "body"
		}),
		new CleanWebpackPlugin()
	],
	resolve: {
		alias: {
			vue: "@vue/runtime-dom",
			"@": path.resolve(__dirname, "src")
		},
		extensions: ["*", ".js", ".vue", ".json"],
	},
	output: {
		filename: "[name].[chunkhash].js",
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		clean: true
	},
};