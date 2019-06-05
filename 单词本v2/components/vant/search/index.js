var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    field: true,
    classes: [ "cancel-class" ],
    props: {
        focus: Boolean,
        disabled: Boolean,
        readonly: Boolean,
        showAction: Boolean,
        useActionSlot: Boolean,
        placeholder: String,
        background: {
            type: String,
            value: "#f2f2f2"
        },
        maxlength: {
            type: Number,
            value: -1
        }
    },
    methods: {
        onChange: function onChange(event) {
            this.setData({
                value: event.detail
            });
            this.$emit("change", event.detail);
        },
        onCancel: function onCancel() {
            this.setData({
                value: ""
            });
            this.$emit("cancel");
            this.$emit("change", "");
        },
        onSearch: function onSearch() {
            this.$emit("search", this.data.value);
        },
        onFocus: function onFocus() {
            this.$emit("focus");
        },
        onBlur: function onBlur() {
            this.$emit("blur");
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiZm9jdXMiLCJCb29sZWFuIiwiZGlzYWJsZWQiLCJyZWFkb25seSIsInNob3dBY3Rpb24iLCJ1c2VBY3Rpb25TbG90IiwicGxhY2Vob2xkZXIiLCJTdHJpbmciLCJiYWNrZ3JvdW5kIiwidHlwZSIsInZhbHVlIiwibWF4bGVuZ3RoIiwiTnVtYmVyIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCJzZXREYXRhIiwiZGV0YWlsIiwiJGVtaXQiLCJvbkNhbmNlbCIsIm9uU2VhcmNoIiwiZGF0YSIsIm9uRm9jdXMiLCJvbkJsdXIiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTyxJQURLO0FBRVpDLFdBQVMsQ0FBQyxjQUFELENBRkc7QUFHWkMsU0FBTztBQUNMQyxXQUFPQyxPQURGO0FBRUxDLGNBQVVELE9BRkw7QUFHTEUsY0FBVUYsT0FITDtBQUlMRyxnQkFBWUgsT0FKUDtBQUtMSSxtQkFBZUosT0FMVjtBQU1MSyxpQkFBYUMsTUFOUjtBQU9MQyxnQkFBWTtBQUNWQyxZQUFNRixNQURJO0FBRVZHLGFBQU87QUFGRyxLQVBQO0FBV0xDLGVBQVc7QUFDVEYsWUFBTUcsTUFERztBQUVURixhQUFPLENBQUM7QUFGQztBQVhOLEdBSEs7QUFtQlpHLFdBQVM7QUFDUEMsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLQyxPQUFMLENBQWE7QUFDWE4sZUFBT0ssTUFBTUU7QUFERixPQUFiO0FBR0EsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJILE1BQU1FLE1BQTNCO0FBQ0QsS0FOTTtBQU9QRSxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0gsT0FBTCxDQUFhO0FBQ1hOLGVBQU87QUFESSxPQUFiO0FBR0EsV0FBS1EsS0FBTCxDQUFXLFFBQVg7QUFDQSxXQUFLQSxLQUFMLENBQVcsUUFBWCxFQUFxQixFQUFyQjtBQUNELEtBYk07QUFjUEUsY0FBVSxTQUFTQSxRQUFULEdBQW9CO0FBQzVCLFdBQUtGLEtBQUwsQ0FBVyxRQUFYLEVBQXFCLEtBQUtHLElBQUwsQ0FBVVgsS0FBL0I7QUFDRCxLQWhCTTtBQWlCUFksYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFdBQUtKLEtBQUwsQ0FBVyxPQUFYO0FBQ0QsS0FuQk07QUFvQlBLLFlBQVEsU0FBU0EsTUFBVCxHQUFrQjtBQUN4QixXQUFLTCxLQUFMLENBQVcsTUFBWDtBQUNEO0FBdEJNO0FBbkJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGZpZWxkOiB0cnVlLFxyXG4gIGNsYXNzZXM6IFsnY2FuY2VsLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIGZvY3VzOiBCb29sZWFuLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgIHNob3dBY3Rpb246IEJvb2xlYW4sXHJcbiAgICB1c2VBY3Rpb25TbG90OiBCb29sZWFuLFxyXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcclxuICAgIGJhY2tncm91bmQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJyNmMmYyZjInXHJcbiAgICB9LFxyXG4gICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IC0xXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UoZXZlbnQpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogZXZlbnQuZGV0YWlsXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfSxcclxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NhbmNlbCcpO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCAnJyk7XHJcbiAgICB9LFxyXG4gICAgb25TZWFyY2g6IGZ1bmN0aW9uIG9uU2VhcmNoKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdzZWFyY2gnLCB0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uRm9jdXM6IGZ1bmN0aW9uIG9uRm9jdXMoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2ZvY3VzJyk7XHJcbiAgICB9LFxyXG4gICAgb25CbHVyOiBmdW5jdGlvbiBvbkJsdXIoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==