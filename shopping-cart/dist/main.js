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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_modules_alert_alert_controller_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/modules/alert/alert.controller.js */ \"./src/modules/alert/alert.controller.js\");\n/* harmony import */ var _src_modules_cart_cart_controller_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/modules/cart/cart.controller.js */ \"./src/modules/cart/cart.controller.js\");\n/* harmony import */ var _src_modules_quantity_quantity_controller_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/modules/quantity/quantity.controller.js */ \"./src/modules/quantity/quantity.controller.js\");\n$(function(){\r\n    $(\"#content\").load(\"./src/modules/card/card.view.html\");\r\n  });\r\n\r\n  \r\n\r\n\r\n\r\nvar products = [];\r\nvar cart = [];\r\nvar productdata;\r\n$(document).ready(function () {\r\n    var self = this;\r\n\r\n    $.getJSON(\"../src/data.json\", function (data) {\r\n\r\n        productdata = data;\r\n\r\n        data.items.forEach(makeProductList);\r\n        var listItems = document.querySelectorAll(\"button\");\r\n        var i;\r\n        for (i = 0; i < listItems.length; i++) {\r\n            listItems[i].className = i;\r\n            listItems[i].addEventListener('click', addToCart);\r\n\r\n\r\n        };\r\n    }).fail(function () {\r\n        console.log(\"An error has occurred.\");\r\n    });\r\n});\r\n\r\nfunction makeProductList(item, index) {\r\n    const content = `\r\n      <div class=\"card\">\r\n        <div class=\"card-body\">\r\n        <div class=\"discount\">${item.discount}\r\n        <span>% off</span>\r\n        </div>\r\n        <div class=\"product-image\">\r\n            <img src=\"${item.image}\"/>\r\n            </div>\r\n            <div class=\"product-detail\">\r\n          <div class=\"name\">${item.name}</div>\r\n          <div class=\"price\">\r\n          <span class=\"display\"><span class=\"price\">$${item.price.display}</span></span><span class=\"actual\">$${item.price.actual}</span>\r\n          <span class=\"addtocart\"> <button type=\"button\" class=\"add\"  id=\"productID\">Add to Cart</button></span>\r\n          </div>\r\n          </div>  \r\n        </div>\r\n    </div>\r\n    `;\r\n    document.getElementById(\"product-list\").innerHTML += content;\r\n\r\n}\r\n\r\nfunction addToCart(event) {\r\n    var productDetail = productdata.items[event.target.classList.value];\r\n\r\n    var newProduct = {\r\n        product_id: null,\r\n        product_desc: null,\r\n        product_img: null,\r\n        product_qty: 0,\r\n        product_price: 0.00,\r\n        product_display: 0\r\n    };\r\n    newProduct.product_id = event.target.classList.value;\r\n    newProduct.product_desc = productDetail.name;\r\n    newProduct.product_img = productDetail.image;\r\n    newProduct.product_qty = 1;\r\n    newProduct.product_price = productDetail.price.actual;\r\n    newProduct.product_display = productDetail.price.display;\r\n    products.push(newProduct);\r\n    products = removeDuplicates(products, productDetail.name);\r\n\r\n    Object(_src_modules_alert_alert_controller_js__WEBPACK_IMPORTED_MODULE_0__[\"showAlert\"])(event, productdata);\r\n    Object(_src_modules_cart_cart_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"addCart\"])(event.target.classList.value, products, cart);\r\n    renderCartTable();\r\n}\r\n\r\nfunction removeDuplicates(originalArray, prop) {\r\n    var newArray = [];\r\n    var lookupObject = {};\r\n\r\n    for (var i in originalArray) {\r\n        lookupObject[originalArray[i][prop]] = originalArray[i];\r\n    }\r\n\r\n    for (i in lookupObject) {\r\n        newArray.push(lookupObject[i]);\r\n    }\r\n    return newArray;\r\n}\r\n\r\n\r\nfunction renderCartTable() {\r\n    var html = '';\r\n    var ele = document.getElementById(\"order-summary\");\r\n    ele.innerHTML = '';\r\n\r\n    html += \"<table id='tblCart' border='1|1'>\";\r\n    html += \"<td>Items (\".concat(cart.length ,\")</td>\");\r\n    html += \"<td>Quantity</td>\";\r\n    html += \"<td>Price</td>\";\r\n    var GrandTotal = 0;\r\n    var ItemTotal = 0;\r\n    for (var i = 0; i < cart.length; i++) {\r\n        html += \"<tr>\";\r\n        html += \"<td> <img class='cart-img' src= \\\"\" + cart[i].product.product_img + \"\\\">\" + cart[i].product.product_desc + \" <button type='submit' class='action remove' id='removeID'  onClick='removeItem(\\\"\" + cart[i].product.product_id + \"\\\", this);'/>x</button></td>\";\r\n        html += \"<td class='center'><button type='submit' class='action' onClick='subtractQuantity(\\\"\" + cart[i].product.product_id + \"\\\", this);'/>-</button>&nbsp\".concat(parseInt(cart[i].product_qty), \" <button type='submit' class='action' onClick='addQuantity(\\\"\" + cart[i].product.product_id + \"\\\", this);'/>+</button></td>\");        html += \"<td class='center'>$\" + parseFloat(cart[i].product.product_price) * parseInt(cart[i].product_qty) + \"</td>\";\r\n        html += \"</tr>\";\r\n\r\n        GrandTotal += parseFloat(cart[i].product.product_price) * parseInt(cart[i].product_qty);\r\n        ItemTotal += parseFloat(cart[i].product.product_display) * parseInt(cart[i].product_qty);\r\n\r\n    }\r\n\r\n    var orderDetail = `\r\n    <div class='order'>\r\n    <h3>Total</h3>\r\n     <div><span class=\"item-total\">Items(${cart.length}):</span><span>$${ItemTotal}</span></div>\r\n     <div><span class='discount-price'>Discount:</span> <span>- $${ItemTotal - GrandTotal}</span></div>\r\n    <div class=\"order-total-price\"><span class='total'>Order Total:</span> <span>$${GrandTotal}</span></div>\r\n    </div>`;\r\n    document.getElementById('order-total').innerHTML = orderDetail;\r\n\r\n    html += \"</table>\";\r\n    ele.innerHTML = html;\r\n}\r\n\r\n\r\nfunction subtractQuantity(product_id) {\r\n    Object(_src_modules_quantity_quantity_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"subtract\"])(product_id, cart);\r\n    renderCartTable();\r\n}\r\n\r\nfunction addQuantity(product_id) {\r\n    Object(_src_modules_quantity_quantity_controller_js__WEBPACK_IMPORTED_MODULE_2__[\"add\"])(product_id, cart);\r\n    renderCartTable();\r\n}\r\nwindow.removeItem = removeItem;\r\nwindow.addQuantity = addQuantity;\r\nwindow.subtractQuantity = subtractQuantity;\r\n\r\nfunction removeItem(product_id) {\r\n    Object(_src_modules_cart_cart_controller_js__WEBPACK_IMPORTED_MODULE_1__[\"remove\"])(product_id, cart);\r\n    renderCartTable();\r\n}\r\n\r\n  \r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/alert/alert.controller.js":
/*!***********************************************!*\
  !*** ./src/modules/alert/alert.controller.js ***!
  \***********************************************/
