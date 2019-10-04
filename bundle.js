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
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/resources/combine.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/resources/combine.js":
/*!**********************************!*\
  !*** ./app/resources/combine.js ***!
  \**********************************/
/*! exports provided: initialize */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initialize\", function() { return initialize; });\n/* harmony import */ var _socket_socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket/socket */ \"./app/resources/socket/socket.js\");\n/* harmony import */ var _socket_versions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./socket/versions */ \"./app/resources/socket/versions.js\");\n\r\n\r\n\r\nclass init {\r\n    constructor() {\r\n        this.updateVersion();\r\n    }\r\n    updateVersion() {\r\n        _socket_versions__WEBPACK_IMPORTED_MODULE_1__[\"agarioversion\"].update();\r\n    }\r\n    join() {\r\n        _socket_socket__WEBPACK_IMPORTED_MODULE_0__[\"socket\"].connect(\"wss://live-arena-1vh5r7c.agar.io:443\");\r\n    }\r\n}\r\nvar initialize = new init();\r\n\n\n//# sourceURL=webpack:///./app/resources/combine.js?");

/***/ }),

/***/ "./app/resources/socket/formula.js":
/*!*****************************************!*\
  !*** ./app/resources/socket/formula.js ***!
  \*****************************************/
/*! exports provided: formula */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"formula\", function() { return formula; });\nclass formula {\r\n    static xorBuffer(message, key) {\r\n        let times = 0;\r\n        for (; times < message.byteLength; times++) {\r\n            message.setUint8(times, message.getUint8(times) ^ key >>> (times % 4 * 8) & 255);\r\n        }\r\n        return message\r\n    }\r\n    static rotateKey(key) {\r\n        key = Math.imul(key, 1540483477) | 0\r\n        key = (Math.imul(key >>> 24 ^ key, 1540483477) | 0) ^ 114296087\r\n        key = Math.imul(key >>> 13 ^ key, 1540483477) | 0\r\n        key = key >>> 15 ^ key\r\n        return key\r\n    }\r\n    static murmur2(url, option) {\r\n        if (!url.length || !option.byteLength) {\r\n            return null;\r\n        }\r\n        let key = null;\r\n        const constraints = url.match(/(wss+:\\/\\/)([^:]*)(:\\d+)/)[2];\r\n        const framesize = constraints.length + option.byteLength;\r\n        const data = new Uint8Array(framesize);\r\n        let value = 0;\r\n        for (; value < constraints.length; value++) {\r\n            data[value] = constraints.charCodeAt(value);\r\n        }\r\n        data.set(option, constraints.length);\r\n        const view = new DataView(data.buffer);\r\n        let maxTextureAvailableSpace = framesize - 1;\r\n        const type = (maxTextureAvailableSpace - 4 & -4) + 4 | 0;\r\n        let imulkeyValue = maxTextureAvailableSpace ^ 255;\r\n        let offset = 0;\r\n        for (; maxTextureAvailableSpace > 3;) {\r\n            key = Math.imul(view.getInt32(offset, true), 1540483477) | 0;\r\n            imulkeyValue = (Math.imul(key >>> 24 ^ key, 1540483477) | 0) ^ (Math.imul(imulkeyValue, 1540483477) | 0);\r\n            maxTextureAvailableSpace = maxTextureAvailableSpace - 4;\r\n            offset = offset + 4;\r\n        }\r\n        switch (maxTextureAvailableSpace) {\r\n            case 3:\r\n                imulkeyValue = data[type + 2] << 16 ^ imulkeyValue;\r\n                imulkeyValue = data[type + 1] << 8 ^ imulkeyValue;\r\n                break;\r\n            case 2:\r\n                imulkeyValue = data[type + 1] << 8 ^ imulkeyValue;\r\n                break;\r\n            case 1:\r\n                break;\r\n            default:\r\n                key = imulkeyValue;\r\n                break;\r\n        }\r\n        if (key != imulkeyValue) {\r\n            key = Math.imul(data[type] ^ imulkeyValue, 1540483477) | 0;\r\n        }\r\n        imulkeyValue = key >>> 13;\r\n        key = imulkeyValue ^ key;\r\n        key = Math.imul(key, 1540483477) | 0;\r\n        imulkeyValue = key >>> 15;\r\n        key = imulkeyValue ^ key;\r\n        return key;\r\n    }\r\n    static uncompressBuffer(input, output) {\r\n        for (let i = 0, j = 0; i < input.length;) {\r\n            const byte = input[i++]\r\n            let literalsLength = byte >> 4\r\n            if (literalsLength > 0) {\r\n                let length = literalsLength + 240\r\n                while (length === 255) {\r\n                    length = input[i++]\r\n                    literalsLength += length\r\n                }\r\n                const end = i + literalsLength\r\n                while (i < end) output[j++] = input[i++]\r\n                if (i === input.length) return output\r\n            }\r\n            const offset = input[i++] | (input[i++] << 8)\r\n            if (offset === 0 || offset > j) return -(i - 2)\r\n            let matchLength = byte & 15\r\n            let length = matchLength + 240\r\n            while (length === 255) {\r\n                length = input[i++]\r\n                matchLength += length\r\n            }\r\n            let pos = j - offset\r\n            const end = j + matchLength + 4\r\n            while (j < end) output[j++] = output[pos++]\r\n        }\r\n        return output\r\n    }\r\n};\r\n\n\n//# sourceURL=webpack:///./app/resources/socket/formula.js?");

