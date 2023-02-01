const $categoriWrap = document.querySelector(".select-wrap");
const $btnCategori = document.querySelectorAll(".btn-categori");

const selectWebConfirm = (e) => {
  e.stopPropagation();
  $categoriWrap.style.display = "none";
  $btnCategori[0].textContent = e.target.textContent;
  $btnCategori[1].textContent = "전체";
  $selectBtnSubmit.style.backgroundColor = "var(--text-black)";
  $selectBtnSubmit.style.color = "#fff";
};

const openCategori = (e) => {
  const width = window.innerWidth;
  if (width < 1000) return;

  $btnCategori[0].appendChild($categoriWrap);

  console.log($btnCategori[0]);
  const $btnClose = document.querySelector(".select-close");
  const $btnImg = $btnClose.querySelector("img");
  $btnCategori[0].style.position = "relative";
  $categoriWrap.style.display = "flex";
  $btnClose.style.border = "none";
  $btnImg.setAttribute("src", "./src/assets/images/select_arrow_up.svg");

  $categoriWrap.addEventListener("click", selectWebConfirm);
};

$btnCategori[0].addEventListener("click", openCategori);
