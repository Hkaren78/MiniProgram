var _component = require("./../common/component.js");

var ITEM_HEIGHT = 44;

(0, _component.VantComponent)({
    props: {
        items: Array,
        mainActiveIndex: {
            type: Number,
            value: 0
        },
        activeId: {
            type: Number,
            value: 0
        },
        maxHeight: {
            type: Number,
            value: 300
        }
    },
    data: {
        subItems: [],
        mainHeight: 0,
        itemHeight: 0
    },
    watch: {
        items: function items() {
            this.updateSubItems();
            this.updateMainHeight();
        },
        maxHeight: function maxHeight() {
            this.updateItemHeight();
            this.updateMainHeight();
        },
        mainActiveIndex: "updateSubItems"
    },
    methods: {
        // 当一个子项被选择时
        onSelectItem: function onSelectItem(event) {
            this.$emit("click-item", event.currentTarget.dataset.item);
        },
        // 当一个导航被点击时
        onClickNav: function onClickNav(event) {
            var index = event.currentTarget.dataset.index;
            this.$emit("click-nav", {
                index: index
            });
        },
        // 更新子项列表
        updateSubItems: function updateSubItems() {
            var selectedItem = this.data.items[this.data.mainActiveIndex] || {};
            this.setData({
                subItems: selectedItem.children || []
            });
            this.updateItemHeight();
        },
        // 更新组件整体高度，根据最大高度和当前组件需要展示的高度来决定
        updateMainHeight: function updateMainHeight() {
            var maxHeight = Math.max(this.data.items.length * ITEM_HEIGHT, this.data.subItems.length * ITEM_HEIGHT);
            this.setData({
                mainHeight: Math.min(maxHeight, this.data.maxHeight)
            });
        },
        // 更新子项列表高度，根据可展示的最大高度和当前子项列表的高度决定
        updateItemHeight: function updateItemHeight() {
            this.setData({
                itemHeight: Math.min(this.data.subItems.length * ITEM_HEIGHT, this.data.maxHeight)
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIklURU1fSEVJR0hUIiwicHJvcHMiLCJpdGVtcyIsIkFycmF5IiwibWFpbkFjdGl2ZUluZGV4IiwidHlwZSIsIk51bWJlciIsInZhbHVlIiwiYWN0aXZlSWQiLCJtYXhIZWlnaHQiLCJkYXRhIiwic3ViSXRlbXMiLCJtYWluSGVpZ2h0IiwiaXRlbUhlaWdodCIsIndhdGNoIiwidXBkYXRlU3ViSXRlbXMiLCJ1cGRhdGVNYWluSGVpZ2h0IiwidXBkYXRlSXRlbUhlaWdodCIsIm1ldGhvZHMiLCJvblNlbGVjdEl0ZW0iLCJldmVudCIsIiRlbWl0IiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJpdGVtIiwib25DbGlja05hdiIsImluZGV4Iiwic2VsZWN0ZWRJdGVtIiwic2V0RGF0YSIsImNoaWxkcmVuIiwiTWF0aCIsIm1heCIsImxlbmd0aCIsIm1pbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSxJQUFJQSxjQUFjLEVBQWxCO0FBQ0EsOEJBQWM7QUFDWkMsU0FBTztBQUNMQyxXQUFPQyxLQURGO0FBRUxDLHFCQUFpQjtBQUNmQyxZQUFNQyxNQURTO0FBRWZDLGFBQU87QUFGUSxLQUZaO0FBTUxDLGNBQVU7QUFDUkgsWUFBTUMsTUFERTtBQUVSQyxhQUFPO0FBRkMsS0FOTDtBQVVMRSxlQUFXO0FBQ1RKLFlBQU1DLE1BREc7QUFFVEMsYUFBTztBQUZFO0FBVk4sR0FESztBQWdCWkcsUUFBTTtBQUNKQyxjQUFVLEVBRE47QUFFSkMsZ0JBQVksQ0FGUjtBQUdKQyxnQkFBWTtBQUhSLEdBaEJNO0FBcUJaQyxTQUFPO0FBQ0xaLFdBQU8sU0FBU0EsS0FBVCxHQUFpQjtBQUN0QixXQUFLYSxjQUFMO0FBQ0EsV0FBS0MsZ0JBQUw7QUFDRCxLQUpJO0FBS0xQLGVBQVcsU0FBU0EsU0FBVCxHQUFxQjtBQUM5QixXQUFLUSxnQkFBTDtBQUNBLFdBQUtELGdCQUFMO0FBQ0QsS0FSSTtBQVNMWixxQkFBaUI7QUFUWixHQXJCSztBQWdDWmMsV0FBUztBQUNQO0FBQ0FDLGtCQUFjLFNBQVNBLFlBQVQsQ0FBc0JDLEtBQXRCLEVBQTZCO0FBQ3pDLFdBQUtDLEtBQUwsQ0FBVyxZQUFYLEVBQXlCRCxNQUFNRSxhQUFOLENBQW9CQyxPQUFwQixDQUE0QkMsSUFBckQ7QUFDRCxLQUpNO0FBS1A7QUFDQUMsZ0JBQVksU0FBU0EsVUFBVCxDQUFvQkwsS0FBcEIsRUFBMkI7QUFDckMsVUFBSU0sUUFBUU4sTUFBTUUsYUFBTixDQUFvQkMsT0FBcEIsQ0FBNEJHLEtBQXhDO0FBQ0EsV0FBS0wsS0FBTCxDQUFXLFdBQVgsRUFBd0I7QUFDdEJLLGVBQU9BO0FBRGUsT0FBeEI7QUFHRCxLQVhNO0FBWVA7QUFDQVgsb0JBQWdCLFNBQVNBLGNBQVQsR0FBMEI7QUFDeEMsVUFBSVksZUFBZSxLQUFLakIsSUFBTCxDQUFVUixLQUFWLENBQWdCLEtBQUtRLElBQUwsQ0FBVU4sZUFBMUIsS0FBOEMsRUFBakU7QUFDQSxXQUFLd0IsT0FBTCxDQUFhO0FBQ1hqQixrQkFBVWdCLGFBQWFFLFFBQWIsSUFBeUI7QUFEeEIsT0FBYjtBQUdBLFdBQUtaLGdCQUFMO0FBQ0QsS0FuQk07QUFvQlA7QUFDQUQsc0JBQWtCLFNBQVNBLGdCQUFULEdBQTRCO0FBQzVDLFVBQUlQLFlBQVlxQixLQUFLQyxHQUFMLENBQVMsS0FBS3JCLElBQUwsQ0FBVVIsS0FBVixDQUFnQjhCLE1BQWhCLEdBQXlCaEMsV0FBbEMsRUFBK0MsS0FBS1UsSUFBTCxDQUFVQyxRQUFWLENBQW1CcUIsTUFBbkIsR0FBNEJoQyxXQUEzRSxDQUFoQjtBQUNBLFdBQUs0QixPQUFMLENBQWE7QUFDWGhCLG9CQUFZa0IsS0FBS0csR0FBTCxDQUFTeEIsU0FBVCxFQUFvQixLQUFLQyxJQUFMLENBQVVELFNBQTlCO0FBREQsT0FBYjtBQUdELEtBMUJNO0FBMkJQO0FBQ0FRLHNCQUFrQixTQUFTQSxnQkFBVCxHQUE0QjtBQUM1QyxXQUFLVyxPQUFMLENBQWE7QUFDWGYsb0JBQVlpQixLQUFLRyxHQUFMLENBQVMsS0FBS3ZCLElBQUwsQ0FBVUMsUUFBVixDQUFtQnFCLE1BQW5CLEdBQTRCaEMsV0FBckMsRUFBa0QsS0FBS1UsSUFBTCxDQUFVRCxTQUE1RDtBQURELE9BQWI7QUFHRDtBQWhDTTtBQWhDRyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG52YXIgSVRFTV9IRUlHSFQgPSA0NDtcclxuVmFudENvbXBvbmVudCh7XHJcbiAgcHJvcHM6IHtcclxuICAgIGl0ZW1zOiBBcnJheSxcclxuICAgIG1haW5BY3RpdmVJbmRleDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAwXHJcbiAgICB9LFxyXG4gICAgYWN0aXZlSWQ6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICB2YWx1ZTogMFxyXG4gICAgfSxcclxuICAgIG1heEhlaWdodDoge1xyXG4gICAgICB0eXBlOiBOdW1iZXIsXHJcbiAgICAgIHZhbHVlOiAzMDBcclxuICAgIH1cclxuICB9LFxyXG4gIGRhdGE6IHtcclxuICAgIHN1Ykl0ZW1zOiBbXSxcclxuICAgIG1haW5IZWlnaHQ6IDAsXHJcbiAgICBpdGVtSGVpZ2h0OiAwXHJcbiAgfSxcclxuICB3YXRjaDoge1xyXG4gICAgaXRlbXM6IGZ1bmN0aW9uIGl0ZW1zKCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZVN1Ykl0ZW1zKCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTWFpbkhlaWdodCgpO1xyXG4gICAgfSxcclxuICAgIG1heEhlaWdodDogZnVuY3Rpb24gbWF4SGVpZ2h0KCkge1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1IZWlnaHQoKTtcclxuICAgICAgdGhpcy51cGRhdGVNYWluSGVpZ2h0KCk7XHJcbiAgICB9LFxyXG4gICAgbWFpbkFjdGl2ZUluZGV4OiAndXBkYXRlU3ViSXRlbXMnXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICAvLyDlvZPkuIDkuKrlrZDpobnooqvpgInmi6nml7ZcclxuICAgIG9uU2VsZWN0SXRlbTogZnVuY3Rpb24gb25TZWxlY3RJdGVtKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2NsaWNrLWl0ZW0nLCBldmVudC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaXRlbSk7XHJcbiAgICB9LFxyXG4gICAgLy8g5b2T5LiA5Liq5a+86Iiq6KKr54K55Ye75pe2XHJcbiAgICBvbkNsaWNrTmF2OiBmdW5jdGlvbiBvbkNsaWNrTmF2KGV2ZW50KSB7XHJcbiAgICAgIHZhciBpbmRleCA9IGV2ZW50LmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pbmRleDtcclxuICAgICAgdGhpcy4kZW1pdCgnY2xpY2stbmF2Jywge1xyXG4gICAgICAgIGluZGV4OiBpbmRleFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDmm7TmlrDlrZDpobnliJfooahcclxuICAgIHVwZGF0ZVN1Ykl0ZW1zOiBmdW5jdGlvbiB1cGRhdGVTdWJJdGVtcygpIHtcclxuICAgICAgdmFyIHNlbGVjdGVkSXRlbSA9IHRoaXMuZGF0YS5pdGVtc1t0aGlzLmRhdGEubWFpbkFjdGl2ZUluZGV4XSB8fCB7fTtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBzdWJJdGVtczogc2VsZWN0ZWRJdGVtLmNoaWxkcmVuIHx8IFtdXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnVwZGF0ZUl0ZW1IZWlnaHQoKTtcclxuICAgIH0sXHJcbiAgICAvLyDmm7TmlrDnu4Tku7bmlbTkvZPpq5jluqbvvIzmoLnmja7mnIDlpKfpq5jluqblkozlvZPliY3nu4Tku7bpnIDopoHlsZXnpLrnmoTpq5jluqbmnaXlhrPlrppcclxuICAgIHVwZGF0ZU1haW5IZWlnaHQ6IGZ1bmN0aW9uIHVwZGF0ZU1haW5IZWlnaHQoKSB7XHJcbiAgICAgIHZhciBtYXhIZWlnaHQgPSBNYXRoLm1heCh0aGlzLmRhdGEuaXRlbXMubGVuZ3RoICogSVRFTV9IRUlHSFQsIHRoaXMuZGF0YS5zdWJJdGVtcy5sZW5ndGggKiBJVEVNX0hFSUdIVCk7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgbWFpbkhlaWdodDogTWF0aC5taW4obWF4SGVpZ2h0LCB0aGlzLmRhdGEubWF4SGVpZ2h0KVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvLyDmm7TmlrDlrZDpobnliJfooajpq5jluqbvvIzmoLnmja7lj6/lsZXnpLrnmoTmnIDlpKfpq5jluqblkozlvZPliY3lrZDpobnliJfooajnmoTpq5jluqblhrPlrppcclxuICAgIHVwZGF0ZUl0ZW1IZWlnaHQ6IGZ1bmN0aW9uIHVwZGF0ZUl0ZW1IZWlnaHQoKSB7XHJcbiAgICAgIHRoaXMuc2V0RGF0YSh7XHJcbiAgICAgICAgaXRlbUhlaWdodDogTWF0aC5taW4odGhpcy5kYXRhLnN1Ykl0ZW1zLmxlbmd0aCAqIElURU1fSEVJR0hULCB0aGlzLmRhdGEubWF4SGVpZ2h0KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==