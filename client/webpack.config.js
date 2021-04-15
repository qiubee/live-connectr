const { VueLoaderPlugin } = require("vue-loader");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
	target: "web",
	entry: {
		main: "./src/main.js",
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		publicPath: "/",
		filename: 'bundle.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.vue$/,
				loader: "vue-loader",
			},
			{
				test: /\.css$/,
				use: [
					process.env.NODE_ENV === "production" ? 
					"style-loader" : 
					MiniCssExtractPlugin.loader, "css-loader"
				]
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		]
	},
	plugins: [
		new VueLoaderPlugin(),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "public", "index.html"),
			filename: "index.html"
		}),
		new MiniCssExtractPlugin({
			filename: 'index.css'
		}),
		new CleanWebpackPlugin()
	],
	optimization: {
		minimize: false,
		minimizer: [
			new CssMinimizerPlugin()
		]
	},
	devtool: process.env.NODE_ENV === "production" ? 
		false :
		"inline-source-map",
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
	},
	resolve: {
		alias: {
			vue: "@vue/runtime-dom",
			"@": path.resolve(__dirname, "src")
		},
		extensions: ["*", ".js", ".vue", ".json"],
	}
};