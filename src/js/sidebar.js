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
  $body.style.paddingLeft = "180px";
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

window.onresize = function () {
  const width = window.innerWidth;

  if (width >= 1200) {
    $body.style.paddingLeft = "180px";
    sidebarOpen();

    $sidebarWrap.removeEventListener("mouseover", mouseIn);
    $sidebarWrap.removeEventListener("mouseout", mouseOut);
  } else if (width >= 1000 && width < 1200) {
    $sidebarWrap.style.display = "block";
    $body.style.paddingLeft = "64px";
    sidebarMini();
    sidebarView();

    $sidebarWrap.addEventListener("mouseover", mouseIn);
    $sidebarWrap.addEventListener("mouseout", mouseOut);
  } else {
    $sidebarWrap.style.display = "none";
    $body.style.paddingLeft = "0px";

    $sidebarWrap.removeEventListener("mouseover", mouseIn);
    $sidebarWrap.removeEventListener("mouseout", mouseOut);

    // onresize 재사용 - select 반응형 레이아웃에 따른 none처리 (추후 수정 필요)
    // const $wrap = document.querySelector(".select-wrap");
    $categoriWrap.style.display = "none";
    $categoriWrap.removeEventListener("click", selectWebConfirm);
  }

  // onresize 재사용 오류로 인한 tooltipWrap 함수 이동 (추후 수정 필요)
  const $tooltipWrap = document.querySelector(".tooltip-wrap");
  $tooltipWrap.style.display = "none";
};

sidebarClose();
