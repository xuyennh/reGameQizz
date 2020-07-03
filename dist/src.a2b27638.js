// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/api/data.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var data = [{
  id: 1,
  quizze: {
    question: "Ở Việt Nam, rồng bay ở đâu và đáp ở đâu?",
    answers: [{
      value: "A: Hà Nội và Long An",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Hà nội và Quảng Ninh",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Thăng Long và Hạ Long",
      name: "c",
      isCorrect: true
    }, {
      value: "D: Quảng Ninh và Long An",
      name: "d",
      isCorrect: false
    }],
    score: 100
  }
}, {
  id: 2,
  quizze: {
    question: "Người đẹp Monalisa không có thứ gì?",
    answers: [{
      value: "A: Tiền",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Lông Chân",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Lông Mày",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Chồng",
      name: "d",
      isCorrect: true
    }],
    score: 300
  }
}, {
  id: 3,
  quizze: {
    question: "Bệnh gì bác sỹ bó tay?",
    answers: [{
      value: "A: Gãy tay",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Siđa",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Bệnh sĩ",
      name: "c",
      isCorrect: false
    }, {
      value: "D: HIV",
      name: "d",
      isCorrect: false
    }],
    score: 500
  }
}, {
  id: 4,
  quizze: {
    question: "Sở thú bị cháy, con gì chạy ra đầu tiên?",
    answers: [{
      value: "A: Con chim",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Con Người",
      name: "b",
      isCorrect: true
    }, {
      value: "C: Con rắn",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Con Tê Giác",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}, {
  id: 5,
  quizze: {
    question: "Nơi nào con trai có thể sinh con?",
    answers: [{
      value: "A: Trong Nhà",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Rừng Rậm",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Dưới Nước",
      name: "c",
      isCorrect: true
    }, {
      value: "D: Đáp Án Khác",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}, {
  id: 6,
  quizze: {
    question: "Trên Nhấp Dưới Giật Là Đang Làm gì?",
    answers: [{
      value: "A: Chơi Bóng Bàn",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Đang Học",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Trộm Cắp",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Câu Cá",
      name: "d",
      isCorrect: true
    }],
    score: 1000
  }
}, {
  id: 7,
  quizze: {
    question: "Con Đường Dài Nhất Là Con Đường Nào?",
    answers: [{
      value: "A: Đường Đời",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Đường Đi Nước Ngoài",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Đường Đèo",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Đường Đi",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}, {
  id: 8,
  quizze: {
    question: "Con gì đầu dê mình ốc?",
    answers: [{
      value: "A: Con Ốc",
      name: "a",
      isCorrect: false
    }, {
      value: "B: Con Mương",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Con Đường",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Con Dốc",
      name: "d",
      isCorrect: true
    }],
    score: 1000
  }
}, {
  id: 9,
  quizze: {
    question: "Cái gì của chồng mà vợ thích cầm nhất?",
    answers: [{
      value: "A: Tiền",
      name: "a",
      isCorrect: true
    }, {
      value: "B: Sách",
      name: "b",
      isCorrect: false
    }, {
      value: "C: Tay",
      name: "c",
      isCorrect: false
    }, {
      value: "D: Nhẫn",
      name: "d",
      isCorrect: false
    }],
    score: 1000
  }
}];
var _default = data;
exports.default = _default;
},{}],"node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"src/templates/HomeScreen/home.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "container": "_container_a8d46",
  "form": "_form_a8d46",
  "title": "_title_a8d46",
  "name": "_name_a8d46",
  "inputname": "_inputname_a8d46",
  "btn": "_btn_a8d46",
  "textwarning": "_textwarning_a8d46"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/button/button.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "btn": "_btn_a4a77"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/HomeScreen/HomeScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _home = _interopRequireDefault(require("./home.scss"));

var _button = _interopRequireDefault(require("../button/button.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function HomeScreen(props) {
  return (
    /*html*/
    "\n      <div class=\"".concat(_home.default.container, "\">\n            <form class=\"").concat(_home.default.form, "\">\n                <h1 class=\"").concat(_home.default.title, "\">").concat(props.title, "</h1>\n                <div class=\"").concat(_home.default.name, "\">").concat(props.text, "</div>\n                <input type=\"text\" id=\"").concat(props.inputId, "\" class=\"").concat(_home.default.inputname, "\">\n                <div id=\"text-warning\" class=").concat(_home.default.textwarning, "></div>\n                <button id=\"").concat(props.buttonStartId, "\" class=\"").concat(_button.default.btn, "\">").concat(props.buttonStartText, "</button>\n            </form>\n      </div>\n      ")
  );
}

var _default = HomeScreen;
exports.default = _default;
},{"./home.scss":"src/templates/HomeScreen/home.scss","../button/button.scss":"src/templates/button/button.scss"}],"src/api/content.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.textHomeScreen = void 0;
var textHomeScreen = {
  title: "Ai Là Triệu Phú",
  text: "Vui Lòng Nhập Tên Của Bạn",
  buttonStartText: "Bắt Đầu",
  inputId: "inputName",
  buttonStartId: "buttonStartId"
};
exports.textHomeScreen = textHomeScreen;
},{}],"src/utils/createState.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createState;

function createState(initialState) {
  var _state = initialState;
  var _prevState = "default";
  var _listeners = [];

  var _compare;

  function _callListeners() {
    _listeners.forEach(function (listener) {
      listener(_state);
    });
  }

  function _callCompare() {
    if (!_compare) {
      return _callListeners();
    }

    var _isUpdate = _compare(_prevState, _state);

    _isUpdate && _callListeners();
  }

  function get() {
    return _state;
  }

  function set(state) {
    _prevState = _state;
    _state = state;

    _callCompare();

    return {
      prevState: _prevState,
      state: _state
    };
  }

  function update(getState) {
    _prevState = _state;
    _state = getState(_state);

    _callCompare();

    return {
      prevState: _prevState,
      state: _state
    };
  }

  function subscribe(listener) {
    _listeners.push(listener);
  }

  function shouldUpdate(compare) {
    _compare = compare;
  }

  return {
    get: get,
    set: set,
    update: update,
    subscribe: subscribe,
    shouldUpdate: shouldUpdate
  };
}
},{}],"src/utils/logger.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = logger;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function logger(func) {
  if ("development" === "production") {
    return func;
  }

  var date = new Date();
  var hour = date.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit"
  });
  return function () {
    var state = func.apply(void 0, arguments);
    return Object.entries(state).reduce(function (obj, _ref) {
      var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          func = _ref2[1];

      return _objectSpread(_objectSpread({}, obj), {}, _defineProperty({}, key, function () {
        var result = func.apply(void 0, arguments);

        if (result && !["get", "subscribe"].includes(key)) {
          var prevState = result.prevState,
              _state = result.state;
          console.group("%c action", "color: #999", "".concat(key, " @").concat(hour));
          console.log("%c prev state ", "color: #999; font-weight: 600", prevState);
          console.log("%c next state ", "color: #7ac143; font-weight: 600", _state);
          console.groupEnd();
        }

        return result;
      }));
    }, {});
  };
}
},{}],"src/utils/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "createState", {
  enumerable: true,
  get: function () {
    return _createState.default;
  }
});
Object.defineProperty(exports, "logger", {
  enumerable: true,
  get: function () {
    return _logger.default;
  }
});

