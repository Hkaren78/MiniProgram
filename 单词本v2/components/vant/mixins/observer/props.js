Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.observeProps = observeProps;

function observeProps(props) {
    if (!props) {
        return;
    }
    Object.keys(props).forEach(function(key) {
        var prop = props[key];
        if (prop === null || !("type" in prop)) {
            prop = {
                type: prop
            };
        }
        var _prop = prop, observer = _prop.observer;
        prop.observer = function() {
            if (observer) {
                if (typeof observer === "string") {
                    observer = this[observer];
                }
                observer.apply(this, arguments);
            }
            this.setData();
        };
        props[key] = prop;
    });
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb3BzLmpzIl0sIm5hbWVzIjpbIm9ic2VydmVQcm9wcyIsInByb3BzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIl9wcm9wIiwib2JzZXJ2ZXIiLCJhcHBseSIsImFyZ3VtZW50cyIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7Ozs7O1FBQWdCQSxZLEdBQUFBLFk7QUFBVCxTQUFTQSxZQUFULENBQXNCQyxLQUF0QixFQUE2QjtBQUNsQyxNQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWO0FBQ0Q7O0FBRURDLFNBQU9DLElBQVAsQ0FBWUYsS0FBWixFQUFtQkcsT0FBbkIsQ0FBMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3hDLFFBQUlDLE9BQU9MLE1BQU1JLEdBQU4sQ0FBWDs7QUFFQSxRQUFJQyxTQUFTLElBQVQsSUFBaUIsRUFBRSxVQUFVQSxJQUFaLENBQXJCLEVBQXdDO0FBQ3RDQSxhQUFPO0FBQ0xDLGNBQU1EO0FBREQsT0FBUDtBQUdEOztBQUVELFFBQUlFLFFBQVFGLElBQVo7QUFBQSxRQUNJRyxXQUFXRCxNQUFNQyxRQURyQjs7QUFHQUgsU0FBS0csUUFBTCxHQUFnQixZQUFZO0FBQzFCLFVBQUlBLFFBQUosRUFBYztBQUNaLFlBQUksT0FBT0EsUUFBUCxLQUFvQixRQUF4QixFQUFrQztBQUNoQ0EscUJBQVcsS0FBS0EsUUFBTCxDQUFYO0FBQ0Q7O0FBRURBLGlCQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQkMsU0FBckI7QUFDRDs7QUFFRCxXQUFLQyxPQUFMO0FBQ0QsS0FWRDs7QUFZQVgsVUFBTUksR0FBTixJQUFhQyxJQUFiO0FBQ0QsR0F6QkQ7QUEwQkQiLCJmaWxlIjoicHJvcHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZVByb3BzKHByb3BzKSB7XHJcbiAgaWYgKCFwcm9wcykge1xyXG4gICAgcmV0dXJuO1xyXG4gIH1cclxuXHJcbiAgT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xyXG4gICAgdmFyIHByb3AgPSBwcm9wc1trZXldO1xyXG5cclxuICAgIGlmIChwcm9wID09PSBudWxsIHx8ICEoJ3R5cGUnIGluIHByb3ApKSB7XHJcbiAgICAgIHByb3AgPSB7XHJcbiAgICAgICAgdHlwZTogcHJvcFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBfcHJvcCA9IHByb3AsXHJcbiAgICAgICAgb2JzZXJ2ZXIgPSBfcHJvcC5vYnNlcnZlcjtcclxuXHJcbiAgICBwcm9wLm9ic2VydmVyID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICBpZiAob2JzZXJ2ZXIpIHtcclxuICAgICAgICBpZiAodHlwZW9mIG9ic2VydmVyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgb2JzZXJ2ZXIgPSB0aGlzW29ic2VydmVyXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG9ic2VydmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc2V0RGF0YSgpO1xyXG4gICAgfTtcclxuXHJcbiAgICBwcm9wc1trZXldID0gcHJvcDtcclxuICB9KTtcclxufSJdfQ==