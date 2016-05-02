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

	// IE required polyfill
	import es6Shim from 'es6-shim/es6-shim.min';
	import angular2Es6 from 'angular2/es6/dev/src/testing/shims_for_IE';

	import angularPolyfill from 'angular2/bundles/angular2-polyfills';
	import rxjs from 'rxjs/bundles/Rx.umd';
	import angular from 'angular2/bundles/angular2-all.umd';
	import appComponent from 'app.component';

	(function(app) {
	  document.addEventListener('DOMContentLoaded', function() {
	    ng.platform.browser.bootstrap(app.AppComponent);
	  });
	})(window.app || (window.app = {}));

/***/ }
/******/ ]);