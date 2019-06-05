function e(e) {
    return 400 != e || (wx.clearStorageSync("token"), wx.reLaunch({
        url: "/pages/index/index"
    }), !1);
}

var t = require("/init.js"), o = require("/clog.js");

module.exports = {
    wrequest: function(n, r, a, i, u) {
        wx.getStorageSync("token") ? (!1 !== r.loading && wx.showNavigationBarLoading(), 
        r.client_type = 2, r.token = wx.getStorageSync("token"), r.method = n, console.log("argumentdata->", r), 
        wx.request({
            url: t.getApiUrl(),
            data: r,
            header: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST",
            success: function(t) {
                o.log("request-success"), e(t.data.status) && a(t);
            },
            fail: function(e) {
                requestCount = 0, i("网络请求失败");
            },
            complete: function(e) {
                console.log("request complete"), wx.hideNavigationBarLoading(), wx.stopPullDownRefresh();
            }
        })) : i("没有token");
    }
};