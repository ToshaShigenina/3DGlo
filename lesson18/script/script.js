'use strict';
window.addEventListener('DOMContentLoaded', () => {

  const countTimer = () => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    let day = 24 * 60 * 60; //24 hours

    const dayTimer = () => {
        day--;
        if (day < 0) {
          day = 24 * 60 * 60;
        }

        const beautifyTime = (time) => {
          if (time > 0 && time < 10) {
            return `0${time}`;
          } else if (time <= 0) {
            return `00`;
          }
          return time;
        };

        const seconds = beautifyTime(Math.floor(day % 60)),
          minutes = beautifyTime(Math.floor((day / 60) % 60)),
          hours = beautifyTime(Math.floor(day / 60 / 60));

        return {
          hours,
          minutes,
          seconds
        };
      },
      updateClock = () => {
        const timer = dayTimer();

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
      };

    setInterval(updateClock, 1000);
  };

  countTimer(`22 february 2020`);

  //menu

  const toggleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
      menu = document.querySelector('menu'),
      btnClose = document.querySelector('.close-btn'),
      menuItems = menu.querySelectorAll('ul>li');

    let percent = -100;

    const animateMenu = () => {
      let screenWidth = document.documentElement.clientWidth;

      if (screenWidth > 768) {
        if (percent < 100) {
          let timer = setInterval(() => {
            if (percent < 100) {
              percent += 2;
              menu.style.transform = `translateX(${percent}%)`;
            } else {
              clearInterval(timer);
            }
          }, 20);
        } else {
          if (percent === 100) {
            let timer = setInterval(() => {
              if (percent > -100) {
                percent -= 2;
                menu.style.transform = `translateX(${percent}%)`;
              } else {
                clearInterval(timer);
              }
            }, 20);
          }
        }
      } else {
        menu.classList.toggle('active-menu');
      }
    };

    const handlerMenu = () => {
      requestAnimationFrame(animateMenu);
    };

    btnMenu.addEventListener('click', handlerMenu);
    btnClose.addEventListener('click', handlerMenu);
    menuItems.forEach((item) => item.addEventListener('click', handlerMenu));
  };

  toggleMenu();

  //popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      btnPopup = document.querySelectorAll('.popup-btn'),
      btnClose = document.querySelector('.popup-close');

    let opacity = 0;

    const animatePopup = () => {
      let screenWidth = document.documentElement.clientWidth;

      popup.style.opacity = 0;

      if (screenWidth > 768) {
        if (opacity < 1) {

          popup.style.display = 'block';

          let animateStart = setInterval(() => {
            if (opacity < 1) {
              opacity += 0.02;
              popup.style.opacity = opacity;
            } else {
              opacity = 0;
              clearInterval(animateStart);
            }
          }, 10);

        }
      }
    };

    btnPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        requestAnimationFrame(animatePopup);
      });
    });

    btnClose.addEventListener('click', () => {
      popup.style.opacity = 0;
      popup.style.display = 'none';
    });
  };

  togglePopUp();





});
