"use strict";

const inputRub = document.querySelector("#rub"),
  inputUsd = document.querySelector("#usd");

inputRub.addEventListener("input", () => {
  const request = new XMLHttpRequest(); ////////////создаем обьект запроса к серверу

  request.open("GET", "js/current.json"); ///////////тип запроса и урл файла, к которому делаем запрос
  request.setRequestHeader("Content-type", "application/json; charset=utf-8");
  request.send();

  /////свойства запроса
  ///status
  ///statusText
  ///readyState
  ///response

  request.addEventListener("load", () => {
    if (request.status === 200) {
      const data = JSON.parse(request.response);
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2); ////tiFixed(2) метода указывает на то сколько знаков после запятой показывать, в данном случае 2
    } else {
      inputUsd.value = "Якась халепа";
    }
  });
});
