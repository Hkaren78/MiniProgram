function t(t) {
    var a = Array();
    a.order = " wddcb_user_word.update_date ", a.from = 0, a.count = 5e4, a.esc = "desc", 
    a.know = 1, p.wrequest("wordList", a, function(a) {
        if (console.log("e", a), 4 == a.data.status) return wx.showToast({
            title: a.data.msg,
            icon: "none",
            duration: 2e3,
            complete: function(t) {}
        }), void i(2e3).then(function() {
            wx.navigateTo({
                url: "../wordAdd/wordAdd"
            });
        });
        if (1 == a.data.status) {
            if (a.data.setting.words_update == t.data.words_update) return;
            t.setData({
                wordLists: a.data.data,
                wordObject: a.data.data[0],
                playIndex: 0,
                playIndexImage: 0,
                mute: a.data.setting.mute,
                playStatus: 1 != a.data.setting.play_status,
                tips: !(a.data.data.length > 15),
                words_update: a.data.setting.words_update
            }), l(t), 2 == a.data.setting.play_status ? n(t, !0) : n(t, !1);
        }
    }, function(t) {
        console.log(t);
    });
}

function a(t) {
    var a = t.data.wordLists, e = t.data.playIndex;
    if (0 != a.length) {
        var o = t.data.wordObject.word, n = Array();
        n.word = o, p.wrequest("updateKnow", n, function(o) {
            var n = o.data;
            if (1 == n.status) {
                if (1 == a.length) {
                    var d = t.data.wordObject;
                    return d.know = n.data, void t.setData({
                        wordObject: d
                    });
                }
                a.splice(e, 1), e == a.length - 1 && (e = 0), t.setData({
                    playIndex: e,
                    wordLists: a,
                    wordObject: a[e]
                }), u(t);
            }
        });
    }
}

function e(t) {
    var a = Array();
    a.mute = t.data.mute, a.loading = !1, p.wrequest("updateUserSetting", a, function(t) {
        1 == t.data.status && console.log("settting success");
    });
}

function o(t) {
    var a = Array();
    a.play_status = 1 == t.data.playStatus ? 2 : 1, a.loading = !1, p.wrequest("updateUserSetting", a, function(t) {
        1 == t.data.status && console.log("settting success");
    });
}

function n(t, a) {
    if (t.setData({
        playStatus: a
    }), o(t), a) {
        var e = t.data.playIndex;
        t.setData({
            playIndex: e > -1 ? e - 1 : e
        }), g = setInterval(function() {
            s(t);
        }, 6e3);
    } else clearInterval(g);
}

function d(t) {
    if (1 != t.data.mute) {
        var a = wx.createInnerAudioContext();
        a.src = t.data.wordObject.ciba.content.symbols[0].ph_am_mp3, a.play();
    }
}

function i(t) {
    return new Promise(function(a) {
        return setTimeout(a, t);
    });
}

function r(t, a) {
    if (0 == f) return f = t.touches[0].clientX, void (x = t.timeStamp);
    0 != y ? (0 == m && (m = 1, f > y && (console.log("<--"), s(a)), f < y && (console.log("--\x3e"), 
    c(a))), (h = t.timeStamp) - 500 > x && (f = y = m = x = h = 0)) : y = t.touches[0].clientX;
}

function s(t) {
    var a = t.data.playIndex, e = t.data.wordLists.length;
    if (!(e < 2)) {
        var o = void 0 != t.data.wordObject.images ? t.data.wordObject.images : [], n = t.data.playIndexImage;
        o.length > n + 1 ? t.setData({
            playIndexImage: n + 1
        }) : (a == e - 1 ? a = 0 : a += 1, t.setData({
            wordObject: t.data.wordLists[a],
            playIndex: a,
            playIndexImage: 0
        }), u(t));
        try {
            d(t);
        } catch (t) {
            console.log("error play", t);
        }
    }
}

function c(t) {
    var a = t.data.playIndex, e = t.data.wordLists.length;
    if (!(e < 2)) {
        0 == a ? t.setData({
            wordObject: t.data.wordLists[e - 1],
            playIndex: e - 1,
            playIndexImage: 0
        }) : t.setData({
            wordObject: t.data.wordLists[a - 1],
            playIndex: a - 1,
            playIndexImage: 0
        }), u(t);
        try {
            d(t);
        } catch (t) {
            console.log("error play", t);
        }
    }
}

function u(t) {
    var a = t.data.playIndex, e = t.data.wordLists, o = e.length, n = "", d = "", i = "", r = "";
    console.log(e), console.log(o), console.log(a), 0 == a ? (n = e[o - 1].word, d = e[a].word, 
    i = e[1].word) : a == o - 1 ? (n = e[a - 2].word, d = e[a].word, i = e[0].word) : (n = e[a - 1].word, 
    d = e[a].word, i = e[a + 1].word), r = n + "·" + d + "·" + i, wx.setNavigationBarTitle({
        title: r
    }), t.setData({
        title: r
    });
}

function l(t) {
    1 == t.data.mute ? wx.setNavigationBarTitle({
        title: t.data.title
    }) : wx.setNavigationBarTitle({
        title: "⚡️播放单词会有声音"
    });
}

var w = require("../../utils/init.js"), p = require("../../utils/wapi.js");

require("../../utils/util.js");

Page({
    data: {
        playStatus: !0,
        tips: !1,
        mute: 2,
        playIndex: 0,
        playIndexImage: 0,
        wordObject: {},
        wordLists: [],
        imageUrlBase: w.getHomeUrl() + "/wordImage/",
        words_update: 1,
        title: "我的单词本"
    },
    onLoad: function(t) {
        "cda35693a889073320190317111644" == wx.getStorageSync("token") && wx.showModal({
            title: "欢迎使用",
            content: "授权同步，可以在电脑端和小程序同时使用。",
            showCancel: !0,
            cancelText: "继续试用",
            cancelColor: "",
            confirmText: "现在授权",
            confirmColor: "",
            success: function(t) {
                t.confirm && wx.reLaunch({
                    url: "/pages/index/index"
                });
            }
        });
    },
    onReady: function() {},
    onShow: function() {
        wx.setKeepScreenOn({
            keepScreenOn: !0
        }), t(this);
    },
    onHide: function() {},
    onUnload: function() {},
    onShareAppMessage: function() {},
    bindtapWordList: function() {
        wx.navigateTo({
            url: "../wordList/wordList"
        });
    },
    bindtapWordAdd: function() {
        wx.navigateTo({
            url: "../wordAdd/wordAdd"
        });
    },
    bindtapWordDetail: function() {
        wx.navigateTo({
            url: "../wordAdd/wordAdd?from=wordList&word=" + this.data.wordObject.word
        });
    },
    bindtapPlay: function(t) {
        n(this, !0);
    },
    bindtapPause: function(t) {
        n(this, !1);
    },
    catchtouchmove: function(t) {
        r(t, this);
    },
    bindtapMute: function(t) {
        this.setData({
            mute: 1 == this.data.mute ? 2 : 1
        }), l(this), e(this);
    },
    bindtapWordKnow: function(t) {
        var e = this.data.wordObject;
        e.know = 2, this.setData({
            wordObject: e
        }), a(this);
    }
});

var g, f = 0, y = 0, m = 0, x = 0, h = 0;