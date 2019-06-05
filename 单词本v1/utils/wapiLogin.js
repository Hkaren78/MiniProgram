function e(e, o, n, i) {
    wx.getSetting({
        success: function(a) {
            if (console.log(a), !a.authSetting["scope.userInfo"]) return console.log("weishouquan---"), 
            void i();
            var s = Array();
            s.client_type = 2, s.method = "getUnitId", wx.getUserInfo({
                success: function(i) {
                    s.iv = i.iv, s.encryptedData = i.encryptedData, s.openid = e, wx.showNavigationBarLoading(), 
                    wx.request({
                        url: t.getApiUrl(),
                        data: s,
                        header: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        method: "POST",
                        success: function(e) {
                            console.log("get unitid->", e);
                            var t = e.data.data;
                            wx.setStorageSync("openId", t.openId), wx.setStorageSync("unionId", t.unionId), 
                            wx.setStorageSync("token", e.data.token), o();
                        },
                        fail: function(e) {
                            n("register request fail");
                        },
                        complete: function() {
                            wx.hideNavigationBarLoading();
                        }
                    });
                },
                fail: function(e) {
                    console.log("get user info fail"), n();
                }
            });
        },
        fail: function() {
            console.log("getSetting fail"), n();
        }
    });
}

var t = require("/init.js");

require("/clog.js");

module.exports = {
    tokenRequest: function(o, n, i) {
        var a = Array();
        a.method = "wxappLogin", a.client_type = 2, wx.login({
            success: function(s) {
                s.code ? (a.code = s.code, wx.showNavigationBarLoading(), wx.request({
                    url: t.getApiUrl(),
                    data: a,
                    header: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    method: "POST",
                    success: function(t) {
                        console.log("wxappLogin->", t), 1 == t.data.status ? (wx.setStorageSync("token", t.data.token), 
                        o()) : 3 == t.data.status ? e(t.data.data, function() {
                            console.log("register success"), o();
                        }, function() {
                            n("register request fail");
                        }, function() {
                            i("user info auth fail");
                        }) : n("get token request fail", t);
                    },
                    fail: function(e) {
                        n("register request fail");
                    },
                    complete: function() {
                        wx.hideNavigationBarLoading();
                    }
                })) : console.log("wx.login fail ->", s.errMsg);
            }
        });
    }
};