/***/ }),

/***/ "./app/resources/socket/handler.js":
/*!*****************************************!*\
  !*** ./app/resources/socket/handler.js ***!
  \*****************************************/
/*! exports provided: handle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"handle\", function() { return handle; });\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ \"./app/resources/socket/socket.js\");\n/* harmony import */ var _structs_border__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../structs/border */ \"./app/resources/structs/border.js\");\n/* harmony import */ var _structs_world__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../structs/world */ \"./app/resources/structs/world.js\");\n/* harmony import */ var _protocolkeys__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./protocolkeys */ \"./app/resources/socket/protocolkeys.js\");\n/* harmony import */ var _ping__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ping */ \"./app/resources/socket/ping.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nclass handle {\r\n    read(code, view) {\r\n        switch (code) {\r\n            case 32:\r\n                _structs_world__WEBPACK_IMPORTED_MODULE_2__[\"world\"].addSelfCell(view);\r\n                break;\r\n            case 226:\r\n                _ping__WEBPACK_IMPORTED_MODULE_4__[\"ping\"].send(view);\r\n                break;\r\n            case 241:\r\n                _protocolkeys__WEBPACK_IMPORTED_MODULE_3__[\"key\"].update(view);\r\n                break;\r\n            case 255:\r\n                view.decompress();\r\n                code = view.readUInt8();\r\n                switch (code) {\r\n                    case 16:\r\n                        _structs_world__WEBPACK_IMPORTED_MODULE_2__[\"world\"].update(view);\r\n                        break;\r\n                    case 64:\r\n                        _structs_border__WEBPACK_IMPORTED_MODULE_1__[\"borders\"].update(view);\r\n                        break;\r\n                }\r\n                break;\r\n        }\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./app/resources/socket/handler.js?");

/***/ }),

/***/ "./app/resources/socket/ping.js":
/*!**************************************!*\
  !*** ./app/resources/socket/ping.js ***!
  \**************************************/
/*! exports provided: ping */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ping\", function() { return ping; });\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ \"./app/resources/socket/socket.js\");\n\r\n\r\nclass ping {\r\n    static send(view) {\r\n        let packet = view.readUInt16();\r\n        let pong = _socket__WEBPACK_IMPORTED_MODULE_0__[\"socket\"].createDataView(3);\r\n        pong.setUint8(0, 227);\r\n        pong.setUint16(1, packet)\r\n        _socket__WEBPACK_IMPORTED_MODULE_0__[\"socket\"].sendPacket(pong);\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./app/resources/socket/ping.js?");

