const { merge } = require('webpack-merge');
const dev = require('./webpack.dev.cjs');
const getLocalIp = require('./getLocalIp.js');

console.log(`Listening on http://${getLocalIp()}:8080`);

const local = {
	devServer: {
		host: getLocalIp()
	}
};

module.exports = merge(dev, local);
