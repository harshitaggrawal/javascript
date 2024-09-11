const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const showModal = document.querySelectorAll(".show-modal");
const closeModal = document.querySelector(".close-modal");

const openFunc = () => {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeFunc = () => {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < 3; i++) {
  showModal[i].addEventListener("click", openFunc);
}

closeModal.addEventListener("click", closeFunc);

overlay.addEventListener("click", closeFunc);
