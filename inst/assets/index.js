/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./srcjs/layout.js":
/*!*************************!*\
  !*** ./srcjs/layout.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state.js */ "./srcjs/state.js");
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils.js */ "./srcjs/utils.js");



let WIDTH = 991;

$(() => {
  handlePage();
});

const handlePage = () => {
  setGlobal();
  handleLeftBar();
  handleRightBar();

  $(() => {
    if (!window.innerWidth) {
      return;
    }

    if (window.innerWidth > WIDTH) {
      (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(true);
      return;
    }

    moveAllToOffCanvas();
  });

  window.addEventListener(
    "resize",
    () => {
      if (window.innerWidth > WIDTH) {
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
    .removeClass("d-none l-md-block");
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
    .removeClass("d-none l-md-block");
  $(bar).append(el);
  $(el).trigger("shown");
  return bar;
};

const moveAllToOffCanvas = () => {
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.isInOffcanvas)()) {
    return;
  }

  $(".center-bar").css("width", "100%");

  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(false);
  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setInOffcanvas)(true);

  $(".layout").each((_, el) => {
    if ($(el).find(".offcanvas-flexlayout-right").length) {
      $(el)
        .find(".right-bar")
        .each((_, el) => moveToOffCanvas({ el: el, side: "right" }));
    }

    if ($(el).find(".offcanvas-flexlayout-left").length) {
      $(el)
        .find(".left-bar")
        .each((_, el) => moveToOffCanvas({ el: el, side: "left" }));
    }
  });
};

const moveAllToTabs = () => {
  if ((0,_state_js__WEBPACK_IMPORTED_MODULE_0__.isIntabs)()) {
    return;
  }

  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(true);
  (0,_state_js__WEBPACK_IMPORTED_MODULE_0__.setInOffcanvas)(false);

  $(".layout").each((_, el) => {
    if ($(el).find(".offcanvas-flexlayout-right").length) {
      $(el)
        .find(".offcanvas-flexlayout-right")
        .each((_, el) => moveToTab({ el: el, side: "right" }));
    }

    if ($(el).find(".offcanvas-flexlayout-left").length) {
      $(el)
        .find(".offcanvas-flexlayout-left")
        .each((_, el) => moveToTab({ el: el, side: "left" }));
    }

    const w = (0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.getWidth)(el, "center");
    $(".center-bar").css("width", `${w}%`);
  });
};

const setGlobal = () => {
  const $el = $("#FLEXLAYOUT-GLOBALS");
  if (!$el.length) return;

  const dataString = $el.text();
  const data = JSON.parse(dataString);

  if (data.width) {
    WIDTH = data.width;
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFnRjtBQUMxQzs7QUFFdEM7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLG9EQUFTO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsWUFBWTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0sd0RBQWE7QUFDbkI7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLG9EQUFTO0FBQ1gsRUFBRSx5REFBYzs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsdUJBQXVCO0FBQ2xFOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxzQkFBc0I7QUFDakU7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxNQUFNLG1EQUFRO0FBQ2Q7QUFDQTs7QUFFQSxFQUFFLG9EQUFTO0FBQ1gsRUFBRSx5REFBYzs7QUFFaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVEOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyxzQkFBc0I7QUFDM0Q7O0FBRUEsY0FBYyxtREFBUTtBQUN0QixxQ0FBcUMsRUFBRTtBQUN2QyxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDakJPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUNOQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTnFCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxleGxheW91dC8uL3NyY2pzL2xheW91dC5qcyIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0Ly4vc3JjanMvc3RhdGUuanMiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC8uL3NyY2pzL3V0aWxzLmpzIiwid2VicGFjazovL2ZsZXhsYXlvdXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsZXhsYXlvdXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0Ly4vc3JjanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNJbk9mZmNhbnZhcywgaXNJbnRhYnMsIHNldEluT2ZmY2FudmFzLCBzZXRJblRhYnMgfSBmcm9tIFwiLi9zdGF0ZS5qc1wiO1xuaW1wb3J0IHsgZ2V0V2lkdGggfSBmcm9tIFwiLi91dGlscy5qc1wiO1xuXG5sZXQgV0lEVEggPSA5OTE7XG5cbiQoKCkgPT4ge1xuICBoYW5kbGVQYWdlKCk7XG59KTtcblxuY29uc3QgaGFuZGxlUGFnZSA9ICgpID0+IHtcbiAgc2V0R2xvYmFsKCk7XG4gIGhhbmRsZUxlZnRCYXIoKTtcbiAgaGFuZGxlUmlnaHRCYXIoKTtcblxuICAkKCgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gV0lEVEgpIHtcbiAgICAgIHNldEluVGFicyh0cnVlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBtb3ZlQWxsVG9PZmZDYW52YXMoKTtcbiAgfSk7XG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgXCJyZXNpemVcIixcbiAgICAoKSA9PiB7XG4gICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPiBXSURUSCkge1xuICAgICAgICBtb3ZlQWxsVG9UYWJzKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgbW92ZUFsbFRvT2ZmQ2FudmFzKCk7XG4gICAgfSxcbiAgICB0cnVlLFxuICApO1xufTtcblxuY29uc3QgaGFuZGxlTGVmdEJhciA9ICgpID0+IHtcbiAgJChcImJvZHlcIikub24oXCJjbGlja1wiLCBcIi5sZWZ0LWJhci10cmlnZ2VyXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKFwiLm9mZmNhbnZhcy1sZWZ0XCIpO1xuICAgIGNvbnN0IG9jSW5zdCA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKGVsKTtcbiAgICBvY0luc3Quc2hvdygpO1xuICB9KTtcbn07XG5cbmNvbnN0IGhhbmRsZVJpZ2h0QmFyID0gKCkgPT4ge1xuICAkKFwiYm9keVwiKS5vbihcImNsaWNrXCIsIFwiLnJpZ2h0LWJhci10cmlnZ2VyXCIsIChlKSA9PiB7XG4gICAgY29uc3QgZWwgPSAkKGUudGFyZ2V0KS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKFwiLm9mZmNhbnZhcy1yaWdodFwiKTtcbiAgICBjb25zdCBvY0luc3QgPSBuZXcgYm9vdHN0cmFwLk9mZmNhbnZhcyhlbCk7XG4gICAgb2NJbnN0LnNob3coKTtcbiAgfSk7XG59O1xuXG5jb25zdCBtb3ZlVG9PZmZDYW52YXMgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IG9mZmNhbnZhcyA9ICQocGFyYW1zLmVsKVxuICAgIC5jbG9zZXN0KFwiLmxheW91dFwiKVxuICAgIC5maW5kKGAub2ZmY2FudmFzLSR7cGFyYW1zLnNpZGV9YCk7XG4gIGNvbnN0IGVsID0gJChwYXJhbXMuZWwpXG4gICAgLmZpbmQoXCJkaXZcIilcbiAgICAuZmlyc3QoKVxuICAgIC5kZXRhY2goKVxuICAgIC5yZW1vdmVDbGFzcyhcImQtbm9uZSBsLW1kLWJsb2NrXCIpO1xuICAkKG9mZmNhbnZhcykuZmluZChcIi5vZmZjYW52YXMtYm9keVwiKS5hcHBlbmQoZWwpO1xuICAkKGVsKS50cmlnZ2VyKFwic2hvd25cIik7XG4gIHJldHVybiBvZmZjYW52YXM7XG59O1xuXG5jb25zdCBtb3ZlVG9UYWIgPSAocGFyYW1zKSA9PiB7XG4gIGNvbnN0IGJhciA9ICQocGFyYW1zLmVsKS5jbG9zZXN0KFwiLmxheW91dFwiKS5maW5kKGAuJHtwYXJhbXMuc2lkZX0tYmFyYCk7XG4gIGNvbnN0IGVsID0gJChwYXJhbXMuZWwpXG4gICAgLmZpbmQoXCIub2ZmY2FudmFzLWJvZHlcIilcbiAgICAuZmluZChcImRpdlwiKVxuICAgIC5maXJzdCgpXG4gICAgLmRldGFjaCgpXG4gICAgLnJlbW92ZUNsYXNzKFwiZC1ub25lIGwtbWQtYmxvY2tcIik7XG4gICQoYmFyKS5hcHBlbmQoZWwpO1xuICAkKGVsKS50cmlnZ2VyKFwic2hvd25cIik7XG4gIHJldHVybiBiYXI7XG59O1xuXG5jb25zdCBtb3ZlQWxsVG9PZmZDYW52YXMgPSAoKSA9PiB7XG4gIGlmIChpc0luT2ZmY2FudmFzKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAkKFwiLmNlbnRlci1iYXJcIikuY3NzKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuXG4gIHNldEluVGFicyhmYWxzZSk7XG4gIHNldEluT2ZmY2FudmFzKHRydWUpO1xuXG4gICQoXCIubGF5b3V0XCIpLmVhY2goKF8sIGVsKSA9PiB7XG4gICAgaWYgKCQoZWwpLmZpbmQoXCIub2ZmY2FudmFzLWZsZXhsYXlvdXQtcmlnaHRcIikubGVuZ3RoKSB7XG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcIi5yaWdodC1iYXJcIilcbiAgICAgICAgLmVhY2goKF8sIGVsKSA9PiBtb3ZlVG9PZmZDYW52YXMoeyBlbDogZWwsIHNpZGU6IFwicmlnaHRcIiB9KSk7XG4gICAgfVxuXG4gICAgaWYgKCQoZWwpLmZpbmQoXCIub2ZmY2FudmFzLWZsZXhsYXlvdXQtbGVmdFwiKS5sZW5ndGgpIHtcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwiLmxlZnQtYmFyXCIpXG4gICAgICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvT2ZmQ2FudmFzKHsgZWw6IGVsLCBzaWRlOiBcImxlZnRcIiB9KSk7XG4gICAgfVxuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVBbGxUb1RhYnMgPSAoKSA9PiB7XG4gIGlmIChpc0ludGFicygpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgc2V0SW5UYWJzKHRydWUpO1xuICBzZXRJbk9mZmNhbnZhcyhmYWxzZSk7XG5cbiAgJChcIi5sYXlvdXRcIikuZWFjaCgoXywgZWwpID0+IHtcbiAgICBpZiAoJChlbCkuZmluZChcIi5vZmZjYW52YXMtZmxleGxheW91dC1yaWdodFwiKS5sZW5ndGgpIHtcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LXJpZ2h0XCIpXG4gICAgICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvVGFiKHsgZWw6IGVsLCBzaWRlOiBcInJpZ2h0XCIgfSkpO1xuICAgIH1cblxuICAgIGlmICgkKGVsKS5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LWxlZnRcIikubGVuZ3RoKSB7XG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcIi5vZmZjYW52YXMtZmxleGxheW91dC1sZWZ0XCIpXG4gICAgICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvVGFiKHsgZWw6IGVsLCBzaWRlOiBcImxlZnRcIiB9KSk7XG4gICAgfVxuXG4gICAgY29uc3QgdyA9IGdldFdpZHRoKGVsLCBcImNlbnRlclwiKTtcbiAgICAkKFwiLmNlbnRlci1iYXJcIikuY3NzKFwid2lkdGhcIiwgYCR7d30lYCk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0R2xvYmFsID0gKCkgPT4ge1xuICBjb25zdCAkZWwgPSAkKFwiI0ZMRVhMQVlPVVQtR0xPQkFMU1wiKTtcbiAgaWYgKCEkZWwubGVuZ3RoKSByZXR1cm47XG5cbiAgY29uc3QgZGF0YVN0cmluZyA9ICRlbC50ZXh0KCk7XG4gIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGRhdGFTdHJpbmcpO1xuXG4gIGlmIChkYXRhLndpZHRoKSB7XG4gICAgV0lEVEggPSBkYXRhLndpZHRoO1xuICB9XG59O1xuIiwibGV0IGludGFicyA9IGZhbHNlO1xubGV0IGluT2ZmY2FudmFzID0gZmFsc2U7XG5cbmV4cG9ydCBjb25zdCBzZXRJblRhYnMgPSAodmFsdWUpID0+IHtcbiAgaW50YWJzID0gdmFsdWU7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJbnRhYnMgPSAoKSA9PiB7XG4gIHJldHVybiBpbnRhYnM7XG59O1xuXG5leHBvcnQgY29uc3Qgc2V0SW5PZmZjYW52YXMgPSAodmFsdWUpID0+IHtcbiAgaW5PZmZjYW52YXMgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0luT2ZmY2FudmFzID0gKCkgPT4ge1xuICByZXR1cm4gaW5PZmZjYW52YXM7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGdldFdpZHRoID0gKGVsLCB3aWR0aCkgPT4ge1xuICBjb25zdCBsYXlvdXQgPSAkKGVsKS5kYXRhKFwibGF5b3V0XCIpO1xuXG4gIGlmICh3aWR0aCA9PT0gXCJsZWZ0XCIpIHJldHVybiBsYXlvdXRbMF07XG4gIGlmICh3aWR0aCA9PT0gXCJjZW50ZXJcIikgcmV0dXJuIGxheW91dFsxXTtcbiAgcmV0dXJuIGxheW91dFsyXTtcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vbGF5b3V0LmpzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=