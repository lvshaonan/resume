webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "section-salon-bg-.jpg";

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data() {
    return {
      skillDescriptionIndex: -1,
      msg: 1234564,
      animationStart: false,
      logoSrc: __webpack_require__(16),
      mai_app: __webpack_require__(17),
      web_app: __webpack_require__(18),
      mai_pc: __webpack_require__(19),
      pre_register: __webpack_require__(20),
      SCM1: __webpack_require__(21),
      SCM2: __webpack_require__(22),
      chunyouxuan: __webpack_require__(23),
      weChatImg: __webpack_require__(24),
      skillList: [
        "HTML & CSS",
        "Javascript",
        "jQuery",
        "MV* 框架 React Vue",
        "Node.js"
      ],
      skillDescription: [
        "熟练使用div+css以及html5+css3新特性，根据设计图完成页面制作并解决各主流浏览器的兼容性；熟悉响应式布局和弹性盒布局，基于HTML5的webApp开发以及各种手机移动端适配；",
        "对JavaScript基础知识的掌握，包括基本语法以及DOM操作；4，	有基于Ajax的应用开发经验，DOM、JSONP等相关技术，与后台开发工程师协作，完成数据交互展现。",
        "掌握Javascript框架 (如;jQuery,Zepto)进行Web开发；",
        "了解MVVM规范，了解虚拟dom，有vue项目经验；",
        "了解express框架，熟练使用自动化构建工具（webpack）"
      ]
    };
  },
  mounted() {
    this.isSkillShow = true;
    setTimeout(() => {
      this.animationStart = true;
    }, 300);
  },
  methods: {
    skillHover(index) {
      this.skillDescriptionIndex = index;
    },
    hoverOut() {
      this.skillDescriptionIndex = -1;
    }
  }
});


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__assets_reset_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_reset_css__);




// const root = document.createElement('div')
// document.body.appendChild(root)
const root = document.getElementById('root')

new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  render: (h) => h(__WEBPACK_IMPORTED_MODULE_1__app__["a" /* default */])
}).$mount(root)

/***/ }),
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_script_index_0_app_vue__ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_7e56bfeb_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_app_vue__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_2_vue_loader_lib_runtime_component_normalizer__ = __webpack_require__(26);
function injectStyle (context) {
  __webpack_require__(10)
}
/* script */


/* template */

/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7e56bfeb"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null