var _createState = _interopRequireDefault(require("./createState"));

var _logger = _interopRequireDefault(require("./logger"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./createState":"src/utils/createState.js","./logger":"src/utils/logger.js"}],"src/store/createIsStart.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createIsStart() {
  var _createState = (0, _utils.createState)(false),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set,
      shouldUpdate = _createState.shouldUpdate;

  var setIsStart = function setIsStart(isStart) {
    return update(function () {
      return isStart;
    });
  };

  shouldUpdate(function (prevIsStart, isStart) {
    if (prevIsStart === isStart) {
      return false;
    }

    return true;
  });
  return {
    get: get,
    subscribe: subscribe,
    set: set,
    setIsStart: setIsStart
  };
}

var isStart = (0, _utils.logger)(createIsStart)();
var _default = isStart;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createUserName.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createUserName() {
  var _createState = (0, _utils.createState)(""),
      get = _createState.get,
      set = _createState.set,
      subscribe = _createState.subscribe,
      update = _createState.update,
      shouldUpdate = _createState.shouldUpdate;

  shouldUpdate(function (prevUserName, userName) {
    if (!userName) {
      return false;
    }

    return true;
  });
  return {
    get: get,
    set: set,
    subscribe: subscribe,
    setUserName: function setUserName(name) {
      return update(function () {
        return name;
      });
    }
  };
}

var userName = (0, _utils.logger)(createUserName)();
var _default = userName;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createCurrentIndex.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createCurrentIndex() {
  var _createState = (0, _utils.createState)(0),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set;

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    setCurrentIndex: function setCurrentIndex() {
      return update(function (currentIndex) {
        return currentIndex + 1;
      });
    }
  };
}

var currentIndex = (0, _utils.logger)(createCurrentIndex)();
var _default = currentIndex;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createAnswerSelected.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createAnswerSelected() {
  var _createState = (0, _utils.createState)("default"),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set;

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    setNameAnswer: function setNameAnswer(name) {
      return update(function () {
        return name;
      });
    }
  };
}

