import path from 'path';
import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	entry: './src/game.ts',
	output: {
		filename: 'game.bundle.js',
		path: path.resolve(__dirname, '../dist')
	},
	resolve: {
		alias: {
			'@src': path.resolve(__dirname, '../src/')
		},
		extensions: ['.ts', '.js']
	},
	module: {
		rules: [{ test: /\.ts$/, loader: 'ts-loader' }]
	},
	optimization: {
		splitChunks: {
			cacheGroups: {
				commons: {
					test: /[\\/]node_modules[\\/]|[\\/]src[\\/]plugins[\\/]/,
					name: 'vendors',
					chunks: 'all',
					filename: '[name].bundle.js'
				}
			}
		}
	},
	plugins: [
		new HtmlWebpackPlugin({
			options: {
				env: process.env.NODE_ENV
			},
			inject: true,
			template: 'src/index.ejs',
			minify: process.env.NODE_ENV === 'production' && {
				collapseWhitespace: true,
				removeComments: true,
				minifyCSS: true,
				minifyJS: true
			}
		}),
		new CopyWebpackPlugin({
			patterns: [
				{ from: 'src/assets', to: 'assets' },
				{ from: 'src/pwa', to: '' },
				{ from: 'src/favicon.ico', to: '' }
			]
		})
	]
};
