const renderText = async () => {
  try {
    let dataArray = [];
    const res = await fetch("../src/data/rollingText.json");
    const result = await res.json();

    for (const data of result) {
      dataArray.push({ ...data });
    }
    return dataArray;
  } catch (err) {
    console.eror(err);
  }
};

export const rollingText = (async () => {
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
