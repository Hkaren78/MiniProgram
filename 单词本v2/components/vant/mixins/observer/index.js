Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.observe = observe;

var _behavior = require("./behavior.js");

var _props = require("./props.js");

function observe(vantOptions, options) {
    var watch = vantOptions.watch, computed = vantOptions.computed;
    if (watch) {
        var props = options.properties || {};
        Object.keys(watch).forEach(function(key) {
            if (key in props) {
                var prop = props[key];
                if (prop === null || !("type" in prop)) {
                    prop = {
                        type: prop
                    };
                }
                prop.observer = watch[key];
                props[key] = prop;
            }
        });
        options.properties = props;
    }
    if (computed) {
        options.behaviors.push(_behavior.behavior);
        options.methods = options.methods || {};
        options.methods.$options = function() {
            return vantOptions;
        };
        if (options.properties) {
            (0, _props.observeProps)(options.properties);
        }
    }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm9ic2VydmUiLCJ2YW50T3B0aW9ucyIsIm9wdGlvbnMiLCJ3YXRjaCIsImNvbXB1dGVkIiwicHJvcHMiLCJwcm9wZXJ0aWVzIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJwcm9wIiwidHlwZSIsIm9ic2VydmVyIiwiYmVoYXZpb3JzIiwicHVzaCIsImJlaGF2aW9yIiwibWV0aG9kcyIsIiRvcHRpb25zIl0sIm1hcHBpbmdzIjoiOzs7OztRQUVnQkEsTyxHQUFBQSxPOztBQUZoQjs7QUFDQTs7QUFDTyxTQUFTQSxPQUFULENBQWlCQyxXQUFqQixFQUE4QkMsT0FBOUIsRUFBdUM7QUFDNUMsTUFBSUMsUUFBUUYsWUFBWUUsS0FBeEI7QUFBQSxNQUNJQyxXQUFXSCxZQUFZRyxRQUQzQjs7QUFHQSxNQUFJRCxLQUFKLEVBQVc7QUFDVCxRQUFJRSxRQUFRSCxRQUFRSSxVQUFSLElBQXNCLEVBQWxDO0FBQ0FDLFdBQU9DLElBQVAsQ0FBWUwsS0FBWixFQUFtQk0sT0FBbkIsQ0FBMkIsVUFBVUMsR0FBVixFQUFlO0FBQ3hDLFVBQUlBLE9BQU9MLEtBQVgsRUFBa0I7QUFDaEIsWUFBSU0sT0FBT04sTUFBTUssR0FBTixDQUFYOztBQUVBLFlBQUlDLFNBQVMsSUFBVCxJQUFpQixFQUFFLFVBQVVBLElBQVosQ0FBckIsRUFBd0M7QUFDdENBLGlCQUFPO0FBQ0xDLGtCQUFNRDtBQURELFdBQVA7QUFHRDs7QUFFREEsYUFBS0UsUUFBTCxHQUFnQlYsTUFBTU8sR0FBTixDQUFoQjtBQUNBTCxjQUFNSyxHQUFOLElBQWFDLElBQWI7QUFDRDtBQUNGLEtBYkQ7QUFjQVQsWUFBUUksVUFBUixHQUFxQkQsS0FBckI7QUFDRDs7QUFFRCxNQUFJRCxRQUFKLEVBQWM7QUFDWkYsWUFBUVksU0FBUixDQUFrQkMsSUFBbEIsQ0FBdUJDLGtCQUF2QjtBQUNBZCxZQUFRZSxPQUFSLEdBQWtCZixRQUFRZSxPQUFSLElBQW1CLEVBQXJDOztBQUVBZixZQUFRZSxPQUFSLENBQWdCQyxRQUFoQixHQUEyQixZQUFZO0FBQ3JDLGFBQU9qQixXQUFQO0FBQ0QsS0FGRDs7QUFJQSxRQUFJQyxRQUFRSSxVQUFaLEVBQXdCO0FBQ3RCLCtCQUFhSixRQUFRSSxVQUFyQjtBQUNEO0FBQ0Y7QUFDRiIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGJlaGF2aW9yIH0gZnJvbSAnLi9iZWhhdmlvcic7XHJcbmltcG9ydCB7IG9ic2VydmVQcm9wcyB9IGZyb20gJy4vcHJvcHMnO1xyXG5leHBvcnQgZnVuY3Rpb24gb2JzZXJ2ZSh2YW50T3B0aW9ucywgb3B0aW9ucykge1xyXG4gIHZhciB3YXRjaCA9IHZhbnRPcHRpb25zLndhdGNoLFxyXG4gICAgICBjb21wdXRlZCA9IHZhbnRPcHRpb25zLmNvbXB1dGVkO1xyXG5cclxuICBpZiAod2F0Y2gpIHtcclxuICAgIHZhciBwcm9wcyA9IG9wdGlvbnMucHJvcGVydGllcyB8fCB7fTtcclxuICAgIE9iamVjdC5rZXlzKHdhdGNoKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgICAgaWYgKGtleSBpbiBwcm9wcykge1xyXG4gICAgICAgIHZhciBwcm9wID0gcHJvcHNba2V5XTtcclxuXHJcbiAgICAgICAgaWYgKHByb3AgPT09IG51bGwgfHwgISgndHlwZScgaW4gcHJvcCkpIHtcclxuICAgICAgICAgIHByb3AgPSB7XHJcbiAgICAgICAgICAgIHR5cGU6IHByb3BcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwcm9wLm9ic2VydmVyID0gd2F0Y2hba2V5XTtcclxuICAgICAgICBwcm9wc1trZXldID0gcHJvcDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICBvcHRpb25zLnByb3BlcnRpZXMgPSBwcm9wcztcclxuICB9XHJcblxyXG4gIGlmIChjb21wdXRlZCkge1xyXG4gICAgb3B0aW9ucy5iZWhhdmlvcnMucHVzaChiZWhhdmlvcik7XHJcbiAgICBvcHRpb25zLm1ldGhvZHMgPSBvcHRpb25zLm1ldGhvZHMgfHwge307XHJcblxyXG4gICAgb3B0aW9ucy5tZXRob2RzLiRvcHRpb25zID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICByZXR1cm4gdmFudE9wdGlvbnM7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChvcHRpb25zLnByb3BlcnRpZXMpIHtcclxuICAgICAgb2JzZXJ2ZVByb3BzKG9wdGlvbnMucHJvcGVydGllcyk7XHJcbiAgICB9XHJcbiAgfVxyXG59Il19