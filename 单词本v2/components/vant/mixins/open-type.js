Object.defineProperty(exports, "__esModule", {
    value: true
});

var openType = exports.openType = Behavior({
    properties: {
        openType: String
    },
    methods: {
        bindGetUserInfo: function bindGetUserInfo(event) {
            this.$emit("getuserinfo", event.detail);
        },
        bindContact: function bindContact(event) {
            this.$emit("contact", event.detail);
        },
        bindGetPhoneNumber: function bindGetPhoneNumber(event) {
            this.$emit("getphonenumber", event.detail);
        },
        bindOpenSetting: function bindOpenSetting(event) {
            this.$emit("opensetting", event.detail);
        },
        bindError: function bindError(event) {
            this.$emit("error", event.detail);
        }
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm9wZW4tdHlwZS5qcyJdLCJuYW1lcyI6WyJvcGVuVHlwZSIsIkJlaGF2aW9yIiwicHJvcGVydGllcyIsIlN0cmluZyIsIm1ldGhvZHMiLCJiaW5kR2V0VXNlckluZm8iLCJldmVudCIsIiRlbWl0IiwiZGV0YWlsIiwiYmluZENvbnRhY3QiLCJiaW5kR2V0UGhvbmVOdW1iZXIiLCJiaW5kT3BlblNldHRpbmciLCJiaW5kRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sSUFBSUEsOEJBQVdDLFNBQVM7QUFDN0JDLGNBQVk7QUFDVkYsY0FBVUc7QUFEQSxHQURpQjtBQUk3QkMsV0FBUztBQUNQQyxxQkFBaUIsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFDL0MsV0FBS0MsS0FBTCxDQUFXLGFBQVgsRUFBMEJELE1BQU1FLE1BQWhDO0FBQ0QsS0FITTtBQUlQQyxpQkFBYSxTQUFTQSxXQUFULENBQXFCSCxLQUFyQixFQUE0QjtBQUN2QyxXQUFLQyxLQUFMLENBQVcsU0FBWCxFQUFzQkQsTUFBTUUsTUFBNUI7QUFDRCxLQU5NO0FBT1BFLHdCQUFvQixTQUFTQSxrQkFBVCxDQUE0QkosS0FBNUIsRUFBbUM7QUFDckQsV0FBS0MsS0FBTCxDQUFXLGdCQUFYLEVBQTZCRCxNQUFNRSxNQUFuQztBQUNELEtBVE07QUFVUEcscUJBQWlCLFNBQVNBLGVBQVQsQ0FBeUJMLEtBQXpCLEVBQWdDO0FBQy9DLFdBQUtDLEtBQUwsQ0FBVyxhQUFYLEVBQTBCRCxNQUFNRSxNQUFoQztBQUNELEtBWk07QUFhUEksZUFBVyxTQUFTQSxTQUFULENBQW1CTixLQUFuQixFQUEwQjtBQUNuQyxXQUFLQyxLQUFMLENBQVcsT0FBWCxFQUFvQkQsTUFBTUUsTUFBMUI7QUFDRDtBQWZNO0FBSm9CLENBQVQsQ0FBZiIsImZpbGUiOiJvcGVuLXR5cGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgdmFyIG9wZW5UeXBlID0gQmVoYXZpb3Ioe1xyXG4gIHByb3BlcnRpZXM6IHtcclxuICAgIG9wZW5UeXBlOiBTdHJpbmdcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGJpbmRHZXRVc2VySW5mbzogZnVuY3Rpb24gYmluZEdldFVzZXJJbmZvKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ2dldHVzZXJpbmZvJywgZXZlbnQuZGV0YWlsKTtcclxuICAgIH0sXHJcbiAgICBiaW5kQ29udGFjdDogZnVuY3Rpb24gYmluZENvbnRhY3QoZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnY29udGFjdCcsIGV2ZW50LmRldGFpbCk7XHJcbiAgICB9LFxyXG4gICAgYmluZEdldFBob25lTnVtYmVyOiBmdW5jdGlvbiBiaW5kR2V0UGhvbmVOdW1iZXIoZXZlbnQpIHtcclxuICAgICAgdGhpcy4kZW1pdCgnZ2V0cGhvbmVudW1iZXInLCBldmVudC5kZXRhaWwpO1xyXG4gICAgfSxcclxuICAgIGJpbmRPcGVuU2V0dGluZzogZnVuY3Rpb24gYmluZE9wZW5TZXR0aW5nKGV2ZW50KSB7XHJcbiAgICAgIHRoaXMuJGVtaXQoJ29wZW5zZXR0aW5nJywgZXZlbnQuZGV0YWlsKTtcclxuICAgIH0sXHJcbiAgICBiaW5kRXJyb3I6IGZ1bmN0aW9uIGJpbmRFcnJvcihldmVudCkge1xyXG4gICAgICB0aGlzLiRlbWl0KCdlcnJvcicsIGV2ZW50LmRldGFpbCk7XHJcbiAgICB9XHJcbiAgfVxyXG59KTsiXX0=