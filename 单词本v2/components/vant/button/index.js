var _component = require("./../common/component.js");

var _button = require("./../mixins/button.js");

var _openType = require("./../mixins/open-type.js");

(0, _component.VantComponent)({
    classes: [ "loading-class" ],
    mixins: [ _button.button, _openType.openType ],
    props: {
        plain: Boolean,
        block: Boolean,
        round: Boolean,
        square: Boolean,
        loading: Boolean,
        disabled: Boolean,
        type: {
            type: String,
            value: "default"
        },
        size: {
            type: String,
            value: "normal"
        }
    },
    computed: {
        classes: function classes() {
            var _this$data = this.data, type = _this$data.type, size = _this$data.size, block = _this$data.block, plain = _this$data.plain, round = _this$data.round, square = _this$data.square, loading = _this$data.loading, disabled = _this$data.disabled;
            return this.classNames("van-button--" + type, "van-button--" + size, {
                "van-button--block": block,
                "van-button--round": round,
                "van-button--plain": plain,
                "van-button--square": square,
                "van-button--loading": loading,
                "van-button--disabled": disabled,
                "van-button--unclickable": disabled || loading
            });
        }
    },
    methods: {
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                this.$emit("click");
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJtaXhpbnMiLCJidXR0b24iLCJvcGVuVHlwZSIsInByb3BzIiwicGxhaW4iLCJCb29sZWFuIiwiYmxvY2siLCJyb3VuZCIsInNxdWFyZSIsImxvYWRpbmciLCJkaXNhYmxlZCIsInR5cGUiLCJTdHJpbmciLCJ2YWx1ZSIsInNpemUiLCJjb21wdXRlZCIsIl90aGlzJGRhdGEiLCJkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsV0FBUyxDQUFDLGVBQUQsQ0FERztBQUVaQyxVQUFRLENBQUNDLGNBQUQsRUFBU0Msa0JBQVQsQ0FGSTtBQUdaQyxTQUFPO0FBQ0xDLFdBQU9DLE9BREY7QUFFTEMsV0FBT0QsT0FGRjtBQUdMRSxXQUFPRixPQUhGO0FBSUxHLFlBQVFILE9BSkg7QUFLTEksYUFBU0osT0FMSjtBQU1MSyxjQUFVTCxPQU5MO0FBT0xNLFVBQU07QUFDSkEsWUFBTUMsTUFERjtBQUVKQyxhQUFPO0FBRkgsS0FQRDtBQVdMQyxVQUFNO0FBQ0pILFlBQU1DLE1BREY7QUFFSkMsYUFBTztBQUZIO0FBWEQsR0FISztBQW1CWkUsWUFBVTtBQUNSaEIsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUlpQixhQUFhLEtBQUtDLElBQXRCO0FBQUEsVUFDSU4sT0FBT0ssV0FBV0wsSUFEdEI7QUFBQSxVQUVJRyxPQUFPRSxXQUFXRixJQUZ0QjtBQUFBLFVBR0lSLFFBQVFVLFdBQVdWLEtBSHZCO0FBQUEsVUFJSUYsUUFBUVksV0FBV1osS0FKdkI7QUFBQSxVQUtJRyxRQUFRUyxXQUFXVCxLQUx2QjtBQUFBLFVBTUlDLFNBQVNRLFdBQVdSLE1BTnhCO0FBQUEsVUFPSUMsVUFBVU8sV0FBV1AsT0FQekI7QUFBQSxVQVFJQyxXQUFXTSxXQUFXTixRQVIxQjtBQVNBLGFBQU8sS0FBS1EsVUFBTCxDQUFnQixpQkFBaUJQLElBQWpDLEVBQXVDLGlCQUFpQkcsSUFBeEQsRUFBOEQ7QUFDbkUsNkJBQXFCUixLQUQ4QztBQUVuRSw2QkFBcUJDLEtBRjhDO0FBR25FLDZCQUFxQkgsS0FIOEM7QUFJbkUsOEJBQXNCSSxNQUo2QztBQUtuRSwrQkFBdUJDLE9BTDRDO0FBTW5FLGdDQUF3QkMsUUFOMkM7QUFPbkUsbUNBQTJCQSxZQUFZRDtBQVA0QixPQUE5RCxDQUFQO0FBU0Q7QUFwQk8sR0FuQkU7QUF5Q1pVLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUksQ0FBQyxLQUFLSCxJQUFMLENBQVVQLFFBQVgsSUFBdUIsQ0FBQyxLQUFLTyxJQUFMLENBQVVSLE9BQXRDLEVBQStDO0FBQzdDLGFBQUtZLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFDRjtBQUxNO0FBekNHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcbmltcG9ydCB7IGJ1dHRvbiB9IGZyb20gJy4uL21peGlucy9idXR0b24nO1xyXG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ2xvYWRpbmctY2xhc3MnXSxcclxuICBtaXhpbnM6IFtidXR0b24sIG9wZW5UeXBlXSxcclxuICBwcm9wczoge1xyXG4gICAgcGxhaW46IEJvb2xlYW4sXHJcbiAgICBibG9jazogQm9vbGVhbixcclxuICAgIHJvdW5kOiBCb29sZWFuLFxyXG4gICAgc3F1YXJlOiBCb29sZWFuLFxyXG4gICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnZGVmYXVsdCdcclxuICAgIH0sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdub3JtYWwnXHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY2xhc3NlczogZnVuY3Rpb24gY2xhc3NlcygpIHtcclxuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICB0eXBlID0gX3RoaXMkZGF0YS50eXBlLFxyXG4gICAgICAgICAgc2l6ZSA9IF90aGlzJGRhdGEuc2l6ZSxcclxuICAgICAgICAgIGJsb2NrID0gX3RoaXMkZGF0YS5ibG9jayxcclxuICAgICAgICAgIHBsYWluID0gX3RoaXMkZGF0YS5wbGFpbixcclxuICAgICAgICAgIHJvdW5kID0gX3RoaXMkZGF0YS5yb3VuZCxcclxuICAgICAgICAgIHNxdWFyZSA9IF90aGlzJGRhdGEuc3F1YXJlLFxyXG4gICAgICAgICAgbG9hZGluZyA9IF90aGlzJGRhdGEubG9hZGluZyxcclxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZDtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xhc3NOYW1lcyhcInZhbi1idXR0b24tLVwiICsgdHlwZSwgXCJ2YW4tYnV0dG9uLS1cIiArIHNpemUsIHtcclxuICAgICAgICAndmFuLWJ1dHRvbi0tYmxvY2snOiBibG9jayxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tcm91bmQnOiByb3VuZCxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tcGxhaW4nOiBwbGFpbixcclxuICAgICAgICAndmFuLWJ1dHRvbi0tc3F1YXJlJzogc3F1YXJlLFxyXG4gICAgICAgICd2YW4tYnV0dG9uLS1sb2FkaW5nJzogbG9hZGluZyxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tZGlzYWJsZWQnOiBkaXNhYmxlZCxcclxuICAgICAgICAndmFuLWJ1dHRvbi0tdW5jbGlja2FibGUnOiBkaXNhYmxlZCB8fCBsb2FkaW5nXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xpY2snKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7Il19