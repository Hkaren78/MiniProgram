Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
    return typeof obj;
} : function(obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

function isDef(value) {
    return value !== undefined && value !== null;
}

function isObj(x) {
    var type = typeof x === "undefined" ? "undefined" : _typeof(x);
    return x !== null && (type === "object" || type === "function");
}

exports.isObj = isObj;

exports.isDef = isDef;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbImlzRGVmIiwidmFsdWUiLCJ1bmRlZmluZWQiLCJpc09iaiIsIngiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLFNBQVNBLEtBQVQsQ0FBZUMsS0FBZixFQUFzQjtBQUNwQixTQUFPQSxVQUFVQyxTQUFWLElBQXVCRCxVQUFVLElBQXhDO0FBQ0Q7O0FBRUQsU0FBU0UsS0FBVCxDQUFlQyxDQUFmLEVBQWtCO0FBQ2hCLE1BQUlDLGNBQWNELENBQWQseUNBQWNBLENBQWQsQ0FBSjtBQUNBLFNBQU9BLE1BQU0sSUFBTixLQUFlQyxTQUFTLFFBQVQsSUFBcUJBLFNBQVMsVUFBN0MsQ0FBUDtBQUNEOztRQUVRRixLLEdBQUFBLEs7UUFBT0gsSyxHQUFBQSxLIiwiZmlsZSI6InV0aWxzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gaXNEZWYodmFsdWUpIHtcclxuICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcclxufVxyXG5cclxuZnVuY3Rpb24gaXNPYmooeCkge1xyXG4gIHZhciB0eXBlID0gdHlwZW9mIHg7XHJcbiAgcmV0dXJuIHggIT09IG51bGwgJiYgKHR5cGUgPT09ICdvYmplY3QnIHx8IHR5cGUgPT09ICdmdW5jdGlvbicpO1xyXG59XHJcblxyXG5leHBvcnQgeyBpc09iaiwgaXNEZWYgfTsiXX0=