var answerSelect = (0, _utils.logger)(createAnswerSelected)();
var _default = answerSelect;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createAnswerDescisionSelected.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createAnswerDecisionSelected() {
  var _createState = (0, _utils.createState)(""),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set;

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    setNameAnswerDecision: function setNameAnswerDecision(name) {
      return update(function () {
        return name;
      });
    }
  };
}

var answerDecisionSelect = (0, _utils.logger)(createAnswerDecisionSelected)();
var _default = answerDecisionSelect;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createTotalScore.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createTotalScore() {
  var _createState = (0, _utils.createState)(0),
      get = _createState.get,
      update = _createState.update,
      subscribe = _createState.subscribe,
      set = _createState.set;

  return {
    get: get,
    subscribe: subscribe,
    set: set,
    setTotalScore: function setTotalScore(totalScore) {
      return update(function (score) {
        return score + totalScore;
      });
    }
  };
}

var totalScore = (0, _utils.logger)(createTotalScore)();
var _default = totalScore;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createIsVisibleModal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createIsVisibleModal() {
  var _createState = (0, _utils.createState)(false),
      get = _createState.get,
      set = _createState.set,
      subscribe = _createState.subscribe,
      update = _createState.update;

  return {
    get: get,
    set: set,
    subscribe: subscribe,
    setVisibleModal: function setVisibleModal(visible) {
      return update(function () {
        return visible;
      });
    }
  };
}

var isVisibleModal = (0, _utils.logger)(createIsVisibleModal)();
var _default = isVisibleModal;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/createIsCorrect.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = require("../utils");

function createIsCorrect() {
  var _createState = (0, _utils.createState)(true),
      set = _createState.set,
      get = _createState.get,
      subscribe = _createState.subscribe,
      update = _createState.update;

  var setIsCorrect = function setIsCorrect(answers, answerDescisionSelected) {
    return update(function () {
      var isCorrect = answers.filter(function (answer) {
        return answer.name === answerDescisionSelected;
      })[0].isCorrect;
      return isCorrect;
    });
  };

  return {
    set: set,
    get: get,
    subscribe: subscribe,
    setIsCorrect: setIsCorrect
  };
}

var isCorrect = (0, _utils.logger)(createIsCorrect)();
var _default = isCorrect;
exports.default = _default;
},{"../utils":"src/utils/index.js"}],"src/store/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "isStart", {
  enumerable: true,
  get: function () {
    return _createIsStart.default;
  }
});
Object.defineProperty(exports, "userName", {
  enumerable: true,
  get: function () {
    return _createUserName.default;
  }
});
Object.defineProperty(exports, "currentIndex", {
  enumerable: true,
  get: function () {
    return _createCurrentIndex.default;
  }
});
Object.defineProperty(exports, "answerSelect", {
  enumerable: true,
  get: function () {
    return _createAnswerSelected.default;
  }
});
Object.defineProperty(exports, "answerDecisionSelect", {
  enumerable: true,
  get: function () {
    return _createAnswerDescisionSelected.default;
  }
});
Object.defineProperty(exports, "totalScore", {
  enumerable: true,
  get: function () {
    return _createTotalScore.default;
  }
});
Object.defineProperty(exports, "isVisibleModal", {
  enumerable: true,
  get: function () {
    return _createIsVisibleModal.default;
  }
});
Object.defineProperty(exports, "isCorrect", {
  enumerable: true,
  get: function () {
    return _createIsCorrect.default;
  }
});

var _createIsStart = _interopRequireDefault(require("./createIsStart"));

var _createUserName = _interopRequireDefault(require("./createUserName"));

var _createCurrentIndex = _interopRequireDefault(require("./createCurrentIndex"));

var _createAnswerSelected = _interopRequireDefault(require("./createAnswerSelected"));

var _createAnswerDescisionSelected = _interopRequireDefault(require("./createAnswerDescisionSelected"));

var _createTotalScore = _interopRequireDefault(require("./createTotalScore"));

var _createIsVisibleModal = _interopRequireDefault(require("./createIsVisibleModal"));

