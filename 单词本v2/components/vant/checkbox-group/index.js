var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: "checkbox",
        type: "descendant",
        linked: function linked(target) {
            var _this$data = this.data, value = _this$data.value, disabled = _this$data.disabled;
            target.setData({
                value: value.indexOf(target.data.name) !== -1,
                disabled: disabled || target.data.disabled
            });
        }
    },
    props: {
        value: Array,
        disabled: Boolean,
        max: Number
    },
    watch: {
        value: function value(_value) {
            var children = this.getRelationNodes("../checkbox/index");
            children.forEach(function(child) {
                child.setData({
                    value: _value.indexOf(child.data.name) !== -1
                });
            });
        },
        disabled: function disabled(_disabled) {
            var children = this.getRelationNodes("../checkbox/index");
            children.forEach(function(child) {
                child.setData({
                    disabled: _disabled || child.data.disabled
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImxpbmtlZCIsInRhcmdldCIsIl90aGlzJGRhdGEiLCJkYXRhIiwidmFsdWUiLCJkaXNhYmxlZCIsInNldERhdGEiLCJpbmRleE9mIiwicHJvcHMiLCJBcnJheSIsIkJvb2xlYW4iLCJtYXgiLCJOdW1iZXIiLCJ3YXRjaCIsIl92YWx1ZSIsImNoaWxkcmVuIiwiZ2V0UmVsYXRpb25Ob2RlcyIsImZvckVhY2giLCJjaGlsZCIsIl9kaXNhYmxlZCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsWUFBVTtBQUNSQyxVQUFNLFVBREU7QUFFUkMsVUFBTSxZQUZFO0FBR1JDLFlBQVEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lDLFFBQVFGLFdBQVdFLEtBRHZCO0FBQUEsVUFFSUMsV0FBV0gsV0FBV0csUUFGMUI7QUFHQUosYUFBT0ssT0FBUCxDQUFlO0FBQ2JGLGVBQU9BLE1BQU1HLE9BQU4sQ0FBY04sT0FBT0UsSUFBUCxDQUFZTCxJQUExQixNQUFvQyxDQUFDLENBRC9CO0FBRWJPLGtCQUFVQSxZQUFZSixPQUFPRSxJQUFQLENBQVlFO0FBRnJCLE9BQWY7QUFJRDtBQVhPLEdBRkU7QUFlWkcsU0FBTztBQUNMSixXQUFPSyxLQURGO0FBRUxKLGNBQVVLLE9BRkw7QUFHTEMsU0FBS0M7QUFIQSxHQWZLO0FBb0JaQyxTQUFPO0FBQ0xULFdBQU8sU0FBU0EsS0FBVCxDQUFlVSxNQUFmLEVBQXVCO0FBQzVCLFVBQUlDLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsbUJBQXRCLENBQWY7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2hDQSxjQUFNWixPQUFOLENBQWM7QUFDWkYsaUJBQU9VLE9BQU9QLE9BQVAsQ0FBZVcsTUFBTWYsSUFBTixDQUFXTCxJQUExQixNQUFvQyxDQUFDO0FBRGhDLFNBQWQ7QUFHRCxPQUpEO0FBS0QsS0FSSTtBQVNMTyxjQUFVLFNBQVNBLFFBQVQsQ0FBa0JjLFNBQWxCLEVBQTZCO0FBQ3JDLFVBQUlKLFdBQVcsS0FBS0MsZ0JBQUwsQ0FBc0IsbUJBQXRCLENBQWY7QUFDQUQsZUFBU0UsT0FBVCxDQUFpQixVQUFVQyxLQUFWLEVBQWlCO0FBQ2hDQSxjQUFNWixPQUFOLENBQWM7QUFDWkQsb0JBQVVjLGFBQWFELE1BQU1mLElBQU4sQ0FBV0U7QUFEdEIsU0FBZDtBQUdELE9BSkQ7QUFLRDtBQWhCSTtBQXBCSyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICByZWxhdGlvbjoge1xyXG4gICAgbmFtZTogJ2NoZWNrYm94JyxcclxuICAgIHR5cGU6ICdkZXNjZW5kYW50JyxcclxuICAgIGxpbmtlZDogZnVuY3Rpb24gbGlua2VkKHRhcmdldCkge1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcclxuICAgICAgICAgIHZhbHVlID0gX3RoaXMkZGF0YS52YWx1ZSxcclxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZDtcclxuICAgICAgdGFyZ2V0LnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZS5pbmRleE9mKHRhcmdldC5kYXRhLm5hbWUpICE9PSAtMSxcclxuICAgICAgICBkaXNhYmxlZDogZGlzYWJsZWQgfHwgdGFyZ2V0LmRhdGEuZGlzYWJsZWRcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgdmFsdWU6IEFycmF5LFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBtYXg6IE51bWJlclxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShfdmFsdWUpIHtcclxuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnNldERhdGEoe1xyXG4gICAgICAgICAgdmFsdWU6IF92YWx1ZS5pbmRleE9mKGNoaWxkLmRhdGEubmFtZSkgIT09IC0xXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGRpc2FibGVkOiBmdW5jdGlvbiBkaXNhYmxlZChfZGlzYWJsZWQpIHtcclxuICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC9pbmRleCcpO1xyXG4gICAgICBjaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uIChjaGlsZCkge1xyXG4gICAgICAgIGNoaWxkLnNldERhdGEoe1xyXG4gICAgICAgICAgZGlzYWJsZWQ6IF9kaXNhYmxlZCB8fCBjaGlsZC5kYXRhLmRpc2FibGVkXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19