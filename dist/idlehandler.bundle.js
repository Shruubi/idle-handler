var idleHandler =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var ONE_MINUTE_INTERVAL = 60000;

	//idle counter
	window.idleTime = 0;

	/**
	 *
	 * @param {number} timeout - The number of minutes before the idle handler should call timeoutHandler
	 * @param {function} timeoutHandler - The callback to call when the window times out
	 * @returns {function}
	 */
	var createIdleHandler = exports.createIdleHandler = function createIdleHandler(timeout, timeoutHandler) {
	    return function () {
	        console.log('creating idle timer');
	        var idleInterval = setInterval(function () {
	            window.idleTime = window.idleTime + 1;

	            if (window.idleTime > timeout) {
	                timeoutHandler();
	            }
	        }, ONE_MINUTE_INTERVAL);

	        window.addEventListener('mousemove', function () {
	            console.warn("resetting timer");
	            window.idleTime = 0;
	        });

	        window.addEventListener('keypress', function () {
	            console.warn("resetting timer");
	            window.idleTime = 0;
	        });

	        return idleInterval;
	    };
	};

/***/ }
/******/ ]);