var _createIsCorrect = _interopRequireDefault(require("./createIsCorrect"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./createIsStart":"src/store/createIsStart.js","./createUserName":"src/store/createUserName.js","./createCurrentIndex":"src/store/createCurrentIndex.js","./createAnswerSelected":"src/store/createAnswerSelected.js","./createAnswerDescisionSelected":"src/store/createAnswerDescisionSelected.js","./createTotalScore":"src/store/createTotalScore.js","./createIsVisibleModal":"src/store/createIsVisibleModal.js","./createIsCorrect":"src/store/createIsCorrect.js"}],"src/core/StartGameContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _HomeScreen = _interopRequireDefault(require("../templates/HomeScreen/HomeScreen"));

var _content = require("../api/content");

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var StartGameContainer = /*#__PURE__*/function () {
  function StartGameContainer() {
    _classCallCheck(this, StartGameContainer);

    this._handleStartGame = this._handleStartGame.bind(this);
  }

  _createClass(StartGameContainer, [{
    key: "render",
    value: function render() {
      // Hiển thị màn hình chính
      return (0, _HomeScreen.default)(_content.textHomeScreen);
    }
  }, {
    key: "_handleStartGame",
    value: function _handleStartGame(event) {
      event.preventDefault();
      var inputName = document.getElementById("inputName");
      var textWarning = document.querySelector("#text-warning");
      var value = inputName.value;
      var isStartState = !!value; // set isStart = true khi bắt đầu game và lấy tên người chơi nhập vào

      if (value == "") {
        textWarning.textContent = "Nh\xE2\u0323p T\xEAn Tr\u01B0\u01A1\u0301c Khi Ch\u01A1i!";
      }

      _store.isStart.setIsStart(isStartState);

      _store.userName.setUserName(value);
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var buttonStartGame = document.getElementById("buttonStartId");

      if (buttonStartGame) {
        buttonStartGame.addEventListener("click", this._handleStartGame);
      }
    }
  }]);

  return StartGameContainer;
}();

exports.default = StartGameContainer;
},{"../templates/HomeScreen/HomeScreen":"src/templates/HomeScreen/HomeScreen.js","../api/content":"src/api/content.js","../store":"src/store/index.js"}],"src/templates/Help/help.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "btn": "_btn_f131b",
  "inner": "_inner_f131b"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/Help/Help.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _help = _interopRequireDefault(require("./help.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showHelp() {
  return (
    /*html*/
    "\n      <div class=\"".concat(_help.default.btn, "\">\n          <button id=\"help-5050\" class=\"").concat(_help.default.inner, "\">50:50</button>\n          <button id=\"helpcall\" class=\"").concat(_help.default.inner, "\"><i class=\"fa fa-users\" aria-hidden=\"true\"></i></button>\n          <button class=\"").concat(_help.default.inner, "\"><i class=\"fa fa-volume-control-phone\" aria-hidden=\"true\"></i></button>\n      </div>\n    ")
  );
}

var _default = showHelp;
exports.default = _default;
},{"./help.scss":"src/templates/Help/help.scss"}],"src/templates/Board/Board.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Help = _interopRequireDefault(require("../Help/Help"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function showBoard() {
  return (
    /*html*/
    "\n        <div>\n            <div>".concat((0, _Help.default)(), "</div>\n        </div>\n    ")
  );
}

var _default = showBoard;
exports.default = _default;
},{"../Help/Help":"src/templates/Help/Help.js"}],"src/templates/MainScreen/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "main": "_main_d16e4",
  "game": "_game_d16e4",
  "question": "_question_d16e4",
  "questionnumber": "_questionnumber_d16e4",
  "listanswer": "_listanswer_d16e4",
  "name": "_name_d16e4",
  "showhelp": "_showhelp_d16e4",
  "showscore": "_showscore_d16e4",
  "btn": "_btn_d16e4",
  "score": "_score_d16e4",
  "scorequestion": "_scorequestion_d16e4",
  "btnstop": "_btnstop_d16e4",
  "countdown": "_countdown_d16e4",
  "modal": "_modal_d16e4"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/MainScreen/MainScreen.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Board = _interopRequireDefault(require("../Board/Board"));

var _main = _interopRequireDefault(require("./main.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  question: string,
 * questionNumber: number,
 * answer: [],
 * ButtonSelect: () => {};
 * nameUser: string,
 * score: number
 * }} props
 */
