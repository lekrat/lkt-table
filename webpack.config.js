const path = require("path");
const { VueLoaderPlugin } = require('vue-loader');
const { HtmlPlugin } = require('html-loader');

module.exports = {
    // entry: './src/index.js',
    // output: {
    //     path: './dist',
    //     filename: 'libpack.js',
    //     library: 'libpack',
    //     libraryTarget:'umd'
    // },
    // entry: './src/lib-components/index.js',
    entry: {
        polyfill: '@babel/polyfill',
        main: './src/lib-components/index.js',
    },
    resolve: {
        extensions: [ '.js', '.vue' ],
        alias: {
            'vue$': 'vue/dist/vue.runtime.min.js',
            '@': './src'
        }
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lkt-table.min.js',
        library: 'LktTable',
        libraryTarget:'umd'
        // library: {
        //     // name: 'LktTable',
        //     type: 'module',
        // },
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /.png$/,
                use: 'base64-image-loader'
            },
            {
                test: /.css$/,
                use: 'css-content-loader'
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: 'index.html',
            chunksSortMode: 'dependency'
        }),
    ],

    optimization: {
        providedExports: false,
        sideEffects: false,
        usedExports: false,
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all'
        }
    },
    externals: {
        Vue: 'vue',
        draggable: 'vuedragabble'
    },
    experiments: {
        outputModule: true,
    },
};