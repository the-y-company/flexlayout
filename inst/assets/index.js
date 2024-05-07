/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./srcjs/layout.js":
/*!*************************!*\
  !*** ./srcjs/layout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./srcjs/state.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./srcjs/utils.js");



$(() => {
  handlePage();
});

const handlePage = () => {
  handleLeftBar();
  handleRightBar();

  $(() => {
    if (!window.innerWidth) {
      return;
    }

    if (window.innerWidth > 991) {
      (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(true);
      return;
    }

    moveAllToOffCanvas();
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > 991) {
        moveAllToTabs();
        return;
      }

      moveAllToOffCanvas();
    },
    true,
  );
};

const handleLeftBar = () => {
  $(".left-bar-trigger").on("click", (e) => {
    const el = $(e.target).closest(".layout").find(".offcanvas-left");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
};

const handleRightBar = () => {
  $(".right-bar-trigger").on("click", (e) => {
    const el = $(e.target).closest(".layout").find(".offcanvas-right");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
};

const moveToOffCanvas = (params) => {
  const offcanvas = $(params.el)
    .closest(".layout")
    .find(`.offcanvas-${params.side}`);
  const el = $(params.el)
    .find("div")
    .first()
    .detach()
    .removeClass("d-none d-md-block");
  $(offcanvas).find(".offcanvas-body").append(el);
  $(el).trigger("shown");
  return offcanvas;
};

const moveToTab = (params) => {
  const bar = $(params.el).closest(".layout").find(`.${params.side}-bar`);
  const el = $(params.el)
    .find(".offcanvas-body")
    .find("div")
    .first()
    .detach()
    .removeClass("d-none d-md-block");
  $(bar).append(el);
  $(el).trigger("shown");
  return bar;
};

const moveAllToOffCanvas = () => {
  if ((0,_state__WEBPACK_IMPORTED_MODULE_0__.isInOffcanvas)()) {
    return;
  }

  $(".center-bar").css("width", "100%");

  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(false);
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInOffcanvas)(true);

  $(".layout").each((_, el) => {
    if ($(el).find(".offcanvas-flexlayout-right").length)
      $(el)
        .find(".right-bar")
        .each((_, el) => moveToOffCanvas({ el: el, side: "right" }));

    if ($(el).find(".offcanvas-flexlayout-left").length)
      $(el)
        .find(".left-bar")
        .each((_, el) => moveToOffCanvas({ el: el, side: "left" }));
  });
};

const moveAllToTabs = () => {
  if ((0,_state__WEBPACK_IMPORTED_MODULE_0__.isIntabs)()) {
    return;
  }

  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(true);
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInOffcanvas)(false);

  $(".layout").each((_, el) => {
    if ($(el).find(".offcanvas-flexlayout-right").length)
      $(el)
        .find(".offcanvas-flexlayout-right")
        .each((_, el) => moveToTab({ el: el, side: "right" }));

    if ($(el).find(".offcanvas-flexlayout-left").length)
      $(el)
        .find(".offcanvas-flexlayout-left")
        .each((_, el) => moveToTab({ el: el, side: "left" }));

    const w = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.getWidth)(el, "center");
    $(".center-bar").css("width", `${w}%`);
  });
};


/***/ }),

/***/ "./srcjs/state.js":
/*!************************!*\
  !*** ./srcjs/state.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isInOffcanvas: () => (/* binding */ isInOffcanvas),
/* harmony export */   isIntabs: () => (/* binding */ isIntabs),
/* harmony export */   setInOffcanvas: () => (/* binding */ setInOffcanvas),
/* harmony export */   setInTabs: () => (/* binding */ setInTabs)
/* harmony export */ });
let intabs = false;
let inOffcanvas = false;

const setInTabs = (value) => {
  intabs = value;
};

const isIntabs = () => {
  return intabs;
};

const setInOffcanvas = (value) => {
  inOffcanvas = value;
};

const isInOffcanvas = () => {
  return inOffcanvas;
};


/***/ }),

/***/ "./srcjs/utils.js":
/*!************************!*\
  !*** ./srcjs/utils.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWidth: () => (/* binding */ getWidth)
