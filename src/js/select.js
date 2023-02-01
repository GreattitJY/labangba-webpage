const $selectOpenBtn = document.querySelectorAll(".btn-categori");

const $selectWrap = document.querySelector(".select-wrap");
const $selectClose = $selectWrap.querySelector(".select-close");

const selectOpen = () => {
  $selectWrap.style.display = "flex";
};

$selectOpenBtn[0].addEventListener("click", selectOpen);

$selectClose.addEventListener("click", () => {
  $selectWrap.style.display = "none";
});
