var _component = require("./../common/component.js");

var _touch = require("./../mixins/touch.js");

(0, _component.VantComponent)({
    mixins: [ _touch.touch ],
    props: {
        disabled: Boolean,
        max: {
            type: Number,
            value: 100
        },
        min: {
            type: Number,
            value: 0
        },
        step: {
            type: Number,
            value: 1
        },
        value: {
            type: Number,
            value: 0
        },
        barHeight: {
            type: String,
            value: "2px"
        }
    },
    created: function created() {
        this.updateValue(this.data.value);
    },
    methods: {
        onTouchStart: function onTouchStart(event) {
            if (this.data.disabled) return;
            this.touchStart(event);
            this.startValue = this.format(this.data.value);
        },
        onTouchMove: function onTouchMove(event) {
            var _this = this;
            if (this.data.disabled) return;
            this.touchMove(event);
            this.getRect(".van-slider").then(function(rect) {
                var diff = _this.deltaX / rect.width * 100;
                _this.updateValue(_this.startValue + diff);
            });
        },
        onTouchEnd: function onTouchEnd() {
            if (this.data.disabled) return;
            this.updateValue(this.data.value, true);
        },
        onClick: function onClick(event) {
            var _this2 = this;
            if (this.data.disabled) return;
            this.getRect(function(rect) {
                var value = (event.detail.x - rect.left) / rect.width * 100;
                _this2.updateValue(value, true);
            });
        },
        updateValue: function updateValue(value, end) {
            value = this.format(value);
            this.setData({
                value: value,
                barStyle: "width: " + value + "%; height: " + this.data.barHeight + ";"
            });
            if (end) {
                this.$emit("change", value);
            }
        },
        format: function format(value) {
            var _this$data = this.data, max = _this$data.max, min = _this$data.min, step = _this$data.step;
            return Math.round(Math.max(min, Math.min(value, max)) / step) * step;
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInRvdWNoIiwicHJvcHMiLCJkaXNhYmxlZCIsIkJvb2xlYW4iLCJtYXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtaW4iLCJzdGVwIiwiYmFySGVpZ2h0IiwiU3RyaW5nIiwiY3JlYXRlZCIsInVwZGF0ZVZhbHVlIiwiZGF0YSIsIm1ldGhvZHMiLCJvblRvdWNoU3RhcnQiLCJldmVudCIsInRvdWNoU3RhcnQiLCJzdGFydFZhbHVlIiwiZm9ybWF0Iiwib25Ub3VjaE1vdmUiLCJfdGhpcyIsInRvdWNoTW92ZSIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsImRpZmYiLCJkZWx0YVgiLCJ3aWR0aCIsIm9uVG91Y2hFbmQiLCJvbkNsaWNrIiwiX3RoaXMyIiwiZGV0YWlsIiwieCIsImxlZnQiLCJlbmQiLCJzZXREYXRhIiwiYmFyU3R5bGUiLCIkZW1pdCIsIl90aGlzJGRhdGEiLCJNYXRoIiwicm91bmQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDQyxZQUFELENBREk7QUFFWkMsU0FBTztBQUNMQyxjQUFVQyxPQURMO0FBRUxDLFNBQUs7QUFDSEMsWUFBTUMsTUFESDtBQUVIQyxhQUFPO0FBRkosS0FGQTtBQU1MQyxTQUFLO0FBQ0hILFlBQU1DLE1BREg7QUFFSEMsYUFBTztBQUZKLEtBTkE7QUFVTEUsVUFBTTtBQUNKSixZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSCxLQVZEO0FBY0xBLFdBQU87QUFDTEYsWUFBTUMsTUFERDtBQUVMQyxhQUFPO0FBRkYsS0FkRjtBQWtCTEcsZUFBVztBQUNUTCxZQUFNTSxNQURHO0FBRVRKLGFBQU87QUFGRTtBQWxCTixHQUZLO0FBeUJaSyxXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0MsV0FBTCxDQUFpQixLQUFLQyxJQUFMLENBQVVQLEtBQTNCO0FBQ0QsR0EzQlc7QUE0QlpRLFdBQVM7QUFDUEMsa0JBQWMsU0FBU0EsWUFBVCxDQUFzQkMsS0FBdEIsRUFBNkI7QUFDekMsVUFBSSxLQUFLSCxJQUFMLENBQVVaLFFBQWQsRUFBd0I7QUFDeEIsV0FBS2dCLFVBQUwsQ0FBZ0JELEtBQWhCO0FBQ0EsV0FBS0UsVUFBTCxHQUFrQixLQUFLQyxNQUFMLENBQVksS0FBS04sSUFBTCxDQUFVUCxLQUF0QixDQUFsQjtBQUNELEtBTE07QUFNUGMsaUJBQWEsU0FBU0EsV0FBVCxDQUFxQkosS0FBckIsRUFBNEI7QUFDdkMsVUFBSUssUUFBUSxJQUFaOztBQUVBLFVBQUksS0FBS1IsSUFBTCxDQUFVWixRQUFkLEVBQXdCO0FBQ3hCLFdBQUtxQixTQUFMLENBQWVOLEtBQWY7QUFDQSxXQUFLTyxPQUFMLENBQWEsYUFBYixFQUE0QkMsSUFBNUIsQ0FBaUMsVUFBVUMsSUFBVixFQUFnQjtBQUMvQyxZQUFJQyxPQUFPTCxNQUFNTSxNQUFOLEdBQWVGLEtBQUtHLEtBQXBCLEdBQTRCLEdBQXZDOztBQUVBUCxjQUFNVCxXQUFOLENBQWtCUyxNQUFNSCxVQUFOLEdBQW1CUSxJQUFyQztBQUNELE9BSkQ7QUFLRCxLQWhCTTtBQWlCUEcsZ0JBQVksU0FBU0EsVUFBVCxHQUFzQjtBQUNoQyxVQUFJLEtBQUtoQixJQUFMLENBQVVaLFFBQWQsRUFBd0I7QUFDeEIsV0FBS1csV0FBTCxDQUFpQixLQUFLQyxJQUFMLENBQVVQLEtBQTNCLEVBQWtDLElBQWxDO0FBQ0QsS0FwQk07QUFxQlB3QixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJkLEtBQWpCLEVBQXdCO0FBQy9CLFVBQUllLFNBQVMsSUFBYjs7QUFFQSxVQUFJLEtBQUtsQixJQUFMLENBQVVaLFFBQWQsRUFBd0I7QUFDeEIsV0FBS3NCLE9BQUwsQ0FBYSxVQUFVRSxJQUFWLEVBQWdCO0FBQzNCLFlBQUluQixRQUFRLENBQUNVLE1BQU1nQixNQUFOLENBQWFDLENBQWIsR0FBaUJSLEtBQUtTLElBQXZCLElBQStCVCxLQUFLRyxLQUFwQyxHQUE0QyxHQUF4RDs7QUFFQUcsZUFBT25CLFdBQVAsQ0FBbUJOLEtBQW5CLEVBQTBCLElBQTFCO0FBQ0QsT0FKRDtBQUtELEtBOUJNO0FBK0JQTSxpQkFBYSxTQUFTQSxXQUFULENBQXFCTixLQUFyQixFQUE0QjZCLEdBQTVCLEVBQWlDO0FBQzVDN0IsY0FBUSxLQUFLYSxNQUFMLENBQVliLEtBQVosQ0FBUjtBQUNBLFdBQUs4QixPQUFMLENBQWE7QUFDWDlCLGVBQU9BLEtBREk7QUFFWCtCLGtCQUFVLFlBQVkvQixLQUFaLEdBQW9CLGFBQXBCLEdBQW9DLEtBQUtPLElBQUwsQ0FBVUosU0FBOUMsR0FBMEQ7QUFGekQsT0FBYjs7QUFLQSxVQUFJMEIsR0FBSixFQUFTO0FBQ1AsYUFBS0csS0FBTCxDQUFXLFFBQVgsRUFBcUJoQyxLQUFyQjtBQUNEO0FBQ0YsS0F6Q007QUEwQ1BhLFlBQVEsU0FBU0EsTUFBVCxDQUFnQmIsS0FBaEIsRUFBdUI7QUFDN0IsVUFBSWlDLGFBQWEsS0FBSzFCLElBQXRCO0FBQUEsVUFDSVYsTUFBTW9DLFdBQVdwQyxHQURyQjtBQUFBLFVBRUlJLE1BQU1nQyxXQUFXaEMsR0FGckI7QUFBQSxVQUdJQyxPQUFPK0IsV0FBVy9CLElBSHRCO0FBSUEsYUFBT2dDLEtBQUtDLEtBQUwsQ0FBV0QsS0FBS3JDLEdBQUwsQ0FBU0ksR0FBVCxFQUFjaUMsS0FBS2pDLEdBQUwsQ0FBU0QsS0FBVCxFQUFnQkgsR0FBaEIsQ0FBZCxJQUFzQ0ssSUFBakQsSUFBeURBLElBQWhFO0FBQ0Q7QUFoRE07QUE1QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuaW1wb3J0IHsgdG91Y2ggfSBmcm9tICcuLi9taXhpbnMvdG91Y2gnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBtaXhpbnM6IFt0b3VjaF0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgbWF4OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDEwMFxyXG4gICAgfSxcclxuICAgIG1pbjoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgc3RlcDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9LFxyXG4gICAgdmFsdWU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIGJhckhlaWdodDoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnMnB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRhLnZhbHVlKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uVG91Y2hTdGFydDogZnVuY3Rpb24gb25Ub3VjaFN0YXJ0KGV2ZW50KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgdGhpcy50b3VjaFN0YXJ0KGV2ZW50KTtcclxuICAgICAgdGhpcy5zdGFydFZhbHVlID0gdGhpcy5mb3JtYXQodGhpcy5kYXRhLnZhbHVlKTtcclxuICAgIH0sXHJcbiAgICBvblRvdWNoTW92ZTogZnVuY3Rpb24gb25Ub3VjaE1vdmUoZXZlbnQpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZGlzYWJsZWQpIHJldHVybjtcclxuICAgICAgdGhpcy50b3VjaE1vdmUoZXZlbnQpO1xyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tc2xpZGVyJykudGhlbihmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIHZhciBkaWZmID0gX3RoaXMuZGVsdGFYIC8gcmVjdC53aWR0aCAqIDEwMDtcclxuXHJcbiAgICAgICAgX3RoaXMudXBkYXRlVmFsdWUoX3RoaXMuc3RhcnRWYWx1ZSArIGRpZmYpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblRvdWNoRW5kOiBmdW5jdGlvbiBvblRvdWNoRW5kKCkge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmRpc2FibGVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMudXBkYXRlVmFsdWUodGhpcy5kYXRhLnZhbHVlLCB0cnVlKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKGV2ZW50KSB7XHJcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xyXG5cclxuICAgICAgaWYgKHRoaXMuZGF0YS5kaXNhYmxlZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmdldFJlY3QoZnVuY3Rpb24gKHJlY3QpIHtcclxuICAgICAgICB2YXIgdmFsdWUgPSAoZXZlbnQuZGV0YWlsLnggLSByZWN0LmxlZnQpIC8gcmVjdC53aWR0aCAqIDEwMDtcclxuXHJcbiAgICAgICAgX3RoaXMyLnVwZGF0ZVZhbHVlKHZhbHVlLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdXBkYXRlVmFsdWU6IGZ1bmN0aW9uIHVwZGF0ZVZhbHVlKHZhbHVlLCBlbmQpIHtcclxuICAgICAgdmFsdWUgPSB0aGlzLmZvcm1hdCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgIGJhclN0eWxlOiBcIndpZHRoOiBcIiArIHZhbHVlICsgXCIlOyBoZWlnaHQ6IFwiICsgdGhpcy5kYXRhLmJhckhlaWdodCArIFwiO1wiXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYgKGVuZCkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHZhbHVlKSB7XHJcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxyXG4gICAgICAgICAgbWF4ID0gX3RoaXMkZGF0YS5tYXgsXHJcbiAgICAgICAgICBtaW4gPSBfdGhpcyRkYXRhLm1pbixcclxuICAgICAgICAgIHN0ZXAgPSBfdGhpcyRkYXRhLnN0ZXA7XHJcbiAgICAgIHJldHVybiBNYXRoLnJvdW5kKE1hdGgubWF4KG1pbiwgTWF0aC5taW4odmFsdWUsIG1heCkpIC8gc3RlcCkgKiBzdGVwO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19