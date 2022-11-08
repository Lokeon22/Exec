import { initContent, initFaqContent } from "./js/content.js";

import {
  initSlowScroll,
  initArrowScrollTop,
  scrollDisplayToArrow,
} from "./js/scroll.js";

import { menuMobile, initMenuModal } from "./js/menu.js";

initContent();
initFaqContent();
initSlowScroll();
initArrowScrollTop();
initMenuModal();

window.onscroll = () => {
  scrollDisplayToArrow();
  menuMobile();
};
