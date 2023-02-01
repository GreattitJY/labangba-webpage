const rollingTextJSON = [
  {
    title: "[키즈라이브데이] 낮잠이불과 함께하는 신학기 준비",
    link: "",
  },
  {
    title: "📣[SOUP최대89%]무배+이건사야해템😁라이브특가",
    link: "",
  },
  {
    title: "식품",
    link: "",
  },
  {
    title: "[쁘띠엘린X밀로앤개비]어린이집 준비물 모두해 DREAM",
    link: "",
  },
  {
    title: "출산/육아",
    link: "",
  },
];

const renderText = async () => {
  try {
    let dataArray = [];
    // const res = await fetch("../src/data/rollingText.json")
    // const result = await res.json();

    for (const data of rollingTextJSON) {
      dataArray.push({ ...data });
    }
    return dataArray;
  } catch (err) {
    console.error(err);
  }
};

const rollingText = (async () => {
  const $headerText = document.querySelector(".link-goods");
  const dataArray = await renderText();
  let index = 0;

  const rolling = setInterval(() => {
    if (index < dataArray.length - 1) {
      index++;
    } else {
      index = 0;
    }
    $headerText.textContent = dataArray[index].title;
    $headerText.setAttribute("href", dataArray[index].link);
  }, 5000);
})();
