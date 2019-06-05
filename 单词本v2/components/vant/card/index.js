var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    classes: [ "thumb-class", "title-class", "price-class", "desc-class", "num-class" ],
    props: {
        tag: String,
        num: String,
        desc: String,
        thumb: String,
        title: String,
        price: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        linkType: {
            type: String,
            value: "navigateTo"
        },
        currency: {
            type: String,
            value: "¥"
        }
    },
    methods: {
        onClickThumb: function onClickThumb() {
            var thumbLink = this.data.thumbLink;
            if (thumbLink) {
                wx[this.data.linkType]({
                    url: thumbLink
                });
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRhZyIsIlN0cmluZyIsIm51bSIsImRlc2MiLCJ0aHVtYiIsInRpdGxlIiwicHJpY2UiLCJjZW50ZXJlZCIsIkJvb2xlYW4iLCJsYXp5TG9hZCIsInRodW1iTGluayIsImxpbmtUeXBlIiwidHlwZSIsInZhbHVlIiwiY3VycmVuY3kiLCJtZXRob2RzIiwib25DbGlja1RodW1iIiwiZGF0YSIsInd4IiwidXJsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFdBQVMsQ0FBQyxhQUFELEVBQWdCLGFBQWhCLEVBQStCLGFBQS9CLEVBQThDLFlBQTlDLEVBQTRELFdBQTVELENBREc7QUFFWkMsU0FBTztBQUNMQyxTQUFLQyxNQURBO0FBRUxDLFNBQUtELE1BRkE7QUFHTEUsVUFBTUYsTUFIRDtBQUlMRyxXQUFPSCxNQUpGO0FBS0xJLFdBQU9KLE1BTEY7QUFNTEssV0FBT0wsTUFORjtBQU9MTSxjQUFVQyxPQVBMO0FBUUxDLGNBQVVELE9BUkw7QUFTTEUsZUFBV1QsTUFUTjtBQVVMVSxjQUFVO0FBQ1JDLFlBQU1YLE1BREU7QUFFUlksYUFBTztBQUZDLEtBVkw7QUFjTEMsY0FBVTtBQUNSRixZQUFNWCxNQURFO0FBRVJZLGFBQU87QUFGQztBQWRMLEdBRks7QUFxQlpFLFdBQVM7QUFDUEMsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxVQUFJTixZQUFZLEtBQUtPLElBQUwsQ0FBVVAsU0FBMUI7O0FBRUEsVUFBSUEsU0FBSixFQUFlO0FBQ2JRLFdBQUcsS0FBS0QsSUFBTCxDQUFVTixRQUFiLEVBQXVCO0FBQ3JCUSxlQUFLVDtBQURnQixTQUF2QjtBQUdEO0FBQ0Y7QUFUTTtBQXJCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ3RodW1iLWNsYXNzJywgJ3RpdGxlLWNsYXNzJywgJ3ByaWNlLWNsYXNzJywgJ2Rlc2MtY2xhc3MnLCAnbnVtLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRhZzogU3RyaW5nLFxyXG4gICAgbnVtOiBTdHJpbmcsXHJcbiAgICBkZXNjOiBTdHJpbmcsXHJcbiAgICB0aHVtYjogU3RyaW5nLFxyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIHByaWNlOiBTdHJpbmcsXHJcbiAgICBjZW50ZXJlZDogQm9vbGVhbixcclxuICAgIGxhenlMb2FkOiBCb29sZWFuLFxyXG4gICAgdGh1bWJMaW5rOiBTdHJpbmcsXHJcbiAgICBsaW5rVHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnbmF2aWdhdGVUbydcclxuICAgIH0sXHJcbiAgICBjdXJyZW5jeToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnwqUnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrVGh1bWI6IGZ1bmN0aW9uIG9uQ2xpY2tUaHVtYigpIHtcclxuICAgICAgdmFyIHRodW1iTGluayA9IHRoaXMuZGF0YS50aHVtYkxpbms7XHJcblxyXG4gICAgICBpZiAodGh1bWJMaW5rKSB7XHJcbiAgICAgICAgd3hbdGhpcy5kYXRhLmxpbmtUeXBlXSh7XHJcbiAgICAgICAgICB1cmw6IHRodW1iTGlua1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=