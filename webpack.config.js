var path = require('path');

module.exports = {
	entry: "./src/idleHandler.js",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "idlehandler.bundle.js",
		library: "idleHandler",
		libraryTarget: "var"
	},
	progress: true,
	module: {
		loaders: [
			{ test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader' }
		]
	},
	resolve: {
		extenstions: ['', '.js', '.jsx']
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	target: "web"
};