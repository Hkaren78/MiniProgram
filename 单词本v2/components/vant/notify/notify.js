Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = Notify;

var _utils = require("./../common/utils.js");

var defaultOptions = {
    selector: "#van-notify",
    duration: 3e3
};

function parseOptions(text) {
    return (0, _utils.isObj)(text) ? text : {
        text: text
    };
}

function Notify(options) {
    if (options === void 0) {
        options = {};
    }
    var pages = getCurrentPages();
    var ctx = pages[pages.length - 1];
    options = Object.assign({}, defaultOptions, parseOptions(options));
    var el = ctx.selectComponent(options.selector);
    delete options.selector;
    if (el) {
        el.setData(options);
        el.show();
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmeS5qcyJdLCJuYW1lcyI6WyJOb3RpZnkiLCJkZWZhdWx0T3B0aW9ucyIsInNlbGVjdG9yIiwiZHVyYXRpb24iLCJwYXJzZU9wdGlvbnMiLCJ0ZXh0Iiwib3B0aW9ucyIsInBhZ2VzIiwiZ2V0Q3VycmVudFBhZ2VzIiwiY3R4IiwibGVuZ3RoIiwiT2JqZWN0IiwiYXNzaWduIiwiZWwiLCJzZWxlY3RDb21wb25lbnQiLCJzZXREYXRhIiwic2hvdyJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxNOztBQVp4Qjs7QUFDQSxJQUFJQyxpQkFBaUI7QUFDbkJDLFlBQVUsYUFEUztBQUVuQkMsWUFBVTtBQUZTLENBQXJCOztBQUtBLFNBQVNDLFlBQVQsQ0FBc0JDLElBQXRCLEVBQTRCO0FBQzFCLFNBQU8sa0JBQU1BLElBQU4sSUFBY0EsSUFBZCxHQUFxQjtBQUMxQkEsVUFBTUE7QUFEb0IsR0FBNUI7QUFHRDs7QUFFYyxTQUFTTCxNQUFULENBQWdCTSxPQUFoQixFQUF5QjtBQUN0QyxNQUFJQSxZQUFZLEtBQUssQ0FBckIsRUFBd0I7QUFDdEJBLGNBQVUsRUFBVjtBQUNEOztBQUVELE1BQUlDLFFBQVFDLGlCQUFaO0FBQ0EsTUFBSUMsTUFBTUYsTUFBTUEsTUFBTUcsTUFBTixHQUFlLENBQXJCLENBQVY7QUFDQUosWUFBVUssT0FBT0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JYLGNBQWxCLEVBQWtDRyxhQUFhRSxPQUFiLENBQWxDLENBQVY7QUFDQSxNQUFJTyxLQUFLSixJQUFJSyxlQUFKLENBQW9CUixRQUFRSixRQUE1QixDQUFUO0FBQ0EsU0FBT0ksUUFBUUosUUFBZjs7QUFFQSxNQUFJVyxFQUFKLEVBQVE7QUFDTkEsT0FBR0UsT0FBSCxDQUFXVCxPQUFYO0FBQ0FPLE9BQUdHLElBQUg7QUFDRDtBQUNGIiwiZmlsZSI6Im5vdGlmeS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGlzT2JqIH0gZnJvbSAnLi4vY29tbW9uL3V0aWxzJztcclxudmFyIGRlZmF1bHRPcHRpb25zID0ge1xyXG4gIHNlbGVjdG9yOiAnI3Zhbi1ub3RpZnknLFxyXG4gIGR1cmF0aW9uOiAzMDAwXHJcbn07XHJcblxyXG5mdW5jdGlvbiBwYXJzZU9wdGlvbnModGV4dCkge1xyXG4gIHJldHVybiBpc09iaih0ZXh0KSA/IHRleHQgOiB7XHJcbiAgICB0ZXh0OiB0ZXh0XHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTm90aWZ5KG9wdGlvbnMpIHtcclxuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XHJcbiAgICBvcHRpb25zID0ge307XHJcbiAgfVxyXG5cclxuICB2YXIgcGFnZXMgPSBnZXRDdXJyZW50UGFnZXMoKTtcclxuICB2YXIgY3R4ID0gcGFnZXNbcGFnZXMubGVuZ3RoIC0gMV07XHJcbiAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zLCBwYXJzZU9wdGlvbnMob3B0aW9ucykpO1xyXG4gIHZhciBlbCA9IGN0eC5zZWxlY3RDb21wb25lbnQob3B0aW9ucy5zZWxlY3Rvcik7XHJcbiAgZGVsZXRlIG9wdGlvbnMuc2VsZWN0b3I7XHJcblxyXG4gIGlmIChlbCkge1xyXG4gICAgZWwuc2V0RGF0YShvcHRpb25zKTtcclxuICAgIGVsLnNob3coKTtcclxuICB9XHJcbn0iXX0=