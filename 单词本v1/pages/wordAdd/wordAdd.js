function t(t) {
    var e = t.data.word, a = Array();
    a.word = e;
    var o, n, d, i, s, u;
    if ("" == e) return o = !0, n = !0, d = !0, i = !0, u = !0, s = "添加", void t.setData({
        ph_am_hidden: o,
        ph_en_hidden: n,
        trans_hidden: d,
        deleteButton: i,
        addTitle: s,
        boom_hidden: u
    });
    m.wrequest("findWord", a, function(e) {
        var a = e.data;
        if (4 == a.status || 3 == a.status) {
            console.log("word data->", a), console.log("word pham->", a.data.content.symbols[0].ph_am);
            var c = a.data.content.symbols[0].ph_am, m = a.data.content.symbols[0].ph_en, h = a.data.content.symbols[0].ph_am_mp3, p = a.data.content.symbols[0].ph_en_mp3, f = r(a.data.content.symbols), w = "", g = [], _ = "", v = "", y = "", T = !1;
            3 == a.status ? (w = a.data.myWord.note, g = a.data.myWord.images, _ = l.getDateBaseTimestamp(a.data.myWord.date), 
            v = l.getDateBaseTimestamp(a.data.myWord.update), y = a.data.myWord.number, T = a.data.myWord.know, 
            s = "已添加", i = !1, u = !1) : (g = [], w = "", s = "添加", i = !0, u = !0), void 0 == c || "" == c ? (c = "", 
            m = "", o = !0, n = !0) : (o = !1, n = !1), d = void 0 == f || "" == f, t.setData({
                ph_am_hidden: o,
                ph_en_hidden: n,
                trans_hidden: d,
                ph_am: c,
                ph_en: m,
                en_mp3: p,
                am_mp3: h,
                trans: f,
                note: w,
                addTitle: s,
                wordImages: g,
                deleteButton: i,
                boom_hidden: u,
                addTime: _,
                searchTimeNew: v,
                searchTimes: y,
                know: T
            });
        }
    });
}

function e(t) {
    var e = t.data.word, a = Array();
    a.word = e, m.wrequest("createWord", a, function(e) {
        1 == e.data.status && t.setData({
            deleteButton: !1,
            addTitle: "已添加"
        });
    });
}

function a(t) {
    var e = t.data.word, a = Array();
    a.word = e, m.wrequest("updateKnow", a, function(e) {
        var a = e.data;
        1 == a.status && t.setData({
            know: a.data
        });
    });
}

function o(e) {
    var a = e.data.word, o = Array();
    o.word = a, m.wrequest("deleteWord", o, function(a) {
        1 == a.data.status && t(e);
    });
}

function n(t) {
    var e = t.data.note, a = t.data.word, o = Array();
    o.word = a, o.note = e, m.wrequest("updateNote", o, function(t) {
        console.log("not request result->", t);
    });
}

function d(e, a) {
    console.log(e);
    var o = Array();
    o.imageId = e, m.wrequest("deleteImage", o, function(e) {
        console.log("e", e), 1 == e.data.status && t(a);
    });
}

function r(t) {
    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "\n", a = "";
    return t.forEach(function(t) {
        void 0 !== t.parts && t.parts.forEach(function(t) {
            a = a + t.part + " ", t.means.forEach(function(t) {
                a = a + t + " ";
            }), a += e;
        });
    }), a;
}

function i(t) {
    return "" != t.data.word;
}

function s(t) {
    return !!i(t) || (wx.showToast({
        icon: "none",
        title: "先输入单词",
        duration: 500
    }), t.setData({
        inputFocusWord: !0
    }), !1);
}

function u(t) {
    if (0 != t.data.wordImages) return !0;
    var e = t.data.note;
    return null != e && 0 != e.replace(/(^\s*)|(\s*$)/g, "").length;
}

var c = require("../../utils/init.js"), m = require("../../utils/wapi.js"), l = require("../../utils/util.js");

Page({
    data: {
        tips: !0,
        word: "",
        inputWord: "",
        note: "",
        ph_en: "",
        ph_am: "",
        ph_en_hidden: !0,
        ph_am_hidden: !0,
        en_mp3: "",
        am_mp3: "",
        trans: "",
        trans_hidden: !0,
        imageSrc: "",
        addTitle: "添加",
        deleteButton: !0,
        wordImages: [],
        inputFocusWord: !1,
        boom_hidden: !0,
        addTime: "",
        searchTimeNew: "",
        searchTimes: "",
        know: ""
    },
    chooseImage: function(e) {
        if (s(this)) {
            var a = this;
            wx.chooseImage({
                sizeType: [ "original", "compressed" ],
                sourceType: [ "album", "camera" ],
                success: function(e) {
                    var o = e.tempFilePaths;
                    wx.uploadFile({
                        url: c.getApiUrl(),
                        filePath: o[0],
                        name: "image",
                        method: "POST",
                        formData: {
                            client_type: 2,
                            method: "addImage",
                            token: wx.getStorageSync("token"),
                            word: a.data.word
                        },
                        success: function(e) {
                            console.log("success----", e), t(a);
                        },
                        fail: function(t) {
                            console.log("fail----");
                        }
                    });
                }
            });
        }
    },
    onLoad: function(e) {
        console.log("options--\x3e", e), "wordList" == e.from && (this.setData({
            word: e.word,
            inputWord: e.word
        }), t(this));
    },
    onShow: function() {},
    bindinputWord: function(e) {
        this.setData({
            word: e.detail.value
        }), t(this);
    },
    bindtapAddWord: function(t) {
        s(this) && e(this);
    },
    bindtapDeleteWord: function(t) {
        if (u(this)) {
            var e = this;
            wx.showModal({
                title: "单词关联的图片和备注将会一同彻底删除，无法恢复。",
                success: function(t) {
                    t.confirm && o(e);
                }
            });
        } else o(this);
    },
    bindtapVoice: function(t) {
        console.log("voice->", t.currentTarget.dataset.mp3);
        var e = t.currentTarget.dataset.mp3, a = wx.createInnerAudioContext();
        a.src = e, a.play();
    },
    bindfocusNote: function(t) {
        s(this);
    },
    bindinputNote: function(t) {
        s(this) && (this.setData({
            note: t.detail.value
        }), n(this));
    },
    bindtapDisplayImage: function(t) {
        var e = t.currentTarget.dataset.url, a = Array();
        this.data.wordImages.forEach(function(t) {
            a.push(t.image);
        }), wx.previewImage({
            current: e,
            urls: a
        });
    },
    bindtapDeleteImage: function(t) {
        console.log("delete", t.currentTarget.dataset.imageid), d(t.currentTarget.dataset.imageid, this);
    },
    bindtapKnow: function(t) {
        a(this);
    }
});