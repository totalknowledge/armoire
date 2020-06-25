"use strict";

exports.new = function (options) {
    this.options = options || {};
    let Adapter = require('./'+options.type);
    return Adapter.new(options);
}
