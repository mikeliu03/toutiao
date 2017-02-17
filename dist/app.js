webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports) {

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = options.computed || (options.computed = {})
    Object.keys(cssModules).forEach(function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    })
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(16)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(25),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Dev\\github\\toutiao\\layouts\\Main.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Main.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-72453e82", Component.options)
  } else {
    hotAPI.reload("data-v-72453e82", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	initStyleHack: function initStyleHack() {
		var dpr = window.devicePixelRatio || 1;
		var docEl = document.documentElement;
		var metaEl = document.querySelector('meta[name="viewport"]');
		var scale = 1 / dpr;
		var rem = docEl.clientWidth * dpr / 10;

		//设置viewport
		/*metaEl.setAttribute('content', 'width=' + dpr * docEl.clientWidth + 
  	', initial-scale=' + scale +', maximum-scale=' + scale + 
  ', minimum-scale=' + scale + ', user-scalable=no');*/

		//设置data-pdr,留作css hack
		docEl.setAttribute('data-dpr', dpr);

		//设置rem
		docEl.style.fontSize = parseInt(rem) + 'px';
	},
	getBroswerType: function getBroswerType() {
		var ua = window.navigator.userAgent.toLowerCase();
		return {
			isIOS: /iphone|ipad|ipod/i.test(ua) && window.MSStream,
			isAndroid: /android/i.test(ua) && !window.MSStream,
			isBustedAndroid: /android 2\.[12]/i.test(ua),
			isChromium: /chromium/i.test(ua)
		};
	},
	isFullScreenMode: function isFullScreenMode() {
		return document.fullscreenElement || document.mozFullScreen || document.webkitIsFullScreen;
	}
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _Home = __webpack_require__(20);

var _Home2 = _interopRequireDefault(_Home);

var _Video = __webpack_require__(21);

var _Video2 = _interopRequireDefault(_Video);

var _ = __webpack_require__(19);

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	routes: [{ path: '/', name: 'home', component: _Home2.default }, { path: '/video', name: 'video', component: _Video2.default }, { path: '*', redirect: '/' }]
};

/***/ }),
/* 7 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(33)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(24),
  /* scopeId */
  "data-v-65460d84",
  /* cssModules */
  null
)
Component.options.__file = "F:\\Dev\\github\\toutiao\\components\\MenuSelect.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] MenuSelect.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-65460d84", Component.options)
  } else {
    hotAPI.reload("data-v-65460d84", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 10 */,
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Pop_vue__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Pop_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_Pop_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    PopLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_Pop_vue___default.a
  },
  data: function () {
    return {
      menus: [{ path: "/", text: "推荐", checked: true }, { path: "/video", text: "宽频", checked: true }, { path: "/news_hot", text: "热点", checked: true }, { path: "/news_society", text: "社会", checked: true }, { path: "/news_entertainment", text: "娱乐", checked: true }, { path: "/news_military", text: "军事", checked: true }, { path: "/news_tech", text: "教育", checked: true }, { path: "/news_car", text: "汽车", checked: true }, { path: "/news_game", text: "游戏", checked: false }, { path: "/news_fashion", text: "时尚", checked: false }, { path: "/news_world", text: "国际", checked: false }]
    };
  },
  methods: {
    menuClickHandler: function (menu) {
      menu.checked = !menu.checked;
    },
    closeHandler: function () {
      console.log(this.menus);
    },
    showModal: function () {
      this.$refs["pop_layout"].showModal();
    }
  }
};

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	data: function () {
		return {
			menus: [{ path: "/", text: "推荐" }, { path: "/video", text: "阳光宽频" }, { path: "/news_hot", text: "热点" }, { path: "/news_society", text: "社会" }, { path: "/news_entertainment", text: "娱乐" }, { path: "/news_military", text: "军事" }, { path: "/news_tech", text: "教育" }, { path: "/news_car", text: "汽车" }]
		};
	},
	methods: {
		openMoreMenu: function () {
			this.$root.$refs["menu_select_modal"].showModal();
		},
		touchstartHandler: function () {},
		touchmoveHandler: function () {},
		touchendHandler: function () {}
	}
};

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    MainLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue___default.a
  }
};

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue__);
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = {
  components: {
    MainLayout: __WEBPACK_IMPORTED_MODULE_0__layouts_Main_vue___default.a
  }
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(17)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(31),
  /* template */
  __webpack_require__(26),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Dev\\github\\toutiao\\layouts\\Pop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Pop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-95f55c8a", Component.options)
  } else {
    hotAPI.reload("data-v-95f55c8a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  null,
  /* template */
  __webpack_require__(27),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Dev\\github\\toutiao\\pages\\404.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] 404.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f0f50506", Component.options)
  } else {
    hotAPI.reload("data-v-f0f50506", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(15)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(22),
  /* scopeId */
  "data-v-20d647ec",
  /* cssModules */
  null
)
Component.options.__file = "F:\\Dev\\github\\toutiao\\pages\\Home.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Home.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-20d647ec", Component.options)
  } else {
    hotAPI.reload("data-v-20d647ec", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(23),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "F:\\Dev\\github\\toutiao\\pages\\Video.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] Video.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-524e5040", Component.options)
  } else {
    hotAPI.reload("data-v-524e5040", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main-layout', [_c('div', [_c('p', [_vm._v("main page1")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-20d647ec", module.exports)
  }
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('main-layout', [_c('div', [_c('p', [_vm._v("video")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-524e5040", module.exports)
  }
}

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('pop-layout', {
    ref: "pop_layout",
    attrs: {
      "title": "频道管理",
      "close": _vm.closeHandler
    }
  }, [_c('div', {
    staticClass: "modal-menu-list"
  }, [_c('ul', _vm._l((_vm.menus), function(menu) {
    return _c('li', {
      class: {
        checked: menu.checked
      },
      on: {
        "click": function($event) {
          _vm.menuClickHandler(menu)
        }
      }
    }, [_c('span', [_vm._v(_vm._s(menu.text))]), _vm._v(" "), _c('span', {
      staticClass: "status-icon"
    })])
  }))])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-65460d84", module.exports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_vm._m(0), _vm._v(" "), _c('nav', {
    staticClass: "cemnavbar"
  }, [_c('div', {
    staticClass: "nav-menumore"
  }, [_c('span', {
    staticClass: "sep-shadow"
  }), _vm._v(" "), _c('span', {
    staticClass: "more-btn",
    on: {
      "click": _vm.openMoreMenu
    }
  }, [_vm._v("+")])]), _vm._v(" "), _c('div', {
    staticClass: "nav-menu",
    on: {
      "touchstart": _vm.touchstartHandler,
      "touchmove": _vm.touchmoveHandler,
      "touchend": _vm.touchendHandler
    }
  }, _vm._l((_vm.menus), function(menu) {
    return _c('router-link', {
      attrs: {
        "to": menu.path
      }
    }, [_vm._v(_vm._s(menu.text) + "\n\t\t\t")])
  }))]), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('header', {
    staticClass: "topbar"
  }, [_c('div', {
    staticClass: "abs_l vertical-mid"
  }, [_c('span', {
    staticClass: "icon msg-icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "abs_m"
  }, [_c('span', {
    staticClass: "title-text"
  }, [_vm._v("今日头条")]), _vm._v(" "), _c('span', {
    staticClass: "icon refresh-icon vertical-mid"
  })]), _vm._v(" "), _c('div', {
    staticClass: "abs_r vertical-mid"
  }, [_c('span', {
    staticClass: "icon search-icon"
  })])])
}]}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-72453e82", module.exports)
  }
}

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cem-modal",
    class: {
      hide: _vm.hide
    }
  }, [_c('div', {
    staticClass: "cem-modal-header"
  }, [_c('span', {
    staticClass: "modal-title"
  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('span', {
    staticClass: "close-icon",
    on: {
      "click": _vm.closeModalHandler
    }
  }, [_c('span'), _vm._v(" "), _c('span')])]), _vm._v(" "), _c('div', {
    staticClass: "cem-modal-content"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-95f55c8a", module.exports)
  }
}

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', [_vm._v("error")])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-f0f50506", module.exports)
  }
}

/***/ }),
/* 28 */,
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _vue = __webpack_require__(2);

