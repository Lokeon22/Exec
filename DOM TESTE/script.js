const initImgContent = () => {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");
  tabContent[0].classList.add("ativo");

  const execContent = (index) => {
    tabContent.forEach((content) => {
      content.classList.remove("ativo");
    });
    tabContent[index].classList.add("ativo");
  };

  tabMenu.forEach((img, index) => {
    img.addEventListener("click", () => {
      execContent(index);
    });
  });
};

const initFaqContent = () => {
  const faqContent = document.querySelectorAll(".faq-lista dt");
  faqContent[0].nextElementSibling.classList.add("ativo");

  faqContent.forEach((title) => {
    title.addEventListener("click", () => {
      title.nextElementSibling.classList.toggle("ativo");
    });
  });
};

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

const menuMobile = () => {
  const verifyMenu = document.querySelector(".menu");
  if (window.innerWidth < 500 && document.documentElement.scrollTop > 150) {
    verifyMenu.classList.add("menu-mobile");
  } else {
    verifyMenu.classList.remove("menu-mobile");
  }
};

initImgContent();
initFaqContent();
initSlowScroll();
initArrowScrollTop();

window.onscroll = () => {
  scrollDisplayToArrow();
  menuMobile();
};
