var postcss = require('postcss');

module.exports = postcss.plugin('PLUGIN_NAME', (opts = {}) => {
    const defaults = {};

    opts = opts.assign({}, defaults, opts);

    // work with options here

    return (css, result) => {

        // transform CSS here

    };
});
