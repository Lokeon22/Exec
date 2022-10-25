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

initImgContent();
initFaqContent();
