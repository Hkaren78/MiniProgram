var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    relation: {
        name: "tabbar-item",
        type: "descendant",
        linked: function linked(target) {
            var _this = this;
            this.data.items.push(target);
            setTimeout(function() {
                _this.setActiveItem();
            });
        },
        unlinked: function unlinked(target) {
            var _this2 = this;
            this.data.items = this.data.items.filter(function(item) {
                return item !== target;
            });
            setTimeout(function() {
                _this2.setActiveItem();
            });
        }
    },
    props: {
        active: Number,
        fixed: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 1
        }
    },
    data: {
        items: [],
        currentActive: -1
    },
    watch: {
        active: function active(_active) {
            this.setData({
                currentActive: _active
            });
            this.setActiveItem();
        }
    },
    created: function created() {
        this.setData({
            currentActive: this.data.active
        });
    },
    methods: {
        setActiveItem: function setActiveItem() {
            var _this3 = this;
            this.data.items.forEach(function(item, index) {
                item.setActive({
                    active: index === _this3.data.currentActive,
                    count: _this3.data.items.length
                });
            });
        },
        onChange: function onChange(child) {
            var active = this.data.items.indexOf(child);
            if (active !== this.data.currentActive && active !== -1) {
                this.$emit("change", active);
                this.setData({
                    currentActive: active
                });
                this.setActiveItem();
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJfdGhpcyIsImRhdGEiLCJpdGVtcyIsInB1c2giLCJzZXRUaW1lb3V0Iiwic2V0QWN0aXZlSXRlbSIsInVubGlua2VkIiwiX3RoaXMyIiwiZmlsdGVyIiwiaXRlbSIsInByb3BzIiwiYWN0aXZlIiwiTnVtYmVyIiwiZml4ZWQiLCJCb29sZWFuIiwidmFsdWUiLCJ6SW5kZXgiLCJjdXJyZW50QWN0aXZlIiwid2F0Y2giLCJfYWN0aXZlIiwic2V0RGF0YSIsImNyZWF0ZWQiLCJtZXRob2RzIiwiX3RoaXMzIiwiZm9yRWFjaCIsImluZGV4Iiwic2V0QWN0aXZlIiwiY291bnQiLCJsZW5ndGgiLCJvbkNoYW5nZSIsImNoaWxkIiwiaW5kZXhPZiIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFlBQVU7QUFDUkMsVUFBTSxhQURFO0FBRVJDLFVBQU0sWUFGRTtBQUdSQyxZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JDLE1BQWhCLEVBQXdCO0FBQzlCLFVBQUlDLFFBQVEsSUFBWjs7QUFFQSxXQUFLQyxJQUFMLENBQVVDLEtBQVYsQ0FBZ0JDLElBQWhCLENBQXFCSixNQUFyQjtBQUNBSyxpQkFBVyxZQUFZO0FBQ3JCSixjQUFNSyxhQUFOO0FBQ0QsT0FGRDtBQUdELEtBVk87QUFXUkMsY0FBVSxTQUFTQSxRQUFULENBQWtCUCxNQUFsQixFQUEwQjtBQUNsQyxVQUFJUSxTQUFTLElBQWI7O0FBRUEsV0FBS04sSUFBTCxDQUFVQyxLQUFWLEdBQWtCLEtBQUtELElBQUwsQ0FBVUMsS0FBVixDQUFnQk0sTUFBaEIsQ0FBdUIsVUFBVUMsSUFBVixFQUFnQjtBQUN2RCxlQUFPQSxTQUFTVixNQUFoQjtBQUNELE9BRmlCLENBQWxCO0FBR0FLLGlCQUFXLFlBQVk7QUFDckJHLGVBQU9GLGFBQVA7QUFDRCxPQUZEO0FBR0Q7QUFwQk8sR0FERTtBQXVCWkssU0FBTztBQUNMQyxZQUFRQyxNQURIO0FBRUxDLFdBQU87QUFDTGhCLFlBQU1pQixPQUREO0FBRUxDLGFBQU87QUFGRixLQUZGO0FBTUxDLFlBQVE7QUFDTm5CLFlBQU1lLE1BREE7QUFFTkcsYUFBTztBQUZEO0FBTkgsR0F2Qks7QUFrQ1pkLFFBQU07QUFDSkMsV0FBTyxFQURIO0FBRUplLG1CQUFlLENBQUM7QUFGWixHQWxDTTtBQXNDWkMsU0FBTztBQUNMUCxZQUFRLFNBQVNBLE1BQVQsQ0FBZ0JRLE9BQWhCLEVBQXlCO0FBQy9CLFdBQUtDLE9BQUwsQ0FBYTtBQUNYSCx1QkFBZUU7QUFESixPQUFiO0FBR0EsV0FBS2QsYUFBTDtBQUNEO0FBTkksR0F0Q0s7QUE4Q1pnQixXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0QsT0FBTCxDQUFhO0FBQ1hILHFCQUFlLEtBQUtoQixJQUFMLENBQVVVO0FBRGQsS0FBYjtBQUdELEdBbERXO0FBbURaVyxXQUFTO0FBQ1BqQixtQkFBZSxTQUFTQSxhQUFULEdBQXlCO0FBQ3RDLFVBQUlrQixTQUFTLElBQWI7O0FBRUEsV0FBS3RCLElBQUwsQ0FBVUMsS0FBVixDQUFnQnNCLE9BQWhCLENBQXdCLFVBQVVmLElBQVYsRUFBZ0JnQixLQUFoQixFQUF1QjtBQUM3Q2hCLGFBQUtpQixTQUFMLENBQWU7QUFDYmYsa0JBQVFjLFVBQVVGLE9BQU90QixJQUFQLENBQVlnQixhQURqQjtBQUViVSxpQkFBT0osT0FBT3RCLElBQVAsQ0FBWUMsS0FBWixDQUFrQjBCO0FBRlosU0FBZjtBQUlELE9BTEQ7QUFNRCxLQVZNO0FBV1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsVUFBSW5CLFNBQVMsS0FBS1YsSUFBTCxDQUFVQyxLQUFWLENBQWdCNkIsT0FBaEIsQ0FBd0JELEtBQXhCLENBQWI7O0FBRUEsVUFBSW5CLFdBQVcsS0FBS1YsSUFBTCxDQUFVZ0IsYUFBckIsSUFBc0NOLFdBQVcsQ0FBQyxDQUF0RCxFQUF5RDtBQUN2RCxhQUFLcUIsS0FBTCxDQUFXLFFBQVgsRUFBcUJyQixNQUFyQjtBQUNBLGFBQUtTLE9BQUwsQ0FBYTtBQUNYSCx5QkFBZU47QUFESixTQUFiO0FBR0EsYUFBS04sYUFBTDtBQUNEO0FBQ0Y7QUFyQk07QUFuREcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICd0YWJiYXItaXRlbScsXHJcbiAgICB0eXBlOiAnZGVzY2VuZGFudCcsXHJcbiAgICBsaW5rZWQ6IGZ1bmN0aW9uIGxpbmtlZCh0YXJnZXQpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5pdGVtcy5wdXNoKHRhcmdldCk7XHJcbiAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIF90aGlzLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdW5saW5rZWQ6IGZ1bmN0aW9uIHVubGlua2VkKHRhcmdldCkge1xyXG4gICAgICB2YXIgX3RoaXMyID0gdGhpcztcclxuXHJcbiAgICAgIHRoaXMuZGF0YS5pdGVtcyA9IHRoaXMuZGF0YS5pdGVtcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICByZXR1cm4gaXRlbSAhPT0gdGFyZ2V0O1xyXG4gICAgICB9KTtcclxuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgX3RoaXMyLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgYWN0aXZlOiBOdW1iZXIsXHJcbiAgICBmaXhlZDoge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9XHJcbiAgfSxcclxuICBkYXRhOiB7XHJcbiAgICBpdGVtczogW10sXHJcbiAgICBjdXJyZW50QWN0aXZlOiAtMVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFjdGl2ZTogZnVuY3Rpb24gYWN0aXZlKF9hY3RpdmUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBjdXJyZW50QWN0aXZlOiBfYWN0aXZlXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnNldEFjdGl2ZUl0ZW0oKTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICBjdXJyZW50QWN0aXZlOiB0aGlzLmRhdGEuYWN0aXZlXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIHNldEFjdGl2ZUl0ZW06IGZ1bmN0aW9uIHNldEFjdGl2ZUl0ZW0oKSB7XHJcbiAgICAgIHZhciBfdGhpczMgPSB0aGlzO1xyXG5cclxuICAgICAgdGhpcy5kYXRhLml0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XHJcbiAgICAgICAgaXRlbS5zZXRBY3RpdmUoe1xyXG4gICAgICAgICAgYWN0aXZlOiBpbmRleCA9PT0gX3RoaXMzLmRhdGEuY3VycmVudEFjdGl2ZSxcclxuICAgICAgICAgIGNvdW50OiBfdGhpczMuZGF0YS5pdGVtcy5sZW5ndGhcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKGNoaWxkKSB7XHJcbiAgICAgIHZhciBhY3RpdmUgPSB0aGlzLmRhdGEuaXRlbXMuaW5kZXhPZihjaGlsZCk7XHJcblxyXG4gICAgICBpZiAoYWN0aXZlICE9PSB0aGlzLmRhdGEuY3VycmVudEFjdGl2ZSAmJiBhY3RpdmUgIT09IC0xKSB7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgYWN0aXZlKTtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgY3VycmVudEFjdGl2ZTogYWN0aXZlXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVJdGVtKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==