Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.basic = undefined;

var _classNames = require("./../common/class-names.js");

var basic = exports.basic = Behavior({
    methods: {
        classNames: _classNames.classNames,
        $emit: function $emit() {
            this.triggerEvent.apply(this, arguments);
        },
        getRect: function getRect(selector, all) {
            var _this = this;
            return new Promise(function(resolve) {
                wx.createSelectorQuery().in(_this)[all ? "selectAll" : "select"](selector).boundingClientRect(function(rect) {
                    if (all && Array.isArray(rect) && rect.length) {
                        resolve(rect);
                    }
                    if (!all && rect) {
                        resolve(rect);
                    }
                }).exec();
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhc2ljLmpzIl0sIm5hbWVzIjpbImJhc2ljIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwiY2xhc3NOYW1lcyIsIiRlbWl0IiwidHJpZ2dlckV2ZW50IiwiYXBwbHkiLCJhcmd1bWVudHMiLCJnZXRSZWN0Iiwic2VsZWN0b3IiLCJhbGwiLCJfdGhpcyIsIlByb21pc2UiLCJyZXNvbHZlIiwid3giLCJjcmVhdGVTZWxlY3RvclF1ZXJ5IiwiaW4iLCJib3VuZGluZ0NsaWVudFJlY3QiLCJyZWN0IiwiQXJyYXkiLCJpc0FycmF5IiwibGVuZ3RoIiwiZXhlYyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOztBQUNPLElBQUlBLHdCQUFRQyxTQUFTO0FBQzFCQyxXQUFTO0FBQ1BDLGdCQUFZQSxzQkFETDtBQUVQQyxXQUFPLFNBQVNBLEtBQVQsR0FBaUI7QUFDdEIsV0FBS0MsWUFBTCxDQUFrQkMsS0FBbEIsQ0FBd0IsSUFBeEIsRUFBOEJDLFNBQTlCO0FBQ0QsS0FKTTtBQUtQQyxhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLFFBQWpCLEVBQTJCQyxHQUEzQixFQUFnQztBQUN2QyxVQUFJQyxRQUFRLElBQVo7O0FBRUEsYUFBTyxJQUFJQyxPQUFKLENBQVksVUFBVUMsT0FBVixFQUFtQjtBQUNwQ0MsV0FBR0MsbUJBQUgsR0FBeUJDLEVBQXpCLENBQTRCTCxLQUE1QixFQUFtQ0QsTUFBTSxXQUFOLEdBQW9CLFFBQXZELEVBQWlFRCxRQUFqRSxFQUEyRVEsa0JBQTNFLENBQThGLFVBQVVDLElBQVYsRUFBZ0I7QUFDNUcsY0FBSVIsT0FBT1MsTUFBTUMsT0FBTixDQUFjRixJQUFkLENBQVAsSUFBOEJBLEtBQUtHLE1BQXZDLEVBQStDO0FBQzdDUixvQkFBUUssSUFBUjtBQUNEOztBQUVELGNBQUksQ0FBQ1IsR0FBRCxJQUFRUSxJQUFaLEVBQWtCO0FBQ2hCTCxvQkFBUUssSUFBUjtBQUNEO0FBQ0YsU0FSRCxFQVFHSSxJQVJIO0FBU0QsT0FWTSxDQUFQO0FBV0Q7QUFuQk07QUFEaUIsQ0FBVCxDQUFaIiwiZmlsZSI6ImJhc2ljLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY2xhc3NOYW1lcyB9IGZyb20gJy4uL2NvbW1vbi9jbGFzcy1uYW1lcyc7XHJcbmV4cG9ydCB2YXIgYmFzaWMgPSBCZWhhdmlvcih7XHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2xhc3NOYW1lczogY2xhc3NOYW1lcyxcclxuICAgICRlbWl0OiBmdW5jdGlvbiAkZW1pdCgpIHtcclxuICAgICAgdGhpcy50cmlnZ2VyRXZlbnQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgIH0sXHJcbiAgICBnZXRSZWN0OiBmdW5jdGlvbiBnZXRSZWN0KHNlbGVjdG9yLCBhbGwpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xyXG4gICAgICAgIHd4LmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbihfdGhpcylbYWxsID8gJ3NlbGVjdEFsbCcgOiAnc2VsZWN0J10oc2VsZWN0b3IpLmJvdW5kaW5nQ2xpZW50UmVjdChmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgICAgaWYgKGFsbCAmJiBBcnJheS5pc0FycmF5KHJlY3QpICYmIHJlY3QubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVjdCk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKCFhbGwgJiYgcmVjdCkge1xyXG4gICAgICAgICAgICByZXNvbHZlKHJlY3QpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmV4ZWMoKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=