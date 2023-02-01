const $tooltipWrap = document.querySelector(".tooltip-wrap");
const $tooltipContainer = $tooltipWrap.querySelector(".tooltip-container");

const $tooltipOpen = document.querySelectorAll(".btn-tooltip");
const $tooltipClose = $tooltipWrap.querySelector(".tooltip-close");

const tooltipLocation = (x, y) => {
  $tooltipWrap.style.display = "block";
  $tooltipContainer.style.left = x + "px";
  $tooltipContainer.style.top = y + "px";
};

const tooltipGenerantor = (e) => {
  const categori = e.target.dataset.set;
  const $tooltipTitle = $tooltipWrap.querySelector(".tooltip-title");
  const $tooltipInfo = $tooltipWrap.querySelector(".tooltip-info");

  const x = e.target.offsetLeft;
  const y = e.target.offsetTop;
  tooltipLocation(x, y);

  if (categori === "statistic") {
    $tooltipTitle.textContent = "라이브커머스 통계";
    $tooltipInfo.innerHTML = `현재시점을 기준으로 72시간 동안 주요 <br/> 라이브쇼핑 플랫폼의 방송 수와 추정 <br/> 매출액`;
  } else if (categori === "ranking") {
    $tooltipTitle.textContent = "라방랭킹";
    $tooltipInfo.innerHTML = `상단에서 선택한 카테고리의 추정 <br/> 매출액이 높은 방송 표기`;
  }
};

[...$tooltipOpen].map((btn) => btn.addEventListener("click", tooltipGenerantor));

$tooltipWrap.addEventListener("click", (e) => {
  if (e.target === $tooltipWrap) {
    $tooltipWrap.style.display = "none";
  }
});

$tooltipClose.addEventListener("click", () => {
  $tooltipWrap.style.display = "none";
});
