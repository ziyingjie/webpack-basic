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
/******/ 		"print": 0
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/print.js");
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


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvMS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ByaW50LmpzIiwid2VicGFjazovLy8uL3NyYy90ZXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTtRQUNBO1FBQ0EsUUFBUSxvQkFBb0I7UUFDNUI7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7Ozs7UUFJQTtRQUNBO1FBQ0EseUNBQXlDLGdEQUFnRDtRQUN6Rjs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7OztRQUdBOztRQUVBO1FBQ0EsaUNBQWlDOztRQUVqQztRQUNBO1FBQ0E7UUFDQSxLQUFLO1FBQ0w7UUFDQTtRQUNBO1FBQ0EsTUFBTTtRQUNOOztRQUVBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0Esd0JBQXdCLGtDQUFrQztRQUMxRCxNQUFNO1FBQ047UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOztRQUVBO1FBQ0EsMENBQTBDLG9CQUFvQixXQUFXOztRQUV6RTtRQUNBO1FBQ0E7UUFDQTtRQUNBLGdCQUFnQix1QkFBdUI7UUFDdkM7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ3JNQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUNBQXFDOztBQUVyQztBQUNBO0FBQ0E7O0FBRUEsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixVQUFVOzs7Ozs7Ozs7Ozs7O0FDdkx0QztBQUFlLCtFQUFnQix3c1g7Ozs7Ozs7Ozs7OztBQ0EvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTRCO0FBQ087QUFDcEI7QUFDZjtBQUNBLGFBQWEsOENBQUs7QUFDbEIsbUJBQW1CLDBEQUFTO0FBQzVCO0FBQ0EsZ0NBQWdDLGFBQW9CO0FBQ3BELFNBQVMseUtBQXlEO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBLFNBQWdCLFNBQVMsQ0FBQyxHQUFXO0lBQ25DLE9BQU8sR0FBRyxHQUFHLEVBQUUsQ0FBQztBQUNsQixDQUFDO0FBRkQsOEJBRUMiLCJmaWxlIjoicHJpbnQuYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJwcmludFwiOiAwXG4gXHR9O1xuXG5cblxuIFx0Ly8gc2NyaXB0IHBhdGggZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIGpzb25wU2NyaXB0U3JjKGNodW5rSWQpIHtcbiBcdFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ucCArIFwiXCIgKyAoe1widmVuZG9yc35jdXN0b20tbG9kYXNoXCI6XCJ2ZW5kb3JzfmN1c3RvbS1sb2Rhc2hcIn1bY2h1bmtJZF18fGNodW5rSWQpICsgXCIuYnVuZGxlLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBvbiBlcnJvciBmdW5jdGlvbiBmb3IgYXN5bmMgbG9hZGluZ1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vZSA9IGZ1bmN0aW9uKGVycikgeyBjb25zb2xlLmVycm9yKGVycik7IHRocm93IGVycjsgfTtcblxuIFx0dmFyIGpzb25wQXJyYXkgPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gPSB3aW5kb3dbXCJ3ZWJwYWNrSnNvbnBcIl0gfHwgW107XG4gXHR2YXIgb2xkSnNvbnBGdW5jdGlvbiA9IGpzb25wQXJyYXkucHVzaC5iaW5kKGpzb25wQXJyYXkpO1xuIFx0anNvbnBBcnJheS5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7XG4gXHRqc29ucEFycmF5ID0ganNvbnBBcnJheS5zbGljZSgpO1xuIFx0Zm9yKHZhciBpID0gMDsgaSA8IGpzb25wQXJyYXkubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGpzb25wQXJyYXlbaV0pO1xuIFx0dmFyIHBhcmVudEpzb25wRnVuY3Rpb24gPSBvbGRKc29ucEZ1bmN0aW9uO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9wcmludC5qc1wiKTtcbiIsIi8vIHNoaW0gZm9yIHVzaW5nIHByb2Nlc3MgaW4gYnJvd3NlclxudmFyIHByb2Nlc3MgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vLyBjYWNoZWQgZnJvbSB3aGF0ZXZlciBnbG9iYWwgaXMgcHJlc2VudCBzbyB0aGF0IHRlc3QgcnVubmVycyB0aGF0IHN0dWIgaXRcbi8vIGRvbid0IGJyZWFrIHRoaW5ncy4gIEJ1dCB3ZSBuZWVkIHRvIHdyYXAgaXQgaW4gYSB0cnkgY2F0Y2ggaW4gY2FzZSBpdCBpc1xuLy8gd3JhcHBlZCBpbiBzdHJpY3QgbW9kZSBjb2RlIHdoaWNoIGRvZXNuJ3QgZGVmaW5lIGFueSBnbG9iYWxzLiAgSXQncyBpbnNpZGUgYVxuLy8gZnVuY3Rpb24gYmVjYXVzZSB0cnkvY2F0Y2hlcyBkZW9wdGltaXplIGluIGNlcnRhaW4gZW5naW5lcy5cblxudmFyIGNhY2hlZFNldFRpbWVvdXQ7XG52YXIgY2FjaGVkQ2xlYXJUaW1lb3V0O1xuXG5mdW5jdGlvbiBkZWZhdWx0U2V0VGltb3V0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignc2V0VGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuZnVuY3Rpb24gZGVmYXVsdENsZWFyVGltZW91dCAoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjbGVhclRpbWVvdXQgaGFzIG5vdCBiZWVuIGRlZmluZWQnKTtcbn1cbihmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBzZXRUaW1lb3V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gc2V0VGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjYWNoZWRTZXRUaW1lb3V0ID0gZGVmYXVsdFNldFRpbW91dDtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKHR5cGVvZiBjbGVhclRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZENsZWFyVGltZW91dCA9IGRlZmF1bHRDbGVhclRpbWVvdXQ7XG4gICAgfVxufSAoKSlcbmZ1bmN0aW9uIHJ1blRpbWVvdXQoZnVuKSB7XG4gICAgaWYgKGNhY2hlZFNldFRpbWVvdXQgPT09IHNldFRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIC8vIGlmIHNldFRpbWVvdXQgd2Fzbid0IGF2YWlsYWJsZSBidXQgd2FzIGxhdHRlciBkZWZpbmVkXG4gICAgaWYgKChjYWNoZWRTZXRUaW1lb3V0ID09PSBkZWZhdWx0U2V0VGltb3V0IHx8ICFjYWNoZWRTZXRUaW1lb3V0KSAmJiBzZXRUaW1lb3V0KSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW4sIDApO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICAvLyB3aGVuIHdoZW4gc29tZWJvZHkgaGFzIHNjcmV3ZWQgd2l0aCBzZXRUaW1lb3V0IGJ1dCBubyBJLkUuIG1hZGRuZXNzXG4gICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIFdoZW4gd2UgYXJlIGluIEkuRS4gYnV0IHRoZSBzY3JpcHQgaGFzIGJlZW4gZXZhbGVkIHNvIEkuRS4gZG9lc24ndCB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbChudWxsLCBmdW4sIDApO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3JcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRTZXRUaW1lb3V0LmNhbGwodGhpcywgZnVuLCAwKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG59XG5mdW5jdGlvbiBydW5DbGVhclRpbWVvdXQobWFya2VyKSB7XG4gICAgaWYgKGNhY2hlZENsZWFyVGltZW91dCA9PT0gY2xlYXJUaW1lb3V0KSB7XG4gICAgICAgIC8vbm9ybWFsIGVudmlyb21lbnRzIGluIHNhbmUgc2l0dWF0aW9uc1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIC8vIGlmIGNsZWFyVGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZENsZWFyVGltZW91dCA9PT0gZGVmYXVsdENsZWFyVGltZW91dCB8fCAhY2FjaGVkQ2xlYXJUaW1lb3V0KSAmJiBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dChtYXJrZXIpO1xuICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0ICB0cnVzdCB0aGUgZ2xvYmFsIG9iamVjdCB3aGVuIGNhbGxlZCBub3JtYWxseVxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZENsZWFyVGltZW91dC5jYWxsKG51bGwsIG1hcmtlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpe1xuICAgICAgICAgICAgLy8gc2FtZSBhcyBhYm92ZSBidXQgd2hlbiBpdCdzIGEgdmVyc2lvbiBvZiBJLkUuIHRoYXQgbXVzdCBoYXZlIHRoZSBnbG9iYWwgb2JqZWN0IGZvciAndGhpcycsIGhvcGZ1bGx5IG91ciBjb250ZXh0IGNvcnJlY3Qgb3RoZXJ3aXNlIGl0IHdpbGwgdGhyb3cgYSBnbG9iYWwgZXJyb3IuXG4gICAgICAgICAgICAvLyBTb21lIHZlcnNpb25zIG9mIEkuRS4gaGF2ZSBkaWZmZXJlbnQgcnVsZXMgZm9yIGNsZWFyVGltZW91dCB2cyBzZXRUaW1lb3V0XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwodGhpcywgbWFya2VyKTtcbiAgICAgICAgfVxuICAgIH1cblxuXG5cbn1cbnZhciBxdWV1ZSA9IFtdO1xudmFyIGRyYWluaW5nID0gZmFsc2U7XG52YXIgY3VycmVudFF1ZXVlO1xudmFyIHF1ZXVlSW5kZXggPSAtMTtcblxuZnVuY3Rpb24gY2xlYW5VcE5leHRUaWNrKCkge1xuICAgIGlmICghZHJhaW5pbmcgfHwgIWN1cnJlbnRRdWV1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgaWYgKGN1cnJlbnRRdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgcXVldWUgPSBjdXJyZW50UXVldWUuY29uY2F0KHF1ZXVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgfVxuICAgIGlmIChxdWV1ZS5sZW5ndGgpIHtcbiAgICAgICAgZHJhaW5RdWV1ZSgpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZHJhaW5RdWV1ZSgpIHtcbiAgICBpZiAoZHJhaW5pbmcpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgdGltZW91dCA9IHJ1blRpbWVvdXQoY2xlYW5VcE5leHRUaWNrKTtcbiAgICBkcmFpbmluZyA9IHRydWU7XG5cbiAgICB2YXIgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIHdoaWxlKGxlbikge1xuICAgICAgICBjdXJyZW50UXVldWUgPSBxdWV1ZTtcbiAgICAgICAgcXVldWUgPSBbXTtcbiAgICAgICAgd2hpbGUgKCsrcXVldWVJbmRleCA8IGxlbikge1xuICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWV1ZSkge1xuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWV1ZVtxdWV1ZUluZGV4XS5ydW4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBxdWV1ZUluZGV4ID0gLTE7XG4gICAgICAgIGxlbiA9IHF1ZXVlLmxlbmd0aDtcbiAgICB9XG4gICAgY3VycmVudFF1ZXVlID0gbnVsbDtcbiAgICBkcmFpbmluZyA9IGZhbHNlO1xuICAgIHJ1bkNsZWFyVGltZW91dCh0aW1lb3V0KTtcbn1cblxucHJvY2Vzcy5uZXh0VGljayA9IGZ1bmN0aW9uIChmdW4pIHtcbiAgICB2YXIgYXJncyA9IG5ldyBBcnJheShhcmd1bWVudHMubGVuZ3RoIC0gMSk7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAxKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcmdzW2kgLSAxXSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBxdWV1ZS5wdXNoKG5ldyBJdGVtKGZ1biwgYXJncykpO1xuICAgIGlmIChxdWV1ZS5sZW5ndGggPT09IDEgJiYgIWRyYWluaW5nKSB7XG4gICAgICAgIHJ1blRpbWVvdXQoZHJhaW5RdWV1ZSk7XG4gICAgfVxufTtcblxuLy8gdjggbGlrZXMgcHJlZGljdGlibGUgb2JqZWN0c1xuZnVuY3Rpb24gSXRlbShmdW4sIGFycmF5KSB7XG4gICAgdGhpcy5mdW4gPSBmdW47XG4gICAgdGhpcy5hcnJheSA9IGFycmF5O1xufVxuSXRlbS5wcm90b3R5cGUucnVuID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuZnVuLmFwcGx5KG51bGwsIHRoaXMuYXJyYXkpO1xufTtcbnByb2Nlc3MudGl0bGUgPSAnYnJvd3Nlcic7XG5wcm9jZXNzLmJyb3dzZXIgPSB0cnVlO1xucHJvY2Vzcy5lbnYgPSB7fTtcbnByb2Nlc3MuYXJndiA9IFtdO1xucHJvY2Vzcy52ZXJzaW9uID0gJyc7IC8vIGVtcHR5IHN0cmluZyB0byBhdm9pZCByZWdleHAgaXNzdWVzXG5wcm9jZXNzLnZlcnNpb25zID0ge307XG5cbmZ1bmN0aW9uIG5vb3AoKSB7fVxuXG5wcm9jZXNzLm9uID0gbm9vcDtcbnByb2Nlc3MuYWRkTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5vbmNlID0gbm9vcDtcbnByb2Nlc3Mub2ZmID0gbm9vcDtcbnByb2Nlc3MucmVtb3ZlTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMgPSBub29wO1xucHJvY2Vzcy5lbWl0ID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZExpc3RlbmVyID0gbm9vcDtcbnByb2Nlc3MucHJlcGVuZE9uY2VMaXN0ZW5lciA9IG5vb3A7XG5cbnByb2Nlc3MubGlzdGVuZXJzID0gZnVuY3Rpb24gKG5hbWUpIHsgcmV0dXJuIFtdIH1cblxucHJvY2Vzcy5iaW5kaW5nID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuYmluZGluZyBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xuXG5wcm9jZXNzLmN3ZCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuICcvJyB9O1xucHJvY2Vzcy5jaGRpciA9IGZ1bmN0aW9uIChkaXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3Byb2Nlc3MuY2hkaXIgaXMgbm90IHN1cHBvcnRlZCcpO1xufTtcbnByb2Nlc3MudW1hc2sgPSBmdW5jdGlvbigpIHsgcmV0dXJuIDA7IH07XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxVa2xHUmdnakFBQlhSVUpRVmxBNElQd2lBQUN3bndDZEFTcklBQmdCUGhrTWhVR2hCTEpuS2dRQVlTeHR1R29HTjUvaHZIRDZqK29QNlAvUVAyay91V2VKSUIvSC80ei9ZUDU5K3huOXYvLytTQS9qbjlEL3hmOWo3bEg5MC9RRDFCT3gvNmYrUjN3emY0aitvZjR6OW8vYmw1RzBnSDhZL25YKzg5YWY4Zi8wLzhCL3AvVHArZS81VC9kLzQvOS8va1ovTC82cC91djdoL2kvKzkzMXZvdFpwemtvbXpUNHQvR1B3ei9JRFZBUHdkL1dEWkdQNDErSE8yWC9pcnZBSDhZL0UzbFZmOEIrQUh5Ry9nMzhnL3BQOUcvWG4rbjZzMGhyejlnUDBmNU1makg4dTlrZnpYOTcvdlgrSy9lai9MZmYxbE00OTg4dm1UL08vM2I5bmY4ei8vL212L3F2WmoranY5ejdnbjZqZjRmL0FmdHIvY2U4NTVpLzViL1YvOW4vZXYzdCtXYi9XL3NQN3MvMkwvWUQ0QS81My9jZldmL3ozc2dmMi8vWGV3SC9LLzhCOS8veTEvN3Ivdi83ajRMLzJwLzhuK0wvZi82Q1A1ei9kdit6K2YveUFlZ0IxRy90MzZ1ZXMzb2YrUkhvaitKZkhmMkwrdC9zWitWdjQ2MGgvTWYrSi9YZjd0L2J2MncvdkhwTytDZnczL3V2VUMvR2Y1RC9jL3lqL3Uzd3dnQS9sWDlHL3puOTkvZVQvSitocC9LZWpIekVlNEIvSWY2Ti9rUHpXL2Yvb04vVC9ZQS9sdjl4LzMzK0kvTHo2WWY2ai93LzV6MEIvUjMvVS8xUHdEL3kvK3EvN3ovQmZ1LysvLy8zKzl6MlNlaTUrNGc3VDkveGFIbXdsd0d4WnhjZzloRWhBNDcxa2VLTDJGUkthOG82d2RpR0dsajRjTDE2MzN1YnVIQmtWZnNsRkx4VU5oeU9uN1ZCWVE2Q0VmRXREU3RhaGF1OW9nR1I2ZGQ4TVRkSVlKYlAra1NKdmV5ckRIWFhYQU5oWEpKNndlUHcwYnJJUEpSbE1oNC93Mk15dXdwOG9zYXdBUVN6Y0xLTXRnMFBPY2w1VE1oMkNqOE85WHgrdWxqV2pzajk1ZksyL3lmNUMyVEZQeVc1eVJvWXpTNVg5Q2VjVGNHdnF4NmQ1cGJkY1U1OGluejM3ZWUrVEFhQXlaeXF2Z1p6M0dadHFRbmRxTGVSeHBWYkI4ZmNKK0xpcWdMRzhmaU5sVUdVTlJ4aE9pa1NrQ2QvdUU0ZGk4VmxCRGZaeTBSdFF1WndQZFprV1p6YTA0elFHemJ4bXV6N3Evc3Ywc1ZCQjRnL3hXeDBYbTNGaGdkcDBPbko4SE9ya1MzRW94dTFKR2dIR2diakpQKzdMbWdvS0JWVnpRM1Q0Nk1RNVYzMjVQRjZJUnllY1NSdmhsTUxCbDhQN20yQVdveUtLZ3dOQS9VL3crQmMzaW1sRXRKRU92VjhLQTdVMVhrNU5BTWtUblhvejlUaEpGeUk1am9lWmZESHd6TFB1cHRkV1ZRenJScmhxOE1BdEZLY1JlRnB6WEoxTWI2cmVyUENBUG9vS2xEUGc2cUYrRlFpdkZvZC91VUdsN2oyVEpwTUtrUVo4eDlocjRpK0oyay9pOU5FWS9uMW1hNUhxN2hxMFJQdzRVUThxSlVGQXRHbEI0UmZCcVdyMTNDalgvL01KTDEvbks5QVMranNvWVRYUHM4Y1BJdlk1QzYxdjVLVmVkWG9vc1RCKy9FRXBWODVRTVhkS3VqeWo4YWRYQ1pTZmZ5OGJOUW9nUHZqUGlNaG5qdHA5Nm83RFovVVNxUnFyeFRxOEVudUgrYUxmZGkreVM3NkNKS0h4TFhFQitDZlhuOFc5SzdVNFR2NW1ibFgvME4zRzZiUVpQWDM4T0RBVFRLK3pXcDdSWHJ5dUNNMnhLeG5jYm1vRkhiNkVDSFdBdmc3S3dqMUU4YlBjWkdLL2twMXdFRkRnMWF3VXZ1dlVOTG5Sck5QcjhGOTJRTzJWN2FZM1NjSlB0S3ZuL3ZzbVRITHBIZjMxcjhXU0tmSStpYUQxenNVektyUzhkVCtJdU9sd21ZbXJKYU9BeHN6YzVZRXF0Qm9RRGJtTkNXWnY1cysvWUlyd0gzcHNYdDIrWTV3UzFDVHk1UnlWa2Fzd0M3eEw5OE5DNnlLOWNRMUw0L2dNbXZsdW9xTmhFbnh6YUZyUGF4S2dSaFRtZThzOWp4TURKbHNjSGQyZFpxY0FkdlV6LzVMMkhIZnNWbUxZQUQrc1k1NnBiLyt5NWY3TGwvcjlCOW4vLzRCdi9nRy8rQWIyaDFPYk9SUWJoV1JyK3VnRTQ4OUhjM1JpRnNBekNHTjI1OFZmWmNJT3JEaXJadERSYzJOdjRQS2lWUk5BOTZKdW5qekxKTFUvNWN3bFF5MjlUMldrcHdlcmVjZXJlLzdIa0JrbzFCbFI3Ujd2YjRZSVQ1ajNCRG8zS3JMeWN2N3A3OVpnSnIwazQvcm1xS0FZZDJnVHpwWWs5STg3NWlmclhhRFE0MTZkRXl0TkNIK3loY2E3Uk52bjJqeS9yMEZuWTBoOUl3Tm9PWit1VVBUNThKMHEyQUdscEJKdWZMUGdOL2JmRmdhbC9RZ2ozaGN0UEEwd1hoWFBRcXBYZjZBcytDNC9ObFFjekZqa1BtM3VtaGF2MXQvR1BsWWFIOUY5MUJPK1htTFNRL2NiQzM3bHJJbE93eEcvL1ltekl2d1I2dHA1cDA4WFEzblFVSnR5TUVvN012RlF4dGhtUENWd2NBL29qRG56bkdoendwL0lUWmVTakh5M2hSVmppVm45bmNuS0w1YWpQbmlQL05BeWJ4ZlZWckhYNmE3UGQyVzhLU1hic2ZYZWdOa0w2S3RzKzhNMm9LV1A0RXg4VWZvYldVWFhQZWJ1WDZabDVWVGlSb0IyYXhxM3RERlRySHRMWUlBeWZUa0lTcjZISlVwQWF3QU5qN1RkZVdlcm9BdzdTUkN6Y0RmdVBlRElIY2EwK3NmeURYM0hXMk9UWitzQ2ZSRjdxVkY5VXlPSE1sanIvaVg4UTA3N255QTI0NiszMGwzdHprYWJXL3kvazNPY0VzcTh3WC8zYy81ZHovaU1RNkRvSmpKa1JKRVM5WkhhRXg4d2dtMGJPODNPZnd4N1dVeFJyMmJTVG00ZE9LbEwrNUZHY3czdjhtcjdwWXNwb29MeEhicy9zUy96b3BFeEZNOWd5VXdmRWZNKzJjaUUva2VRQkhTYW91YmhEeTZ1K1pyYm81MnR4NlpWRnlrSnlHOXRPV2E5V2Y2M0J0ZmVmZW1PVTRxb1ZXc3FNckd6T0FxNzFURGp0dVA4d0h4RkZPL2V3a1dkUkNqcTc0Y2xCbFl2eUpEenpmQVpDZSt5QUxEZ2ZaYTM2bWtIa3FCRTZjUnJjVFlDYVVmRytheFRxeGZ4WGp2eHJZZDNEMCt6a0FMRWdkYzJ6R2ZMUU4zem81ZGk1S1oxbWl0UDdPNmhWRVJoUzFuK1p4b0pVc1RqejkzM2lEVHNqUUp5eUpweE1zS0hjMEc0ZDRhK0JrL3RPV3JYZng5emI0dkRhZGlTK256RUg3ZUVxNjVZVGZ6M2llbjU4aHVxVDlrQnJQdmRhNkI0bnNkZ0NrZlV6bjE3Zi9Yay8vT3J6d1QxcUdqcXZqWEJEcDg1dDM0Q2V2WE53Vm1VbDAremlGTkNlYktKSER4WCsxZFkwZHdhS0l4c2NoNVEwNW5nQzJnZjI2KzVteEk0T0JXTGFwd1FpSUVBbmJCZzA1OCtrVnF1Z1U4OXBsUmdva2lCSEduQ2VtcVlXN1JDWnFNUldjelRCUUFYUE5RMEJTemxFbjdVWTBmKzdTb3RTelp5eTJQdCtSbTBZamd0eG9vSktRMHB2ekFHWkthMjI0TFZhSG96VjZqOC9JOEk3U2xiYVd2aWU1RlBBTkdZTjlpLzNKc0pUYnhpTHYydW9ROURFbFFpQmVSYkJmdVQyZlhMNS9wRVQrdWd5TUVWYnZUY0lUbWlzZUlHanNvUUtkRU13Q0lCeHZtM2pubTRLU1c4NzEycWZoaDNTM3ZyMEh6WlY3dHZyR3pvaERlQ3IyUFR4VWxXdGFmLzU3TG1SNy9OSU9hSEFzOFBwLy9FK0E0TTRheUkvc0I4c2lxWGlCbHFBd2JIWUwzSzFFcG9VaURPT0c4S09NZGJNMlE3MG1rZ2hVaVVobVh1Q21XRmw5d0ZtTTV4MkowUkNObS8yd1p5cTB0YWJQajhpa2h0ZG5iODlvRmt5eEVpM2FGYnc0WEFDMElKbVRjcFNKcytDMElMMTh6TndWZzJ2cHNwajNwSHJSRk5PVGhVWUI4OTJ2dmRDbFQxRmpYQmZIeEdsWDBkQzcvT2ZqMWQ1UURDQ1dIYzFkUG5qYlNya2ZTdngwYXJTNk5Rb3J3bEVyMzJNdzFlaVRna2NkOWYvbldOcmEvRmFMRUsyWE4rcWRRMFhZSkhkcTdEME01YXpia2pxSWVZYXllUEZWRVhSakZQM1JnTEc2NWlzQnVRdktFa2ovM29UUlZST3JFSDh4amxuMVMrNlRDMEVzM1JQL1FZRnR4emFSWW1ncVZzWVlTakkveDNWdWRMemJ4R1FHejNvMllaZ20wTDlMOXhsYW9zdkhvSllyYTFsZ2pDdDVtN21QNkxrSmVQejBwOEdSK2dBS1BwQkRvNDdmQ1h1RGphenJGVitsUWpQaWlldlEvaWt6Zm1PcnhURjdRZGVENlQ0ZEQ1QmwzclF4ZEF2cjRlRkNjckNMVXBGdE5rdVBaZ0xKa0daQm1oNEx1ajZrYjdyc2RXWUN2TzdLdmFpaTNrdjlnR2pQTDFaTmppYWFzWU5NK1pFQ0RXa29yVUEyRDFsYTUrd1Fybmo2NUNudjlzc1B6cUszRWgraXI5clNHNDJWNkFyN2N3SWh0NU84M1pFYTh5QVZqbXFBZlJpcnRnbmNaaVhLaFlLRjNLS2l3VFpBZ3k5UFNZeklrM2hISDdEakNGV1Y3V2hTL3NGYmVjcnZuYm9IUStOS2N6UGYvREpwSFN5ayt3c01WWGdJNy9QalFSaUhoKzlnbUw5Qkl0UjE1bjQrYnI3OWd0SWZ3SjN4Z0hsWUc5elJWUHY2OEhEbjF5WCtHYm5ua2E0VVpYLzd3aFc1SUlSQ2FGMm1mclgzcjY5WmxRbHFpcDJBOVlRZi8wak5QV3JuL0M0R1BmN3d4cVlwc05JLzAxSm9BWkZ2dFVoSUVXbXBQZ0NIUjJWaUQwWEJhUk9Bb1NYOGZkdGJ3UVhpek5jYXFENFFyUGo1MTJ0ZlNnWkJiMFhQYmJ4bXF4R1dJZkNJcjFTNTg0NTJVYXBsUUpjZ0lyVU1CZW9NbERJMVdmckdWcnF0czZlN0h5dUptVUs4VFVWZnFPYXF5aTBRUEJFMTdDeUxTa2MrdWlaMG5saUl4akU2eDVDVG5lSE5IdkJCNmw5OHR6K3JCRUtCMlBLaXcrSFlpRmZzV2hDR0pGM3phRWVMNzFKa0xnK1p2RC9qVzllRVBTL2svZGxod2I5WlAveDBac1dwSjRJYkVhS1Nha0huRE45Qmc4UlNUWXdCc3FaSUtjS2ZhQy9jRHFjV2pERm1BVElURjdIMEZVckdySjFuL0xLTzZiekV2ZWFKdVpLbEdXRUNjUXlQZW5sQ2ZsbmtKb04yUEtOeEJXZ2pHVzY2T28reStpMkhPM0JWcHdqUlFURExCRkpnY2xvalV3VVNUaWRRZFFHN2xZRUwvaytWRU94YlFkdllPUzcwU1Ruak40MkxheWgzdlJpdzhoaTEwdnBZNkgxU0pzblQ3K0JlVVF3L2JNTEdQN2MvK2NQaVd1cXM1N2VCc3lHeVdkTERub2hzR2lsUnUrditKcEc2clkzSXhSVEFLK0ZLTGlMYTl6YjljK09yVUJka2RwV3h1UkZBSUdqeVI4N0dlazFPU1Jsd0w4ZFEzT1VEZ2pxMUVrNVQ4M2tYL2xxUy83TjlZR1Y2SGFKY2pSbVhzbXRYNWpobmhTVnhYM3dzSEljZW9VY2FqL0JjUDlrU0RhSXE2OGFWY1VvTUtQV1RUSG9EQWVLTGxiR2FCME0rMGRHTnR0SU56TStHRXFDaU16S0tZMzREZVZlem56VFhFWWZYUVFwNGJoMmRveDZHK0JmK2ZsY3ZyTVBod2pEc2pGWUwxTVdzaUdNSWdrcGtoQlRlai90UVZueXQ4Q293SDA3bTF6RXFqSkpTT0VOb3BqYkZ2RzNweG56SFJqME5STEIrMUJxU3lnUTJzVVkwUzJJZlByZXYyWUVnOHVLdXJ3Y3l0SWhPU0NjV09kZzE1SWZENmpkMDVoN2t0eUdKUlhkNUhtNlQ3TjU4c2s2eXUyYjgrcFlNb2RqSDNQb1l1V01jajE4M1ppbFp1R0FSWXkwNkRDdW94UUxORFVXWG1kTGhVT3UvUVBXaEMvdEdtK2VhempZZS9tM2s1QlkwTGNlbTlBays5enpsRTV5TVRqMmdZU1BBdlBreDVVM0xGWmdpdXBQM2hJZmhkMUtuMFd0QXJ2TlRUb2dWZzJ0RmVMbnBNY2s0TmgzUlR6NmIxMmlCWkhZR00rQ1hKcy9ZM3lYeGthcFIvUERVWFcremJRd3JUSFZJWXppNEc2c0pUREpwNWxsWWNlWkJoZ0NBVGxiREV1SVJIdFd3WUJaRG4wRVVlUUp0VWQySm8vTmRkb1lRZGJEMU1vSUVHUkxWOFN4cG5hKy8yb3hhYWVjVm9LdlJQUlRBa2tBYXJBN2FHMzc5R2h4ZGk1Vnh6ZHl1Mnh1T1ZFV2FWb0k2bjBVNG8wYm8xQmhnVHRxTkJlMUxOVFhVOW42SnVSNVNJQjdjWktUSmU4NGxZRFlJd2dkT0JEMFo5cy9YSzIvNEFRN2VhT2YwaGhLVnM3R1ZtbTVDU2s3T0trMTZaZy9TY1FPY3l0dnhhckhndnpGL2Mwc1RLMm4rWmVnODkxelJSV09iclN6RWU1d094TW1ydVhPeXdSTGdhamVkUXJKcFp3azdwZitYcUVVU2dnNERlTXBJYXQ5djEzMmM0OXlQTnNSWDRLVDFkZ0dpc2hPbjhVQ2FrN05aeWViWHhjRFh6RUlXTVk5b3hZUURrcUIrVGs1eG5VdGFNSHdZS2UxOXZvQXJoc0pOdHpXZTY3dXV2UkhoeVc1RXNNTG8xdElHMHNJdkVVOEc4L091SDgxcVFaYW1xVFpLdEVjbFdiWFd2UW0xdHNEelBnL1l3TjNrVkRERnJBdE4vOGNYNTJpamV5SmpvRnh5QmlFSC9qWUlCbFhIZzl6T1dHQUltd1JCV0NIZXBTbGtpUEFXOXpueEpIZ0Fob3NMajBTVTRKNEdQbURpcG45alhTdVU0Nnd2NjBFczAxQlVIbTBxeGdMeWRNWXBPZHdkaFhlWVpmZENQQVowVTNWb3Uzd2RyQVBsODg3NUpYUGxnZ1g3Y2RiczFka2R2cHdkQjcwWVdmbXRzeXdDNElTYzA4RlMvZS9OUzZCeGhIZkVOak13VU5yOEJlcVlOeUxZKzFIUk5kbjE2L3dqcHRqQmRHV05CMHAxb2tOcTUwNm0rUDVhRnpaaVh4YTEyM3hiRXcxTFAxRkg3V3oyb2R0cHBodVljSHliSHlmdjZXV05GM1NXSUVycUx2c1RWWjdEdGNwOTNJcjg3dnlCd2M2a2NHdUlITTF3azF4UUZWdWtSSmxEMjJabzEyZDYrOWRvMjVCdlhLSlJoS000Mmg0ekNxRE42ZS93Sjk0YTh6N0o1RlI5d3E0MVdscGU5YWw4bTllblJSb0pBVTN2SjY5VGs2UGtFYlV1dmltb1gyclBRcHVwQ2h0Mno5TEN2dzM2STVEc2VjV2YvdjRZOGNqRC9jTXB3NENBc0ZrUmFoem5pQzVnNGYzU0wybkxhd1NwclUwOHBiN0s0ekJ2MXRKRytiajd5Ujc0b2F4N1BGS3JORncwUnhKWDlEK2Nha042QzJTSll3TjFYYnhNaSttb21MeXhUUTBwVVN3ZDNjdjRqY25QV0pPcDhhblpOMTJjaVJReW1JMUJCcFhwYVR5bzM4V3R2bDBxQ2Q1Sm85U1gvUnJGdWhSQThPMlVBR3d6dU9iYnMrTGY4NzlaaktxVk4zVTk2N3ZtWkFUMVdIWGswTktHUDMzdCtiME4yVWl1QmszWEhrUEVtTCt6TGJzYlcvTmszWTd0NjhIV2lUUjFJVGVoYm50WFVBbGk1V09DcUtkSXZGaTNJRHNaZTVqTHpwQ05sWUpMYUZtZmk3c0YySCt0TWY3R0dWQS82enpHc2o2aEp6TTlLVHB0ZDJhQmsvUjRwekgrMDhzWEc5T1ZBU3hvTjR6S0JFVGNTS0tSQzd2MHZRczZTWGFXN2F1QWFxT1hBM1djT0p0dGxVOUF4QjVsZGM1V29OUVR0aTBBWGFtV2tDNGdkWi9ORHNjVm1MNDVaaFB4NDQ0TGdCRGxjdmdNSGNpOVV0OTJxbTQ3c0pDaVBTTHptYnE5WVJQQTNTaUxWdEQ2c0dKaGZQUDRaOS9FZHBXQzc0TnhIRXNLSCtTVVNQQTRLMVhyNE5hK0RWWlFqdlg0TWxEbWtLV2hQbzNWR1lIczVGalRxdmJNS0NPZlBFcWxXekY1Ynp4MjFqQlR5aUlrTENZZUlNL3RLVTNabkVKYzJ0OTlkb08yTk1NVjFSd2NYdW82VFJ0b1BnRllzNERjRVFZa2prejMxbmVqN2Jta28vNnhWSDBwYXdmVHdacVpkVVA4eWFWTTJyQjUrbUJFS3kyZ2x0Q1oxQzFhSzFIdldVTFV0SnFLVjZnRG9IQVN6N2wxa0xDOGdIWDZqVGZQUUdZZkZUV01TMC9jMzlHWHZ5aU1BbmxSVHlER3dHb2tKT2NITCtKd1QwUHNaa0pkcGg3c21uOVBpVHc4YjdSZVpIc09ZKzVNOEhTN0hhVVBpQjBGeUd4UzI3cWNGUlB3Q09OR0FnTkE2enQycFZrYlhaN1dsRXBuZzcyRHdNeDk0ZFJ5R0VDczkycXZJQWhiamwzMFVRS0JiWVg2QkNyNTJ3YzNYREZacFFCOUNPZ3FJYVJjd3hUT0I1SjBRN200UmhlVjFPaGNySkVpUWVWT3BPT0E4T0NSMGJSWjJwclBranFZQlZYTnJYL3IyYXJkVHN3cjJSeG9WWDFFRkFVZ3JwLzhvRytOeThOZVpRdm95bmkzNWJFWXhYWGJpUGFXOXJwbFZzY2FRVHJCSTk1bDl1RzJEbXRXMFNjRk9UVC8vVDJrWEQvUnpPN3YrbmNaSTM1am1RTURiemJQY3FmQTNJWE1LQTI5cUlOVnhWRkUvSWF5Y3BNRisyNTVIZ3FlbEkrenVJNjNQSHNnK214WUZiSU4rNHBTLy9ER0RvM0VFSWFhS0R6ak01cGI0a016RERPQzFNR1E4bXdDZXd3WFZYWU1Wa1VuSUNHVEdHVnpRdktoSndESlBjOWN5NjM4T0piVzJ4MC93a241Q05ILytBd3RrNWJzVWJZVE9oTmZkYTZRN0lJWGZSMjRuK0R0M0hkTU0xZEV2UnkwcGJnOENwOUFENC9mL0RiMC8xK3FLc252TDVzNW5qVU92YUhpOXVpQlJDRTBqOUREVTFnTEFDNDdaRkV3TlpRRVpMdGUwQWZ3R0M2VnpxRzhHVUFTRjA3ZEs4b1hjWER3RzhCanl6eHprajhGYWhvMVRPeDZHUmZ3Y2hWWmJISk55dXU1RjQ1QllyN3JQVmZiY3pVNm1aZDBGZitEMlUxVlQ4RHIrYkV4bC96S3RsY2c1ZStNQ3plamhRMnV0NTgzelRwWEUxSjQ2a2FuQTRGNlUySVh5SEM5ekNzRkp6dnVJU0Q0aExYNzl2TStacnU0OG03WDF3dHM5TUYrK3VjcXNVRmlYTDZXL0s0ZWo3SnhPZ0xtVlhVQXpoWGpuR2pWdkVEd3dMRWk5ekc4RnJWbXNybFltMGJPdDdZNERJMnl1NGJtQTFjWi9uTVNmdHNRd3l3dVhacS9DWDNWRXI4cUZKU256anZDNm1hV3Y1RnZNdE4xUEhiVlJ6MzFmYS9uMnVMNGFTUTJ6cWtVSytDNWRsNnRqQTZGK2JDVHdtVFc3L2wzMWxJdlR1NWFsVlJtNXpUT2dPaU5NamF0RzZtMEdJN096cnZyTW9pM0VBRU05MnBRU1ozQnN6dCtUaFJ4bWFnQ01iYjJqc2VLSW8vNmhsdnZ1V0o4OTd6d2k3cExQelNSTDg2RU5jeUpqSlh1WFc0ais4alBpSmRjM293aEFhRzNya2NJekNzKzBJNjJHYXAyM2hod1I0MHNCRnhHUkVXbHZWOUlNckVHQ2RpTGl5aU0vYlJ6azR3dWNVUUxNcnNkZ1VWVnBjRjlvbTh3MUhaUHR0d2NOT1YySFBrdlMvb2J0K0pwOGx3UmNUbDNwKytRck1Ta3pST2x0YTJWM1dac2YvRmFCT3hGeEpodmphZ2VYcW9ENE5ra3NNS2x4emg2SlJsK1JwSjh3VkFObWloOGZoM0lGN3c0cjg0L2orbVpYamNwQWFsOVorYlFGamYvUXBMZ3lUMGQ4d2tlZ0hqMlNTcHdwRFpaSmp2eHNqVFZwMjg2UTcycWVIMnZQR3BQOHZITmVBdnllOTRJL2ljUUpvNURhSGlaMm8rS1V1bVN3d25kSVBDeTFlMUFtbVlaQ0F3R0p0NktORXZiSEd2WnNBeEdzSTY1bWxLU3ZWQnVRM3N4TnA3bjgvbHFaVUdSdG9BTmxlaTk3b1R3UlIremlWeEpFZHZzYXBQeG1qMGxCOVp3N1lOaHVnMWV2Z1J5OExmSDVYSUc1cXBicmV2Zi9GV29yeWt0TWJwRjVKNmxXT2NPK2c5eW5UdHp3bnFUa2llTXlWL0hzQno0czFQVEdDbTVoNDB3Qm53UFpITTJkNmltZUQxVWVoSEJNNW5mVTA5ZWk0b1pVcDltbkFVd0RuNVh4MGZVY0YvSS9XdXhhUjF5QWczOVgrOVpCSTk2Q2dMR1dLNFM5ay8wUXkzYkltOGxGYXVUMEl4NlRQVTV2d0tuZ25LL3VpYVV3RzdOYWREM3RleFhoMy9kcnJsYVBnSUZUeWNkSzArUWRMVVRTL2xaWk56M1Q5Ylo2bUcrNjRPMy9zWExFUmRCZFE3MDRjTXRnbnVvdGVLQmNBSzFzOU5CRjdzZC9xZUZadzNRQlZXalNsenc5bFZjZWtGVkNMQ09WWks5RkFTQUNXTlR0cUJkcUZPTjdHbFpYOFB1TmhHSisralEvKytZTG9Mb09VOGhMclhQdW5QV3c3RnVybzh5NG41S2dOL3VTQjdpV2JUdlpEL1BGZ2xsZjJsdEhOUDZ2b2oyQ1d2dzloVXBVUGZBaXh1bkJhSUc1ZzI0V1B6L0RNbWNVZjJPaDFPWUJWNGxuZmFGRGhuTThsVXpEa0hPUjVWYmdIRm5aS1JGR2xWV2ovYXpMWkREdjBkTU5jWFhHY2VKQUIzTEdLV3laUTNLRHNZUmpXWkNoQWVzMm1hemwxS3NRR2RDenVpWXQ4Y3FOVDRkWFcxZVVBQlA4QUJFOWk1RGZ5cnFES0lQVVlkUTM2ZmpNRFh2Nm9KaWpxM3MvL3JWUXFwK0U5cG1hakVkMFFUd0d1azh3bmtOcHR5VmV6WFdxZE5GVENFTWpXeEx0aisyWmhucTczSU9KNS9tM082dGd1Q3FEanNVOFcyNFp6QmxJVUFIcWttdGx2Q2FaK25JQVVVZ29Sb0V4QS9VU3dTQitaakxGVzdQZUEvSGI4cm9FTUJ2OG9mMUlaZ1BZZ3RIaVpmLytRaVc0cVpXdDBxUzd2dzRVLzhSVDBuaThZTlcxdFJ3Sjd4cHQvd3EzR0ErWUdMMkNFYmtlVDRWN1JDSldaRXBZSElUeGgvdTIvcHRqRitvNE5MYTFrTVQrRGVXbmpaL1JjL240bXR5dFZQdmdQM0kwK2VYM3VtMFhCZENVejAxQjQzcUwySFdVNVJ4RW01aDI3QVY2TDZ3MTFlS1E0clNzK1JmMmRaaDVqRHVPcU1Mc0ljVHo4WmlNQmVsMkZSQ3VvaGZzb1ZMWmI2bEtjMU55MFNQYk1Nck9MOGZNQ0djRndlcWQyRjYzNHZKSmFWK05CcytEZzNLTXh1MzJPQk92Vmc4eVJaQXEyeHJ6aFg4SzZwa3J6ekx1ZUMzS05ra2ZQSlFsU3dBQVNxR1hycnZraFUrNmx1QkFHTEgxdVNqNWUvWHpxSkNscWVvV1dLNytUWHZuL1lDaGIvejJGZWlQT0pjdTdhWHBaTE9tcTgxSzJWdmowNHQ2SHprV0gwOTErdUtmSUVWaStYaVViQXRqeDd5VkxmeUVHNno3NDYrY2lsbU1qbXkwbWl3YWtOSFRhanp0dkdSYlo3czNtUjN5VS9HTVlpQ0xnTWdncFlMT213WGlpU1VZeFFSR0o1QnV3a0Y0YXFSWlVpaUlOaDMzdmtpMEJocVR2bFIwRmRjQW5XUHFYejFpOFNrUWVIOUFNU1luNnhLMmIxWkowMmFIalRRZDMwTlc5VWFQSUwwTytCOXR0Wm40MVdZRTFOa015dHRnOUlRYjRlMGFxSzJLb3ZLSVNlN2FkUEZEbzJvK21MMElub3dHRGRpeVFMcEs2NkJTdGcxeVBwT2dsUUdhSE51RmxDMExPZG9KNWgzSUxVRWtpRG15S1JrcUtxSEhBaHdtZUdjVmdmeHdROHExbHNnZVVVNys4L0hmRS90V1BKdm9HbzlsRW1PYjE0TU1wVnJvWGlwYktyUElPbDJSVjdCWDEyUDRWd2VpVjN5VXFVaFRxaHloRVlkMG5rOFRGZ3dubmN2cHFhSjAyYXpYMmFwS2YxSlRTalpyVVhpQ1FHTXl3ZEU1QzdxQ0FKRmZyV3RpN3JTaWRNV0h4MkVidUlCZ2hwRlRxcEQ2c0lGb04xMVFjazdTY2NkUGtvMnNxOXhMWGRkZlZLVjRveEJYOUhqUVVPZkxvOEZ5bHNiWHlUSmJCUmsxQ3dUckMvWHY1eWt6ekc2akFWb1JEdEpJNHVNbHZFM0E3c0d0SVB1OUJ2Mks3SEtIVFQwYm9icTB4RWZLZERjVG5wbThiZzJ0eUZsN1RZa0dnUUZoeVpENG16OFU0aVllUnRvb05uVWZpRDN4SmhvMTVUQ2RJcmR4bzh6VGd6bEk0VTJpenF1UTF4Y0lxcmlJMEI2ejVqaTdwU0d1M1FEbnRsUzRKZ3hHRHcyTUJnREJlU3UzRisyVkNmTzNXK01ZS0U5aTJVUWNrVHEyZjhuS21lRUFTbFR6SDNwVUdtMDRpYzJGSzhVd1ZxaENTZlczNUF0UWxuMmY1dml6R2dDQkc2ejM4d1B4bmwxQklCbCttZ1FQSEpkcXBldjN1YytPb2RCMzc2MWN5MmIvcGs5MUZCMHV5SzZlR1hzVFVHd1RGbXc1UkNHdmI1ak5MU0xRQnlHcDdHWi94YVp5eUY5MnZjbm4yRlVhejJIRWlxTWRVMDVLUFVWTE9HVS9URXhSTFIzdTFXa2pzZWdhSk9BV25BRWNYeGtLaXg1MVlxWVd2d0pYK2o3T3VrUjBmeUI2TDlUQUIvMzNMWUFzR1pSdkNCNkFvMHprMk1XVWxmZjc0K1Jha2d5dDkxVW85ZEo3RDRoZXhiUERNMU9TUkdoQzVMeUx3MzZ0aUc4TDJxWTZ1UDdmWlNpNDZtQXNreEZEUzN4bkdHamxHeGh6NlFHSDhIb2VOYzg2RlBoNkFhNUp4YWdLTkxQV3VvdkJTSlZJMHZhRlRiMElETkFxekpEZWFOd1BMWHZVNU54bTluQUVBWXE5cXhKUkNPcDEzOW5FemlON3FuM0lGYWw5RHMxd0FGQklLc21CeVp1bEdzNVJZdDZldktPeFRRbnR3QUFzNldLQUdtTVZoQmppV3RjclE1RlJwWmh2NzJnSGRubUlDUXp5OEVOSjYyYWxzRXh6L2k3NjZaWVF5RHBVSUE1ajZTOFNKRHRpVU9Sd3ovaHhIczNuZWJDT3JvTTg4bXhQbU4rY1lnYTVpZ2pHaW84cmFJeVJpaFg2TzdQSVV4cm9NaGFKY3p5R1VGZG8zQTlOVWVIckFlVWhGeW01em1DTXlBU29CcmxVakhsTWpGMWErVVNsaGhrSG5xVkhCNitqREtTQStSbzNmK01sRDgyTFpMUmNtZlo5TjVYenh4WVZ0dTl2WFE0eEhBazZGQ1JKaDh0dlV6SG52My92NEtXTUZxb1pEWFAzN0E2c0loU1hhdUhhQjBrZCtWa1Q5QXZ2N2NmUjQyb1IyZEhON056SVdEc0JoRGRDTk1aU01TNnhRek96UjFrckRYa0piNHdMbTZXOE8xSDZZRWE0RWp5bEY2OEJhSEhROEhlelRHQmNCamR2SkVmWURmYUVUQzFRU1FsbTFLQktUby9LVWh4ejhReUV2aGN1TmFlVHU3WWE5UXBaNDJ5RXc4V0xwWTJURzBEYXhXdW1iWGRiNUhEa0ZlZlpyMHdpN2tPdDBqUDM2ZDMwK0dJNU10WmZpaG5QQnN3M2FWVGNhazMyZFhDdmRvcC94YWxlSHVHSGNtMEtCVWU0NG0rNWJxZ2xGbHorV0hyRE9FSU8zVTNzOWFKcGlpUndGSi9OckpmMm82b3FmS2hjR2U1dll3U3Z0NlFteG9BaDdoaFFrMHZ5UTMxMVE3azUyYkUxdncyVWxkV25MTEU2NXdTYWs4V2oyQXJPa3BKMjRQWXFZUGFWNzZmUXRaaGdTbHV0K2gxTmRselNxZmpleTFpM2ZYbG53aE9md1FxNUVYZ3Z3SWJCQi9uVVBzRGFOVnI4RE9NMS8vUjhKcUx3MGUzMFBhcFRocmpNM3g1MVc5SmEydG5lNzY1Zy9iSmY3MlB4VnBCbmwwcjVXajlNL0lVRWx1OXZRcm1sTkc0VEdBZTVCcWZJWjlKNGxNM3d6SHRvN3RQY0d6Slh2elAzaGJscTgrK2xJRjQ2ZXFkYU9uRW9Lc2RvOTFZWDRhb1AvTFh0cGxqQU1lVWpwTmhDMTBjcThiVFYzQ0pXQWJ2RXZBb1I0NEtHMk5QSFUrT1o2VjFaUnZoZm1zQnByMlN0R3VyWks5K09KL25nRVdtTEtnc3ZLc29YWFJPZ3pWeVIxVDM1bGpZNTBiQkJydWJwMXFwQnZEZk9iUlJLKzNBcElIWDdvZTRvNEpjamorcEEzODc2S21GRXk2SkV3aXUrbVNYTDl3R0dKcnhuZkEyUDhyTE9Hb3hWMEk5L3Z0RitGLzg0TjcxV28vWHFaTkVvbnZBeWtpZ0dDSWNmam5jbGNPTXBtb2dHMnUvdDBTRGF5N3FTVFdiN3pWMENCUlZSOUVsbmVQdHQ2WEtEUEQrR2tCSzVnNTBZY3BPL05LWnhzS25ld21VLy8vSlNHclRyZDZOeFBEaDFJNnBRWTZ6QmNrWS9NNzBiR0hXb2ZpYzJYOHlhTmRpNDNxbGJzSldyMlhQVDQ2eVdJZFg4SXhHQnZWK3hFL1lVZUxBb0VMK2NpKzJ5amVVdTFnZ2U3THJNcktVZnFwYVE1eFFIbytEbFA4SkI1UndieDZnS2NHRmFqU0wrTldsRHA3Z3dBY042em94Qlo3alc1Mi8rR3JnMHlBZEpBSHgxWlBEaXkxNlhINStzOWVNcEptMHJkcE9BbUpsSnRtOERwUGp5MHhBRlV2OVlPNURvOWpwR2lHRURFb0FJVk1naXdtSzFzYzVqUVFQeWwya0EvRWRJemNMejZ4bk9qRzVKQkovR2RzL1Jtb2JQbDdzcklkd29BQUFBQUFCRlorRklBQUFBXCIiLCJpbXBvcnQgSWNvbjIgZnJvbSAnLi8xLnBuZyc7XG5pbXBvcnQge251bWJlckFkZH0gZnJvbSAnLi90ZXN0LnRzJ1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJpbnRNZSgpIHtcbiAgdmFyIGluZzIgPSBuZXcgSW1hZ2UoMjAwLCAyMDApO1xuICBpbmcyLnNyYyA9IEljb24yO1xuICBjb25zb2xlLmxvZygndHMnLG51bWJlckFkZCgyKSk7XG4gIGNvbnNvbGUubG9nKFwiSScgbSBwcmludE1lXCIpO1xuICBjb25zb2xlLmxvZygnYScsIHByb2Nlc3MuZW52LCBwcm9jZXNzLmVudi5OT0RFX0VOVik7XG4gIHJldHVybiBpbXBvcnQoIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiY3VzdG9tLWxvZGFzaFwiICovICdsb2Rhc2gnKS50aGVuKF8gPT4ge1xuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBlbGVtZW50LmlubmVySFRNTCA9IF8uam9pbihbXCJIZWxsb1wiLCBcInlhbyBkdW8gZHVvXCJdKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGluZzIpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgcmV0dXJuIGVsZW1lbnQ7XG4gIH0pLmNhdGNoKGVycm9yID0+ICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHRoZSBjb21wb25lbnQnKVxufSIsImV4cG9ydCBmdW5jdGlvbiBudW1iZXJBZGQobnVtOiBudW1iZXIpOiBzdHJpbmcge1xuICByZXR1cm4gbnVtICsgXCJcIjtcbn1cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==