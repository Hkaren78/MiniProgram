Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.VantComponent = undefined;

var _basic = require("./../mixins/basic.js");

var _index = require("./../mixins/observer/index.js");

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

function mapKeys(source, target, map) {
    Object.keys(map).forEach(function(key) {
        if (source[key]) {
            target[map[key]] = source[key];
        }
    });
}

function VantComponent(vantOptions) {
    var options = {};
    mapKeys(vantOptions, options, {
        data: "data",
        props: "properties",
        mixins: "behaviors",
        methods: "methods",
        beforeCreate: "created",
        created: "attached",
        mounted: "ready",
        relations: "relations",
        destroyed: "detached",
        classes: "externalClasses"
    });
    var relation = vantOptions.relation;
    if (relation) {
        options.relations = Object.assign(options.relations || {}, _defineProperty({}, "../" + relation.name + "/index", relation));
    }
    // add default externalClasses
        options.externalClasses = options.externalClasses || [];
    options.externalClasses.push("custom-class");
    // add default behaviors
        options.behaviors = options.behaviors || [];
    options.behaviors.push(_basic.basic);
    // map field to form-field behavior
        if (vantOptions.field) {
        options.behaviors.push("wx://form-field");
    }
    // add default options
        options.options = {
        multipleSlots: true,
        addGlobalClass: true
    };
    (0, _index.observe)(vantOptions, options);
    Component(options);
}

