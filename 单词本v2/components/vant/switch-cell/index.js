var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    field: true,
    props: {
        title: String,
        border: Boolean,
        checked: Boolean,
        loading: Boolean,
        disabled: Boolean,
        size: {
            type: String,
            value: "26px"
        }
    },
    watch: {
        checked: function checked(value) {
            this.setData({
                value: value
            });
        }
    },
    created: function created() {
        this.setData({
            value: this.data.checked
        });
    },
    methods: {
        onChange: function onChange(event) {
            this.$emit("change", event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwicHJvcHMiLCJ0aXRsZSIsIlN0cmluZyIsImJvcmRlciIsIkJvb2xlYW4iLCJjaGVja2VkIiwibG9hZGluZyIsImRpc2FibGVkIiwic2l6ZSIsInR5cGUiLCJ2YWx1ZSIsIndhdGNoIiwic2V0RGF0YSIsImNyZWF0ZWQiLCJkYXRhIiwibWV0aG9kcyIsIm9uQ2hhbmdlIiwiZXZlbnQiLCIkZW1pdCIsImRldGFpbCJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxTQUFPLElBREs7QUFFWkMsU0FBTztBQUNMQyxXQUFPQyxNQURGO0FBRUxDLFlBQVFDLE9BRkg7QUFHTEMsYUFBU0QsT0FISjtBQUlMRSxhQUFTRixPQUpKO0FBS0xHLGNBQVVILE9BTEw7QUFNTEksVUFBTTtBQUNKQyxZQUFNUCxNQURGO0FBRUpRLGFBQU87QUFGSDtBQU5ELEdBRks7QUFhWkMsU0FBTztBQUNMTixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJLLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtFLE9BQUwsQ0FBYTtBQUNYRixlQUFPQTtBQURJLE9BQWI7QUFHRDtBQUxJLEdBYks7QUFvQlpHLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRCxPQUFMLENBQWE7QUFDWEYsYUFBTyxLQUFLSSxJQUFMLENBQVVUO0FBRE4sS0FBYjtBQUdELEdBeEJXO0FBeUJaVSxXQUFTO0FBQ1BDLGNBQVUsU0FBU0EsUUFBVCxDQUFrQkMsS0FBbEIsRUFBeUI7QUFDakMsV0FBS0MsS0FBTCxDQUFXLFFBQVgsRUFBcUJELE1BQU1FLE1BQTNCO0FBQ0Q7QUFITTtBQXpCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICBwcm9wczoge1xyXG4gICAgdGl0bGU6IFN0cmluZyxcclxuICAgIGJvcmRlcjogQm9vbGVhbixcclxuICAgIGNoZWNrZWQ6IEJvb2xlYW4sXHJcbiAgICBsb2FkaW5nOiBCb29sZWFuLFxyXG4gICAgZGlzYWJsZWQ6IEJvb2xlYW4sXHJcbiAgICBzaXplOiB7XHJcbiAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgdmFsdWU6ICcyNnB4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGNoZWNrZWQ6IGZ1bmN0aW9uIGNoZWNrZWQodmFsdWUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfSxcclxuICBjcmVhdGVkOiBmdW5jdGlvbiBjcmVhdGVkKCkge1xyXG4gICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgdmFsdWU6IHRoaXMuZGF0YS5jaGVja2VkXHJcbiAgICB9KTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZShldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19