Object.defineProperty(exports, "__esModule", {
    value: true
});

var transition = exports.transition = function transition(showDefaultValue) {
    return Behavior({
        properties: {
            customStyle: String,
            show: {
                type: Boolean,
                value: showDefaultValue,
                observer: "observeShow"
            },
            duration: {
                type: Number,
                value: 300
            }
        },
        data: {
            type: "",
            inited: false,
            display: false
        },
        attached: function attached() {
            if (this.data.show) {
                this.show();
            }
        },
        methods: {
            observeShow: function observeShow(value) {
                if (value) {
                    this.show();
                } else {
                    this.setData({
                        type: "leave"
                    });
                }
            },
            show: function show() {
                this.setData({
                    inited: true,
                    display: true,
                    type: "enter"
                });
            },
            onAnimationEnd: function onAnimationEnd() {
                if (!this.data.show) {
                    this.setData({
                        display: false
                    });
                }
            }
        }
    });
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zaXRpb24uanMiXSwibmFtZXMiOlsidHJhbnNpdGlvbiIsInNob3dEZWZhdWx0VmFsdWUiLCJCZWhhdmlvciIsInByb3BlcnRpZXMiLCJjdXN0b21TdHlsZSIsIlN0cmluZyIsInNob3ciLCJ0eXBlIiwiQm9vbGVhbiIsInZhbHVlIiwib2JzZXJ2ZXIiLCJkdXJhdGlvbiIsIk51bWJlciIsImRhdGEiLCJpbml0ZWQiLCJkaXNwbGF5IiwiYXR0YWNoZWQiLCJtZXRob2RzIiwib2JzZXJ2ZVNob3ciLCJzZXREYXRhIiwib25BbmltYXRpb25FbmQiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsa0NBQWEsU0FBU0EsVUFBVCxDQUFvQkMsZ0JBQXBCLEVBQXNDO0FBQzVELFNBQU9DLFNBQVM7QUFDZEMsZ0JBQVk7QUFDVkMsbUJBQWFDLE1BREg7QUFFVkMsWUFBTTtBQUNKQyxjQUFNQyxPQURGO0FBRUpDLGVBQU9SLGdCQUZIO0FBR0pTLGtCQUFVO0FBSE4sT0FGSTtBQU9WQyxnQkFBVTtBQUNSSixjQUFNSyxNQURFO0FBRVJILGVBQU87QUFGQztBQVBBLEtBREU7QUFhZEksVUFBTTtBQUNKTixZQUFNLEVBREY7QUFFSk8sY0FBUSxLQUZKO0FBR0pDLGVBQVM7QUFITCxLQWJRO0FBa0JkQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsVUFBSSxLQUFLSCxJQUFMLENBQVVQLElBQWQsRUFBb0I7QUFDbEIsYUFBS0EsSUFBTDtBQUNEO0FBQ0YsS0F0QmE7QUF1QmRXLGFBQVM7QUFDUEMsbUJBQWEsU0FBU0EsV0FBVCxDQUFxQlQsS0FBckIsRUFBNEI7QUFDdkMsWUFBSUEsS0FBSixFQUFXO0FBQ1QsZUFBS0gsSUFBTDtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUthLE9BQUwsQ0FBYTtBQUNYWixrQkFBTTtBQURLLFdBQWI7QUFHRDtBQUNGLE9BVE07QUFVUEQsWUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLGFBQUthLE9BQUwsQ0FBYTtBQUNYTCxrQkFBUSxJQURHO0FBRVhDLG1CQUFTLElBRkU7QUFHWFIsZ0JBQU07QUFISyxTQUFiO0FBS0QsT0FoQk07QUFpQlBhLHNCQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFlBQUksQ0FBQyxLQUFLUCxJQUFMLENBQVVQLElBQWYsRUFBcUI7QUFDbkIsZUFBS2EsT0FBTCxDQUFhO0FBQ1hKLHFCQUFTO0FBREUsV0FBYjtBQUdEO0FBQ0Y7QUF2Qk07QUF2QkssR0FBVCxDQUFQO0FBaURELENBbERNIiwiZmlsZSI6InRyYW5zaXRpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIHRyYW5zaXRpb24gPSBmdW5jdGlvbiB0cmFuc2l0aW9uKHNob3dEZWZhdWx0VmFsdWUpIHtcclxuICByZXR1cm4gQmVoYXZpb3Ioe1xyXG4gICAgcHJvcGVydGllczoge1xyXG4gICAgICBjdXN0b21TdHlsZTogU3RyaW5nLFxyXG4gICAgICBzaG93OiB7XHJcbiAgICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgICB2YWx1ZTogc2hvd0RlZmF1bHRWYWx1ZSxcclxuICAgICAgICBvYnNlcnZlcjogJ29ic2VydmVTaG93J1xyXG4gICAgICB9LFxyXG4gICAgICBkdXJhdGlvbjoge1xyXG4gICAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgICB2YWx1ZTogMzAwXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhOiB7XHJcbiAgICAgIHR5cGU6ICcnLFxyXG4gICAgICBpbml0ZWQ6IGZhbHNlLFxyXG4gICAgICBkaXNwbGF5OiBmYWxzZVxyXG4gICAgfSxcclxuICAgIGF0dGFjaGVkOiBmdW5jdGlvbiBhdHRhY2hlZCgpIHtcclxuICAgICAgaWYgKHRoaXMuZGF0YS5zaG93KSB7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG9ic2VydmVTaG93OiBmdW5jdGlvbiBvYnNlcnZlU2hvdyh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIHR5cGU6ICdsZWF2ZSdcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2hvdzogZnVuY3Rpb24gc2hvdygpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgaW5pdGVkOiB0cnVlLFxyXG4gICAgICAgICAgZGlzcGxheTogdHJ1ZSxcclxuICAgICAgICAgIHR5cGU6ICdlbnRlcidcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25BbmltYXRpb25FbmQ6IGZ1bmN0aW9uIG9uQW5pbWF0aW9uRW5kKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5kYXRhLnNob3cpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KTtcclxufTsiXX0=