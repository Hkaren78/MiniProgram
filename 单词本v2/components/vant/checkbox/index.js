var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: "checkbox-group",
        type: "ancestor"
    },
    classes: [ "icon-class", "label-class" ],
    props: {
        value: null,
        disabled: Boolean,
        labelDisabled: Boolean,
        labelPosition: String,
        shape: {
            type: String,
            value: "round"
        },
        useIconSlot: Boolean
    },
    computed: {
        iconClass: function iconClass() {
            var _this$data = this.data, disabled = _this$data.disabled, value = _this$data.value, shape = _this$data.shape;
            return this.classNames("van-checkbox__icon", "van-checkbox__icon--" + shape, {
                "van-checkbox__icon--disabled": disabled,
                "van-checkbox__icon--checked": value
            });
        }
    },
    methods: {
        emitChange: function emitChange(value) {
            var parent = this.getRelationNodes("../checkbox-group/index")[0];
            if (parent) {
                var parentValue = parent.data.value.slice();
                var name = this.data.name;
                if (value) {
                    if (parent.data.max && parentValue.length >= parent.data.max) {
                        return;
                    }
                    /* istanbul ignore else */                    if (parentValue.indexOf(name) === -1) {
                        parentValue.push(name);
                        parent.$emit("input", parentValue);
                        parent.$emit("change", parentValue);
                    }
                } else {
                    var index = parentValue.indexOf(name);
                    /* istanbul ignore else */                    if (index !== -1) {
                        parentValue.splice(index, 1);
                        parent.$emit("input", parentValue);
                        parent.$emit("change", parentValue);
                    }
                }
            } else {
                this.$emit("input", value);
                this.$emit("change", value);
            }
        },
        toggle: function toggle() {
            if (!this.data.disabled) {
                this.emitChange(!this.data.value);
            }
        },
        onClickLabel: function onClickLabel() {
            if (!this.data.disabled && !this.data.labelDisabled) {
                this.emitChange(!this.data.value);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJzaGFwZSIsInVzZUljb25TbG90IiwiY29tcHV0ZWQiLCJpY29uQ2xhc3MiLCJfdGhpcyRkYXRhIiwiZGF0YSIsImNsYXNzTmFtZXMiLCJtZXRob2RzIiwiZW1pdENoYW5nZSIsInBhcmVudCIsImdldFJlbGF0aW9uTm9kZXMiLCJwYXJlbnRWYWx1ZSIsInNsaWNlIiwibWF4IiwibGVuZ3RoIiwiaW5kZXhPZiIsInB1c2giLCIkZW1pdCIsImluZGV4Iiwic3BsaWNlIiwidG9nZ2xlIiwib25DbGlja0xhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sZ0JBREU7QUFFUkMsVUFBTTtBQUZFLEdBRkU7QUFNWkMsV0FBUyxDQUFDLFlBQUQsRUFBZSxhQUFmLENBTkc7QUFPWkMsU0FBTztBQUNMQyxXQUFPLElBREY7QUFFTEMsY0FBVUMsT0FGTDtBQUdMQyxtQkFBZUQsT0FIVjtBQUlMRSxtQkFBZUMsTUFKVjtBQUtMQyxXQUFPO0FBQ0xULFlBQU1RLE1BREQ7QUFFTEwsYUFBTztBQUZGLEtBTEY7QUFTTE8saUJBQWFMO0FBVFIsR0FQSztBQWtCWk0sWUFBVTtBQUNSQyxlQUFXLFNBQVNBLFNBQVQsR0FBcUI7QUFDOUIsVUFBSUMsYUFBYSxLQUFLQyxJQUF0QjtBQUFBLFVBQ0lWLFdBQVdTLFdBQVdULFFBRDFCO0FBQUEsVUFFSUQsUUFBUVUsV0FBV1YsS0FGdkI7QUFBQSxVQUdJTSxRQUFRSSxXQUFXSixLQUh2QjtBQUlBLGFBQU8sS0FBS00sVUFBTCxDQUFnQixvQkFBaEIsRUFBc0MseUJBQXlCTixLQUEvRCxFQUFzRTtBQUMzRSx3Q0FBZ0NMLFFBRDJDO0FBRTNFLHVDQUErQkQ7QUFGNEMsT0FBdEUsQ0FBUDtBQUlEO0FBVk8sR0FsQkU7QUE4QlphLFdBQVM7QUFDUEMsZ0JBQVksU0FBU0EsVUFBVCxDQUFvQmQsS0FBcEIsRUFBMkI7QUFDckMsVUFBSWUsU0FBUyxLQUFLQyxnQkFBTCxDQUFzQix5QkFBdEIsRUFBaUQsQ0FBakQsQ0FBYjs7QUFFQSxVQUFJRCxNQUFKLEVBQVk7QUFDVixZQUFJRSxjQUFjRixPQUFPSixJQUFQLENBQVlYLEtBQVosQ0FBa0JrQixLQUFsQixFQUFsQjtBQUNBLFlBQUl0QixPQUFPLEtBQUtlLElBQUwsQ0FBVWYsSUFBckI7O0FBRUEsWUFBSUksS0FBSixFQUFXO0FBQ1QsY0FBSWUsT0FBT0osSUFBUCxDQUFZUSxHQUFaLElBQW1CRixZQUFZRyxNQUFaLElBQXNCTCxPQUFPSixJQUFQLENBQVlRLEdBQXpELEVBQThEO0FBQzVEO0FBQ0Q7QUFDRDs7QUFHQSxjQUFJRixZQUFZSSxPQUFaLENBQW9CekIsSUFBcEIsTUFBOEIsQ0FBQyxDQUFuQyxFQUFzQztBQUNwQ3FCLHdCQUFZSyxJQUFaLENBQWlCMUIsSUFBakI7QUFDQW1CLG1CQUFPUSxLQUFQLENBQWEsT0FBYixFQUFzQk4sV0FBdEI7QUFDQUYsbUJBQU9RLEtBQVAsQ0FBYSxRQUFiLEVBQXVCTixXQUF2QjtBQUNEO0FBQ0YsU0FaRCxNQVlPO0FBQ0wsY0FBSU8sUUFBUVAsWUFBWUksT0FBWixDQUFvQnpCLElBQXBCLENBQVo7QUFDQTs7QUFFQSxjQUFJNEIsVUFBVSxDQUFDLENBQWYsRUFBa0I7QUFDaEJQLHdCQUFZUSxNQUFaLENBQW1CRCxLQUFuQixFQUEwQixDQUExQjtBQUNBVCxtQkFBT1EsS0FBUCxDQUFhLE9BQWIsRUFBc0JOLFdBQXRCO0FBQ0FGLG1CQUFPUSxLQUFQLENBQWEsUUFBYixFQUF1Qk4sV0FBdkI7QUFDRDtBQUNGO0FBQ0YsT0ExQkQsTUEwQk87QUFDTCxhQUFLTSxLQUFMLENBQVcsT0FBWCxFQUFvQnZCLEtBQXBCO0FBQ0EsYUFBS3VCLEtBQUwsQ0FBVyxRQUFYLEVBQXFCdkIsS0FBckI7QUFDRDtBQUNGLEtBbENNO0FBbUNQMEIsWUFBUSxTQUFTQSxNQUFULEdBQWtCO0FBQ3hCLFVBQUksQ0FBQyxLQUFLZixJQUFMLENBQVVWLFFBQWYsRUFBeUI7QUFDdkIsYUFBS2EsVUFBTCxDQUFnQixDQUFDLEtBQUtILElBQUwsQ0FBVVgsS0FBM0I7QUFDRDtBQUNGLEtBdkNNO0FBd0NQMkIsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJLENBQUMsS0FBS2hCLElBQUwsQ0FBVVYsUUFBWCxJQUF1QixDQUFDLEtBQUtVLElBQUwsQ0FBVVIsYUFBdEMsRUFBcUQ7QUFDbkQsYUFBS1csVUFBTCxDQUFnQixDQUFDLEtBQUtILElBQUwsQ0FBVVgsS0FBM0I7QUFDRDtBQUNGO0FBNUNNO0FBOUJHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGZpZWxkOiB0cnVlLFxyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAnY2hlY2tib3gtZ3JvdXAnLFxyXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xyXG4gIH0sXHJcbiAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHZhbHVlOiBudWxsLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBsYWJlbERpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgbGFiZWxQb3NpdGlvbjogU3RyaW5nLFxyXG4gICAgc2hhcGU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ3JvdW5kJ1xyXG4gICAgfSxcclxuICAgIHVzZUljb25TbG90OiBCb29sZWFuXHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgaWNvbkNsYXNzOiBmdW5jdGlvbiBpY29uQ2xhc3MoKSB7XHJcbiAgICAgIHZhciBfdGhpcyRkYXRhID0gdGhpcy5kYXRhLFxyXG4gICAgICAgICAgZGlzYWJsZWQgPSBfdGhpcyRkYXRhLmRpc2FibGVkLFxyXG4gICAgICAgICAgdmFsdWUgPSBfdGhpcyRkYXRhLnZhbHVlLFxyXG4gICAgICAgICAgc2hhcGUgPSBfdGhpcyRkYXRhLnNoYXBlO1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWVzKCd2YW4tY2hlY2tib3hfX2ljb24nLCBcInZhbi1jaGVja2JveF9faWNvbi0tXCIgKyBzaGFwZSwge1xyXG4gICAgICAgICd2YW4tY2hlY2tib3hfX2ljb24tLWRpc2FibGVkJzogZGlzYWJsZWQsXHJcbiAgICAgICAgJ3Zhbi1jaGVja2JveF9faWNvbi0tY2hlY2tlZCc6IHZhbHVlXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZW1pdENoYW5nZTogZnVuY3Rpb24gZW1pdENoYW5nZSh2YWx1ZSkge1xyXG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jaGVja2JveC1ncm91cC9pbmRleCcpWzBdO1xyXG5cclxuICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHZhciBwYXJlbnRWYWx1ZSA9IHBhcmVudC5kYXRhLnZhbHVlLnNsaWNlKCk7XHJcbiAgICAgICAgdmFyIG5hbWUgPSB0aGlzLmRhdGEubmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICBpZiAocGFyZW50LmRhdGEubWF4ICYmIHBhcmVudFZhbHVlLmxlbmd0aCA+PSBwYXJlbnQuZGF0YS5tYXgpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuXHJcblxyXG4gICAgICAgICAgaWYgKHBhcmVudFZhbHVlLmluZGV4T2YobmFtZSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFZhbHVlLnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgcGFyZW50VmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB2YXIgaW5kZXggPSBwYXJlbnRWYWx1ZS5pbmRleE9mKG5hbWUpO1xyXG4gICAgICAgICAgLyogaXN0YW5idWwgaWdub3JlIGVsc2UgKi9cclxuXHJcbiAgICAgICAgICBpZiAoaW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICAgIHBhcmVudFZhbHVlLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnaW5wdXQnLCBwYXJlbnRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHBhcmVudC4kZW1pdCgnY2hhbmdlJywgcGFyZW50VmFsdWUpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0b2dnbGU6IGZ1bmN0aW9uIHRvZ2dsZSgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UoIXRoaXMuZGF0YS52YWx1ZSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBvbkNsaWNrTGFiZWw6IGZ1bmN0aW9uIG9uQ2xpY2tMYWJlbCgpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sYWJlbERpc2FibGVkKSB7XHJcbiAgICAgICAgdGhpcy5lbWl0Q2hhbmdlKCF0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=