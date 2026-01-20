import { merge } from 'webpack-merge';
import common from './webpack.common.js';

const dev = {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		open: true,
		port: 8080
	}
};

export default merge(common, dev);
