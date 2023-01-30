const sidebarClose = (() => {
  const $btnClose = document.querySelector(".sidebar-close");
  const $sidebarWrap = document.querySelector(".sidebar-wrap");
  const sidebarBlack = matchMedia("screen and (min-width: 1000px)");
  const $sidebarLinkText = document.querySelectorAll(".sidebar-section a > span");

  $btnClose.addEventListener("click", () => {
    if (sidebarBlack.matches) {
      [...$sidebarLinkText].map((span) => (span.style.display = "none"));
    } else {
      $sidebarWrap.style.display = "none";
    }
  });
})();

const sidebarOpen = (() => {
  const $btnOpne = document.querySelector(".btn-sidebar");
  const $sidebarWrap = document.querySelector(".sidebar-wrap");
  const $sidebarLinkText = document.querySelectorAll(".sidebar-section a > span");

  $btnOpne.addEventListener("click", () => {
    $sidebarWrap.style.display = "block";
    [...$sidebarLinkText].map((span) => (span.style.display = "inline"));
  });
})();

window.onresize = function () {
  const width = window.innerWidth;
  const $sidebarWrap = document.querySelector(".sidebar-wrap");

  if (width >= 1000) {
    $sidebarWrap.style.display = "block";
  } else {
    $sidebarWrap.style.display = "none";
  }
};