var _vue2 = _interopRequireDefault(_vue);

var _vueRouter = __webpack_require__(1);

var _vueRouter2 = _interopRequireDefault(_vueRouter);

var _Common = __webpack_require__(5);

var _Common2 = _interopRequireDefault(_Common);

var _routes = __webpack_require__(6);

var _routes2 = _interopRequireDefault(_routes);

var _MenuSelect = __webpack_require__(9);

var _MenuSelect2 = _interopRequireDefault(_MenuSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_require__(7);
__webpack_require__(8);

_Common2.default.initStyleHack();

_vue2.default.use(_vueRouter2.default);

var router = new _vueRouter2.default({
	routes: _routes2.default.routes // （缩写）相当于 routes: routes
});

var app = new _vue2.default({
	router: router,
	components: {
		MenuSelect: _MenuSelect2.default
	},
	/*template: '<div><v-select :value.sync="select.value" :options="select.options" ></v-select>\
 <router-view class="view"></router-view></div>',*/
	//template: '<v-select :options="options"></v-select>',
	//template: '<div class="container"><button class="btn btn-default">aa</button></div>',
	data: function data() {
		return {};
	}
}).$mount('#app');

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = {
	props: {
		title: {
			type: String
		},
		close: {
			type: Function
		}
	},
	data: function () {
		return {
			hide: true
		};
	},
	methods: {
		showModal: function () {
			this.hide = false;
		},
		closeModalHandler: function () {
			if (this.close && typeof this.close == "function") {
				this.close();
			}
			this.hide = true;
		}
	}
};

/***/ }),
/* 32 */,
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[29]);