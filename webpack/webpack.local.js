import { merge } from 'webpack-merge';
import dev from './webpack.dev.js';
import getLocalIp from './getLocalIp.js';

console.log(`Listening on http://${getLocalIp()}:8080`);

const local = {
	devServer: {
		host: getLocalIp()
	}
};

export default merge(dev, local);
