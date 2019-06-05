var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    relation: {
        name: "tabs",
        type: "ancestor"
    },
    props: {
        title: String,
        disabled: Boolean
    },
    data: {
        inited: false,
        active: false
    },
    watch: {
        disabled: function disabled() {
            var parent = this.getRelationNodes("../tabs/index")[0];
            if (parent) {
                parent.updateTabs();
            }
        },
        title: function title() {
            var parent = this.getRelationNodes("../tabs/index")[0];
            if (parent) {
                parent.setLine();
                parent.updateTabs();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwiZGlzYWJsZWQiLCJCb29sZWFuIiwiZGF0YSIsImluaXRlZCIsImFjdGl2ZSIsIndhdGNoIiwicGFyZW50IiwiZ2V0UmVsYXRpb25Ob2RlcyIsInVwZGF0ZVRhYnMiLCJzZXRMaW5lIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxNQURFO0FBRVJDLFVBQU07QUFGRSxHQURFO0FBS1pDLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxjQUFVQztBQUZMLEdBTEs7QUFTWkMsUUFBTTtBQUNKQyxZQUFRLEtBREo7QUFFSkMsWUFBUTtBQUZKLEdBVE07QUFhWkMsU0FBTztBQUNMTCxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSU0sU0FBUyxLQUFLQyxnQkFBTCxDQUFzQixlQUF0QixFQUF1QyxDQUF2QyxDQUFiOztBQUVBLFVBQUlELE1BQUosRUFBWTtBQUNWQSxlQUFPRSxVQUFQO0FBQ0Q7QUFDRixLQVBJO0FBUUxWLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixVQUFJUSxTQUFTLEtBQUtDLGdCQUFMLENBQXNCLGVBQXRCLEVBQXVDLENBQXZDLENBQWI7O0FBRUEsVUFBSUQsTUFBSixFQUFZO0FBQ1ZBLGVBQU9HLE9BQVA7QUFDQUgsZUFBT0UsVUFBUDtBQUNEO0FBQ0Y7QUFmSTtBQWJLLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHJlbGF0aW9uOiB7XHJcbiAgICBuYW1lOiAndGFicycsXHJcbiAgICB0eXBlOiAnYW5jZXN0b3InXHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIGRpc2FibGVkOiBCb29sZWFuXHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBpbml0ZWQ6IGZhbHNlLFxyXG4gICAgYWN0aXZlOiBmYWxzZVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGRpc2FibGVkOiBmdW5jdGlvbiBkaXNhYmxlZCgpIHtcclxuICAgICAgdmFyIHBhcmVudCA9IHRoaXMuZ2V0UmVsYXRpb25Ob2RlcygnLi4vdGFicy9pbmRleCcpWzBdO1xyXG5cclxuICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudC51cGRhdGVUYWJzKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB0aXRsZTogZnVuY3Rpb24gdGl0bGUoKSB7XHJcbiAgICAgIHZhciBwYXJlbnQgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL3RhYnMvaW5kZXgnKVswXTtcclxuXHJcbiAgICAgIGlmIChwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQuc2V0TGluZSgpO1xyXG4gICAgICAgIHBhcmVudC51cGRhdGVUYWJzKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==