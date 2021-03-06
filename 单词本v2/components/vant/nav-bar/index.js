var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    classes: [ "title-class" ],
    props: {
        title: String,
        leftText: String,
        rightText: String,
        leftArrow: Boolean,
        fixed: Boolean,
        zIndex: {
            type: Number,
            value: 1
        }
    },
    methods: {
        onClickLeft: function onClickLeft() {
            this.$emit("click-left");
        },
        onClickRight: function onClickRight() {
            this.$emit("click-right");
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNsYXNzZXMiLCJwcm9wcyIsInRpdGxlIiwiU3RyaW5nIiwibGVmdFRleHQiLCJyaWdodFRleHQiLCJsZWZ0QXJyb3ciLCJCb29sZWFuIiwiZml4ZWQiLCJ6SW5kZXgiLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtZXRob2RzIiwib25DbGlja0xlZnQiLCIkZW1pdCIsIm9uQ2xpY2tSaWdodCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxXQUFTLENBQUMsYUFBRCxDQURHO0FBRVpDLFNBQU87QUFDTEMsV0FBT0MsTUFERjtBQUVMQyxjQUFVRCxNQUZMO0FBR0xFLGVBQVdGLE1BSE47QUFJTEcsZUFBV0MsT0FKTjtBQUtMQyxXQUFPRCxPQUxGO0FBTUxFLFlBQVE7QUFDTkMsWUFBTUMsTUFEQTtBQUVOQyxhQUFPO0FBRkQ7QUFOSCxHQUZLO0FBYVpDLFdBQVM7QUFDUEMsaUJBQWEsU0FBU0EsV0FBVCxHQUF1QjtBQUNsQyxXQUFLQyxLQUFMLENBQVcsWUFBWDtBQUNELEtBSE07QUFJUEMsa0JBQWMsU0FBU0EsWUFBVCxHQUF3QjtBQUNwQyxXQUFLRCxLQUFMLENBQVcsYUFBWDtBQUNEO0FBTk07QUFiRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBjbGFzc2VzOiBbJ3RpdGxlLWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRpdGxlOiBTdHJpbmcsXHJcbiAgICBsZWZ0VGV4dDogU3RyaW5nLFxyXG4gICAgcmlnaHRUZXh0OiBTdHJpbmcsXHJcbiAgICBsZWZ0QXJyb3c6IEJvb2xlYW4sXHJcbiAgICBmaXhlZDogQm9vbGVhbixcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrTGVmdDogZnVuY3Rpb24gb25DbGlja0xlZnQoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWxlZnQnKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrUmlnaHQ6IGZ1bmN0aW9uIG9uQ2xpY2tSaWdodCgpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2stcmlnaHQnKTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==