/*! exports provided: showAlert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showAlert\", function() { return showAlert; });\nfunction showAlert(data,productdata) {\r\n    var product = productdata.items[data.target.classList.value];\r\n    var x = document.getElementById(\"snackbar\");\r\n    x.innerHTML = product.name + \" \" + 'Added to Cart';\r\n    x.className = \"show\";\r\n    setTimeout(function(){ x.className = x.className.replace(\"show\", \"\"); }, 3000);  \r\n}\n\n//# sourceURL=webpack:///./src/modules/alert/alert.controller.js?");

/***/ }),

/***/ "./src/modules/cart/cart.controller.js":
/*!*********************************************!*\
  !*** ./src/modules/cart/cart.controller.js ***!
  \*********************************************/
/*! exports provided: addCart, remove */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"addCart\", function() { return addCart; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"remove\", function() { return remove; });\nfunction addCart(product_id,products,cart){\r\n    for (var i = 0; i < products.length; i++) {\r\n        if (products[i].product_id === product_id) {\r\n            var cartItem = null;\r\n            for (var k = 0; k < cart.length; k++) {\r\n                if (cart[k].product.product_id == products[i].product_id) {\r\n                    cartItem = cart[k];\r\n                    cart[k].product_qty++;\r\n                    break;\r\n                }\r\n            }\r\n            if (cartItem == null) {\r\n                \r\n                var cartItem = {\r\n                    product: products[i],\r\n                    product_qty: products[i].product_qty \r\n                };\r\n                cart.push(cartItem);\r\n            }\r\n        }\r\n    }\r\n}\r\n\r\n\r\nfunction remove(id, cart){\r\n    for (var i = 0; i < cart.length; i++) {\r\n        if (cart[i].product.product_id == id) {\r\n            cart.splice(i,1);\r\n        }\r\n\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/modules/cart/cart.controller.js?");

/***/ }),

/***/ "./src/modules/quantity/quantity.controller.js":
/*!*****************************************************!*\
  !*** ./src/modules/quantity/quantity.controller.js ***!
  \*****************************************************/
/*! exports provided: add, subtract */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"add\", function() { return add; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtract\", function() { return subtract; });\nfunction add(product_id, cart) {\r\n    for (var i = 0; i < cart.length; i++) {\r\n        if (cart[i].product.product_id == product_id) {\r\n            cart[i].product_qty++;\r\n        }\r\n    }\r\n}\r\n\r\nfunction subtract(product_id, cart) {\r\n    for (var i = 0; i < cart.length; i++) {\r\n        if (cart[i].product.product_id == product_id) {\r\n            cart[i].product_qty--;\r\n        }\r\n\r\n        if (cart[i].product_qty == 0) {\r\n            cart.splice(i, 1);\r\n        }\r\n\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/modules/quantity/quantity.controller.js?");

/***/ })

/******/ });