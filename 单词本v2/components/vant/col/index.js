var _component = require("./../common/component.js");

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

(0, _component.VantComponent)({
    relation: {
        name: "row",
        type: "ancestor"
    },
    props: {
        span: Number,
        offset: Number
    },
    data: {
        style: ""
    },
    computed: {
        classes: function classes() {
            var _classNames;
            var _this$data = this.data, span = _this$data.span, offset = _this$data.offset;
            return this.classNames("custom-class", "van-col", (_classNames = {}, _defineProperty(_classNames, "van-col--" + span, span), 
            _defineProperty(_classNames, "van-col--offset-" + offset, offset), _classNames));
        }
    },
    methods: {
        setGutter: function setGutter(gutter) {
            var padding = gutter / 2 + "px";
            var style = gutter ? "padding-left: " + padding + "; padding-right: " + padding + ";" : "";
            if (style !== this.data.style) {
                this.setData({
                    style: style
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInNwYW4iLCJOdW1iZXIiLCJvZmZzZXQiLCJkYXRhIiwic3R5bGUiLCJjb21wdXRlZCIsImNsYXNzZXMiLCJfdGhpcyRkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJzZXRHdXR0ZXIiLCJndXR0ZXIiLCJwYWRkaW5nIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxLQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsVUFBTUMsTUFERDtBQUVMQyxZQUFRRDtBQUZILEdBTEs7QUFTWkUsUUFBTTtBQUNKQyxXQUFPO0FBREgsR0FUTTtBQVlaQyxZQUFVO0FBQ1JDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUMxQixVQUFJQyxhQUFhLEtBQUtKLElBQXRCO0FBQUEsVUFDSUgsT0FBT08sV0FBV1AsSUFEdEI7QUFBQSxVQUVJRSxTQUFTSyxXQUFXTCxNQUZ4QjtBQUdBLGFBQU8sS0FBS00sVUFBTCxDQUFnQixjQUFoQixFQUFnQyxTQUFoQyxrREFDSixjQUFjUixJQURWLEVBQ2lCQSxJQURqQixnQ0FFSixxQkFBcUJFLE1BRmpCLEVBRTBCQSxNQUYxQixnQkFBUDtBQUlEO0FBVE8sR0FaRTtBQXVCWk8sV0FBUztBQUNQQyxlQUFXLFNBQVNBLFNBQVQsQ0FBbUJDLE1BQW5CLEVBQTJCO0FBQ3BDLFVBQUlDLFVBQVVELFNBQVMsQ0FBVCxHQUFhLElBQTNCO0FBQ0EsVUFBSVAsUUFBUU8sU0FBUyxtQkFBbUJDLE9BQW5CLEdBQTZCLG1CQUE3QixHQUFtREEsT0FBbkQsR0FBNkQsR0FBdEUsR0FBNEUsRUFBeEY7O0FBRUEsVUFBSVIsVUFBVSxLQUFLRCxJQUFMLENBQVVDLEtBQXhCLEVBQStCO0FBQzdCLGFBQUtTLE9BQUwsQ0FBYTtBQUNYVCxpQkFBT0E7QUFESSxTQUFiO0FBR0Q7QUFDRjtBQVZNO0FBdkJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAncm93JyxcclxuICAgIHR5cGU6ICdhbmNlc3RvcidcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBzcGFuOiBOdW1iZXIsXHJcbiAgICBvZmZzZXQ6IE51bWJlclxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgc3R5bGU6ICcnXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgY2xhc3NlczogZnVuY3Rpb24gY2xhc3NlcygpIHtcclxuICAgICAgdmFyIF90aGlzJGRhdGEgPSB0aGlzLmRhdGEsXHJcbiAgICAgICAgICBzcGFuID0gX3RoaXMkZGF0YS5zcGFuLFxyXG4gICAgICAgICAgb2Zmc2V0ID0gX3RoaXMkZGF0YS5vZmZzZXQ7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ2N1c3RvbS1jbGFzcycsICd2YW4tY29sJywge1xyXG4gICAgICAgIFtcInZhbi1jb2wtLVwiICsgc3Bhbl06IHNwYW4sXHJcbiAgICAgICAgW1widmFuLWNvbC0tb2Zmc2V0LVwiICsgb2Zmc2V0XTogb2Zmc2V0XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0R3V0dGVyOiBmdW5jdGlvbiBzZXRHdXR0ZXIoZ3V0dGVyKSB7XHJcbiAgICAgIHZhciBwYWRkaW5nID0gZ3V0dGVyIC8gMiArIFwicHhcIjtcclxuICAgICAgdmFyIHN0eWxlID0gZ3V0dGVyID8gXCJwYWRkaW5nLWxlZnQ6IFwiICsgcGFkZGluZyArIFwiOyBwYWRkaW5nLXJpZ2h0OiBcIiArIHBhZGRpbmcgKyBcIjtcIiA6ICcnO1xyXG5cclxuICAgICAgaWYgKHN0eWxlICE9PSB0aGlzLmRhdGEuc3R5bGUpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgc3R5bGU6IHN0eWxlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==