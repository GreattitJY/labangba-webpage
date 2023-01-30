const rollingTextJSON = [
  {
    title: "화장품/미용 길이 테스트 길이 테스트 길이 테스트 dsfsdfsfsfsfsfdsfsfdasdasdaadsasdadada",
    link: "",
  },
  {
    title: "[아크온]실내 자전거 가나다라 마바사 길이 테스트 길이 테스트 길이 테스트 dsfdsfdsdfsdsfdfsdasdadsadasf",
    link: "",
  },
  {
    title: "식품 길이 테스트 길이 테스트 길이 테스트 sdfdsfsdfdsfdsfsfsdfsfadsadadaadsasdsadsf",
    link: "",
  },
  {
    title: "hello world! 길이 테스트 길이 테스트 길이 테스트 dsdsdfmsdklfmsjlfkasdadasdjflsdklfs",
    link: "",
  },
  {
    title: "출산/육아 길이 테스트 길이 테스트 길이 테스트 sdasdadasdasdadadadaadadasdadadsdas",
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
