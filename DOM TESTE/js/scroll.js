const initSlowScroll = () => {
  const getMenu = document.querySelectorAll(".js-menu a[href^='#']");

  function sllowScroll(e) {
    e.preventDefault();
    const getList = e.target.getAttribute("href");
    const slow = document.querySelector(getList);
    slow.scrollIntoView({
      behavior: "smooth",
    });
  }

  getMenu.forEach((menuLi) => {
    menuLi.addEventListener("click", sllowScroll);
  });
};

const initArrowScrollTop = () => {
  const arrowtop = document.querySelector("#arrowtop");
  arrowtop.addEventListener("click", topFunction);

  function topFunction() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
};

const scrollDisplayToArrow = () => {
  const arrowtop = document.querySelector("#arrowtop");
  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    arrowtop.style.display = "block";
  } else {
    arrowtop.style.display = "none";
  }
};

export { initSlowScroll, initArrowScrollTop, scrollDisplayToArrow };
