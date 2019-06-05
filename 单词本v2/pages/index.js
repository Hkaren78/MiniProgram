Object.defineProperty(exports, "__esModule", {
    value: true
});

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

var _wepy = require("./../npm/wepy/lib/wepy.js");

var _wepy2 = _interopRequireDefault(_wepy);

var _utils = require("./../utils/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _dictionary = require("./../cloud/dictionary.js");

var _dictionary2 = _interopRequireDefault(_dictionary);

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

function _asyncToGenerator(fn) {
    return function() {
        var gen = fn.apply(this, arguments);
        return new Promise(function(resolve, reject) {
            function step(key, arg) {
                try {
                    var info = gen[key](arg);
                    var value = info.value;
                } catch (error) {
                    reject(error);
                    return;
                }
                if (info.done) {
                    resolve(value);
                } else {
                    return Promise.resolve(value).then(function(value) {
                        step("next", value);
                    }, function(err) {
                        step("throw", err);
                    });
                }
            }
            return step("next");
        });
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

var cacheKey = "groups";

var Index = function(_wepy$page) {
    _inherits(Index, _wepy$page);
    function Index() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Index);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "单词本",
            usingComponents: {
                "van-icon": "../components/vant/icon",
                "demo-block": "../components/vant/demo-block",
                "van-cell": "../components/vant/cell",
                "van-cell-group": "../components/vant/cell-group"
            }
        }, _this.components = {}, _this.data = {
            list: {}
        }, _this.computed = {
            emptyPage: function emptyPage() {
                return JSON.stringify(this.list) === "{}";
            }
        }, _this.methods = {
            naviToNote: function naviToNote(d) {
                var _d$currentTarget$data = d.currentTarget.dataset, lan = _d$currentTarget$data.lan, group = _d$currentTarget$data.group;
                _utils2.default.navi("/pages/note?language=" + lan + "&group=" + group);
            },
            addLanguage: function addLanguage(d) {
                _utils2.default.navi("/pages/edit?pageMode=group");
            }
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Index, [ {
        key: "onLoad",
        value: function onLoad() {
            this.queryDict();
            // dict.save('English','默认组','easy',['简单','很简单']);
            // dict.save('English','默认组','hard',['难','很难']);
            // dict.save('English','组2','JAVA',['编程语言','一个编程语言']);
            // dict.save('English','组2','js',['编程语言','做网站']);
            // dict.save('日本語','默认组','哇达西哇',['简单','很简单']);
            // dict.save('日本語','组2','搜噶',['难','很难']);
                }
    }, {
        key: "onShow",
        value: function onShow() {
            this.queryDict();
        }
    }, {
        key: "queryDict",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                var data, list, i;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _dictionary2.default.all();

                          case 2:
                            data = _context.sent;
                            list = {};
                            data.forEach(function(item) {
                                var language = item.language, word = item.word, meanings = item.meanings, group = item.group;
                                if (list[language] == null) list[language] = new Set();
                                list[language].add(group);
                            });
                            for (i in list) {
                                list[i] = [].concat(_toConsumableArray(list[i]));
                            }
                            this.cache(list);
                            this.getCache();

                          case 8:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function queryDict() {
                return _ref2.apply(this, arguments);
            }
            return queryDict;
        }()
    }, {
        key: "cache",
        value: function cache(d) {
            wx.setStorageSync(cacheKey, d);
        }
    }, {
        key: "getCache",
        value: function getCache() {
            this.list = wx.getStorageSync(cacheKey);
            this.$apply();
        }
    } ]);
    return Index;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Index, "pages/index"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbImNhY2hlS2V5IiwiSW5kZXgiLCJjb25maWciLCJuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0IiwidXNpbmdDb21wb25lbnRzIiwiY29tcG9uZW50cyIsImRhdGEiLCJsaXN0IiwiY29tcHV0ZWQiLCJlbXB0eVBhZ2UiLCJKU09OIiwic3RyaW5naWZ5IiwibWV0aG9kcyIsIm5hdmlUb05vdGUiLCJkIiwiY3VycmVudFRhcmdldCIsImRhdGFzZXQiLCJsYW4iLCJncm91cCIsIlV0aWxzIiwibmF2aSIsImFkZExhbmd1YWdlIiwiZXZlbnRzIiwicXVlcnlEaWN0IiwiZGljdCIsImFsbCIsImZvckVhY2giLCJsYW5ndWFnZSIsIml0ZW0iLCJ3b3JkIiwibWVhbmluZ3MiLCJTZXQiLCJhZGQiLCJpIiwiY2FjaGUiLCJnZXRDYWNoZSIsInd4Iiwic2V0U3RvcmFnZVN5bmMiLCJnZXRTdG9yYWdlU3luYyIsIiRhcHBseSIsIndlcHkiLCJwYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFNQSxXQUFXLFFBQWpCOztJQUNxQkMsSzs7Ozs7Ozs7Ozs7Ozs7b0xBQ25CQyxNLEdBQVM7QUFDUEMsOEJBQXdCLEtBRGpCO0FBRVBDLHVCQUFpQjtBQUNmLG9CQUFZLHlCQURHO0FBRWYsc0JBQWMsK0JBRkM7QUFHZixvQkFBWSx5QkFIRztBQUlmLDBCQUFrQjtBQUpIO0FBRlYsSyxRQVNUQyxVLEdBQWEsRSxRQUNiQyxJLEdBQU87QUFDTEMsWUFBTTtBQURELEssUUFJUEMsUSxHQUFXO0FBQ1RDLGVBRFMsdUJBQ0c7QUFDVixlQUFPQyxLQUFLQyxTQUFMLENBQWUsS0FBS0osSUFBcEIsTUFBOEIsSUFBckM7QUFDRDtBQUhRLEssUUFNWEssTyxHQUFVO0FBQ1JDLGdCQURRLHNCQUNHQyxDQURILEVBQ007QUFBQSxvQ0FDV0EsRUFBRUMsYUFBRixDQUFnQkMsT0FEM0I7QUFBQSxZQUNKQyxHQURJLHlCQUNKQSxHQURJO0FBQUEsWUFDQ0MsS0FERCx5QkFDQ0EsS0FERDs7QUFFWkMsd0JBQU1DLElBQU4sMkJBQW1DSCxHQUFuQyxlQUFnREMsS0FBaEQ7QUFDRCxPQUpPO0FBS1JHLGlCQUxRLHVCQUtJUCxDQUxKLEVBS087QUFDYkssd0JBQU1DLElBQU47QUFDRDtBQVBPLEssUUFVVkUsTSxHQUFTLEU7Ozs7OzZCQUVBO0FBQ1AsV0FBS0MsU0FBTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNEOzs7NkJBQ1E7QUFDUCxXQUFLQSxTQUFMO0FBQ0Q7Ozs7Ozs7Ozs7O3VCQUVvQkMscUJBQUtDLEdBQUwsRTs7O0FBQWJuQixvQjtBQUNBQyxvQixHQUFPLEU7O0FBQ2JELHFCQUFLb0IsT0FBTCxDQUFhLGdCQUFRO0FBQUEsc0JBQ1hDLFFBRFcsR0FDeUJDLElBRHpCLENBQ1hELFFBRFc7QUFBQSxzQkFDREUsSUFEQyxHQUN5QkQsSUFEekIsQ0FDREMsSUFEQztBQUFBLHNCQUNLQyxRQURMLEdBQ3lCRixJQUR6QixDQUNLRSxRQURMO0FBQUEsc0JBQ2VaLEtBRGYsR0FDeUJVLElBRHpCLENBQ2VWLEtBRGY7O0FBRW5CLHNCQUFJWCxLQUFLb0IsUUFBTCxLQUFrQixJQUF0QixFQUE0QnBCLEtBQUtvQixRQUFMLElBQWlCLElBQUlJLEdBQUosRUFBakI7QUFDNUJ4Qix1QkFBS29CLFFBQUwsRUFBZUssR0FBZixDQUFtQmQsS0FBbkI7QUFDRCxpQkFKRDtBQUtBLHFCQUFTZSxDQUFULElBQWMxQixJQUFkLEVBQW9CO0FBQ2xCQSx1QkFBSzBCLENBQUwsaUNBQWMxQixLQUFLMEIsQ0FBTCxDQUFkO0FBQ0Q7QUFDRCxxQkFBS0MsS0FBTCxDQUFXM0IsSUFBWDtBQUNBLHFCQUFLNEIsUUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OzBCQUVJckIsQyxFQUFHO0FBQ1BzQixTQUFHQyxjQUFILENBQWtCckMsUUFBbEIsRUFBNEJjLENBQTVCO0FBQ0Q7OzsrQkFDVTtBQUNULFdBQUtQLElBQUwsR0FBWTZCLEdBQUdFLGNBQUgsQ0FBa0J0QyxRQUFsQixDQUFaO0FBQ0EsV0FBS3VDLE1BQUw7QUFDRDs7OztFQWpFZ0NDLGVBQUtDLEk7O2tCQUFuQnhDLEsiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuaW1wb3J0IHdlcHkgZnJvbSAnd2VweSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBkaWN0IGZyb20gJy4uL2Nsb3VkL2RpY3Rpb25hcnknO1xyXG5jb25zdCBjYWNoZUtleSA9ICdncm91cHMnO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRleCBleHRlbmRzIHdlcHkucGFnZSB7XHJcbiAgY29uZmlnID0ge1xyXG4gICAgbmF2aWdhdGlvbkJhclRpdGxlVGV4dDogJ+WNleivjeacrCcsXHJcbiAgICB1c2luZ0NvbXBvbmVudHM6IHtcclxuICAgICAgJ3Zhbi1pY29uJzogJy4uL2NvbXBvbmVudHMvdmFudC9pY29uJyxcclxuICAgICAgJ2RlbW8tYmxvY2snOiAnLi4vY29tcG9uZW50cy92YW50L2RlbW8tYmxvY2snLFxyXG4gICAgICAndmFuLWNlbGwnOiAnLi4vY29tcG9uZW50cy92YW50L2NlbGwnLFxyXG4gICAgICAndmFuLWNlbGwtZ3JvdXAnOiAnLi4vY29tcG9uZW50cy92YW50L2NlbGwtZ3JvdXAnXHJcbiAgICB9XHJcbiAgfTtcclxuICBjb21wb25lbnRzID0ge307XHJcbiAgZGF0YSA9IHtcclxuICAgIGxpc3Q6IHt9XHJcbiAgfTtcclxuXHJcbiAgY29tcHV0ZWQgPSB7XHJcbiAgICBlbXB0eVBhZ2UoKSB7XHJcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3QpID09PSAne30nO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBuYXZpVG9Ob3RlKGQpIHtcclxuICAgICAgY29uc3QgeyBsYW4sIGdyb3VwIH0gPSBkLmN1cnJlbnRUYXJnZXQuZGF0YXNldDtcclxuICAgICAgVXRpbHMubmF2aShgL3BhZ2VzL25vdGU/bGFuZ3VhZ2U9JHtsYW59Jmdyb3VwPSR7Z3JvdXB9YCk7XHJcbiAgICB9LFxyXG4gICAgYWRkTGFuZ3VhZ2UoZCkge1xyXG4gICAgICBVdGlscy5uYXZpKGAvcGFnZXMvZWRpdD9wYWdlTW9kZT1ncm91cGApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV2ZW50cyA9IHt9O1xyXG5cclxuICBvbkxvYWQoKSB7XHJcbiAgICB0aGlzLnF1ZXJ5RGljdCgpO1xyXG4gICAgLy8gZGljdC5zYXZlKCdFbmdsaXNoJywn6buY6K6k57uEJywnZWFzeScsWyfnroDljZUnLCflvojnroDljZUnXSk7XHJcbiAgICAvLyBkaWN0LnNhdmUoJ0VuZ2xpc2gnLCfpu5jorqTnu4QnLCdoYXJkJyxbJ+mavicsJ+W+iOmaviddKTtcclxuICAgIC8vIGRpY3Quc2F2ZSgnRW5nbGlzaCcsJ+e7hDInLCdKQVZBJyxbJ+e8lueoi+ivreiogCcsJ+S4gOS4que8lueoi+ivreiogCddKTtcclxuICAgIC8vIGRpY3Quc2F2ZSgnRW5nbGlzaCcsJ+e7hDInLCdqcycsWyfnvJbnqIvor63oqIAnLCflgZrnvZHnq5knXSk7XHJcbiAgICAvLyBkaWN0LnNhdmUoJ+aXpeacrOiqnicsJ+m7mOiupOe7hCcsJ+WTh+i+vuilv+WThycsWyfnroDljZUnLCflvojnroDljZUnXSk7XHJcbiAgICAvLyBkaWN0LnNhdmUoJ+aXpeacrOiqnicsJ+e7hDInLCfmkJzlmbYnLFsn6Zq+Jywn5b6I6Zq+J10pO1xyXG4gIH1cclxuICBvblNob3coKSB7XHJcbiAgICB0aGlzLnF1ZXJ5RGljdCgpO1xyXG4gIH1cclxuICBhc3luYyBxdWVyeURpY3QoKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZGljdC5hbGwoKTtcclxuICAgIGNvbnN0IGxpc3QgPSB7fTtcclxuICAgIGRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgeyBsYW5ndWFnZSwgd29yZCwgbWVhbmluZ3MsIGdyb3VwIH0gPSBpdGVtO1xyXG4gICAgICBpZiAobGlzdFtsYW5ndWFnZV0gPT0gbnVsbCkgbGlzdFtsYW5ndWFnZV0gPSBuZXcgU2V0KCk7XHJcbiAgICAgIGxpc3RbbGFuZ3VhZ2VdLmFkZChncm91cCk7XHJcbiAgICB9KTtcclxuICAgIGZvciAobGV0IGkgaW4gbGlzdCkge1xyXG4gICAgICBsaXN0W2ldID0gWy4uLmxpc3RbaV1dO1xyXG4gICAgfVxyXG4gICAgdGhpcy5jYWNoZShsaXN0KTtcclxuICAgIHRoaXMuZ2V0Q2FjaGUoKTtcclxuICB9XHJcbiAgY2FjaGUoZCkge1xyXG4gICAgd3guc2V0U3RvcmFnZVN5bmMoY2FjaGVLZXksIGQpO1xyXG4gIH1cclxuICBnZXRDYWNoZSgpIHtcclxuICAgIHRoaXMubGlzdCA9IHd4LmdldFN0b3JhZ2VTeW5jKGNhY2hlS2V5KTtcclxuICAgIHRoaXMuJGFwcGx5KCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==