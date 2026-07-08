const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  const button = accordion.querySelector(".accordion__button");
  const content = accordion.querySelector(".accordion__content");

  button.addEventListener("click", () => {
    content.classList.toggle("accordion__content--active");

    button.src = content.classList.contains("accordion__content--active")
      ? "./assets/images/icon-minus.svg"
      : "./assets/images/icon-plus.svg";
  });
});
