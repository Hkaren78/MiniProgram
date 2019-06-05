function t(t) {
    var e = t.data.wordList[t.data.wordPlayIndex].word, n = t.data.wordList[t.data.wordPlayIndex].remarks, a = t.data.wordList[t.data.wordPlayIndex].name, i = null == a ? "" : "https://itaskanswer.com/enlearn/userWordImg/" + a, u = t.data.wordList[t.data.wordPlayIndex].date, s = t.data.wordList[t.data.wordPlayIndex].update, g = t.data.wordList[t.data.wordPlayIndex].times;
    l.title = e, l.epname = "单词", l.singer = n, l.coverImgUrl = i, t.setData({
        wordImage: i,
        date: d.getDateBaseTimestamp(u),
        update: d.getDateBaseTimestamp(s),
        times: g,
        wordImages: [ i ],
        word: e,
        remark: "不显示注释" == t.data.buttonDisplayNoteTitle ? n : ""
    }), setTimeout(function() {
        c >= .1 && (r.volume = .1), l.src = "http://fanyi.baidu.com/gettts?lan=en&text=" + t.data.wordList[t.data.wordPlayIndex].word + "&spd=3&source=web";
    }, 2e3), l.onEnded(function() {
        o(t);
    }), l.onError(function() {
        console.log("error"), o(t);
    });
}

function o(o) {
    exit(), r.volume = parseFloat(c), o.setData({
        wordPlayIndex: o.data.wordPlayIndex + 1 == o.data.wordList.length ? 0 : o.data.wordPlayIndex + 1
    }), setTimeout(function() {
        "暂停" == o.data.buttonPlayTitle && t(o);
    }, 3e3);
}

function e(t) {
    t.setData({
        buttonPlayTitle: "暂停" == t.data.buttonPlayTitle ? "继续" : "暂停"
    }), "暂停" == t.data.buttonPlayTitle && (console.log("继续播放吧"), o(t));
}

function n(t) {
    t.setData({
        buttonDisplayNoteTitle: "显示注释" == t.data.buttonDisplayNoteTitle ? "不显示注释" : "显示注释"
    });
}

function a(t) {
    r.volume = parseFloat(c), wx.setStorageSync("backgroundAudioVolume", c), i(t), console.log(c);
}

function i(t) {
    t.setData({
        noteTextBackgroundAudioVolume: c
    });
}

function u() {
    s.tokenRequest(function() {
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

var s = require("../../utils/wapiLogin.js"), d = (require("../../utils/clog.js"), 
require("../../utils/util.js")), r = (getApp(), wx.createInnerAudioContext()), l = wx.getBackgroundAudioManager(), c = "" == wx.getStorageSync("backgroundAudioVolume") && 0 != wx.getStorageSync("backgroundAudioVolume") ? .2 : wx.getStorageSync("backgroundAudioVolume");

Page({
    data: {},
    onLoad: function() {},
    onShow: function(t) {},
    onHide: function(t) {},
    getUserInfo: function(t) {
        wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] ? console.log("已经授权了录音") : wx.authorize({
                    scope: "scope.userInfo",
                    success: function() {},
                    fail: function() {
                        console.log("user jujuele");
                    }
                });
            }
        });
    },
    bindtapPlayWord: function() {},
    bindtapPlayPause: function() {
        e(this);
    },
    bindtapPlayDown: function() {
        c = (parseFloat(c) - .1).toFixed(1), c = c < .1 ? 0 : c, a(this);
    },
    bindtapPlayUp: function() {
        c = (parseFloat(c) + .1).toFixed(1), c = c > .9 ? 1 : c, a(this);
    },
    bindtapDisplayNote: function() {
        n(this);
    },
    bindtapShowWordImage: function(t) {
        var o = t.currentTarget.dataset.src, e = t.currentTarget.dataset.list;
        console.log("图片"), wx.previewImage({
            current: o,
            urls: e,
            complete: function(t) {
                console.log("展示完成！");
            }
        });
    },
    gotoHome: function(t) {
        wx.navigateTo({
            url: "../home/home",
            success: function(t) {},
            fail: function(t) {},
            complete: function(t) {}
        });
    },
    bindtapAuthorizeReady: function(t) {
        console.log("点击了授权！"), wx.getSetting({
            success: function(t) {
                t.authSetting["scope.userInfo"] && u();
            }
        });
    },
    bindtapAuthorize: function(t) {
        console.log("请求授权 ！！！"), u();
    }
});