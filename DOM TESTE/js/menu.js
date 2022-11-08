const menuMobile = () => {
  const verifyMenu = document.querySelector("[data-menu]");
  if (window.innerWidth < 500 && document.documentElement.scrollTop > 150) {
    verifyMenu.classList.add("menu-mobile");
  } else {
    verifyMenu.classList.remove("menu-mobile");
  }
};

const initMenuModal = () => {
  const modal = document.querySelector("[data-modal='container']");
  const abrir = document.querySelector("[data-modal='abrir']");
  const fechar = document.querySelector("[data-modal='fechar']");

  const execModal = (e) => {
    e.preventDefault();
    modal.classList.toggle("ativo");
  };

  abrir.addEventListener("click", execModal);
  fechar.addEventListener("click", execModal);

  modal.addEventListener("click", (e) => {
    if (e.target == modal) {
      execModal(e);
    }
  });
};

export { menuMobile, initMenuModal };
