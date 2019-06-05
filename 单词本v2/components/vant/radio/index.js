var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    field: true,
    relation: {
        name: "radio-group",
        type: "ancestor"
    },
    classes: [ "icon-class", "label-class" ],
    props: {
        name: null,
        value: null,
        disabled: Boolean,
        labelDisabled: Boolean,
        labelPosition: String
    },
    computed: {
        iconClass: function iconClass() {
            var _this$data = this.data, disabled = _this$data.disabled, name = _this$data.name, value = _this$data.value;
            return this.classNames("van-radio__icon", {
                "van-radio__icon--disabled": disabled,
                "van-radio__icon--checked": !disabled && name === value,
                "van-radio__icon--check": !disabled && name !== value
            });
        }
    },
    methods: {
        emitChange: function emitChange(value) {
            var instance = this.getRelationNodes("../radio-group/index")[0] || this;
            instance.$emit("input", value);
            instance.$emit("change", value);
        },
        onChange: function onChange(event) {
            this.emitChange(event.detail.value);
        },
        onClickLabel: function onClickLabel() {
            if (!this.data.disabled && !this.data.labelDisabled) {
                this.emitChange(this.data.name);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImNsYXNzZXMiLCJwcm9wcyIsInZhbHVlIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwibGFiZWxEaXNhYmxlZCIsImxhYmVsUG9zaXRpb24iLCJTdHJpbmciLCJjb21wdXRlZCIsImljb25DbGFzcyIsIl90aGlzJGRhdGEiLCJkYXRhIiwiY2xhc3NOYW1lcyIsIm1ldGhvZHMiLCJlbWl0Q2hhbmdlIiwiaW5zdGFuY2UiLCJnZXRSZWxhdGlvbk5vZGVzIiwiJGVtaXQiLCJvbkNoYW5nZSIsImV2ZW50IiwiZGV0YWlsIiwib25DbGlja0xhYmVsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxZQUFVO0FBQ1JDLFVBQU0sYUFERTtBQUVSQyxVQUFNO0FBRkUsR0FGRTtBQU1aQyxXQUFTLENBQUMsWUFBRCxFQUFlLGFBQWYsQ0FORztBQU9aQyxTQUFPO0FBQ0xILFVBQU0sSUFERDtBQUVMSSxXQUFPLElBRkY7QUFHTEMsY0FBVUMsT0FITDtBQUlMQyxtQkFBZUQsT0FKVjtBQUtMRSxtQkFBZUM7QUFMVixHQVBLO0FBY1pDLFlBQVU7QUFDUkMsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFVBQUlDLGFBQWEsS0FBS0MsSUFBdEI7QUFBQSxVQUNJUixXQUFXTyxXQUFXUCxRQUQxQjtBQUFBLFVBRUlMLE9BQU9ZLFdBQVdaLElBRnRCO0FBQUEsVUFHSUksUUFBUVEsV0FBV1IsS0FIdkI7QUFJQSxhQUFPLEtBQUtVLFVBQUwsQ0FBZ0IsaUJBQWhCLEVBQW1DO0FBQ3hDLHFDQUE2QlQsUUFEVztBQUV4QyxvQ0FBNEIsQ0FBQ0EsUUFBRCxJQUFhTCxTQUFTSSxLQUZWO0FBR3hDLGtDQUEwQixDQUFDQyxRQUFELElBQWFMLFNBQVNJO0FBSFIsT0FBbkMsQ0FBUDtBQUtEO0FBWE8sR0FkRTtBQTJCWlcsV0FBUztBQUNQQyxnQkFBWSxTQUFTQSxVQUFULENBQW9CWixLQUFwQixFQUEyQjtBQUNyQyxVQUFJYSxXQUFXLEtBQUtDLGdCQUFMLENBQXNCLHNCQUF0QixFQUE4QyxDQUE5QyxLQUFvRCxJQUFuRTtBQUNBRCxlQUFTRSxLQUFULENBQWUsT0FBZixFQUF3QmYsS0FBeEI7QUFDQWEsZUFBU0UsS0FBVCxDQUFlLFFBQWYsRUFBeUJmLEtBQXpCO0FBQ0QsS0FMTTtBQU1QZ0IsY0FBVSxTQUFTQSxRQUFULENBQWtCQyxLQUFsQixFQUF5QjtBQUNqQyxXQUFLTCxVQUFMLENBQWdCSyxNQUFNQyxNQUFOLENBQWFsQixLQUE3QjtBQUNELEtBUk07QUFTUG1CLGtCQUFjLFNBQVNBLFlBQVQsR0FBd0I7QUFDcEMsVUFBSSxDQUFDLEtBQUtWLElBQUwsQ0FBVVIsUUFBWCxJQUF1QixDQUFDLEtBQUtRLElBQUwsQ0FBVU4sYUFBdEMsRUFBcUQ7QUFDbkQsYUFBS1MsVUFBTCxDQUFnQixLQUFLSCxJQUFMLENBQVViLElBQTFCO0FBQ0Q7QUFDRjtBQWJNO0FBM0JHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIGZpZWxkOiB0cnVlLFxyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAncmFkaW8tZ3JvdXAnLFxyXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xyXG4gIH0sXHJcbiAgY2xhc3NlczogWydpY29uLWNsYXNzJywgJ2xhYmVsLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIG5hbWU6IG51bGwsXHJcbiAgICB2YWx1ZTogbnVsbCxcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgbGFiZWxEaXNhYmxlZDogQm9vbGVhbixcclxuICAgIGxhYmVsUG9zaXRpb246IFN0cmluZ1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGljb25DbGFzczogZnVuY3Rpb24gaWNvbkNsYXNzKCkge1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcclxuICAgICAgICAgIGRpc2FibGVkID0gX3RoaXMkZGF0YS5kaXNhYmxlZCxcclxuICAgICAgICAgIG5hbWUgPSBfdGhpcyRkYXRhLm5hbWUsXHJcbiAgICAgICAgICB2YWx1ZSA9IF90aGlzJGRhdGEudmFsdWU7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ3Zhbi1yYWRpb19faWNvbicsIHtcclxuICAgICAgICAndmFuLXJhZGlvX19pY29uLS1kaXNhYmxlZCc6IGRpc2FibGVkLFxyXG4gICAgICAgICd2YW4tcmFkaW9fX2ljb24tLWNoZWNrZWQnOiAhZGlzYWJsZWQgJiYgbmFtZSA9PT0gdmFsdWUsXHJcbiAgICAgICAgJ3Zhbi1yYWRpb19faWNvbi0tY2hlY2snOiAhZGlzYWJsZWQgJiYgbmFtZSAhPT0gdmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBlbWl0Q2hhbmdlOiBmdW5jdGlvbiBlbWl0Q2hhbmdlKHZhbHVlKSB7XHJcbiAgICAgIHZhciBpbnN0YW5jZSA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vcmFkaW8tZ3JvdXAvaW5kZXgnKVswXSB8fCB0aGlzO1xyXG4gICAgICBpbnN0YW5jZS4kZW1pdCgnaW5wdXQnLCB2YWx1ZSk7XHJcbiAgICAgIGluc3RhbmNlLiRlbWl0KCdjaGFuZ2UnLCB2YWx1ZSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuZW1pdENoYW5nZShldmVudC5kZXRhaWwudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uQ2xpY2tMYWJlbDogZnVuY3Rpb24gb25DbGlja0xhYmVsKCkge1xyXG4gICAgICBpZiAoIXRoaXMuZGF0YS5kaXNhYmxlZCAmJiAhdGhpcy5kYXRhLmxhYmVsRGlzYWJsZWQpIHtcclxuICAgICAgICB0aGlzLmVtaXRDaGFuZ2UodGhpcy5kYXRhLm5hbWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=