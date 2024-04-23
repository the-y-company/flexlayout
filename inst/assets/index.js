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
    let el = $(e.target).closest(".layout").find(".offcanvas-left");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
};

const handleRightBar = () => {
  $(".right-bar-trigger").on("click", (e) => {
    let el = $(e.target).closest(".layout").find(".offcanvas-right");
    const ocInst = new bootstrap.Offcanvas(el);
    ocInst.show();
  });
};

const moveToOffCanvas = (params) => {
  let offcanvas = $(params.el)
    .closest(".layout")
    .find(`.offcanvas-${params.side}`);
  let el = $(params.el)
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

  $(".nav-tabs").addClass("float-tabs");
  $(".center-bar").css("width", "100%");

  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(false);
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInOffcanvas)(true);
  $(".layout")
    .find(".left-bar")
    .each((_, el) => moveToOffCanvas({ el: el, side: "left" }));

  $(".layout").each((_, el) => {
    if ($(el).find(".offcanvas-flexlayout-right").length) {
      $(el)
        .find(".right-bar")
        .each((_, el) => moveToOffCanvas({ el: el, side: "right" }));
      $(".center-bar").css("width", "100%");
      return;
    }
    $(el).find(".center-bar").css("width", "100%");
  });
};

const moveAllToTabs = () => {
  if ((0,_state__WEBPACK_IMPORTED_MODULE_0__.isIntabs)()) {
    return;
  }

  $(".nav-tabs").removeClass("float-tabs");

  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInTabs)(true);
  (0,_state__WEBPACK_IMPORTED_MODULE_0__.setInOffcanvas)(false);
  $(".layout")
    .find(".offcanvas-flexlayout-left")
    .each((_, el) => moveToTab({ el: el, side: "left" }));

  $(".layout").each((_, el) => {
    if ($(el).find(".offcanvas-flexlayout-right").length) {
      $(el)
        .find(".offcanvas-flexlayout-right")
        .each((_, el) => moveToTab({ el: el, side: "right" }));
      $(".center-bar").css("width", "56%");
      return;
    }
    $(el).find(".center-bar").css("width", "100%");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQTZFOztBQUU3RTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFNLGlEQUFTO0FBQ2Y7QUFDQTs7QUFFQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsWUFBWTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1REFBdUQsWUFBWTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQU0scURBQWE7QUFDbkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLEVBQUUsaURBQVM7QUFDWCxFQUFFLHNEQUFjO0FBQ2hCO0FBQ0E7QUFDQSx1Q0FBdUMsc0JBQXNCOztBQUU3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyx1QkFBdUI7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQSxNQUFNLGdEQUFRO0FBQ2Q7QUFDQTs7QUFFQTs7QUFFQSxFQUFFLGlEQUFTO0FBQ1gsRUFBRSxzREFBYztBQUNoQjtBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjs7QUFFdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUJBQXVCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRU87QUFDUDtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFTztBQUNQO0FBQ0E7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQiIsInNvdXJjZXMiOlsid2VicGFjazovL2ZsZXhsYXlvdXQvLi9zcmNqcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC8uL3NyY2pzL3N0YXRlLmpzIiwid2VicGFjazovL2ZsZXhsYXlvdXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZmxleGxheW91dC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ZsZXhsYXlvdXQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mbGV4bGF5b3V0Ly4vc3JjanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNJbk9mZmNhbnZhcywgaXNJbnRhYnMsIHNldEluT2ZmY2FudmFzLCBzZXRJblRhYnMgfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG4kKCgpID0+IHtcbiAgaGFuZGxlUGFnZSgpO1xufSk7XG5cbmNvbnN0IGhhbmRsZVBhZ2UgPSAoKSA9PiB7XG4gIGhhbmRsZUxlZnRCYXIoKTtcbiAgaGFuZGxlUmlnaHRCYXIoKTtcblxuICAkKCgpID0+IHtcbiAgICBpZiAoIXdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkxKSB7XG4gICAgICBzZXRJblRhYnModHJ1ZSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbW92ZUFsbFRvT2ZmQ2FudmFzKCk7XG4gIH0pO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFxuICAgIFwicmVzaXplXCIsXG4gICAgKCkgPT4ge1xuICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gOTkxKSB7XG4gICAgICAgIG1vdmVBbGxUb1RhYnMoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBtb3ZlQWxsVG9PZmZDYW52YXMoKTtcbiAgICB9LFxuICAgIHRydWUsXG4gICk7XG59O1xuXG5jb25zdCBoYW5kbGVMZWZ0QmFyID0gKCkgPT4ge1xuICAkKFwiLmxlZnQtYmFyLXRyaWdnZXJcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBlbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCIubGF5b3V0XCIpLmZpbmQoXCIub2ZmY2FudmFzLWxlZnRcIik7XG4gICAgY29uc3Qgb2NJbnN0ID0gbmV3IGJvb3RzdHJhcC5PZmZjYW52YXMoZWwpO1xuICAgIG9jSW5zdC5zaG93KCk7XG4gIH0pO1xufTtcblxuY29uc3QgaGFuZGxlUmlnaHRCYXIgPSAoKSA9PiB7XG4gICQoXCIucmlnaHQtYmFyLXRyaWdnZXJcIikub24oXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGxldCBlbCA9ICQoZS50YXJnZXQpLmNsb3Nlc3QoXCIubGF5b3V0XCIpLmZpbmQoXCIub2ZmY2FudmFzLXJpZ2h0XCIpO1xuICAgIGNvbnN0IG9jSW5zdCA9IG5ldyBib290c3RyYXAuT2ZmY2FudmFzKGVsKTtcbiAgICBvY0luc3Quc2hvdygpO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVUb09mZkNhbnZhcyA9IChwYXJhbXMpID0+IHtcbiAgbGV0IG9mZmNhbnZhcyA9ICQocGFyYW1zLmVsKVxuICAgIC5jbG9zZXN0KFwiLmxheW91dFwiKVxuICAgIC5maW5kKGAub2ZmY2FudmFzLSR7cGFyYW1zLnNpZGV9YCk7XG4gIGxldCBlbCA9ICQocGFyYW1zLmVsKVxuICAgIC5maW5kKFwiZGl2XCIpXG4gICAgLmZpcnN0KClcbiAgICAuZGV0YWNoKClcbiAgICAucmVtb3ZlQ2xhc3MoXCJkLW5vbmUgZC1tZC1ibG9ja1wiKTtcbiAgJChvZmZjYW52YXMpLmZpbmQoXCIub2ZmY2FudmFzLWJvZHlcIikuYXBwZW5kKGVsKTtcbiAgJChlbCkudHJpZ2dlcihcInNob3duXCIpO1xuICByZXR1cm4gb2ZmY2FudmFzO1xufTtcblxuY29uc3QgbW92ZVRvVGFiID0gKHBhcmFtcykgPT4ge1xuICBjb25zdCBiYXIgPSAkKHBhcmFtcy5lbCkuY2xvc2VzdChcIi5sYXlvdXRcIikuZmluZChgLiR7cGFyYW1zLnNpZGV9LWJhcmApO1xuICBjb25zdCBlbCA9ICQocGFyYW1zLmVsKVxuICAgIC5maW5kKFwiLm9mZmNhbnZhcy1ib2R5XCIpXG4gICAgLmZpbmQoXCJkaXZcIilcbiAgICAuZmlyc3QoKVxuICAgIC5kZXRhY2goKVxuICAgIC5yZW1vdmVDbGFzcyhcImQtbm9uZSBkLW1kLWJsb2NrXCIpO1xuICAkKGJhcikuYXBwZW5kKGVsKTtcbiAgJChlbCkudHJpZ2dlcihcInNob3duXCIpO1xuICByZXR1cm4gYmFyO1xufTtcblxuY29uc3QgbW92ZUFsbFRvT2ZmQ2FudmFzID0gKCkgPT4ge1xuICBpZiAoaXNJbk9mZmNhbnZhcygpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJChcIi5uYXYtdGFic1wiKS5hZGRDbGFzcyhcImZsb2F0LXRhYnNcIik7XG4gICQoXCIuY2VudGVyLWJhclwiKS5jc3MoXCJ3aWR0aFwiLCBcIjEwMCVcIik7XG5cbiAgc2V0SW5UYWJzKGZhbHNlKTtcbiAgc2V0SW5PZmZjYW52YXModHJ1ZSk7XG4gICQoXCIubGF5b3V0XCIpXG4gICAgLmZpbmQoXCIubGVmdC1iYXJcIilcbiAgICAuZWFjaCgoXywgZWwpID0+IG1vdmVUb09mZkNhbnZhcyh7IGVsOiBlbCwgc2lkZTogXCJsZWZ0XCIgfSkpO1xuXG4gICQoXCIubGF5b3V0XCIpLmVhY2goKF8sIGVsKSA9PiB7XG4gICAgaWYgKCQoZWwpLmZpbmQoXCIub2ZmY2FudmFzLWZsZXhsYXlvdXQtcmlnaHRcIikubGVuZ3RoKSB7XG4gICAgICAkKGVsKVxuICAgICAgICAuZmluZChcIi5yaWdodC1iYXJcIilcbiAgICAgICAgLmVhY2goKF8sIGVsKSA9PiBtb3ZlVG9PZmZDYW52YXMoeyBlbDogZWwsIHNpZGU6IFwicmlnaHRcIiB9KSk7XG4gICAgICAkKFwiLmNlbnRlci1iYXJcIikuY3NzKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkKGVsKS5maW5kKFwiLmNlbnRlci1iYXJcIikuY3NzKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICB9KTtcbn07XG5cbmNvbnN0IG1vdmVBbGxUb1RhYnMgPSAoKSA9PiB7XG4gIGlmIChpc0ludGFicygpKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgJChcIi5uYXYtdGFic1wiKS5yZW1vdmVDbGFzcyhcImZsb2F0LXRhYnNcIik7XG5cbiAgc2V0SW5UYWJzKHRydWUpO1xuICBzZXRJbk9mZmNhbnZhcyhmYWxzZSk7XG4gICQoXCIubGF5b3V0XCIpXG4gICAgLmZpbmQoXCIub2ZmY2FudmFzLWZsZXhsYXlvdXQtbGVmdFwiKVxuICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvVGFiKHsgZWw6IGVsLCBzaWRlOiBcImxlZnRcIiB9KSk7XG5cbiAgJChcIi5sYXlvdXRcIikuZWFjaCgoXywgZWwpID0+IHtcbiAgICBpZiAoJChlbCkuZmluZChcIi5vZmZjYW52YXMtZmxleGxheW91dC1yaWdodFwiKS5sZW5ndGgpIHtcbiAgICAgICQoZWwpXG4gICAgICAgIC5maW5kKFwiLm9mZmNhbnZhcy1mbGV4bGF5b3V0LXJpZ2h0XCIpXG4gICAgICAgIC5lYWNoKChfLCBlbCkgPT4gbW92ZVRvVGFiKHsgZWw6IGVsLCBzaWRlOiBcInJpZ2h0XCIgfSkpO1xuICAgICAgJChcIi5jZW50ZXItYmFyXCIpLmNzcyhcIndpZHRoXCIsIFwiNTYlXCIpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAkKGVsKS5maW5kKFwiLmNlbnRlci1iYXJcIikuY3NzKFwid2lkdGhcIiwgXCIxMDAlXCIpO1xuICB9KTtcbn07XG4iLCJsZXQgaW50YWJzID0gZmFsc2U7XG5sZXQgaW5PZmZjYW52YXMgPSBmYWxzZTtcblxuZXhwb3J0IGNvbnN0IHNldEluVGFicyA9ICh2YWx1ZSkgPT4ge1xuICBpbnRhYnMgPSB2YWx1ZTtcbn07XG5cbmV4cG9ydCBjb25zdCBpc0ludGFicyA9ICgpID0+IHtcbiAgcmV0dXJuIGludGFicztcbn07XG5cbmV4cG9ydCBjb25zdCBzZXRJbk9mZmNhbnZhcyA9ICh2YWx1ZSkgPT4ge1xuICBpbk9mZmNhbnZhcyA9IHZhbHVlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSW5PZmZjYW52YXMgPSAoKSA9PiB7XG4gIHJldHVybiBpbk9mZmNhbnZhcztcbn07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBcIi4vbGF5b3V0LmpzXCI7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=