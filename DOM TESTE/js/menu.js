const menuMobile = () => {
  const verifyMenu = document.querySelector(".menu");
  if (window.innerWidth < 500 && document.documentElement.scrollTop > 150) {
    verifyMenu.classList.add("menu-mobile");
  } else {
    verifyMenu.classList.remove("menu-mobile");
  }
};

export { menuMobile };
