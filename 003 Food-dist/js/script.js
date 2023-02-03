document.addEventListener("DOMContentLoaded", () => {
  ////////////////////tabs

  const tabs = document.querySelectorAll(".tabheader__item"),
    tabContent = document.querySelectorAll(".tabcontent"),
    tabParent = document.querySelector(".tabheader__items");

  function hideTabContent() {
    tabContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show");
    });

    tabs.forEach((item) => {
      item.classList.remove("tabheader__item_active");
    });
  }

  function showTabContent(i = 0) {
    tabContent[i].classList.remove("hide");
    tabContent[i].classList.add("show");
    tabs[i].classList.add("tabheader__item_active");
  }

  hideTabContent();
  showTabContent();

  tabParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains("tabheader__item")) {
      tabs.forEach((item, i) => {
        if (target == item) {
          hideTabContent();
          showTabContent(i);
        }
      });
    }
  });
  //////////////////timer

  const daedline = "2023-02-20";

  function getTimeRemaiing(endtime) {
    let days, hours, minutes, seconds;

    const t = Date.parse(endtime) - Date.parse(new Date());

    if (t <= 0) {
      days = 0;
      hours = 0;
      minutes = 0;
      seconds = 0;
    } else {
      days = Math.floor(t / (1000 * 60 * 60 * 24));
      hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      minutes = Math.floor((t / (1000 / 60)) % 60);
      seconds = Math.floor((t / 1000) % 60);
    }

    return {
      total: t,
      days: days,
      hours: hours,
      minutes: minutes,
      seconds: seconds,
    };
  }

  function getZero(num) {
    if (num >= 0 && num < 10) {
      return `0${num}`;
    } else {
      return num;
    }
  }

  function setClock(selector, endtime) {
    const timer = document.querySelector(selector),
      days = timer.querySelector("#days"),
      hours = timer.querySelector("#hours"),
      minutes = timer.querySelector("#minutes"),
      seconds = timer.querySelector("#seconds"),
      timeInterval = setInterval(updateClock, 1000);
    updateClock();
    function updateClock() {
      const t = getTimeRemaiing(endtime);
      days.innerHTML = getZero(t.days);
      hours.innerHTML = getZero(t.hours);
      minutes.innerHTML = getZero(t.minutes);
      seconds.innerHTML = getZero(t.seconds);

      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }
  }

  setClock(".timer", daedline);

  //////////modal

  const modalShowBtn = document.querySelectorAll("[data-modal]");
  const modalHideBtn = document.querySelector("div[data-close]");
  const modalWindow = document.querySelector(".modal");

  modalShowBtn.forEach((btn) => {
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      modalWindow.classList.add("show");
      modalWindow.classList.remove("hide");
      document.body.style.overflow = "hidden";
    });
  });

  function closeModal() {
    modalWindow.classList.add("hide");
    modalWindow.classList.remove("show");
    document.body.style.overflow = "";
  }

  modalHideBtn.addEventListener("click", closeModal);

  

  modalWindow.addEventListener("click", (e) => {
    if (e.target === modalWindow) {
      closeModal();
    }
  });    ///////////////////////закрытие модального окна кликом мыши вне окна


  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modalWindow.classList.contains('show')) {
      closeModal();
    }
  });   /////////////////////закрытие модального окна кнопкой esc
});
