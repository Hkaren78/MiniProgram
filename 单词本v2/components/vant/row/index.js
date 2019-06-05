var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    relation: {
        name: "col",
        type: "descendant",
        linked: function linked(target) {
            if (this.data.gutter) {
                target.setGutter(this.data.gutter);
            }
        }
    },
    props: {
        gutter: Number
    },
    watch: {
        gutter: "setGutter"
    },
    mounted: function mounted() {
        if (this.data.gutter) {
            this.setGutter();
        }
    },
    methods: {
        setGutter: function setGutter() {
            var _this = this;
            var gutter = this.data.gutter;
            var margin = "-" + Number(gutter) / 2 + "px";
            var style = gutter ? "margin-right: " + margin + "; margin-left: " + margin + ";" : "";
            this.setData({
                style: style
            });
            this.getRelationNodes("../col/index").forEach(function(col) {
                col.setGutter(_this.data.gutter);
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwibmFtZSIsInR5cGUiLCJsaW5rZWQiLCJ0YXJnZXQiLCJkYXRhIiwiZ3V0dGVyIiwic2V0R3V0dGVyIiwicHJvcHMiLCJOdW1iZXIiLCJ3YXRjaCIsIm1vdW50ZWQiLCJtZXRob2RzIiwiX3RoaXMiLCJtYXJnaW4iLCJzdHlsZSIsInNldERhdGEiLCJnZXRSZWxhdGlvbk5vZGVzIiwiZm9yRWFjaCIsImNvbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sS0FERTtBQUVSQyxVQUFNLFlBRkU7QUFHUkMsWUFBUSxTQUFTQSxNQUFULENBQWdCQyxNQUFoQixFQUF3QjtBQUM5QixVQUFJLEtBQUtDLElBQUwsQ0FBVUMsTUFBZCxFQUFzQjtBQUNwQkYsZUFBT0csU0FBUCxDQUFpQixLQUFLRixJQUFMLENBQVVDLE1BQTNCO0FBQ0Q7QUFDRjtBQVBPLEdBREU7QUFVWkUsU0FBTztBQUNMRixZQUFRRztBQURILEdBVks7QUFhWkMsU0FBTztBQUNMSixZQUFRO0FBREgsR0FiSztBQWdCWkssV0FBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFFBQUksS0FBS04sSUFBTCxDQUFVQyxNQUFkLEVBQXNCO0FBQ3BCLFdBQUtDLFNBQUw7QUFDRDtBQUNGLEdBcEJXO0FBcUJaSyxXQUFTO0FBQ1BMLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixVQUFJTSxRQUFRLElBQVo7O0FBRUEsVUFBSVAsU0FBUyxLQUFLRCxJQUFMLENBQVVDLE1BQXZCO0FBQ0EsVUFBSVEsU0FBUyxNQUFNTCxPQUFPSCxNQUFQLElBQWlCLENBQXZCLEdBQTJCLElBQXhDO0FBQ0EsVUFBSVMsUUFBUVQsU0FBUyxtQkFBbUJRLE1BQW5CLEdBQTRCLGlCQUE1QixHQUFnREEsTUFBaEQsR0FBeUQsR0FBbEUsR0FBd0UsRUFBcEY7QUFDQSxXQUFLRSxPQUFMLENBQWE7QUFDWEQsZUFBT0E7QUFESSxPQUFiO0FBR0EsV0FBS0UsZ0JBQUwsQ0FBc0IsY0FBdEIsRUFBc0NDLE9BQXRDLENBQThDLFVBQVVDLEdBQVYsRUFBZTtBQUMzREEsWUFBSVosU0FBSixDQUFjTSxNQUFNUixJQUFOLENBQVdDLE1BQXpCO0FBQ0QsT0FGRDtBQUdEO0FBYk07QUFyQkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcmVsYXRpb246IHtcclxuICAgIG5hbWU6ICdjb2wnLFxyXG4gICAgdHlwZTogJ2Rlc2NlbmRhbnQnLFxyXG4gICAgbGlua2VkOiBmdW5jdGlvbiBsaW5rZWQodGFyZ2V0KSB7XHJcbiAgICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XHJcbiAgICAgICAgdGFyZ2V0LnNldEd1dHRlcih0aGlzLmRhdGEuZ3V0dGVyKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgcHJvcHM6IHtcclxuICAgIGd1dHRlcjogTnVtYmVyXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgZ3V0dGVyOiAnc2V0R3V0dGVyJ1xyXG4gIH0sXHJcbiAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcclxuICAgIGlmICh0aGlzLmRhdGEuZ3V0dGVyKSB7XHJcbiAgICAgIHRoaXMuc2V0R3V0dGVyKCk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBzZXRHdXR0ZXI6IGZ1bmN0aW9uIHNldEd1dHRlcigpIHtcclxuICAgICAgdmFyIF90aGlzID0gdGhpcztcclxuXHJcbiAgICAgIHZhciBndXR0ZXIgPSB0aGlzLmRhdGEuZ3V0dGVyO1xyXG4gICAgICB2YXIgbWFyZ2luID0gXCItXCIgKyBOdW1iZXIoZ3V0dGVyKSAvIDIgKyBcInB4XCI7XHJcbiAgICAgIHZhciBzdHlsZSA9IGd1dHRlciA/IFwibWFyZ2luLXJpZ2h0OiBcIiArIG1hcmdpbiArIFwiOyBtYXJnaW4tbGVmdDogXCIgKyBtYXJnaW4gKyBcIjtcIiA6ICcnO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHN0eWxlOiBzdHlsZVxyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5nZXRSZWxhdGlvbk5vZGVzKCcuLi9jb2wvaW5kZXgnKS5mb3JFYWNoKGZ1bmN0aW9uIChjb2wpIHtcclxuICAgICAgICBjb2wuc2V0R3V0dGVyKF90aGlzLmRhdGEuZ3V0dGVyKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=