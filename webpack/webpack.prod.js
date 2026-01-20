process.env.NODE_ENV = 'production';

import path from 'path';
import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import JavaScriptObfuscator from 'webpack-obfuscator';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { InjectManifest } from 'workbox-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const prod = {
	mode: 'production',
	output: {
		filename: 'game.[contenthash].js'
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					filename: '[name].[contenthash].js'
				}
			}
		}
	},
	plugins: [
		new CleanWebpackPlugin(),
		new JavaScriptObfuscator(
			{
				rotateStringArray: true,
				stringArray: true,
				// stringArrayEncoding: 'base64', // disabled by default
				stringArrayThreshold: 0.75
			},
			['vendors.*.js']
		),
		new InjectManifest({
			swSrc: path.resolve(__dirname, '../src/pwa/sw.js'),
			exclude: [/sw\.js$/, /audio.*\.ogg$/, /index\.html$/]
		})
	]
};

export default merge(common, prod);