function MainScreen(_ref) {
  var question = _ref.question,
      questionNumber = _ref.questionNumber,
      Answer = _ref.Answer,
      ButtonSelect = _ref.ButtonSelect,
      nameUser = _ref.nameUser,
      score = _ref.score;
  return (
    /*html*/
    "\n        <div class=\"".concat(_main.default.main, "\">\n            <div class=\"").concat(_main.default.game, "\">\n                <h2 class=\"").concat(_main.default.question, "\">").concat(question, "</h2>\n                <div class=\"").concat(_main.default.questionnumber, "\">C\xE2u s\xF4\u0301: ").concat(questionNumber, "</div>\n                <div class=\"").concat(_main.default.listanswer, "\">").concat(Answer, "</div>\n                <div class=\"").concat(_main.default.name, "\">").concat(nameUser, "</div>\n                <div id=\"help5050\" class=\"").concat(_main.default.showhelp, "\"></div>\n                ").concat(ButtonSelect, "\n            </div>\n            <div class=\"").concat(_main.default.showscore, "\"> \n            <div>").concat((0, _Board.default)(), "</div> \n            <div id=\"clock\" class=\"").concat(_main.default.countdown, "\"></div>\n            <div class=\"").concat(_main.default.score, "\">Score:</div>\n            <div class=\"").concat(_main.default.scorequestion, "\">").concat(score, "</div>\n            <button id=\"btn-stop\" class=\"").concat(_main.default.btnstop, "\">D\u01B0\u0300ng Cu\xF4\u0323c Ch\u01A1i</button>\n            </div>\n        </div>\n      ")
  );
}

var _default = MainScreen;
exports.default = _default;
},{"../Board/Board":"src/templates/Board/Board.js","./main.scss":"src/templates/MainScreen/main.scss"}],"src/templates/Answer/answer.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "answer": "_answer_6c073",
  "input": "_input_6c073",
  "item": "_item_6c073"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/Answer/Answer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _answer = _interopRequireDefault(require("./answer.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  id: number,
 *  value: string,
 *  name: string
 * }} props
 */
function Answer(_ref) {
  var name = _ref.name,
      text = _ref.text,
      id = _ref.id;
  return (
    /*html*/
    "\n    <label class=\"".concat(_answer.default.answer, "\">\n        <input type=\"radio\" data-answer-name=\"").concat(name, "\" class=\"").concat(_answer.default.input, " answerInput\" name=\"").concat(id, "\" value=\"").concat(name, "\">\n        <span class=\"").concat(_answer.default.item, "\">").concat(text, "</span>\n    </label>\n  ")
  );
}

var _default = Answer;
exports.default = _default;
},{"./answer.scss":"src/templates/Answer/answer.scss"}],"src/core/ShowAnswerContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Answer = _interopRequireDefault(require("../templates/Answer/Answer"));

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ShowAnswerContainer = /*#__PURE__*/function () {
  function ShowAnswerContainer() {
    _classCallCheck(this, ShowAnswerContainer);
  }

  _createClass(ShowAnswerContainer, [{
    key: "render",
    value: function render(answer, id) {
      return (0, _Answer.default)({
        name: answer.name,
        text: answer.value,
        id: id
      });
    }
  }, {
    key: "handleInputEl",
    value: function handleInputEl(event) {
      var answerName = event.currentTarget.getAttribute("data-answer-name");

      _store.answerSelect.setNameAnswer(answerName);
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var _this = this;

      var answerInputEls = document.querySelectorAll(".answerInput");
      answerInputEls.forEach(function (answerInputEl) {
        answerInputEl.addEventListener("click", _this.handleInputEl);
      });
    }
  }]);

  return ShowAnswerContainer;
}();

exports.default = ShowAnswerContainer;
},{"../templates/Answer/Answer":"src/templates/Answer/Answer.js","../store":"src/store/index.js"}],"src/templates/button/ButtonChooseAnswer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _button = _interopRequireDefault(require("../button/button.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ButtonChooseAnswer() {
  return (
    /*html*/
    "\n    <button class=\"".concat(_button.default.btn, "\" id=\"choose-answer\">Cho\u0323n</button>\n  ")
  );
}

var _default = ButtonChooseAnswer;
exports.default = _default;
},{"../button/button.scss":"src/templates/button/button.scss"}],"src/constants.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ROOT = void 0;
var ROOT = document.getElementById("root");
exports.ROOT = ROOT;
},{}],"src/templates/ModalBase/styles.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "container": "_container_1f489",
  "content": "_content_1f489",
  "overlay": "_overlay_1f489"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/ModalBase/ModalBase.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _constants = require("../../constants");

