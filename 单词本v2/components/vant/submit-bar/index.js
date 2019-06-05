var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    classes: [ "bar-class", "price-class", "button-class" ],
    props: {
        tip: [ String, Boolean ],
        type: Number,
        price: null,
        label: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        currency: {
            type: String,
            value: "¥"
        },
        buttonType: {
            type: String,
            value: "danger"
        }
    },
    computed: {
        hasPrice: function hasPrice() {
            return typeof this.data.price === "number";
        },
        priceStr: function priceStr() {
            return (this.data.price / 100).toFixed(2);
        },
        tipStr: function tipStr() {
            var tip = this.data.tip;
            return typeof tip === "string" ? tip : "";
        }
    },
    methods: {
        onSubmit: function onSubmit(event) {
            this.$emit("submit", event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpcCIsIlN0cmluZyIsIkJvb2xlYW4iLCJ0eXBlIiwiTnVtYmVyIiwicHJpY2UiLCJsYWJlbCIsImxvYWRpbmciLCJkaXNhYmxlZCIsImJ1dHRvblRleHQiLCJjdXJyZW5jeSIsInZhbHVlIiwiYnV0dG9uVHlwZSIsImNvbXB1dGVkIiwiaGFzUHJpY2UiLCJkYXRhIiwicHJpY2VTdHIiLCJ0b0ZpeGVkIiwidGlwU3RyIiwibWV0aG9kcyIsIm9uU3VibWl0IiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxXQUFTLENBQUMsV0FBRCxFQUFjLGFBQWQsRUFBNkIsY0FBN0IsQ0FERztBQUVaQyxTQUFPO0FBQ0xDLFNBQUssQ0FBQ0MsTUFBRCxFQUFTQyxPQUFULENBREE7QUFFTEMsVUFBTUMsTUFGRDtBQUdMQyxXQUFPLElBSEY7QUFJTEMsV0FBT0wsTUFKRjtBQUtMTSxhQUFTTCxPQUxKO0FBTUxNLGNBQVVOLE9BTkw7QUFPTE8sZ0JBQVlSLE1BUFA7QUFRTFMsY0FBVTtBQUNSUCxZQUFNRixNQURFO0FBRVJVLGFBQU87QUFGQyxLQVJMO0FBWUxDLGdCQUFZO0FBQ1ZULFlBQU1GLE1BREk7QUFFVlUsYUFBTztBQUZHO0FBWlAsR0FGSztBQW1CWkUsWUFBVTtBQUNSQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsYUFBTyxPQUFPLEtBQUtDLElBQUwsQ0FBVVYsS0FBakIsS0FBMkIsUUFBbEM7QUFDRCxLQUhPO0FBSVJXLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixhQUFPLENBQUMsS0FBS0QsSUFBTCxDQUFVVixLQUFWLEdBQWtCLEdBQW5CLEVBQXdCWSxPQUF4QixDQUFnQyxDQUFoQyxDQUFQO0FBQ0QsS0FOTztBQU9SQyxZQUFRLFNBQVNBLE1BQVQsR0FBa0I7QUFDeEIsVUFBSWxCLE1BQU0sS0FBS2UsSUFBTCxDQUFVZixHQUFwQjtBQUNBLGFBQU8sT0FBT0EsR0FBUCxLQUFlLFFBQWYsR0FBMEJBLEdBQTFCLEdBQWdDLEVBQXZDO0FBQ0Q7QUFWTyxHQW5CRTtBQStCWm1CLFdBQVM7QUFDUEMsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLQyxLQUFMLENBQVcsUUFBWCxFQUFxQkQsTUFBTUUsTUFBM0I7QUFDRDtBQUhNO0FBL0JHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGNsYXNzZXM6IFsnYmFyLWNsYXNzJywgJ3ByaWNlLWNsYXNzJywgJ2J1dHRvbi1jbGFzcyddLFxyXG4gIHByb3BzOiB7XHJcbiAgICB0aXA6IFtTdHJpbmcsIEJvb2xlYW5dLFxyXG4gICAgdHlwZTogTnVtYmVyLFxyXG4gICAgcHJpY2U6IG51bGwsXHJcbiAgICBsYWJlbDogU3RyaW5nLFxyXG4gICAgbG9hZGluZzogQm9vbGVhbixcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgYnV0dG9uVGV4dDogU3RyaW5nLFxyXG4gICAgY3VycmVuY3k6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ8KlJ1xyXG4gICAgfSxcclxuICAgIGJ1dHRvblR5cGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ2RhbmdlcidcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBoYXNQcmljZTogZnVuY3Rpb24gaGFzUHJpY2UoKSB7XHJcbiAgICAgIHJldHVybiB0eXBlb2YgdGhpcy5kYXRhLnByaWNlID09PSAnbnVtYmVyJztcclxuICAgIH0sXHJcbiAgICBwcmljZVN0cjogZnVuY3Rpb24gcHJpY2VTdHIoKSB7XHJcbiAgICAgIHJldHVybiAodGhpcy5kYXRhLnByaWNlIC8gMTAwKS50b0ZpeGVkKDIpO1xyXG4gICAgfSxcclxuICAgIHRpcFN0cjogZnVuY3Rpb24gdGlwU3RyKCkge1xyXG4gICAgICB2YXIgdGlwID0gdGhpcy5kYXRhLnRpcDtcclxuICAgICAgcmV0dXJuIHR5cGVvZiB0aXAgPT09ICdzdHJpbmcnID8gdGlwIDogJyc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblN1Ym1pdDogZnVuY3Rpb24gb25TdWJtaXQoZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnc3VibWl0JywgZXZlbnQuZGV0YWlsKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==