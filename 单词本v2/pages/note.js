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

var _dictionary = require("./../cloud/dictionary.js");

var _dictionary2 = _interopRequireDefault(_dictionary);

var _utils = require("./../utils/utils.js");

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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

var Note = function(_wepy$page) {
    _inherits(Note, _wepy$page);
    function Note() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Note);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Note.__proto__ || Object.getPrototypeOf(Note)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "Note",
            usingComponents: {
                "demo-block": "../components/vant/demo-block",
                "van-cell": "../components/vant/cell",
                "van-cell-group": "../components/vant/cell-group"
            }
        }, _this.components = {}, _this.data = {
            list: []
        }, _this.computed = {
            ThisPageIsEmpty: function ThisPageIsEmpty() {
                var list = this.list;
                return list.length === 1 && list[0].word == null;
            }
        }, _this.methods = {
            edit: function edit(e) {
                var _id = e.currentTarget.dataset._id;
                /* 跳转到编辑页 */                _utils2.default.navi("/pages/edit?rule=" + JSON.stringify({
                    _id: _id
                }) + "&pageMode=meaning");
            },
            goToAddWord: function goToAddWord() {
                _utils2.default.navi("/pages/edit?rule=" + JSON.stringify(this.rule) + "&pageMode=word");
            },
            deleteGroup: function() {
                var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                    var uncomfirmed, uncomfirmedAgain, res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return _utils2.default.showActionSheet();

                              case 2:
                                uncomfirmed = _context.sent;
                                if (!uncomfirmed) {
                                    _context.next = 5;
                                    break;
                                }
                                return _context.abrupt("return");

                              case 5:
                                _context.next = 7;
                                return _utils2.default.showActionSheet([ "删除后无法恢复，真的要删除吗？" ]);

                              case 7:
                                uncomfirmedAgain = _context.sent;
                                if (!uncomfirmedAgain) {
                                    _context.next = 10;
                                    break;
                                }
                                return _context.abrupt("return");

                              case 10:
                                _context.next = 12;
                                return _dictionary2.default.deleteGroup(this.rule);

                              case 12:
                                res = _context.sent;
                                _utils2.default.gobackWhenSuccess(res);

                              case 14:
                              case "end":
                                return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function deleteGroup() {
                    return _ref2.apply(this, arguments);
                }
                return deleteGroup;
            }()
        }, _this.events = {}, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Note, [ {
        key: "onLoad",
        value: function onLoad(rule) {
            this.rule = rule;
            this.queryDict();
        }
    }, {
        key: "onShow",
        value: function onShow() {
            this.queryDict();
        }
    }, {
        key: "queryDict",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                var data;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _dictionary2.default.where(this.rule);

                          case 2:
                            data = _context2.sent;
                            this.list = data;
                            this.$apply();

                          case 5:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function queryDict() {
                return _ref3.apply(this, arguments);
            }
            return queryDict;
        }()
    } ]);
    return Note;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Note, "pages/note"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGUuanMiXSwibmFtZXMiOlsiTm90ZSIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImxpc3QiLCJjb21wdXRlZCIsIlRoaXNQYWdlSXNFbXB0eSIsImxlbmd0aCIsIndvcmQiLCJtZXRob2RzIiwiZWRpdCIsImUiLCJfaWQiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsIlV0aWxzIiwibmF2aSIsIkpTT04iLCJzdHJpbmdpZnkiLCJnb1RvQWRkV29yZCIsInJ1bGUiLCJkZWxldGVHcm91cCIsInNob3dBY3Rpb25TaGVldCIsInVuY29tZmlybWVkIiwidW5jb21maXJtZWRBZ2FpbiIsImRpY3QiLCJyZXMiLCJnb2JhY2tXaGVuU3VjY2VzcyIsImV2ZW50cyIsInF1ZXJ5RGljdCIsIndoZXJlIiwiJGFwcGx5Iiwid2VweSIsInBhZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7SUFDcUJBLEk7Ozs7Ozs7Ozs7Ozs7O2tMQUNuQkMsTSxHQUFTO0FBQ1BDLDhCQUF3QixNQURqQjtBQUVQQyx1QkFBaUI7QUFDZixzQkFBYywrQkFEQztBQUVmLG9CQUFZLHlCQUZHO0FBR2YsMEJBQWtCO0FBSEg7QUFGVixLLFFBUVRDLFUsR0FBYSxFLFFBQ2JDLEksR0FBTztBQUNMQyxZQUFNO0FBREQsSyxRQUlQQyxRLEdBQVc7QUFDVEMscUJBRFMsNkJBQ1M7QUFDaEIsWUFBTUYsT0FBTyxLQUFLQSxJQUFsQjtBQUNBLGVBQU9BLEtBQUtHLE1BQUwsS0FBZ0IsQ0FBaEIsSUFBcUJILEtBQUssQ0FBTCxFQUFRSSxJQUFSLElBQWdCLElBQTVDO0FBQ0Q7QUFKUSxLLFFBT1hDLE8sR0FBVTtBQUNSQyxVQURRLGdCQUNIQyxDQURHLEVBQ0E7QUFBQSxZQUNFQyxHQURGLEdBQ1VELEVBQUVFLGFBQUYsQ0FBZ0JDLE9BRDFCLENBQ0VGLEdBREY7QUFFTjs7QUFDQUcsd0JBQU1DLElBQU4sdUJBQ3NCQyxLQUFLQyxTQUFMLENBQWUsRUFBRU4sUUFBRixFQUFmLENBRHRCO0FBR0QsT0FQTztBQVFSTyxpQkFSUSx5QkFRTTtBQUNaSix3QkFBTUMsSUFBTix1QkFBK0JDLEtBQUtDLFNBQUwsQ0FBZSxLQUFLRSxJQUFwQixDQUEvQjtBQUNELE9BVk87QUFXRkMsaUJBWEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVlvQk4sZ0JBQU1PLGVBQU4sRUFacEI7O0FBQUE7QUFZQUMsNkJBWkE7O0FBQUEsdUJBYUZBLFdBYkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQWN5QlIsZ0JBQU1PLGVBQU4sQ0FBc0IsQ0FBQyxpQkFBRCxDQUF0QixDQWR6Qjs7QUFBQTtBQWNBRSxrQ0FkQTs7QUFBQSx1QkFlRkEsZ0JBZkU7QUFBQTtBQUFBO0FBQUE7O0FBQUE7O0FBQUE7QUFBQTtBQUFBLHlCQWdCWUMscUJBQUtKLFdBQUwsQ0FBaUIsS0FBS0QsSUFBdEIsQ0FoQlo7O0FBQUE7QUFnQkFNLHFCQWhCQTs7QUFpQk5YLGtDQUFNWSxpQkFBTixDQUF3QkQsR0FBeEI7O0FBakJNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUEsSyxRQXFCVkUsTSxHQUFTLEU7Ozs7OzJCQUNGUixJLEVBQU07QUFDWCxXQUFLQSxJQUFMLEdBQVlBLElBQVo7QUFDQSxXQUFLUyxTQUFMO0FBQ0Q7Ozs2QkFDUTtBQUNQLFdBQUtBLFNBQUw7QUFDRDs7Ozs7Ozs7Ozs7dUJBRW9CSixxQkFBS0ssS0FBTCxDQUFXLEtBQUtWLElBQWhCLEM7OztBQUFiakIsb0I7O0FBQ04scUJBQUtDLElBQUwsR0FBWUQsSUFBWjtBQUNBLHFCQUFLNEIsTUFBTDs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQXJEOEJDLGVBQUtDLEk7O2tCQUFsQm5DLEkiLCJmaWxlIjoibm90ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGRpY3QgZnJvbSAnLi4vY2xvdWQvZGljdGlvbmFyeSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdGUgZXh0ZW5kcyB3ZXB5LnBhZ2Uge1xyXG4gIGNvbmZpZyA9IHtcclxuICAgIG5hdmlnYXRpb25CYXJUaXRsZVRleHQ6ICdOb3RlJyxcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnZGVtby1ibG9jayc6ICcuLi9jb21wb25lbnRzL3ZhbnQvZGVtby1ibG9jaycsXHJcbiAgICAgICd2YW4tY2VsbCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbCcsXHJcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC1ncm91cCdcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuICBkYXRhID0ge1xyXG4gICAgbGlzdDogW11cclxuICB9O1xyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIFRoaXNQYWdlSXNFbXB0eSgpIHtcclxuICAgICAgY29uc3QgbGlzdCA9IHRoaXMubGlzdDtcclxuICAgICAgcmV0dXJuIGxpc3QubGVuZ3RoID09PSAxICYmIGxpc3RbMF0ud29yZCA9PSBudWxsO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIG1ldGhvZHMgPSB7XHJcbiAgICBlZGl0KGUpIHtcclxuICAgICAgY29uc3QgeyBfaWQgfSA9IGUuY3VycmVudFRhcmdldC5kYXRhc2V0O1xyXG4gICAgICAvKiDot7PovazliLDnvJbovpHpobUgKi9cclxuICAgICAgVXRpbHMubmF2aShcclxuICAgICAgICBgL3BhZ2VzL2VkaXQ/cnVsZT0ke0pTT04uc3RyaW5naWZ5KHsgX2lkIH0pfSZwYWdlTW9kZT1tZWFuaW5nYFxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGdvVG9BZGRXb3JkKCkge1xyXG4gICAgICBVdGlscy5uYXZpKGAvcGFnZXMvZWRpdD9ydWxlPSR7SlNPTi5zdHJpbmdpZnkodGhpcy5ydWxlKX0mcGFnZU1vZGU9d29yZGApO1xyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZUdyb3VwKCkge1xyXG4gICAgICBjb25zdCB1bmNvbWZpcm1lZCA9IGF3YWl0IFV0aWxzLnNob3dBY3Rpb25TaGVldCgpO1xyXG4gICAgICBpZiAodW5jb21maXJtZWQpIHJldHVybjtcclxuICAgICAgY29uc3QgdW5jb21maXJtZWRBZ2FpbiA9IGF3YWl0IFV0aWxzLnNob3dBY3Rpb25TaGVldChbJ+WIoOmZpOWQjuaXoOazleaBouWkje+8jOecn+eahOimgeWIoOmZpOWQl++8nyddKTtcclxuICAgICAgaWYgKHVuY29tZmlybWVkQWdhaW4pIHJldHVybjtcclxuICAgICAgY29uc3QgcmVzID0gYXdhaXQgZGljdC5kZWxldGVHcm91cCh0aGlzLnJ1bGUpO1xyXG4gICAgICBVdGlscy5nb2JhY2tXaGVuU3VjY2VzcyhyZXMpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGV2ZW50cyA9IHt9O1xyXG4gIG9uTG9hZChydWxlKSB7XHJcbiAgICB0aGlzLnJ1bGUgPSBydWxlO1xyXG4gICAgdGhpcy5xdWVyeURpY3QoKTtcclxuICB9XHJcbiAgb25TaG93KCkge1xyXG4gICAgdGhpcy5xdWVyeURpY3QoKTtcclxuICB9XHJcbiAgYXN5bmMgcXVlcnlEaWN0KCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRpY3Qud2hlcmUodGhpcy5ydWxlKTtcclxuICAgIHRoaXMubGlzdCA9IGRhdGE7XHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxufVxyXG4iXX0=