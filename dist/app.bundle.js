/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"vendors~custom-lodash":"vendors~custom-lodash"}[chunkId]||chunkId) + ".bundle.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./src/1.png":
/*!*******************!*\
  !*** ./src/1.png ***!
  \*******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/aaa.txt":
/*!*********************!*\
  !*** ./src/aaa.txt ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("  mode: 'production'  mode: 'production'");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timg_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timg.jpeg */ "./src/timg.jpeg");
/* harmony import */ var _print__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./print */ "./src/print.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./math */ "./src/math.js");
// import './style.css'
const style = __webpack_require__(/*! ./style.css */ "./src/style.css");
const style2 = __webpack_require__(/*! ./style2.css */ "./src/style2.css");
const txt = __webpack_require__(/*! ./aaa.txt */ "./src/aaa.txt");


console.log('style', style);
console.log('style2', style2);


function component() {
  const div = document.createElement('div');
  const btn = document.createElement('button');
  div.innerHTML = 'hello webpack 你好啊';
  btn.innerHTML = '点我';
  console.log(Object(_math__WEBPACK_IMPORTED_MODULE_2__["cube"])(5));
  div.classList.add('red');
  div.classList.add('aaa');
  div.classList.add('bbb');
  console.log(div, div.classList);
  btn.onclick = _print__WEBPACK_IMPORTED_MODULE_1__["default"];
  var ing = new Image(200, 200);

  console.log(ing, _timg_jpeg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  ing.src = _timg_jpeg__WEBPACK_IMPORTED_MODULE_0__["default"];

  div.appendChild(ing);

  div.appendChild(btn);
  console.log('txt', txt, txt.default)
  return div;
}
document.body.appendChild(component())

/***/ }),

/***/ "./src/math.js":
/*!*********************!*\
  !*** ./src/math.js ***!
  \*********************/
/*! exports provided: square, cube */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "square", function() { return square; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cube", function() { return cube; });
function square(x) {
  return x * x;
}

function cube(x) {
  return x * x * x;
}

/***/ }),

/***/ "./src/print.js":
/*!**********************!*\
  !*** ./src/print.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return printMe; });
/* harmony import */ var _1_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./1.png */ "./src/1.png");
/* harmony import */ var _test_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.ts */ "./src/test.ts");
/* harmony import */ var _test_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_test_ts__WEBPACK_IMPORTED_MODULE_1__);


function printMe() {
  var ing2 = new Image(200, 200);
  ing2.src = _1_png__WEBPACK_IMPORTED_MODULE_0__["default"];
  console.log('ts',Object(_test_ts__WEBPACK_IMPORTED_MODULE_1__["numberAdd"])(2));
  console.log("I' m printMe");
  console.log('a', process.env, "development");
  return __webpack_require__.e(/*! import() | custom-lodash */ "vendors~custom-lodash").then(__webpack_require__.t.bind(null, /*! lodash */ "./node_modules/lodash/lodash.js", 7)).then(_ => {
    var element = document.createElement('div')
    element.innerHTML = _.join(["Hello", "yao duo duo"]);
    document.body.appendChild(ing2);
    document.body.appendChild(element);
    return element;
  }).catch(error => 'An error occurred while loading the component')
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/style2.css":
/*!************************!*\
  !*** ./src/style2.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/test.ts":
/*!*********************!*\
  !*** ./src/test.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

exports.__esModule = true;
exports.numberAdd = void 0;
function numberAdd(num) {
    return num + "";
}
exports.numberAdd = numberAdd;


/***/ }),

