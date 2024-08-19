const buttonEL = document.getElementById("button");
const modalEl = document.getElementById("modal");
const closeEl = document.getElementById("close");

buttonEL.addEventListener("click", function () {
  buttonEL.style.display = "none";

  modalEl.style.display = "flex";
});

closeEl.addEventListener("click", function () {
  modalEl.style.display = "none";

  buttonEL.style.display = "flex";
});
