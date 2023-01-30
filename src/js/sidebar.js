export const sidebarClose = (() => {
  const $btnClose = document.querySelector(".sidebar-close");
  const $sidebarWrap = document.querySelector(".sidebar-wrap");
  $btnClose.addEventListener("click", () => {
    $sidebarWrap.style.display = "none";
  });
})();

export const sidebarOpen = (() => {
  const $btnOpne = document.querySelector(".btn-sidebar");
  const $sidebarWrap = document.querySelector(".sidebar-wrap");
  $btnOpne.addEventListener("click", () => {
    $sidebarWrap.style.display = "block";
  });
})();
