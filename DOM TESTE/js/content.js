const initContent = () => {
  const tabMenu = document.querySelectorAll("[data-content] li");
  const tabContent = document.querySelectorAll("[data-anime]");
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
  const faqContent = document.querySelectorAll("[data-faq] dt");
  faqContent[0].nextElementSibling.classList.add("ativo");

  faqContent.forEach((title) => {
    title.addEventListener("click", () => {
      title.nextElementSibling.classList.toggle("ativo");
    });
  });
};

export { initContent, initFaqContent };