var Component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_14_2_2_vue_loader_lib_runtime_component_normalizer__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_script_index_0_app_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_7e56bfeb_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_app_vue__["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_14_2_2_vue_loader_lib_template_compiler_index_id_data_v_7e56bfeb_hasScoped_true_optionsId_0_buble_transforms_node_modules_vue_loader_14_2_2_vue_loader_lib_selector_type_template_index_0_app_vue__["b" /* staticRenderFns */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(14).default
var update = add("bd4f14d8", content, true, {});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(12);
exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, ".boundary[data-v-7e56bfeb]{width:960px;margin:0 auto;position:relative;overflow:hidden}@media (max-width:749px){.boundary[data-v-7e56bfeb]{padding:25px 0;width:auto}}@media (max-width:768px){.boundary[data-v-7e56bfeb]{margin:0 20px;width:auto}}.section-header[data-v-7e56bfeb]{margin-bottom:35px;text-align:center;line-height:1.4}@media (max-width:749px){.section-header[data-v-7e56bfeb]{margin-bottom:20px}}.section-header h2[data-v-7e56bfeb]{font-size:42px}@media (max-width:749px){.section-header h2[data-v-7e56bfeb]{font-size:26px}}.section-header h3[data-v-7e56bfeb]{font-size:34px;color:#999}@media (max-width:749px){.section-header h3[data-v-7e56bfeb]{font-size:20px}}header[data-v-7e56bfeb]{border-bottom:1px solid #ccc;padding:15px 0}@media (min-width:880px){header[data-v-7e56bfeb]{width:100%;height:40px;position:fixed;z-index:99999;overflow:hidden;background:hsla(0,0%,100%,.95)}}@media (max-width:1040px) and (min-width:769px){header .boundary[data-v-7e56bfeb]{margin:0 30px}}@media (max-width:768px){header .boundary[data-v-7e56bfeb]{margin:0 20px;width:auto;padding:0}}header .boundary h1[data-v-7e56bfeb]{font-size:40px;color:#393939;float:left;height:40px}header .boundary h1 span[data-v-7e56bfeb]{font-size:16px;color:#999;margin-left:10px}header .boundary .address[data-v-7e56bfeb]{clear:both}@media (min-width:880px){header .boundary .address[data-v-7e56bfeb]{position:absolute;right:0;bottom:0}}header .boundary ul[data-v-7e56bfeb]{margin-top:8px}header .boundary ul li[data-v-7e56bfeb]{float:left;padding-left:26px;margin:8px 8px 0 0;background:url(" + escape(__webpack_require__(13)) + ") no-repeat;background-size:24px;height:24px;line-height:24px}header .boundary ul li[data-v-7e56bfeb]:nth-child(2){background-position:0 100%}@media (min-width:520px){header .boundary ul li[data-v-7e56bfeb]{float:left;margin-right:22px}}@media (min-width:880px){.main[data-v-7e56bfeb]{padding-top:71px}}.main .section[data-v-7e56bfeb]:nth-child(2n){background:#fafafa}@media (min-width:1040px){.main .professional-skill .boundary[data-v-7e56bfeb]{padding:30px 0}}@media (max-width:1040px) and (min-width:769px){.main .professional-skill .boundary[data-v-7e56bfeb]{margin:0 30px;padding:20px 0}}@media (max-width:768px){.main .professional-skill .boundary[data-v-7e56bfeb]{margin:0 20px;width:auto;padding:15px 0}}.main .professional-skill .boundary .section-body .skill-list .skill-list-item[data-v-7e56bfeb]{height:40px;line-height:40px;padding-left:16px;border-left:3px solid skyblue;background:rgba(201,232,247,.8);margin-bottom:20px;position:relative;width:100px;transition:all 1.5s}.main .professional-skill .boundary .section-body .skill-list .skill-list-item p[data-v-7e56bfeb]{width:350px;padding:10px 20px;line-height:24px;z-index:100;background:hsla(0,0%,100%,.9);border-radius:4px;box-shadow:0 0 3px rgba(0,0,0,.2);top:12px;left:100px;position:absolute}.main .professional-skill .boundary .section-body .skill-list .trans[data-v-7e56bfeb]{width:80%}.main .professional-skill .boundary .section-body .skill-list .trans[data-v-7e56bfeb]:nth-child(2){width:75%}.main .professional-skill .boundary .section-body .skill-list .trans[data-v-7e56bfeb]:nth-child(3){width:70%}.main .professional-skill .boundary .section-body .skill-list .trans[data-v-7e56bfeb]:nth-child(4){width:66%}.main .professional-skill .boundary .section-body .skill-list .trans[data-v-7e56bfeb]:nth-child(5){width:50%}.main .working-reason .boundary[data-v-7e56bfeb]{padding:50px 0}@media (max-width:1040px) and (min-width:769px){.main .working-reason .boundary[data-v-7e56bfeb]{margin:0 30px;padding:20px 0;width:auto}}@media (max-width:768px){.main .working-reason .boundary[data-v-7e56bfeb]{margin:0 20px;width:auto;padding:15px 0}}.main .working-reason .boundary .section-body p[data-v-7e56bfeb]{padding:0 50px;line-height:24px;text-indent:24px}@media (max-width:768px){.main .working-reason .boundary .section-body p[data-v-7e56bfeb]{width:auto;padding:0}}.main .work-experience .boundary[data-v-7e56bfeb]{padding:50px 0}@media (max-width:1040px) and (min-width:769px){.main .work-experience .boundary[data-v-7e56bfeb]{margin:0 30px;width:auto;padding:25px 0}}@media (max-width:768px){.main .work-experience .boundary[data-v-7e56bfeb]{margin:0 20px;width:auto;padding:20px 0}}.main .work-experience .boundary .section-body .work-exp-list[data-v-7e56bfeb]{margin-left:8px;border-left:4px solid #ccc;padding-top:1px}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-point[data-v-7e56bfeb]{position:relative;padding-left:15px;margin:15px 0;height:26px;line-height:26px}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-point .point-icon[data-v-7e56bfeb]{position:absolute;left:-11px;top:0;width:18px;height:18px;border-radius:50%;margin:4px 0;background:#3498db;font-size:0}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-point .point-icon[data-v-7e56bfeb]:after,.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-point .point-icon[data-v-7e56bfeb]:before{position:absolute;left:0;width:100%;height:4px;content:\" \";background:#fff;top:-4px}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-point .point-icon[data-v-7e56bfeb]:after{top:100%}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company[data-v-7e56bfeb]{margin:30px 0;margin-left:20px}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-header[data-v-7e56bfeb]{padding-left:125px;position:relative}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-header .link-logo[data-v-7e56bfeb]{width:100px;position:absolute;top:0;left:0}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-header .link-logo img[data-v-7e56bfeb]{width:100%}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-header h4[data-v-7e56bfeb]{font-size:18px}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-header h4 a[data-v-7e56bfeb]{color:#000;font-weight:600}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-body[data-v-7e56bfeb]{padding-left:125px;margin-top:8px}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-body p[data-v-7e56bfeb]{line-height:24px;font-size:15px}.main .work-experience .boundary .section-body .work-exp-list .work-exp-list-company .work-exp-list-company-body p strong[data-v-7e56bfeb]{font-weight:bolder;font-size:16px;margin:0 5px}.main .project-experience .boundary[data-v-7e56bfeb]{padding:50px 0}@media (max-width:1040px) and (min-width:769px){.main .project-experience .boundary[data-v-7e56bfeb]{margin:0 30px;width:auto;padding:25px 0}}@media (max-width:768px){.main .project-experience .boundary[data-v-7e56bfeb]{margin:0 20px;width:auto;padding:20px 0}}.main .project-experience .boundary .project[data-v-7e56bfeb]{border-top:2px dashed #ccc}@media (min-width:960px){.main .project-experience .boundary .project[data-v-7e56bfeb]{margin-top:25px;padding-top:35px;padding-left:10px;padding-right:380px}}@media (max-width:959px) and (min-width:750px){.main .project-experience .boundary .project[data-v-7e56bfeb]{margin-top:20px;padding-top:30px;padding-right:290px}}@media (max-width:750px){.main .project-experience .boundary .project[data-v-7e56bfeb]{padding:15px 0}}.main .project-experience .boundary .project[data-v-7e56bfeb]:first-child{border-top:none;margin-top:0;padding-top:0}.main .project-experience .boundary .project .project-intro[data-v-7e56bfeb]{float:left}.main .project-experience .boundary .project .project-intro .content h3[data-v-7e56bfeb]{line-height:20px;padding:10px 0;font-size:15px;font-weight:700}.main .project-experience .boundary .project .project-intro .content li[data-v-7e56bfeb]{line-height:18px;font-size:13px}@media (max-width:749px){.main .project-experience .boundary .project .project-intro[data-v-7e56bfeb]{padding-bottom:15px}}.main .project-experience .boundary .project .project-intro .project-intro-header[data-v-7e56bfeb]{position:relative;margin-bottom:8px;line-height:1.3}.main .project-experience .boundary .project .project-intro .project-intro-header h4[data-v-7e56bfeb]{padding-bottom:3px;font-weight:700;font-size:18px}.main .project-experience .boundary .project .project-intro .project-intro-header .skill-point[data-v-7e56bfeb]{height:24px;line-height:24px;padding:0 6px;border-radius:3px;display:inline-block;vertical-align:middle;font-size:12px;font-family:Lucida Grande,arial;color:#fff}.main .project-experience .boundary .project .project-intro .project-intro-header .skill-point-html[data-v-7e56bfeb]{background:#f60}.main .project-experience .boundary .project .project-intro .project-intro-header .skill-point-css[data-v-7e56bfeb]{background:#f90}.main .project-experience .boundary .project .project-intro .project-intro-header .skill-point-js[data-v-7e56bfeb]{background:#ffda3f;color:#393939}.main .project-experience .boundary .project .project-intro .project-intro-header .skill-point-node[data-v-7e56bfeb]{background:#80bd01}.main .project-experience .boundary .project .project-img[data-v-7e56bfeb]{float:right;width:320px}@media (min-width:960px){.main .project-experience .boundary .project .project-img[data-v-7e56bfeb]{width:320px;margin-right:-370px}}@media (max-width:959px) and (min-width:750px){.main .project-experience .boundary .project .project-img[data-v-7e56bfeb]{width:250px;margin-right:-280px}}@media (min-width:750px){.main .project-experience .boundary .project .project-img[data-v-7e56bfeb]{float:right;background:#eee}}@media (max-width:749px){.main .project-experience .boundary .project .project-img[data-v-7e56bfeb]{width:90%;margin:12px auto 0;float:none}}.main .project-experience .boundary .project .project-img img[data-v-7e56bfeb]{width:100%}@media (min-width:960px){.thanks[data-v-7e56bfeb]{background:url(" + escape(__webpack_require__(0)) + ") no-repeat left -200px;height:100px;background-size:cover;padding:40px 0;text-align:center}.thanks h2[data-v-7e56bfeb]{line-height:40px;font-size:24px}.thanks h3[data-v-7e56bfeb]{line-height:24px;font-size:16px}}@media (max-width:959px) and (min-width:750px){.thanks[data-v-7e56bfeb]{background:url(" + escape(__webpack_require__(0)) + ") no-repeat left -200px;height:100px;background-size:cover;padding:40px 0;text-align:center}.thanks h2[data-v-7e56bfeb]{line-height:40px;font-size:24px}.thanks h3[data-v-7e56bfeb]{line-height:24px;font-size:16px}}@media (max-width:750px){.thanks[data-v-7e56bfeb]{background:url(" + escape(__webpack_require__(0)) + ") no-repeat left -100px;height:100px;background-size:cover;padding:40px 0;text-align:center}.thanks h2[data-v-7e56bfeb]{line-height:40px;font-size:24px}.thanks h3[data-v-7e56bfeb]{line-height:24px;font-size:16px}}@media (max-width:749px){.thanks[data-v-7e56bfeb]{background:url(" + escape(__webpack_require__(0)) + ") no-repeat 0 100%;padding:20px 0;height:auto}.thanks h2[data-v-7e56bfeb]{line-height:24px;font-size:18px}.thanks h3[data-v-7e56bfeb]{line-height:16px;font-size:14px;padding:10px}}@media (min-width:960px){.footer .boundary[data-v-7e56bfeb]{width:960px;height:80px;padding:10px 0}}@media (max-width:959px) and (min-width:750px){.footer .boundary[data-v-7e56bfeb]{width:auto;height:80px;padding:10px 25px}}@media (max-width:750px){.footer .boundary[data-v-7e56bfeb]{width:auto;height:80px;padding:10px 0}}@media (max-width:549px){.footer .boundary[data-v-7e56bfeb]{width:auto;height:auto;padding:10px}.footer .erweima[data-v-7e56bfeb]{height:auto;float:none;text-align:center;padding-top:20px}.footer .erweima .img[data-v-7e56bfeb]{float:none;height:140px;width:140px;background:#ccc;margin:0 auto}.footer .erweima .img img[data-v-7e56bfeb]{width:100%;height:100%}.footer .erweima .text[data-v-7e56bfeb]{float:none;padding-top:14px}.footer .erweima .text p[data-v-7e56bfeb]{line-height:20px;font-size:14px;color:#666}.footer .weChat[data-v-7e56bfeb]{height:auto;float:none;text-align:center;padding-top:20px}.footer .weChat .img[data-v-7e56bfeb]{float:none;height:140px;width:140px;background:#ccc;margin:0 auto}.footer .weChat .img img[data-v-7e56bfeb]{width:100%;height:100%}.footer .weChat .text[data-v-7e56bfeb]{float:none;padding-top:14px}.footer .weChat .text p[data-v-7e56bfeb]{line-height:20px;font-size:14px;color:#666}}@media (min-width:550px){.footer .erweima[data-v-7e56bfeb]{height:100%;float:left}.footer .erweima .img[data-v-7e56bfeb]{float:left;height:100%;width:80px;margin-right:6px;background:#ccc}.footer .erweima .img img[data-v-7e56bfeb]{width:100%;height:100%}.footer .erweima .text[data-v-7e56bfeb]{float:left;padding-top:14px}.footer .erweima .text p[data-v-7e56bfeb]{line-height:20px;font-size:14px;color:#666}.footer .weChat[data-v-7e56bfeb]{height:100%;float:right}.footer .weChat .img[data-v-7e56bfeb]{float:left;height:100%;width:80px;margin-right:6px;background:#ccc}.footer .weChat .img img[data-v-7e56bfeb]{width:100%;height:100%}.footer .weChat .text[data-v-7e56bfeb]{float:left;padding-top:14px}.footer .weChat .text p[data-v-7e56bfeb]{line-height:20px;font-size:14px;color:#666}}", ""]);

