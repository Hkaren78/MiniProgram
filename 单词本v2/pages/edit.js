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

var _flag = require("./../cloud/flag.js");

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

var success = _flag2.default.success, fail = _flag2.default.fail;

var modify_mode = {
    addGroup: "add group",
    addWord: "add word",
    update: "update"
};

var _page_mode = {
    group: "新增语言或分组",
    meaning: "新增释义",
    word: "新增词"
};

var Edit = function(_wepy$page) {
    _inherits(Edit, _wepy$page);
    function Edit() {
        var _ref;
        var _temp, _this, _ret;
        _classCallCheck(this, Edit);
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }
        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Edit.__proto__ || Object.getPrototypeOf(Edit)).call.apply(_ref, [ this ].concat(args))), 
        _this), _this.config = {
            navigationBarTitleText: "编辑",
            usingComponents: {
                "demo-block": "../components/vant/demo-block",
                "van-button": "../components/vant/button",
                "van-field": "../components/vant/field",
                "van-cell": "../components/vant/cell",
                "van-cell-group": "../components/vant/cell-group"
            }
        }, _this.components = {}, _this.data = {
            language: "",
            group: "",
            word: "",
            meanings: [ "" ],
            _modifyMode: modify_mode.addGroup,
            _pageMode: _page_mode.group,
            focusIdx: 0
        }, _this.computed = {
            page_mode: function page_mode() {
                return _page_mode;
            }
        }, _this.methods = {
            typeNext: function typeNext(d) {
                this.focusIdx++;
            },
            onFocus: function onFocus(idx) {
                idx = Number(idx);
                if (Number(this.focusIdx) === idx) return;
                this.focusIdx = idx;
            },
            meaningInputed: function meaningInputed(d) {
                var value = d.detail;
                var idx = d.currentTarget.dataset.idx;
                this.meanings[idx] = value;
            },
            addMeaning: function addMeaning() {
                this.meanings.push("");
            },
            reduceMeaning: function reduceMeaning(e) {
                if (this.meanings.length <= 1) {
                    _utils2.default.toastError("再删就没啦");
                    return;
                }
                var idx = e.currentTarget.dataset.idx;
                _utils2.default.arr_splice(this.meanings, idx);
            },
            submit: function submit(d) {
                var _modifyMode = this._modifyMode;
                var originData = d.detail.value;
                var meanings = [];
                for (var key in originData) {
                    if (key.indexOf("meaning") > -1) {
                        meanings.push(originData[key]);
                    }
                }
                var group = originData.group, language = originData.language, word = originData.word;
                var data = {
                    meanings: meanings,
                    group: group,
                    language: language,
                    word: word
                };
                if (_modifyMode === modify_mode.addGroup) {
                    if (this.groupValueIsNotFulliled(data)) return;
                    this.addGroup(data);
                } else if (_modifyMode === modify_mode.addWord) {
                    if (this.wordValueIsNotFulliled(data)) return;
                    this.addWord(data);
                } else if (_modifyMode === modify_mode.update) {
                    if (this.wordValueIsNotFulliled(data)) return;
                    this.update(data);
                }
            },
            deleteWord: function() {
                var _ref2 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee() {
                    var res;
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                        while (1) {
                            switch (_context.prev = _context.next) {
                              case 0:
                                _context.next = 2;
                                return _dictionary2.default.deleteWord(this.rule._id);

                              case 2:
                                res = _context.sent;
                                _utils2.default.gobackWhenSuccess(res);

                              case 4:
                              case "end":
                                return _context.stop();
                            }
                        }
                    }, _callee, this);
                }));
                function deleteWord() {
                    return _ref2.apply(this, arguments);
                }
                return deleteWord;
            }()
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }
    _createClass(Edit, [ {
        key: "groupValueIsNotFulliled",
        value: function groupValueIsNotFulliled(_ref3) {
            var language = _ref3.language, group = _ref3.group;
            if (language === "") {
                _utils2.default.toastError("请输入语言");
                return true;
            }
            if (group === "") {
                _utils2.default.toastError("请输入分组");
                return true;
            }
            return false;
        }
    }, {
        key: "wordValueIsNotFulliled",
        value: function wordValueIsNotFulliled(_ref4) {
            var word = _ref4.word, meanings = _ref4.meanings;
            if (word === "") {
                _utils2.default.toastError("请输入词句");
                return true;
            }
            if (meanings.indexOf("") > -1) {
                _utils2.default.toastError("有空格还没填");
                return true;
            }
            return false;
        }
    }, {
        key: "addGroup",
        value: function() {
            var _ref6 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee2(_ref5) {
                var language = _ref5.language, group = _ref5.group, word = _ref5.word, meanings = _ref5.meanings;
                var res;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                        switch (_context2.prev = _context2.next) {
                          case 0:
                            _context2.next = 2;
                            return _dictionary2.default.save(language, group, word, meanings);

                          case 2:
                            res = _context2.sent;
                            _utils2.default.gobackWhenSuccess(res);

                          case 4:
                          case "end":
                            return _context2.stop();
                        }
                    }
                }, _callee2, this);
            }));
            function addGroup(_x) {
                return _ref6.apply(this, arguments);
            }
            return addGroup;
        }()
    }, {
        key: "addWord",
        value: function() {
            var _ref8 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee3(_ref7) {
                var word = _ref7.word, meanings = _ref7.meanings;
                var _rule, language, group, res;
                return regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) {
                        switch (_context3.prev = _context3.next) {
                          case 0:
                            _rule = this.rule, language = _rule.language, group = _rule.group;
                            _context3.next = 3;
                            return _dictionary2.default.save(language, group, word, meanings);

                          case 3:
                            res = _context3.sent;
                            _utils2.default.gobackWhenSuccess(res);

                          case 5:
                          case "end":
                            return _context3.stop();
                        }
                    }
                }, _callee3, this);
            }));
            function addWord(_x2) {
                return _ref8.apply(this, arguments);
            }
            return addWord;
        }()
    }, {
        key: "update",
        value: function() {
            var _ref9 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee4(d) {
                var res;
                return regeneratorRuntime.wrap(function _callee4$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                          case 0:
                            _context4.next = 2;
                            return _dictionary2.default.update(this.id, d);

                          case 2:
                            res = _context4.sent;
                            _utils2.default.gobackWhenSuccess(res);

                          case 4:
                          case "end":
                            return _context4.stop();
                        }
                    }
                }, _callee4, this);
            }));
            function update(_x3) {
                return _ref9.apply(this, arguments);
            }
            return update;
        }()
    }, {
        key: "onLoad",
        value: function onLoad(_ref10) {
            var rule = _ref10.rule, pageMode = _ref10.pageMode;
            this._pageMode = _page_mode[pageMode];
            if (rule != null) this.rule = JSON.parse(rule);
            this.decidePageMode();
            this.queryDictOnUpdateMode();
            this.HowBigIsfocusIdx();
        }
    }, {
        key: "decidePageMode",
        value: function decidePageMode() {
            switch (this._pageMode) {
              case _page_mode.group:
                this._modifyMode = modify_mode.addGroup;
                break;

              case _page_mode.meaning:
                this._modifyMode = modify_mode.update;
                break;

              case _page_mode.word:
                this._modifyMode = modify_mode.addWord;
                break;
            }
        }
    }, {
        key: "queryDictOnUpdateMode",
        value: function queryDictOnUpdateMode() {
            if (this._modifyMode === modify_mode.update) {
                this.queryDict();
            }
        }
    }, {
        key: "queryDict",
        value: function() {
            var _ref11 = _asyncToGenerator(/* */ regeneratorRuntime.mark(function _callee5() {
                var data, _data$, _id, group, language, word, meanings;
                return regeneratorRuntime.wrap(function _callee5$(_context5) {
                    while (1) {
                        switch (_context5.prev = _context5.next) {
                          case 0:
                            _context5.next = 2;
                            return _dictionary2.default.where(this.rule);

                          case 2:
                            data = _context5.sent;
                            _data$ = data[0], _id = _data$._id, group = _data$.group, language = _data$.language, 
                            word = _data$.word, meanings = _data$.meanings;
                            this.id = _id;
                            this.language = language;
                            this.group = group;
                            this.word = word;
                            this.meanings = meanings;
                            this.$apply();

                          case 10:
                          case "end":
                            return _context5.stop();
                        }
                    }
                }, _callee5, this);
            }));
            function queryDict() {
                return _ref11.apply(this, arguments);
            }
            return queryDict;
        }()
    }, {
        key: "HowBigIsfocusIdx",
        value: function HowBigIsfocusIdx() {
            switch (this._pageMode) {
              case _page_mode.group:
                this.focusIdx = 0;
                break;

              case _page_mode.meaning:
                this.focusIdx = 2;
                break;

              case _page_mode.word:
                this.focusIdx = 2;
                break;
            }
        }
    } ]);
    return Edit;
}(_wepy2.default.page);

