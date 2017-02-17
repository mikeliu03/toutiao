var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports =  {
    entry: {
        app: './app.js',
        vendors: [
            'vue', 'vuex', 'vue-router'
        ]
    },
    output: {
        path: 'dist',
        filename: '[name].js'
    }, 
    resolve: {
       // modules: ["node_modules"],
        extensions: ['.css', '.vue', '.js']
    },
    module: {
        rules: [
            {
                test: /\.vue$/, 
                loader: "vue-loader",
                options: {
                    loaders: {
                        "css": ExtractTextPlugin.extract("css-loader")
                    }                    
                },
                exclude: /node_modules/
            },
            { 
                test: /\.js$/, 
                loader: "babel-loader",
                options: {
                    presets: ['es2015'],
                    plugins: ['transform-runtime'] 
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/, 
                loader: ExtractTextPlugin.extract("css-loader")
                /*loader: ['style-loader', 'css-loader'],
                options: {
                    loaders: {
                        "css": ExtractTextPlugin.extract("css-loader")
                    }                    
                }
                use: ExtractTextPlugin.extract({
                    use: 'css-loader'
                })*/
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'img/[name].[hash:7].[ext]'
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        alias: {
          'vue': 'vue/dist/vue.common.js',
          //'vue-router': path.join(__dirname, '..', 'src')
        }
      },
    plugins: [
        // 提取css为单文件
        new ExtractTextPlugin({
            filename: "[name].[contenthash].css",
            allChunks: true
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js',
        }),
        new HtmlWebpackPlugin({
          filename: 'index.html',
          template: 'index.html',
          inject: true
        })
    ]
};

/*const vuxLoader = require('vux-loader');
module.exports = vuxLoader.merge(webpackConfig, {
  options: {},
  plugins: [
    {
      name: 'vux-ui'
    }
    ]
});*/
