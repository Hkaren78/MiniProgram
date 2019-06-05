var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    props: {
        icon: String,
        steps: Array,
        active: Number,
        direction: {
            type: String,
            value: "horizontal"
        },
        activeColor: {
            type: String,
            value: "#06bf04"
        }
    },
    watch: {
        steps: "formatSteps",
        active: "formatSteps"
    },
    created: function created() {
        this.formatSteps();
    },
    methods: {
        formatSteps: function formatSteps() {
            var _this = this;
            var steps = this.data.steps;
            steps.forEach(function(step, index) {
                step.status = _this.getStatus(index);
            });
            this.setData({
                steps: steps
            });
        },
        getStatus: function getStatus(index) {
            var active = this.data.active;
            if (index < active) {
                return "finish";
            } else if (index === active) {
                return "process";
            }
            return "";
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaWNvbiIsIlN0cmluZyIsInN0ZXBzIiwiQXJyYXkiLCJhY3RpdmUiLCJOdW1iZXIiLCJkaXJlY3Rpb24iLCJ0eXBlIiwidmFsdWUiLCJhY3RpdmVDb2xvciIsIndhdGNoIiwiY3JlYXRlZCIsImZvcm1hdFN0ZXBzIiwibWV0aG9kcyIsIl90aGlzIiwiZGF0YSIsImZvckVhY2giLCJzdGVwIiwiaW5kZXgiLCJzdGF0dXMiLCJnZXRTdGF0dXMiLCJzZXREYXRhIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU87QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxXQUFPQyxLQUZGO0FBR0xDLFlBQVFDLE1BSEg7QUFJTEMsZUFBVztBQUNUQyxZQUFNTixNQURHO0FBRVRPLGFBQU87QUFGRSxLQUpOO0FBUUxDLGlCQUFhO0FBQ1hGLFlBQU1OLE1BREs7QUFFWE8sYUFBTztBQUZJO0FBUlIsR0FESztBQWNaRSxTQUFPO0FBQ0xSLFdBQU8sYUFERjtBQUVMRSxZQUFRO0FBRkgsR0FkSztBQWtCWk8sV0FBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFNBQUtDLFdBQUw7QUFDRCxHQXBCVztBQXFCWkMsV0FBUztBQUNQRCxpQkFBYSxTQUFTQSxXQUFULEdBQXVCO0FBQ2xDLFVBQUlFLFFBQVEsSUFBWjs7QUFFQSxVQUFJWixRQUFRLEtBQUthLElBQUwsQ0FBVWIsS0FBdEI7QUFDQUEsWUFBTWMsT0FBTixDQUFjLFVBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ25DRCxhQUFLRSxNQUFMLEdBQWNMLE1BQU1NLFNBQU4sQ0FBZ0JGLEtBQWhCLENBQWQ7QUFDRCxPQUZEO0FBR0EsV0FBS0csT0FBTCxDQUFhO0FBQ1huQixlQUFPQTtBQURJLE9BQWI7QUFHRCxLQVhNO0FBWVBrQixlQUFXLFNBQVNBLFNBQVQsQ0FBbUJGLEtBQW5CLEVBQTBCO0FBQ25DLFVBQUlkLFNBQVMsS0FBS1csSUFBTCxDQUFVWCxNQUF2Qjs7QUFFQSxVQUFJYyxRQUFRZCxNQUFaLEVBQW9CO0FBQ2xCLGVBQU8sUUFBUDtBQUNELE9BRkQsTUFFTyxJQUFJYyxVQUFVZCxNQUFkLEVBQXNCO0FBQzNCLGVBQU8sU0FBUDtBQUNEOztBQUVELGFBQU8sRUFBUDtBQUNEO0FBdEJNO0FBckJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICBpY29uOiBTdHJpbmcsXHJcbiAgICBzdGVwczogQXJyYXksXHJcbiAgICBhY3RpdmU6IE51bWJlcixcclxuICAgIGRpcmVjdGlvbjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnaG9yaXpvbnRhbCdcclxuICAgIH0sXHJcbiAgICBhY3RpdmVDb2xvcjoge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnIzA2YmYwNCdcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzdGVwczogJ2Zvcm1hdFN0ZXBzJyxcclxuICAgIGFjdGl2ZTogJ2Zvcm1hdFN0ZXBzJ1xyXG4gIH0sXHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuZm9ybWF0U3RlcHMoKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGZvcm1hdFN0ZXBzOiBmdW5jdGlvbiBmb3JtYXRTdGVwcygpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHZhciBzdGVwcyA9IHRoaXMuZGF0YS5zdGVwcztcclxuICAgICAgc3RlcHMuZm9yRWFjaChmdW5jdGlvbiAoc3RlcCwgaW5kZXgpIHtcclxuICAgICAgICBzdGVwLnN0YXR1cyA9IF90aGlzLmdldFN0YXR1cyhpbmRleCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHN0ZXBzOiBzdGVwc1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRTdGF0dXM6IGZ1bmN0aW9uIGdldFN0YXR1cyhpbmRleCkge1xyXG4gICAgICB2YXIgYWN0aXZlID0gdGhpcy5kYXRhLmFjdGl2ZTtcclxuXHJcbiAgICAgIGlmIChpbmRleCA8IGFjdGl2ZSkge1xyXG4gICAgICAgIHJldHVybiAnZmluaXNoJztcclxuICAgICAgfSBlbHNlIGlmIChpbmRleCA9PT0gYWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuICdwcm9jZXNzJztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19