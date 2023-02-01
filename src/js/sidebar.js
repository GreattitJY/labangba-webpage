const $body = document.querySelector("body");

const $btnOpne = document.querySelector(".btn-sidebar");
const $btnClose = document.querySelector(".sidebar-close");
const $imgClose = $btnClose.querySelector("img");

const $sidebarWrap = document.querySelector(".sidebar-wrap");

const $sidebarTitle = document.querySelector(".sidebar-title");
const $sidebarTitleSub = document.querySelector(".sidebar-title-sub");

const $sidebarLinkText = document.querySelectorAll(".sidebar-section a > span");

const sidebarShow = () => {
  $sidebarWrap.style.display = "block";
  [...$sidebarLinkText].map((span) => (span.style.display = "inline"));
  $sidebarTitle.classList.remove("ir");
  $imgClose.setAttribute("src", "./src/assets/images/lnb_close.svg");
  $imgClose.setAttribute("alt", "사이드바 닫기 버튼입니다.");
};

const sidebarOpen = () => {
  $sidebarTitle.classList.remove("ir");
  $sidebarTitleSub.textContent = "데이터분석";
  $body.style.paddingLeft = "170px";
  $imgClose.setAttribute("src", "./src/assets/images/lnb_close.svg");
  $imgClose.removeAttribute("id");
  $imgClose.setAttribute("alt", "사이드바 닫기 버튼입니다.");
  [...$sidebarLinkText].map((span) => (span.style.display = "inline"));
  sidebarClose();
};

const sidebarMini = () => {
  [...$sidebarLinkText].map((span) => (span.style.display = "none"));
  $sidebarTitle.classList.add("ir");
  $sidebarTitleSub.textContent = "데이터";
  $body.style.paddingLeft = "64px";
  $imgClose.setAttribute("src", "./src/assets/images/gnb_burger.svg");
  $imgClose.setAttribute("id", "sidebar-view");
  $imgClose.setAttribute("alt", "사이드바 열기 버튼입니다.");
};

const sidebarView = () => {
  $btnClose.addEventListener("click", () => {
    sidebarOpen();
    sidebarClose();
  });
};

const sidebarClose = () => {
  const sidebarBlack = matchMedia("screen and (min-width: 1000px)");

  $btnClose.addEventListener("click", () => {
    if (sidebarBlack.matches) {
      sidebarMini();
      sidebarView();
    } else {
      $sidebarWrap.style.display = "none";
      $body.style.paddingLeft = "0px";
    }
  });
};

$btnOpne.addEventListener("click", () => {
  sidebarShow();
});

const mouseIn = () => {
  sidebarOpen();
};
const mouseOut = () => {
  $sidebarWrap.style.display = "block";
  $body.style.paddingLeft = "64px";
  sidebarMini();
  sidebarView();
};

sidebarClose();
