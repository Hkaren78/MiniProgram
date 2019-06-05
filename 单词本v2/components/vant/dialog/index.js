var _component = require("./../common/component.js");

var _openType = require("./../mixins/open-type.js");

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}

(0, _component.VantComponent)({
    mixins: [ _openType.openType ],
    props: {
        show: Boolean,
        title: String,
        message: String,
        useSlot: Boolean,
        asyncClose: Boolean,
        showCancelButton: Boolean,
        confirmButtonOpenType: String,
        zIndex: {
            type: Number,
            value: 100
        },
        confirmButtonText: {
            type: String,
            value: "确认"
        },
        cancelButtonText: {
            type: String,
            value: "取消"
        },
        showConfirmButton: {
            type: Boolean,
            value: true
        },
        overlay: {
            type: Boolean,
            value: true
        },
        closeOnClickOverlay: {
            type: Boolean,
            value: false
        }
    },
    data: {
        loading: {
            confirm: false,
            cancel: false
        }
    },
    watch: {
        show: function show(_show) {
            if (!_show) {
                this.setData({
                    loading: {
                        confirm: false,
                        cancel: false
                    }
                });
            }
        }
    },
    methods: {
        onConfirm: function onConfirm() {
            this.handleAction("confirm");
        },
        onCancel: function onCancel() {
            this.handleAction("cancel");
        },
        onClickOverlay: function onClickOverlay() {
            this.onClose("overlay");
        },
        handleAction: function handleAction(action) {
            if (this.data.asyncClose) {
                this.setData(_defineProperty({}, "loading." + action, true));
            }
            this.onClose(action);
        },
        close: function close() {
            this.setData({
                show: false
            });
        },
        onClose: function onClose(action) {
            if (!this.data.asyncClose) {
                this.close();
            }
            this.$emit("close", action);
            this.$emit(action);
            var callback = this.data[action === "confirm" ? "onConfirm" : "onCancel"];
            if (callback) {
                callback(this);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIm1peGlucyIsIm9wZW5UeXBlIiwicHJvcHMiLCJzaG93IiwiQm9vbGVhbiIsInRpdGxlIiwiU3RyaW5nIiwibWVzc2FnZSIsInVzZVNsb3QiLCJhc3luY0Nsb3NlIiwic2hvd0NhbmNlbEJ1dHRvbiIsImNvbmZpcm1CdXR0b25PcGVuVHlwZSIsInpJbmRleCIsInR5cGUiLCJOdW1iZXIiLCJ2YWx1ZSIsImNvbmZpcm1CdXR0b25UZXh0IiwiY2FuY2VsQnV0dG9uVGV4dCIsInNob3dDb25maXJtQnV0dG9uIiwib3ZlcmxheSIsImNsb3NlT25DbGlja092ZXJsYXkiLCJkYXRhIiwibG9hZGluZyIsImNvbmZpcm0iLCJjYW5jZWwiLCJ3YXRjaCIsIl9zaG93Iiwic2V0RGF0YSIsIm1ldGhvZHMiLCJvbkNvbmZpcm0iLCJoYW5kbGVBY3Rpb24iLCJvbkNhbmNlbCIsIm9uQ2xpY2tPdmVybGF5Iiwib25DbG9zZSIsImFjdGlvbiIsImNsb3NlIiwiJGVtaXQiLCJjYWxsYmFjayJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQTs7OztBQUNBLDhCQUFjO0FBQ1pBLFVBQVEsQ0FBQ0Msa0JBQUQsQ0FESTtBQUVaQyxTQUFPO0FBQ0xDLFVBQU1DLE9BREQ7QUFFTEMsV0FBT0MsTUFGRjtBQUdMQyxhQUFTRCxNQUhKO0FBSUxFLGFBQVNKLE9BSko7QUFLTEssZ0JBQVlMLE9BTFA7QUFNTE0sc0JBQWtCTixPQU5iO0FBT0xPLDJCQUF1QkwsTUFQbEI7QUFRTE0sWUFBUTtBQUNOQyxZQUFNQyxNQURBO0FBRU5DLGFBQU87QUFGRCxLQVJIO0FBWUxDLHVCQUFtQjtBQUNqQkgsWUFBTVAsTUFEVztBQUVqQlMsYUFBTztBQUZVLEtBWmQ7QUFnQkxFLHNCQUFrQjtBQUNoQkosWUFBTVAsTUFEVTtBQUVoQlMsYUFBTztBQUZTLEtBaEJiO0FBb0JMRyx1QkFBbUI7QUFDakJMLFlBQU1ULE9BRFc7QUFFakJXLGFBQU87QUFGVSxLQXBCZDtBQXdCTEksYUFBUztBQUNQTixZQUFNVCxPQURDO0FBRVBXLGFBQU87QUFGQSxLQXhCSjtBQTRCTEsseUJBQXFCO0FBQ25CUCxZQUFNVCxPQURhO0FBRW5CVyxhQUFPO0FBRlk7QUE1QmhCLEdBRks7QUFtQ1pNLFFBQU07QUFDSkMsYUFBUztBQUNQQyxlQUFTLEtBREY7QUFFUEMsY0FBUTtBQUZEO0FBREwsR0FuQ007QUF5Q1pDLFNBQU87QUFDTHRCLFVBQU0sU0FBU0EsSUFBVCxDQUFjdUIsS0FBZCxFQUFxQjtBQUN6QixVQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNWLGFBQUtDLE9BQUwsQ0FBYTtBQUNYTCxtQkFBUztBQUNQQyxxQkFBUyxLQURGO0FBRVBDLG9CQUFRO0FBRkQ7QUFERSxTQUFiO0FBTUQ7QUFDRjtBQVZJLEdBekNLO0FBcURaSSxXQUFTO0FBQ1BDLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixXQUFLQyxZQUFMLENBQWtCLFNBQWxCO0FBQ0QsS0FITTtBQUlQQyxjQUFVLFNBQVNBLFFBQVQsR0FBb0I7QUFDNUIsV0FBS0QsWUFBTCxDQUFrQixRQUFsQjtBQUNELEtBTk07QUFPUEUsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsV0FBS0MsT0FBTCxDQUFhLFNBQWI7QUFDRCxLQVRNO0FBVVBILGtCQUFjLFNBQVNBLFlBQVQsQ0FBc0JJLE1BQXRCLEVBQThCO0FBQzFDLFVBQUksS0FBS2IsSUFBTCxDQUFVWixVQUFkLEVBQTBCO0FBQ3hCLGFBQUtrQixPQUFMLHFCQUNHLGFBQWFPLE1BRGhCLEVBQ3lCLElBRHpCO0FBR0Q7O0FBRUQsV0FBS0QsT0FBTCxDQUFhQyxNQUFiO0FBQ0QsS0FsQk07QUFtQlBDLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLUixPQUFMLENBQWE7QUFDWHhCLGNBQU07QUFESyxPQUFiO0FBR0QsS0F2Qk07QUF3QlA4QixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJDLE1BQWpCLEVBQXlCO0FBQ2hDLFVBQUksQ0FBQyxLQUFLYixJQUFMLENBQVVaLFVBQWYsRUFBMkI7QUFDekIsYUFBSzBCLEtBQUw7QUFDRDs7QUFFRCxXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkYsTUFBcEI7QUFDQSxXQUFLRSxLQUFMLENBQVdGLE1BQVg7QUFDQSxVQUFJRyxXQUFXLEtBQUtoQixJQUFMLENBQVVhLFdBQVcsU0FBWCxHQUF1QixXQUF2QixHQUFxQyxVQUEvQyxDQUFmOztBQUVBLFVBQUlHLFFBQUosRUFBYztBQUNaQSxpQkFBUyxJQUFUO0FBQ0Q7QUFDRjtBQXBDTTtBQXJERyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBvcGVuVHlwZSB9IGZyb20gJy4uL21peGlucy9vcGVuLXR5cGUnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBtaXhpbnM6IFtvcGVuVHlwZV0sXHJcbiAgcHJvcHM6IHtcclxuICAgIHNob3c6IEJvb2xlYW4sXHJcbiAgICB0aXRsZTogU3RyaW5nLFxyXG4gICAgbWVzc2FnZTogU3RyaW5nLFxyXG4gICAgdXNlU2xvdDogQm9vbGVhbixcclxuICAgIGFzeW5jQ2xvc2U6IEJvb2xlYW4sXHJcbiAgICBzaG93Q2FuY2VsQnV0dG9uOiBCb29sZWFuLFxyXG4gICAgY29uZmlybUJ1dHRvbk9wZW5UeXBlOiBTdHJpbmcsXHJcbiAgICB6SW5kZXg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMTAwXHJcbiAgICB9LFxyXG4gICAgY29uZmlybUJ1dHRvblRleHQ6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJ+ehruiupCdcclxuICAgIH0sXHJcbiAgICBjYW5jZWxCdXR0b25UZXh0OiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICflj5bmtognXHJcbiAgICB9LFxyXG4gICAgc2hvd0NvbmZpcm1CdXR0b246IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICBvdmVybGF5OiB7XHJcbiAgICAgIHR5cGU6IEJvb2xlYW4sXHJcbiAgICAgIHZhbHVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgY2xvc2VPbkNsaWNrT3ZlcmxheToge1xyXG4gICAgICB0eXBlOiBCb29sZWFuLFxyXG4gICAgICB2YWx1ZTogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIGxvYWRpbmc6IHtcclxuICAgICAgY29uZmlybTogZmFsc2UsXHJcbiAgICAgIGNhbmNlbDogZmFsc2VcclxuICAgIH1cclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzaG93OiBmdW5jdGlvbiBzaG93KF9zaG93KSB7XHJcbiAgICAgIGlmICghX3Nob3cpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgbG9hZGluZzoge1xyXG4gICAgICAgICAgICBjb25maXJtOiBmYWxzZSxcclxuICAgICAgICAgICAgY2FuY2VsOiBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNvbmZpcm06IGZ1bmN0aW9uIG9uQ29uZmlybSgpIHtcclxuICAgICAgdGhpcy5oYW5kbGVBY3Rpb24oJ2NvbmZpcm0nKTtcclxuICAgIH0sXHJcbiAgICBvbkNhbmNlbDogZnVuY3Rpb24gb25DYW5jZWwoKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQWN0aW9uKCdjYW5jZWwnKTtcclxuICAgIH0sXHJcbiAgICBvbkNsaWNrT3ZlcmxheTogZnVuY3Rpb24gb25DbGlja092ZXJsYXkoKSB7XHJcbiAgICAgIHRoaXMub25DbG9zZSgnb3ZlcmxheScpO1xyXG4gICAgfSxcclxuICAgIGhhbmRsZUFjdGlvbjogZnVuY3Rpb24gaGFuZGxlQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICBpZiAodGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcclxuICAgICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgICAgW1wibG9hZGluZy5cIiArIGFjdGlvbl06IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5vbkNsb3NlKGFjdGlvbik7XHJcbiAgICB9LFxyXG4gICAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uQ2xvc2U6IGZ1bmN0aW9uIG9uQ2xvc2UoYWN0aW9uKSB7XHJcbiAgICAgIGlmICghdGhpcy5kYXRhLmFzeW5jQ2xvc2UpIHtcclxuICAgICAgICB0aGlzLmNsb3NlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuJGVtaXQoJ2Nsb3NlJywgYWN0aW9uKTtcclxuICAgICAgdGhpcy4kZW1pdChhY3Rpb24pO1xyXG4gICAgICB2YXIgY2FsbGJhY2sgPSB0aGlzLmRhdGFbYWN0aW9uID09PSAnY29uZmlybScgPyAnb25Db25maXJtJyA6ICdvbkNhbmNlbCddO1xyXG5cclxuICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgY2FsbGJhY2sodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==