function n() {
    o.tokenRequest(function(n) {
        console.log("login success -"), wx.reLaunch({
            url: "/pages/home/home"
        });
    }, function() {
        console.log("login fail");
    }, function() {
        console.log("go to auth page view"), wx.reLaunch({
            url: "/pages/index/index"
        });
    });
}

var o = require("/utils/wapiLogin.js");

App({
    onLaunch: function() {
        wx.getStorageSync("token") || n();
    },
    globalData: {
        userInfo: null
    }
});