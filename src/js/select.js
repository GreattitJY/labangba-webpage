const $selectOpenBtn = document.querySelectorAll(".btn-categori");

const $selectWrap = document.querySelector(".select-wrap");
const $selectClose = $selectWrap.querySelector(".select-close");
const $selectMember = $selectWrap.querySelector(".select-member");

const $selectBtn = $selectMember.querySelectorAll("button");
const $selectConfirm = $selectWrap.querySelector(".select-confirm");

const $selectBtnSubmit = document.querySelector(".btn-categori-submit");

const selectOpen = () => {
  const width = window.innerWidth;
  if (width >= 1000) return;
  $selectWrap.style.display = "flex";
};

const selectConfirm = (name) => {
  if (!name) return;
  $selectConfirm.addEventListener("click", (e) => {
    $selectWrap.style.display = "none";
    $selectOpenBtn[0].textContent = `${name}`;
    $selectOpenBtn[1].textContent = "전체";
    $selectOpenBtn[0].style.color = "var(--text-black)";
    $selectOpenBtn[1].style.color = "var(--text-black)";
    $selectOpenBtn[1].addEventListener("click", selectOpen);
    $selectBtnSubmit.style.backgroundColor = "var(--text-black)";
    $selectBtnSubmit.style.color = "#fff";
  });
};

$selectOpenBtn[0].addEventListener("click", selectOpen);

$selectClose.addEventListener("click", () => {
  $selectWrap.style.display = "none";
});

$selectMember.addEventListener("click", (e) => {
  if (e.target.nodeName === "BUTTON") {
    e.target.style.setProperty("--border-line", "6px");
    e.target.style.setProperty("--border-color", "var(--border-check-yellow)");
  }

  [...$selectBtn].map((btn) => {
    if (e.target !== btn) {
      btn.style.setProperty("--border-line", "1px");
      btn.style.setProperty("--border-color", "#a8a8a8");
    }
  });

  const checkedName = e.target.textContent;

  selectConfirm(checkedName);
  $selectConfirm.style.backgroundColor = "var(--text-hilght-yellow)";
  $selectConfirm.style.color = "var(--text-black)";
});
