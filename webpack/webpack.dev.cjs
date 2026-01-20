const { merge } = require('webpack-merge');
const common = require('./webpack.common.cjs');

const dev = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		open: true,
		port: 8080
	}
};

module.exports = merge(common, dev);
