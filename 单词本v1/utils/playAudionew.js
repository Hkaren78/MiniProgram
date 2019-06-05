function o(o) {
    var e = Math.floor(o / 3600), t = a(Math.floor((o - 3600 * e) / 60));
    return t + ":" + a(o - 3600 * e - 60 * t);
}

function a(o) {
    return o < 10 ? "0" + o : o;
}

function e(o, a, e) {
    console.log("CallBack start" + a + "playnowValue" + s.nowValue + "auido url---" + s.audiourl), 
    1 == a ? wx.playBackgroundAudio({
        dataUrl: s.audiourl,
        coverImgUrl: s.cover,
        title: s.title,
        success: function(o) {
            console.log("play success ");
        },
        fail: function(o) {
            console.log("play failed le 1");
        },
        complete: function(o) {
            console.log("play complete"), "android" == i.platform ? t(1, e) : wx.seekBackgroundAudio({
                position: Math.floor(s.nowValue),
                complete: function(o) {
                    console.log("seek complete ios"), t(1, e);
                }
            });
        }
    }) : 2 == a ? (wx.pauseBackgroundAudio(), clearInterval(n)) : 3 == a ? clearInterval(n) : 4 == a ? wx.getBackgroundAudioPlayerState({
        success: function(o) {
            0 == o.status ? console.log("back ground audio seek -- " + s.nowValue) : 1 == o.status ? (wx.seekBackgroundAudio({
                position: s.nowValue
            }), t(1, e)) : o.status;
        }
    }) : 5 == a ? (clearInterval(n), wx.seekBackgroundAudio({
        position: 0
    })) : 6 == a && wx.playBackgroundAudio({
        dataUrl: s.audiourl,
        coverImgUrl: s.cover,
        title: s.title,
        success: function(o) {
            console.log("play success ");
        },
        fail: function(o) {
            console.log("play failed 6");
        },
        complete: function(o) {
            t(1, e);
        }
    });
}

function t(a, e) {
    clearInterval(n), n = setInterval(function() {
        wx.getBackgroundAudioPlayerState({
            success: function(a) {
                if (console.log("播放中 status-: duration currentPosition--\x3e" + s.playStatus + a.duration + "------" + a.currentPosition + "--加载进度--" + a.downloadPercent), 
                1 == s.playStatus || 3 == s.playStatus) {
                    if (void 0 === a.currentPosition || void 0 === a.duration || 0 == a.duration) return;
                    s.nowValue = Math.floor(a.currentPosition), s.nowTimeStr = o(Math.floor(a.currentPosition)), 
                    c.setData({
                        audioplayer: s
                    });
                } else console.log("finish status call back"), e(0, 0, 0, o(0), o(0)), clearInterval(n);
            }
        });
    }, 1e3);
}

function l() {
    clearInterval(n), wx.stopBackgroundAudio(), console.log("stop background audio 2");
}

var n, u, i = wx.getSystemInfoSync();

u = "ios" == i.platform ? 300 : (i.platform, 1500), console.log("platform-" + i.platform + "time-" + u);

var s = new Object();

s.actionSheetHidden = !1;

var c, r = 0;

wx.getStorageSync("teacher_cover");