/***/ }),

/***/ "./app/resources/socket/protocolkeys.js":
/*!**********************************************!*\
  !*** ./app/resources/socket/protocolkeys.js ***!
  \**********************************************/
/*! exports provided: key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"key\", function() { return key; });\n/* harmony import */ var _socket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./socket */ \"./app/resources/socket/socket.js\");\n/* harmony import */ var _formula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formula */ \"./app/resources/socket/formula.js\");\n/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./versions */ \"./app/resources/socket/versions.js\");\n\r\n\r\n\r\n\r\nclass protoKeys {\r\n    constructor() {\r\n        this.encrypt = null;\r\n        this.decrypt = null;\r\n        this.move = null;\r\n    }\r\n    update(view) {\r\n        this.move = view.readUInt32();\r\n        this.encrypt = this.move ^ _versions__WEBPACK_IMPORTED_MODULE_2__[\"agarioversion\"].version;\r\n        this.decrypt = _formula__WEBPACK_IMPORTED_MODULE_1__[\"formula\"].murmur2(_socket__WEBPACK_IMPORTED_MODULE_0__[\"socket\"].url, new Uint8Array(view.dataView.buffer, view.index));\r\n        console.log('Keys Generated:', this.encrypt, this.decrypt)\r\n    }\r\n    reset() {\r\n        this.encrypt = null;\r\n        this.decrypt = null;\r\n        this.move = null;\r\n    }\r\n}\r\n\r\nvar key = new protoKeys();\r\n\r\n\n\n//# sourceURL=webpack:///./app/resources/socket/protocolkeys.js?");

/***/ }),

/***/ "./app/resources/socket/socket.js":
/*!****************************************!*\
  !*** ./app/resources/socket/socket.js ***!
  \****************************************/