var _styles = _interopRequireDefault(require("./styles.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 *
 * @param {{
 *  visible: boolean,
 *  children: string,
 *  overlayColor: string,
 *  contentClassName: string,
 *  containerClassName: string
 *  }} props
 */
function ModalBase(_ref) {
  var _ref$visible = _ref.visible,
      visible = _ref$visible === void 0 ? false : _ref$visible,
      children = _ref.children,
      _ref$overlayColor = _ref.overlayColor,
      overlayColor = _ref$overlayColor === void 0 ? "rgba(0, 0, 0, 0.4)" : _ref$overlayColor,
      _ref$contentClassName = _ref.contentClassName,
      contentClassName = _ref$contentClassName === void 0 ? "" : _ref$contentClassName,
      _ref$containerClassNa = _ref.containerClassName,
      containerClassName = _ref$containerClassNa === void 0 ? "" : _ref$containerClassNa;
  var content =
  /*html*/
  "\n    <div class=\"".concat(_styles.default.container, " ").concat(containerClassName, "\">\n      <div class=\"").concat(_styles.default.overlay, "\" style=\"background-color: ").concat(overlayColor, "\"></div>\n      <div class=\"").concat(_styles.default.content, " ").concat(contentClassName, "\">").concat(children, "</div>\n    </div>\n  ");

  if (children && visible) {
    _constants.ROOT.insertAdjacentHTML("afterend", content);
  }
}

var _default = ModalBase;
exports.default = _default;
},{"../../constants":"src/constants.js","./styles.scss":"src/templates/ModalBase/styles.scss"}],"src/templates/Modal/modal.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "modal": "_modal_3eeec",
  "animatetop": "_animatetop_3eeec",
  "header": "_header_3eeec",
  "content": "_content_3eeec",
  "close": "_close_3eeec",
  "title": "_title_3eeec"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/Modal/Modal.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ModalBase = _interopRequireDefault(require("../ModalBase/ModalBase"));

var _modal = _interopRequireDefault(require("./modal.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 *
 * @param {{
 *  name: string,
 *  children: string,
 *  onOk: (event: MouseEvent) => void,
 *  onCancel: (onCancel: () => void, event: MouseEvent) => void,
 *  onClose: (onClose: () => void, event: MouseEvent) => void,
 *  textOk?: string,
 *  textCancel?: string
 * }} props
 */
function Modal(_ref) {
  var title = _ref.title,
      children = _ref.children,
      _ref$onOk = _ref.onOk,
      onOk = _ref$onOk === void 0 ? function () {} : _ref$onOk,
      _ref$onCancel = _ref.onCancel,
      onCancel = _ref$onCancel === void 0 ? function () {} : _ref$onCancel,
      _ref$textOk = _ref.textOk,
      textOk = _ref$textOk === void 0 ? "Ok" : _ref$textOk,
      _ref$textCancel = _ref.textCancel,
      textCancel = _ref$textCancel === void 0 ? "Cancel" : _ref$textCancel,
      _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      rest = _objectWithoutProperties(_ref, ["title", "children", "onOk", "onCancel", "textOk", "textCancel", "onClose"]);

  var header = !!title ?
  /*html*/
  "\n    <div class=\"".concat(_modal.default.header, "\">\n      <div>").concat(title, "</div>\n      <div id=\"close\" class=").concat(_modal.default.close, ">&times;</div>\n    </div>\n  ") : "";
  var content =
  /*html*/
  "\n    <div class=\"".concat(_modal.default.content, "\">").concat(children, "</div>\n  ");
  var footer =
  /*html*/
  "\n    <div>\n      <button id=\"modal_cancel\">".concat(textCancel, "</button>\n      <button id=\"modal_ok\">").concat(textOk, "</button>\n    </div>\n  ");
  (0, _ModalBase.default)(_objectSpread({
    children: header + content + footer,
    contentClassName: _modal.default.modal,
    containerClassName: "js-modal"
  }, rest));
  var modal = document.querySelector(".js-modal");
  var modalOk = document.getElementById("modal_ok");

  var handleClose = function handleClose() {
    modal.remove();
  };

  modalOk && modalOk.addEventListener("click", function () {
    onOk(handleClose);
  });
  var modalCancel = document.getElementById("modal_cancel");
  modalCancel && modalCancel.addEventListener("click", function (event) {
    onCancel(handleClose);
  });
  var closeModal = document.getElementById("close");
  closeModal && closeModal.addEventListener("click", function (event) {
    onClose(handleClose, event);
  });
}

var _default = Modal;
exports.default = _default;
},{"../ModalBase/ModalBase":"src/templates/ModalBase/ModalBase.js","./modal.scss":"src/templates/Modal/modal.scss"}],"src/templates/ModalChoseAnswer/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {
  "content": "_content_8a959",
  "modal": "_modal_8a959",
  "animatetop": "_animatetop_8a959"
};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/templates/ModalChoseAnswer/ModalChoseAnswer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Modal = _interopRequireDefault(require("../Modal/Modal"));

