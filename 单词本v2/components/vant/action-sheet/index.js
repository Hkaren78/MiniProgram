var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    props: {
        show: Boolean,
        title: String,
        cancelText: String,
        zIndex: {
            type: Number,
            value: 100
        },
        actions: {
            type: Array,
            value: []
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        }
    },
    methods: {
        onSelect: function onSelect(event) {
            var index = event.currentTarget.dataset.index;
            var item = this.data.actions[index];
            if (item && !item.disabled && !item.loading) {
                this.$emit("select", item);
            }
        },
        onCancel: function onCancel() {
            this.$emit("cancel");
        },
        onClose: function onClose() {
            this.$emit("close");
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJ0aXRsZSIsIlN0cmluZyIsImNhbmNlbFRleHQiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJhY3Rpb25zIiwiQXJyYXkiLCJvdmVybGF5IiwiY2xvc2VPbkNsaWNrT3ZlcmxheSIsIm1ldGhvZHMiLCJvblNlbGVjdCIsImV2ZW50IiwiaW5kZXgiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIml0ZW0iLCJkYXRhIiwiZGlzYWJsZWQiLCJsb2FkaW5nIiwiJGVtaXQiLCJvbkNhbmNlbCIsIm9uQ2xvc2UiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxVQUFNQyxPQUREO0FBRUxDLFdBQU9DLE1BRkY7QUFHTEMsZ0JBQVlELE1BSFA7QUFJTEUsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUpIO0FBUUxDLGFBQVM7QUFDUEgsWUFBTUksS0FEQztBQUVQRixhQUFPO0FBRkEsS0FSSjtBQVlMRyxhQUFTO0FBQ1BMLFlBQU1MLE9BREM7QUFFUE8sYUFBTztBQUZBLEtBWko7QUFnQkxJLHlCQUFxQjtBQUNuQk4sWUFBTUwsT0FEYTtBQUVuQk8sYUFBTztBQUZZO0FBaEJoQixHQURLO0FBc0JaSyxXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsVUFBSUMsUUFBUUQsTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJGLEtBQXhDO0FBQ0EsVUFBSUcsT0FBTyxLQUFLQyxJQUFMLENBQVVYLE9BQVYsQ0FBa0JPLEtBQWxCLENBQVg7O0FBRUEsVUFBSUcsUUFBUSxDQUFDQSxLQUFLRSxRQUFkLElBQTBCLENBQUNGLEtBQUtHLE9BQXBDLEVBQTZDO0FBQzNDLGFBQUtDLEtBQUwsQ0FBVyxRQUFYLEVBQXFCSixJQUFyQjtBQUNEO0FBQ0YsS0FSTTtBQVNQSyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0QsS0FBTCxDQUFXLFFBQVg7QUFDRCxLQVhNO0FBWVBFLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLRixLQUFMLENBQVcsT0FBWDtBQUNEO0FBZE07QUF0QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIHNob3c6IEJvb2xlYW4sXHJcbiAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgY2FuY2VsVGV4dDogU3RyaW5nLFxyXG4gICAgekluZGV4OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDEwMFxyXG4gICAgfSxcclxuICAgIGFjdGlvbnM6IHtcclxuICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgIHZhbHVlOiBbXVxyXG4gICAgfSxcclxuICAgIG92ZXJsYXk6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBjbG9zZU9uQ2xpY2tPdmVybGF5OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvblNlbGVjdDogZnVuY3Rpb24gb25TZWxlY3QoZXZlbnQpIHtcclxuICAgICAgdmFyIGluZGV4ID0gZXZlbnQuY3VycmVudFRhcmdldC5kYXRhc2V0LmluZGV4O1xyXG4gICAgICB2YXIgaXRlbSA9IHRoaXMuZGF0YS5hY3Rpb25zW2luZGV4XTtcclxuXHJcbiAgICAgIGlmIChpdGVtICYmICFpdGVtLmRpc2FibGVkICYmICFpdGVtLmxvYWRpbmcpIHtcclxuICAgICAgICB0aGlzLiRlbWl0KCdzZWxlY3QnLCBpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG9uQ2FuY2VsOiBmdW5jdGlvbiBvbkNhbmNlbCgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2FuY2VsJyk7XHJcbiAgICB9LFxyXG4gICAgb25DbG9zZTogZnVuY3Rpb24gb25DbG9zZSgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xvc2UnKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==