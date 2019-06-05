var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    relation: {
        name: "badge",
        type: "descendant",
        linked: function linked(target) {
            this.badges.push(target);
            this.setActive();
        },
        unlinked: function unlinked(target) {
            this.badges = this.badges.filter(function(item) {
                return item !== target;
            });
            this.setActive();
        }
    },
    props: {
        active: {
            type: Number,
            value: 0
        }
    },
    watch: {
        active: "setActive"
    },
    beforeCreate: function beforeCreate() {
        this.badges = [];
        this.currentActive = -1;
    },
    methods: {
        setActive: function setActive(badge) {
            var active = this.data.active;
            var badges = this.badges;
            if (badge) {
                active = badges.indexOf(badge);
            }
            if (active === this.currentActive) {
                return;
            }
            if (this.currentActive !== -1 && badges[this.currentActive]) {
                this.$emit("change", active);
                badges[this.currentActive].setActive(false);
            }
            if (badges[active]) {
                badges[active].setActive(true);
                this.currentActive = active;
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJiYWRnZXMiLCJwdXNoIiwic2V0QWN0aXZlIiwidW5saW5rZWQiLCJmaWx0ZXIiLCJpdGVtIiwicHJvcHMiLCJhY3RpdmUiLCJOdW1iZXIiLCJ2YWx1ZSIsIndhdGNoIiwiYmVmb3JlQ3JlYXRlIiwiY3VycmVudEFjdGl2ZSIsIm1ldGhvZHMiLCJiYWRnZSIsImRhdGEiLCJpbmRleE9mIiwiJGVtaXQiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsWUFBVTtBQUNSQyxVQUFNLE9BREU7QUFFUkMsVUFBTSxZQUZFO0FBR1JDLFlBQVEsU0FBU0EsTUFBVCxDQUFnQkMsTUFBaEIsRUFBd0I7QUFDOUIsV0FBS0MsTUFBTCxDQUFZQyxJQUFaLENBQWlCRixNQUFqQjtBQUNBLFdBQUtHLFNBQUw7QUFDRCxLQU5PO0FBT1JDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkosTUFBbEIsRUFBMEI7QUFDbEMsV0FBS0MsTUFBTCxHQUFjLEtBQUtBLE1BQUwsQ0FBWUksTUFBWixDQUFtQixVQUFVQyxJQUFWLEVBQWdCO0FBQy9DLGVBQU9BLFNBQVNOLE1BQWhCO0FBQ0QsT0FGYSxDQUFkO0FBR0EsV0FBS0csU0FBTDtBQUNEO0FBWk8sR0FERTtBQWVaSSxTQUFPO0FBQ0xDLFlBQVE7QUFDTlYsWUFBTVcsTUFEQTtBQUVOQyxhQUFPO0FBRkQ7QUFESCxHQWZLO0FBcUJaQyxTQUFPO0FBQ0xILFlBQVE7QUFESCxHQXJCSztBQXdCWkksZ0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxTQUFLWCxNQUFMLEdBQWMsRUFBZDtBQUNBLFNBQUtZLGFBQUwsR0FBcUIsQ0FBQyxDQUF0QjtBQUNELEdBM0JXO0FBNEJaQyxXQUFTO0FBQ1BYLGVBQVcsU0FBU0EsU0FBVCxDQUFtQlksS0FBbkIsRUFBMEI7QUFDbkMsVUFBSVAsU0FBUyxLQUFLUSxJQUFMLENBQVVSLE1BQXZCO0FBQ0EsVUFBSVAsU0FBUyxLQUFLQSxNQUFsQjs7QUFFQSxVQUFJYyxLQUFKLEVBQVc7QUFDVFAsaUJBQVNQLE9BQU9nQixPQUFQLENBQWVGLEtBQWYsQ0FBVDtBQUNEOztBQUVELFVBQUlQLFdBQVcsS0FBS0ssYUFBcEIsRUFBbUM7QUFDakM7QUFDRDs7QUFFRCxVQUFJLEtBQUtBLGFBQUwsS0FBdUIsQ0FBQyxDQUF4QixJQUE2QlosT0FBTyxLQUFLWSxhQUFaLENBQWpDLEVBQTZEO0FBQzNELGFBQUtLLEtBQUwsQ0FBVyxRQUFYLEVBQXFCVixNQUFyQjtBQUNBUCxlQUFPLEtBQUtZLGFBQVosRUFBMkJWLFNBQTNCLENBQXFDLEtBQXJDO0FBQ0Q7O0FBRUQsVUFBSUYsT0FBT08sTUFBUCxDQUFKLEVBQW9CO0FBQ2xCUCxlQUFPTyxNQUFQLEVBQWVMLFNBQWYsQ0FBeUIsSUFBekI7QUFDQSxhQUFLVSxhQUFMLEdBQXFCTCxNQUFyQjtBQUNEO0FBQ0Y7QUF0Qk07QUE1QkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICdiYWRnZScsXHJcbiAgICB0eXBlOiAnZGVzY2VuZGFudCcsXHJcbiAgICBsaW5rZWQ6IGZ1bmN0aW9uIGxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgdGhpcy5iYWRnZXMucHVzaCh0YXJnZXQpO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZSgpO1xyXG4gICAgfSxcclxuICAgIHVubGlua2VkOiBmdW5jdGlvbiB1bmxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgdGhpcy5iYWRnZXMgPSB0aGlzLmJhZGdlcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPT0gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5zZXRBY3RpdmUoKTtcclxuICAgIH1cclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBhY3RpdmU6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFjdGl2ZTogJ3NldEFjdGl2ZSdcclxuICB9LFxyXG4gIGJlZm9yZUNyZWF0ZTogZnVuY3Rpb24gYmVmb3JlQ3JlYXRlKCkge1xyXG4gICAgdGhpcy5iYWRnZXMgPSBbXTtcclxuICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IC0xO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgc2V0QWN0aXZlOiBmdW5jdGlvbiBzZXRBY3RpdmUoYmFkZ2UpIHtcclxuICAgICAgdmFyIGFjdGl2ZSA9IHRoaXMuZGF0YS5hY3RpdmU7XHJcbiAgICAgIHZhciBiYWRnZXMgPSB0aGlzLmJhZGdlcztcclxuXHJcbiAgICAgIGlmIChiYWRnZSkge1xyXG4gICAgICAgIGFjdGl2ZSA9IGJhZGdlcy5pbmRleE9mKGJhZGdlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGFjdGl2ZSA9PT0gdGhpcy5jdXJyZW50QWN0aXZlKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jdXJyZW50QWN0aXZlICE9PSAtMSAmJiBiYWRnZXNbdGhpcy5jdXJyZW50QWN0aXZlXSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZScsIGFjdGl2ZSk7XHJcbiAgICAgICAgYmFkZ2VzW3RoaXMuY3VycmVudEFjdGl2ZV0uc2V0QWN0aXZlKGZhbHNlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKGJhZGdlc1thY3RpdmVdKSB7XHJcbiAgICAgICAgYmFkZ2VzW2FjdGl2ZV0uc2V0QWN0aXZlKHRydWUpO1xyXG4gICAgICAgIHRoaXMuY3VycmVudEFjdGl2ZSA9IGFjdGl2ZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7Il19