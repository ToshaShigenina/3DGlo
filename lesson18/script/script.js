'use strict';
window.addEventListener('DOMContentLoaded', () => {

  const countTimer = (deadline) => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaning = () => {
        const beautifyTime = (time) => {
            if (time > 0 && time < 10) {
              return `0${time}`;
            } else if (time <= 0) {
              return `00`;
            }
            return time;
          },
          dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = beautifyTime(Math.floor(timeRemaining % 60)),
          minutes = beautifyTime(Math.floor((timeRemaining / 60) % 60)),
          hours = beautifyTime(Math.floor(timeRemaining / 60 / 60));

        return {
          hours,
          minutes,
          seconds
        };
      },
      updateClock = () => {
        const timer = getTimeRemaning();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
      };

    setInterval(updateClock, 1000);
  };

  countTimer(`22 february 2020`);

  //menu

  const toggleMenu = () => {
    const btnMenu = document.querySelictor('.menu'),
      menu = document.querySelector('menu'),
      btnClose = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    btnMenu.addEventListener('click', handlerMenu);
    btnClose.addEventListener('click', handlerMenu);
    menuItems.forEach((item) => item.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      btnPopup = document.querySelectorAll('.popup-btn'),
      btnClose = document.querySelector('.popup-close');

    btnPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });

    btnClose.addEventListener('click', () => {
      popup.style.display = 'none';
    });
  };

  togglePopUp();



});