/*! exports provided: socket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"socket\", function() { return socket; });\n/* harmony import */ var _handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./handler */ \"./app/resources/socket/handler.js\");\n/* harmony import */ var _formula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formula */ \"./app/resources/socket/formula.js\");\n/* harmony import */ var _util_readBytes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/readBytes */ \"./app/resources/util/readBytes.js\");\n/* harmony import */ var _versions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./versions */ \"./app/resources/socket/versions.js\");\n/* harmony import */ var _structs_world__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../structs/world */ \"./app/resources/structs/world.js\");\n/* harmony import */ var _protocolkeys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./protocolkeys */ \"./app/resources/socket/protocolkeys.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass agarioSocket extends _handler__WEBPACK_IMPORTED_MODULE_0__[\"handle\"] {\r\n    constructor() {\r\n        super();\r\n        this.url = '';\r\n        this.socket = null;\r\n        this.socketOpen = false;\r\n    }\r\n    connect(url) {\r\n        this.resetconnection();\r\n        this.socket = new WebSocket(url);\r\n        this.url = url;\r\n        this.socket.binaryType = 'arraybuffer';\r\n        this.socket.onopen = this.handleOpen.bind(this);\r\n        this.socket.onmessage = this.handleMessage.bind(this);\r\n        this.socket.onclose = () => {\r\n            console.log(\"closed...\");\r\n        };\r\n    }\r\n    handleOpen() {\r\n        this.sendPacket254();\r\n        this.sendPacket255();\r\n        this.socketOpen = true;\r\n        console.log(\"connected...\");\r\n    }\r\n    handleMessage(message) {\r\n        message = new DataView(message.data);\r\n        if (_protocolkeys__WEBPACK_IMPORTED_MODULE_5__[\"key\"].encrypt) {\r\n            message = _formula__WEBPACK_IMPORTED_MODULE_1__[\"formula\"].xorBuffer(message, _protocolkeys__WEBPACK_IMPORTED_MODULE_5__[\"key\"].encrypt);\r\n        };\r\n        this.readMessage(message);\r\n    }\r\n    sendPacket254() {\r\n        const view = this.createDataView(5);\r\n        view.setUint8(0, 254);\r\n        view.setUint32(1, _versions__WEBPACK_IMPORTED_MODULE_3__[\"agarioversion\"].protoversion, true);\r\n        this.socket.send(view.buffer);\r\n    }\r\n    sendPacket255() {\r\n        const view = this.createDataView(5);\r\n        view.setUint8(0, 255);\r\n        view.setUint32(1, _versions__WEBPACK_IMPORTED_MODULE_3__[\"agarioversion\"].version, true);\r\n        this.socket.send(view.buffer);\r\n    }\r\n    readMessage(message) {\r\n        let view = new _util_readBytes__WEBPACK_IMPORTED_MODULE_2__[\"reader\"](message);\r\n        let opcode = view.readUInt8();\r\n        this.read(opcode, view);\r\n    }\r\n    sendPacket(packet) {\r\n        if (this.socketOpen) {\r\n            packet = _formula__WEBPACK_IMPORTED_MODULE_1__[\"formula\"].xorBuffer(packet, _protocolkeys__WEBPACK_IMPORTED_MODULE_5__[\"key\"].decrypt);\r\n            _protocolkeys__WEBPACK_IMPORTED_MODULE_5__[\"key\"].decrypt = _formula__WEBPACK_IMPORTED_MODULE_1__[\"formula\"].rotateKey(_protocolkeys__WEBPACK_IMPORTED_MODULE_5__[\"key\"].decrypt);\r\n        };\r\n        this.sendBuffer(packet);\r\n    }\r\n    sendBuffer(packet) {\r\n        if (this.isOnline) {\r\n            this.socket.send(packet);\r\n        };\r\n    }\r\n    resetconnection() {\r\n        if (this.socket) {\r\n            this.socket.onopen = null;\r\n            this.socket.onmessage = null\r\n            this.socket.onclose = null;\r\n            this.socket.close && this.socket.close();\r\n            this.socket = null;\r\n        };\r\n        this.clearevents();\r\n    }\r\n    clearevents() {\r\n        _protocolkeys__WEBPACK_IMPORTED_MODULE_5__[\"key\"].reset();\r\n        _structs_world__WEBPACK_IMPORTED_MODULE_4__[\"world\"].cells.clear();\r\n        _structs_world__WEBPACK_IMPORTED_MODULE_4__[\"world\"].ids.clear();\r\n    }\r\n    createDataView(data) {\r\n        return new DataView(new ArrayBuffer(data))\r\n    }\r\n    get isOnline() {\r\n        return this.socket != null && this.socket.readyState === WebSocket.OPEN;\r\n    }\r\n};\r\nvar socket = new agarioSocket();\r\n\n\n//# sourceURL=webpack:///./app/resources/socket/socket.js?");

/***/ }),

/***/ "./app/resources/socket/versions.js":
/*!******************************************!*\
  !*** ./app/resources/socket/versions.js ***!
  \******************************************/
/*! exports provided: agarioversion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"agarioversion\", function() { return agarioversion; });\n/* harmony import */ var _combine__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../combine */ \"./app/resources/combine.js\");\n\r\n\r\nclass version {\r\n    constructor() {\r\n        this.version = 0;\r\n        this.versionInt = '';\r\n        this.protoversion = 0;\r\n    }\r\n    update() {\r\n        this.getVersion();\r\n    }\r\n    async getVersion() {\r\n        const req = await fetch('https://agar.io/mc/agario.js')\r\n        const res = await req.text()\r\n        this.versionInt = res.match(/var\\sversionString=\"(\\d.\\d.\\d)\";/)[1];\r\n        this.version = this.parse(this.versionInt);\r\n        this.getProtocolVersion();\r\n    }\r\n    async getProtocolVersion() {\r\n        const req = await fetch('https://agar.io/agario.core.js')\r\n        const res = await req.text()\r\n        this.protoversion = parseInt(res.match(/\\w\\[\\w\\+\\d+>>\\d\\]=\\w;\\w+\\(\\w,(\\d+)\\);/)[1]);\r\n        _combine__WEBPACK_IMPORTED_MODULE_0__[\"initialize\"].join();\r\n    }\r\n    parse(styleValue) {\r\n        return 10000 * parseInt(styleValue.split(\".\")[0]) + 100 * parseInt(styleValue.split(\".\")[1]) + parseInt(styleValue.split(\".\")[2]);\r\n    }\r\n};\r\n\r\nlet agarioversion = new version();\r\n\r\n\n\n//# sourceURL=webpack:///./app/resources/socket/versions.js?");

