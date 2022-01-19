const buyBtns = document.querySelectorAll(".js-buy-ticket");
const modal = document.querySelector(".js-modal");
const modalContainer = document.querySelector(".js-modal-container");
const closeModal = document.querySelector(".js-modal-close");

// Modal
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

// Mobile
const header = document.getElementById("header");
const mobileMenu = document.getElementById("mobile-menu");
const headerHeight = header.clientHeight;
const menuItems = document.querySelectorAll("#nav li a[href*='#']");

// Đóng mở menu mobile
mobileMenu.addEventListener("click", () => {
  if (header.clientHeight === headerHeight) {
    header.style.height = "auto";
  } else {
    header.style.height = null;
  }
});

// Tự động đóng menu khi select
menuItems.forEach((item) => {
  var isParentMenu =
    item.nextElementSibling &&
    item.nextElementSibling.classList.contains("subnav");

  item.addEventListener("click", (e) => {
    if (isParentMenu) {
      e.preventDefault();
    } else {
      header.style.height = null;
    }
  });
});
