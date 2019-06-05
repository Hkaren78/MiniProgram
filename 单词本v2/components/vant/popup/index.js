var _component = require("./../common/component.js");

var _transition = require("./../mixins/transition.js");

(0, _component.VantComponent)({
    mixins: [ (0, _transition.transition)(false) ],
    props: {
        transition: String,
        customStyle: String,
        overlayStyle: String,
        zIndex: {
            type: Number,
            value: 100
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: true
        },
        position: {
            type: String,
            value: "center"
        }
    },
    methods: {
        onClickOverlay: function onClickOverlay() {
            this.$emit("click-overlay");
            if (this.data.closeOnClickOverlay) {
                this.$emit("close");
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsInByb3BzIiwidHJhbnNpdGlvbiIsIlN0cmluZyIsImN1c3RvbVN0eWxlIiwib3ZlcmxheVN0eWxlIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwib3ZlcmxheSIsIkJvb2xlYW4iLCJjbG9zZU9uQ2xpY2tPdmVybGF5IiwicG9zaXRpb24iLCJtZXRob2RzIiwib25DbGlja092ZXJsYXkiLCIkZW1pdCIsImRhdGEiXSwibWFwcGluZ3MiOiI7O0FBQUE7O0FBQ0E7O0FBQ0EsOEJBQWM7QUFDWkEsVUFBUSxDQUFDLDRCQUFXLEtBQVgsQ0FBRCxDQURJO0FBRVpDLFNBQU87QUFDTEMsZ0JBQVlDLE1BRFA7QUFFTEMsaUJBQWFELE1BRlI7QUFHTEUsa0JBQWNGLE1BSFQ7QUFJTEcsWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUpIO0FBUUxDLGFBQVM7QUFDUEgsWUFBTUksT0FEQztBQUVQRixhQUFPO0FBRkEsS0FSSjtBQVlMRyx5QkFBcUI7QUFDbkJMLFlBQU1JLE9BRGE7QUFFbkJGLGFBQU87QUFGWSxLQVpoQjtBQWdCTEksY0FBVTtBQUNSTixZQUFNSixNQURFO0FBRVJNLGFBQU87QUFGQztBQWhCTCxHQUZLO0FBdUJaSyxXQUFTO0FBQ1BDLG9CQUFnQixTQUFTQSxjQUFULEdBQTBCO0FBQ3hDLFdBQUtDLEtBQUwsQ0FBVyxlQUFYOztBQUVBLFVBQUksS0FBS0MsSUFBTCxDQUFVTCxtQkFBZCxFQUFtQztBQUNqQyxhQUFLSSxLQUFMLENBQVcsT0FBWDtBQUNEO0FBQ0Y7QUFQTTtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyB0cmFuc2l0aW9uIH0gZnJvbSAnLi4vbWl4aW5zL3RyYW5zaXRpb24nO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBtaXhpbnM6IFt0cmFuc2l0aW9uKGZhbHNlKV0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHRyYW5zaXRpb246IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICBvdmVybGF5U3R5bGU6IFN0cmluZyxcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxMDBcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHBvc2l0aW9uOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICdjZW50ZXInXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gb25DbGlja092ZXJsYXkoKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLW92ZXJsYXknKTtcclxuXHJcbiAgICAgIGlmICh0aGlzLmRhdGEuY2xvc2VPbkNsaWNrT3ZlcmxheSkge1xyXG4gICAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==