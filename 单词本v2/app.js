Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wepy = require("./npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

require("./npm/wepy-async-function/index.js");

var _utils = require("./utils/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}

function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}

function _possibleConstructorReturn(self, call) {
    if (!self) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return call && (typeof call === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var _default = function(_wepy$app) {
    _inherits(_default, _wepy$app);
    function _default() {
        _classCallCheck(this, _default);
        var _this = _possibleConstructorReturn(this, (_default.__proto__ || Object.getPrototypeOf(_default)).call(this));
        _this.config = {
            pages: [ "pages/index", "pages/edit", "pages/note" ],
            window: {
                backgroundTextStyle: "light",
                navigationBarBackgroundColor: "#fff",
                navigationBarTitleText: "WeChat",
                navigationBarTextStyle: "black"
            }
        };
        _this.globalData = {
            userInfo: null
        };
        _this.use("requestfix");
        wx.cloud.init({
            traceUser: true
        });
        return _this;
    }
    return _default;
}(_wepy2.default.app);

App(require("./npm/wepy/lib/wepy.js").default.$createApp(_default, {
    noPromiseAPI: [ "createSelectorQuery" ]
}));

require("./_wepylogs.js");
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6WyJjb25maWciLCJwYWdlcyIsIndpbmRvdyIsImJhY2tncm91bmRUZXh0U3R5bGUiLCJuYXZpZ2F0aW9uQmFyQmFja2dyb3VuZENvbG9yIiwibmF2aWdhdGlvbkJhclRpdGxlVGV4dCIsIm5hdmlnYXRpb25CYXJUZXh0U3R5bGUiLCJnbG9iYWxEYXRhIiwidXNlckluZm8iLCJ1c2UiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInRyYWNlVXNlciIsIndlcHkiLCJhcHAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQTs7OztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUFnQkUsc0JBQWM7QUFBQTs7QUFBQTs7QUFBQSxVQWRkQSxNQWNjLEdBZEw7QUFDUEMsYUFBTyxDQUFDLGFBQUQsRUFBZ0IsWUFBaEIsRUFBOEIsWUFBOUIsQ0FEQTtBQUVQQyxjQUFRO0FBQ05DLDZCQUFxQixPQURmO0FBRU5DLHNDQUE4QixNQUZ4QjtBQUdOQyxnQ0FBd0IsUUFIbEI7QUFJTkMsZ0NBQXdCO0FBSmxCO0FBRkQsS0FjSztBQUFBLFVBSmRDLFVBSWMsR0FKRDtBQUNYQyxnQkFBVTtBQURDLEtBSUM7O0FBRVosVUFBS0MsR0FBTCxDQUFTLFlBQVQ7QUFDQUMsT0FBR0MsS0FBSCxDQUFTQyxJQUFULENBQWM7QUFDWkMsaUJBQVc7QUFEQyxLQUFkO0FBSFk7QUFNYjs7O0VBckIwQkMsZUFBS0MsRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB3ZXB5IGZyb20gJ3dlcHknO1xuaW1wb3J0ICd3ZXB5LWFzeW5jLWZ1bmN0aW9uJztcbmltcG9ydCBVdGlscyBmcm9tICcuL3V0aWxzL3V0aWxzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgd2VweS5hcHAge1xuICBjb25maWcgPSB7XG4gICAgcGFnZXM6IFsncGFnZXMvaW5kZXgnLCAncGFnZXMvZWRpdCcsICdwYWdlcy9ub3RlJ10sXG4gICAgd2luZG93OiB7XG4gICAgICBiYWNrZ3JvdW5kVGV4dFN0eWxlOiAnbGlnaHQnLFxuICAgICAgbmF2aWdhdGlvbkJhckJhY2tncm91bmRDb2xvcjogJyNmZmYnLFxuICAgICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ1dlQ2hhdCcsXG4gICAgICBuYXZpZ2F0aW9uQmFyVGV4dFN0eWxlOiAnYmxhY2snXG4gICAgfVxuICB9O1xuXG4gIGdsb2JhbERhdGEgPSB7XG4gICAgdXNlckluZm86IG51bGxcbiAgfTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMudXNlKCdyZXF1ZXN0Zml4Jyk7XG4gICAgd3guY2xvdWQuaW5pdCh7XG4gICAgICB0cmFjZVVzZXI6IHRydWVcbiAgICB9KTtcbiAgfVxufVxuIl19