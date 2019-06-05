Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

exports.classNames = classNames;

var hasOwn = {}.hasOwnProperty;

function classNames() {
    var classes = [];
    for (var i = 0; i < arguments.length; i++) {
        var arg = arguments[i];
        if (!arg) continue;
        var argType = typeof arg === "undefined" ? "undefined" : _typeof(arg);
        if (argType === "string" || argType === "number") {
            classes.push(arg);
        } else if (Array.isArray(arg) && arg.length) {
            var inner = classNames.apply(null, arg);
            if (inner) {
                classes.push(inner);
            }
        } else if (argType === "object") {
            for (var key in arg) {
                if (hasOwn.call(arg, key) && arg[key]) {
                    classes.push(key);
                }
            }
        }
    }
    return classes.join(" ");
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNsYXNzLW5hbWVzLmpzIl0sIm5hbWVzIjpbImNsYXNzTmFtZXMiLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImNsYXNzZXMiLCJpIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJnIiwiYXJnVHlwZSIsInB1c2giLCJBcnJheSIsImlzQXJyYXkiLCJpbm5lciIsImFwcGx5Iiwia2V5IiwiY2FsbCIsImpvaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O1FBQ2dCQSxVLEdBQUFBLFU7QUFEaEIsSUFBSUMsU0FBUyxHQUFHQyxjQUFoQjtBQUNPLFNBQVNGLFVBQVQsR0FBc0I7QUFDM0IsTUFBSUcsVUFBVSxFQUFkOztBQUVBLE9BQUssSUFBSUMsSUFBSSxDQUFiLEVBQWdCQSxJQUFJQyxVQUFVQyxNQUE5QixFQUFzQ0YsR0FBdEMsRUFBMkM7QUFDekMsUUFBSUcsTUFBTUYsVUFBVUQsQ0FBVixDQUFWO0FBQ0EsUUFBSSxDQUFDRyxHQUFMLEVBQVU7QUFDVixRQUFJQyxpQkFBaUJELEdBQWpCLHlDQUFpQkEsR0FBakIsQ0FBSjs7QUFFQSxRQUFJQyxZQUFZLFFBQVosSUFBd0JBLFlBQVksUUFBeEMsRUFBa0Q7QUFDaERMLGNBQVFNLElBQVIsQ0FBYUYsR0FBYjtBQUNELEtBRkQsTUFFTyxJQUFJRyxNQUFNQyxPQUFOLENBQWNKLEdBQWQsS0FBc0JBLElBQUlELE1BQTlCLEVBQXNDO0FBQzNDLFVBQUlNLFFBQVFaLFdBQVdhLEtBQVgsQ0FBaUIsSUFBakIsRUFBdUJOLEdBQXZCLENBQVo7O0FBRUEsVUFBSUssS0FBSixFQUFXO0FBQ1RULGdCQUFRTSxJQUFSLENBQWFHLEtBQWI7QUFDRDtBQUNGLEtBTk0sTUFNQSxJQUFJSixZQUFZLFFBQWhCLEVBQTBCO0FBQy9CLFdBQUssSUFBSU0sR0FBVCxJQUFnQlAsR0FBaEIsRUFBcUI7QUFDbkIsWUFBSU4sT0FBT2MsSUFBUCxDQUFZUixHQUFaLEVBQWlCTyxHQUFqQixLQUF5QlAsSUFBSU8sR0FBSixDQUE3QixFQUF1QztBQUNyQ1gsa0JBQVFNLElBQVIsQ0FBYUssR0FBYjtBQUNEO0FBQ0Y7QUFDRjtBQUNGOztBQUVELFNBQU9YLFFBQVFhLElBQVIsQ0FBYSxHQUFiLENBQVA7QUFDRDtBQUNEIiwiZmlsZSI6ImNsYXNzLW5hbWVzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGhhc093biA9IHt9Lmhhc093blByb3BlcnR5O1xyXG5leHBvcnQgZnVuY3Rpb24gY2xhc3NOYW1lcygpIHtcclxuICB2YXIgY2xhc3NlcyA9IFtdO1xyXG5cclxuICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgdmFyIGFyZyA9IGFyZ3VtZW50c1tpXTtcclxuICAgIGlmICghYXJnKSBjb250aW51ZTtcclxuICAgIHZhciBhcmdUeXBlID0gdHlwZW9mIGFyZztcclxuXHJcbiAgICBpZiAoYXJnVHlwZSA9PT0gJ3N0cmluZycgfHwgYXJnVHlwZSA9PT0gJ251bWJlcicpIHtcclxuICAgICAgY2xhc3Nlcy5wdXNoKGFyZyk7XHJcbiAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJnKSAmJiBhcmcubGVuZ3RoKSB7XHJcbiAgICAgIHZhciBpbm5lciA9IGNsYXNzTmFtZXMuYXBwbHkobnVsbCwgYXJnKTtcclxuXHJcbiAgICAgIGlmIChpbm5lcikge1xyXG4gICAgICAgIGNsYXNzZXMucHVzaChpbm5lcik7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoYXJnVHlwZSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgZm9yICh2YXIga2V5IGluIGFyZykge1xyXG4gICAgICAgIGlmIChoYXNPd24uY2FsbChhcmcsIGtleSkgJiYgYXJnW2tleV0pIHtcclxuICAgICAgICAgIGNsYXNzZXMucHVzaChrZXkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIGNsYXNzZXMuam9pbignICcpO1xyXG59XHJcbjsiXX0=