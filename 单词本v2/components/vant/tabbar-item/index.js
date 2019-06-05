var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    props: {
        info: null,
        icon: String,
        dot: Boolean
    },
    relation: {
        name: "tabbar",
        type: "ancestor"
    },
    data: {
        active: false,
        count: 0
    },
    methods: {
        onClick: function onClick() {
            var parent = this.getRelationNodes("../tabbar/index")[0];
            if (parent) {
                parent.onChange(this);
            }
            this.$emit("click");
        },
        setActive: function setActive(data) {
            var _this$data = this.data, active = _this$data.active, count = _this$data.count;
            if (active !== data.active || count !== data.count) {
                this.setData(data);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsImljb24iLCJTdHJpbmciLCJkb3QiLCJCb29sZWFuIiwicmVsYXRpb24iLCJuYW1lIiwidHlwZSIsImRhdGEiLCJhY3RpdmUiLCJjb3VudCIsIm1ldGhvZHMiLCJvbkNsaWNrIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsIm9uQ2hhbmdlIiwiJGVtaXQiLCJzZXRBY3RpdmUiLCJfdGhpcyRkYXRhIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU0sSUFERDtBQUVMQyxVQUFNQyxNQUZEO0FBR0xDLFNBQUtDO0FBSEEsR0FESztBQU1aQyxZQUFVO0FBQ1JDLFVBQU0sUUFERTtBQUVSQyxVQUFNO0FBRkUsR0FORTtBQVVaQyxRQUFNO0FBQ0pDLFlBQVEsS0FESjtBQUVKQyxXQUFPO0FBRkgsR0FWTTtBQWNaQyxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixVQUFJQyxTQUFTLEtBQUtDLGdCQUFMLENBQXNCLGlCQUF0QixFQUF5QyxDQUF6QyxDQUFiOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWQSxlQUFPRSxRQUFQLENBQWdCLElBQWhCO0FBQ0Q7O0FBRUQsV0FBS0MsS0FBTCxDQUFXLE9BQVg7QUFDRCxLQVRNO0FBVVBDLGVBQVcsU0FBU0EsU0FBVCxDQUFtQlQsSUFBbkIsRUFBeUI7QUFDbEMsVUFBSVUsYUFBYSxLQUFLVixJQUF0QjtBQUFBLFVBQ0lDLFNBQVNTLFdBQVdULE1BRHhCO0FBQUEsVUFFSUMsUUFBUVEsV0FBV1IsS0FGdkI7O0FBSUEsVUFBSUQsV0FBV0QsS0FBS0MsTUFBaEIsSUFBMEJDLFVBQVVGLEtBQUtFLEtBQTdDLEVBQW9EO0FBQ2xELGFBQUtTLE9BQUwsQ0FBYVgsSUFBYjtBQUNEO0FBQ0Y7QUFsQk07QUFkRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBwcm9wczoge1xyXG4gICAgaW5mbzogbnVsbCxcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGRvdDogQm9vbGVhblxyXG4gIH0sXHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICd0YWJiYXInLFxyXG4gICAgdHlwZTogJ2FuY2VzdG9yJ1xyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgYWN0aXZlOiBmYWxzZSxcclxuICAgIGNvdW50OiAwXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgICB2YXIgcGFyZW50ID0gdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi90YWJiYXIvaW5kZXgnKVswXTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQub25DaGFuZ2UodGhpcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XHJcbiAgICB9LFxyXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoZGF0YSkge1xyXG4gICAgICB2YXIgX3RoaXMkZGF0YSA9IHRoaXMuZGF0YSxcclxuICAgICAgICAgIGFjdGl2ZSA9IF90aGlzJGRhdGEuYWN0aXZlLFxyXG4gICAgICAgICAgY291bnQgPSBfdGhpcyRkYXRhLmNvdW50O1xyXG5cclxuICAgICAgaWYgKGFjdGl2ZSAhPT0gZGF0YS5hY3RpdmUgfHwgY291bnQgIT09IGRhdGEuY291bnQpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoZGF0YSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==