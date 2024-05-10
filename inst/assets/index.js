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
  $("body").on("click", ".left-bar-trigger", (e) => {
    const el = $(e.target).closest(".layout").find(".offcanvas-left");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
};

const handleRightBar = () => {
  $("body").on("click", ".right-bar-trigger", (e) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2RTtBQUMxQzs7QUFFbkM7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTSxpREFBUztBQUNmO0FBQ0E7O0FBRUE7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLFlBQVk7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdURBQXVELFlBQVk7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLHFEQUFhO0FBQ25CO0FBQ0E7O0FBRUE7O0FBRUEsRUFBRSxpREFBUztBQUNYLEVBQUUsc0RBQWM7O0FBRWhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHVCQUF1Qjs7QUFFbEU7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLHNCQUFzQjtBQUNqRSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxNQUFNLGdEQUFRO0FBQ2Q7QUFDQTs7QUFFQSxFQUFFLGlEQUFTO0FBQ1gsRUFBRSxzREFBYzs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCOztBQUU1RDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsc0JBQXNCOztBQUUzRCxjQUFjLGdEQUFRO0FBQ3RCLHFDQUFxQyxFQUFFO0FBQ3ZDLEdBQUc7QUFDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUhBO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNqQk87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ05BO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbGV4bGF5b3V0Ly4vc3JjanMvbGF5b3V0LmpzIiwid2VicGFjazovL2ZsZXhsYXlvdXQvLi9zcmNqcy9zdGF0ZS5qcyIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0Ly4vc3JjanMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ZsZXhsYXlvdXQvLi9zcmNqcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBpc0luT2ZmY2FudmFzLCBpc0ludGFicywgc2V0SW5PZmZjYW52YXMsIHNldEluVGFicyB9IGZyb20gXCIuL3N0YXRlXCI7XG5pbXBvcnQgeyBnZXRXaWR0aCB9IGZyb20gXCIuL3V0aWxzXCI7XG5cbiQoKCkgPT4ge1xuICBoYW5kbGVQYWdlKCk7XG59KTtcblxuY29uc3QgaGFuZGxlUGFnZSA9ICgpID0+IHtcbiAgaGFuZGxlTGVmdEJhcigpO1xuICBoYW5kbGVSaWdodEJhcigpO1xuXG4gICQoKCkgPT4ge1xuICAgIGlmICghd2luZG93LmlubmVyV2lkdGgpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTEpIHtcbiAgICAgIHNldEluVGFicyh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb3ZlQWxsVG9PZmZDYW52YXMoKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJyZXNpemVcIixcbiAgICAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiA5OTEpIHtcbiAgICAgICAgbW92ZUFsbFRvVGFicygpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG1vdmVBbGxUb09mZkNhbnZhcygpO1xuICAgIH0sXG4gICAgdHJ1ZSxcbiAgKTtcbn07XG5cbmNvbnN0IGhhbmRsZUxlZnRCYXIgPSAoKSA9PiB7XG4gICQoXCJib2R5XCIpLm9uKFwiY2xpY2tcIiwgXCIubGVmdC1iYXItdHJpZ2dlclwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGVsID0gJChlLnRhcmdldCkuY2xvc2VzdChcIi5sYXlvdXRcIikuZmluZChcIi5vZmZjYW52YXMtbGVmdFwiKTtcbiAgICBjb25zdCBvY0luc3QgPSBuZXcgYm9vdHN0cmFwLk9mZmNhbnZhcyhlbCk7XG4gICAgb2NJbnN0LnNob3coKTtcbiAgfSk7XG59O1xuXG5jb25zdCBoYW5kbGVSaWdodEJhciA9ICgpID0+IHtcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5yaWdodC1iYXItdHJpZ2dlclwiLCAoZSkgPT4ge1xuICAgIGNvbnN0IGVsID0gJChlLnRhcmdldCkuY2xvc2VzdChcIi5sYXlvdXRcIikuZmluZChcIi5vZmZjYW52YXMtcmlnaHRcIik7XG4gICAgY29uc3Qgb2NJbnN0ID0gbmV3IGJvb3RzdHJhcC5PZmZjYW52YXMoZWwpO1xuICAgIG9jSW5zdC5zaG93KCk7XG4gIH0pO1xufTtcblxuY29uc3QgbW92ZVRvT2ZmQ2FudmFzID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBvZmZjYW52YXMgPSAkKHBhcmFtcy5lbClcbiAgICAuY2xvc2VzdChcIi5sYXlvdXRcIilcbiAgICAuZmluZChgLm9mZmNhbnZhcy0ke3BhcmFtcy5zaWRlfWApO1xuICBjb25zdCBlbCA9ICQocGFyYW1zLmVsKVxuICAgIC5maW5kKFwiZGl2XCIpXG4gICAgLmZpcnN0KClcbiAgICAuZGV0YWNoKClcbiAgICAucmVtb3ZlQ2xhc3MoXCJkLW5vbmUgZC1tZC1ibG9ja1wiKTtcbiAgJChvZmZjYW52YXMpLmZpbmQoXCIub2ZmY2FudmFzLWJvZHlcIikuYXBwZW5kKGVsKTtcbiAgJChlbCkudHJpZ2dlcihcInNob3duXCIpO1xuICByZXR1cm4gb2ZmY2FudmFzO1xufTtcblxuY29uc3QgbW92ZVRvVGFiID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBiYXIgPSAkKHBhcmFtcy5lbCkuY2xvc2VzdChcIi5sYXlvdXRcIikuZmluZChgLiR7cGFyYW1zLnNpZGV9LWJhcmApO1xuICBjb25zdCBlbCA9ICQocGFyYW1zLmVsKVxuICAgIC5maW5kKFwiLm9mZmNhbnZhcy1ib2R5XCIpXG4gICAgLmZpbmQoXCJkaXZcIilcbiAgICAuZmlyc3QoKVxuICAgIC5kZXRhY2goKVxuICAgIC5yZW1vdmVDbGFzcyhcImQtbm9uZSBkLW1kLWJsb2NrXCIpO1xuICAkKGJhcikuYXBwZW5kKGVsKTtcbiAgJChlbCkudHJpZ2dlcihcInNob3duXCIpO1xuICByZXR1cm4gYmFyO1xufTtcblxuY29uc3QgbW92ZUFsbFRvT2ZmQ2FudmFzID0gKCkgPT4ge1xuICBpZiAoaXNJbk9mZmNhbnZhcygpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJChcIi5jZW50ZXItYmFyXCIpLmNzcyhcIndpZHRoXCIsIFwiMTAwJVwiKTtcblxuICBzZXRJblRhYnMoZmFsc2UpO1xuICBzZXRJbk9mZmNhbnZhcyh0cnVlKTtcblxuICAkKFwiLmxheW91dFwiKS5lYWNoKChfLCBlbCkgPT4ge1xuICAgIGlmICgkKGVsKS5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LXJpZ2h0XCIpLmxlbmd0aClcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwiLnJpZ2h0LWJhclwiKVxuICAgICAgICAuZWFjaCgoXywgZWwpID0+IG1vdmVUb09mZkNhbnZhcyh7IGVsOiBlbCwgc2lkZTogXCJyaWdodFwiIH0pKTtcblxuICAgIGlmICgkKGVsKS5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LWxlZnRcIikubGVuZ3RoKVxuICAgICAgJChlbClcbiAgICAgICAgLmZpbmQoXCIubGVmdC1iYXJcIilcbiAgICAgICAgLmVhY2goKF8sIGVsKSA9PiBtb3ZlVG9PZmZDYW52YXMoeyBlbDogZWwsIHNpZGU6IFwibGVmdFwiIH0pKTtcbiAgfSk7XG59O1xuXG5jb25zdCBtb3ZlQWxsVG9UYWJzID0gKCkgPT4ge1xuICBpZiAoaXNJbnRhYnMoKSkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHNldEluVGFicyh0cnVlKTtcbiAgc2V0SW5PZmZjYW52YXMoZmFsc2UpO1xuXG4gICQoXCIubGF5b3V0XCIpLmVhY2goKF8sIGVsKSA9PiB7XG4gICAgaWYgKCQoZWwpLmZpbmQoXCIub2ZmY2FudmFzLWZsZXhsYXlvdXQtcmlnaHRcIikubGVuZ3RoKVxuICAgICAgJChlbClcbiAgICAgICAgLmZpbmQoXCIub2ZmY2FudmFzLWZsZXhsYXlvdXQtcmlnaHRcIilcbiAgICAgICAgLmVhY2goKF8sIGVsKSA9PiBtb3ZlVG9UYWIoeyBlbDogZWwsIHNpZGU6IFwicmlnaHRcIiB9KSk7XG5cbiAgICBpZiAoJChlbCkuZmluZChcIi5vZmZjYW52YXMtZmxleGxheW91dC1sZWZ0XCIpLmxlbmd0aClcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LWxlZnRcIilcbiAgICAgICAgLmVhY2goKF8sIGVsKSA9PiBtb3ZlVG9UYWIoeyBlbDogZWwsIHNpZGU6IFwibGVmdFwiIH0pKTtcblxuICAgIGNvbnN0IHcgPSBnZXRXaWR0aChlbCwgXCJjZW50ZXJcIik7XG4gICAgJChcIi5jZW50ZXItYmFyXCIpLmNzcyhcIndpZHRoXCIsIGAke3d9JWApO1xuICB9KTtcbn07XG4iLCJsZXQgaW50YWJzID0gZmFsc2U7XG5sZXQgaW5PZmZjYW52YXMgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IHNldEluVGFicyA9ICh2YWx1ZSkgPT4ge1xuICBpbnRhYnMgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0ludGFicyA9ICgpID0+IHtcbiAgcmV0dXJuIGludGFicztcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRJbk9mZmNhbnZhcyA9ICh2YWx1ZSkgPT4ge1xuICBpbk9mZmNhbnZhcyA9IHZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSW5PZmZjYW52YXMgPSAoKSA9PiB7XG4gIHJldHVybiBpbk9mZmNhbnZhcztcbn07XG4iLCJleHBvcnQgY29uc3QgZ2V0V2lkdGggPSAoZWwsIHdpZHRoKSA9PiB7XG4gIGNvbnN0IGxheW91dCA9ICQoZWwpLmRhdGEoXCJsYXlvdXRcIik7XG5cbiAgaWYgKHdpZHRoID09PSBcImxlZnRcIikgcmV0dXJuIGxheW91dFswXTtcbiAgaWYgKHdpZHRoID09PSBcImNlbnRlclwiKSByZXR1cm4gbGF5b3V0WzFdO1xuICByZXR1cm4gbGF5b3V0WzJdO1xufTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IFwiLi9sYXlvdXQuanNcIjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==