var _style = _interopRequireDefault(require("./style.scss"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function ModalChoseAnswer(_ref) {
  var rest = Object.assign({}, _ref);
  (0, _Modal.default)(_objectSpread({}, rest));
}

var _default = ModalChoseAnswer;
exports.default = _default;
},{"../Modal/Modal":"src/templates/Modal/Modal.js","./style.scss":"src/templates/ModalChoseAnswer/style.scss"}],"src/core/ButtonNextQuestionContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ButtonChooseAnswer = _interopRequireDefault(require("../templates/button/ButtonChooseAnswer"));

var _store = require("../store");

var _ModalChoseAnswer = _interopRequireDefault(require("../templates/ModalChoseAnswer/ModalChoseAnswer"));

var _data = _interopRequireDefault(require("../api/data"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ButtonNextQuestionContainer = /*#__PURE__*/function () {
  function ButtonNextQuestionContainer() {
    _classCallCheck(this, ButtonNextQuestionContainer);

    this.handleOpenModalChooseAnswer = this.handleOpenModalChooseAnswer.bind(this);
    this.handleModalChooseAnswerOk = this.handleModalChooseAnswerOk.bind(this);
  }

  _createClass(ButtonNextQuestionContainer, [{
    key: "render",
    value: function render() {
      return (0, _ButtonChooseAnswer.default)();
    } // Hiển Thị Modal quyết định chọn đáp án

  }, {
    key: "handleOpenModalChooseAnswer",
    value: function handleOpenModalChooseAnswer() {
      _store.isVisibleModal.setVisibleModal(true);

      var visibleModalState = _store.isVisibleModal.get();

      if (_store.answerSelect.get() === "default") {
        _store.isVisibleModal.setVisibleModal(false);

        return;
      }

      return (0, _ModalChoseAnswer.default)({
        children: "Ba\u0323n Co\u0301 quy\xEA\u0301t \u0111i\u0323nh cho\u0323n \u0111a\u0301p a\u0301n na\u0300y: ".concat(_store.answerSelect.get().toUpperCase()),
        visible: visibleModalState,
        onOk: this.handleModalChooseAnswerOk,
        onCancel: this.handleModalChooseAnswerCancel
      });
    }
  }, {
    key: "getMainState",
    value: function getMainState() {
      var currentIndexState = _store.currentIndex.get();

      var mainState = _data.default[currentIndexState];
      return mainState;
    }
  }, {
    key: "getQuizze",
    value: function getQuizze() {
      var _this$getMainState = this.getMainState(),
          quizze = _this$getMainState.quizze;

      return quizze;
    } // xử lí khi bấm Ok quyết định chọn đáp án

  }, {
    key: "handleModalChooseAnswerOk",
    value: function handleModalChooseAnswerOk(onclose) {
      var _this$getQuizze = this.getQuizze(),
          answers = _this$getQuizze.answers;

      var answerSelectState = _store.answerSelect.get();

      _store.isCorrect.setIsCorrect(answers, answerSelectState);

      var isCorrectState = _store.isCorrect.get();

      if (isCorrectState) {
        _store.answerSelect.setNameAnswer("default");

        _store.currentIndex.setCurrentIndex();
      }

      _store.isVisibleModal.setVisibleModal(false);

      onclose();
    }
  }, {
    key: "handleModalChooseAnswerCancel",
    value: function handleModalChooseAnswerCancel(onclose) {
      _store.isVisibleModal.setVisibleModal(false);

      onclose();
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      var buttonChosseAnswerEl = document.getElementById("choose-answer");
      buttonChosseAnswerEl && buttonChosseAnswerEl.addEventListener("click", this.handleOpenModalChooseAnswer);
    }
  }]);

  return ButtonNextQuestionContainer;
}();

exports.default = ButtonNextQuestionContainer;
},{"../templates/button/ButtonChooseAnswer":"src/templates/button/ButtonChooseAnswer.js","../store":"src/store/index.js","../templates/ModalChoseAnswer/ModalChoseAnswer":"src/templates/ModalChoseAnswer/ModalChoseAnswer.js","../api/data":"src/api/data.js"}],"src/core/PlayGameContainer.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _MainScreen = _interopRequireDefault(require("../templates/MainScreen/MainScreen"));

var _data = _interopRequireDefault(require("../api/data"));

var _store = require("../store");

var _ShowAnswerContainer = _interopRequireDefault(require("./ShowAnswerContainer"));

