var t = function(t) {
    return (t = t.toString())[1] ? t : "0" + t;
};

module.exports = {
    formatTime: function(e) {
        var n = e.getFullYear(), o = e.getMonth() + 1, r = e.getDate(), g = e.getHours(), a = e.getMinutes(), u = e.getSeconds();
        return [ n, o, r ].map(t).join("/") + " " + [ g, a, u ].map(t).join(":");
    },
    getDateBaseTimestamp: function(t) {
        var e = new Date(1e3 * parseInt(t)), n = e.getFullYear() + "-", o = (e.getMonth() + 1 < 10 ? "0" + (e.getMonth() + 1) : e.getMonth() + 1) + "-", r = e.getDate() + " ", g = e.getHours(), a = ":" + e.getMinutes(), u = ":" + e.getSeconds();
        return console.log(n + o + r + g + a + u), n + o + r + g + a;
    }
};