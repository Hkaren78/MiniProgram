function o() {
    e.tokenRequest(function() {
        console.log("login success"), wx.reLaunch({
            url: "/pages/home/home"
        });
    }, function() {
        console.log("login fail"), wx.showToast({
            title: "请求出错，请重试！",
            icon: "none",
            duration: 2e3
        });
    }, function() {
        console.log("go to auth page view"), wx.showToast({
            title: "未检查到你的授权，请授权",
            icon: "none",
            duration: 2e3
        });
    });
}

require("../../utils/api.js");

var e = require("../../utils/wapiLogin.js");

require("../../utils/clog.js"), require("../../utils/util.js"), getApp(), wx.createInnerAudioContext(), 
wx.getBackgroundAudioManager(), "" == wx.getStorageSync("backgroundAudioVolume") && 0 != wx.getStorageSync("backgroundAudioVolume") || wx.getStorageSync("backgroundAudioVolume");

Page({
    data: {},
    onLoad: function() {},
    onShow: function(e) {
        o();
    },
    bindtapAuthorizeReady: function(e) {
        console.log("点击了授权！"), wx.getSetting({
            success: function(e) {
                e.authSetting["scope.userInfo"] && o();
            }
        });
    },
    bindtapAuthorize: function(e) {
        console.log("请求授权 ！！！"), o();
    },
    bindtapAuthorizeTest: function(o) {
        console.log("先试试"), wx.setStorageSync("token", "cda35693a889073320190317111644"), 
        wx.reLaunch({
            url: "/pages/home/home"
        });
    }
});