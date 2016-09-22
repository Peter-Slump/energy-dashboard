var path = require('path'),
    webpack = require('webpack');

var staticsFolder = "src/ed/front_end/static",
    distFolder = staticsFolder + "/dist";

var entry = {
    'bundle': 'src/EnergyDashboard',
    'vendor': [
        'bootswatch/paper/bootstrap.min.css',
        'flot',
        'flot/jquery.flot.time',
        'flot-tooltip/jquery.flot.tooltip',
        'jed',
        'jquery',
        'js-cookie',
        'moment',
        'react',
        'react-addons-css-transition-group',
        'react-bootstrap',
        'react-dom',
        'react-redux',
        'react-router',
        'react-router-redux',
        'redux-thunk',
        'redux',
    ]
}


module.exports = {
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
            { test: /\.less$/, loader: "style!css!less" },
            {
                test: /\.jsx?$/,
                exclude: [
                    /node_modules/,
                    /vendor/
                ],
                loaders: ['babel', 'gettext-loader']
            },
            {
                test: /\.po$/,
                exclude: [
                    /node_modules/,
                    /vendor/
                ],
                loader: 'po-catalog-loader',
            },
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
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vendor'] // For splitting up into two bundles
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new webpack.ProvidePlugin({
            // Make jQuery available in all files (no need to "import jQuery from 'jquery'")
            $: 'jquery',
            jQuery: 'jquery',
        }),
    ],
    output: {
        path: distFolder,  // Folder to put the resulting .js file
        contentBase: distFolder,  // Path to store statics (font-files etc.)
        publicPath: '/static/dist/',  // Public path to retrieve statics (font-files etc.)
        filename: '[name].js',
    }
}
