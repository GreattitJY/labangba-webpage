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
    footerWeb();

    $sidebarWrap.addEventListener("mouseover", mouseIn);
    $sidebarWrap.addEventListener("mouseout", mouseOut);
  } else {
    $sidebarWrap.style.display = "none";
    $body.style.paddingLeft = "0px";
    footerMobile();

    $sidebarWrap.removeEventListener("mouseover", mouseIn);
    $sidebarWrap.removeEventListener("mouseout", mouseOut);

    $categoriWrap.style.display = "none";
    $categoriWrap.removeEventListener("click", selectWebConfirm);
  }

  $tooltipWrap.style.display = "none";
};
