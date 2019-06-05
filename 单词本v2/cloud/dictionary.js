Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function(target) {
    for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];
        for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
};

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

var _utils = require("./../utils/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _flag = require("./flag.js");

var _flag2 = _interopRequireDefault(_flag);

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

var success = _flag2.default.success, fail = _flag2.default.fail;

var loading = _utils2.default.loading, loaded = _utils2.default.loaded;

var Dictionary = function() {
    function Dictionary() {
        _classCallCheck(this, Dictionary);
        wx.cloud.init({
            traceUser: true
        });
        this.instantiateDb();
    }
    _createClass(Dictionary, [ {
        key: "instantiateDb",
        value: function instantiateDb() {
            var db = wx.cloud.database({
                env: "my-dictionary-f77667"
            });
            this.dict = db.collection("dict");
        }
    }, {
        key: "_getOpenid",
        value: function() {
            var _ref = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            _context.next = 2;
                            return _utils2.default.getOpenid();

                          case 2:
                            return _context.abrupt("return", _context.sent);

                          case 3:
                          case "end":
                            return _context.stop();
                        }
                    }
                }, _callee, this);
            }));
            function _getOpenid() {
                return _ref.apply(this, arguments);
            }
            return _getOpenid;
        }()
    }, {
        key: "all",
        value: function() {
            var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2() {
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            loading();
                            _context2.next = 3;
                            return this._getOpenid();

                          case 3:
                            this.openid = _context2.sent;
                            loaded();
                            _context2.next = 7;
                            return this.where();

                          case 7:
                            return _context2.abrupt("return", _context2.sent);

                          case 8:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function all() {
                return _ref2.apply(this, arguments);
            }
            return all;
        }()
    }, {
        key: "read",
        value: function() {
            var _ref3 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3(word) {
                var res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            loading();
                            _context3.next = 3;
                            return this.dict.doc(word).get();

                          case 3:
                            res = _context3.sent;
                            loaded();
                            return _context3.abrupt("return", res.data);

                          case 6:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function read(_x) {
                return _ref3.apply(this, arguments);
            }
            return read;
        }()
    }, {
        key: "save",
        value: function() {
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4(language, group, word, meanings) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            loading();
                            _context4.next = 3;
                            return this.dict.add({
                                data: {
                                    word: word,
                                    meanings: meanings,
                                    language: language,
                                    group: group
                                }
                            });

                          case 3:
                            res = _context4.sent;
                            loaded();
                            if (!(res.errMsg !== "collection.add:ok")) {
                                _context4.next = 10;
                                break;
                            }
                            _utils2.default.toastError();
                            return _context4.abrupt("return", fail);

                          case 10:
                            return _context4.abrupt("return", success);

                          case 11:
                          case "end":
                            return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
            function save(_x2, _x3, _x4, _x5) {
                return _ref4.apply(this, arguments);
            }
            return save;
        }()
    }, {
        key: "update",
        value: function() {
            var _ref5 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee5(id, data) {
                var res;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            loading();
                            _context5.next = 3;
                            return this.dict.doc(id).update({
                                data: data
                            });

                          case 3:
                            res = _context5.sent;
                            loaded();
                            return _context5.abrupt("return", success);

                          case 6:
                          case "end":
                            return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));
            function update(_x6, _x7) {
                return _ref5.apply(this, arguments);
            }
            return update;
        }()
    }, {
        key: "where",
        value: function() {
            var _ref6 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee6() {
                var rule = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var result, i, _ref7, data;
                return regeneratorRuntime.wrap(function _callee6$(_context6) {
                    while (1) {
                        switch (_context6.prev = _context6.next) {
                          case 0:
                            result = [];
                            i = 0;
                            loading();

                          case 3:
                            if (!true) {
                                _context6.next = 14;
                                break;
                            }
                            _context6.next = 6;
                            return this.dict.skip(i).where(_extends({}, rule, {
                                _openid: this.openid
                            })).get();

                          case 6:
                            _ref7 = _context6.sent;
                            data = _ref7.data;
                            if (!(data.length === 0)) {
                                _context6.next = 10;
                                break;
                            }
                            return _context6.abrupt("break", 14);

                          case 10:
                            result = result.concat(data);
                            i += 20;
                            _context6.next = 3;
                            break;

                          case 14:
                            loaded();
                            return _context6.abrupt("return", result);

                          case 16:
                          case "end":
                            return _context6.stop();
                        }
                    }
                }, _callee6, this);
            }));
            function where() {
                return _ref6.apply(this, arguments);
            }
            return where;
        }()
    }, {
        key: "deleteWord",
        value: function() {
            var _ref8 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee7(id) {
                var res;
                return regeneratorRuntime.wrap(function _callee7$(_context7) {
                    while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            _context7.next = 2;
                            return this.dict.doc(id).remove();

                          case 2:
                            res = _context7.sent;
                            if (!(res.errMsg !== "document.remove:ok")) {
                                _context7.next = 8;
                                break;
                            }
                            _utils2.default.toastError();
                            return _context7.abrupt("return", fail);

                          case 8:
                            return _context7.abrupt("return", success);

                          case 9:
                          case "end":
                            return _context7.stop();
                        }
                    }
                }, _callee7, this);
            }));
            function deleteWord(_x9) {
                return _ref8.apply(this, arguments);
            }
            return deleteWord;
        }()
    }, {
        key: "deleteGroup",
        value: function() {
            var _ref9 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee8(rule) {
                var _this = this;
                var data, ids, res;
                return regeneratorRuntime.wrap(function _callee8$(_context8) {
                    while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            /* 需校验openid，否则会删除其他用户的数据 */
                            loading();
                            _context8.next = 3;
                            return this.where(_extends({}, rule));

                          case 3:
                            data = _context8.sent;
                            ids = data.map(function(item) {
                                return item._id;
                            });
                            _context8.next = 7;
                            return Promise.all(ids.map(function(id) {
                                return _this.deleteWord(id);
                            }));

                          case 7:
                            res = _context8.sent;
                            loaded();
                            if (!(res.indexOf(false) > -1)) {
                                _context8.next = 14;
                                break;
                            }
                            _utils2.default.toastError();
                            return _context8.abrupt("return", fail);

                          case 14:
                            return _context8.abrupt("return", success);

                          case 15:
                          case "end":
                            return _context8.stop();
                        }
                    }
                }, _callee8, this);
            }));
            function deleteGroup(_x10) {
                return _ref9.apply(this, arguments);
            }
            return deleteGroup;
        }()
    } ]);
    return Dictionary;
}();