/***/ "./src/timg.jpeg":
/*!***********************!*\
  !*** ./src/timg.jpeg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/src/timg.jpeg");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2FhYS50eHQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9tYXRoLmpzIiwid2VicGFjazovLy8uL3NyYy9wcmludC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGUuY3NzP2UzMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlMi5jc3M/YzVkYSIsIndlYnBhY2s6Ly8vLi9zcmMvdGVzdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdGltZy5qcGVnIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EseUNBQXlDLGdEQUFnRDtRQUN6Rjs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNB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QTtBQUNBLGdCQUFnQiw4Q0FBTztBQUN2Qjs7QUFFQSxtQkFBbUIsa0RBQUk7QUFDdkIsWUFBWSxrREFBSTs7QUFFaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7Ozs7Ozs7O0FDbENBO0FBQUE7QUFBQTtBQUFPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QjtBQUNPO0FBQ3BCO0FBQ2Y7QUFDQSxhQUFhLDhDQUFLO0FBQ2xCLG1CQUFtQiwwREFBUztBQUM1QjtBQUNBLGdDQUFnQyxhQUFvQjtBQUNwRCxTQUFTLHlLQUF5RDtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEM7Ozs7Ozs7Ozs7OztBQ2ZBLHVDOzs7Ozs7Ozs7OztBQ0FBLHVDOzs7Ozs7Ozs7Ozs7Ozs7QUNBQSxTQUFnQixTQUFTLENBQUMsR0FBVztJQUNuQyxPQUFPLEdBQUcsR0FBRyxFQUFFLENBQUM7QUFDbEIsQ0FBQztBQUZELDhCQUVDOzs7Ozs7Ozs7Ozs7O0FDRkQ7QUFBZSxvRkFBdUIseUJBQXlCLEUiLCJmaWxlIjoiYXBwLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuXG5cbiBcdFx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG4gXHRcdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuIFx0XHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuIFx0XHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuIFx0XHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcbiBcdFx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcbiBcdFx0XHR9XG4gXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcbiBcdFx0fVxuIFx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcbiBcdFx0XHRpZihPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuIFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdGlmKHBhcmVudEpzb25wRnVuY3Rpb24pIHBhcmVudEpzb25wRnVuY3Rpb24oZGF0YSk7XG5cbiBcdFx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG4gXHRcdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuIFx0XHR9XG5cbiBcdH07XG5cblxuIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3NcbiBcdC8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuIFx0Ly8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbiBcdHZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG4gXHRcdFwiYXBwXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJ2ZW5kb3JzfmN1c3RvbS1sb2Rhc2hcIjpcInZlbmRvcnN+Y3VzdG9tLWxvZGFzaFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5idW5kbGUuanNcIlxuIFx0fVxuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gSlNPTlAgY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuIFx0XHRcdC8vIGEgUHJvbWlzZSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCIuXG4gXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG4gXHRcdFx0fSBlbHNlIHtcbiBcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcbiBcdFx0XHRcdHZhciBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gXHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IFtyZXNvbHZlLCByZWplY3RdO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG4gXHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG4gXHRcdFx0XHR2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gXHRcdFx0XHR2YXIgb25TY3JpcHRDb21wbGV0ZTtcblxuIFx0XHRcdFx0c2NyaXB0LmNoYXJzZXQgPSAndXRmLTgnO1xuIFx0XHRcdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG4gXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuIFx0XHRcdFx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgX193ZWJwYWNrX3JlcXVpcmVfXy5uYyk7XG4gXHRcdFx0XHR9XG4gXHRcdFx0XHRzY3JpcHQuc3JjID0ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCk7XG5cbiBcdFx0XHRcdC8vIGNyZWF0ZSBlcnJvciBiZWZvcmUgc3RhY2sgdW53b3VuZCB0byBnZXQgdXNlZnVsIHN0YWNrdHJhY2UgbGF0ZXJcbiBcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuIFx0XHRcdFx0b25TY3JpcHRDb21wbGV0ZSA9IGZ1bmN0aW9uIChldmVudCkge1xuIFx0XHRcdFx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG4gXHRcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG51bGw7XG4gXHRcdFx0XHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiBcdFx0XHRcdFx0dmFyIGNodW5rID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRcdFx0XHRpZihjaHVuayAhPT0gMCkge1xuIFx0XHRcdFx0XHRcdGlmKGNodW5rKSB7XG4gXHRcdFx0XHRcdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJyA/ICdtaXNzaW5nJyA6IGV2ZW50LnR5cGUpO1xuIFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcbiBcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcbiBcdFx0XHRcdFx0XHRcdGNodW5rWzFdKGVycm9yKTtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gdW5kZWZpbmVkO1xuIFx0XHRcdFx0XHR9XG4gXHRcdFx0XHR9O1xuIFx0XHRcdFx0dmFyIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gXHRcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUoeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pO1xuIFx0XHRcdFx0fSwgMTIwMDAwKTtcbiBcdFx0XHRcdHNjcmlwdC5vbmVycm9yID0gc2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGU7XG4gXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gXHRcdFx0fVxuIFx0XHR9XG4gXHRcdHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gXHR9O1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSA9IHdpbmRvd1tcIndlYnBhY2tKc29ucFwiXSB8fCBbXTtcbiBcdHZhciBvbGRKc29ucEZ1bmN0aW9uID0ganNvbnBBcnJheS5wdXNoLmJpbmQoanNvbnBBcnJheSk7XG4gXHRqc29ucEFycmF5LnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjaztcbiBcdGpzb25wQXJyYXkgPSBqc29ucEFycmF5LnNsaWNlKCk7XG4gXHRmb3IodmFyIGkgPSAwOyBpIDwganNvbnBBcnJheS5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soanNvbnBBcnJheVtpXSk7XG4gXHR2YXIgcGFyZW50SnNvbnBGdW5jdGlvbiA9IG9sZEpzb25wRnVuY3Rpb247XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LFVrbEdSZ2dqQUFCWFJVSlFWbEE0SVB3aUFBQ3dud0NkQVNySUFCZ0JQaGtNaFVHaEJMSm5LZ1FBWVN4dHVHb0dONS9odkhENmorb1A2UC9RUDJrL3VXZUpJQi9ILzR6L1lQNTkreG45di8vK1NBL2puOUQveGY5ajdsSDkwL1FEMUJPeC82ZitSM3d6ZjRqK29mNHo5by9ibDVHMGdIOFkvblgrODlhZjhmLzAvOEIvcC9UcCtlLzVUL2QvNC85Ly9rWi9MLzZwL3V2N2gvaS8rOTMxdm90WnB6a29telQ0dC9HUHd6L0lEVkFQd2QvV0RaR1A0MStITzJYL2lydkFIOFkvRTNsVmY4QitBSHlHL2czOGcvcFA5Ry9YbituNnMwaHJ6OWdQMGY1TWZqSDh1OWtmelg5Ny92WCtLL2VqL0xmZjFsTTQ5ODh2bVQvTy8zYjluZjh6Ly8vbXYvcXZaaitqdjl6N2duNmpmNGYvQWZ0ci9jZTg1NWkvNWIvVi85bi9ldjN0K1diL1cvc1A3cy8yTC9ZRDRBLzUzL2NmV2YvejNzZ2YyLy9YZXdIL0svOEI5Ly95MS83ci92LzdqNEwvMnAvOG4rTC9mLzZDUDV6L2R2K3orZi95QWVnQjFHL3QzNnVlczNvZitSSG9qK0pmSGYyTCt0L3NaK1Z2NDYwaC9NZitKL1hmN3QvYnYydy92SHBPK0NmdzMvdXZVQy9HZjVEL2MveWovdTN3d2dBL2xYOUcvem45OS9lVC9KK2hwL0tlakh6RWU0Qi9JZjZOL2tQelcvZi9vTi9UL1lBL2x2OXgvMzMrSS9MejZZZjZqL3cvNXowQi9SMy9VLzFQd0QveS8rcS83ei9CZnUvKy8vLzMrOXoyU2VpNSs0ZzdUOS94YUhtd2x3R3haeGNnOWhFaEE0NzFrZUtMMkZSS2E4bzZ3ZGlHR2xqNGNMMTYzM3VidUhCa1Zmc2xGTHhVTmh5T243VkJZUTZDRWZFdERTdGFoYXU5b2dHUjZkZDhNVGRJWUpiUCtrU0p2ZXlyREhYWFhBTmhYSko2d2VQdzBicklQSlJsTWg0L3cyTXl1d3A4b3Nhd0FRU3pjTEtNdGcwUE9jbDVUTWgyQ2o4TzlYeCt1bGpXanNqOTVmSzIveWY1QzJURlB5VzV5Um9ZelM1WDlDZWNUY0d2cXg2ZDVwYmRjVTU4aW56MzdlZStUQWFBeVp5cXZnWnozR1p0cVFuZHFMZVJ4cFZiQjhmY0orTGlxZ0xHOGZpTmxVR1VOUnhoT2lrU2tDZC91RTRkaThWbEJEZlp5MFJ0UXVad1BkWmtXWnphMDR6UUd6YnhtdXo3cS9zdjBzVkJCNGcveFd4MFhtM0ZoZ2RwME9uSjhIT3JrUzNFb3h1MUpHZ0hHZ2JqSlArN0xtZ29LQlZWelEzVDQ2TVE1VjMyNVBGNklSeWVjU1J2aGxNTEJsOFA3bTJBV295S0tnd05BL1UvdytCYzNpbWxFdEpFT3ZWOEtBN1UxWGs1TkFNa1RuWG96OVRoSkZ5STVqb2VaZkRId3pMUHVwdGRXVlF6clJyaHE4TUF0RktjUmVGcHpYSjFNYjZyZXJQQ0FQb29LbERQZzZxRitGUWl2Rm9kL3VVR2w3ajJUSnBNS2tRWjh4OWhyNGkrSjJrL2k5TkVZL24xbWE1SHE3aHEwUlB3NFVROHFKVUZBdEdsQjRSZkJxV3IxM0NqWC8vTUpMMS9uSzlBUytqc29ZVFhQczhjUEl2WTVDNjF2NUtWZWRYb29zVEIrL0VFcFY4NVFNWGRLdWp5ajhhZFhDWlNmZnk4Yk5Rb2dQdmpQaU1obmp0cDk2bzdEWi9VU3FScXJ4VHE4RW51SCthTGZkaSt5Uzc2Q0pLSHhMWEVCK0NmWG44VzlLN1U0VHY1bWJsWC8wTjNHNmJRWlBYMzhPREFUVEsreldwN1JYcnl1Q00yeEt4bmNibW9GSGI2RUNIV0F2ZzdLd2oxRThiUGNaR0sva3Axd0VGRGcxYXdVdnV2VU5MblJyTlByOEY5MlFPMlY3YVkzU2NKUHRLdm4vdnNtVEhMcEhmMzFyOFdTS2ZJK2lhRDF6c1V6S3JTOGRUK0l1T2x3bVltckphT0F4c3pjNVlFcXRCb1FEYm1OQ1dadjVzKy9ZSXJ3SDNwc1h0MitZNXdTMUNUeTVSeVZrYXN3Qzd4TDk4TkM2eUs5Y1ExTDQvZ01tdmx1b3FOaEVueHphRnJQYXhLZ1JoVG1lOHM5anhNREpsc2NIZDJkWnFjQWR2VXovNUwySEhmc1ZtTFlBRCtzWTU2cGIvK3k1ZjdMbC9yOUI5bi8vNEJ2L2dHLytBYjJoMU9iT1JRYmhXUnIrdWdFNDg5SGMzUmlGc0F6Q0dOMjU4VmZaY0lPckRpclp0RFJjMk52NFBLaVZSTkE5Nkp1bmp6TEpMVS81Y3dsUXkyOVQyV2twd2VyZWNlcmUvN0hrQmtvMUJsUjdSN3ZiNFlJVDVqM0JEbzNLckx5Y3Y3cDc5WmdKcjBrNC9ybXFLQVlkMmdUenBZazlJODc1aWZyWGFEUTQxNmRFeXROQ0greWhjYTdSTnZuMmp5L3IwRm5ZMGg5SXdOb09aK3VVUFQ1OEowcTJBR2xwQkp1ZkxQZ04vYmZGZ2FsL1FnajNoY3RQQTB3WGhYUFFxcFhmNkFzK0M0L05sUWN6RmprUG0zdW1oYXYxdC9HUGxZYUg5RjkxQk8rWG1MU1EvY2JDMzdscklsT3d4Ry8vWW16SXZ3UjZ0cDVwMDhYUTNuUVVKdHlNRW83TXZGUXh0aG1QQ1Z3Y0Evb2pEbnpuR2h6d3AvSVRaZVNqSHkzaFJWamlWbjluY25LTDVhalBuaVAvTkF5YnhmVlZySFg2YTdQZDJXOEtTWGJzZlhlZ05rTDZLdHMrOE0yb0tXUDRFeDhVZm9iV1VYWFBlYnVYNlpsNVZUaVJvQjJheHEzdERGVHJIdExZSUF5ZlRrSVNyNkhKVXBBYXdBTmo3VGRlV2Vyb0F3N1NSQ3pjRGZ1UGVESUhjYTArc2Z5RFgzSFcyT1RaK3NDZlJGN3FWRjlVeU9ITWxqci9pWDhRMDc3bnlBMjQ2KzMwbDN0emthYlcveS9rM09jRXNxOHdYLzNjLzVkei9pTVE2RG9KakprUkpFUzlaSGFFeDh3Z20wYk84M09md3g3V1V4UnIyYlNUbTRkT0tsTCs1RkdjdzN2OG1yN3BZc3Bvb0x4SGJzL3NTL3pvcEV4Rk05Z3lVd2ZFZk0rMmNpRS9rZVFCSFNhb3ViaER5NnUrWnJibzUydHg2WlZGeWtKeUc5dE9XYTlXZjYzQnRmZWZlbU9VNHFvVldzcU1yR3pPQXE3MVREanR1UDh3SHhGRk8vZXdrV2RSQ2pxNzRjbEJsWXZ5SkR6emZBWkNlK3lBTERnZlphMzZta0hrcUJFNmNScmNUWUNhVWZHK2F4VHF4ZnhYanZ4cllkM0QwK3prQUxFZ2RjMnpHZkxRTjN6bzVkaTVLWjFtaXRQN082aFZFUmhTMW4rWnhvSlVzVGp6OTMzaURUc2pRSnl5SnB4TXNLSGMwRzRkNGErQmsvdE9XclhmeDl6YjR2RGFkaVMrbnpFSDdlRXE2NVlUZnozaWVuNThodXFUOWtCclB2ZGE2QjRuc2RnQ2tmVXpuMTdmL1hrLy9Pcnp3VDFxR2pxdmpYQkRwODV0MzRDZXZYTndWbVVsMCt6aUZOQ2ViS0pIRHhYKzFkWTBkd2FLSXhzY2g1UTA1bmdDMmdmMjYrNW14STRPQldMYXB3UWlJRUFuYkJnMDU4K2tWcXVnVTg5cGxSZ29raUJIR25DZW1xWVc3UkNacU1SV2N6VEJRQVhQTlEwQlN6bEVuN1VZMGYrN1NvdFN6Wnl5MlB0K1JtMFlqZ3R4b29KS1EwcHZ6QUdaS2EyMjRMVmFIb3pWNmo4L0k4STdTbGJhV3ZpZTVGUEFOR1lOOWkvM0pzSlRieGlMdjJ1b1E5REVsUWlCZVJiQmZ1VDJmWEw1L3BFVCt1Z3lNRVZidlRjSVRtaXNlSUdqc29RS2RFTXdDSUJ4dm0zam5tNEtTVzg3MTJxZmhoM1MzdnIwSHpaVjd0dnJHem9oRGVDcjJQVHhVbFd0YWYvNTdMbVI3L05JT2FIQXM4UHAvL0UrQTRNNGF5SS9zQjhzaXFYaUJscUF3YkhZTDNLMUVwb1VpRE9PRzhLT01kYk0yUTcwbWtnaFVpVWhtWHVDbVdGbDl3Rm1NNXgySjBSQ05tLzJ3WnlxMHRhYlBqOGlraHRkbmI4OW9Ga3l4RWkzYUZidzRYQUMwSUptVGNwU0pzK0MwSUwxOHpOd1ZnMnZwc3BqM3BIclJGTk9UaFVZQjg5MnZ2ZENsVDFGalhCZkh4R2xYMGRDNy9PZmoxZDVRRENDV0hjMWRQbmpiU3JrZlN2eDBhclM2TlFvcndsRXIzMk13MWVpVGdrY2Q5Zi9uV05yYS9GYUxFSzJYTitxZFEwWFlKSGRxN0QwTTVhemJranFJZVlheWVQRlZFWFJqRlAzUmdMRzY1aXNCdVF2S0Vrai8zb1RSVlJPckVIOHhqbG4xUys2VEMwRXMzUlAvUVlGdHh6YVJZbWdxVnNZWVNqSS94M1Z1ZEx6YnhHUUd6M28yWVpnbTBMOUw5eGxhb3N2SG9KWXJhMWxnakN0NW03bVA2TGtKZVB6MHA4R1IrZ0FLUHBCRG80N2ZDWHVEamF6ckZWK2xRalBpaWV2US9pa3pmbU9yeFRGN1FkZUQ2VDRkRDVCbDNyUXhkQXZyNGVGQ2NyQ0xVcEZ0Tmt1UFpnTEprR1pCbWg0THVqNmtiN3JzZFdZQ3ZPN0t2YWlpM2t2OWdHalBMMVpOamlhYXNZTk0rWkVDRFdrb3JVQTJEMWxhNSt3UXJuajY1Q252OXNzUHpxSzNFaCtpcjlyU0c0MlY2QXI3Y3dJaHQ1TzgzWkVhOHlBVmptcUFmUmlydGduY1ppWEtoWUtGM0tLaXdUWkFneTlQU1l6SWszaEhIN0RqQ0ZXVjdXaFMvc0ZiZWNydm5ib0hRK05LY3pQZi9ESnBIU3lrK3dzTVZYZ0k3L1BqUVJpSGgrOWdtTDlCSXRSMTVuNCticjc5Z3RJZndKM3hnSGxZRzl6UlZQdjY4SERuMXlYK0dibm5rYTRVWlgvN3doVzVJSVJDYUYybWZyWDNyNjlabFFscWlwMkE5WVFmLzBqTlBXcm4vQzRHUGY3d3hxWXBzTkkvMDFKb0FaRnZ0VWhJRVdtcFBnQ0hSMlZpRDBYQmFST0FvU1g4ZmR0YndRWGl6TmNhcUQ0UXJQajUxMnRmU2daQmIwWFBiYnhtcXhHV0lmQ0lyMVM1ODQ1MlVhcGxRSmNnSXJVTUJlb01sREkxV2ZyR1ZycXRzNmU3SHl1Sm1VSzhUVVZmcU9hcXlpMFFQQkUxN0N5TFNrYyt1aVowbmxpSXhqRTZ4NUNUbmVITkh2QkI2bDk4dHorckJFS0IyUEtpdytIWWlGZnNXaENHSkYzemFFZUw3MUprTGcrWnZEL2pXOWVFUFMvay9kbGh3YjlaUC94MFpzV3BKNEliRWFLU2FrSG5ETjlCZzhSU1RZd0JzcVpJS2NLZmFDL2NEcWNXakRGbUFUSVRGN0gwRlVyR3JKMW4vTEtPNmJ6RXZlYUp1WktsR1dFQ2NReVBlbmxDZmxua0pvTjJQS054QldnakdXNjZPbyt5K2kySE8zQlZwd2pSUVRETEJGSmdjbG9qVXdVU1RpZFFkUUc3bFlFTC9rK1ZFT3hiUWR2WU9TNzBTVG5qTjQyTGF5aDN2Uml3OGhpMTB2cFk2SDFTSnNuVDcrQmVVUXcvYk1MR1A3Yy8rY1BpV3VxczU3ZUJzeUd5V2RMRG5vaHNHaWxSdSt2K0pwRzZyWTNJeFJUQUsrRktMaUxhOXpiOWMrT3JVQmRrZHBXeHVSRkFJR2p5Ujg3R2VrMU9TUmx3TDhkUTNPVURnanExRWs1VDgza1gvbHFTLzdOOVlHVjZIYUpjalJtWHNtdFg1amhuaFNWeFgzd3NISWNlb1VjYWovQmNQOWtTRGFJcTY4YVZjVW9NS1BXVFRIb0RBZUtMbGJHYUIwTSswZEdOdHRJTnpNK0dFcUNpTXpLS1kzNERlVmV6bnpUWEVZZlhRUXA0YmgyZG94NkcrQmYrZmxjdnJNUGh3akRzakZZTDFNV3NpR01JZ2twa2hCVGVqL3RRVm55dDhDb3dIMDdtMXpFcWpKSlNPRU5vcGpiRnZHM3B4bnpIUmowTlJMQisxQnFTeWdRMnNVWTBTMklmUHJldjJZRWc4dUt1cndjeXRJaE9TQ2NXT2RnMTVJZkQ2amQwNWg3a3R5R0pSWGQ1SG02VDdONThzazZ5dTJiOCtwWU1vZGpIM1BvWXVXTWNqMTgzWmlsWnVHQVJZeTA2REN1b3hRTE5EVVdYbWRMaFVPdS9RUFdoQy90R20rZWF6alllL20zazVCWTBMY2VtOUFrKzl6emxFNXlNVGoyZ1lTUEF2UGt4NVUzTEZaZ2l1cFAzaElmaGQxS24wV3RBcnZOVFRvZ1ZnMnRGZUxucE1jazROaDNSVHo2YjEyaUJaSFlHTStDWEpzL1kzeVh4a2FwUi9QRFVYVyt6YlF3clRIVklZemk0RzZzSlRESnA1bGxZY2VaQmhnQ0FUbGJERXVJUkh0V3dZQlpEbjBFVWVRSnRVZDJKby9OZGRvWVFkYkQxTW9JRUdSTFY4U3hwbmErLzJveGFhZWNWb0t2UlBSVEFra0FhckE3YUczNzlHaHhkaTVWeHpkeXUyeHVPVkVXYVZvSTZuMFU0bzBibzFCaGdUdHFOQmUxTE5UWFU5bjZKdVI1U0lCN2NaS1RKZTg0bFlEWUl3Z2RPQkQwWjlzL1hLMi80QVE3ZWFPZjBoaEtWczdHVm1tNUNTazdPS2sxNlpnL1NjUU9jeXR2eGFySGd2ekYvYzBzVEsybitaZWc4OTF6UlJXT2JyU3pFZTV3T3hNbXJ1WE95d1JMZ2FqZWRRckpwWndrN3BmK1hxRVVTZ2c0RGVNcElhdDl2MTMyYzQ5eVBOc1JYNEtUMWRnR2lzaE9uOFVDYWs3Tlp5ZWJYeGNEWHpFSVdNWTlveFlRRGtxQitUazV4blV0YU1Id1lLZTE5dm9BcmhzSk50eldlNjd1dXZSSGh5VzVFc01MbzF0SUcwc0l2RVU4RzgvT3VIODFxUVphbXFUWkt0RWNsV2JYV3ZRbTF0c0R6UGcvWXdOM2tWRERGckF0Ti84Y1g1MmlqZXlKam9GeHlCaUVIL2pZSUJsWEhnOXpPV0dBSW13UkJXQ0hlcFNsa2lQQVc5em54SkhnQWhvc0xqMFNVNEo0R1BtRGlwbjlqWFN1VTQ2d3Y2MEVzMDFCVUhtMHF4Z0x5ZE1ZcE9kd2RoWGVZWmZkQ1BBWjBVM1ZvdTN3ZHJBUGw4ODc1SlhQbGdnWDdjZGJzMWRrZHZwd2RCNzBZV2ZtdHN5d0M0SVNjMDhGUy9lL05TNkJ4aEhmRU5qTXdVTnI4QmVxWU55TFkrMUhSTmRuMTYvd2pwdGpCZEdXTkIwcDFva05xNTA2bStQNWFGelppWHhhMTIzeGJFdzFMUDFGSDdXejJvZHRwcGh1WWNIeWJIeWZ2NldXTkYzU1dJRXJxTHZzVFZaN0R0Y3A5M0lyODd2eUJ3YzZrY0d1SUhNMXdrMXhRRlZ1a1JKbEQyMlpvMTJkNis5ZG8yNUJ2WEtKUmhLTTQyaDR6Q3FETjZlL3dKOTRhOHo3SjVGUjl3cTQxV2xwZTlhbDhtOWVuUlJvSkFVM3ZKNjlUazZQa0ViVXV2aW1vWDJyUFFwdXBDaHQyejlMQ3Z3MzZJNURzZWNXZi92NFk4Y2pEL2NNcHc0Q0FzRmtSYWh6bmlDNWc0ZjNTTDJuTGF3U3ByVTA4cGI3SzR6QnYxdEpHK2JqN3lSNzRvYXg3UEZLck5GdzBSeEpYOUQrY2FrTjZDMlNKWXdOMVhieE1pK21vbUx5eFRRMHBVU3dkM2N2NGpjblBXSk9wOGFuWk4xMmNpUlF5bUkxQkJwWHBhVHlvMzhXdHZsMHFDZDVKbzlTWC9SckZ1aFJBOE8yVUFHd3p1T2JicytMZjg3OVpqS3FWTjNVOTY3dm1aQVQxV0hYazBOS0dQMzN0K2IwTjJVaXVCazNYSGtQRW1MK3pMYnNiVy9OazNZN3Q2OEhXaVRSMUlUZWhibnRYVUFsaTVXT0NxS2RJdkZpM0lEc1plNWpMenBDTmxZSkxhRm1maTdzRjJIK3RNZjdHR1ZBLzZ6ekdzajZoSnpNOUtUcHRkMmFCay9SNHB6SCswOHNYRzlPVkFTeG9ONHpLQkVUY1NLS1JDN3YwdlFzNlNYYVc3YXVBYXFPWEEzV2NPSnR0bFU5QXhCNWxkYzVXb05RVHRpMEFYYW1Xa0M0Z2RaL05Ec2NWbUw0NVpoUHg0NDRMZ0JEbGN2Z01IY2k5VXQ5MnFtNDdzSkNpUFNMem1icTlZUlBBM1NpTFZ0RDZzR0poZlBQNFo5L0VkcFdDNzROeEhFc0tIK1NVU1BBNEsxWHI0TmErRFZaUWp2WDRNbERta0tXaFBvM1ZHWUhzNUZqVHF2Yk1LQ09mUEVxbFd6RjViengyMWpCVHlpSWtMQ1llSU0vdEtVM1puRUpjMnQ5OWRvTzJOTU1WMVJ3Y1h1bzZUUnRvUGdGWXM0RGNFUVlramt6MzFuZWo3Ym1rby82eFZIMHBhd2ZUd1pxWmRVUDh5YVZNMnJCNSttQkVLeTJnbHRDWjFDMWFLMUh2V1VMVXRKcUtWNmdEb0hBU3o3bDFrTEM4Z0hYNmpUZlBRR1lmRlRXTVMwL2MzOUdYdnlpTUFubFJUeURHd0dva0pPY0hMK0p3VDBQc1prSmRwaDdzbW45UGlUdzhiN1JlWkhzT1krNU04SFM3SGFVUGlCMEZ5R3hTMjdxY0ZSUHdDT05HQWdOQTZ6dDJwVmtiWFo3V2xFcG5nNzJEd014OTRkUnlHRUNzOTJxdklBaGJqbDMwVVFLQmJZWDZCQ3I1MndjM1hERlpwUUI5Q09ncUlhUmN3eFRPQjVKMFE3bTRSaGVWMU9oY3JKRWlRZVZPcE9PQThPQ1IwYlJaMnByUGtqcVlCVlhOclgvcjJhcmRUc3dyMlJ4b1ZYMUVGQVVncnAvOG9HK055OE5lWlF2b3luaTM1YkVZeFhYYmlQYVc5cnBsVnNjYVFUckJJOTVsOXVHMkRtdFcwU2NGT1RULy9UMmtYRC9Sek83dituY1pJMzVqbVFNRGJ6YlBjcWZBM0lYTUtBMjlxSU5WeFZGRS9JYXljcE1GKzI1NUhncWVsSSt6dUk2M1BIc2crbXhZRmJJTis0cFMvL0RHRG8zRUVJYWFLRHpqTTVwYjRrTXpERE9DMU1HUThtd0Nld3dYVlhZTVZrVW5JQ0dUR0dWelF2S2hKd0RKUGM5Y3k2MzhPSmJXMngwL3drbjVDTkgvK0F3dGs1YnNVYllUT2hOZmRhNlE3SUlYZlIyNG4rRHQzSGRNTTFkRXZSeTBwYmc4Q3A5QUQ0L2YvRGIwLzErcUtzbnZMNXM1bmpVT3ZhSGk5dWlCUkNFMGo5RERVMWdMQUM0N1pGRXdOWlFFWkx0ZTBBZndHQzZWenFHOEdVQVNGMDdkSzhvWGNYRHdHOEJqeXp4emtqOEZhaG8xVE94NkdSZndjaFZaYkhKTnl1dTVGNDVCWXI3clBWZmJjelU2bVpkMEZmK0QyVTFWVDhEcitiRXhsL3pLdGxjZzVlK01DemVqaFEydXQ1ODN6VHBYRTFKNDZrYW5BNEY2VTJJWHlIQzl6Q3NGSnp2dUlTRDRoTFg3OXZNK1pydTQ4bTdYMXd0czlNRisrdWNxc1VGaVhMNlcvSzRlajdKeE9nTG1WWFVBemhYam5HalZ2RUR3d0xFaTl6RzhGclZtc3JsWW0wYk90N1k0REkyeXU0Ym1BMWNaL25NU2Z0c1F3eXd1WFpxL0NYM1ZFcjhxRkpTbnpqdkM2bWFXdjVGdk10TjFQSGJWUnozMWZhL24ydUw0YVNRMnpxa1VLK0M1ZGw2dGpBNkYrYkNUd21UVzcvbDMxbEl2VHU1YWxWUm01elRPZ09pTk1qYXRHNm0wR0k3T3pydnJNb2kzRUFFTTkycFFTWjNCc3p0K1RoUnhtYWdDTWJiMmpzZUtJby82aGx2dnVXSjg5N3p3aTdwTFB6U1JMODZFTmN5SmpKWHVYVzRqKzhqUGlKZGMzb3doQWFHM3JrY0l6Q3MrMEk2MkdhcDIzaGh3UjQwc0JGeEdSRVdsdlY5SU1yRUdDZGlMaXlpTS9iUnprNHd1Y1VRTE1yc2RnVVZWcGNGOW9tOHcxSFpQdHR3Y05PVjJIUGt2Uy9vYnQrSnA4bHdSY1RsM3ArK1FyTVNrelJPbHRhMlYzV1pzZi9GYUJPeEZ4Smh2amFnZVhxb0Q0Tmtrc01LbHh6aDZKUmwrUnBKOHdWQU5taWg4ZmgzSUY3dzRyODQvaittWlhqY3BBYWw5WitiUUZqZi9RcExneVQwZDh3a2VnSGoyU1Nwd3BEWlpKanZ4c2pUVnAyODZRNzJxZUgydlBHcFA4dkhOZUF2eWU5NEkvaWNRSm81RGFIaVoybytLVXVtU3d3bmRJUEN5MWUxQW1tWVpDQXdHSnQ2S05FdmJIR3Zac0F4R3NJNjVtbEtTdlZCdVEzc3hOcDduOC9scVpVR1J0b0FObGVpOTdvVHdSUit6aVZ4SkVkdnNhcFB4bWowbEI5Wnc3WU5odWcxZXZnUnk4TGZINVhJRzVxcGJyZXZmL0ZXb3J5a3RNYnBGNUo2bFdPY08rZzl5blR0enducVRraWVNeVYvSHNCejRzMVBUR0NtNWg0MHdCbndQWkhNMmQ2aW1lRDFVZWhIQk01bmZVMDllaTRvWlVwOW1uQVV3RG41WHgwZlVjRi9JL1d1eGFSMXlBZzM5WCs5WkJJOTZDZ0xHV0s0UzlrLzBReTNiSW04bEZhdVQwSXg2VFBVNXZ3S25nbksvdWlhVXdHN05hZEQzdGV4WGgzL2RycmxhUGdJRlR5Y2RLMCtRZExVVFMvbFpaTnozVDliWjZtRys2NE8zL3NYTEVSZEJkUTcwNGNNdGdudW90ZUtCY0FLMXM5TkJGN3NkL3FlRlp3M1FCVldqU2x6dzlsVmNla0ZWQ0xDT1ZaSzlGQVNBQ1dOVHRxQmRxRk9ON0dsWlg4UHVOaEdKKytqUS8rK1lMb0xvT1U4aExyWFB1blBXdzdGdXJvOHk0bjVLZ04vdVNCN2lXYlR2WkQvUEZnbGxmMmx0SE5QNnZvajJDV3Z3OWhVcFVQZkFpeHVuQmFJRzVnMjRXUHovRE1tY1VmMk9oMU9ZQlY0bG5mYUZEaG5NOGxVekRrSE9SNVZiZ0hGblpLUkZHbFZXai9hekxaRER2MGRNTmNYWEdjZUpBQjNMR0tXeVpRM0tEc1lSaldaQ2hBZXMybWF6bDFLc1FHZEN6dWlZdDhjcU5UNGRYVzFlVUFCUDhBQkU5aTVEZnlycURLSVBVWWRRMzZmak1EWHY2b0ppanEzcy8vclZRcXArRTlwbWFqRWQwUVR3R3VrOHdua05wdHlWZXpYV3FkTkZUQ0VNald4THRqKzJaaG5xNzNJT0o1L20zTzZ0Z3VDcURqc1U4VzI0WnpCbElVQUhxa210bHZDYVorbklBVVVnb1JvRXhBL1VTd1NCK1pqTEZXN1BlQS9IYjhyb0VNQnY4b2YxSVpnUFlndEhpWmYvK1FpVzRxWld0MHFTN3Z3NFUvOFJUMG5pOFlOVzF0UndKN3hwdC93cTNHQStZR0wyQ0Via2VUNFY3UkNKV1pFcFlISVR4aC91Mi9wdGpGK280TkxhMWtNVCtEZVdualovUmMvbjRtdHl0VlB2Z1AzSTArZVgzdW0wWEJkQ1V6MDFCNDNxTDJIV1U1UnhFbTVoMjdBVjZMNncxMWVLUTRyU3MrUmYyZFpoNWpEdU9xTUxzSWNUejhaaU1CZWwyRlJDdW9oZnNvVkxaYjZsS2MxTnkwU1BiTU1yT0w4Zk1DR2NGd2VxZDJGNjM0dkpKYVYrTkJzK0RnM0tNeHUzMk9CT3ZWZzh5UlpBcTJ4cnpoWDhLNnBrcnp6THVlQzNLTmtrZlBKUWxTd0FBU3FHWHJydmtoVSs2bHVCQUdMSDF1U2o1ZS9YenFKQ2xxZW9XV0s3K1RYdm4vWUNoYi96MkZlaVBPSmN1N2FYcFpMT21xODFLMlZ2ajA0dDZIemtXSDA5MSt1S2ZJRVZpK1hpVWJBdGp4N3lWTGZ5RUc2ejc0NitjaWxtTWpteTBtaXdha05IVGFqenR2R1JiWjdzM21SM3lVL0dNWWlDTGdNZ2dwWUxPbXdYaWlTVVl4UVJHSjVCdXdrRjRhcVJaVWlpSU5oMzN2a2kwQmhxVHZsUjBGZGNBbldQcVh6MWk4U2tRZUg5QU1TWW42eEsyYjFaSjAyYUhqVFFkMzBOVzlVYVBJTDBPK0I5dHRabjQxV1lFMU5rTXl0dGc5SVFiNGUwYXFLMktvdktJU2U3YWRQRkRvMm8rbUwwSW5vd0dEZGl5UUxwSzY2QlN0ZzF5UHBPZ2xRR2FITnVGbEMwTE9kb0o1aDNJTFVFa2lEbXlLUmtxS3FISEFod21lR2NWZ2Z4d1E4cTFsc2dlVVU3KzgvSGZFL3RXUEp2b0dvOWxFbU9iMTRNTXBWcm9YaXBiS3JQSU9sMlJWN0JYMTJQNFZ3ZWlWM3lVcVVoVHFoeWhFWWQwbms4VEZnd25uY3ZwcWFKMDJhelgyYXBLZjFKVFNqWnJVWGlDUUdNeXdkRTVDN3FDQUpGZnJXdGk3clNpZE1XSHgyRWJ1SUJnaHBGVHFwRDZzSUZvTjExUWNrN1NjY2RQa28yc3E5eExYZGRmVktWNG94Qlg5SGpRVU9mTG84Rnlsc2JYeVRKYkJSazFDd1RyQy9YdjV5a3p6RzZqQVZvUkR0Skk0dU1sdkUzQTdzR3RJUHU5QnYySzdIS0hUVDBib2JxMHhFZktkRGNUbnBtOGJnMnR5Rmw3VFlrR2dRRmh5WkQ0bXo4VTRpWWVSdG9vTm5VZmlEM3hKaG8xNVRDZElyZHhvOHpUZ3psSTRVMml6cXVRMXhjSXFyaUkwQjZ6NWppN3BTR3UzUURudGxTNEpneEdEdzJNQmdEQmVTdTNGKzJWQ2ZPM1crTVlLRTlpMlVRY2tUcTJmOG5LbWVFQVNsVHpIM3BVR20wNGljMkZLOFV3VnFoQ1NmVzM1QXRRbG4yZjV2aXpHZ0NCRzZ6Mzh3UHhubDFCSUJsK21nUVBISmRxcGV2M3VjK09vZEIzNzYxY3kyYi9wazkxRkIwdXlLNmVHWHNUVUd3VEZtdzVSQ0d2YjVqTkxTTFFCeUdwN0daL3hhWnl5RjkydmNubjJGVWF6MkhFaXFNZFUwNUtQVVZMT0dVL1RFeFJMUjN1MVdranNlZ2FKT0FXbkFFY1h4a0tpeDUxWXFZV3Z3SlgrajdPdWtSMGZ5QjZMOVRBQi8zM0xZQXNHWlJ2Q0I2QW8wemsyTVdVbGZmNzQrUmFrZ3l0OTFVbzlkSjdENGhleGJQRE0xT1NSR2hDNUx5THczNnRpRzhMMnFZNnVQN2ZaU2k0Nm1Bc2t4RkRTM3huR0dqbEd4aHo2UUdIOEhvZU5jODZGUGg2QWE1SnhhZ0tOTFBXdW92QlNKVkkwdmFGVGIwSUROQXF6SkRlYU53UExYdlU1TnhtOW5BRUFZcTlxeEpSQ09wMTM5bkV6aU43cW4zSUZhbDlEczF3QUZCSUtzbUJ5WnVsR3M1Ull0NmV2S094VFFudHdBQXM2V0tBR21NVmhCamlXdGNyUTVGUnBaaHY3MmdIZG5tSUNRenk4RU5KNjJhbHNFeHovaTc2NlpZUXlEcFVJQTVqNlM4U0pEdGlVT1J3ei9oeEhzM25lYkNPcm9NODhteFBtTitjWWdhNWlnakdpbzhyYUl5UmloWDZPN1BJVXhyb01oYUpjenlHVUZkbzNBOU5VZUhyQWVVaEZ5bTV6bUNNeUFTb0JybFVqSGxNakYxYStVU2xoaGtIbnFWSEI2K2pES1NBK1JvM2YrTWxEODJMWkxSY21mWjlONVh6eHhZVnR1OXZYUTR4SEFrNkZDUkpoOHR2VXpIbnYzL3Y0S1dNRnFvWkRYUDM3QTZzSWhTWGF1SGFCMGtkK1ZrVDlBdnY3Y2ZSNDJvUjJkSE43TnpJV0RzQmhEZENOTVpTTVM2eFF6T3pSMWtyRFhrSmI0d0xtNlc4TzFINllFYTRFanlsRjY4QmFISFE4SGV6VEdCY0JqZHZKRWZZRGZhRVRDMVFTUWxtMUtCS1RvL0tVaHh6OFF5RXZoY3VOYWVUdTdZYTlRcFo0MnlFdzhXTHBZMlRHMERheFd1bWJYZGI1SERrRmVmWnIwd2k3a090MGpQMzZkMzArR0k1TXRaZmloblBCc3czYVZUY2FrMzJkWEN2ZG9wL3hhbGVIdUdIY20wS0JVZTQ0bSs1YnFnbEZseitXSHJET0VJTzNVM3M5YUpwaWlSd0ZKL05ySmYybzZvcWZLaGNHZTV2WXdTdnQ2UW14b0FoN2hoUWswdnlRMzExUTdrNTJiRTF2dzJVbGRXbkxMRTY1d1NhazhXajJBck9rcEoyNFBZcVlQYVY3NmZRdFpoZ1NsdXQraDFOZGx6U3FmamV5MWkzZlhsbndoT2Z3UXE1RVhndndJYkJCL25VUHNEYU5WcjhET00xLy9SOEpxTHcwZTMwUGFwVGhyak0zeDUxVzlKYTJ0bmU3NjVnL2JKZjcyUHhWcEJubDByNVdqOU0vSVVFbHU5dlFybWxORzRUR0FlNUJxZklaOUo0bE0zd3pIdG83dFBjR3pKWHZ6UDNoYmxxOCsrbElGNDZlcWRhT25Fb0tzZG85MVlYNGFvUC9MWHRwbGpBTWVVanBOaEMxMGNxOGJUVjNDSldBYnZFdkFvUjQ0S0cyTlBIVStPWjZWMVpSdmhmbXNCcHIyU3RHdXJaSzkrT0ovbmdFV21MS2dzdktzb1hYUk9nelZ5UjFUMzVsalk1MGJCQnJ1YnAxcXBCdkRmT2JSUksrM0FwSUhYN29lNG80SmNqaitwQTM4NzZLbUZFeTZKRXdpdSttU1hMOXdHR0pyeG5mQTJQOHJMT0dveFYwSTkvdnRGK0YvODRONzFXby9YcVpORW9udkF5a2lnR0NJY2ZqbmNsY09NcG1vZ0cydS90MFNEYXk3cVNUV2I3elYwQ0JSVlI5RWxuZVB0dDZYS0RQRCtHa0JLNWc1MFljcE8vTktaeHNLbmV3bVUvLy9KU0dyVHJkNk54UERoMUk2cFFZNnpCY2tZL003MGJHSFdvZmljMlg4eWFOZGk0M3FsYnNKV3IyWFBUNDZ5V0lkWDhJeEdCdlYreEUvWVVlTEFvRUwrY2krMnlqZVV1MWdnZTdMck1yS1VmcXBhUTV4UUhvK0RsUDhKQjVSd2J4NmdLY0dGYWpTTCtOV2xEcDdnd0FjTjZ6b3hCWjdqVzUyLytHcmcweUFkSkFIeDFaUERpeTE2WEg1K3M5ZU1wSm0wcmRwT0FtSmxKdG04RHBQankweEFGVXY5WU81RG85anBHaUdFREVvQUlWTWdpd21LMXNjNWpRUVB5bDJrQS9FZEl6Y0x6NnhuT2pHNUpCSi9HZHMvUm1vYlBsN3NySWR3b0FBQUFBQUJGWitGSUFBQUFcIiIsImV4cG9ydCBkZWZhdWx0IFwiICBtb2RlOiAncHJvZHVjdGlvbicgIG1vZGU6ICdwcm9kdWN0aW9uJ1wiOyIsIi8vIGltcG9ydCAnLi9zdHlsZS5jc3MnXG5jb25zdCBzdHlsZSA9IHJlcXVpcmUoJy4vc3R5bGUuY3NzJyk7XG5jb25zdCBzdHlsZTIgPSByZXF1aXJlKCcuL3N0eWxlMi5jc3MnKTtcbmNvbnN0IHR4dCA9IHJlcXVpcmUoJy4vYWFhLnR4dCcpO1xuaW1wb3J0IEljb24gZnJvbSAnLi90aW1nLmpwZWcnXG5pbXBvcnQgcHJpbnRNZSBmcm9tICcuL3ByaW50JztcbmNvbnNvbGUubG9nKCdzdHlsZScsIHN0eWxlKTtcbmNvbnNvbGUubG9nKCdzdHlsZTInLCBzdHlsZTIpO1xuaW1wb3J0IHtcbiAgY3ViZVxufSBmcm9tICcuL21hdGgnO1xuXG5mdW5jdGlvbiBjb21wb25lbnQoKSB7XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgZGl2LmlubmVySFRNTCA9ICdoZWxsbyB3ZWJwYWNrIOS9oOWlveWViic7XG4gIGJ0bi5pbm5lckhUTUwgPSAn54K55oiRJztcbiAgY29uc29sZS5sb2coY3ViZSg1KSk7XG4gIGRpdi5jbGFzc0xpc3QuYWRkKCdyZWQnKTtcbiAgZGl2LmNsYXNzTGlzdC5hZGQoJ2FhYScpO1xuICBkaXYuY2xhc3NMaXN0LmFkZCgnYmJiJyk7XG4gIGNvbnNvbGUubG9nKGRpdiwgZGl2LmNsYXNzTGlzdCk7XG4gIGJ0bi5vbmNsaWNrID0gcHJpbnRNZTtcbiAgdmFyIGluZyA9IG5ldyBJbWFnZSgyMDAsIDIwMCk7XG5cbiAgY29uc29sZS5sb2coaW5nLCBJY29uKTtcbiAgaW5nLnNyYyA9IEljb247XG5cbiAgZGl2LmFwcGVuZENoaWxkKGluZyk7XG5cbiAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XG4gIGNvbnNvbGUubG9nKCd0eHQnLCB0eHQsIHR4dC5kZWZhdWx0KVxuICByZXR1cm4gZGl2O1xufVxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb21wb25lbnQoKSkiLCJleHBvcnQgZnVuY3Rpb24gc3F1YXJlKHgpIHtcbiAgcmV0dXJuIHggKiB4O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY3ViZSh4KSB7XG4gIHJldHVybiB4ICogeCAqIHg7XG59IiwiaW1wb3J0IEljb24yIGZyb20gJy4vMS5wbmcnO1xuaW1wb3J0IHtudW1iZXJBZGR9IGZyb20gJy4vdGVzdC50cydcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHByaW50TWUoKSB7XG4gIHZhciBpbmcyID0gbmV3IEltYWdlKDIwMCwgMjAwKTtcbiAgaW5nMi5zcmMgPSBJY29uMjtcbiAgY29uc29sZS5sb2coJ3RzJyxudW1iZXJBZGQoMikpO1xuICBjb25zb2xlLmxvZyhcIkknIG0gcHJpbnRNZVwiKTtcbiAgY29uc29sZS5sb2coJ2EnLCBwcm9jZXNzLmVudiwgcHJvY2Vzcy5lbnYuTk9ERV9FTlYpO1xuICByZXR1cm4gaW1wb3J0KCAvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImN1c3RvbS1sb2Rhc2hcIiAqLyAnbG9kYXNoJykudGhlbihfID0+IHtcbiAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBfLmpvaW4oW1wiSGVsbG9cIiwgXCJ5YW8gZHVvIGR1b1wiXSk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbmcyKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9KS5jYXRjaChlcnJvciA9PiAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyB0aGUgY29tcG9uZW50Jylcbn0iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJleHBvcnQgZnVuY3Rpb24gbnVtYmVyQWRkKG51bTogbnVtYmVyKTogc3RyaW5nIHtcbiAgcmV0dXJuIG51bSArIFwiXCI7XG59XG5cbiIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWFnZXMvc3JjL3RpbWcuanBlZ1wiOyJdLCJzb3VyY2VSb290IjoiIn0=