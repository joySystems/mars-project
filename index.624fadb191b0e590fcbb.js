/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/bg.jpg */ \"./src/images/bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./images/smoke.png */ \"./src/images/smoke.png\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/Bebas_Neue_bold.ttf */ \"./src/fonts/Bebas_Neue_bold.ttf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* Box sizing rules */\r\n*,\r\n*::before,\r\n*::after {\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Prevent font size inflation */\r\nhtml {\r\n  -moz-text-size-adjust: none;\r\n  -webkit-text-size-adjust: none;\r\n  text-size-adjust: none;\r\n  /* 10px */\r\n  font-size: 62.5%;\r\n}\r\n\r\n/* Remove default margin in favour of better control in authored CSS */\r\nbody,\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\np,\r\nfigure,\r\nblockquote,\r\ndl,\r\ndd {\r\n  margin: 0;\r\n}\r\n\r\n/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */\r\nul[role='list'],\r\nol[role='list'] {\r\n  list-style: none;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Set shorter line heights on headings and interactive elements */\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nbutton,\r\ninput,\r\nlabel {\r\n  line-height: 1.1;\r\n}\r\n\r\n/* Balance text wrapping on headings */\r\nh1,\r\nh2,\r\nh3,\r\nh4 {\r\n  text-wrap: balance;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n  color: currentColor;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n  max-width: 100%;\r\n  display: block;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput,\r\nbutton,\r\ntextarea,\r\nselect {\r\n  font: inherit;\r\n}\r\n\r\n/* Make sure textarea without a rows attribute are not tiny */\r\ntextarea:not([rows]) {\r\n  min-height: 10em;\r\n}\r\n\r\n/* Anything that has been anchored to should have extra scroll margin */\r\n:target {\r\n  scroll-margin-block: 5ex;\r\n}\r\n\r\n\r\nbody {\r\n  margin: 0;\r\n  font-family: Arial, sans-serif;\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  flex-grow: 1;\r\n  width: 100%;\r\n\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n  background-repeat: no-repeat;\r\n  background-size: 120%;\r\n  background-position: right center;\r\n  background-attachment: fixed;\r\n  position: relative;\r\n  animation: moveBackground 2s forwards;\r\n  overflow-x: hidden;\r\n}\r\n\r\n@keyframes moveBackground {\r\n  from {\r\n    background-position: right center;\r\n  }\r\n\r\n  to {\r\n    background-position: center center;\r\n  }\r\n}\r\n\r\n.animated-bg {\r\n  background-position: center center;\r\n  animation: none;\r\n}\r\n\r\n.haze {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0%;\r\n  width: 300%;\r\n  height: 100%;\r\n  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});\r\n  background-size: 100%;\r\n  background-position: center center;\r\n  z-index: 5;\r\n  opacity: 0;\r\n  animation: moveHaze 10s ease-in-out, fadeInOut 10s;\r\n}\r\n\r\n@keyframes moveHaze {\r\n  0% {\r\n    left: 0%;\r\n  }\r\n\r\n  100% {\r\n    left: -200%;\r\n  }\r\n}\r\n\r\n@keyframes fadeInOut {\r\n\r\n  0%,\r\n  100% {\r\n    opacity: 0;\r\n  }\r\n\r\n  25%,\r\n  75% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@font-face {\r\n  font-family: 'Bebas Neue bold';\r\n  src: url(${___CSS_LOADER_URL_REPLACEMENT_2___}) format('truetype');\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n\r\n.bebas-neue-regular {\r\n  font-family: \"Bebas Neue\", sans-serif;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n.bebas-neue-bold {\r\n  font-family: \"Bebas Neue bold\", sans-serif;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n.montserrat-regular {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-optical-sizing: auto;\r\n  font-weight: 400;\r\n  font-style: normal;\r\n}\r\n\r\n.montserrat-bold {\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-optical-sizing: auto;\r\n  font-weight: 700;\r\n  font-style: normal;\r\n}\r\n\r\n\r\n.header {\r\n  display: flex;\r\n  width: 100%;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  max-width: 120rem;\r\n  margin: 0 auto;\r\n  padding-top: 3rem;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n.logo__text {\r\n  font-size: 3.6rem;\r\n  color: #F23207;\r\n  text-decoration: none;\r\n}\r\n\r\n.nav-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  width: 66%;\r\n  gap: 4rem;\r\n}\r\n\r\n.menu {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-around;\r\n  width: 100%;\r\n  align-items: center;\r\n}\r\n\r\n\r\n.menu__item {\r\n  list-style: none;\r\n}\r\n\r\n.menu__item a {\r\n  text-decoration: none;\r\n  color: #F2E1C2;\r\n  font-size: 1.6rem;\r\n  line-height: 1.95rem;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: 500;\r\n\r\n}\r\n\r\n.menu__item a:hover {\r\n  color: #F23207;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.menu__item a:active {\r\n  color: #F23207;\r\n}\r\n\r\n.menu__item a:visited {\r\n  color: #F23207;\r\n}\r\n\r\n.btn {\r\n  padding: 1rem 1.5rem;\r\n  cursor: pointer;\r\n  border: none;\r\n\r\n}\r\n\r\n.btn__header {\r\n  width: 33%;\r\n  color: #262526;\r\n  background-color: #F2E1C2;\r\n  text-transform: uppercase;\r\n  border-radius: 0.4rem;\r\n  font-size: 1.6rem;\r\n  line-height: 1.95rem;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn__header:hover {\r\n  color: #F2E1C2;\r\n  background-color: #F23207;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n.btn__header:active {\r\n  color: #F2E1C2;\r\n  background-color: #F23207;\r\n}\r\n\r\n.btn__header:visited {\r\n  color: #F2E1C2;\r\n  background-color: #F23207;\r\n}\r\n\r\n\r\n.burger-menu {\r\n  display: none;\r\n  flex-direction: column;\r\n  justify-content: space-around;\r\n  width: 30px;\r\n  height: 25px;\r\n  background: none;\r\n  border: none;\r\n  cursor: pointer;\r\n  position: absolute;\r\n  top: 20px;\r\n  right: 20px;\r\n  z-index: 101;\r\n}\r\n\r\n.burger-menu__line {\r\n  width: 100%;\r\n  height: 3px;\r\n  background-color: #F2E1C2;\r\n}\r\n\r\n.mobile-menu {\r\n  position: fixed;\r\n  top: 0;\r\n  left: -100%;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #F2E1C2;\r\n  z-index: 1000;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  justify-content: center;\r\n  transition: left 0.3s ease;\r\n}\r\n\r\n.mobile-menu__header {\r\n  position: absolute;\r\n  top: 20px;\r\n  left: 20px;\r\n  right: 20px;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.close-menu {\r\n  background: none;\r\n  border: none;\r\n  font-size: 2rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.mobile-menu__list {\r\n  list-style: none;\r\n  padding: 0;\r\n  margin-top: 100px;\r\n  /* Отступ сверху, чтобы не перекрывать логотип */\r\n}\r\n\r\n.mobile-menu__item {\r\n  margin: 1rem 0;\r\n}\r\n\r\n.mobile-menu__item a {\r\n  text-decoration: none;\r\n  font-size: 2.0rem;\r\n  color: #262526;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: 600;\r\n}\r\n\r\n.btn__mobile {\r\n  margin-top: 2rem;\r\n}\r\n\r\n.mobile-menu.active {\r\n  left: 0;\r\n}\r\n\r\n\r\n\r\nmain {\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n  max-width: 120rem;\r\n  margin: 0 auto;\r\n  margin-top: 12rem;\r\n  position: relative;\r\n  z-index: 10;\r\n}\r\n\r\n\r\n.title-container {\r\n\r\n  width: 100%;\r\n  flex-direction: row;\r\n  display: flex;\r\n  gap: 2.5rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  z-index: 30;\r\n}\r\n\r\n.title {\r\n\r\n\r\n  display: flex;\r\n  width: 100%;\r\n  flex-direction: column;\r\n  position: relative;\r\n  justify-content: space-between;\r\n  align-items: flex-start;\r\n  z-index: 30;\r\n}\r\n\r\n.suptitle {\r\n\r\n  color: #F23207;\r\n  font-size: 3.6rem;\r\n  line-height: 4.388rem;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-weight: 500;\r\n  text-transform: uppercase;\r\n  opacity: 0;\r\n  animation: fadeIn 2s forwards 0.5s;\r\n  margin-top: 1.6rem;\r\n  z-index: 30;\r\n  position: relative;\r\n}\r\n\r\n@keyframes fadeIn {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n\r\nvideo {\r\n  width: 100%;\r\n  height: auto;\r\n  margin-top: -2rem;\r\n}\r\n\r\n.video-bg {\r\n\r\n  clip-path: url(#text-overlay);\r\n  -webkit-clip-path: url(#text-overlay);\r\n}\r\n\r\n.title__mask {\r\n  opacity: 0;\r\n  transform: translateY(0);\r\n  transition: opacity 1s ease-in-out;\r\n  position: relative;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: flex-end;\r\n}\r\n\r\n.title__mask.visible {\r\n  opacity: 1;\r\n  transform: translateY(0);\r\n}\r\n\r\n.title__mask svg {\r\n  display: flex;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.title__mask svg text {\r\n  font-family: \"Bebas Neue bold\", sans-serif;\r\n  font-weight: 700;\r\n  font-size: 70rem;\r\n  transform: translate(0, 55.6rem);\r\n}\r\n\r\n.popup {\r\n  position: fixed;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #F2E1C2;\r\n  z-index: 100;\r\n  padding: 10rem 12rem;\r\n  top: -100%;\r\n  transition: top 0.5s ease-in-out;\r\n  justify-content: center;\r\n\r\n}\r\n\r\n.popup-active {\r\n  top: 0;\r\n}\r\n\r\n@keyframes slideInPop {\r\n  from {\r\n    top: -100%;\r\n  }\r\n\r\n  to {\r\n    top: 0;\r\n  }\r\n}\r\n\r\n@keyframes slideOutPop {\r\n  from {\r\n    top: 0;\r\n  }\r\n\r\n  to {\r\n    top: -100%;\r\n  }\r\n}\r\n\r\n.popup-anim-in {\r\n  animation: slideInPop 0.5s forwards;\r\n}\r\n\r\n.popup-anim-out {\r\n  animation: slideOutPop 0.5s forwards;\r\n}\r\n\r\n.popup-form-container {\r\n  position: relative;\r\n  max-width: 120rem;\r\n  width: 100%;\r\n\r\n}\r\n\r\n.popup-form-title {\r\n  color: #262526;\r\n  font-family: \"Bebas Neue bold\", sans-serif;\r\n  font-weight: 700;\r\n  font-size: 11.4rem;\r\n  line-height: 11.4rem;\r\n}\r\n\r\n.popup-close-btn {\r\n\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  display: flex;\r\n  width: 3.2rem;\r\n  height: 3.2rem;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-color: #262526;\r\n  cursor: pointer;\r\n}\r\n\r\n.popup-close-btn:hover {\r\n  background-color: #F23207;\r\n  transition: all 0.4s ease-in-out;\r\n\r\n}\r\n\r\n\r\n.popup-form {\r\n  margin-top: 8rem;\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n\r\n\r\n}\r\n\r\n.inputs-wrapper {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: end;\r\n  margin-bottom: 6rem;\r\n  flex-direction: row;\r\n  gap: 0;\r\n\r\n}\r\n\r\nlabel {\r\n  font-size: 1.6rem;\r\n  line-height: 1.95rem;\r\n\r\n}\r\n\r\n.input-wrapper {\r\n\r\n  width: 30%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 2rem\r\n}\r\n\r\n.input-wrapper input {\r\n  border: none;\r\n  border-bottom: #262526 2px solid;\r\n  background-color: #F2E1C2;\r\n  font-size: 1.6rem;\r\n  line-height: 1.95rem;\r\n  font-weight: 400;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  color: #262526;\r\n  padding-bottom: 1rem;\r\n}\r\n\r\n.input-wrapper input:focus,\r\n.input-wrapper input:focus-visible,\r\n.input-wrapper input:focus-within {\r\n  border: none;\r\n  border-bottom: #262526 2px solid;\r\n  background-color: #F2E1C2;\r\n  outline: 0;\r\n}\r\n\r\n.submit-wrapper {\r\n  width: 100%;\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n}\r\n\r\n.submit-wrapper button {\r\n\r\n  width: 30%;\r\n  padding: 1rem;\r\n  font-size: 1.6rem;\r\n  line-height: 1.95rem;\r\n  font-weight: 600;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  color: #F2E1C2;\r\n  background-color: #262526;\r\n  border: none;\r\n  border-radius: 0.4rem;\r\n  text-transform: uppercase;\r\n\r\n}\r\n\r\n.submit-wrapper button:hover {\r\n  background-color: #F23207;\r\n  transition: all 0.4s ease-in-out;\r\n}\r\n\r\n#form-message {\r\n  margin-top: 10px;\r\n  color: #F23207;\r\n  font-family: \"Montserrat\", sans-serif;\r\n  font-size: 2rem;\r\n}\r\n\r\n.label-error {\r\n  color: #F23207;\r\n}\r\n\r\n\r\n.animated-svg {\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n\r\n  opacity: 0;\r\n  transform: translateY(-100%);\r\n  animation: fadeInSvg 2s forwards, slideInSvg 2s forwards;\r\n}\r\n\r\n\r\n\r\n@keyframes fadeInSvg {\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes slideInSvg {\r\n  to {\r\n    transform: translateY(0);\r\n  }\r\n}\r\n\r\n\r\n\r\n@media (max-width: 768px) {\r\n\r\n  .header {\r\n\r\n    z-index: 30;\r\n    padding: 1rem 3rem;\r\n  }\r\n\r\n\r\n\r\n  .nav-container {\r\n    display: none;\r\n  }\r\n\r\n  .burger-menu {\r\n    display: flex;\r\n  }\r\n\r\n  .container {\r\n\r\n    background-size: auto;\r\n\r\n  }\r\n\r\n\r\n  .animated-svg {\r\n    height: 40rem;\r\n  }\r\n\r\n\r\n  main {\r\n\r\n    margin-top: 6rem;\r\n\r\n  }\r\n\r\n  .suptitle {\r\n\r\n    font-size: 4rem;\r\n    line-height: 4.4rem;\r\n\r\n  }\r\n\r\n  .title-container {\r\n\r\n    gap: 1rem;\r\n\r\n    z-index: 30;\r\n    padding: 0 2rem;\r\n  }\r\n\r\n  .title__mask {\r\n    opacity: 0;\r\n    transform: translateY(0);\r\n    transition: opacity 1s ease-in-out;\r\n    position: relative;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .title__mask svg text {\r\n    font-family: \"Bebas Neue bold\", sans-serif;\r\n    font-weight: 700;\r\n    font-size: 40rem;\r\n    transform: translate(0.9rem, 35.2rem);\r\n  }\r\n\r\n  .btn__header {\r\n    width: 62%;\r\n    color: #F2E1C2;\r\n    background-color: #262526;\r\n    text-transform: uppercase;\r\n    border-radius: 0.4rem;\r\n    font-size: 2rem;\r\n    line-height: 1.95rem;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-weight: 600;\r\n    padding: 2rem;\r\n  }\r\n\r\n  .popup {\r\n\r\n    padding: 4rem 2rem;\r\n\r\n  }\r\n\r\n  .popup-form-title {\r\n\r\n    font-size: 5.4rem;\r\n    line-height: 4.4rem;\r\n  }\r\n\r\n  .inputs-wrapper {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    margin-bottom: 6rem;\r\n    flex-direction: column;\r\n    gap: 4rem;\r\n\r\n  }\r\n\r\n  .input-wrapper {\r\n    width: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 2rem;\r\n  }\r\n\r\n  .submit-wrapper button {\r\n    width: 100%;\r\n    font-size: 2.6rem;\r\n    line-height: 1.95rem;\r\n\r\n    padding: 2rem;\r\n  }\r\n\r\n}\r\n\r\n@media (max-width: 450px) {\r\n\r\n  .header {\r\n\r\n    z-index: 30;\r\n    padding: 1rem 3rem;\r\n  }\r\n\r\n\r\n\r\n  .nav-container {\r\n    display: none;\r\n  }\r\n\r\n  .burger-menu {\r\n    display: flex;\r\n  }\r\n\r\n  .container {\r\n\r\n    background-size: auto;\r\n\r\n  }\r\n\r\n\r\n  .animated-svg {\r\n    height: 26rem;\r\n  }\r\n\r\n\r\n  main {\r\n\r\n    margin-top: 6rem;\r\n\r\n  }\r\n\r\n  .suptitle {\r\n\r\n    font-size: 3.4rem;\r\n    line-height: 3.4rem;\r\n\r\n  }\r\n\r\n  .title-container {\r\n\r\n    gap: 1rem;\r\n\r\n    z-index: 30;\r\n    padding: 0 2rem;\r\n  }\r\n\r\n  .title__mask {\r\n    opacity: 0;\r\n    transform: translateY(0);\r\n    transition: opacity 1s ease-in-out;\r\n    position: relative;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .title__mask svg text {\r\n    font-family: \"Bebas Neue bold\", sans-serif;\r\n    font-weight: 700;\r\n    font-size: 21rem;\r\n\r\n    transform: translate(1.5rem, 18.6rem);\r\n  }\r\n\r\n  .btn__header {\r\n    width: 62%;\r\n    color: #F2E1C2;\r\n    background-color: #262526;\r\n    text-transform: uppercase;\r\n    border-radius: 0.4rem;\r\n    font-size: 2rem;\r\n    line-height: 1.95rem;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-weight: 600;\r\n    padding: 2rem;\r\n  }\r\n\r\n}\r\n\r\n\r\n@media (max-width: 390px) {\r\n\r\n  .title__mask svg text {\r\n    font-family: \"Bebas Neue bold\", sans-serif;\r\n    font-weight: 700;\r\n    font-size: 19rem;\r\n    transform: translate(1.5rem, 16.6rem);\r\n  }\r\n}\r\n\r\n@media (max-width: 375px) {\r\n\r\n  .header {\r\n\r\n    z-index: 30;\r\n    padding: 1rem 3rem;\r\n  }\r\n\r\n\r\n\r\n  .nav-container {\r\n    display: none;\r\n  }\r\n\r\n  .burger-menu {\r\n    display: flex;\r\n  }\r\n\r\n  .container {\r\n\r\n    background-size: auto;\r\n\r\n  }\r\n\r\n\r\n  .animated-svg {\r\n    height: 26rem;\r\n  }\r\n\r\n\r\n  main {\r\n\r\n    margin-top: 6rem;\r\n\r\n  }\r\n\r\n  .suptitle {\r\n\r\n    font-size: 3rem;\r\n    line-height: 3.4rem;\r\n\r\n  }\r\n\r\n  .title-container {\r\n\r\n    gap: 1rem;\r\n\r\n    z-index: 30;\r\n    padding: 0 2rem;\r\n  }\r\n\r\n  .title__mask {\r\n    opacity: 0;\r\n    transform: translateY(0);\r\n    transition: opacity 1s ease-in-out;\r\n    position: relative;\r\n    height: 100%;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n  }\r\n\r\n  .title__mask svg text {\r\n    font-family: \"Bebas Neue bold\", sans-serif;\r\n    font-weight: 700;\r\n    font-size: 18rem;\r\n\r\n    transform: translate(1.5rem, 14.6rem);\r\n  }\r\n\r\n  .btn__header {\r\n    width: 62%;\r\n    color: #F2E1C2;\r\n    background-color: #262526;\r\n    text-transform: uppercase;\r\n    border-radius: 0.4rem;\r\n    font-size: 2rem;\r\n    line-height: 1.95rem;\r\n    font-family: \"Montserrat\", sans-serif;\r\n    font-weight: 600;\r\n    padding: 2rem;\r\n  }\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://mars/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://mars/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://mars/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://mars/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://mars/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://mars/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://mars/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://mars/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://mars/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://mars/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://mars/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n// src/index.js\r\n\r\n\r\n\r\n\r\ndocument.addEventListener('DOMContentLoaded', function () {\r\n    const btnHeader = document.querySelector('.btn__header');\r\n    const btnMobile = document.querySelector('.btn__mobile');\r\n    \r\n    const popup = document.querySelector('.popup');\r\n    const closeBtn = document.querySelector('.popup-close-btn');\r\n\r\n    closeBtn.addEventListener('click', function (event) {\r\n        popup.classList.remove('popup-anim-in');\r\n        popup.classList.add('popup-anim-out');\r\n    \r\n        popup.addEventListener('animationend', function handler() {\r\n            popup.classList.remove('popup-active');\r\n            popup.style.display = 'none';\r\n            popup.removeEventListener('animationend', handler);\r\n        });\r\n    });\r\n\r\n    btnHeader.addEventListener('click', function (event) {\r\n        popup.classList.remove('popup-anim-out');\r\n        popup.classList.add('popup-active', 'popup-anim-in');\r\n        popup.style.display = 'flex';\r\n    });\r\n    btnMobile.addEventListener('click', function (event) {\r\n        popup.classList.remove('popup-anim-out');\r\n        popup.classList.add('popup-active', 'popup-anim-in');\r\n        popup.style.display = 'flex';\r\n    });\r\n\r\n    const container = document.querySelector('.container');\r\n\r\n    container.addEventListener('animationend', () => {\r\n        container.classList.add('animated-bg');\r\n    });\r\n\r\n    container.addEventListener('mousemove', function(event) {\r\n        const containerWidth = container.offsetWidth;\r\n        const mouseX = event.clientX;\r\n        \r\n        const moveX = ((mouseX / containerWidth) * 100) - 50;\r\n        const limitedMoveX = Math.max(Math.min(moveX, 50), -50);\r\n    \r\n        container.style.backgroundPosition = `${50 + limitedMoveX}% center`;\r\n        console.log(container.style.backgroundPosition);\r\n    });\r\n\r\n    const burgerMenu = document.querySelector('.burger-menu');\r\n    const mobileMenu = document.querySelector('.mobile-menu');\r\n    const closeMenu = document.querySelector('.close-menu');\r\n\r\n    burgerMenu.addEventListener('click', () => {\r\n        mobileMenu.classList.toggle('active');\r\n    });\r\n\r\n    closeMenu.addEventListener('click', () => {\r\n        mobileMenu.classList.remove('active');\r\n    });\r\n\r\n    \r\n        const form = document.querySelector('.popup-form');\r\n        const messageDiv = document.getElementById('form-message');\r\n    \r\n        const dateFields = document.querySelectorAll('#arrival-date, #departure-date');\r\n    \r\n        dateFields.forEach(field => {\r\n            field.addEventListener('input', handleDateInput);\r\n            field.addEventListener('keypress', handleKeyPress);\r\n        });\r\n    \r\n        form.addEventListener('submit', function(event) {\r\n            event.preventDefault(); \r\n    \r\n            \r\n            const labels = form.querySelectorAll('label');\r\n            labels.forEach(label => label.classList.remove('label-error'));\r\n    \r\n            \r\n            const arrivalDate = document.getElementById('arrival-date').value;\r\n            const departureDate = document.getElementById('departure-date').value;\r\n            const quantity = document.getElementById('quantity').value;\r\n    \r\n            let isValid = true;\r\n    \r\n            \r\n            if (!arrivalDate) {\r\n                setError('arrival-date', 'Дата заезда обязательна');\r\n                isValid = false;\r\n            } else if (!validateDate(arrivalDate)) {\r\n                setError('arrival-date', 'Дата заезда должна быть в формате ДД.ММ.ГГГГ');\r\n                isValid = false;\r\n            }\r\n    \r\n            if (!departureDate) {\r\n                setError('departure-date', 'Дата выезда обязательна');\r\n                isValid = false;\r\n            } else if (!validateDate(departureDate)) {\r\n                setError('departure-date', 'Дата выезда должна быть в формате ДД.ММ.ГГГГ');\r\n                isValid = false;\r\n            }\r\n    \r\n            if (!quantity) {\r\n                setError('quantity', 'Количество обязательно');\r\n                isValid = false;\r\n            }\r\n    \r\n            if (!isValid) {\r\n                messageDiv.textContent = 'Пожалуйста, исправьте ошибки в форме';\r\n                return;\r\n            }\r\n    \r\n            \r\n            const formData = {\r\n                arrival: arrivalDate,\r\n                departure: departureDate,\r\n                quantity: quantity\r\n            };\r\n    \r\n            \r\n            sendFormData(formData);\r\n        });\r\n    \r\n        function handleDateInput(event) {\r\n            let input = event.target.value.replace(/\\D/g, '').substring(0, 8); \r\n            const day = input.substring(0, 2);\r\n            const month = input.substring(2, 4);\r\n            const year = input.substring(4, 8);\r\n    \r\n            if (input.length > 4) {\r\n                event.target.value = `${day}.${month}.${year}`;\r\n            } else if (input.length > 2) {\r\n                event.target.value = `${day}.${month}`;\r\n            } else {\r\n                event.target.value = day;\r\n            }\r\n        }\r\n    \r\n        function handleKeyPress(event) {\r\n            if (event.key < '0' || event.key > '9') {\r\n                event.preventDefault();\r\n            }\r\n        }\r\n    \r\n        function setError(inputId, message) {\r\n            const label = document.querySelector(`label[for=${inputId}]`);\r\n            label.classList.add('label-error');\r\n            messageDiv.textContent = message;\r\n        }\r\n    \r\n        function validateDate(date) {\r\n            const regex = /^\\d{2}\\.\\d{2}\\.\\d{4}$/;\r\n            return regex.test(date);\r\n        }\r\n    \r\n        function sendFormData(data) {\r\n            const xhr = new XMLHttpRequest();\r\n            xhr.open('POST', '/popup-form', true);\r\n            xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');\r\n    \r\n            xhr.onreadystatechange = function() {\r\n                if (xhr.readyState === XMLHttpRequest.DONE) {\r\n                    if (xhr.status === 200) {\r\n                        messageDiv.style.color = 'green';\r\n                        messageDiv.textContent = 'Форма успешно отправлена';\r\n                        form.reset(); \r\n                    } else {\r\n                        messageDiv.textContent = 'Произошла ошибка при отправке формы';\r\n                    }\r\n                }\r\n            };\r\n    \r\n            xhr.send(JSON.stringify(data));\r\n        }\r\n   \r\n    \r\n});\r\n\r\nwindow.addEventListener('load', function() {\r\n    const container = document.querySelector('.container');\r\n    const svg = document.querySelector('.animated-svg');\r\n    const titleMask = document.querySelector('.title__mask');\r\n\r\n    \r\n    svg.addEventListener('animationend', () => {\r\n        container.classList.add('animated-bg');\r\n\r\n        \r\n        titleMask.classList.add('visible');\r\n    });\r\n});\n\n//# sourceURL=webpack://mars/./src/index.js?");

/***/ }),

/***/ "./src/fonts/Bebas_Neue_bold.ttf":
/*!***************************************!*\
  !*** ./src/fonts/Bebas_Neue_bold.ttf ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"892eeaa308d220d41508.ttf\";\n\n//# sourceURL=webpack://mars/./src/fonts/Bebas_Neue_bold.ttf?");

/***/ }),

/***/ "./src/images/bg.jpg":
/*!***************************!*\
  !*** ./src/images/bg.jpg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"875a022bdb5459c196a2.jpg\";\n\n//# sourceURL=webpack://mars/./src/images/bg.jpg?");

/***/ }),

/***/ "./src/images/smoke.png":
/*!******************************!*\
  !*** ./src/images/smoke.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a3e444bc5ba5782c25e4.png\";\n\n//# sourceURL=webpack://mars/./src/images/smoke.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;