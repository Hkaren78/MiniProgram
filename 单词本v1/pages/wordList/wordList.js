function t(t) {
    var o = Array();
    o.order = " wddcb_user_word.update_date ", o.from = t.data.start, o.count = t.data.length, 
    o.esc = "desc", a.wrequest("wordList", o, function(a) {
        console.log("e", a), 1 == a.data.status && t.setData({
            start: t.data.start + t.data.length,
            wordLists: a.data.data
        });
    });
}

var a = require("../../utils/wapi.js");

Page({
    data: {
        start: 0,
        length: 5e4,
        wordLists: []
    },
    onLoad: function(t) {},
    onShow: function() {
        wx.setNavigationBarTitle({
            title: "单词本"
        }), t(this);
    },
    onPullDownRefresh: function() {
        this.setData({
            start: 0
        }), t(this);
    },
    onReachBottom: function() {},
    bindtapWord: function(t) {
        console.log("word--\x3e", t), wx.navigateTo({
            url: "/pages/wordAdd/wordAdd?from=wordList&word=" + t.currentTarget.id
        });
    }
});