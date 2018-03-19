const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const lessExtract = new ExtractTextPlugin('style.css');
const cssExtract = new ExtractTextPlugin('vue.css');
const conf = {
    mode: 'development',
	entry: './src/main.js',
	output: {
		path: __dirname+'/dist',
		filename: '[name].js'
	},
	module: {
		rules: [
            {
                test: /\.vue$/,
                //use: ['vue-loader']
                loader: 'vue-loader',
                options: {
                    loaders: {
                       css: cssExtract.extract({
                                use: 'css-loader'
                            })
                    }
                }
            },
			{
				test: /\.js$/,
				use: 'babel-loader'
			},
			{
				test: /\.less$/,
				use:lessExtract.extract({use:['css-loader','less-loader']})
                //use: ['style-loader','css-loader','less-loader']
			},
            {
                test: /\.jpg$/,
                use: ['file-loader']
            }
		]
	},
    devServer: {
          contentBase: './dist',
          hot: true
    },
	plugins: [
		new webpack.SourceMapDevToolPlugin({
			//filename: '[name].js.map'
		}),
        lessExtract,
        cssExtract,
        new webpack.HotModuleReplacementPlugin({}),
        new HtmlWebpackPlugin({
            template: 'src/tpl.html',
            inject: true
        })
	]
}

module.exports = conf;
