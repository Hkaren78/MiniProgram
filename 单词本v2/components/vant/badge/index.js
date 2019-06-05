var _component = require("./../common/component.js");

(0, _component.VantComponent)({
    relation: {
        type: "ancestor",
        name: "badge-group"
    },
    props: {
        info: Number,
        title: String
    },
    methods: {
        onClick: function onClick() {
            var group = this.getRelationNodes("../badge-group/index")[0];
            if (group) {
                group.setActive(this);
            }
        },
        setActive: function setActive(active) {
            this.setData({
                active: active
            });
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbInJlbGF0aW9uIiwidHlwZSIsIm5hbWUiLCJwcm9wcyIsImluZm8iLCJOdW1iZXIiLCJ0aXRsZSIsIlN0cmluZyIsIm1ldGhvZHMiLCJvbkNsaWNrIiwiZ3JvdXAiLCJnZXRSZWxhdGlvbk5vZGVzIiwic2V0QWN0aXZlIiwiYWN0aXZlIiwic2V0RGF0YSJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7QUFDQSw4QkFBYztBQUNaQSxZQUFVO0FBQ1JDLFVBQU0sVUFERTtBQUVSQyxVQUFNO0FBRkUsR0FERTtBQUtaQyxTQUFPO0FBQ0xDLFVBQU1DLE1BREQ7QUFFTEMsV0FBT0M7QUFGRixHQUxLO0FBU1pDLFdBQVM7QUFDUEMsYUFBUyxTQUFTQSxPQUFULEdBQW1CO0FBQzFCLFVBQUlDLFFBQVEsS0FBS0MsZ0JBQUwsQ0FBc0Isc0JBQXRCLEVBQThDLENBQTlDLENBQVo7O0FBRUEsVUFBSUQsS0FBSixFQUFXO0FBQ1RBLGNBQU1FLFNBQU4sQ0FBZ0IsSUFBaEI7QUFDRDtBQUNGLEtBUE07QUFRUEEsZUFBVyxTQUFTQSxTQUFULENBQW1CQyxNQUFuQixFQUEyQjtBQUNwQyxXQUFLQyxPQUFMLENBQWE7QUFDWEQsZ0JBQVFBO0FBREcsT0FBYjtBQUdEO0FBWk07QUFURyxDQUFkIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmFudENvbXBvbmVudCB9IGZyb20gJy4uL2NvbW1vbi9jb21wb25lbnQnO1xyXG5WYW50Q29tcG9uZW50KHtcclxuICByZWxhdGlvbjoge1xyXG4gICAgdHlwZTogJ2FuY2VzdG9yJyxcclxuICAgIG5hbWU6ICdiYWRnZS1ncm91cCdcclxuICB9LFxyXG4gIHByb3BzOiB7XHJcbiAgICBpbmZvOiBOdW1iZXIsXHJcbiAgICB0aXRsZTogU3RyaW5nXHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBvbkNsaWNrOiBmdW5jdGlvbiBvbkNsaWNrKCkge1xyXG4gICAgICB2YXIgZ3JvdXAgPSB0aGlzLmdldFJlbGF0aW9uTm9kZXMoJy4uL2JhZGdlLWdyb3VwL2luZGV4JylbMF07XHJcblxyXG4gICAgICBpZiAoZ3JvdXApIHtcclxuICAgICAgICBncm91cC5zZXRBY3RpdmUodGhpcyk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzZXRBY3RpdmU6IGZ1bmN0aW9uIHNldEFjdGl2ZShhY3RpdmUpIHtcclxuICAgICAgdGhpcy5zZXREYXRhKHtcclxuICAgICAgICBhY3RpdmU6IGFjdGl2ZVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn0pOyJdfQ==