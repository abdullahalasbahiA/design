const path = require('path');
// We are going to install html-webpac... using npm
// This is going to be another dependence inside of package.json file
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development', // production
    entry: {
        main: path.resolve(__dirname, 'src/app.js'), // label to this perticular file
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].[contenthash].js',
        // assetModuleFilename: '[name][ext]',
        clean: true,
    },
    devtool: 'inline-source-map',
    devServer:{
        contentBase: path.resolve(__dirname, 'dist'),
        port: 5001, //default 8080
        open: true, // launch the browser
        hot: true, // hot module reload
        watchContentBase: true,
    },
    // loaders
    module: {
        rules: [
            {
              test: /\.s[ac]ss$/i,
              use: [
                // Creates `style` nodes from JS strings
                "style-loader",
                // Translates CSS into CommonJS
                "css-loader",
                // Compiles Sass to CSS
                "sass-loader",
              ],},
            // images
            { test: /\.(svg|ico|png|webp|jpg|gif|jpeg)$/, type:'asset/resource' },
            // babel for Javascript ES6 > ES5
            { test: /\.js$/,
              exclude: /node_modules/,
              use: 
              {
                  loader: 'babel-loader',
                  options: {
                      presets: ['@babel/preset-env']
                  }
            }
            },
            
        ]
    },
    // plugins
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Just a Demo',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src/temp.html')
        }),
        new HtmlWebpackPlugin({
            title: 'About page',
            filename: 'about.html',
            template: path.resolve(__dirname, 'src/about.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Blog page',
            filename: 'blog.html',
            template: path.resolve(__dirname, 'src/blog.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Single Post page',
            filename: 'single_post.html',
            template: path.resolve(__dirname, 'src/single_post.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Features page',
            filename: 'features.html',
            template: path.resolve(__dirname, 'src/features.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Contact page',
            filename: 'contact.html',
            template: path.resolve(__dirname, 'src/contact.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Portfolio 1',
            filename: 'portfolio1.html',
            template: path.resolve(__dirname, 'src/portfolio1.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Portfolio 2',
            filename: 'portfolio2.html',
            template: path.resolve(__dirname, 'src/portfolio2.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Portfolio single page',
            filename: 'portfolio_single_page.html',
            template: path.resolve(__dirname, 'src/portfolio_single_page.html')
        }),
        new HtmlWebpackPlugin({
            title: 'Services',
            filename: 'services.html',
            template: path.resolve(__dirname, 'src/services.html')
        })
    ],
}