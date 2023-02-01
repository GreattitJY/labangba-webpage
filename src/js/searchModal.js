const searchClose = (() => {
  const $btnClose = document.querySelector(".btn-close");
  const $boxModal = document.querySelector(".box-modal");
  const $input = document.querySelector(".input-search-modal");
  $btnClose.addEventListener("click", (e) => {
    $boxModal.style.display = "none";
    $input.value = "";
  });
})();

const searchOpen = (() => {
  const $btnOpen = document.querySelector(".btn-search-active");
  const $boxModal = document.querySelector(".box-modal");
  const $inpSearch = document.querySelector(".input-search-modal");

  $btnOpen.addEventListener("click", (e) => {
    $boxModal.style.display = "flex";
    $inpSearch.focus();
  });
})();
