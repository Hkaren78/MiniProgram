Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = undefined;

var _createClass = function() {
    function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();

var _flag = require("./../cloud/flag.js");

var _flag2 = _interopRequireDefault(_flag);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
            arr2[i] = arr[i];
        }
        return arr2;
    } else {
        return Array.from(arr);
    }
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

var success = _flag2.default.success, fail = _flag2.default.fail;

var _default = function() {
    function _default() {
        _classCallCheck(this, _default);
    }
    _createClass(_default, null, [ {
        key: "showActionSheet",
        value: function showActionSheet() {
            var itemList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [ "确认" ];
            return new Promise(function(resole, reject) {
                wx.showActionSheet({
                    itemList: [].concat(_toConsumableArray(itemList), [ "取消" ]),
                    success: function success(e) {
                        console.info("showActionSheet success", e);
                        resole(e.tapIndex);
                    },
                    fail: function fail(e) {
                        console.info("showActionSheet fail", e);
                    }
                });
            });
        }
    }, {
        key: "navi",
        value: function navi(url) {
            wx.navigateTo({
                url: url
            });
        }
    }, {
        key: "goback",
        value: function goback() {
            var delta = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
            wx.navigateBack({
                delta: delta
            });
        }
    }, {
        key: "toastError",
        value: function toastError() {
            var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "添加失败";
            wx.showToast({
                icon: "none",
                mask: true,
                title: title
            });
        }
    }, {
        key: "gobackWhenSuccess",
        value: function gobackWhenSuccess(res) {
            if (res === fail) {
                Utils.toastError();
                return;
            }
            this.goback();
        }
    }, {
        key: "arr_splice",
        value: function arr_splice(arr, idx) {
            arr.splice(idx, 1);
        }
    }, {
        key: "getOpenid",
        value: function getOpenid() {
            return new Promise(function(res, rej) {
                wx.cloud.callFunction({
                    // 云函数名称
                    name: "getOpenid",
                    // 传给云函数的参数
                    success: function success(d) {
                        res(d.result.openId);
                    },
                    fail: function fail(e) {
                        rej(e);
                    }
                });
            });
        }
    }, {
        key: "loading",
        value: function loading() {
            wx.showLoading({
                title: "加载中",
                mask: true
            });
        }
    }, {
        key: "loaded",
        value: function loaded() {
            wx.hideLoading();
        }
    } ]);
    return _default;
}();

exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInV0aWxzLmpzIl0sIm5hbWVzIjpbInN1Y2Nlc3MiLCJmbGFnIiwiZmFpbCIsIml0ZW1MaXN0IiwiUHJvbWlzZSIsInJlc29sZSIsInJlamVjdCIsInd4Iiwic2hvd0FjdGlvblNoZWV0IiwiZSIsImNvbnNvbGUiLCJpbmZvIiwidGFwSW5kZXgiLCJ1cmwiLCJuYXZpZ2F0ZVRvIiwiZGVsdGEiLCJuYXZpZ2F0ZUJhY2siLCJ0aXRsZSIsInNob3dUb2FzdCIsImljb24iLCJtYXNrIiwicmVzIiwiVXRpbHMiLCJ0b2FzdEVycm9yIiwiZ29iYWNrIiwiYXJyIiwiaWR4Iiwic3BsaWNlIiwicmVqIiwiY2xvdWQiLCJjYWxsRnVuY3Rpb24iLCJuYW1lIiwiZCIsInJlc3VsdCIsIm9wZW5JZCIsInNob3dMb2FkaW5nIiwiaGlkZUxvYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0lBQ1FBLE8sR0FBa0JDLGMsQ0FBbEJELE87SUFBU0UsSSxHQUFTRCxjLENBQVRDLEk7Ozs7Ozs7OzswQ0FFNkI7QUFBQSxnQkFBbkJDLFFBQW1CLHVFQUFSLENBQUMsSUFBRCxDQUFROztBQUN0QyxtQkFBTyxJQUFJQyxPQUFKLENBQVksVUFBQ0MsTUFBRCxFQUFTQyxNQUFULEVBQW9CO0FBQ25DQyxtQkFBR0MsZUFBSCxDQUFtQjtBQUNmTCwyREFBYUEsUUFBYixJQUFzQixJQUF0QixFQURlO0FBRWZILDJCQUZlLG1CQUVQUyxDQUZPLEVBRUo7QUFDUEMsZ0NBQVFDLElBQVIsQ0FBYSx5QkFBYixFQUF3Q0YsQ0FBeEM7QUFDQUosK0JBQU9JLEVBQUVHLFFBQVQ7QUFDSCxxQkFMYztBQU1mVix3QkFOZSxnQkFNVk8sQ0FOVSxFQU1QO0FBQ0pDLGdDQUFRQyxJQUFSLENBQWEsc0JBQWIsRUFBcUNGLENBQXJDO0FBQ0g7QUFSYyxpQkFBbkI7QUFVSCxhQVhNLENBQVA7QUFZSDs7OzZCQUNXSSxHLEVBQUs7QUFDYk4sZUFBR08sVUFBSCxDQUFjO0FBQ1ZEO0FBRFUsYUFBZDtBQUdIOzs7aUNBQ3dCO0FBQUEsZ0JBQVhFLEtBQVcsdUVBQUgsQ0FBRzs7QUFDckJSLGVBQUdTLFlBQUgsQ0FBZ0I7QUFDWkQ7QUFEWSxhQUFoQjtBQUdIOzs7cUNBQ2lDO0FBQUEsZ0JBQWhCRSxLQUFnQix1RUFBUixNQUFROztBQUM5QlYsZUFBR1csU0FBSCxDQUFhO0FBQ1RDLHNCQUFNLE1BREc7QUFFVEMsc0JBQU0sSUFGRztBQUdUSDtBQUhTLGFBQWI7QUFLSDs7OzBDQUN3QkksRyxFQUFLO0FBQzFCLGdCQUFJQSxRQUFRbkIsSUFBWixFQUFrQjtBQUNkb0Isc0JBQU1DLFVBQU47QUFDQTtBQUNIO0FBQ0QsaUJBQUtDLE1BQUw7QUFDSDs7O21DQUNpQkMsRyxFQUFLQyxHLEVBQUs7QUFDeEJELGdCQUFJRSxNQUFKLENBQVdELEdBQVgsRUFBZ0IsQ0FBaEI7QUFDSDs7O29DQUNrQjtBQUNmLG1CQUFPLElBQUl0QixPQUFKLENBQVksVUFBQ2lCLEdBQUQsRUFBTU8sR0FBTixFQUFjO0FBQzdCckIsbUJBQUdzQixLQUFILENBQVNDLFlBQVQsQ0FBc0I7QUFDbEI7QUFDQUMsMEJBQU0sV0FGWTtBQUdsQjtBQUNBL0IsMkJBSmtCLG1CQUlWZ0MsQ0FKVSxFQUlQO0FBQ1BYLDRCQUFJVyxFQUFFQyxNQUFGLENBQVNDLE1BQWI7QUFDSCxxQkFOaUI7QUFPbEJoQyx3QkFQa0IsZ0JBT2JPLENBUGEsRUFPVjtBQUNKbUIsNEJBQUluQixDQUFKO0FBQ0g7QUFUaUIsaUJBQXRCO0FBV0gsYUFaTSxDQUFQO0FBY0g7OztrQ0FDZTtBQUNaRixlQUFHNEIsV0FBSCxDQUFlO0FBQ1hsQix1QkFBTSxLQURLO0FBRVhHLHNCQUFLO0FBRk0sYUFBZjtBQUlIOzs7aUNBQ2M7QUFDWGIsZUFBRzZCLFdBQUg7QUFDSCIsImZpbGUiOiJ1dGlscy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmbGFnIGZyb20gJy4uL2Nsb3VkL2ZsYWcnO1xyXG5jb25zdCB7IHN1Y2Nlc3MsIGZhaWwgfSA9IGZsYWc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIHtcclxuICAgIHN0YXRpYyBzaG93QWN0aW9uU2hlZXQoaXRlbUxpc3QgPSBbJ+ehruiupCddKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbGUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB3eC5zaG93QWN0aW9uU2hlZXQoe1xyXG4gICAgICAgICAgICAgICAgaXRlbUxpc3Q6Wy4uLml0ZW1MaXN0LCflj5bmtognXSxcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3MoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuaW5mbygnc2hvd0FjdGlvblNoZWV0IHN1Y2Nlc3MnLCBlKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sZShlLnRhcEluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmluZm8oJ3Nob3dBY3Rpb25TaGVldCBmYWlsJywgZSlcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzdGF0aWMgbmF2aSh1cmwpIHtcclxuICAgICAgICB3eC5uYXZpZ2F0ZVRvKHtcclxuICAgICAgICAgICAgdXJsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBnb2JhY2soZGVsdGEgPSAxKSB7XHJcbiAgICAgICAgd3gubmF2aWdhdGVCYWNrKHtcclxuICAgICAgICAgICAgZGVsdGFcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIHRvYXN0RXJyb3IodGl0bGUgPSAn5re75Yqg5aSx6LSlJykge1xyXG4gICAgICAgIHd4LnNob3dUb2FzdCh7XHJcbiAgICAgICAgICAgIGljb246ICdub25lJyxcclxuICAgICAgICAgICAgbWFzazogdHJ1ZSxcclxuICAgICAgICAgICAgdGl0bGVcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgc3RhdGljIGdvYmFja1doZW5TdWNjZXNzKHJlcykge1xyXG4gICAgICAgIGlmIChyZXMgPT09IGZhaWwpIHtcclxuICAgICAgICAgICAgVXRpbHMudG9hc3RFcnJvcigpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ29iYWNrKCk7XHJcbiAgICB9XHJcbiAgICBzdGF0aWMgYXJyX3NwbGljZShhcnIsIGlkeCkge1xyXG4gICAgICAgIGFyci5zcGxpY2UoaWR4LCAxKTtcclxuICAgIH1cclxuICAgIHN0YXRpYyBnZXRPcGVuaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXMsIHJlaikgPT4ge1xyXG4gICAgICAgICAgICB3eC5jbG91ZC5jYWxsRnVuY3Rpb24oe1xyXG4gICAgICAgICAgICAgICAgLy8g5LqR5Ye95pWw5ZCN56ewXHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZ2V0T3BlbmlkJyxcclxuICAgICAgICAgICAgICAgIC8vIOS8oOe7meS6keWHveaVsOeahOWPguaVsFxyXG4gICAgICAgICAgICAgICAgc3VjY2VzcyhkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzKGQucmVzdWx0Lm9wZW5JZCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZmFpbChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqKGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG4gICAgc3RhdGljIGxvYWRpbmcoKXtcclxuICAgICAgICB3eC5zaG93TG9hZGluZyh7XHJcbiAgICAgICAgICAgIHRpdGxlOifliqDovb3kuK0nLFxyXG4gICAgICAgICAgICBtYXNrOnRydWUsXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIHN0YXRpYyBsb2FkZWQoKXtcclxuICAgICAgICB3eC5oaWRlTG9hZGluZygpXHJcbiAgICB9XHJcbn0gIl19