Page(require("./../npm/wepy/lib/wepy.js").default.$createPage(Edit, "pages/edit"));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQuanMiXSwibmFtZXMiOlsic3VjY2VzcyIsImZsYWciLCJmYWlsIiwibW9kaWZ5X21vZGUiLCJhZGRHcm91cCIsImFkZFdvcmQiLCJ1cGRhdGUiLCJwYWdlX21vZGUiLCJncm91cCIsIm1lYW5pbmciLCJ3b3JkIiwiRWRpdCIsImNvbmZpZyIsIm5hdmlnYXRpb25CYXJUaXRsZVRleHQiLCJ1c2luZ0NvbXBvbmVudHMiLCJjb21wb25lbnRzIiwiZGF0YSIsImxhbmd1YWdlIiwibWVhbmluZ3MiLCJfbW9kaWZ5TW9kZSIsIl9wYWdlTW9kZSIsImZvY3VzSWR4IiwiY29tcHV0ZWQiLCJtZXRob2RzIiwidHlwZU5leHQiLCJkIiwib25Gb2N1cyIsImlkeCIsIk51bWJlciIsIm1lYW5pbmdJbnB1dGVkIiwidmFsdWUiLCJkZXRhaWwiLCJjdXJyZW50VGFyZ2V0IiwiZGF0YXNldCIsImFkZE1lYW5pbmciLCJwdXNoIiwicmVkdWNlTWVhbmluZyIsImUiLCJsZW5ndGgiLCJVdGlscyIsInRvYXN0RXJyb3IiLCJhcnJfc3BsaWNlIiwic3VibWl0Iiwib3JpZ2luRGF0YSIsImtleSIsImluZGV4T2YiLCJncm91cFZhbHVlSXNOb3RGdWxsaWxlZCIsIndvcmRWYWx1ZUlzTm90RnVsbGlsZWQiLCJkZWxldGVXb3JkIiwiZGljdCIsInJ1bGUiLCJfaWQiLCJyZXMiLCJnb2JhY2tXaGVuU3VjY2VzcyIsInNhdmUiLCJpZCIsInBhZ2VNb2RlIiwiSlNPTiIsInBhcnNlIiwiZGVjaWRlUGFnZU1vZGUiLCJxdWVyeURpY3RPblVwZGF0ZU1vZGUiLCJIb3dCaWdJc2ZvY3VzSWR4IiwicXVlcnlEaWN0Iiwid2hlcmUiLCIkYXBwbHkiLCJ3ZXB5IiwicGFnZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0lBQ1FBLE8sR0FBa0JDLGMsQ0FBbEJELE87SUFBU0UsSSxHQUFTRCxjLENBQVRDLEk7O0FBQ2pC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LENBQWhCO0FBQ0E7QUFUSjtBQVdEOzs7O0VBdksrQjRDLGVBQUtDLEk7O2tCQUFsQnZELEkiLCJmaWxlIjoiZWRpdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgd2VweSBmcm9tICd3ZXB5JztcclxuaW1wb3J0IGRpY3QgZnJvbSAnLi4vY2xvdWQvZGljdGlvbmFyeSc7XHJcbmltcG9ydCBVdGlscyBmcm9tICcuLi91dGlscy91dGlscyc7XHJcbmltcG9ydCBmbGFnIGZyb20gJy4uL2Nsb3VkL2ZsYWcnO1xyXG5jb25zdCB7IHN1Y2Nlc3MsIGZhaWwgfSA9IGZsYWc7XHJcbmNvbnN0IG1vZGlmeV9tb2RlID0ge1xyXG4gIGFkZEdyb3VwOiAnYWRkIGdyb3VwJyxcclxuICBhZGRXb3JkOiAnYWRkIHdvcmQnLFxyXG4gIHVwZGF0ZTogJ3VwZGF0ZSdcclxufTtcclxuY29uc3QgcGFnZV9tb2RlID0ge1xyXG4gIGdyb3VwOiAn5paw5aKe6K+t6KiA5oiW5YiG57uEJyxcclxuICBtZWFuaW5nOiAn5paw5aKe6YeK5LmJJyxcclxuICB3b3JkOiAn5paw5aKe6K+NJ1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFZGl0IGV4dGVuZHMgd2VweS5wYWdlIHtcclxuICBjb25maWcgPSB7XHJcbiAgICBuYXZpZ2F0aW9uQmFyVGl0bGVUZXh0OiAn57yW6L6RJyxcclxuICAgIHVzaW5nQ29tcG9uZW50czoge1xyXG4gICAgICAnZGVtby1ibG9jayc6ICcuLi9jb21wb25lbnRzL3ZhbnQvZGVtby1ibG9jaycsXHJcbiAgICAgICd2YW4tYnV0dG9uJzogJy4uL2NvbXBvbmVudHMvdmFudC9idXR0b24nLFxyXG4gICAgICAndmFuLWZpZWxkJzogJy4uL2NvbXBvbmVudHMvdmFudC9maWVsZCcsXHJcbiAgICAgICd2YW4tY2VsbCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbCcsXHJcbiAgICAgICd2YW4tY2VsbC1ncm91cCc6ICcuLi9jb21wb25lbnRzL3ZhbnQvY2VsbC1ncm91cCdcclxuICAgIH1cclxuICB9O1xyXG4gIGNvbXBvbmVudHMgPSB7fTtcclxuICBkYXRhID0ge1xyXG4gICAgbGFuZ3VhZ2U6ICcnLFxyXG4gICAgZ3JvdXA6ICcnLFxyXG4gICAgd29yZDogJycsXHJcbiAgICBtZWFuaW5nczogWycnXSxcclxuICAgIF9tb2RpZnlNb2RlOiBtb2RpZnlfbW9kZS5hZGRHcm91cCxcclxuICAgIF9wYWdlTW9kZTogcGFnZV9tb2RlLmdyb3VwLFxyXG4gICAgZm9jdXNJZHg6IDBcclxuICB9O1xyXG5cclxuICBjb21wdXRlZCA9IHtcclxuICAgIHBhZ2VfbW9kZSgpIHtcclxuICAgICAgcmV0dXJuIHBhZ2VfbW9kZTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBtZXRob2RzID0ge1xyXG4gICAgdHlwZU5leHQoZCkge1xyXG4gICAgICB0aGlzLmZvY3VzSWR4Kys7XHJcbiAgICB9LFxyXG4gICAgb25Gb2N1cyhpZHgpIHtcclxuICAgICAgaWR4ID0gTnVtYmVyKGlkeCk7XHJcbiAgICAgIGlmIChOdW1iZXIodGhpcy5mb2N1c0lkeCkgPT09IGlkeCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmZvY3VzSWR4ID0gaWR4O1xyXG4gICAgfSxcclxuICAgIG1lYW5pbmdJbnB1dGVkKGQpIHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBkLmRldGFpbDtcclxuICAgICAgY29uc3QgaWR4ID0gZC5jdXJyZW50VGFyZ2V0LmRhdGFzZXQuaWR4O1xyXG4gICAgICB0aGlzLm1lYW5pbmdzW2lkeF0gPSB2YWx1ZTtcclxuICAgIH0sXHJcbiAgICBhZGRNZWFuaW5nKCkge1xyXG4gICAgICB0aGlzLm1lYW5pbmdzLnB1c2goJycpO1xyXG4gICAgfSxcclxuICAgIHJlZHVjZU1lYW5pbmcoZSkge1xyXG4gICAgICBpZiAodGhpcy5tZWFuaW5ncy5sZW5ndGggPD0gMSkge1xyXG4gICAgICAgIFV0aWxzLnRvYXN0RXJyb3IoJ+WGjeWIoOWwseayoeWVpicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBpZHggPSBlLmN1cnJlbnRUYXJnZXQuZGF0YXNldC5pZHg7XHJcbiAgICAgIFV0aWxzLmFycl9zcGxpY2UodGhpcy5tZWFuaW5ncywgaWR4KTtcclxuICAgIH0sXHJcbiAgICBzdWJtaXQoZCkge1xyXG4gICAgICBjb25zdCBfbW9kaWZ5TW9kZSA9IHRoaXMuX21vZGlmeU1vZGU7XHJcbiAgICAgIGNvbnN0IG9yaWdpbkRhdGEgPSBkLmRldGFpbC52YWx1ZTtcclxuICAgICAgY29uc3QgbWVhbmluZ3MgPSBbXTtcclxuICAgICAgZm9yIChsZXQga2V5IGluIG9yaWdpbkRhdGEpIHtcclxuICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ21lYW5pbmcnKSA+IC0xKSB7XHJcbiAgICAgICAgICBtZWFuaW5ncy5wdXNoKG9yaWdpbkRhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IHsgZ3JvdXAsIGxhbmd1YWdlLCB3b3JkIH0gPSBvcmlnaW5EYXRhO1xyXG4gICAgICBjb25zdCBkYXRhID0ge1xyXG4gICAgICAgIG1lYW5pbmdzLFxyXG4gICAgICAgIGdyb3VwLFxyXG4gICAgICAgIGxhbmd1YWdlLFxyXG4gICAgICAgIHdvcmRcclxuICAgICAgfTtcclxuICAgICAgaWYgKF9tb2RpZnlNb2RlID09PSBtb2RpZnlfbW9kZS5hZGRHcm91cCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdyb3VwVmFsdWVJc05vdEZ1bGxpbGVkKGRhdGEpKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5hZGRHcm91cChkYXRhKTtcclxuICAgICAgfSBlbHNlIGlmIChfbW9kaWZ5TW9kZSA9PT0gbW9kaWZ5X21vZGUuYWRkV29yZCkge1xyXG4gICAgICAgIGlmICh0aGlzLndvcmRWYWx1ZUlzTm90RnVsbGlsZWQoZGF0YSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLmFkZFdvcmQoZGF0YSk7XHJcbiAgICAgIH0gZWxzZSBpZiAoX21vZGlmeU1vZGUgPT09IG1vZGlmeV9tb2RlLnVwZGF0ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLndvcmRWYWx1ZUlzTm90RnVsbGlsZWQoZGF0YSkpIHJldHVybjtcclxuICAgICAgICB0aGlzLnVwZGF0ZShkYXRhKTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGRlbGV0ZVdvcmQoKSB7XHJcbiAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGRpY3QuZGVsZXRlV29yZCh0aGlzLnJ1bGUuX2lkKTtcclxuICAgICAgVXRpbHMuZ29iYWNrV2hlblN1Y2Nlc3MocmVzKTtcclxuICAgIH1cclxuICB9O1xyXG4gIGdyb3VwVmFsdWVJc05vdEZ1bGxpbGVkKHsgbGFuZ3VhZ2UsIGdyb3VwIH0pIHtcclxuICAgIGlmIChsYW5ndWFnZSA9PT0gJycpIHtcclxuICAgICAgVXRpbHMudG9hc3RFcnJvcign6K+36L6T5YWl6K+t6KiAJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKGdyb3VwID09PSAnJykge1xyXG4gICAgICBVdGlscy50b2FzdEVycm9yKCfor7fovpPlhaXliIbnu4QnKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIHdvcmRWYWx1ZUlzTm90RnVsbGlsZWQoeyB3b3JkLCBtZWFuaW5ncyB9KSB7XHJcbiAgICBpZiAod29yZCA9PT0gJycpIHtcclxuICAgICAgVXRpbHMudG9hc3RFcnJvcign6K+36L6T5YWl6K+N5Y+lJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgaWYgKG1lYW5pbmdzLmluZGV4T2YoJycpID4gLTEpIHtcclxuICAgICAgVXRpbHMudG9hc3RFcnJvcign5pyJ56m65qC86L+Y5rKh5aGrJyk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuICBhc3luYyBhZGRHcm91cCh7IGxhbmd1YWdlLCBncm91cCwgd29yZCwgbWVhbmluZ3MgfSkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZGljdC5zYXZlKGxhbmd1YWdlLCBncm91cCwgd29yZCwgbWVhbmluZ3MpO1xyXG4gICAgVXRpbHMuZ29iYWNrV2hlblN1Y2Nlc3MocmVzKTtcclxuICB9XHJcbiAgYXN5bmMgYWRkV29yZCh7IHdvcmQsIG1lYW5pbmdzIH0pIHtcclxuICAgIGNvbnN0IHsgbGFuZ3VhZ2UsIGdyb3VwIH0gPSB0aGlzLnJ1bGU7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBkaWN0LnNhdmUobGFuZ3VhZ2UsIGdyb3VwLCB3b3JkLCBtZWFuaW5ncyk7XHJcbiAgICBVdGlscy5nb2JhY2tXaGVuU3VjY2VzcyhyZXMpO1xyXG4gIH1cclxuICBhc3luYyB1cGRhdGUoZCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZGljdC51cGRhdGUodGhpcy5pZCwgZCk7XHJcbiAgICBVdGlscy5nb2JhY2tXaGVuU3VjY2VzcyhyZXMpO1xyXG4gIH1cclxuICBvbkxvYWQoeyBydWxlLCBwYWdlTW9kZSB9KSB7XHJcbiAgICB0aGlzLl9wYWdlTW9kZSA9IHBhZ2VfbW9kZVtwYWdlTW9kZV07XHJcbiAgICBpZiAocnVsZSAhPSBudWxsKSB0aGlzLnJ1bGUgPSBKU09OLnBhcnNlKHJ1bGUpO1xyXG4gICAgdGhpcy5kZWNpZGVQYWdlTW9kZSgpO1xyXG4gICAgdGhpcy5xdWVyeURpY3RPblVwZGF0ZU1vZGUoKTtcclxuICAgIHRoaXMuSG93QmlnSXNmb2N1c0lkeCgpO1xyXG4gIH1cclxuICBkZWNpZGVQYWdlTW9kZSgpIHtcclxuICAgIHN3aXRjaCAodGhpcy5fcGFnZU1vZGUpIHtcclxuICAgICAgY2FzZSBwYWdlX21vZGUuZ3JvdXA6XHJcbiAgICAgICAgdGhpcy5fbW9kaWZ5TW9kZSA9IG1vZGlmeV9tb2RlLmFkZEdyb3VwO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIHBhZ2VfbW9kZS5tZWFuaW5nOlxyXG4gICAgICAgIHRoaXMuX21vZGlmeU1vZGUgPSBtb2RpZnlfbW9kZS51cGRhdGU7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgcGFnZV9tb2RlLndvcmQ6XHJcbiAgICAgICAgdGhpcy5fbW9kaWZ5TW9kZSA9IG1vZGlmeV9tb2RlLmFkZFdvcmQ7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHF1ZXJ5RGljdE9uVXBkYXRlTW9kZSgpIHtcclxuICAgIGlmICh0aGlzLl9tb2RpZnlNb2RlID09PSBtb2RpZnlfbW9kZS51cGRhdGUpIHtcclxuICAgICAgdGhpcy5xdWVyeURpY3QoKTtcclxuICAgIH1cclxuICB9XHJcbiAgYXN5bmMgcXVlcnlEaWN0KCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGRpY3Qud2hlcmUodGhpcy5ydWxlKTtcclxuICAgIGNvbnN0IHsgX2lkLCBncm91cCwgbGFuZ3VhZ2UsIHdvcmQsIG1lYW5pbmdzIH0gPSBkYXRhWzBdO1xyXG4gICAgdGhpcy5pZCA9IF9pZDtcclxuICAgIHRoaXMubGFuZ3VhZ2UgPSBsYW5ndWFnZTtcclxuICAgIHRoaXMuZ3JvdXAgPSBncm91cDtcclxuICAgIHRoaXMud29yZCA9IHdvcmQ7XHJcbiAgICB0aGlzLm1lYW5pbmdzID0gbWVhbmluZ3M7XHJcbiAgICB0aGlzLiRhcHBseSgpO1xyXG4gIH1cclxuICBIb3dCaWdJc2ZvY3VzSWR4KCkge1xyXG4gICAgc3dpdGNoICh0aGlzLl9wYWdlTW9kZSkge1xyXG4gICAgICBjYXNlIHBhZ2VfbW9kZS5ncm91cDpcclxuICAgICAgICB0aGlzLmZvY3VzSWR4ID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBwYWdlX21vZGUubWVhbmluZzpcclxuICAgICAgICB0aGlzLmZvY3VzSWR4ID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBwYWdlX21vZGUud29yZDpcclxuICAgICAgICB0aGlzLmZvY3VzSWR4ID0gMjtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19