s.playStatus = 0, wx.onBackgroundAudioPlay(function(o) {
    s.playStatus = 1, c.setData({
        audioplayer: s
    }), "android" == i.platform && wx.seekBackgroundAudio({
        position: Math.floor(s.nowValue),
        complete: function() {
            console.log("android seek complete");
        }
    });
}), wx.onBackgroundAudioPause(function(o) {
    console.log("zanting" + o), s.playStatus = 2, c.setData({
        audioplayer: s
    }), clearInterval(n);
}), wx.onBackgroundAudioStop(function(o) {
    if (console.log("tingzhi" + o), 1 == s.type && s.maxValue > 60) try {
        s.nowValue > s.maxValue - 5 && (s.nowValue = 0), wx.setStorageSync(s.audiourl, s.nowValue), 
        console.log("save playvalue success");
    } catch (o) {
        console.log("save playvalue fail" + o);
    }
    s.touchChangeNowValue || (console.log("wx.onBackgroundAudioStop-set playStatus=0"), 
    s.playStatus = 0, s.nowValue = 1, s.nowTimeStr = "00:00", c.setData({
        audioplayer: s
    }));
}), module.exports = {
    initAudioPlayer: function(o) {
        r = 1, c = o, s.minValue = 0, s.maxValue = 0, s.nowValue = 1, s.nowTimeStr = "00:00", 
        s.maxTimeStr = "00:00", s.audiourl = "", s.cover = "", s.title = "", s.touchChangeNowValue = !1;
        try {
            s.title = wx.getStorageSync("lessonName"), s.cover = wx.getStorageSync("teacher_cover");
        } catch (o) {
            console.log("get lesson name cover fail");
        }
        c.setData({
            audioplayer: s
        });
    },
    setAudiourl: function(o) {
        s.audiourl = o;
    },
    setAudioNowValue: function(a) {
        s.nowValue = a < 1 ? 1 : a, s.nowTimeStr = o(Math.floor(s.nowValue)), console.log("nowTime--" + s.nowValue), 
        c.setData({
            audioplayer: s
        }), 1 != s.playStatus && (s.touchChangeNowValue = !0, console.log("setAudioNowValue wxstopaudio"), 
        wx.stopBackgroundAudio());
    },
    setAudioMaxValue: function(a) {
        s.maxValue = a < 1 ? 1 : a, s.maxTimeStr = o(Math.floor(a)), console.log("maxTime--" + s.maxValue + "-----" + s.maxTimeStr), 
        c.setData({
            audioplayer: s
        });
    },
    date_format: o,
    getPlayStatus: function() {
        return s.playStatus;
    },
    voicestopLessionVoice: l,
    chagePlayStatus: function(o) {
        var a = o.data.apidata, e = o.data.playingIndex;
        a.list[e].data.playing = !a.list[e].data.playing, o.setData({
            playingIndex: e,
            apidata: a
        });
    },
    audioplayLessionVoice: function(o) {
        if (s.type = 1, 0 == o) {
            if (0 == r) return void console.log("尚未初始化过音频播放器!");
            s.actionSheetHidden = !1, s.touchChangeNowValue = !1, c.setData({
                audioplayer: s
            }), console.log("audioplayLessionVoice wxstopaudio"), wx.stopBackgroundAudio(), 
            s.playStatus = 0, console.log("audioplaylessonvoice-set playStatus=0");
        } else if (1 == o) {
            try {
                var a = wx.getStorageSync(s.audiourl);
                a && (s.nowValue = a, console.log("get playvalue success"));
            } catch (o) {
                s.nowValue = 1, console.log("get playvalue fail");
            }
            0 == s.playStatus && (s.nowTimeStr = "00:00"), s.actionSheetHidden = !0, s.playStatus = 1, 
            console.log("playAudioApple.playStatus--" + s.playStatus), c.setData({
                audioplayer: s
            }), e(s.audiourl, 1, function(o, a, e, t, l) {});
        } else 2 == o ? (s.playStatus = 2, console.log("playAudioApple.playStatus--" + s.playStatus), 
        c.setData({
            audioplayer: s
        }), e(c.data.audiourl, 2)) : 3 == o ? e(c.data.audiourl, 3) : 4 == o ? e(s.audiourl, 4, function(o, a, e, t, l) {}) : 6 == o && (s.touchChangeNowValue ? e(s.audiourl, 1, function(o, a, e, t, l) {}) : (s.playStatus = 1, 
        c.setData({
            audioplayer: s
        }), e(s.audiourl, 6, function(o, a, e, t, l) {})), console.log("play button finish tap"), 
        s.touchChangeNowValue = !1, c.setData({
            audioplayer: s
        }));
    },
    voiceplayLessionVoice: function(o, a, t, n, u, i, c) {
        s.type = 2, e(o, 1, function(o, a, e, t, n) {
            console.log("status, maxValue, nowValue, maxTimeStr, nowTimeStr" + o + "------" + a + "------" + e + "------" + t + "------" + n), 
            0 == o && (c(), l());
        });
    }
};