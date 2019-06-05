var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    props: {
        show: Boolean,
        mask: Boolean,
        message: String,
        forbidClick: Boolean,
        zIndex: {
            type: Number,
            value: 1e3
        },
        type: {
            type: String,
            value: "text"
        },
        loadingType: {
            type: String,
            value: "circular"
        },
        position: {
            type: String,
            value: "middle"
        }
    },
    methods: {
        clear: function clear() {
            this.setData({
                show: false
            });
        },
        // for prevent touchmove
        noop: function noop() {}
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwic2hvdyIsIkJvb2xlYW4iLCJtYXNrIiwibWVzc2FnZSIsIlN0cmluZyIsImZvcmJpZENsaWNrIiwiekluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwibG9hZGluZ1R5cGUiLCJwb3NpdGlvbiIsIm1ldGhvZHMiLCJjbGVhciIsInNldERhdGEiLCJub29wIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU87QUFDTEMsVUFBTUMsT0FERDtBQUVMQyxVQUFNRCxPQUZEO0FBR0xFLGFBQVNDLE1BSEo7QUFJTEMsaUJBQWFKLE9BSlI7QUFLTEssWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQUxIO0FBU0xGLFVBQU07QUFDSkEsWUFBTUgsTUFERjtBQUVKSyxhQUFPO0FBRkgsS0FURDtBQWFMQyxpQkFBYTtBQUNYSCxZQUFNSCxNQURLO0FBRVhLLGFBQU87QUFGSSxLQWJSO0FBaUJMRSxjQUFVO0FBQ1JKLFlBQU1ILE1BREU7QUFFUkssYUFBTztBQUZDO0FBakJMLEdBREs7QUF1QlpHLFdBQVM7QUFDUEMsV0FBTyxTQUFTQSxLQUFULEdBQWlCO0FBQ3RCLFdBQUtDLE9BQUwsQ0FBYTtBQUNYZCxjQUFNO0FBREssT0FBYjtBQUdELEtBTE07QUFNUDtBQUNBZSxVQUFNLFNBQVNBLElBQVQsR0FBZ0IsQ0FBRTtBQVBqQjtBQXZCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBwcm9wczoge1xyXG4gICAgc2hvdzogQm9vbGVhbixcclxuICAgIG1hc2s6IEJvb2xlYW4sXHJcbiAgICBtZXNzYWdlOiBTdHJpbmcsXHJcbiAgICBmb3JiaWRDbGljazogQm9vbGVhbixcclxuICAgIHpJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAxMDAwXHJcbiAgICB9LFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAndGV4dCdcclxuICAgIH0sXHJcbiAgICBsb2FkaW5nVHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAnY2lyY3VsYXInXHJcbiAgICB9LFxyXG4gICAgcG9zaXRpb246IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ21pZGRsZSdcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyBmb3IgcHJldmVudCB0b3VjaG1vdmVcclxuICAgIG5vb3A6IGZ1bmN0aW9uIG5vb3AoKSB7fVxyXG4gIH1cclxufSk7Il19