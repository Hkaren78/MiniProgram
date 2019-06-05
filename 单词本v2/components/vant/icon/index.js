var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    props: {
        info: null,
        name: String,
        size: String,
        color: String,
        customStyle: String,
        classPrefix: {
            type: String,
            value: "van-icon"
        }
    },
    methods: {
        onClick: function onClick() {
            this.$emit("click");
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInByb3BzIiwiaW5mbyIsIm5hbWUiLCJTdHJpbmciLCJzaXplIiwiY29sb3IiLCJjdXN0b21TdHlsZSIsImNsYXNzUHJlZml4IiwidHlwZSIsInZhbHVlIiwibWV0aG9kcyIsIm9uQ2xpY2siLCIkZW1pdCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPO0FBQ0xDLFVBQU0sSUFERDtBQUVMQyxVQUFNQyxNQUZEO0FBR0xDLFVBQU1ELE1BSEQ7QUFJTEUsV0FBT0YsTUFKRjtBQUtMRyxpQkFBYUgsTUFMUjtBQU1MSSxpQkFBYTtBQUNYQyxZQUFNTCxNQURLO0FBRVhNLGFBQU87QUFGSTtBQU5SLEdBREs7QUFZWkMsV0FBUztBQUNQQyxhQUFTLFNBQVNBLE9BQVQsR0FBbUI7QUFDMUIsV0FBS0MsS0FBTCxDQUFXLE9BQVg7QUFDRDtBQUhNO0FBWkcsQ0FBZCIsImZpbGUiOiJpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFZhbnRDb21wb25lbnQgfSBmcm9tICcuLi9jb21tb24vY29tcG9uZW50JztcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIGluZm86IG51bGwsXHJcbiAgICBuYW1lOiBTdHJpbmcsXHJcbiAgICBzaXplOiBTdHJpbmcsXHJcbiAgICBjb2xvcjogU3RyaW5nLFxyXG4gICAgY3VzdG9tU3R5bGU6IFN0cmluZyxcclxuICAgIGNsYXNzUHJlZml4OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICd2YW4taWNvbidcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2xpY2s6IGZ1bmN0aW9uIG9uQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=