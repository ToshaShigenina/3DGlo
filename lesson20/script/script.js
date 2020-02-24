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

  countTimer(`25 february 2020`);

  //menu

  const toggleMenu = () => {
    const menu = document.querySelector('menu'),
      menuItems = menu.querySelectorAll('ul>li');

    let percent = -100;

    const animateMenu = () => {
      const screenWidth = document.documentElement.clientWidth;

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
        menu.removeAttribute('style');
        menu.classList.toggle('active-menu');
      }
    };

    const handlerMenu = () => {
      requestAnimationFrame(animateMenu);
    };

    document.body.addEventListener('click', (event) => {
      let target = event.target;
      target = target.closest('.menu');

      if (target) {
        handlerMenu();
      }
    });

    menu.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('close-btn')) {
        handlerMenu();
        return;
      } else {
        if (target.tagName === 'LI') {
          handlerMenu();
        }
      }
    });
  };

  toggleMenu();

  //popup

  const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
      btnPopup = document.querySelectorAll('.popup-btn');

    btnPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.display = 'block';
      });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        popup.style.display = 'none';
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          popup.style.display = 'none';
        }
      }
    });
  };

  togglePopUp();

  // tab

  const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
      tab = tabHeader.querySelectorAll('.service-header-tab'),
      tabContent = document.querySelectorAll('.service-tab');

    const toggleTabContent = (index) => {
      for (let i = 0; i < tabContent.length; i++) {
        if (index === i) {
          tab[i].classList.add('active');
          tabContent[i].classList.remove('d-none');
        } else {
          tab[i].classList.remove('active');
          tabContent[i].classList.add('d-none');
        }
      }
    };

    tabHeader.addEventListener('click', (event) => {
      let target = event.target;

      target = target.closest('.service-header-tab');

      if (target) {
        tab.forEach((item, i) => {
          if (item === target) {
            toggleTabContent(i);
          }
        });
      }
    });
  };

  tabs();

  const slider = () => {
    const slide = document.querySelectorAll('.portfolio-item'),
      btn = document.querySelectorAll('.portfolio-btn'),
      //dot = document.querySelectorAll('.dot'),
      slider = document.querySelector('.portfolio-content');

    let currentSlide = 0,
      interval;

    const addDots = () => {
      const dots = document.querySelector('.portfolio-dots');

      for (let i = 0; i < slide.length; i++) {
        const li = document.createElement('li');
        li.classList.add('dot');
        if (i === currentSlide) {
          li.classList.add('dot-active');
        }
        dots.append(li);
      }
    };

    addDots();

    const dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
      },
      nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
      },
      autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slide.length) {
          currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');
      },
      startSlide = (time = 2000) => {
        interval = setInterval(autoPlaySlide, time);
      },
      stopSlide = () => {
        clearInterval(interval);
      };

    slider.addEventListener('click', (event) => {
      event.preventDefault();
      let target = event.target;

      if (!target.matches('.portfolio-btn, .dot')) {
        return;
      }

      prevSlide(slide, currentSlide, 'portfolio-item-active');
      prevSlide(dot, currentSlide, 'dot-active');

      if (target.matches('#arrow-right')) {
        currentSlide++;
      } else if (target.matches('#arrow-left')) {
        currentSlide--;
      } else if (target.matches('.dot')) {
        dot.forEach((elem, index) => {
          if (elem === target) {
            currentSlide = index;
          }
        });
      }
      if (currentSlide >= slide.length) {
        currentSlide = 0;
      }
      if (currentSlide < 0) {
        currentSlide = slide.length - 1;
      }
      nextSlide(slide, currentSlide, 'portfolio-item-active');
      nextSlide(dot, currentSlide, 'dot-active');
    });

    slider.addEventListener('mouseover', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        stopSlide();
      }
    });

    slider.addEventListener('mouseout', (event) => {
      if (event.target.matches('.portfolio-btn') || event.target.matches('.dot')) {
        startSlide();
      }
    });

    startSlide(1500);

  };



  slider();

});
