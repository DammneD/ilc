const merge = require("webpack-merge");
const webpack = require("webpack");
const baseConfig = require("./webpack.base.config");
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin');
const WrapperPlugin = require('wrapper-webpack-plugin');


module.exports = merge(baseConfig, {
	output: {
		libraryTarget: 'amd',
		filename: 'single_spa.js'
	},
	entry: {
		app: './src/entry-client-spa.js'
	},
	resolve: {
		alias: {
			'axios-client': './axios-client.js'
		}
	},
	plugins: [
		new webpack.DefinePlugin({
			'process.env': {
				NODE_ENV: '"production"'
			}
		}),
		new VueSSRClientPlugin({
			filename: 'vue-ssr-client-manifest-spa.json'
		}),
        new WrapperPlugin({
            test: /\.js$/, // only wrap output of bundle files with '.js' extension
            header: '(function(define){\n',
            footer: '\n})((window.ILC && window.ILC.define) || window.define);'
        }),
    ]
});
