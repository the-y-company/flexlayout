import { isInOffcanvas, isIntabs, setInOffcanvas, setInTabs } from "./state.js";
import { getWidth } from "./utils.js";

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
      setInTabs(true);
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
  if (isInOffcanvas()) {
    return;
  }

  $(".center-bar").css("width", "100%");

  setInTabs(false);
  setInOffcanvas(true);

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
  if (isIntabs()) {
    return;
  }

  setInTabs(true);
  setInOffcanvas(false);

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

    const w = getWidth(el, "center");
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
