var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    props: {
        inactive: Boolean,
        percentage: Number,
        pivotText: String,
        pivotColor: String,
        showPivot: {
            type: Boolean,
            value: true
        },
        color: {
            type: String,
            value: "#38f"
        },
        textColor: {
            type: String,
            value: "#fff"
        }
    },
    data: {
        pivotWidth: 0,
        progressWidth: 0
    },
    watch: {
        pivotText: "getWidth",
        showPivot: "getWidth"
    },
    computed: {
        portionStyle: function portionStyle() {
            var width = (this.data.progressWidth - this.data.pivotWidth) * this.data.percentage / 100 + "px";
            var background = this.getCurrentColor();
            return "width: " + width + "; background: " + background + "; ";
        },
        pivotStyle: function pivotStyle() {
            var color = this.data.textColor;
            var background = this.data.pivotColor || this.getCurrentColor();
            return "color: " + color + "; background: " + background;
        },
        text: function text() {
            return this.data.pivotText || this.data.percentage + "%";
        }
    },
    mounted: function mounted() {
        this.getWidth();
    },
    methods: {
        getCurrentColor: function getCurrentColor() {
            return this.data.inactive ? "#cacaca" : this.data.color;
        },
        getWidth: function getWidth() {
            var _this = this;
            this.getRect(".van-progress").then(function(rect) {
                _this.setData({
                    progressWidth: rect.width
                });
            });
            this.getRect(".van-progress__pivot").then(function(rect) {
                _this.setData({
                    pivotWidth: rect.width || 0
                });
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5hY3RpdmUiLCJCb29sZWFuIiwicGVyY2VudGFnZSIsIk51bWJlciIsInBpdm90VGV4dCIsIlN0cmluZyIsInBpdm90Q29sb3IiLCJzaG93UGl2b3QiLCJ0eXBlIiwidmFsdWUiLCJjb2xvciIsInRleHRDb2xvciIsImRhdGEiLCJwaXZvdFdpZHRoIiwicHJvZ3Jlc3NXaWR0aCIsIndhdGNoIiwiY29tcHV0ZWQiLCJwb3J0aW9uU3R5bGUiLCJ3aWR0aCIsImJhY2tncm91bmQiLCJnZXRDdXJyZW50Q29sb3IiLCJwaXZvdFN0eWxlIiwidGV4dCIsIm1vdW50ZWQiLCJnZXRXaWR0aCIsIm1ldGhvZHMiLCJfdGhpcyIsImdldFJlY3QiLCJ0aGVuIiwicmVjdCIsInNldERhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0EsOEJBQWM7QUFDWkEsU0FBTztBQUNMQyxjQUFVQyxPQURMO0FBRUxDLGdCQUFZQyxNQUZQO0FBR0xDLGVBQVdDLE1BSE47QUFJTEMsZ0JBQVlELE1BSlA7QUFLTEUsZUFBVztBQUNUQyxZQUFNUCxPQURHO0FBRVRRLGFBQU87QUFGRSxLQUxOO0FBU0xDLFdBQU87QUFDTEYsWUFBTUgsTUFERDtBQUVMSSxhQUFPO0FBRkYsS0FURjtBQWFMRSxlQUFXO0FBQ1RILFlBQU1ILE1BREc7QUFFVEksYUFBTztBQUZFO0FBYk4sR0FESztBQW1CWkcsUUFBTTtBQUNKQyxnQkFBWSxDQURSO0FBRUpDLG1CQUFlO0FBRlgsR0FuQk07QUF1QlpDLFNBQU87QUFDTFgsZUFBVyxVQUROO0FBRUxHLGVBQVc7QUFGTixHQXZCSztBQTJCWlMsWUFBVTtBQUNSQyxrQkFBYyxTQUFTQSxZQUFULEdBQXdCO0FBQ3BDLFVBQUlDLFFBQVEsQ0FBQyxLQUFLTixJQUFMLENBQVVFLGFBQVYsR0FBMEIsS0FBS0YsSUFBTCxDQUFVQyxVQUFyQyxJQUFtRCxLQUFLRCxJQUFMLENBQVVWLFVBQTdELEdBQTBFLEdBQTFFLEdBQWdGLElBQTVGO0FBQ0EsVUFBSWlCLGFBQWEsS0FBS0MsZUFBTCxFQUFqQjtBQUNBLGFBQU8sWUFBWUYsS0FBWixHQUFvQixnQkFBcEIsR0FBdUNDLFVBQXZDLEdBQW9ELElBQTNEO0FBQ0QsS0FMTztBQU1SRSxnQkFBWSxTQUFTQSxVQUFULEdBQXNCO0FBQ2hDLFVBQUlYLFFBQVEsS0FBS0UsSUFBTCxDQUFVRCxTQUF0QjtBQUNBLFVBQUlRLGFBQWEsS0FBS1AsSUFBTCxDQUFVTixVQUFWLElBQXdCLEtBQUtjLGVBQUwsRUFBekM7QUFDQSxhQUFPLFlBQVlWLEtBQVosR0FBb0IsZ0JBQXBCLEdBQXVDUyxVQUE5QztBQUNELEtBVk87QUFXUkcsVUFBTSxTQUFTQSxJQUFULEdBQWdCO0FBQ3BCLGFBQU8sS0FBS1YsSUFBTCxDQUFVUixTQUFWLElBQXVCLEtBQUtRLElBQUwsQ0FBVVYsVUFBVixHQUF1QixHQUFyRDtBQUNEO0FBYk8sR0EzQkU7QUEwQ1pxQixXQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsU0FBS0MsUUFBTDtBQUNELEdBNUNXO0FBNkNaQyxXQUFTO0FBQ1BMLHFCQUFpQixTQUFTQSxlQUFULEdBQTJCO0FBQzFDLGFBQU8sS0FBS1IsSUFBTCxDQUFVWixRQUFWLEdBQXFCLFNBQXJCLEdBQWlDLEtBQUtZLElBQUwsQ0FBVUYsS0FBbEQ7QUFDRCxLQUhNO0FBSVBjLGNBQVUsU0FBU0EsUUFBVCxHQUFvQjtBQUM1QixVQUFJRSxRQUFRLElBQVo7O0FBRUEsV0FBS0MsT0FBTCxDQUFhLGVBQWIsRUFBOEJDLElBQTlCLENBQW1DLFVBQVVDLElBQVYsRUFBZ0I7QUFDakRILGNBQU1JLE9BQU4sQ0FBYztBQUNaaEIseUJBQWVlLEtBQUtYO0FBRFIsU0FBZDtBQUdELE9BSkQ7QUFLQSxXQUFLUyxPQUFMLENBQWEsc0JBQWIsRUFBcUNDLElBQXJDLENBQTBDLFVBQVVDLElBQVYsRUFBZ0I7QUFDeERILGNBQU1JLE9BQU4sQ0FBYztBQUNaakIsc0JBQVlnQixLQUFLWCxLQUFMLElBQWM7QUFEZCxTQUFkO0FBR0QsT0FKRDtBQUtEO0FBakJNO0FBN0NHLENBQWQiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBWYW50Q29tcG9uZW50IH0gZnJvbSAnLi4vY29tbW9uL2NvbXBvbmVudCc7XHJcblZhbnRDb21wb25lbnQoe1xyXG4gIHByb3BzOiB7XHJcbiAgICBpbmFjdGl2ZTogQm9vbGVhbixcclxuICAgIHBlcmNlbnRhZ2U6IE51bWJlcixcclxuICAgIHBpdm90VGV4dDogU3RyaW5nLFxyXG4gICAgcGl2b3RDb2xvcjogU3RyaW5nLFxyXG4gICAgc2hvd1Bpdm90OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY29sb3I6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJyMzOGYnXHJcbiAgICB9LFxyXG4gICAgdGV4dENvbG9yOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcjZmZmJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgcGl2b3RXaWR0aDogMCxcclxuICAgIHByb2dyZXNzV2lkdGg6IDBcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBwaXZvdFRleHQ6ICdnZXRXaWR0aCcsXHJcbiAgICBzaG93UGl2b3Q6ICdnZXRXaWR0aCdcclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwb3J0aW9uU3R5bGU6IGZ1bmN0aW9uIHBvcnRpb25TdHlsZSgpIHtcclxuICAgICAgdmFyIHdpZHRoID0gKHRoaXMuZGF0YS5wcm9ncmVzc1dpZHRoIC0gdGhpcy5kYXRhLnBpdm90V2lkdGgpICogdGhpcy5kYXRhLnBlcmNlbnRhZ2UgLyAxMDAgKyAncHgnO1xyXG4gICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XHJcbiAgICAgIHJldHVybiBcIndpZHRoOiBcIiArIHdpZHRoICsgXCI7IGJhY2tncm91bmQ6IFwiICsgYmFja2dyb3VuZCArIFwiOyBcIjtcclxuICAgIH0sXHJcbiAgICBwaXZvdFN0eWxlOiBmdW5jdGlvbiBwaXZvdFN0eWxlKCkge1xyXG4gICAgICB2YXIgY29sb3IgPSB0aGlzLmRhdGEudGV4dENvbG9yO1xyXG4gICAgICB2YXIgYmFja2dyb3VuZCA9IHRoaXMuZGF0YS5waXZvdENvbG9yIHx8IHRoaXMuZ2V0Q3VycmVudENvbG9yKCk7XHJcbiAgICAgIHJldHVybiBcImNvbG9yOiBcIiArIGNvbG9yICsgXCI7IGJhY2tncm91bmQ6IFwiICsgYmFja2dyb3VuZDtcclxuICAgIH0sXHJcbiAgICB0ZXh0OiBmdW5jdGlvbiB0ZXh0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy5kYXRhLnBpdm90VGV4dCB8fCB0aGlzLmRhdGEucGVyY2VudGFnZSArICclJztcclxuICAgIH1cclxuICB9LFxyXG4gIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldFdpZHRoKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRDdXJyZW50Q29sb3I6IGZ1bmN0aW9uIGdldEN1cnJlbnRDb2xvcigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5pbmFjdGl2ZSA/ICcjY2FjYWNhJyA6IHRoaXMuZGF0YS5jb2xvcjtcclxuICAgIH0sXHJcbiAgICBnZXRXaWR0aDogZnVuY3Rpb24gZ2V0V2lkdGgoKSB7XHJcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XHJcblxyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tcHJvZ3Jlc3MnKS50aGVuKGZ1bmN0aW9uIChyZWN0KSB7XHJcbiAgICAgICAgX3RoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgICBwcm9ncmVzc1dpZHRoOiByZWN0LndpZHRoXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmdldFJlY3QoJy52YW4tcHJvZ3Jlc3NfX3Bpdm90JykudGhlbihmdW5jdGlvbiAocmVjdCkge1xyXG4gICAgICAgIF90aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgcGl2b3RXaWR0aDogcmVjdC53aWR0aCB8fCAwXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19