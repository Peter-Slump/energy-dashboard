var path = require('path'),
    webpack = require('webpack');

var staticsFolder = "src/energy_dashboard/front_end/static",
    distFolder = staticsFolder + "/dist",
    srcFolder = staticsFolder + "/src";

var entry = {
    'bundle': 'src/EnergyDashboard',
}

var config = {
    entry: entry,
    context: path.join(__dirname, staticsFolder),
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, staticsFolder),
                exclude: /node_modules/,
                loader: 'babel',
            },
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.(woff|woff2)$/, loader:"url?prefix=font/&limit=5000" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" },
            { test: /\.less$/, loader: "style!css!less" }
        ],

    },
    noParse: [
        // don't parse known, pre-built javascript files (improves webpack perf)
        path.join(__dirname, 'node_modules', 'jquery', 'dist', 'jquery.js'),
    ],
    resolve: {
        alias: {
            'flot': path.join(__dirname, staticsFolder, 'vendor', 'jquery-flot'),
            'flot-tooltip': path.join(__dirname, staticsFolder, 'vendor', 'jquery-flot-tooltip'),
        },
        modulesDirectories: [path.join(__dirname, staticsFolder), 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        // TODO find out what it does or remove.
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            'window.$': 'jquery',
            'root.jQuery': 'jquery',
        }),
    ],
    output: {
        path: distFolder,  // Folder to put the resulting .js file
        contentBase: distFolder,  // Path to store statics (font-files etc.)
        publicPath: '/static/dist/',  // Public path to retrieve statics (font-files etc.)
        filename: '[name].js',
        libraryTarget: 'var', // TODO find out what it does or remove.
        library: 'exports', // TODO find out what it does or remove.
    }
}

module.exports = config;
