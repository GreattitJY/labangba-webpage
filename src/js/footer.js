const $infoTime = document.querySelector(".info-time");
const $address = document.querySelector(".info-address");
const $infoCorp = document.querySelector(".info-corp");
const $footerContainer = document.querySelector(".footer-container");

const footerWeb = () => {
  $address.append($infoTime);

  $infoCorp.innerHTML = `
    씨브이쓰리 주식회사 <br/>
    사업자등록번호 891-81-02188 · 통신판매업 신고 2021-서울성동-01100 <br/>
    주소 대전광역시 유성구 대덕대로512번길 20 · 대표번호 070-4466-6599 <br/>
    개인정보관리 책임자 이기백 · 대표자 양진호
    `;
};

const footerMobile = () => {
  $footerContainer.prepend($infoTime);

  $infoCorp.innerHTML = `
  씨브이쓰리 주식회사<br />
  사업자등록번호 891-81-02188<br />
  통신판매업 신고 2021-서울성동-01100<br />
  주소 대전광역시 유성구 대덕대로512번길 20<br />
  대표번호 070-4466-6599<br />
  개인정보관리 책임자 이기백<br />
  대표자명 양진호<br />
  `;
};
