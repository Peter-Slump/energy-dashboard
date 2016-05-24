var path = require('path'),
    webpack = require('webpack');

var staticsFolder = "src/energy_dashboard/front_end/static",
    distFolder = staticsFolder + "/dist",
    srcFolder = staticsFolder + "/src";

var entry = {
    'app': 'src',
    'vendor': [
        'jquery',
    ]
}

var config = {
    entry: entry,
    context: path.join(__dirname, staticsFolder),
    output: {
        path: distFolder,
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, staticsFolder),
                exclude: /node_modules/,
                loader: 'babel',
            }
        ]
    },
    noParse: [
        // don't parse known, pre-built javascript files (improves webpack perf)
        path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.js'),
    ],
    resolve: {
        modulesDirectories: [path.join(__dirname, staticsFolder), 'node_modules'],
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            'root.jQuery': 'jquery',
        }),
    ],
    output: {
        path: distFolder,
        filename: '[name].js',
        libraryTarget: 'var',
        library: 'exports',
    }
}

module.exports = config;