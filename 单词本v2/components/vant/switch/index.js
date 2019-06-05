var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    field: true,
    classes: [ "node-class" ],
    props: {
        checked: Boolean,
        loading: Boolean,
        disabled: Boolean,
        size: {
            type: String,
            value: "30px"
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
        onClick: function onClick() {
            if (!this.data.disabled && !this.data.loading) {
                var checked = !this.data.checked;
                this.$emit("input", checked);
                this.$emit("change", checked);
            }
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImZpZWxkIiwiY2xhc3NlcyIsInByb3BzIiwiY2hlY2tlZCIsIkJvb2xlYW4iLCJsb2FkaW5nIiwiZGlzYWJsZWQiLCJzaXplIiwidHlwZSIsIlN0cmluZyIsInZhbHVlIiwid2F0Y2giLCJzZXREYXRhIiwiY3JlYXRlZCIsImRhdGEiLCJtZXRob2RzIiwib25DbGljayIsIiRlbWl0Il0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUNBLDhCQUFjO0FBQ1pBLFNBQU8sSUFESztBQUVaQyxXQUFTLENBQUMsWUFBRCxDQUZHO0FBR1pDLFNBQU87QUFDTEMsYUFBU0MsT0FESjtBQUVMQyxhQUFTRCxPQUZKO0FBR0xFLGNBQVVGLE9BSEw7QUFJTEcsVUFBTTtBQUNKQyxZQUFNQyxNQURGO0FBRUpDLGFBQU87QUFGSDtBQUpELEdBSEs7QUFZWkMsU0FBTztBQUNMUixhQUFTLFNBQVNBLE9BQVQsQ0FBaUJPLEtBQWpCLEVBQXdCO0FBQy9CLFdBQUtFLE9BQUwsQ0FBYTtBQUNYRixlQUFPQTtBQURJLE9BQWI7QUFHRDtBQUxJLEdBWks7QUFtQlpHLFdBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixTQUFLRCxPQUFMLENBQWE7QUFDWEYsYUFBTyxLQUFLSSxJQUFMLENBQVVYO0FBRE4sS0FBYjtBQUdELEdBdkJXO0FBd0JaWSxXQUFTO0FBQ1BDLGFBQVMsU0FBU0EsT0FBVCxHQUFtQjtBQUMxQixVQUFJLENBQUMsS0FBS0YsSUFBTCxDQUFVUixRQUFYLElBQXVCLENBQUMsS0FBS1EsSUFBTCxDQUFVVCxPQUF0QyxFQUErQztBQUM3QyxZQUFJRixVQUFVLENBQUMsS0FBS1csSUFBTCxDQUFVWCxPQUF6QjtBQUNBLGFBQUtjLEtBQUwsQ0FBVyxPQUFYLEVBQW9CZCxPQUFwQjtBQUNBLGFBQUtjLEtBQUwsQ0FBVyxRQUFYLEVBQXFCZCxPQUFyQjtBQUNEO0FBQ0Y7QUFQTTtBQXhCRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICBmaWVsZDogdHJ1ZSxcclxuICBjbGFzc2VzOiBbJ25vZGUtY2xhc3MnXSxcclxuICBwcm9wczoge1xyXG4gICAgY2hlY2tlZDogQm9vbGVhbixcclxuICAgIGxvYWRpbmc6IEJvb2xlYW4sXHJcbiAgICBkaXNhYmxlZDogQm9vbGVhbixcclxuICAgIHNpemU6IHtcclxuICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICB2YWx1ZTogJzMwcHgnXHJcbiAgICB9XHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgY2hlY2tlZDogZnVuY3Rpb24gY2hlY2tlZCh2YWx1ZSkge1xyXG4gICAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICAgIHZhbHVlOiB2YWx1ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9LFxyXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uIGNyZWF0ZWQoKSB7XHJcbiAgICB0aGlzLnNldERhdGEoe1xyXG4gICAgICB2YWx1ZTogdGhpcy5kYXRhLmNoZWNrZWRcclxuICAgIH0pO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgb25DbGljazogZnVuY3Rpb24gb25DbGljaygpIHtcclxuICAgICAgaWYgKCF0aGlzLmRhdGEuZGlzYWJsZWQgJiYgIXRoaXMuZGF0YS5sb2FkaW5nKSB7XHJcbiAgICAgICAgdmFyIGNoZWNrZWQgPSAhdGhpcy5kYXRhLmNoZWNrZWQ7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCBjaGVja2VkKTtcclxuICAgICAgICB0aGlzLiRlbWl0KCdjaGFuZ2UnLCBjaGVja2VkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufSk7Il19