var o = require("/init.js");

module.exports = {
    log: function(t) {
        o.getClogStatus() && console.log(t);
    }
};