/* harmony export */ });
const getWidth = (el, width) => {
  const layout = $(el).data("layout");

  if (width === "left") return layout[0];
  if (width === "center") return layout[1];
  return layout[2];
};


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
/******/ 			// no module.id needed
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
/************************************************************************/
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./srcjs/index.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.js */ "./srcjs/layout.js");


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2RTtBQUMxQzs7QUFFbkM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxpREFBUztBQUNmO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELFlBQVk7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHFEQUFhO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSxpREFBUztBQUNYLEVBQUUsc0RBQWM7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVCQUF1Qjs7QUFFbEU7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxNQUFNLGdEQUFRO0FBQ2Q7QUFDQTs7QUFFQSxFQUFFLGlEQUFTO0FBQ1gsRUFBRSxzREFBYzs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCOztBQUU1RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0JBQXNCOztBQUUzRCxjQUFjLGdEQUFRO0FBQ3RCLHFDQUFxQyxFQUFFO0FBQ3ZDLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4bGF5b3V0Ly4vc3JjanMvbGF5b3V0LmpzIiwid2VicGFjazovL2ZsZXhsYXlvdXQvLi9zcmNqcy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0Ly4vc3JjanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZsZXhsYXlvdXQvLi9zcmNqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0luT2ZmY2FudmFzLCBpc0ludGFicywgc2V0SW5PZmZjYW52YXMsIHNldEluVGFicyB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBnZXRXaWR0aCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbiQoKCkgPT4ge1xuICBoYW5kbGVQYWdlKCk7XG59KTtcblxuY29uc3QgaGFuZGxlUGFnZSA9ICgpID0+IHtcbiAgaGFuZGxlTGVmdEJhcigpO1xuICBoYW5kbGVSaWdodEJhcigpO1xuXG4gICQoKCkgPT4ge1xuICAgIGlmICghd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTEpIHtcbiAgICAgIHNldEluVGFicyh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb3ZlQWxsVG9PZmZDYW52YXMoKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJyZXNpemVcIixcbiAgICAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTEpIHtcbiAgICAgICAgbW92ZUFsbFRvVGFicygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1vdmVBbGxUb09mZkNhbnZhcygpO1xuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKTtcbn07XG5cbmNvbnN0IGhhbmRsZUxlZnRCYXIgPSAoKSA9PiB7XG4gICQoXCIubGVmdC1iYXItdHJpZ2dlclwiKS5vbihcImNsaWNrXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKFwiLm9mZmNhbnZhcy1sZWZ0XCIpO1xuICAgIGNvbnN0IG9jSW5zdCA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKGVsKTtcbiAgICBvY0luc3Quc2hvdygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVJpZ2h0QmFyID0gKCkgPT4ge1xuICAkKFwiLnJpZ2h0LWJhci10cmlnZ2VyXCIpLm9uKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBjb25zdCBlbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCIubGF5b3V0XCIpLmZpbmQoXCIub2ZmY2FudmFzLXJpZ2h0XCIpO1xuICAgIGNvbnN0IG9jSW5zdCA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKGVsKTtcbiAgICBvY0luc3Quc2hvdygpO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVUb09mZkNhbnZhcyA9IChwYXJhbXMpID0+IHtcbiAgY29uc3Qgb2ZmY2FudmFzID0gJChwYXJhbXMuZWwpXG4gICAgLmNsb3Nlc3QoXCIubGF5b3V0XCIpXG4gICAgLmZpbmQoYC5vZmZjYW52YXMtJHtwYXJhbXMuc2lkZX1gKTtcbiAgY29uc3QgZWwgPSAkKHBhcmFtcy5lbClcbiAgICAuZmluZChcImRpdlwiKVxuICAgIC5maXJzdCgpXG4gICAgLmRldGFjaCgpXG4gICAgLnJlbW92ZUNsYXNzKFwiZC1ub25lIGQtbWQtYmxvY2tcIik7XG4gICQob2ZmY2FudmFzKS5maW5kKFwiLm9mZmNhbnZhcy1ib2R5XCIpLmFwcGVuZChlbCk7XG4gICQoZWwpLnRyaWdnZXIoXCJzaG93blwiKTtcbiAgcmV0dXJuIG9mZmNhbnZhcztcbn07XG5cbmNvbnN0IG1vdmVUb1RhYiA9IChwYXJhbXMpID0+IHtcbiAgY29uc3QgYmFyID0gJChwYXJhbXMuZWwpLmNsb3Nlc3QoXCIubGF5b3V0XCIpLmZpbmQoYC4ke3BhcmFtcy5zaWRlfS1iYXJgKTtcbiAgY29uc3QgZWwgPSAkKHBhcmFtcy5lbClcbiAgICAuZmluZChcIi5vZmZjYW52YXMtYm9keVwiKVxuICAgIC5maW5kKFwiZGl2XCIpXG4gICAgLmZpcnN0KClcbiAgICAuZGV0YWNoKClcbiAgICAucmVtb3ZlQ2xhc3MoXCJkLW5vbmUgZC1tZC1ibG9ja1wiKTtcbiAgJChiYXIpLmFwcGVuZChlbCk7XG4gICQoZWwpLnRyaWdnZXIoXCJzaG93blwiKTtcbiAgcmV0dXJuIGJhcjtcbn07XG5cbmNvbnN0IG1vdmVBbGxUb09mZkNhbnZhcyA9ICgpID0+IHtcbiAgaWYgKGlzSW5PZmZjYW52YXMoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gICQoXCIuY2VudGVyLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG5cbiAgc2V0SW5UYWJzKGZhbHNlKTtcbiAgc2V0SW5PZmZjYW52YXModHJ1ZSk7XG5cbiAgJChcIi5sYXlvdXRcIikuZWFjaCgoXywgZWwpID0+IHtcbiAgICBpZiAoJChlbCkuZmluZChcIi5vZmZjYW52YXMtZmxleGxheW91dC1yaWdodFwiKS5sZW5ndGgpXG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcIi5yaWdodC1iYXJcIilcbiAgICAgICAgLmVhY2goKF8sIGVsKSA9PiBtb3ZlVG9PZmZDYW52YXMoeyBlbDogZWwsIHNpZGU6IFwicmlnaHRcIiB9KSk7XG5cbiAgICBpZiAoJChlbCkuZmluZChcIi5vZmZjYW52YXMtZmxleGxheW91dC1sZWZ0XCIpLmxlbmd0aClcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwiLmxlZnQtYmFyXCIpXG4gICAgICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvT2ZmQ2FudmFzKHsgZWw6IGVsLCBzaWRlOiBcImxlZnRcIiB9KSk7XG4gIH0pO1xufTtcblxuY29uc3QgbW92ZUFsbFRvVGFicyA9ICgpID0+IHtcbiAgaWYgKGlzSW50YWJzKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBzZXRJblRhYnModHJ1ZSk7XG4gIHNldEluT2ZmY2FudmFzKGZhbHNlKTtcblxuICAkKFwiLmxheW91dFwiKS5lYWNoKChfLCBlbCkgPT4ge1xuICAgIGlmICgkKGVsKS5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LXJpZ2h0XCIpLmxlbmd0aClcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LXJpZ2h0XCIpXG4gICAgICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvVGFiKHsgZWw6IGVsLCBzaWRlOiBcInJpZ2h0XCIgfSkpO1xuXG4gICAgaWYgKCQoZWwpLmZpbmQoXCIub2ZmY2FudmFzLWZsZXhsYXlvdXQtbGVmdFwiKS5sZW5ndGgpXG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcIi5vZmZjYW52YXMtZmxleGxheW91dC1sZWZ0XCIpXG4gICAgICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvVGFiKHsgZWw6IGVsLCBzaWRlOiBcImxlZnRcIiB9KSk7XG5cbiAgICBjb25zdCB3ID0gZ2V0V2lkdGgoZWwsIFwiY2VudGVyXCIpO1xuICAgICQoXCIuY2VudGVyLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBgJHt3fSVgKTtcbiAgfSk7XG59O1xuIiwibGV0IGludGFicyA9IGZhbHNlO1xubGV0IGluT2ZmY2FudmFzID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBzZXRJblRhYnMgPSAodmFsdWUpID0+IHtcbiAgaW50YWJzID0gdmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJbnRhYnMgPSAoKSA9PiB7XG4gIHJldHVybiBpbnRhYnM7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW5PZmZjYW52YXMgPSAodmFsdWUpID0+IHtcbiAgaW5PZmZjYW52YXMgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0luT2ZmY2FudmFzID0gKCkgPT4ge1xuICByZXR1cm4gaW5PZmZjYW52YXM7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFdpZHRoID0gKGVsLCB3aWR0aCkgPT4ge1xuICBjb25zdCBsYXlvdXQgPSAkKGVsKS5kYXRhKFwibGF5b3V0XCIpO1xuXG4gIGlmICh3aWR0aCA9PT0gXCJsZWZ0XCIpIHJldHVybiBsYXlvdXRbMF07XG4gIGlmICh3aWR0aCA9PT0gXCJjZW50ZXJcIikgcmV0dXJuIGxheW91dFsxXTtcbiAgcmV0dXJuIGxheW91dFsyXTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vbGF5b3V0LmpzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=