import { initImgContent, initFaqContent } from "./js/content.js";

import {
  initSlowScroll,
  initArrowScrollTop,
  scrollDisplayToArrow,
} from "./js/scroll.js";

import { menuMobile } from "./js/menu.js";

initImgContent();
initFaqContent();
initSlowScroll();
initArrowScrollTop();

window.onscroll = () => {
  scrollDisplayToArrow();
  menuMobile();
};
