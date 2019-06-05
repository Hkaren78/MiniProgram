var _component = require("./../common/component.js");

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
    field: true,
    classes: [ "input-class" ],
    props: {
        icon: String,
        label: String,
        error: Boolean,
        focus: Boolean,
        center: Boolean,
        isLink: Boolean,
        leftIcon: String,
        disabled: Boolean,
        autosize: Boolean,
        readonly: Boolean,
        required: Boolean,
        iconClass: String,
        clearable: Boolean,
        inputAlign: String,
        customClass: String,
        confirmType: String,
        errorMessage: String,
        placeholder: String,
        customStyle: String,
        useIconSlot: Boolean,
        useButtonSlot: Boolean,
        placeholderStyle: String,
        cursorSpacing: {
            type: Number,
            value: 50
        },
        maxlength: {
            type: Number,
            value: -1
        },
        type: {
            type: String,
            value: "text"
        },
        border: {
            type: Boolean,
            value: true
        },
        titleWidth: {
            type: String,
            value: "90px"
        }
    },
    data: {
        showClear: false
    },
    computed: {
        inputClass: function inputClass() {
            var data = this.data;
            return this.classNames("input-class", "van-field__input", _defineProperty({
                "van-field--error": data.error,
                "van-field__textarea": data.type === "textarea",
                "van-field__input--disabled": data.disabled
            }, "van-field--" + data.inputAlign, data.inputAlign));
        }
    },
    beforeCreate: function beforeCreate() {
        this.focused = false;
    },
    methods: {
        onInput: function onInput(event) {
            var _ref = event.detail || {}, _ref$value = _ref.value, value = _ref$value === void 0 ? "" : _ref$value;
            this.$emit("input", value);
            this.$emit("change", value);
            this.setData({
                value: value,
                showClear: this.getShowClear(value)
            });
        },
        onFocus: function onFocus() {
            this.$emit("focus");
            this.focused = true;
            this.setData({
                showClear: this.getShowClear()
            });
        },
        onBlur: function onBlur() {
            this.focused = false;
            this.$emit("blur");
            this.setData({
                showClear: this.getShowClear()
            });
        },
        onClickIcon: function onClickIcon() {
            this.$emit("clickicon");
        },
        getShowClear: function getShowClear(value) {
            value = value === undefined ? this.data.value : value;
            return this.data.clearable && this.focused && value && !this.data.readonly;
        },
        onClear: function onClear() {
            this.setData({
                value: "",
                showClear: this.getShowClear("")
            });
            this.$emit("input", "");
            this.$emit("change", "");
        },
        onConfirm: function onConfirm() {
            this.$emit("confirm", this.data.value);
        },
        onIconClicked: function onIconClicked() {
            this.$emit("leftIconClicked");
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiaWNvbiIsIlN0cmluZyIsImxhYmVsIiwiZXJyb3IiLCJCb29sZWFuIiwiZm9jdXMiLCJjZW50ZXIiLCJpc0xpbmsiLCJsZWZ0SWNvbiIsImRpc2FibGVkIiwiYXV0b3NpemUiLCJyZWFkb25seSIsInJlcXVpcmVkIiwiaWNvbkNsYXNzIiwiY2xlYXJhYmxlIiwiaW5wdXRBbGlnbiIsImN1c3RvbUNsYXNzIiwiY29uZmlybVR5cGUiLCJlcnJvck1lc3NhZ2UiLCJwbGFjZWhvbGRlciIsImN1c3RvbVN0eWxlIiwidXNlSWNvblNsb3QiLCJ1c2VCdXR0b25TbG90IiwicGxhY2Vob2xkZXJTdHlsZSIsImN1cnNvclNwYWNpbmciLCJ0eXBlIiwiTnVtYmVyIiwidmFsdWUiLCJtYXhsZW5ndGgiLCJib3JkZXIiLCJ0aXRsZVdpZHRoIiwiZGF0YSIsInNob3dDbGVhciIsImNvbXB1dGVkIiwiaW5wdXRDbGFzcyIsImNsYXNzTmFtZXMiLCJiZWZvcmVDcmVhdGUiLCJmb2N1c2VkIiwibWV0aG9kcyIsIm9uSW5wdXQiLCJldmVudCIsIl9yZWYiLCJkZXRhaWwiLCJfcmVmJHZhbHVlIiwiJGVtaXQiLCJzZXREYXRhIiwiZ2V0U2hvd0NsZWFyIiwib25Gb2N1cyIsIm9uQmx1ciIsIm9uQ2xpY2tJY29uIiwidW5kZWZpbmVkIiwib25DbGVhciIsIm9uQ29uZmlybSIsIm9uSWNvbkNsaWNrZWQiXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsV0FBUyxDQUFDLGFBQUQsQ0FGRztBQUdaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBT0QsTUFGRjtBQUdMRSxXQUFPQyxPQUhGO0FBSUxDLFdBQU9ELE9BSkY7QUFLTEUsWUFBUUYsT0FMSDtBQU1MRyxZQUFRSCxPQU5IO0FBT0xJLGNBQVVQLE1BUEw7QUFRTFEsY0FBVUwsT0FS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QixLQUFLdUIsT0FBNUIsSUFBdUNWLEtBQXZDLElBQWdELENBQUMsS0FBS0ksSUFBTCxDQUFVcEIsUUFBbEU7QUFDRCxLQWpDTTtBQWtDUHdDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixXQUFLTixPQUFMLENBQWE7QUFDWGxCLGVBQU8sRUFESTtBQUVYSyxtQkFBVyxLQUFLYyxZQUFMLENBQWtCLEVBQWxCO0FBRkEsT0FBYjtBQUlBLFdBQUtGLEtBQUwsQ0FBVyxPQUFYLEVBQW9CLEVBQXBCO0FBQ0EsV0FBS0EsS0FBTCxDQUFXLFFBQVgsRUFBcUIsRUFBckI7QUFDRCxLQXpDTTtBQTBDUFEsZUFBVyxTQUFTQSxTQUFULEdBQXFCO0FBQzlCLFdBQUtSLEtBQUwsQ0FBVyxTQUFYLEVBQXNCLEtBQUtiLElBQUwsQ0FBVUosS0FBaEM7QUFDRCxLQTVDTTtBQTZDUDBCLGlCQTdDTywyQkE2Q1E7QUFDYixXQUFLVCxLQUFMLENBQVcsaUJBQVg7QUFDRDtBQS9DTTtBQWhFRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICBjbGFzc2VzOiBbJ2lucHV0LWNsYXNzJ10sXHJcbiAgcHJvcHM6IHtcclxuICAgIGljb246IFN0cmluZyxcclxuICAgIGxhYmVsOiBTdHJpbmcsXHJcbiAgICBlcnJvcjogQm9vbGVhbixcclxuICAgIGZvY3VzOiBCb29sZWFuLFxyXG4gICAgY2VudGVyOiBCb29sZWFuLFxyXG4gICAgaXNMaW5rOiBCb29sZWFuLFxyXG4gICAgbGVmdEljb246IFN0cmluZyxcclxuICAgIGRpc2FibGVkOiBCb29sZWFuLFxyXG4gICAgYXV0b3NpemU6IEJvb2xlYW4sXHJcbiAgICByZWFkb25seTogQm9vbGVhbixcclxuICAgIHJlcXVpcmVkOiBCb29sZWFuLFxyXG4gICAgaWNvbkNsYXNzOiBTdHJpbmcsXHJcbiAgICBjbGVhcmFibGU6IEJvb2xlYW4sXHJcbiAgICBpbnB1dEFsaWduOiBTdHJpbmcsXHJcbiAgICBjdXN0b21DbGFzczogU3RyaW5nLFxyXG4gICAgY29uZmlybVR5cGU6IFN0cmluZyxcclxuICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxyXG4gICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcclxuICAgIGN1c3RvbVN0eWxlOiBTdHJpbmcsXHJcbiAgICB1c2VJY29uU2xvdDogQm9vbGVhbixcclxuICAgIHVzZUJ1dHRvblNsb3Q6IEJvb2xlYW4sXHJcbiAgICBwbGFjZWhvbGRlclN0eWxlOiBTdHJpbmcsXHJcbiAgICBjdXJzb3JTcGFjaW5nOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IDUwXHJcbiAgICB9LFxyXG4gICAgbWF4bGVuZ3RoOiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgdmFsdWU6IC0xXHJcbiAgICB9LFxyXG4gICAgdHlwZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIHZhbHVlOiAndGV4dCdcclxuICAgIH0sXHJcbiAgICBib3JkZXI6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgdmFsdWU6IHRydWVcclxuICAgIH0sXHJcbiAgICB0aXRsZVdpZHRoOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICc5MHB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZGF0YToge1xyXG4gICAgc2hvd0NsZWFyOiBmYWxzZVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIGlucHV0Q2xhc3M6IGZ1bmN0aW9uIGlucHV0Q2xhc3MoKSB7XHJcbiAgICAgIHZhciBkYXRhID0gdGhpcy5kYXRhO1xyXG4gICAgICByZXR1cm4gdGhpcy5jbGFzc05hbWVzKCdpbnB1dC1jbGFzcycsICd2YW4tZmllbGRfX2lucHV0Jywge1xyXG4gICAgICAgICd2YW4tZmllbGQtLWVycm9yJzogZGF0YS5lcnJvcixcclxuICAgICAgICAndmFuLWZpZWxkX190ZXh0YXJlYSc6IGRhdGEudHlwZSA9PT0gJ3RleHRhcmVhJyxcclxuICAgICAgICAndmFuLWZpZWxkX19pbnB1dC0tZGlzYWJsZWQnOiBkYXRhLmRpc2FibGVkLFxyXG4gICAgICAgIFtcInZhbi1maWVsZC0tXCIgKyBkYXRhLmlucHV0QWxpZ25dOiBkYXRhLmlucHV0QWxpZ25cclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBiZWZvcmVDcmVhdGU6IGZ1bmN0aW9uIGJlZm9yZUNyZWF0ZSgpIHtcclxuICAgIHRoaXMuZm9jdXNlZCA9IGZhbHNlO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25JbnB1dDogZnVuY3Rpb24gb25JbnB1dChldmVudCkge1xyXG4gICAgICB2YXIgX3JlZiA9IGV2ZW50LmRldGFpbCB8fCB7fSxcclxuICAgICAgICAgIF9yZWYkdmFsdWUgPSBfcmVmLnZhbHVlLFxyXG4gICAgICAgICAgdmFsdWUgPSBfcmVmJHZhbHVlID09PSB2b2lkIDAgPyAnJyA6IF9yZWYkdmFsdWU7XHJcblxyXG4gICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHZhbHVlKTtcclxuICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlJywgdmFsdWUpO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKHZhbHVlKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkZvY3VzOiBmdW5jdGlvbiBvbkZvY3VzKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdmb2N1cycpO1xyXG4gICAgICB0aGlzLmZvY3VzZWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHNob3dDbGVhcjogdGhpcy5nZXRTaG93Q2xlYXIoKVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkJsdXI6IGZ1bmN0aW9uIG9uQmx1cigpIHtcclxuICAgICAgdGhpcy5mb2N1c2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2JsdXInKTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzaG93Q2xlYXI6IHRoaXMuZ2V0U2hvd0NsZWFyKClcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25DbGlja0ljb246IGZ1bmN0aW9uIG9uQ2xpY2tJY29uKCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdjbGlja2ljb24nKTtcclxuICAgIH0sXHJcbiAgICBnZXRTaG93Q2xlYXI6IGZ1bmN0aW9uIGdldFNob3dDbGVhcih2YWx1ZSkge1xyXG4gICAgICB2YWx1ZSA9IHZhbHVlID09PSB1bmRlZmluZWQgPyB0aGlzLmRhdGEudmFsdWUgOiB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHRoaXMuZGF0YS5jbGVhcmFibGUgJiYgdGhpcy5mb2N1c2VkICYmIHZhbHVlICYmICF0aGlzLmRhdGEucmVhZG9ubHk7XHJcbiAgICB9LFxyXG4gICAgb25DbGVhcjogZnVuY3Rpb24gb25DbGVhcigpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgc2hvd0NsZWFyOiB0aGlzLmdldFNob3dDbGVhcignJylcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgJycpO1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCAnJyk7XHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtOiBmdW5jdGlvbiBvbkNvbmZpcm0oKSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NvbmZpcm0nLCB0aGlzLmRhdGEudmFsdWUpO1xyXG4gICAgfSxcclxuICAgIG9uSWNvbkNsaWNrZWQoKXtcclxuICAgICAgdGhpcy4kZW1pdCgnbGVmdEljb25DbGlja2VkJyk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=