exports.default = new Dictionary();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRpY3Rpb25hcnkuanMiXSwibmFtZXMiOlsic3VjY2VzcyIsImZsYWciLCJmYWlsIiwibG9hZGluZyIsIlV0aWxzIiwibG9hZGVkIiwiRGljdGlvbmFyeSIsInd4IiwiY2xvdWQiLCJpbml0IiwidHJhY2VVc2VyIiwiaW5zdGFudGlhdGVEYiIsImRiIiwiZGF0YWJhc2UiLCJlbnYiLCJkaWN0IiwiY29sbGVjdGlvbiIsImdldE9wZW5pZCIsIl9nZXRPcGVuaWQiLCJvcGVuaWQiLCJ3aGVyZSIsIndvcmQiLCJkb2MiLCJnZXQiLCJyZXMiLCJkYXRhIiwibGFuZ3VhZ2UiLCJncm91cCIsIm1lYW5pbmdzIiwiYWRkIiwiZXJyTXNnIiwidG9hc3RFcnJvciIsImlkIiwidXBkYXRlIiwicnVsZSIsInJlc3VsdCIsImkiLCJza2lwIiwiX29wZW5pZCIsImxlbmd0aCIsImNvbmNhdCIsInJlbW92ZSIsImlkcyIsIm1hcCIsIml0ZW0iLCJfaWQiLCJQcm9taXNlIiwiYWxsIiwiZGVsZXRlV29yZCIsImluZGV4T2YiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTs7OztBQUNBOzs7Ozs7Ozs7O0lBQ1FBLE8sR0FBa0JDLGMsQ0FBbEJELE87SUFBU0UsSSxHQUFTRCxjLENBQVRDLEk7SUFFYkMsTyxHQUVBQyxlLENBRkFELE87SUFDQUUsTSxHQUNBRCxlLENBREFDLE07O0lBRUVDLFU7QUFDRiwwQkFBYztBQUFBOztBQUNWQyxXQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBYztBQUNWQyx1QkFBVztBQURELFNBQWQ7QUFHQSxhQUFLQyxhQUFMO0FBQ0g7Ozs7d0NBQ2U7QUFDWixnQkFBTUMsS0FBS0wsR0FBR0MsS0FBSCxDQUFTSyxRQUFULENBQWtCO0FBQ3pCQyxxQkFBSztBQURvQixhQUFsQixDQUFYO0FBR0EsaUJBQUtDLElBQUwsR0FBWUgsR0FBR0ksVUFBSCxDQUFjLE1BQWQsQ0FBWjtBQUNIOzs7Ozs7Ozs7O3VDQUVnQlosZ0JBQU1hLFNBQU4sRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2JkOzt1Q0FDb0IsS0FBS2UsVUFBTCxFOzs7QUFBcEIscUNBQUtDLE07O0FBQ0xkOzt1Q0FDYSxLQUFLZSxLQUFMLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBRU5DLEk7Ozs7OztBQUNQbEI7O3VDQUNrQixLQUFLWSxJQUFMLENBQVVPLEdBQVYsQ0FBY0QsSUFBZCxFQUFvQkUsR0FBcEIsRTs7O0FBQVpDLG1DOztBQUNObkI7a0VBQ09tQixJQUFJQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVKQyxRLEVBQVVDLEssRUFBT04sSSxFQUFNTyxROzs7Ozs7QUFDOUJ6Qjs7dUNBQ2tCLEtBQUtZLElBQUwsQ0FBVWMsR0FBVixDQUFjO0FBQzVCSiwwQ0FBTTtBQUNGSixrREFERTtBQUVGTywwREFGRTtBQUdGRiwwREFIRTtBQUlGQztBQUpFO0FBRHNCLGlDQUFkLEM7OztBQUFaSCxtQzs7QUFRTm5COztzQ0FDSW1CLElBQUlNLE1BQUosS0FBZSxtQjs7Ozs7QUFDZjFCLGdEQUFNMkIsVUFBTjtrRUFDTzdCLEk7OztrRUFFQUYsTzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FHRmdDLEUsRUFBSVAsSTs7Ozs7O0FBQ2J0Qjs7dUNBQ2tCLEtBQUtZLElBQUwsQ0FBVU8sR0FBVixDQUFjVSxFQUFkLEVBQWtCQyxNQUFsQixDQUF5QixFQUFFUixVQUFGLEVBQXpCLEM7OztBQUFaRCxtQzs7QUFDTm5CO2tFQUNPTCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFFQ2tDLEksdUVBQU8sRTs7Ozs7Ozs7QUFDWEMsc0MsR0FBUyxFO0FBQ1RDLGlDLEdBQUksQzs7QUFDUmpDOzs7cUNBQ08sSTs7Ozs7O3VDQUNvQixLQUFLWSxJQUFMLENBQVVzQixJQUFWLENBQWVELENBQWYsRUFBa0JoQixLQUFsQixjQUE2QmMsSUFBN0IsSUFBbUNJLFNBQVMsS0FBS25CLE1BQWpELEtBQTJESSxHQUEzRCxFOzs7O0FBQWZFLG9DLFNBQUFBLEk7O3NDQUNKQSxLQUFLYyxNQUFMLEtBQWdCLEM7Ozs7Ozs7O0FBQ3BCSix5Q0FBU0EsT0FBT0ssTUFBUCxDQUFjZixJQUFkLENBQVQ7QUFDQVcscUNBQUssRUFBTDs7Ozs7QUFFSi9CO2tFQUNPOEIsTTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrR0FFTUgsRTs7Ozs7Ozt1Q0FDSyxLQUFLakIsSUFBTCxDQUFVTyxHQUFWLENBQWNVLEVBQWQsRUFBa0JTLE1BQWxCLEU7OztBQUFaakIsbUM7O3NDQUNGQSxJQUFJTSxNQUFKLEtBQWUsb0I7Ozs7O0FBQ2YxQixnREFBTTJCLFVBQU47a0VBQ083QixJOzs7a0VBRUFGLE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBR0drQyxJOzs7Ozs7OztBQUNkO0FBQ0EvQjs7dUNBQ21CLEtBQUtpQixLQUFMLGNBQ1pjLElBRFksRTs7O0FBQWJULG9DO0FBR0FpQixtQyxHQUFNakIsS0FBS2tCLEdBQUwsQ0FBUztBQUFBLDJDQUFRQyxLQUFLQyxHQUFiO0FBQUEsaUNBQVQsQzs7dUNBQ01DLFFBQVFDLEdBQVIsQ0FBWUwsSUFBSUMsR0FBSixDQUFRO0FBQUEsMkNBQU0sTUFBS0ssVUFBTCxDQUFnQmhCLEVBQWhCLENBQU47QUFBQSxpQ0FBUixDQUFaLEM7OztBQUFaUixtQzs7QUFDTm5COztzQ0FDSW1CLElBQUl5QixPQUFKLENBQVksS0FBWixJQUFxQixDQUFDLEM7Ozs7O0FBQ3RCN0MsZ0RBQU0yQixVQUFOO2tFQUNPN0IsSTs7O2tFQUVBRixPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0JBS0osSUFBSU0sVUFBSixFIiwiZmlsZSI6ImRpY3Rpb25hcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMvdXRpbHMnO1xyXG5pbXBvcnQgZmxhZyBmcm9tICcuL2ZsYWcuanMnO1xyXG5jb25zdCB7IHN1Y2Nlc3MsIGZhaWwgfSA9IGZsYWc7XHJcbmNvbnN0IHtcclxuICAgIGxvYWRpbmcsXHJcbiAgICBsb2FkZWRcclxufSA9IFV0aWxzO1xyXG5jbGFzcyBEaWN0aW9uYXJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHd4LmNsb3VkLmluaXQoe1xyXG4gICAgICAgICAgICB0cmFjZVVzZXI6IHRydWVcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluc3RhbnRpYXRlRGIoKVxyXG4gICAgfVxyXG4gICAgaW5zdGFudGlhdGVEYigpIHtcclxuICAgICAgICBjb25zdCBkYiA9IHd4LmNsb3VkLmRhdGFiYXNlKHtcclxuICAgICAgICAgICAgZW52OiAnbXktZGljdGlvbmFyeS1mNzc2NjcnXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5kaWN0ID0gZGIuY29sbGVjdGlvbignZGljdCcpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgX2dldE9wZW5pZCgpIHtcclxuICAgICAgICByZXR1cm4gYXdhaXQgVXRpbHMuZ2V0T3BlbmlkKCk7XHJcbiAgICB9XHJcbiAgICBhc3luYyBhbGwoKSB7XHJcbiAgICAgICAgbG9hZGluZygpO1xyXG4gICAgICAgIHRoaXMub3BlbmlkID0gYXdhaXQgdGhpcy5fZ2V0T3BlbmlkKCk7XHJcbiAgICAgICAgbG9hZGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMud2hlcmUoKVxyXG4gICAgfVxyXG4gICAgYXN5bmMgcmVhZCh3b3JkKSB7XHJcbiAgICAgICAgbG9hZGluZygpO1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGljdC5kb2Mod29yZCkuZ2V0KCk7XHJcbiAgICAgICAgbG9hZGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgICB9XHJcbiAgICBhc3luYyBzYXZlKGxhbmd1YWdlLCBncm91cCwgd29yZCwgbWVhbmluZ3MpIHtcclxuICAgICAgICBsb2FkaW5nKCk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0LmFkZCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIHdvcmQsXHJcbiAgICAgICAgICAgICAgICBtZWFuaW5ncyxcclxuICAgICAgICAgICAgICAgIGxhbmd1YWdlLFxyXG4gICAgICAgICAgICAgICAgZ3JvdXBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxvYWRlZCgpO1xyXG4gICAgICAgIGlmIChyZXMuZXJyTXNnICE9PSAnY29sbGVjdGlvbi5hZGQ6b2snKSB7XHJcbiAgICAgICAgICAgIFV0aWxzLnRvYXN0RXJyb3IoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhaWxcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VjY2Vzc1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGFzeW5jIHVwZGF0ZShpZCwgZGF0YSkge1xyXG4gICAgICAgIGxvYWRpbmcoKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmRpY3QuZG9jKGlkKS51cGRhdGUoeyBkYXRhIH0pXHJcbiAgICAgICAgbG9hZGVkKCk7XHJcbiAgICAgICAgcmV0dXJuIHN1Y2Nlc3M7XHJcbiAgICB9XHJcbiAgICBhc3luYyB3aGVyZShydWxlID0ge30pIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgbGV0IGkgPSAwO1xyXG4gICAgICAgIGxvYWRpbmcoKTtcclxuICAgICAgICB3aGlsZSAodHJ1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IGRhdGEgfSA9IGF3YWl0IHRoaXMuZGljdC5za2lwKGkpLndoZXJlKHsgLi4ucnVsZSwgX29wZW5pZDogdGhpcy5vcGVuaWQgfSkuZ2V0KCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmxlbmd0aCA9PT0gMCkgYnJlYWs7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQoZGF0YSk7XHJcbiAgICAgICAgICAgIGkgKz0gMjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRlZCgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBhc3luYyBkZWxldGVXb3JkKGlkKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0LmRvYyhpZCkucmVtb3ZlKClcclxuICAgICAgICBpZiAocmVzLmVyck1zZyAhPT0gJ2RvY3VtZW50LnJlbW92ZTpvaycpIHtcclxuICAgICAgICAgICAgVXRpbHMudG9hc3RFcnJvcigpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFpbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdWNjZXNzXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZGVsZXRlR3JvdXAocnVsZSkge1xyXG4gICAgICAgIC8qIOmcgOagoemqjG9wZW5pZO+8jOWQpuWImeS8muWIoOmZpOWFtuS7lueUqOaIt+eahOaVsOaNriAqL1xyXG4gICAgICAgIGxvYWRpbmcoKTtcclxuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy53aGVyZSh7XHJcbiAgICAgICAgICAgIC4uLnJ1bGVcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBpZHMgPSBkYXRhLm1hcChpdGVtID0+IGl0ZW0uX2lkKTtcclxuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBQcm9taXNlLmFsbChpZHMubWFwKGlkID0+IHRoaXMuZGVsZXRlV29yZChpZCkpKVxyXG4gICAgICAgIGxvYWRlZCgpO1xyXG4gICAgICAgIGlmIChyZXMuaW5kZXhPZihmYWxzZSkgPiAtMSkge1xyXG4gICAgICAgICAgICBVdGlscy50b2FzdEVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEaWN0aW9uYXJ5KCkiXX0=