/***/ }),

/***/ "./app/resources/structs/border.js":
/*!*****************************************!*\
  !*** ./app/resources/structs/border.js ***!
  \*****************************************/
/*! exports provided: borders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"borders\", function() { return borders; });\nclass mapBorders {\r\n    constructor() {\r\n        this.left = 0;\r\n        this.top = 0;\r\n        this.right = 0;\r\n        this.bottom = 0;\r\n    }\r\n    update(view) {\r\n        this.left = view.readFloat64();\r\n        this.top = view.readFloat64();\r\n        this.right = view.readFloat64();\r\n        this.bottom = view.readFloat64();\r\n    }\r\n};\r\nvar borders = new mapBorders();\r\n\n\n//# sourceURL=webpack:///./app/resources/structs/border.js?");

/***/ }),

/***/ "./app/resources/structs/cell.js":
/*!***************************************!*\
  !*** ./app/resources/structs/cell.js ***!
  \***************************************/
/*! exports provided: cell */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"cell\", function() { return cell; });\nclass cell {\r\n    constructor(id) {\r\n        this.id = id;\r\n        this.x = 0;\r\n        this.y = 0;\r\n        this.size = 0;\r\n        this.accountid = 0;\r\n        this.name = false;\r\n        this.hex = false;\r\n        this.skin = false;\r\n        this.virus = false;\r\n        this.food = false;\r\n        this.eject = false;\r\n        this.me = false;\r\n        this.friend = false;\r\n    }\r\n    setColor(r, g, b) {\r\n        this.hex = `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;\r\n    }\r\n};\r\n\r\n\n\n//# sourceURL=webpack:///./app/resources/structs/cell.js?");

/***/ }),

/***/ "./app/resources/structs/world.js":
/*!****************************************!*\
  !*** ./app/resources/structs/world.js ***!
  \****************************************/
/*! exports provided: world */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"world\", function() { return world; });\n/* harmony import */ var _cell__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cell */ \"./app/resources/structs/cell.js\");\n\r\n\r\nclass updateCells {\r\n    constructor() {\r\n        this.cells = new Map;\r\n        this.ids = new Set;\r\n        window.as = this;\r\n    }\r\n    update(view) {\r\n        var length = view.readUInt16();\r\n        for (; length--;) {\r\n            const eatedID = view.readUInt32();\r\n            const eaterID = view.readUInt32();\r\n            this.removeCell(eatedID);\r\n        }\r\n        for (; !view.endOfBuffer;) {\r\n            const id = view.readUInt32();\r\n            if (0 === id) break;\r\n            var cell = this.getCell(id) || new _cell__WEBPACK_IMPORTED_MODULE_0__[\"cell\"](id);\r\n            cell.x = view.readInt32();\r\n            cell.y = view.readInt32();\r\n            cell.size = view.readUInt16();\r\n            const flags = view.readUInt8()\r\n            const flags2 = 128 & flags ? view.readUInt8() : 0;\r\n            if (1 & flags) cell.virus = true\r\n            if (2 & flags) cell.setColor(view.readUInt8(), view.readUInt8(), view.readUInt8());\r\n            if (4 & flags) cell.skin = view.readUTF8string();\r\n            if (8 & flags) cell.name = view.readEscapedUTF8string();\r\n            if (32 & flags) cell.eject = true;\r\n            if (1 & flags2) cell.food = true;\r\n            if (2 & flags2) cell.friend = true;\r\n            if (4 & flags2) cell.accountid = view.readUInt32();\r\n            this.newCell(id, cell);\r\n        }\r\n        length = view.readUInt16();\r\n        for (; length--;) {\r\n            const removedID = view.readUInt32();\r\n            this.removeCell(removedID);\r\n        }\r\n    }\r\n    newCell(id, cell) {\r\n        if (this.ids.has(id)) cell.me = true;\r\n        this.cells.set(id, cell);\r\n    }\r\n    addSelfCell(view) {\r\n        const id = view.readUInt32();\r\n        this.selfids.add(id);\r\n    }\r\n    removeCell(id) {\r\n        if (this.ids.has(id)) this.ids.delete(id);\r\n        this.cells.delete(id);\r\n    }\r\n    getCell(id) {\r\n        var user;\r\n        if (this.cells.has(id)) {\r\n            user = this.cells.get(id);\r\n        } else {\r\n            user = false;\r\n        }\r\n        return user;\r\n    }\r\n};\r\n\r\nvar world = new updateCells();\r\n\r\n\n\n//# sourceURL=webpack:///./app/resources/structs/world.js?");

