
// https://github.com/webpack/webpack/issues/1754
require.extensions['.css'] = () => {
    return;
};

import React,{ Component, PropTypes }  from 'react'


//set up jsdom
var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
    }
});

global.navigator = {
    userAgent: 'node.js'
};

// require('velocity-animate/velocity.ui')