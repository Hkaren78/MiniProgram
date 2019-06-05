var _component = require("./../common/component.js");

// Note that the bitwise operators and shift operators operate on 32-bit ints
// so in that case, the max safe integer is 2^31-1, or 2147483647
var MAX = 2147483647;

(0, _component.VantComponent)({
    field: true,
    classes: [ "input-class", "plus-class", "minus-class" ],
    props: {
        integer: Boolean,
        disabled: Boolean,
        disableInput: Boolean,
        min: {
            type: null,
            value: 1
        },
        max: {
            type: null,
            value: MAX
        },
        step: {
            type: null,
            value: 1
        }
    },
    computed: {
        minusDisabled: function minusDisabled() {
            return this.data.disabled || this.data.value <= this.data.min;
        },
        plusDisabled: function plusDisabled() {
            return this.data.disabled || this.data.value >= this.data.max;
        }
    },
    created: function created() {
        this.setData({
            value: this.range(this.data.value)
        });
    },
    methods: {
        // limit value range
        range: function range(value) {
            return Math.max(Math.min(this.data.max, value), this.data.min);
        },
        onInput: function onInput(event) {
            var _ref = event.detail || {}, _ref$value = _ref.value, value = _ref$value === void 0 ? "" : _ref$value;
            this.triggerInput(value);
        },
        onChange: function onChange(type) {
            if (this.data[type + "Disabled"]) {
                this.$emit("overlimit", type);
                return;
            }
            var diff = type === "minus" ? -this.data.step : +this.data.step;
            var value = Math.round((this.data.value + diff) * 100) / 100;
            this.triggerInput(this.range(value));
            this.$emit(type);
        },
        onBlur: function onBlur(event) {
            var value = this.range(this.data.value);
            this.triggerInput(value);
            this.$emit("blur", event);
        },
        onMinus: function onMinus() {
            this.onChange("minus");
        },
        onPlus: function onPlus() {
            this.onChange("plus");
        },
        triggerInput: function triggerInput(value) {
            this.setData({
                value: value
            });
            this.$emit("change", value);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIk1BWCIsImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiaW50ZWdlciIsIkJvb2xlYW4iLCJkaXNhYmxlZCIsImRpc2FibGVJbnB1dCIsIm1pbiIsInR5cGUiLCJ2YWx1ZSIsIm1heCIsInN0ZXAiLCJjb21wdXRlZCIsIm1pbnVzRGlzYWJsZWQiLCJkYXRhIiwicGx1c0Rpc2FibGVkIiwiY3JlYXRlZCIsInNldERhdGEiLCJyYW5nZSIsIm1ldGhvZHMiLCJNYXRoIiwib25JbnB1dCIsImV2ZW50IiwiX3JlZiIsImRldGFpbCIsIl9yZWYkdmFsdWUiLCJ0cmlnZ2VySW5wdXQiLCJvbkNoYW5nZSIsIiRlbWl0IiwiZGlmZiIsInJvdW5kIiwib25CbHVyIiwib25NaW51cyIsIm9uUGx1cyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFBcUQ7QUFDckQ7O0FBRUEsSUFBSUEsTUFBTSxVQUFWO0FBQ0EsOEJBQWM7QUFDWkMsU0FBTyxJQURLO0FBRVpDLFdBQVMsQ0FBQyxhQUFELEVBQWdCLFlBQWhCLEVBQThCLGFBQTlCLENBRkc7QUFHWkMsU0FBTztBQUNMQyxhQUFTQyxPQURKO0FBRUxDLGNBQVVELE9BRkw7QUFHTEUsa0JBQWNGLE9BSFQ7QUFJTEcsU0FBSztBQUNIQyxZQUFNLElBREg7QUFFSEMsYUFBTztBQUZKLEtBSkE7QUFRTEMsU0FBSztBQUNIRixZQUFNLElBREg7QUFFSEMsYUFBT1Y7QUFGSixLQVJBO0FBWUxZLFVBQU07QUFDSkgsWUFBTSxJQURGO0FBRUpDLGFBQU87QUFGSDtBQVpELEdBSEs7QUFvQlpHLFlBQVU7QUFDUkMsbUJBQWUsU0FBU0EsYUFBVCxHQUF5QjtBQUN0QyxhQUFPLEtBQUtDLElBQUwsQ0FBVVQsUUFBVixJQUFzQixLQUFLUyxJQUFMLENBQVVMLEtBQVYsSUFBbUIsS0FBS0ssSUFBTCxDQUFVUCxHQUExRDtBQUNELEtBSE87QUFJUlEsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxhQUFPLEtBQUtELElBQUwsQ0FBVVQsUUFBVixJQUFzQixLQUFLUyxJQUFMLENBQVVMLEtBQVYsSUFBbUIsS0FBS0ssSUFBTCxDQUFVSixHQUExRDtBQUNEO0FBTk8sR0FwQkU7QUE0QlpNLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLQyxPQUFMLENBQWE7QUFDWFIsYUFBTyxLQUFLUyxLQUFMLENBQVcsS0FBS0osSUFBTCxDQUFVTCxLQUFyQjtBQURJLEtBQWI7QUFHRCxHQWhDVztBQWlDWlUsV0FBUztBQUNQO0FBQ0FELFdBQU8sU0FBU0EsS0FBVCxDQUFlVCxLQUFmLEVBQXNCO0FBQzNCLGFBQU9XLEtBQUtWLEdBQUwsQ0FBU1UsS0FBS2IsR0FBTCxDQUFTLEtBQUtPLElBQUwsQ0FBVUosR0FBbkIsRUFBd0JELEtBQXhCLENBQVQsRUFBeUMsS0FBS0ssSUFBTCxDQUFVUCxHQUFuRCxDQUFQO0FBQ0QsS0FKTTtBQUtQYyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCO0FBQy9CLFVBQUlDLE9BQU9ELE1BQU1FLE1BQU4sSUFBZ0IsRUFBM0I7QUFBQSxVQUNJQyxhQUFhRixLQUFLZCxLQUR0QjtBQUFBLFVBRUlBLFFBQVFnQixlQUFlLEtBQUssQ0FBcEIsR0FBd0IsRUFBeEIsR0FBNkJBLFVBRnpDOztBQUlBLFdBQUtDLFlBQUwsQ0FBa0JqQixLQUFsQjtBQUNELEtBWE07QUFZUGtCLGNBQVUsU0FBU0EsUUFBVCxDQUFrQm5CLElBQWxCLEVBQXdCO0FBQ2hDLFVBQUksS0FBS00sSUFBTCxDQUFVTixPQUFPLFVBQWpCLENBQUosRUFBa0M7QUFDaEMsYUFBS29CLEtBQUwsQ0FBVyxXQUFYLEVBQXdCcEIsSUFBeEI7QUFDQTtBQUNEOztBQUVELFVBQUlxQixPQUFPckIsU0FBUyxPQUFULEdBQW1CLENBQUMsS0FBS00sSUFBTCxDQUFVSCxJQUE5QixHQUFxQyxDQUFDLEtBQUtHLElBQUwsQ0FBVUgsSUFBM0Q7QUFDQSxVQUFJRixRQUFRVyxLQUFLVSxLQUFMLENBQVcsQ0FBQyxLQUFLaEIsSUFBTCxDQUFVTCxLQUFWLEdBQWtCb0IsSUFBbkIsSUFBMkIsR0FBdEMsSUFBNkMsR0FBekQ7QUFDQSxXQUFLSCxZQUFMLENBQWtCLEtBQUtSLEtBQUwsQ0FBV1QsS0FBWCxDQUFsQjtBQUNBLFdBQUttQixLQUFMLENBQVdwQixJQUFYO0FBQ0QsS0F0Qk07QUF1QlB1QixZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JULEtBQWhCLEVBQXVCO0FBQzdCLFVBQUliLFFBQVEsS0FBS1MsS0FBTCxDQUFXLEtBQUtKLElBQUwsQ0FBVUwsS0FBckIsQ0FBWjtBQUNBLFdBQUtpQixZQUFMLENBQWtCakIsS0FBbEI7QUFDQSxXQUFLbUIsS0FBTCxDQUFXLE1BQVgsRUFBbUJOLEtBQW5CO0FBQ0QsS0EzQk07QUE0QlBVLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLTCxRQUFMLENBQWMsT0FBZDtBQUNELEtBOUJNO0FBK0JQTSxZQUFRLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsV0FBS04sUUFBTCxDQUFjLE1BQWQ7QUFDRCxLQWpDTTtBQWtDUEQsa0JBQWMsU0FBU0EsWUFBVCxDQUFzQmpCLEtBQXRCLEVBQTZCO0FBQ3pDLFdBQUtRLE9BQUwsQ0FBYTtBQUNYUixlQUFPQTtBQURJLE9BQWI7QUFHQSxXQUFLbUIsS0FBTCxDQUFXLFFBQVgsRUFBcUJuQixLQUFyQjtBQUNEO0FBdkNNO0FBakNHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7IC8vIE5vdGUgdGhhdCB0aGUgYml0d2lzZSBvcGVyYXRvcnMgYW5kIHNoaWZ0IG9wZXJhdG9ycyBvcGVyYXRlIG9uIDMyLWJpdCBpbnRzXHJcbi8vIHNvIGluIHRoYXQgY2FzZSwgdGhlIG1heCBzYWZlIGludGVnZXIgaXMgMl4zMS0xLCBvciAyMTQ3NDgzNjQ3XHJcblxyXG52YXIgTUFYID0gMjE0NzQ4MzY0NztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgZmllbGQ6IHRydWUsXHJcbiAgY2xhc3NlczogWydpbnB1dC1jbGFzcycsICdwbHVzLWNsYXNzJywgJ21pbnVzLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIGludGVnZXI6IEJvb2xlYW4sXHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIGRpc2FibGVJbnB1dDogQm9vbGVhbixcclxuICAgIG1pbjoge1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfSxcclxuICAgIG1heDoge1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogTUFYXHJcbiAgICB9LFxyXG4gICAgc3RlcDoge1xyXG4gICAgICB0eXBlOiBudWxsLFxyXG4gICAgICB2YWx1ZTogMVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIG1pbnVzRGlzYWJsZWQ6IGZ1bmN0aW9uIG1pbnVzRGlzYWJsZWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZGlzYWJsZWQgfHwgdGhpcy5kYXRhLnZhbHVlIDw9IHRoaXMuZGF0YS5taW47XHJcbiAgICB9LFxyXG4gICAgcGx1c0Rpc2FibGVkOiBmdW5jdGlvbiBwbHVzRGlzYWJsZWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmRhdGEuZGlzYWJsZWQgfHwgdGhpcy5kYXRhLnZhbHVlID49IHRoaXMuZGF0YS5tYXg7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdmFsdWU6IHRoaXMucmFuZ2UodGhpcy5kYXRhLnZhbHVlKVxyXG4gICAgfSk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyBsaW1pdCB2YWx1ZSByYW5nZVxyXG4gICAgcmFuZ2U6IGZ1bmN0aW9uIHJhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHJldHVybiBNYXRoLm1heChNYXRoLm1pbih0aGlzLmRhdGEubWF4LCB2YWx1ZSksIHRoaXMuZGF0YS5taW4pO1xyXG4gICAgfSxcclxuICAgIG9uSW5wdXQ6IGZ1bmN0aW9uIG9uSW5wdXQoZXZlbnQpIHtcclxuICAgICAgdmFyIF9yZWYgPSBldmVudC5kZXRhaWwgfHwge30sXHJcbiAgICAgICAgICBfcmVmJHZhbHVlID0gX3JlZi52YWx1ZSxcclxuICAgICAgICAgIHZhbHVlID0gX3JlZiR2YWx1ZSA9PT0gdm9pZCAwID8gJycgOiBfcmVmJHZhbHVlO1xyXG5cclxuICAgICAgdGhpcy50cmlnZ2VySW5wdXQodmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh0eXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGFbdHlwZSArIFwiRGlzYWJsZWRcIl0pIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdvdmVybGltaXQnLCB0eXBlKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBkaWZmID0gdHlwZSA9PT0gJ21pbnVzJyA/IC10aGlzLmRhdGEuc3RlcCA6ICt0aGlzLmRhdGEuc3RlcDtcclxuICAgICAgdmFyIHZhbHVlID0gTWF0aC5yb3VuZCgodGhpcy5kYXRhLnZhbHVlICsgZGlmZikgKiAxMDApIC8gMTAwO1xyXG4gICAgICB0aGlzLnRyaWdnZXJJbnB1dCh0aGlzLnJhbmdlKHZhbHVlKSk7XHJcbiAgICAgIHRoaXMuJGVtaXQodHlwZSk7XHJcbiAgICB9LFxyXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoZXZlbnQpIHtcclxuICAgICAgdmFyIHZhbHVlID0gdGhpcy5yYW5nZSh0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgICB0aGlzLnRyaWdnZXJJbnB1dCh2YWx1ZSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInLCBldmVudCk7XHJcbiAgICB9LFxyXG4gICAgb25NaW51czogZnVuY3Rpb24gb25NaW51cygpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSgnbWludXMnKTtcclxuICAgIH0sXHJcbiAgICBvblBsdXM6IGZ1bmN0aW9uIG9uUGx1cygpIHtcclxuICAgICAgdGhpcy5vbkNoYW5nZSgncGx1cycpO1xyXG4gICAgfSxcclxuICAgIHRyaWdnZXJJbnB1dDogZnVuY3Rpb24gdHJpZ2dlcklucHV0KHZhbHVlKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=