const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const closeModal = document.querySelector(".js-modal-close");

buyBtns.forEach((buyBtn) => {
  buyBtn.addEventListener("click", () => {
    modal.classList.add("open");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", () => {
  modal.classList.remove("open");
});

modalContainer.addEventListener("click", (event) => {
  event.stopPropagation();
});
