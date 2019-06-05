var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    props: {
        text: String,
        color: {
            type: String,
            value: "#fff"
        },
        backgroundColor: {
            type: String,
            value: "#e64340"
        },
        duration: {
            type: Number,
            value: 3e3
        }
    },
    methods: {
        show: function show() {
            var _this = this;
            var duration = this.data.duration;
            clearTimeout(this.timer);
            this.setData({
                show: true
            });
            if (duration > 0 && duration !== Infinity) {
                this.timer = setTimeout(function() {
                    _this.hide();
                }, duration);
            }
        },
        hide: function hide() {
            clearTimeout(this.timer);
            this.setData({
                show: false
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwidGV4dCIsIlN0cmluZyIsImNvbG9yIiwidHlwZSIsInZhbHVlIiwiYmFja2dyb3VuZENvbG9yIiwiZHVyYXRpb24iLCJOdW1iZXIiLCJtZXRob2RzIiwic2hvdyIsIl90aGlzIiwiZGF0YSIsImNsZWFyVGltZW91dCIsInRpbWVyIiwic2V0RGF0YSIsIkluZmluaXR5Iiwic2V0VGltZW91dCIsImhpZGUiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxNQUREO0FBRUxDLFdBQU87QUFDTEMsWUFBTUYsTUFERDtBQUVMRyxhQUFPO0FBRkYsS0FGRjtBQU1MQyxxQkFBaUI7QUFDZkYsWUFBTUYsTUFEUztBQUVmRyxhQUFPO0FBRlEsS0FOWjtBQVVMRSxjQUFVO0FBQ1JILFlBQU1JLE1BREU7QUFFUkgsYUFBTztBQUZDO0FBVkwsR0FESztBQWdCWkksV0FBUztBQUNQQyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEIsVUFBSUMsUUFBUSxJQUFaOztBQUVBLFVBQUlKLFdBQVcsS0FBS0ssSUFBTCxDQUFVTCxRQUF6QjtBQUNBTSxtQkFBYSxLQUFLQyxLQUFsQjtBQUNBLFdBQUtDLE9BQUwsQ0FBYTtBQUNYTCxjQUFNO0FBREssT0FBYjs7QUFJQSxVQUFJSCxXQUFXLENBQVgsSUFBZ0JBLGFBQWFTLFFBQWpDLEVBQTJDO0FBQ3pDLGFBQUtGLEtBQUwsR0FBYUcsV0FBVyxZQUFZO0FBQ2xDTixnQkFBTU8sSUFBTjtBQUNELFNBRlksRUFFVlgsUUFGVSxDQUFiO0FBR0Q7QUFDRixLQWZNO0FBZ0JQVyxVQUFNLFNBQVNBLElBQVQsR0FBZ0I7QUFDcEJMLG1CQUFhLEtBQUtDLEtBQWxCO0FBQ0EsV0FBS0MsT0FBTCxDQUFhO0FBQ1hMLGNBQU07QUFESyxPQUFiO0FBR0Q7QUFyQk07QUFoQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHRleHQ6IFN0cmluZyxcclxuICAgIGNvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcjZmZmJ1xyXG4gICAgfSxcclxuICAgIGJhY2tncm91bmRDb2xvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnI2U2NDM0MCdcclxuICAgIH0sXHJcbiAgICBkdXJhdGlvbjoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAzMDAwXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KCkge1xyXG4gICAgICB2YXIgX3RoaXMgPSB0aGlzO1xyXG5cclxuICAgICAgdmFyIGR1cmF0aW9uID0gdGhpcy5kYXRhLmR1cmF0aW9uO1xyXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmIChkdXJhdGlvbiA+IDAgJiYgZHVyYXRpb24gIT09IEluZmluaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgX3RoaXMuaGlkZSgpO1xyXG4gICAgICAgIH0sIGR1cmF0aW9uKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGhpZGU6IGZ1bmN0aW9uIGhpZGUoKSB7XHJcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==