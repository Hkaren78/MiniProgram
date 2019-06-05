function t(t, e) {
    wx.getStorage({
        key: "token",
        success: function(o) {
            t(o.data);
        },
        fail: function(n) {
            a.log("缓存中没有token go获取token"), o(function(o) {
                a.log("获取到的tokenis" + o), t(o);
            }, function(t) {
                a.log("尝试获取token失败了 " + t), e("-----token 未获取成功");
            });
        }
    });
}

function o(t, o) {
    e(function(o) {
        t(o);
    }, function(t) {
        o(t);
    });
}

function e(t, o) {
    var e;
    e = g + "login";
    var n = {};
    wx.login({
        success: function(i) {
            var s = i.code;
            wx.getSetting({
                success: function(i) {
                    i.authSetting["scope.userInfo"] ? (console.log("applaunch"), wx.getUserInfo({
                        success: function(i) {
                            console.log(i), n.code = s, n.encryptedData = i.encryptedData, n.iv = i.iv, wx.request({
                                url: e,
                                data: n,
                                method: "post",
                                success: function(e) {
                                    if (200 == e.statusCode) try {
                                        wx.setStorageSync("token", e.data.data), a.log("缓存最新token成功"), t(e.data.data);
                                    } catch (t) {
                                        a.log("缓存token失败error:" + t), o("无可fail");
                                    } else t("\b获取token请求失败！");
                                },
                                fail: function() {
                                    a.log("获取tokenken失败"), o("获取token fail");
                                },
                                complete: function(t) {
                                    a.log("网络请求 complete");
                                }
                            });
                        }
                    })) : console.log("butongyishouquan");
                }
            });
        }
    });
}

function n(e, f, d, p, h, w, k) {
    if (0 == r && (r = 1, c = 0), l) {
        if (c >= r) return a.log("已经加载完数据"), void w("已经加载完数据");
        c++;
    }
    t(function(t) {
        if (d.token = t, d.client_type = 0, s < u) {
            s++;
            var m = g + e;
            l && (m = m + "&page=" + c), a.log("request-url:"), a.log(m), a.log("request-argument:"), 
            a.log(d), wx.request({
                url: m,
                data: d,
                method: f,
                success: function(t) {
                    a.log("request-success-:"), a.log(t), 200 == t.statusCode || 201 == t.statusCode ? (s = 0, 
                    l && (c = t.header["X-Pagination-Current-Page"], r = t.header["X-Pagination-Page-Count"]), 
                    p(t)) : 401 == t.statusCode ? s <= u ? o(function(t) {
                        n(e, f, d, p, h, w);
                    }, function(t) {
                        s = 0, w("获取最新token失败！"), wx.showToast({
                            title: "token失败",
                            icon: "loading",
                            duration: 1e3
                        });
                    }) : (wx.showToast({
                        title: "鉴权失败,且重复请求了一次已经",
                        icon: "loading",
                        duration: 1e3
                    }), w("401错误！")) : 403 == t.statusCode ? (s = 0, t.data.message.length > 0 && wx.showToast({
                        title: t.data.message,
                        icon: "loading",
                        duration: 1e3
                    }), 2 == i.getUsertype() ? setTimeout(function() {
                        h(t);
                    }, 1e3) : h(t)) : (s = 0, wx.showToast({
                        title: "错误代码" + t.statusCode + "-" + e,
                        icon: "loading",
                        duration: 1e3
                    }));
                },
                fail: function(t) {
                    a.log("meizu"), s = 0, w("网络请求失败"), wx.showToast({
                        title: "请求失败",
                        icon: "loading",
                        duration: 1e3
                    });
                },
                complete: function(t) {
                    setTimeout(function() {
                        wx.hideToast();
                    }, 1e3), "function" == typeof k && k("complete");
                }
            });
        } else s = 0;
    }, function(t) {
        w("缓存获取token失败！");
    });
}

var i = require("/init.js"), a = require("/clog.js"), s = 0, u = 2, c = "0", r = "1", l = !1, g = "https://wodedanciben.com/api0011.php?method=";

module.exports = {
    getTokenFromStorage: t,
    talkwxrequest: n,
    requestAvatarUrl: function(t, o, e) {
        wx.getUserInfo({
            success: function(o) {
                t(o.userInfo.avatarUrl);
            },
            fail: function(o) {
                t("/pages/image/application-head-portrait.png");
            }
        });
    },
    homeUrl: g,
    imageurl: "",
    audiourl: "",
    alert: function(t) {
        wx.showToast({
            title: t,
            mask: !0,
            icon: "loading",
            duration: 2e3
        });
    },
    secondToWidth: function(t) {
        var o = t * (250 / 420);
        return o > 250 ? 300 : 50 + o;
    },
    secondToViewString: function(t) {
        return Math.floor(t / 60) + "'" + t % 60 + "''";
    },
    setPageType: function(t) {
        l = t;
    },
    setPage: function(t) {
        c = t, a.log("page is set--\x3e" + c);
    },
    getPage: function() {
        return c;
    },
    secondToWidthRecord: function(t) {
        return t > 300 && (t = 300), 50 + t / .24;
    },
    secondToWidthVoice: function(t) {
        var o = t * (130 / 300);
        return o > 130 ? 130 : o;
    }
};