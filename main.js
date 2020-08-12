/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst contact = (() => {\n    const getContent = () => {\n        const para = document.createElement('p');\n        para.classList.add('info');\n        \n        let name = document.createElement('p');\n        name.innerText = 'Noice Restaurant'\n\n        let contact = document.createElement('p')\n        contact.innerText = '999-999-999\\ndemo@demo.com';\n\n        para.appendChild(name);\n        para.appendChild(contact);\n\n        return ['contact', para];\n    };\n    return {getContent};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (contact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst dom = (() => {\n    const content = document.querySelector('#content');\n    const clearContent = () => {\n        while (content.firstChild) {\n            content.removeChild(content.lastChild);\n        }\n    };\n    const appendContent = function() {\n        clearContent();\n        this.forEach((element, index) => {\n            if (index) {\n                content.appendChild(element);\n            } else {\n                setCurrentTab(element);\n            }\n        });\n    }\n    const setCurrentTab = it => {\n        document.querySelectorAll('.item').forEach(element => {\n            element.classList.remove('cur');\n        })\n        document.getElementById(`${it}`).classList.add('cur');\n    };\n    return {appendContent};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (dom);\n\n\n\n//# sourceURL=webpack:///./src/dom.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst home = (() => {\n    const getContent = () => {\n        const heading = document.createElement('h1');\n        heading.innerText = 'Welcome to Noice Restaurant';\n\n        const para = document.createElement('p');\n        para.classList.add('info');\n        para.innerText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias sit earum ducimus odio necessitatibus architecto. Est exercitationem, enim consectetur totam sapiente adipisci voluptatibus, sed eligendi reprehenderit labore illum! Dignissimos, deserunt';\n\n        return ['home', heading, para];\n    };\n    return {getContent};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (home);\n\n//# sourceURL=webpack:///./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ \"./src/dom.js\");\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n\n\n\n\n\nconst navbar = (() => {\n    const homeBtn = document.querySelector('#home');\n    const menubtn = document.querySelector('#menu');\n    const contactBtn = document.querySelector('#contact');\n    const init = () => {\n        homeBtn.addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendContent.bind(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getContent()));\n        menubtn.addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendContent.bind(_menu__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getContent()));\n        contactBtn.addEventListener('click', _dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendContent.bind(_contact__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getContent()));\n    };\n    return {init};\n})();\n\n_dom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].appendContent.bind(_home__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getContent()).call();\nnavbar.init();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst menu = (() => {\n    const getContent = () => {\n        const para = document.createElement('p');\n        para.classList.add('info');\n\n        for (let i=0; i<5;i++) {\n            let item = document.createElement('p');\n            item.innerText = 'Lorem ipsum.....................................................................................$10';\n            para.appendChild(item);\n        }\n\n        return ['menu', para];\n    };\n    return {getContent};\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (menu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ })

/******/ });