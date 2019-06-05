Object.defineProperty(exports, "__esModule", {
    value: true
});

var touch = exports.touch = Behavior({
    methods: {
        touchStart: function touchStart(event) {
            this.direction = "";
            this.deltaX = 0;
            this.deltaY = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.startX = event.touches[0].clientX;
            this.startY = event.touches[0].clientY;
        },
        touchMove: function touchMove(event) {
            var touch = event.touches[0];
            this.deltaX = touch.clientX - this.startX;
            this.deltaY = touch.clientY - this.startY;
            this.offsetX = Math.abs(this.deltaX);
            this.offsetY = Math.abs(this.deltaY);
            this.direction = this.offsetX > this.offsetY ? "horizontal" : this.offsetX < this.offsetY ? "vertical" : "";
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvdWNoLmpzIl0sIm5hbWVzIjpbInRvdWNoIiwiQmVoYXZpb3IiLCJtZXRob2RzIiwidG91Y2hTdGFydCIsImV2ZW50IiwiZGlyZWN0aW9uIiwiZGVsdGFYIiwiZGVsdGFZIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJzdGFydFgiLCJ0b3VjaGVzIiwiY2xpZW50WCIsInN0YXJ0WSIsImNsaWVudFkiLCJ0b3VjaE1vdmUiLCJNYXRoIiwiYWJzIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQUlBLHdCQUFRQyxTQUFTO0FBQzFCQyxXQUFTO0FBQ1BDLGdCQUFZLFNBQVNBLFVBQVQsQ0FBb0JDLEtBQXBCLEVBQTJCO0FBQ3JDLFdBQUtDLFNBQUwsR0FBaUIsRUFBakI7QUFDQSxXQUFLQyxNQUFMLEdBQWMsQ0FBZDtBQUNBLFdBQUtDLE1BQUwsR0FBYyxDQUFkO0FBQ0EsV0FBS0MsT0FBTCxHQUFlLENBQWY7QUFDQSxXQUFLQyxPQUFMLEdBQWUsQ0FBZjtBQUNBLFdBQUtDLE1BQUwsR0FBY04sTUFBTU8sT0FBTixDQUFjLENBQWQsRUFBaUJDLE9BQS9CO0FBQ0EsV0FBS0MsTUFBTCxHQUFjVCxNQUFNTyxPQUFOLENBQWMsQ0FBZCxFQUFpQkcsT0FBL0I7QUFDRCxLQVRNO0FBVVBDLGVBQVcsU0FBU0EsU0FBVCxDQUFtQlgsS0FBbkIsRUFBMEI7QUFDbkMsVUFBSUosUUFBUUksTUFBTU8sT0FBTixDQUFjLENBQWQsQ0FBWjtBQUNBLFdBQUtMLE1BQUwsR0FBY04sTUFBTVksT0FBTixHQUFnQixLQUFLRixNQUFuQztBQUNBLFdBQUtILE1BQUwsR0FBY1AsTUFBTWMsT0FBTixHQUFnQixLQUFLRCxNQUFuQztBQUNBLFdBQUtMLE9BQUwsR0FBZVEsS0FBS0MsR0FBTCxDQUFTLEtBQUtYLE1BQWQsQ0FBZjtBQUNBLFdBQUtHLE9BQUwsR0FBZU8sS0FBS0MsR0FBTCxDQUFTLEtBQUtWLE1BQWQsQ0FBZjtBQUNBLFdBQUtGLFNBQUwsR0FBaUIsS0FBS0csT0FBTCxHQUFlLEtBQUtDLE9BQXBCLEdBQThCLFlBQTlCLEdBQTZDLEtBQUtELE9BQUwsR0FBZSxLQUFLQyxPQUFwQixHQUE4QixVQUE5QixHQUEyQyxFQUF6RztBQUNEO0FBakJNO0FBRGlCLENBQVQsQ0FBWiIsImZpbGUiOiJ0b3VjaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB2YXIgdG91Y2ggPSBCZWhhdmlvcih7XHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG91Y2hTdGFydDogZnVuY3Rpb24gdG91Y2hTdGFydChldmVudCkge1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9ICcnO1xyXG4gICAgICB0aGlzLmRlbHRhWCA9IDA7XHJcbiAgICAgIHRoaXMuZGVsdGFZID0gMDtcclxuICAgICAgdGhpcy5vZmZzZXRYID0gMDtcclxuICAgICAgdGhpcy5vZmZzZXRZID0gMDtcclxuICAgICAgdGhpcy5zdGFydFggPSBldmVudC50b3VjaGVzWzBdLmNsaWVudFg7XHJcbiAgICAgIHRoaXMuc3RhcnRZID0gZXZlbnQudG91Y2hlc1swXS5jbGllbnRZO1xyXG4gICAgfSxcclxuICAgIHRvdWNoTW92ZTogZnVuY3Rpb24gdG91Y2hNb3ZlKGV2ZW50KSB7XHJcbiAgICAgIHZhciB0b3VjaCA9IGV2ZW50LnRvdWNoZXNbMF07XHJcbiAgICAgIHRoaXMuZGVsdGFYID0gdG91Y2guY2xpZW50WCAtIHRoaXMuc3RhcnRYO1xyXG4gICAgICB0aGlzLmRlbHRhWSA9IHRvdWNoLmNsaWVudFkgLSB0aGlzLnN0YXJ0WTtcclxuICAgICAgdGhpcy5vZmZzZXRYID0gTWF0aC5hYnModGhpcy5kZWx0YVgpO1xyXG4gICAgICB0aGlzLm9mZnNldFkgPSBNYXRoLmFicyh0aGlzLmRlbHRhWSk7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gdGhpcy5vZmZzZXRYID4gdGhpcy5vZmZzZXRZID8gJ2hvcml6b250YWwnIDogdGhpcy5vZmZzZXRYIDwgdGhpcy5vZmZzZXRZID8gJ3ZlcnRpY2FsJyA6ICcnO1xyXG4gICAgfVxyXG4gIH1cclxufSk7Il19