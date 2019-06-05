var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    classes: [ "title-class", "label-class", "value-class" ],
    props: {
        title: null,
        value: null,
        url: String,
        icon: String,
        label: String,
        center: Boolean,
        isLink: Boolean,
        required: Boolean,
        clickable: Boolean,
        titleWidth: String,
        customStyle: String,
        linkType: {
            type: String,
            value: "navigateTo"
        },
        border: {
            type: Boolean,
            value: true
        }
    },
    computed: {
        cellClass: function cellClass() {
            var data = this.data;
            return this.classNames("custom-class", "van-cell", {
                "van-cell--center": data.center,
                "van-cell--required": data.required,
                "van-cell--borderless": !data.border,
                "van-cell--clickable": data.isLink || data.clickable
            });
        },
        titleStyle: function titleStyle() {
            var titleWidth = this.data.titleWidth;
            return titleWidth ? "max-width: " + titleWidth + ";min-width: " + titleWidth : "";
        }
    },
    methods: {
        onIconClick: function onIconClick() {
            this.triggerEvent("iconClicked");
        },
        onClick: function onClick() {
            var url = this.data.url;
            if (url) {
                wx[this.data.linkType]({
                    url: url
                });
            }
            this.$emit("click");
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwidmFsdWUiLCJ1cmwiLCJTdHJpbmciLCJpY29uIiwibGFiZWwiLCJjZW50ZXIiLCJCb29sZWFuIiwiaXNMaW5rIiwicmVxdWlyZWQiLCJjbGlja2FibGUiLCJ0aXRsZVdpZHRoIiwiY3VzdG9tU3R5bGUiLCJsaW5rVHlwZSIsInR5cGUiLCJib3JkZXIiLCJjb21wdXRlZCIsImNlbGxDbGFzcyIsImRhdGEiLCJjbGFzc05hbWVzIiwidGl0bGVTdHlsZSIsIm1ldGhvZHMiLCJvbkljb25DbGljayIsInRyaWdnZXJFdmVudCIsIm9uQ2xpY2siLCJ3eCIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFdBQVMsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLENBREc7QUFFWkMsU0FBTztBQUNMQyxXQUFPLElBREY7QUFFTEMsV0FBTyxJQUZGO0FBR0xDLFNBQUtDLE1BSEE7QUFJTEMsVUFBTUQsTUFKRDtBQUtMRSxXQUFPRixNQUxGO0FBTUxHLFlBQVFDLE9BTkg7QUFPTEMsWUFBUUQsT0FQSDtBQVFMRSxjQUFVRixPQVJMO0FBU0xHLGVBQVdILE9BVE47QUFVTEksZ0JBQVlSLE1BVlA7QUFXTFMsaUJBQWFULE1BWFI7QUFZTFUsY0FBVTtBQUNSQyxZQUFNWCxNQURFO0FBRVJGLGFBQU87QUFGQyxLQVpMO0FBZ0JMYyxZQUFRO0FBQ05ELFlBQU1QLE9BREE7QUFFTk4sYUFBTztBQUZEO0FBaEJILEdBRks7QUF1QlplLFlBQVU7QUFDUkMsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFVBQUlDLE9BQU8sS0FBS0EsSUFBaEI7QUFDQSxhQUFPLEtBQUtDLFVBQUwsQ0FBZ0IsY0FBaEIsRUFBZ0MsVUFBaEMsRUFBNEM7QUFDakQsNEJBQW9CRCxLQUFLWixNQUR3QjtBQUVqRCw4QkFBc0JZLEtBQUtULFFBRnNCO0FBR2pELGdDQUF3QixDQUFDUyxLQUFLSCxNQUhtQjtBQUlqRCwrQkFBdUJHLEtBQUtWLE1BQUwsSUFBZVUsS0FBS1I7QUFKTSxPQUE1QyxDQUFQO0FBTUQsS0FUTztBQVVSVSxnQkFBWSxTQUFTQSxVQUFULEdBQXNCO0FBQ2hDLFVBQUlULGFBQWEsS0FBS08sSUFBTCxDQUFVUCxVQUEzQjtBQUNBLGFBQU9BLGFBQWEsZ0JBQWdCQSxVQUFoQixHQUE2QixjQUE3QixHQUE4Q0EsVUFBM0QsR0FBd0UsRUFBL0U7QUFDRDtBQWJPLEdBdkJFO0FBc0NaVSxXQUFTO0FBQ1BDLGlCQUFZLFNBQVNBLFdBQVQsR0FBc0I7QUFDaEMsV0FBS0MsWUFBTCxDQUFrQixhQUFsQjtBQUNELEtBSE07QUFJUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUl0QixNQUFNLEtBQUtnQixJQUFMLENBQVVoQixHQUFwQjs7QUFFQSxVQUFJQSxHQUFKLEVBQVM7QUFDUHVCLFdBQUcsS0FBS1AsSUFBTCxDQUFVTCxRQUFiLEVBQXVCO0FBQ3JCWCxlQUFLQTtBQURnQixTQUF2QjtBQUdEO0FBQ0QsV0FBS3dCLEtBQUwsQ0FBVyxPQUFYO0FBQ0Q7QUFiTTtBQXRDRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ3RpdGxlLWNsYXNzJywgJ2xhYmVsLWNsYXNzJywgJ3ZhbHVlLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRpdGxlOiBudWxsLFxyXG4gICAgdmFsdWU6IG51bGwsXHJcbiAgICB1cmw6IFN0cmluZyxcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICBjZW50ZXI6IEJvb2xlYW4sXHJcbiAgICBpc0xpbms6IEJvb2xlYW4sXHJcbiAgICByZXF1aXJlZDogQm9vbGVhbixcclxuICAgIGNsaWNrYWJsZTogQm9vbGVhbixcclxuICAgIHRpdGxlV2lkdGg6IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICBsaW5rVHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnbmF2aWdhdGVUbydcclxuICAgIH0sXHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBjZWxsQ2xhc3M6IGZ1bmN0aW9uIGNlbGxDbGFzcygpIHtcclxuICAgICAgdmFyIGRhdGEgPSB0aGlzLmRhdGE7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsYXNzTmFtZXMoJ2N1c3RvbS1jbGFzcycsICd2YW4tY2VsbCcsIHtcclxuICAgICAgICAndmFuLWNlbGwtLWNlbnRlcic6IGRhdGEuY2VudGVyLFxyXG4gICAgICAgICd2YW4tY2VsbC0tcmVxdWlyZWQnOiBkYXRhLnJlcXVpcmVkLFxyXG4gICAgICAgICd2YW4tY2VsbC0tYm9yZGVybGVzcyc6ICFkYXRhLmJvcmRlcixcclxuICAgICAgICAndmFuLWNlbGwtLWNsaWNrYWJsZSc6IGRhdGEuaXNMaW5rIHx8IGRhdGEuY2xpY2thYmxlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRpdGxlU3R5bGU6IGZ1bmN0aW9uIHRpdGxlU3R5bGUoKSB7XHJcbiAgICAgIHZhciB0aXRsZVdpZHRoID0gdGhpcy5kYXRhLnRpdGxlV2lkdGg7XHJcbiAgICAgIHJldHVybiB0aXRsZVdpZHRoID8gXCJtYXgtd2lkdGg6IFwiICsgdGl0bGVXaWR0aCArIFwiO21pbi13aWR0aDogXCIgKyB0aXRsZVdpZHRoIDogJyc7XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkljb25DbGljazpmdW5jdGlvbiBvbkljb25DbGljaygpe1xyXG4gICAgICB0aGlzLnRyaWdnZXJFdmVudCgnaWNvbkNsaWNrZWQnKVxyXG4gICAgfSxcclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICAgIHZhciB1cmwgPSB0aGlzLmRhdGEudXJsO1xyXG5cclxuICAgICAgaWYgKHVybCkge1xyXG4gICAgICAgIHd4W3RoaXMuZGF0YS5saW5rVHlwZV0oe1xyXG4gICAgICAgICAgdXJsOiB1cmxcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLiRlbWl0KCdjbGljaycpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19