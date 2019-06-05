var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    relation: {
        name: "tab",
        type: "descendant",
        linked: function linked(child) {
            this.data.tabs.push({
                instance: child,
                data: child.data
            });
            this.updateTabs();
        },
        unlinked: function unlinked(child) {
            var tabs = this.data.tabs.filter(function(item) {
                return item.instance !== child;
            });
            this.setData({
                tabs: tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        }
    },
    props: {
        color: String,
        lineWidth: Number,
        active: {
            type: Number,
            value: 0
        },
        type: {
            type: String,
            value: "line"
        },
        border: {
            type: Boolean,
            value: true
        },
        duration: {
            type: Number,
            value: .2
        },
        zIndex: {
            type: Number,
            value: 99
        },
        swipeThreshold: {
            type: Number,
            value: 4
        }
    },
    data: {
        tabs: [],
        lineStyle: "",
        scrollLeft: 0,
        scrollable: false
    },
    watch: {
        swipeThreshold: function swipeThreshold() {
            this.setData({
                scrollable: this.data.tabs.length > this.data.swipeThreshold
            });
        },
        color: "setLine",
        lineWidth: "setLine",
        active: "setActiveTab"
    },
    mounted: function mounted() {
        this.setLine();
        this.scrollIntoView();
    },
    methods: {
        updateTabs: function updateTabs() {
            var tabs = this.data.tabs;
            this.setData({
                tabs: tabs,
                scrollable: tabs.length > this.data.swipeThreshold
            });
            this.setActiveTab();
        },
        trigger: function trigger(eventName, index) {
            this.$emit(eventName, {
                index: index,
                title: this.data.tabs[index].data.title
            });
        },
        onTap: function onTap(event) {
            var index = event.currentTarget.dataset.index;
            if (this.data.tabs[index].data.disabled) {
                this.trigger("disabled", index);
            } else {
                this.trigger("click", index);
                this.setActive(index);
            }
        },
        setActive: function setActive(active) {
            if (active !== this.data.active) {
                this.trigger("change", active);
                this.setData({
                    active: active
                });
                this.setActiveTab();
            }
        },
        setLine: function setLine() {
            var _this = this;
            if (this.data.type !== "line") {
                return;
            }
            this.getRect(".van-tab", true).then(function(rects) {
                var rect = rects[_this.data.active];
                var width = _this.data.lineWidth || rect.width / 2;
                var left = rects.slice(0, _this.data.active).reduce(function(prev, curr) {
                    return prev + curr.width;
                }, 0);
                left += (rect.width - width) / 2;
                _this.setData({
                    lineStyle: "\n            width: " + width + "px;\n            background-color: " + _this.data.color + ";\n            transform: translateX(" + left + "px);\n            transition-duration: " + _this.data.duration + "s;\n          "
                });
            });
        },
        setActiveTab: function setActiveTab() {
            var _this2 = this;
            this.data.tabs.forEach(function(item, index) {
                var data = {
                    active: index === _this2.data.active
                };
                if (data.active) {
                    data.inited = true;
                }
                if (data.active !== item.instance.data.active) {
                    item.instance.setData(data);
                }
            });
            this.setLine();
            this.scrollIntoView();
        },
        // scroll active tab into view
        scrollIntoView: function scrollIntoView() {
            var _this3 = this;
            if (!this.data.scrollable) {
                return;
            }
            this.getRect(".van-tab", true).then(function(tabRects) {
                var tabRect = tabRects[_this3.data.active];
                var offsetLeft = tabRects.slice(0, _this3.data.active).reduce(function(prev, curr) {
                    return prev + curr.width;
                }, 0);
                var tabWidth = tabRect.width;
                _this3.getRect(".van-tabs__nav").then(function(navRect) {
                    var navWidth = navRect.width;
                    _this3.setData({
                        scrollLeft: offsetLeft - (navWidth - tabWidth) / 2
                    });
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJjaGlsZCIsImRhdGEiLCJ0YWJzIiwicHVzaCIsImluc3RhbmNlIiwidXBkYXRlVGFicyIsInVubGlua2VkIiwiZmlsdGVyIiwiaXRlbSIsInNldERhdGEiLCJzY3JvbGxhYmxlIiwibGVuZ3RoIiwic3dpcGVUaHJlc2hvbGQiLCJzZXRBY3RpdmVUYWIiLCJwcm9wcyIsImNvbG9yIiwiU3RyaW5nIiwibGluZVdpZHRoIiwiTnVtYmVyIiwiYWN0aXZlIiwidmFsdWUiLCJib3JkZXIiLCJCb29sZWFuIiwiZHVyYXRpb24iLCJ6SW5kZXgiLCJsaW5lU3R5bGUiLCJzY3JvbGxMZWZ0Iiwid2F0Y2giLCJtb3VudGVkIiwic2V0TGluZSIsInNjcm9sbEludG9WaWV3IiwibWV0aG9kcyIsInRyaWdnZXIiLCJldmVudE5hbWUiLCJpbmRleCIsIiRlbWl0IiwidGl0bGUiLCJvblRhcCIsImV2ZW50IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJkaXNhYmxlZCIsInNldEFjdGl2ZSIsIl90aGlzIiwiZ2V0UmVjdCIsInRoZW4iLCJyZWN0cyIsInJlY3QiLCJ3aWR0aCIsImxlZnQiLCJzbGljZSIsInJlZHVjZSIsInByZXYiLCJjdXJyIiwiX3RoaXMyIiwiZm9yRWFjaCIsImluaXRlZCIsIl90aGlzMyIsInRhYlJlY3RzIiwidGFiUmVjdCIsIm9mZnNldExlZnQiLCJ0YWJXaWR0aCIsIm5hdlJlY3QiLCJuYXZXaWR0aCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sS0FERTtBQUVSQyxVQUFNLFlBRkU7QUFHUkMsWUFBUSxTQUFTQSxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtBQUM3QixXQUFLQyxJQUFMLENBQVVDLElBQVYsQ0FBZUMsSUFBZixDQUFvQjtBQUNsQkMsa0JBQVVKLEtBRFE7QUFFbEJDLGNBQU1ELE1B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QSxZQUFJYSxXQUFXRixRQUFRWCxLQUF2Qjs7QUFFQVMsZUFBT2IsT0FBUCxDQUFlLGdCQUFmLEVBQWlDQyxJQUFqQyxDQUFzQyxVQUFVaUIsT0FBVixFQUFtQjtBQUN2RCxjQUFJQyxXQUFXRCxRQUFRZCxLQUF2Qjs7QUFFQVMsaUJBQU9oRCxPQUFQLENBQWU7QUFDYmlCLHdCQUFZa0MsYUFBYSxDQUFDRyxXQUFXRixRQUFaLElBQXdCO0FBRHBDLFdBQWY7QUFHRCxTQU5EO0FBT0QsT0FkRDtBQWVEO0FBaEdNO0FBdEVHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAndGFiJyxcclxuICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcclxuICAgIGxpbmtlZDogZnVuY3Rpb24gbGlua2VkKGNoaWxkKSB7XHJcbiAgICAgIHRoaXMuZGF0YS50YWJzLnB1c2goe1xyXG4gICAgICAgIGluc3RhbmNlOiBjaGlsZCxcclxuICAgICAgICBkYXRhOiBjaGlsZC5kYXRhXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnVwZGF0ZVRhYnMoKTtcclxuICAgIH0sXHJcbiAgICB1bmxpbmtlZDogZnVuY3Rpb24gdW5saW5rZWQoY2hpbGQpIHtcclxuICAgICAgdmFyIHRhYnMgPSB0aGlzLmRhdGEudGFicy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5pbnN0YW5jZSAhPT0gY2hpbGQ7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHRhYnM6IHRhYnMsXHJcbiAgICAgICAgc2Nyb2xsYWJsZTogdGFicy5sZW5ndGggPiB0aGlzLmRhdGEuc3dpcGVUaHJlc2hvbGRcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0QWN0aXZlVGFiKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgY29sb3I6IFN0cmluZyxcclxuICAgIGxpbmVXaWR0aDogTnVtYmVyLFxyXG4gICAgYWN0aXZlOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDBcclxuICAgIH0sXHJcbiAgICB0eXBlOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdsaW5lJ1xyXG4gICAgfSxcclxuICAgIGJvcmRlcjoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGR1cmF0aW9uOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDAuMlxyXG4gICAgfSxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiA5OVxyXG4gICAgfSxcclxuICAgIHN3aXBlVGhyZXNob2xkOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDRcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIHRhYnM6IFtdLFxyXG4gICAgbGluZVN0eWxlOiAnJyxcclxuICAgIHNjcm9sbExlZnQ6IDAsXHJcbiAgICBzY3JvbGxhYmxlOiBmYWxzZVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHN3aXBlVGhyZXNob2xkOiBmdW5jdGlvbiBzd2lwZVRocmVzaG9sZCgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzY3JvbGxhYmxlOiB0aGlzLmRhdGEudGFicy5sZW5ndGggPiB0aGlzLmRhdGEuc3dpcGVUaHJlc2hvbGRcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY29sb3I6ICdzZXRMaW5lJyxcclxuICAgIGxpbmVXaWR0aDogJ3NldExpbmUnLFxyXG4gICAgYWN0aXZlOiAnc2V0QWN0aXZlVGFiJ1xyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcclxuICAgIHRoaXMuc2V0TGluZSgpO1xyXG4gICAgdGhpcy5zY3JvbGxJbnRvVmlldygpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdXBkYXRlVGFiczogZnVuY3Rpb24gdXBkYXRlVGFicygpIHtcclxuICAgICAgdmFyIHRhYnMgPSB0aGlzLmRhdGEudGFicztcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB0YWJzOiB0YWJzLFxyXG4gICAgICAgIHNjcm9sbGFibGU6IHRhYnMubGVuZ3RoID4gdGhpcy5kYXRhLnN3aXBlVGhyZXNob2xkXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZVRhYigpO1xyXG4gICAgfSxcclxuICAgIHRyaWdnZXI6IGZ1bmN0aW9uIHRyaWdnZXIoZXZlbnROYW1lLCBpbmRleCkge1xyXG4gICAgICB0aGlzLiRlbWl0KGV2ZW50TmFtZSwge1xyXG4gICAgICAgIGluZGV4OiBpbmRleCxcclxuICAgICAgICB0aXRsZTogdGhpcy5kYXRhLnRhYnNbaW5kZXhdLmRhdGEudGl0bGVcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25UYXA6IGZ1bmN0aW9uIG9uVGFwKGV2ZW50KSB7XHJcbiAgICAgIHZhciBpbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEudGFic1tpbmRleF0uZGF0YS5kaXNhYmxlZCkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcignZGlzYWJsZWQnLCBpbmRleCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50cmlnZ2VyKCdjbGljaycsIGluZGV4KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZShpbmRleCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgaWYgKGFjdGl2ZSAhPT0gdGhpcy5kYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgIHRoaXMudHJpZ2dlcignY2hhbmdlJywgYWN0aXZlKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgYWN0aXZlOiBhY3RpdmVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLnNldEFjdGl2ZVRhYigpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2V0TGluZTogZnVuY3Rpb24gc2V0TGluZSgpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEudHlwZSAhPT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tdGFiJywgdHJ1ZSkudGhlbihmdW5jdGlvbiAocmVjdHMpIHtcclxuICAgICAgICB2YXIgcmVjdCA9IHJlY3RzW190aGlzLmRhdGEuYWN0aXZlXTtcclxuICAgICAgICB2YXIgd2lkdGggPSBfdGhpcy5kYXRhLmxpbmVXaWR0aCB8fCByZWN0LndpZHRoIC8gMjtcclxuICAgICAgICB2YXIgbGVmdCA9IHJlY3RzLnNsaWNlKDAsIF90aGlzLmRhdGEuYWN0aXZlKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcclxuICAgICAgICAgIHJldHVybiBwcmV2ICsgY3Vyci53aWR0aDtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBsZWZ0ICs9IChyZWN0LndpZHRoIC0gd2lkdGgpIC8gMjtcclxuXHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBsaW5lU3R5bGU6IFwiXFxuICAgICAgICAgICAgd2lkdGg6IFwiICsgd2lkdGggKyBcInB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IFwiICsgX3RoaXMuZGF0YS5jb2xvciArIFwiO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChcIiArIGxlZnQgKyBcInB4KTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiBcIiArIF90aGlzLmRhdGEuZHVyYXRpb24gKyBcInM7XFxuICAgICAgICAgIFwiXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHNldEFjdGl2ZVRhYjogZnVuY3Rpb24gc2V0QWN0aXZlVGFiKCkge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZGF0YS50YWJzLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgdmFyIGRhdGEgPSB7XHJcbiAgICAgICAgICBhY3RpdmU6IGluZGV4ID09PSBfdGhpczIuZGF0YS5hY3RpdmVcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAoZGF0YS5hY3RpdmUpIHtcclxuICAgICAgICAgIGRhdGEuaW5pdGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChkYXRhLmFjdGl2ZSAhPT0gaXRlbS5pbnN0YW5jZS5kYXRhLmFjdGl2ZSkge1xyXG4gICAgICAgICAgaXRlbS5pbnN0YW5jZS5zZXREYXRhKGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuc2V0TGluZSgpO1xyXG4gICAgICB0aGlzLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICB9LFxyXG4gICAgLy8gc2Nyb2xsIGFjdGl2ZSB0YWIgaW50byB2aWV3XHJcbiAgICBzY3JvbGxJbnRvVmlldzogZnVuY3Rpb24gc2Nyb2xsSW50b1ZpZXcoKSB7XHJcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKCF0aGlzLmRhdGEuc2Nyb2xsYWJsZSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5nZXRSZWN0KCcudmFuLXRhYicsIHRydWUpLnRoZW4oZnVuY3Rpb24gKHRhYlJlY3RzKSB7XHJcbiAgICAgICAgdmFyIHRhYlJlY3QgPSB0YWJSZWN0c1tfdGhpczMuZGF0YS5hY3RpdmVdO1xyXG4gICAgICAgIHZhciBvZmZzZXRMZWZ0ID0gdGFiUmVjdHMuc2xpY2UoMCwgX3RoaXMzLmRhdGEuYWN0aXZlKS5yZWR1Y2UoZnVuY3Rpb24gKHByZXYsIGN1cnIpIHtcclxuICAgICAgICAgIHJldHVybiBwcmV2ICsgY3Vyci53aWR0aDtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICB2YXIgdGFiV2lkdGggPSB0YWJSZWN0LndpZHRoO1xyXG5cclxuICAgICAgICBfdGhpczMuZ2V0UmVjdCgnLnZhbi10YWJzX19uYXYnKS50aGVuKGZ1bmN0aW9uIChuYXZSZWN0KSB7XHJcbiAgICAgICAgICB2YXIgbmF2V2lkdGggPSBuYXZSZWN0LndpZHRoO1xyXG5cclxuICAgICAgICAgIF90aGlzMy5zZXREYXRhKHtcclxuICAgICAgICAgICAgc2Nyb2xsTGVmdDogb2Zmc2V0TGVmdCAtIChuYXZXaWR0aCAtIHRhYldpZHRoKSAvIDJcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==