var path = require('path'),
    webpack = require('webpack');

var staticsFolder = "src/energy_dashboard/front_end/static",
    distFolder = staticsFolder + "/dist",
    srcFolder = staticsFolder + "/src";

var entry = {
    'bundle': 'src/EnergyDashboard',
//    'vendor': [
//        'jquery',
//        'moment',
//        'flot/jquery.flot',
//        'flot/jquery.flot.stack',
//        'flot/jquery.flot.time',
//        'flot-tooltip/jquery.flot.tooltip',
//        'react-bootstrap'
//    ]
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
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml" }
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