var _ButtonNextQuestionContainer = _interopRequireDefault(require("./ButtonNextQuestionContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PlayGameContainer = /*#__PURE__*/function () {
  function PlayGameContainer() {
    _classCallCheck(this, PlayGameContainer);

    this.start();
    this.renderAnswer = this.renderAnswer.bind(this);
  }

  _createClass(PlayGameContainer, [{
    key: "start",
    value: function start() {
      this.showAnswerContainer = new _ShowAnswerContainer.default();
      this.buttonNextQuestionContainer = new _ButtonNextQuestionContainer.default();
    }
  }, {
    key: "getMainState",
    value: function getMainState() {
      var currentIndexState = _store.currentIndex.get();

      var mainState = _data.default[currentIndexState];
      return mainState;
    }
  }, {
    key: "getQuizze",
    value: function getQuizze() {
      var _this$getMainState = this.getMainState(),
          quizze = _this$getMainState.quizze;

      return quizze;
    }
  }, {
    key: "renderAnswer",
    value: function renderAnswer() {
      var _this = this;

      var _this$getMainState2 = this.getMainState(),
          id = _this$getMainState2.id;

      var _this$getQuizze = this.getQuizze(),
          answers = _this$getQuizze.answers;

      return answers.map(function (answer) {
        return _this.showAnswerContainer.render(answer, id);
      }).join("");
    }
  }, {
    key: "render",
    value: function render() {
      var currentIndexState = _store.currentIndex.get();

      var nameUser = _store.userName.get();

      var quizze = this.getQuizze();
      return (0, _MainScreen.default)({
        question: quizze.question,
        questionNumber: currentIndexState + 1,
        Answer: this.renderAnswer(),
        ButtonSelect: this.buttonNextQuestionContainer.render(),
        nameUser: nameUser,
        score: quizze.score
      });
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      this.showAnswerContainer.handleDOM();
      this.buttonNextQuestionContainer.handleDOM();
    }
  }]);

  return PlayGameContainer;
}();

exports.default = PlayGameContainer;
},{"../templates/MainScreen/MainScreen":"src/templates/MainScreen/MainScreen.js","../api/data":"src/api/data.js","../store":"src/store/index.js","./ShowAnswerContainer":"src/core/ShowAnswerContainer.js","./ButtonNextQuestionContainer":"src/core/ButtonNextQuestionContainer.js"}],"src/core/quizzGame.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StartGameContainer = _interopRequireDefault(require("./StartGameContainer"));

var _PlayGameContainer = _interopRequireDefault(require("./PlayGameContainer"));

var _store = require("../store");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var QuizzGame = /*#__PURE__*/function () {
  function QuizzGame(props) {
    _classCallCheck(this, QuizzGame);

    this.props = props;
    this.start();
    this.init();
  }

  _createClass(QuizzGame, [{
    key: "start",
    value: function start() {
      this.startGameContainer = new _StartGameContainer.default();
      this.playGameContainer = new _PlayGameContainer.default();
      this.init = this.init.bind(this);

      _store.isStart.subscribe(this.init);

      _store.isCorrect.subscribe(this.init);

      _store.isStart.subscribe(this.init);

      _store.userName.subscribe(this.init);

      _store.currentIndex.subscribe(this.init);
    }
  }, {
    key: "render",
    value: function render() {
      var isStartState = _store.isStart.get();

      var isCorrectState = _store.isCorrect.get();

      if (!isCorrectState) {
        return "abc";
      }

      if (isStartState) {
        return this.playGameContainer.render();
      }

      return this.startGameContainer.render();
    }
  }, {
    key: "handleDOM",
    value: function handleDOM() {
      this.startGameContainer.handleDOM();
      this.playGameContainer.handleDOM();
    }
  }, {
    key: "init",
    value: function init() {
      var el = this.props.el;
      el.innerHTML = this.render();
      this.handleDOM();
    }
  }]);

  return QuizzGame;
}();

exports.default = QuizzGame;
},{"./StartGameContainer":"src/core/StartGameContainer.js","./PlayGameContainer":"src/core/PlayGameContainer.js","../store":"src/store/index.js"}],"src/styles/style.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
module.exports = {};
},{"_css_loader":"node_modules/parcel-bundler/src/builtins/css-loader.js"}],"src/index.js":[function(require,module,exports) {
"use strict";

var _data = _interopRequireDefault(require("./api/data"));

var _quizzGame = _interopRequireDefault(require("./core/quizzGame"));

require("./styles/style.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

new _quizzGame.default({
  el: document.getElementById("root"),
  data: _data.default
});
},{"./api/data":"src/api/data.js","./core/quizzGame":"src/core/quizzGame.js","./styles/style.scss":"src/styles/style.scss"}],"node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "61830" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/index.js"], null)
//# sourceMappingURL=/src.a2b27638.js.map