exports.VantComponent = VantComponent;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudC5qcyJdLCJuYW1lcyI6WyJtYXBLZXlzIiwic291cmNlIiwidGFyZ2V0IiwibWFwIiwiT2JqZWN0Iiwia2V5cyIsImZvckVhY2giLCJrZXkiLCJWYW50Q29tcG9uZW50IiwidmFudE9wdGlvbnMiLCJvcHRpb25zIiwiZGF0YSIsInByb3BzIiwibWl4aW5zIiwibWV0aG9kcyIsImJlZm9yZUNyZWF0ZSIsImNyZWF0ZWQiLCJtb3VudGVkIiwicmVsYXRpb25zIiwiZGVzdHJveWVkIiwiY2xhc3NlcyIsInJlbGF0aW9uIiwiYXNzaWduIiwibmFtZSIsImV4dGVybmFsQ2xhc3NlcyIsInB1c2giLCJiZWhhdmlvcnMiLCJiYXNpYyIsImZpZWxkIiwibXVsdGlwbGVTbG90cyIsImFkZEdsb2JhbENsYXNzIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQ0E7Ozs7QUFFQSxTQUFTQSxPQUFULENBQWlCQyxNQUFqQixFQUF5QkMsTUFBekIsRUFBaUNDLEdBQWpDLEVBQXNDO0FBQ3BDQyxTQUFPQyxJQUFQLENBQVlGLEdBQVosRUFBaUJHLE9BQWpCLENBQXlCLFVBQVVDLEdBQVYsRUFBZTtBQUN0QyxRQUFJTixPQUFPTSxHQUFQLENBQUosRUFBaUI7QUFDZkwsYUFBT0MsSUFBSUksR0FBSixDQUFQLElBQW1CTixPQUFPTSxHQUFQLENBQW5CO0FBQ0Q7QUFDRixHQUpEO0FBS0Q7O0FBRUQsU0FBU0MsYUFBVCxDQUF1QkMsV0FBdkIsRUFBb0M7QUFDbEMsTUFBSUMsVUFBVSxFQUFkO0FBQ0FWLFVBQVFTLFdBQVIsRUFBcUJDLE9BQXJCLEVBQThCO0FBQzVCQyxVQUFNLE1BRHNCO0FBRTVCQyxXQUFPLFlBRnFCO0FBRzVCQyxZQUFRLFdBSG9CO0FBSTVCQyxhQUFTLFNBSm1CO0FBSzVCQyxrQkFBYyxTQUxjO0FBTTVCQyxhQUFTLFVBTm1CO0FBTzVCQyxhQUFTLE9BUG1CO0FBUTVCQyxlQUFXLFdBUmlCO0FBUzVCQyxlQUFXLFVBVGlCO0FBVTVCQyxhQUFTO0FBVm1CLEdBQTlCO0FBWUEsTUFBSUMsV0FBV1osWUFBWVksUUFBM0I7O0FBRUEsTUFBSUEsUUFBSixFQUFjO0FBQ1pYLFlBQVFRLFNBQVIsR0FBb0JkLE9BQU9rQixNQUFQLENBQWNaLFFBQVFRLFNBQVIsSUFBcUIsRUFBbkMsc0JBQ2pCLFFBQVFHLFNBQVNFLElBQWpCLEdBQXdCLFFBRFAsRUFDa0JGLFFBRGxCLEVBQXBCO0FBR0QsR0FwQmlDLENBb0JoQzs7O0FBR0ZYLFVBQVFjLGVBQVIsR0FBMEJkLFFBQVFjLGVBQVIsSUFBMkIsRUFBckQ7QUFDQWQsVUFBUWMsZUFBUixDQUF3QkMsSUFBeEIsQ0FBNkIsY0FBN0IsRUF4QmtDLENBd0JZOztBQUU5Q2YsVUFBUWdCLFNBQVIsR0FBb0JoQixRQUFRZ0IsU0FBUixJQUFxQixFQUF6QztBQUNBaEIsVUFBUWdCLFNBQVIsQ0FBa0JELElBQWxCLENBQXVCRSxZQUF2QixFQTNCa0MsQ0EyQkg7O0FBRS9CLE1BQUlsQixZQUFZbUIsS0FBaEIsRUFBdUI7QUFDckJsQixZQUFRZ0IsU0FBUixDQUFrQkQsSUFBbEIsQ0FBdUIsaUJBQXZCO0FBQ0QsR0EvQmlDLENBK0JoQzs7O0FBR0ZmLFVBQVFBLE9BQVIsR0FBa0I7QUFDaEJtQixtQkFBZSxJQURDO0FBRWhCQyxvQkFBZ0I7QUFGQSxHQUFsQjtBQUlBLHNCQUFRckIsV0FBUixFQUFxQkMsT0FBckI7QUFDQXFCLFlBQVVyQixPQUFWO0FBQ0Q7O1FBRVFGLGEsR0FBQUEsYSIsImZpbGUiOiJjb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBiYXNpYyB9IGZyb20gJy4uL21peGlucy9iYXNpYyc7XHJcbmltcG9ydCB7IG9ic2VydmUgfSBmcm9tICcuLi9taXhpbnMvb2JzZXJ2ZXIvaW5kZXgnO1xyXG5cclxuZnVuY3Rpb24gbWFwS2V5cyhzb3VyY2UsIHRhcmdldCwgbWFwKSB7XHJcbiAgT2JqZWN0LmtleXMobWFwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcclxuICAgIGlmIChzb3VyY2Vba2V5XSkge1xyXG4gICAgICB0YXJnZXRbbWFwW2tleV1dID0gc291cmNlW2tleV07XHJcbiAgICB9XHJcbiAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFZhbnRDb21wb25lbnQodmFudE9wdGlvbnMpIHtcclxuICB2YXIgb3B0aW9ucyA9IHt9O1xyXG4gIG1hcEtleXModmFudE9wdGlvbnMsIG9wdGlvbnMsIHtcclxuICAgIGRhdGE6ICdkYXRhJyxcclxuICAgIHByb3BzOiAncHJvcGVydGllcycsXHJcbiAgICBtaXhpbnM6ICdiZWhhdmlvcnMnLFxyXG4gICAgbWV0aG9kczogJ21ldGhvZHMnLFxyXG4gICAgYmVmb3JlQ3JlYXRlOiAnY3JlYXRlZCcsXHJcbiAgICBjcmVhdGVkOiAnYXR0YWNoZWQnLFxyXG4gICAgbW91bnRlZDogJ3JlYWR5JyxcclxuICAgIHJlbGF0aW9uczogJ3JlbGF0aW9ucycsXHJcbiAgICBkZXN0cm95ZWQ6ICdkZXRhY2hlZCcsXHJcbiAgICBjbGFzc2VzOiAnZXh0ZXJuYWxDbGFzc2VzJ1xyXG4gIH0pO1xyXG4gIHZhciByZWxhdGlvbiA9IHZhbnRPcHRpb25zLnJlbGF0aW9uO1xyXG5cclxuICBpZiAocmVsYXRpb24pIHtcclxuICAgIG9wdGlvbnMucmVsYXRpb25zID0gT2JqZWN0LmFzc2lnbihvcHRpb25zLnJlbGF0aW9ucyB8fCB7fSwge1xyXG4gICAgICBbXCIuLi9cIiArIHJlbGF0aW9uLm5hbWUgKyBcIi9pbmRleFwiXTogcmVsYXRpb25cclxuICAgIH0pO1xyXG4gIH0gLy8gYWRkIGRlZmF1bHQgZXh0ZXJuYWxDbGFzc2VzXHJcblxyXG5cclxuICBvcHRpb25zLmV4dGVybmFsQ2xhc3NlcyA9IG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzIHx8IFtdO1xyXG4gIG9wdGlvbnMuZXh0ZXJuYWxDbGFzc2VzLnB1c2goJ2N1c3RvbS1jbGFzcycpOyAvLyBhZGQgZGVmYXVsdCBiZWhhdmlvcnNcclxuXHJcbiAgb3B0aW9ucy5iZWhhdmlvcnMgPSBvcHRpb25zLmJlaGF2aW9ycyB8fCBbXTtcclxuICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKGJhc2ljKTsgLy8gbWFwIGZpZWxkIHRvIGZvcm0tZmllbGQgYmVoYXZpb3JcclxuXHJcbiAgaWYgKHZhbnRPcHRpb25zLmZpZWxkKSB7XHJcbiAgICBvcHRpb25zLmJlaGF2aW9ycy5wdXNoKCd3eDovL2Zvcm0tZmllbGQnKTtcclxuICB9IC8vIGFkZCBkZWZhdWx0IG9wdGlvbnNcclxuXHJcblxyXG4gIG9wdGlvbnMub3B0aW9ucyA9IHtcclxuICAgIG11bHRpcGxlU2xvdHM6IHRydWUsXHJcbiAgICBhZGRHbG9iYWxDbGFzczogdHJ1ZVxyXG4gIH07XHJcbiAgb2JzZXJ2ZSh2YW50T3B0aW9ucywgb3B0aW9ucyk7XHJcbiAgQ29tcG9uZW50KG9wdGlvbnMpO1xyXG59XHJcblxyXG5leHBvcnQgeyBWYW50Q29tcG9uZW50IH07Il19