/***/ }),

/***/ "./app/resources/util/readBytes.js":
/*!*****************************************!*\
  !*** ./app/resources/util/readBytes.js ***!
  \*****************************************/
/*! exports provided: reader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"reader\", function() { return reader; });\n/* harmony import */ var _socket_formula__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../socket/formula */ \"./app/resources/socket/formula.js\");\n\r\n\r\nclass reader {\r\n    constructor(view) {\r\n        this.dataView = view\r\n        this.index = 0\r\n        this.maxIndex = view.byteLength\r\n    }\r\n    readUInt8() {\r\n        const view = this.dataView.getUint8(this.index, true);\r\n        return this.index++, view\r\n    }\r\n    readInt8() {\r\n        const view = this.dataView.getInt8(this.index, true);\r\n        return this.index++, view\r\n    }\r\n    readUInt16() {\r\n        const view = this.dataView.getUint16(this.index, true);\r\n        return this.index += 2, view\r\n    }\r\n    readInt16() {\r\n        const view = this.dataView.getInt16(this.index, true);\r\n        return this.index += 2, view\r\n    }\r\n    readUInt32() {\r\n        const view = this.dataView.getUint32(this.index, true);\r\n        return this.index += 4, view\r\n    }\r\n    readInt32() {\r\n        const view = this.dataView.getInt32(this.index, true);\r\n        return this.index += 4, view\r\n    }\r\n    readFloat32() {\r\n        const view = this.dataView.getFloat32(this.index, true);\r\n        return this.index += 4, view\r\n    }\r\n    readFloat64() {\r\n        const view = this.dataView.getFloat64(this.index, true);\r\n        return this.index += 8, view\r\n    }\r\n    readUTF8string() {\r\n        let string = '';\r\n        for (; !this.endOfBuffer;) {\r\n            const char = this.readUInt8();\r\n            if (0 === char) break;\r\n            string += String.fromCharCode(char)\r\n        }\r\n        return string\r\n    }\r\n    readEscapedUTF8string() {\r\n        const string = this.readUTF8string();\r\n        return decodeURIComponent(escape(string))\r\n    }\r\n    decompress() {\r\n        const input = new Uint8Array(this.dataView.buffer);\r\n        const output = new Uint8Array(this.readUInt32());\r\n        _socket_formula__WEBPACK_IMPORTED_MODULE_0__[\"formula\"].uncompressBuffer(input.slice(5), output)\r\n        this.dataView = new DataView(output.buffer)\r\n        this.index = 0\r\n        this.maxIndex = this.dataView.byteLength\r\n    }\r\n    get endOfBuffer() {\r\n        return this.index >= this.maxIndex;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./app/resources/util/readBytes.js?");

/***/ })

/******/ });