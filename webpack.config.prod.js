var path = require('path'),
    webpack = require('webpack');

var staticsFolder = "src/energy_dashboard/front_end/static",
    distFolder = staticsFolder + "/dist";

module.exports = {
    entry: [
        'src/EnergyDashboard'
    ],
    output: {
        path: distFolder,  // Folder to put the resulting .js file
        contentBase: distFolder,  // Path to store statics (font-files etc.)
        publicPath: '/static/dist/',  // Public path to retrieve statics (font-files etc.)
        filename: 'bundle.js',
    },
    context: path.join(__dirname, staticsFolder),
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                include: path.join(__dirname, staticsFolder),
                // exclude: /node_modules/,
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
    resolve: {
        alias: {
            'flot': path.join(__dirname, staticsFolder, 'vendor', 'jquery-flot'),
            'flot-tooltip': path.join(__dirname, staticsFolder, 'vendor', 'jquery-flot-tooltip'),
        },
        modulesDirectories: [path.join(__dirname, staticsFolder), 'node_modules'],
        extensions: ['', '.js', '.jsx', '.json']
    },
    plugins: [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': "'production'"
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        }),
        new webpack.ProvidePlugin({
            // Make jQuery available in all files (no need to "import jQuery from 'jquery'")
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
}
