var _component = require("./../common/component.js");

var FONT_COLOR = "#ed6a0c";

var BG_COLOR = "#fffbe8";

(0, _component.VantComponent)({
    props: {
        text: {
            type: String,
            value: ""
        },
        mode: {
            type: String,
            value: ""
        },
        url: {
            type: String,
            value: ""
        },
        openType: {
            type: String,
            value: "navigate"
        },
        delay: {
            type: Number,
            value: 0
        },
        speed: {
            type: Number,
            value: 50
        },
        scrollable: {
            type: Boolean,
            value: true
        },
        leftIcon: {
            type: String,
            value: ""
        },
        color: {
            type: String,
            value: FONT_COLOR
        },
        backgroundColor: {
            type: String,
            value: BG_COLOR
        }
    },
    data: {
        show: true,
        hasRightIcon: false,
        width: undefined,
        wrapWidth: undefined,
        elapse: undefined,
        animation: null,
        resetAnimation: null,
        timer: null
    },
    watch: {
        text: function text() {
            this.setData({}, this.init);
        }
    },
    created: function created() {
        if (this.data.mode) {
            this.setData({
                hasRightIcon: true
            });
        }
    },
    destroyed: function destroyed() {
        var timer = this.data.timer;
        timer && clearTimeout(timer);
    },
    methods: {
        init: function init() {
            var _this = this;
            this.getRect(".van-notice-bar__content").then(function(rect) {
                if (!rect || !rect.width) {
                    return;
                }
                _this.setData({
                    width: rect.width
                });
                _this.getRect(".van-notice-bar__content-wrap").then(function(rect) {
                    if (!rect || !rect.width) {
                        return;
                    }
                    var wrapWidth = rect.width;
                    var _this$data = _this.data, width = _this$data.width, speed = _this$data.speed, scrollable = _this$data.scrollable, delay = _this$data.delay;
                    if (scrollable && wrapWidth < width) {
                        var elapse = width / speed * 1e3;
                        var animation = wx.createAnimation({
                            duration: elapse,
                            timeingFunction: "linear",
                            delay: delay
                        });
                        var resetAnimation = wx.createAnimation({
                            duration: 0,
                            timeingFunction: "linear"
                        });
                        _this.setData({
                            elapse: elapse,
                            wrapWidth: wrapWidth,
                            animation: animation,
                            resetAnimation: resetAnimation
                        }, function() {
                            _this.scroll();
                        });
                    }
                });
            });
        },
        scroll: function scroll() {
            var _this2 = this;
            var _this$data2 = this.data, animation = _this$data2.animation, resetAnimation = _this$data2.resetAnimation, wrapWidth = _this$data2.wrapWidth, elapse = _this$data2.elapse, speed = _this$data2.speed;
            resetAnimation.translateX(wrapWidth).step();
            var animationData = animation.translateX(-(elapse * speed) / 1e3).step();
            this.setData({
                animationData: resetAnimation.export()
            });
            setTimeout(function() {
                _this2.setData({
                    animationData: animationData.export()
                });
            }, 100);
            var timer = setTimeout(function() {
                _this2.scroll();
            }, elapse);
            this.setData({
                timer: timer
            });
        },
        onClickIcon: function onClickIcon() {
            var timer = this.data.timer;
            timer && clearTimeout(timer);
            this.setData({
                show: false,
                timer: null
            });
        },
        onClick: function onClick(event) {
            this.$emit("click", event);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkZPTlRfQ09MT1IiLCJCR19DT0xPUiIsInByb3BzIiwidGV4dCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsIm1vZGUiLCJ1cmwiLCJvcGVuVHlwZSIsImRlbGF5IiwiTnVtYmVyIiwic3BlZWQiLCJzY3JvbGxhYmxlIiwiQm9vbGVhbiIsImxlZnRJY29uIiwiY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkYXRhIiwic2hvdyIsImhhc1JpZ2h0SWNvbiIsIndpZHRoIiwidW5kZWZpbmVkIiwid3JhcFdpZHRoIiwiZWxhcHNlIiwiYW5pbWF0aW9uIiwicmVzZXRBbmltYXRpb24iLCJ0aW1lciIsIndhdGNoIiwic2V0RGF0YSIsImluaXQiLCJjcmVhdGVkIiwiZGVzdHJveWVkIiwiY2xlYXJUaW1lb3V0IiwibWV0aG9kcyIsIl90aGlzIiwiZ2V0UmVjdCIsInRoZW4iLCJyZWN0IiwiX3RoaXMkZGF0YSIsInd4IiwiY3JlYXRlQW5pbWF0aW9uIiwiZHVyYXRpb24iLCJ0aW1laW5nRnVuY3Rpb24iLCJzY3JvbGwiLCJfdGhpczIiLCJfdGhpcyRkYXRhMiIsInRyYW5zbGF0ZVgiLCJzdGVwIiwiYW5pbWF0aW9uRGF0YSIsImV4cG9ydCIsInNldFRpbWVvdXQiLCJvbkNsaWNrSWNvbiIsIm9uQ2xpY2siLCJldmVudCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLElBQUlBLGFBQWEsU0FBakI7QUFDQSxJQUFJQyxXQUFXLFNBQWY7QUFDQSw4QkFBYztBQUNaQyxTQUFPO0FBQ0xDLFVBQU07QUFDSkMsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkgsS0FERDtBQUtMQyxVQUFNO0FBQ0pILFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZILEtBTEQ7QUFTTEUsU0FBSztBQUNISixZQUFNQyxNQURIO0FBRUhDLGFBQU87QUFGSixLQVRBO0FBYUxHLGNBQVU7QUFDUkwsWUFBTUMsTUFERTtBQUVSQyxhQUFPO0FBRkMs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L0IsV0FBS0MsS0FBTCxDQUFXLE9BQVgsRUFBb0JELEtBQXBCO0FBQ0Q7QUFyRk07QUFyRUcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxudmFyIEZPTlRfQ09MT1IgPSAnI2VkNmEwYyc7XHJcbnZhciBCR19DT0xPUiA9ICcjZmZmYmU4JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJydcclxuICAgIH0sXHJcbiAgICBtb2RlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9LFxyXG4gICAgdXJsOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcnXHJcbiAgICB9LFxyXG4gICAgb3BlblR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ25hdmlnYXRlJ1xyXG4gICAgfSxcclxuICAgIGRlbGF5OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcbiAgICBzcGVlZDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiA1MFxyXG4gICAgfSxcclxuICAgIHNjcm9sbGFibGU6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBsZWZ0SWNvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfSxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6IEZPTlRfQ09MT1JcclxuICAgIH0sXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogQkdfQ09MT1JcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIHNob3c6IHRydWUsXHJcbiAgICBoYXNSaWdodEljb246IGZhbHNlLFxyXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgIHdyYXBXaWR0aDogdW5kZWZpbmVkLFxyXG4gICAgZWxhcHNlOiB1bmRlZmluZWQsXHJcbiAgICBhbmltYXRpb246IG51bGwsXHJcbiAgICByZXNldEFuaW1hdGlvbjogbnVsbCxcclxuICAgIHRpbWVyOiBudWxsXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgdGV4dDogZnVuY3Rpb24gdGV4dCgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHt9LCB0aGlzLmluaXQpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEubW9kZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIGhhc1JpZ2h0SWNvbjogdHJ1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGRlc3Ryb3llZDogZnVuY3Rpb24gZGVzdHJveWVkKCkge1xyXG4gICAgdmFyIHRpbWVyID0gdGhpcy5kYXRhLnRpbWVyO1xyXG4gICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tbm90aWNlLWJhcl9fY29udGVudCcpLnRoZW4oZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICBpZiAoIXJlY3QgfHwgIXJlY3Qud2lkdGgpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgd2lkdGg6IHJlY3Qud2lkdGhcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgX3RoaXMuZ2V0UmVjdCgnLnZhbi1ub3RpY2UtYmFyX19jb250ZW50LXdyYXAnKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgICBpZiAoIXJlY3QgfHwgIXJlY3Qud2lkdGgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHZhciB3cmFwV2lkdGggPSByZWN0LndpZHRoO1xyXG4gICAgICAgICAgdmFyIF90aGlzJGRhdGEgPSBfdGhpcy5kYXRhLFxyXG4gICAgICAgICAgICAgIHdpZHRoID0gX3RoaXMkZGF0YS53aWR0aCxcclxuICAgICAgICAgICAgICBzcGVlZCA9IF90aGlzJGRhdGEuc3BlZWQsXHJcbiAgICAgICAgICAgICAgc2Nyb2xsYWJsZSA9IF90aGlzJGRhdGEuc2Nyb2xsYWJsZSxcclxuICAgICAgICAgICAgICBkZWxheSA9IF90aGlzJGRhdGEuZGVsYXk7XHJcblxyXG4gICAgICAgICAgaWYgKHNjcm9sbGFibGUgJiYgd3JhcFdpZHRoIDwgd2lkdGgpIHtcclxuICAgICAgICAgICAgdmFyIGVsYXBzZSA9IHdpZHRoIC8gc3BlZWQgKiAxMDAwO1xyXG4gICAgICAgICAgICB2YXIgYW5pbWF0aW9uID0gd3guY3JlYXRlQW5pbWF0aW9uKHtcclxuICAgICAgICAgICAgICBkdXJhdGlvbjogZWxhcHNlLFxyXG4gICAgICAgICAgICAgIHRpbWVpbmdGdW5jdGlvbjogJ2xpbmVhcicsXHJcbiAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgcmVzZXRBbmltYXRpb24gPSB3eC5jcmVhdGVBbmltYXRpb24oe1xyXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAwLFxyXG4gICAgICAgICAgICAgIHRpbWVpbmdGdW5jdGlvbjogJ2xpbmVhcidcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBfdGhpcy5zZXREYXRhKHtcclxuICAgICAgICAgICAgICBlbGFwc2U6IGVsYXBzZSxcclxuICAgICAgICAgICAgICB3cmFwV2lkdGg6IHdyYXBXaWR0aCxcclxuICAgICAgICAgICAgICBhbmltYXRpb246IGFuaW1hdGlvbixcclxuICAgICAgICAgICAgICByZXNldEFuaW1hdGlvbjogcmVzZXRBbmltYXRpb25cclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgIF90aGlzLnNjcm9sbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgc2Nyb2xsOiBmdW5jdGlvbiBzY3JvbGwoKSB7XHJcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgICAgdmFyIF90aGlzJGRhdGEyID0gdGhpcy5kYXRhLFxyXG4gICAgICAgICAgYW5pbWF0aW9uID0gX3RoaXMkZGF0YTIuYW5pbWF0aW9uLFxyXG4gICAgICAgICAgcmVzZXRBbmltYXRpb24gPSBfdGhpcyRkYXRhMi5yZXNldEFuaW1hdGlvbixcclxuICAgICAgICAgIHdyYXBXaWR0aCA9IF90aGlzJGRhdGEyLndyYXBXaWR0aCxcclxuICAgICAgICAgIGVsYXBzZSA9IF90aGlzJGRhdGEyLmVsYXBzZSxcclxuICAgICAgICAgIHNwZWVkID0gX3RoaXMkZGF0YTIuc3BlZWQ7XHJcbiAgICAgIHJlc2V0QW5pbWF0aW9uLnRyYW5zbGF0ZVgod3JhcFdpZHRoKS5zdGVwKCk7XHJcbiAgICAgIHZhciBhbmltYXRpb25EYXRhID0gYW5pbWF0aW9uLnRyYW5zbGF0ZVgoLShlbGFwc2UgKiBzcGVlZCkgLyAxMDAwKS5zdGVwKCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgYW5pbWF0aW9uRGF0YTogcmVzZXRBbmltYXRpb24uZXhwb3J0KClcclxuICAgICAgfSk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF90aGlzMi5zZXREYXRhKHtcclxuICAgICAgICAgIGFuaW1hdGlvbkRhdGE6IGFuaW1hdGlvbkRhdGEuZXhwb3J0KClcclxuICAgICAgICB9KTtcclxuICAgICAgfSwgMTAwKTtcclxuICAgICAgdmFyIHRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMyLnNjcm9sbCgpO1xyXG4gICAgICB9LCBlbGFwc2UpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRpbWVyOiB0aW1lclxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrSWNvbjogZnVuY3Rpb24gb25DbGlja0ljb24oKSB7XHJcbiAgICAgIHZhciB0aW1lciA9IHRoaXMuZGF0YS50aW1lcjtcclxuICAgICAgdGltZXIgJiYgY2xlYXJUaW1lb3V0KHRpbWVyKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICB0aW1lcjogbnVsbFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJywgZXZlbnQpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19