// exports


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon-sprites-.png";

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(15);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "jiabologo_01-.jpg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mai_app-.png";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "web_app-.png";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "mai_pc-.jpg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "pre_register-.png";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SCM1-.jpg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "SCM2-.jpg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "chunyouxuan-.png";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "weChat-.png";

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_vm._m(0),_vm._v(" "),_c('div',{staticClass:"main"},[_c('section',{staticClass:"professional-skill section"},[_c('div',{staticClass:"boundary"},[_vm._m(1),_vm._v(" "),_c('div',{staticClass:"section-body"},[_c('ul',{staticClass:"skill-list"},_vm._l((_vm.skillList),function(item,index){return _c('li',{key:index,staticClass:"skill-list-item",class:{'trans': _vm.animationStart},on:{"mouseout":_vm.hoverOut,"mouseover":function($event){_vm.skillHover(index)}}},[_vm._v("\n              "+_vm._s(item)+"\n              "),_c('p',{directives:[{name:"show",rawName:"v-show",value:(_vm.skillDescriptionIndex === index),expression:"skillDescriptionIndex === index"}]},[_vm._v(_vm._s(_vm.skillDescription[index]))])])}))])])]),_vm._v(" "),_vm._m(2),_vm._v(" "),_c('section',{staticClass:"work-experience section"},[_c('div',{staticClass:"boundary"},[_vm._m(3),_vm._v(" "),_c('div',{staticClass:"section-body"},[_c('div',{staticClass:"work-exp-list"},[_vm._m(4),_vm._v(" "),_vm._m(5),_vm._v(" "),_vm._m(6),_vm._v(" "),_c('section',{staticClass:"work-exp-list-company"},[_c('div',{staticClass:"work-exp-list-company-header"},[_c('a',{staticClass:"link-logo",attrs:{"href":"","target":"_blank"}},[_c('img',{attrs:{"src":_vm.logoSrc,"alt":""}})]),_vm._v(" "),_vm._m(7)]),_vm._v(" "),_vm._m(8)])])])])]),_vm._v(" "),_c('section',{staticClass:"project-experience section"},[_c('div',{staticClass:"boundary"},[_vm._m(9),_vm._v(" "),_c('div',{staticClass:"section-body"},[_c('section',{staticClass:"project clearfix"},[_vm._m(10),_vm._v(" "),_c('div',{staticClass:"project-img"},[_c('img',{attrs:{"src":_vm.mai_pc,"alt":""}})])]),_vm._v(" "),_c('section',{staticClass:"project clearfix"},[_vm._m(11),_vm._v(" "),_c('div',{staticClass:"project-img"},[_c('img',{attrs:{"src":_vm.web_app,"alt":""}})])]),_vm._v(" "),_c('section',{staticClass:"project clearfix"},[_vm._m(12),_vm._v(" "),_c('div',{staticClass:"project-img"},[_c('img',{attrs:{"src":_vm.pre_register,"alt":""}})])]),_vm._v(" "),_c('section',{staticClass:"project clearfix"},[_vm._m(13),_vm._v(" "),_c('div',{staticClass:"project-img"},[_c('img',{attrs:{"src":_vm.SCM2,"alt":""}})])]),_vm._v(" "),_c('section',{staticClass:"project clearfix"},[_vm._m(14),_vm._v(" "),_c('div',{staticClass:"project-img"},[_c('img',{attrs:{"src":_vm.mai_app,"alt":""}})])]),_vm._v(" "),_c('section',{staticClass:"project clearfix"},[_vm._m(15),_vm._v(" "),_c('div',{staticClass:"project-img"},[_c('img',{attrs:{"src":_vm.SCM1,"alt":""}})])]),_vm._v(" "),_c('section',{staticClass:"project clearfix"},[_vm._m(16),_vm._v(" "),_c('div',{staticClass:"project-img"},[_c('img',{attrs:{"src":_vm.chunyouxuan,"alt":""}})])])])])])]),_vm._v(" "),_vm._m(17),_vm._v(" "),_c('div',{staticClass:"footer"},[_c('div',{staticClass:"boundary"},[_vm._m(18),_vm._v(" "),_c('div',{staticClass:"weChat"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":_vm.weChatImg,"alt":""}})]),_vm._v(" "),_vm._m(19)])])])])}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('header',[_c('div',{staticClass:"boundary clearfix"},[_c('h1',[_vm._v("\n      吕少楠"),_c('span',[_vm._v("Web前端开发工程师")])]),_vm._v(" "),_c('div',{staticClass:"address"},[_c('ul',{staticClass:"clearfix"},[_c('li',[_c('a',{attrs:{"href":"tel:18513655634"}},[_vm._v("18513655634")])]),_vm._v(" "),_c('li',[_c('a',{attrs:{"href":"mailto:18513655634@163.com"}},[_vm._v("18513655634@163.com")])])])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-header"},[_c('h2',[_vm._v("专用技能")]),_vm._v(" "),_c('h3',[_vm._v("professional skill")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"working-reason section"},[_c('div',{staticClass:"boundary"},[_c('div',{staticClass:"section-header"},[_c('h2',[_vm._v("为什么我要从事web前端")])]),_vm._v(" "),_c('div',{staticClass:"section-body"},[_c('p',[_vm._v("曾经我一直都有一个想法就是做一个自己的网站，大学时虽学习了HTML，但没去深入学习web前端课程。然而毕业工作之后，慢慢增加了对web前端的了解，后续自己下载关于html和css教学视频，同时自学JavaScript知识，并深入了解这个行业。如今才发现，Web前端就是我真正感兴趣的行业。")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-header"},[_c('h2',[_vm._v("工作经历")]),_vm._v(" "),_c('h3',[_vm._v("work experience")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"work-exp-list-point"},[_c('i',{staticClass:"point-icon"}),_vm._v("\n              现在\n            ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"work-exp-list-company"},[_c('div',{staticClass:"work-exp-list-company-header"},[_c('a',{staticClass:"link-logo",attrs:{"href":"http://www.mailiqing.com","target":"_blank"}},[_c('img',{attrs:{"src":"http://www.mailiqing.com/staticPages/2017/Home/images/logo.png","alt":""}})]),_vm._v(" "),_c('h4',[_c('a',{attrs:{"href":"http://www.mailiqing.com"}},[_vm._v("北京金兆路华电子商务有限公司")])])]),_vm._v(" "),_c('div',{staticClass:"work-exp-list-company-body"},[_c('p',[_vm._v("在此期间对自己的知识和业务能力有进一步提高，项目更多元化")]),_vm._v(" "),_c('p',[_vm._v("工作中学习并运用了EasyUI，Bootstrap，vue，百度地图到项目中，后期选定"),_c('strong',[_vm._v("[ VUE.js ]")]),_vm._v("作为主开发框架,\n                并在业余时间学习 "),_c('strong',[_vm._v("React.js")]),_vm._v(" 进一步熟练对MVVM模式运用")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"work-exp-list-point"},[_c('i',{staticClass:"point-icon"}),_vm._v("\n              2016/6\n            ")])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('h4',[_c('a',{attrs:{"href":"javascript:"}},[_vm._v("北京嘉博沃德农业发展有限公司")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"work-exp-list-company-body"},[_c('p',[_vm._v("这是在北京的第一份工作，以基础性的工作为主，并提高团队协作能力")]),_vm._v(" "),_c('p',[_vm._v("在这期间主要编写了PC端的电商商城并参与了商城的移动端项目，学习运用了响应式布局和弹性盒布局，学习了移动端的适配方案")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"section-header"},[_c('h2',[_vm._v("项目经验")]),_vm._v(" "),_c('h3',[_vm._v("project experience")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-intro"},[_c('div',{staticClass:"project-intro-header"},[_c('h4',[_vm._v("Mai沥青电商平台（PC）")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-point-html skill-point"},[_vm._v("HTML")]),_vm._v(" "),_c('li',{staticClass:"skill-point-css skill-point"},[_vm._v("CSS")]),_vm._v(" "),_c('li',{staticClass:"skill-point-js skill-point"},[_vm._v("Javascript")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('h3',[_vm._v("此项目为大宗沥青电商平台，本人独立完成前端工作，并经过两期改版，主要运用jQuery.js类库进行dom操作")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("编写规范的html+css代码，兼容主流浏览器")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-intro"},[_c('div',{staticClass:"project-intro-header"},[_c('h4',[_vm._v("Mai沥青电商平台（WebApp）")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-point-html skill-point"},[_vm._v("HTML5")]),_vm._v(" "),_c('li',{staticClass:"skill-point-css skill-point"},[_vm._v("SCSS")]),_vm._v(" "),_c('li',{staticClass:"skill-point-js skill-point"},[_vm._v("VUE")]),_vm._v(" "),_c('li',{staticClass:"skill-point-node skill-point"},[_vm._v("Node.js")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('h3',[_vm._v("此项目为业余时间运用vue全家桶开发的webApp，并运用移动端组件库cube-ui对项目进行快速开发")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("使用vue框架，以及vue-router构建单页面应用，通过vue-cli 快速搭建开发环境；")]),_vm._v(" "),_c('li',[_vm._v("运用HTML5语义化标签+CSS3新特性进行页面布局，实现页面的动态效果，提高代码的清 晰度和代码质量；")]),_vm._v(" "),_c('li',[_vm._v("使用REM单位适配不同尺寸的屏幕，利用SCSS编写常用@function、@mixin快速编写样式；")]),_vm._v(" "),_c('li',[_vm._v("运用vue组件化开发，从而使组件高度复用，代码简洁")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-intro"},[_c('div',{staticClass:"project-intro-header"},[_c('h4',[_vm._v("小黑师傅-一键叫车平台（预注册）")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-point-html skill-point"},[_vm._v("HTML5")]),_vm._v(" "),_c('li',{staticClass:"skill-point-css skill-point"},[_vm._v("SCSS")]),_vm._v(" "),_c('li',{staticClass:"skill-point-js skill-point"},[_vm._v("VUE")]),_vm._v(" "),_c('li',{staticClass:"skill-point-node skill-point"},[_vm._v("Node.js")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('h3',[_vm._v("此项目为App上线前利用H5页面对用户进行注册收集，是第一次把vue应用到项目中，真正实现了前后端分离，此项目的难点为注册时需要用户上传大量的证件进行验证，需要上传前对图片进行压缩")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("vue+vue-router+vuex+axios完成页面开发")]),_vm._v(" "),_c('li',[_vm._v("封装常用组件，如 loading、dialog等")]),_vm._v(" "),_c('li',[_vm._v("运用路由懒加载解决项目首页加载过长问题")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-intro"},[_c('div',{staticClass:"project-intro-header"},[_c('h4',[_vm._v("兆华领先供应链管理信息系统（二期）")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-point-html skill-point"},[_vm._v("HTML")]),_vm._v(" "),_c('li',{staticClass:"skill-point-css skill-point"},[_vm._v("CSS")]),_vm._v(" "),_c('li',{staticClass:"skill-point-js skill-point"},[_vm._v("Bootstrap")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('h3',[_vm._v("此项目是运用Bootstrap类库搭建的公司内部管理信息系统")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("此项目的难点为运用百度地图实现集装箱地图的功能，因上千坐标点在地图显示会严重影响性能，为解决此问题采用按屏幕显示区域来动态显示坐标点来解决")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-intro"},[_c('div',{staticClass:"project-intro-header"},[_c('h4',[_vm._v("Mai沥青App（hybrid页面）")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-point-html skill-point"},[_vm._v("HTML5")]),_vm._v(" "),_c('li',{staticClass:"skill-point-css skill-point"},[_vm._v("CSS")]),_vm._v(" "),_c('li',{staticClass:"skill-point-js skill-point"},[_vm._v("WebViewJavascriptBridge")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('h3',[_vm._v("此项目是嵌套在原生App内的H5页面，利用WebViewJavascriptBridge进行了简单的数据传递")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("兼容android、ios平台，使用REM单位适配不同尺寸的屏幕")]),_vm._v(" "),_c('li',[_vm._v("运用WebViewJavascriptBridge向原生语言传递数据")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-intro"},[_c('div',{staticClass:"project-intro-header"},[_c('h4',[_vm._v("兆华领先供应链管理信息系统（一期）")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-point-html skill-point"},[_vm._v("HTML")]),_vm._v(" "),_c('li',{staticClass:"skill-point-css skill-point"},[_vm._v("CSS")]),_vm._v(" "),_c('li',{staticClass:"skill-point-js skill-point"},[_vm._v("EasyUI")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('h3',[_vm._v("此项目是利用EasyUI搭建的管理信息系统")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("运用EasyUI进行表格操作、做到页面样式统一")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"project-intro"},[_c('div',{staticClass:"project-intro-header"},[_c('h4',[_vm._v("纯优选（WebApp）")]),_vm._v(" "),_c('ul',[_c('li',{staticClass:"skill-point-html skill-point"},[_vm._v("HTML5")]),_vm._v(" "),_c('li',{staticClass:"skill-point-css skill-point"},[_vm._v("CSS")]),_vm._v(" "),_c('li',{staticClass:"skill-point-js skill-point"},[_vm._v("Zepto.js")])])]),_vm._v(" "),_c('div',{staticClass:"content"},[_c('h3',[_vm._v("此项目移动端农产品电商商城、是第一次接触移动端网页")]),_vm._v(" "),_c('ul',[_c('li',[_vm._v("html+css3弹性盒布局、适配不同手机屏幕大小")])])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"thanks"},[_c('h2',[_vm._v("致谢")]),_vm._v(" "),_c('h3',[_vm._v("非常感谢您花时间阅读我的简历，期待有机会与您共事！")])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"erweima"},[_c('div',{staticClass:"img"},[_c('img',{attrs:{"src":"","alt":""}})]),_vm._v(" "),_c('div',{staticClass:"text"},[_c('p',[_vm._v("您还可以扫描二维码")]),_vm._v(" "),_c('p',[_vm._v("在移动设备打开本页")])])])},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"text"},[_c('p',[_vm._v("打开微信扫一扫")]),_vm._v(" "),_c('p',[_vm._v("期待你哦~^o^~")])])}]


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  scriptExports = scriptExports || {}

  // ES6 modules interop
  var type = typeof scriptExports.default
  if (type === 'object' || type === 'function') {
    scriptExports = scriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(28);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(29)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {
	module.hot.accept("!!../../node_modules/._css-loader@0.28.11@css-loader/index.js!./reset.css", function() {
		var newContent = require("!!../../node_modules/._css-loader@0.28.11@css-loader/index.js!./reset.css");

		if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(false);
// imports


// module
exports.push([module.i, "/**\n * Eric Meyer's Reset CSS v2.0 (http://meyerweb.com/eric/tools/css/reset/)\n * http://cssreset.com\n */\n html, body, div, span, applet, object, iframe,\n h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n a, abbr, acronym, address, big, cite, code,\n del, dfn, em, img, ins, kbd, q, s, samp,\n small, strike, strong, sub, sup, tt, var,\n b, u, i, center,\n dl, dt, dd, ol, ul, li,\n fieldset, form, label, legend,\n table, caption, tbody, tfoot, thead, tr, th, td,\n article, aside, canvas, details, embed,\n figure, figcaption, footer, header,\n menu, nav, output, ruby, section, summary,\n time, mark, audio, video, input {\n   margin: 0;\n   padding: 0;\n   border: 0;\n   font-size: 100%;\n   font-weight: normal;\n   vertical-align: baseline;\n }\n /* HTML5 display-role reset for older browsers */\n article, aside, details, figcaption, figure,\n footer, header, menu, nav, section {\n   display: block;\n }\n body {\n   line-height: 1;\n   font-size: 14px;\n   background: #ffffff;\n   font-family: 'Microsoft JhengHei', 'Microsoft YaHei', 'STHeiti SC', 'SimHei';\n }\n blockquote, q {\n   quotes: none;\n }\n blockquote:before, blockquote:after,\n q:before, q:after {\n   content: none;\n }\n table {\n   border-collapse: collapse;\n   border-spacing: 0;\n }\n /* custom */\n \n a {\n   color: #7e8c8d;\n   backface-visibility: hidden;\n   text-decoration: none;\n }\n li {\n   list-style: none;\n }\n body {\n   -webkit-text-size-adjust: none;\n   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n }\n input[type=\"text\"],input[type=\"password\"],input[type=\"button\"],input[type=\"number\"],textarea {\n   -webkit-appearance: none;\n   border-radius: 0;\n }\n .clearfix:after{\n   display: block;\n   content: \"\";\n   height: 0;\n   clear: both;\n   visibility: hidden;\n }\n .clearfix{\n   zoom: 1\n }", ""]);

// exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(30);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 30 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
],[5]);