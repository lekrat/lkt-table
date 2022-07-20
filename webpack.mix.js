let mix = require('laravel-mix');
// const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    optimization: {
        providedExports: false,
        sideEffects: false,
        usedExports: false
    },
    externals: {
        Vue: 'vue',
        draggable: 'vuedragabble'
    },
    experiments: {
        outputModule: true,
    },
    entry: './src/lib-components/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'lkt-table.min.js',
        library: {
            // name: 'LktTable',
            type: 'module',
        },
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.vue$/,
    //             loader: 'vue-loader'
    //         }
    //     ]
    // },
    // plugins: [
    //     new VueLoaderPlugin()
    // ]
});

mix.options({
    autoprefixer: { remove: false }
});

mix
    .js('src/lib-components/index.js', 'dist/lkt-table.min.js')
    .vue({
        // extractStyles: true,
        globalStyles: false
    })
;