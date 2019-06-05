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

var _utils = require("./../utils/utils.js");

var _utils2 = _interopRequireDefault(_utils);

var _flag = require("./flag.js");

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

var Dictionary = function() {
    function Dictionary() {
        _classCallCheck(this, Dictionary);
        wx.cloud.init({
            traceUser: true
        });
        this._getOpenid();
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
                var _openid, res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _openid = this._getOpenid();
                            _context2.next = 3;
                            return this.dict.where({
                                _openid: _openid
                            }).get();

                          case 3:
                            res = _context2.sent;
                            return _context2.abrupt("return", res.data);

                          case 5:
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
                            _context3.next = 2;
                            return this.dict.doc(word).get();

                          case 2:
                            res = _context3.sent;
                            return _context3.abrupt("return", res.data);

                          case 4:
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
            var _ref4 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4(word, meanings) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return this.dict.add({
                                data: {
                                    _id: word,
                                    meanings: meanings
                                }
                            });

                          case 2:
                            res = _context4.sent;
                            if (!(res.errMsg !== "collection.add:ok")) {
                                _context4.next = 8;
                                break;
                            }
                            _utils2.default.toastError();
                            return _context4.abrupt("return", _flag.fail);

                          case 8:
                            return _context4.abrupt("return", _flag.success);

                          case 9:
                          case "end":
                            return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
            function save(_x2, _x3) {
                return _ref4.apply(this, arguments);
            }
            return save;
        }()
    } ]);
    return Dictionary;
}();

exports.default = new Dictionary();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LmpzIl0sIm5hbWVzIjpbIkRpY3Rpb25hcnkiLCJ3eCIsImNsb3VkIiwiaW5pdCIsInRyYWNlVXNlciIsIl9nZXRPcGVuaWQiLCJpbnN0YW50aWF0ZURiIiwiZGIiLCJkYXRhYmFzZSIsImVudiIsImRpY3QiLCJjb2xsZWN0aW9uIiwiVXRpbHMiLCJnZXRPcGVuaWQiLCJfb3BlbmlkIiwid2hlcmUiLCJnZXQiLCJyZXMiLCJkYXRhIiwid29yZCIsImRvYyIsIm1lYW5pbmdzIiwiYWRkIiwiX2lkIiwiZXJyTXNnIiwidG9hc3RFcnJvciIsImZhaWwiLCJzdWNjZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOzs7O0FBQ0E7Ozs7Ozs7O0lBQ01BLFU7QUFDRiwwQkFBYztBQUFBOztBQUNWQyxXQUFHQyxLQUFILENBQVNDLElBQVQsQ0FBYztBQUNWQyx1QkFBVztBQURELFNBQWQ7QUFHQSxhQUFLQyxVQUFMO0FBQ0EsYUFBS0MsYUFBTDtBQUNIOzs7O3dDQUNlO0FBQ1osZ0JBQU1DLEtBQUtOLEdBQUdDLEtBQUgsQ0FBU00sUUFBVCxDQUFrQjtBQUN6QkMscUJBQUs7QUFEb0IsYUFBbEIsQ0FBWDtBQUdBLGlCQUFLQyxJQUFMLEdBQVlILEdBQUdJLFVBQUgsQ0FBYyxNQUFkLENBQVo7QUFDSDs7Ozs7Ozs7Ozt1Q0FFZ0JDLGdCQUFNQyxTQUFOLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1JDLHVDLEdBQVUsS0FBS1QsVUFBTCxFOzt1Q0FDRyxLQUFLSyxJQUFMLENBQ2JLLEtBRGEsQ0FDUDtBQUNIRDtBQURHLGlDQURPLEVBSWJFLEdBSmEsRTs7O0FBQVpDLG1DO2tFQUtDQSxJQUFJQyxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O2tHQUVKQyxJOzs7Ozs7O3VDQUNXLEtBQUtULElBQUwsQ0FBVVUsR0FBVixDQUFjRCxJQUFkLEVBQW9CSCxHQUFwQixFOzs7QUFBWkMsbUM7a0VBQ0NBLElBQUlDLEk7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0dBRUpDLEksRUFBTUUsUTs7Ozs7Ozt1Q0FDSyxLQUFLWCxJQUFMLENBQVVZLEdBQVYsQ0FBYztBQUM1QkosMENBQU07QUFDRkssNkNBQUtKLElBREg7QUFFRkU7QUFGRTtBQURzQixpQ0FBZCxDOzs7QUFBWkosbUM7O3NDQU1GQSxJQUFJTyxNQUFKLEtBQWUsbUI7Ozs7O0FBQ2ZaLGdEQUFNYSxVQUFOO2tFQUNPQyxVOzs7a0VBRUFDLGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztrQkFLSixJQUFJM0IsVUFBSixFIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFV0aWxzIGZyb20gJy4uL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IHsgc3VjY2VzcywgZmFpbCB9IGZyb20gJy4vZmxhZy5qcyc7XHJcbmNsYXNzIERpY3Rpb25hcnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgd3guY2xvdWQuaW5pdCh7XHJcbiAgICAgICAgICAgIHRyYWNlVXNlcjogdHJ1ZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX2dldE9wZW5pZCgpXHJcbiAgICAgICAgdGhpcy5pbnN0YW50aWF0ZURiKClcclxuICAgIH1cclxuICAgIGluc3RhbnRpYXRlRGIoKSB7XHJcbiAgICAgICAgY29uc3QgZGIgPSB3eC5jbG91ZC5kYXRhYmFzZSh7XHJcbiAgICAgICAgICAgIGVudjogJ215LWRpY3Rpb25hcnktZjc3NjY3J1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuZGljdCA9IGRiLmNvbGxlY3Rpb24oJ2RpY3QnKTtcclxuICAgIH1cclxuICAgIGFzeW5jIF9nZXRPcGVuaWQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IFV0aWxzLmdldE9wZW5pZCgpO1xyXG4gICAgfVxyXG4gICAgYXN5bmMgYWxsKCkge1xyXG4gICAgICAgY29uc3QgX29wZW5pZCA9IHRoaXMuX2dldE9wZW5pZCgpXHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0XHJcbiAgICAgICAgICAgIC53aGVyZSh7XHJcbiAgICAgICAgICAgICAgICBfb3BlbmlkXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5nZXQoKTtcclxuICAgICAgICByZXR1cm4gcmVzLmRhdGFcclxuICAgIH1cclxuICAgIGFzeW5jIHJlYWQod29yZCkge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMuZGljdC5kb2Mod29yZCkuZ2V0KCk7XHJcbiAgICAgICAgcmV0dXJuIHJlcy5kYXRhXHJcbiAgICB9XHJcbiAgICBhc3luYyBzYXZlKHdvcmQsIG1lYW5pbmdzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5kaWN0LmFkZCh7XHJcbiAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIF9pZDogd29yZCxcclxuICAgICAgICAgICAgICAgIG1lYW5pbmdzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAocmVzLmVyck1zZyAhPT0gJ2NvbGxlY3Rpb24uYWRkOm9rJykge1xyXG4gICAgICAgICAgICBVdGlscy50b2FzdEVycm9yKCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWlsXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1Y2Nlc3NcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBEaWN0aW9uYXJ5KCkiXX0=