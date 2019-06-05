Object.defineProperty(exports, "__esModule", {
    value: true
});

var behavior = exports.behavior = Behavior({
    created: function created() {
        var _this = this;
        if (!this.$options) {
            return;
        }
        var cache = {};
        var setData = this.setData;
        var _this$$options = this.$options(), computed = _this$$options.computed;
        var keys = Object.keys(computed);
        var calcComputed = function calcComputed() {
            var needUpdate = {};
            keys.forEach(function(key) {
                var value = computed[key].call(_this);
                if (cache[key] !== value) {
                    cache[key] = needUpdate[key] = value;
                }
            });
            return needUpdate;
        };
        Object.defineProperty(this, "setData", {
            writable: true
        });
        this.setData = function(data, callback) {
            data && setData.call(_this, data, callback);
            setData.call(_this, calcComputed());
        };
    },
    attached: function attached() {
        this.setData();
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJlaGF2aW9yLmpzIl0sIm5hbWVzIjpbImJlaGF2aW9yIiwiQmVoYXZpb3IiLCJjcmVhdGVkIiwiX3RoaXMiLCIkb3B0aW9ucyIsImNhY2hlIiwic2V0RGF0YSIsIl90aGlzJCRvcHRpb25zIiwiY29tcHV0ZWQiLCJrZXlzIiwiT2JqZWN0IiwiY2FsY0NvbXB1dGVkIiwibmVlZFVwZGF0ZSIsImZvckVhY2giLCJrZXkiLCJ2YWx1ZSIsImNhbGwiLCJkZWZpbmVQcm9wZXJ0eSIsIndyaXRhYmxlIiwiZGF0YSIsImNhbGxiYWNrIiwiYXR0YWNoZWQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsOEJBQVdDLFNBQVM7QUFDN0JDLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixRQUFJQyxRQUFRLElBQVo7O0FBRUEsUUFBSSxDQUFDLEtBQUtDLFFBQVYsRUFBb0I7QUFDbEI7QUFDRDs7QUFFRCxRQUFJQyxRQUFRLEVBQVo7QUFDQSxRQUFJQyxVQUFVLEtBQUtBLE9BQW5COztBQUVBLFFBQUlDLGlCQUFpQixLQUFLSCxRQUFMLEVBQXJCO0FBQUEsUUFDSUksV0FBV0QsZUFBZUMsUUFEOUI7O0FBR0EsUUFBSUMsT0FBT0MsT0FBT0QsSUFBUCxDQUFZRCxRQUFaLENBQVg7O0FBRUEsUUFBSUcsZUFBZSxTQUFTQSxZQUFULEdBQXdCO0FBQ3pDLFVBQUlDLGFBQWEsRUFBakI7QUFDQUgsV0FBS0ksT0FBTCxDQUFhLFVBQVVDLEdBQVYsRUFBZTtBQUMxQixZQUFJQyxRQUFRUCxTQUFTTSxHQUFULEVBQWNFLElBQWQsQ0FBbUJiLEtBQW5CLENBQVo7O0FBRUEsWUFBSUUsTUFBTVMsR0FBTixNQUFlQyxLQUFuQixFQUEwQjtBQUN4QlYsZ0JBQU1TLEdBQU4sSUFBYUYsV0FBV0UsR0FBWCxJQUFrQkMsS0FBL0I7QUFDRDtBQUNGLE9BTkQ7QUFPQSxhQUFPSCxVQUFQO0FBQ0QsS0FWRDs7QUFZQUYsV0FBT08sY0FBUCxDQUFzQixJQUF0QixFQUE0QixTQUE1QixFQUF1QztBQUNyQ0MsZ0JBQVU7QUFEMkIsS0FBdkM7O0FBSUEsU0FBS1osT0FBTCxHQUFlLFVBQVVhLElBQVYsRUFBZ0JDLFFBQWhCLEVBQTBCO0FBQ3ZDRCxjQUFRYixRQUFRVSxJQUFSLENBQWFiLEtBQWIsRUFBb0JnQixJQUFwQixFQUEwQkMsUUFBMUIsQ0FBUjtBQUNBZCxjQUFRVSxJQUFSLENBQWFiLEtBQWIsRUFBb0JRLGNBQXBCO0FBQ0QsS0FIRDtBQUlELEdBcEM0QjtBQXFDN0JVLFlBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixTQUFLZixPQUFMO0FBQ0Q7QUF2QzRCLENBQVQsQ0FBZiIsImZpbGUiOiJiZWhhdmlvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgYmVoYXZpb3IgPSBCZWhhdmlvcih7XHJcbiAgY3JlYXRlZDogZnVuY3Rpb24gY3JlYXRlZCgpIHtcclxuICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgaWYgKCF0aGlzLiRvcHRpb25zKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgY2FjaGUgPSB7fTtcclxuICAgIHZhciBzZXREYXRhID0gdGhpcy5zZXREYXRhO1xyXG5cclxuICAgIHZhciBfdGhpcyQkb3B0aW9ucyA9IHRoaXMuJG9wdGlvbnMoKSxcclxuICAgICAgICBjb21wdXRlZCA9IF90aGlzJCRvcHRpb25zLmNvbXB1dGVkO1xyXG5cclxuICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoY29tcHV0ZWQpO1xyXG5cclxuICAgIHZhciBjYWxjQ29tcHV0ZWQgPSBmdW5jdGlvbiBjYWxjQ29tcHV0ZWQoKSB7XHJcbiAgICAgIHZhciBuZWVkVXBkYXRlID0ge307XHJcbiAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XHJcbiAgICAgICAgdmFyIHZhbHVlID0gY29tcHV0ZWRba2V5XS5jYWxsKF90aGlzKTtcclxuXHJcbiAgICAgICAgaWYgKGNhY2hlW2tleV0gIT09IHZhbHVlKSB7XHJcbiAgICAgICAgICBjYWNoZVtrZXldID0gbmVlZFVwZGF0ZVtrZXldID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIG5lZWRVcGRhdGU7XHJcbiAgICB9O1xyXG5cclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0aGlzLCAnc2V0RGF0YScsIHtcclxuICAgICAgd3JpdGFibGU6IHRydWVcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xyXG4gICAgICBkYXRhICYmIHNldERhdGEuY2FsbChfdGhpcywgZGF0YSwgY2FsbGJhY2spO1xyXG4gICAgICBzZXREYXRhLmNhbGwoX3RoaXMsIGNhbGNDb21wdXRlZCgpKTtcclxuICAgIH07XHJcbiAgfSxcclxuICBhdHRhY2hlZDogZnVuY3Rpb24gYXR0YWNoZWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoKTtcclxuICB9XHJcbn0pOyJdfQ==