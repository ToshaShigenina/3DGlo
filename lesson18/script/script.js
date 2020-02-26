'use strict';
window.addEventListener('DOMContentLoaded', () => {

  const countTimer = () => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    let now = new Date(),
      tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1),
      timeRemaning = Math.floor(tomorrow.getTime() - now.getTime()) / 1000;

    const dayTimer = () => {
        const beautifyTime = (time) => {
          if (time > 0 && time < 10) {
            return `0${time}`;
          } else if (time <= 0) {
            return `00`;
          }
          return time;
        };

        const seconds = beautifyTime(Math.floor(timeRemaning % 60)),
          minutes = beautifyTime(Math.floor((timeRemaning / 60) % 60)),
          hours = beautifyTime(Math.floor(timeRemaning / 60 / 60));

        return {
          hours,
          minutes,
          seconds
        };
      },
      updateClock = () => {
        const timer = dayTimer();
        timeRemaning--;

        timerHours.textContent = timer.hours;
        timerMinutes.textContent = timer.minutes;
        timerSeconds.textContent = timer.seconds;
      };

    setInterval(updateClock, 1000);
  };

  countTimer();

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

    let opacity = 0,
      animId = 0;

    const animatePopupStart = () => {
      let screenWidth = document.documentElement.clientWidth;

      const animation = () => {
        animId = requestAnimationFrame(animation);

        if (opacity < 1) {
          opacity += 0.02;
          popup.style.opacity = opacity;
        } else {
          opacity = 0;
          cancelAnimationFrame(animId);
        }
      }

      popup.style.opacity = 0;
      popup.style.display = 'block';

      if (screenWidth > 768) {
        requestAnimationFrame(animation);
      } else {
        opacity = 1;
        popup.style.opacity = opacity;
      }
    };

    btnPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        //requestAnimationFrame(animatePopupStart);
        animatePopupStart();
      });
    });

    btnClose.addEventListener('click', () => {
      opacity = 0;
      popup.style.opacity = 0;
      popup.style.display = 'none';
    });
  };

  togglePopUp();

  /* scroll */
  const smoothScroll = () => {
    const menu = document.querySelector('menu');

    const scrollToId = (anchor) => {
      let elemId = target.getAttribute('href').slice(1);

      document.getElementById(elemId).scrollIntoView({
        block: "start",
        behavior: "smooth"
      });
    };

    menu.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target.closest('li>a[href^="#"]');

      if (!target) {
        return;
      }

      scrollToId(target);
    });


  };

  smoothScroll();



});
