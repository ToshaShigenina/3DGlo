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
    const menu = document.querySelector('menu');

    const handlerMenu = () => {
      menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', (event) => {
      let target = event.target.closest('.menu') || event.target.closest('menu');

      if (!target && menu.classList.contains('active-menu')) {
        handlerMenu();
        return;
      } else {
        if (!target) {
          return;
        }
      }

      if (target.classList.contains('menu')) {
        handlerMenu();
      } else {
        target = event.target.closest('a');

        if (target) {
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

    let opacity = 0,
      animId = 0;

    const animatePopupStart = () => {
        animId = requestAnimationFrame(animatePopupStart);

        if (opacity < 1) {
          opacity += 0.02;
          popup.style.opacity = opacity;
        } else {
          opacity = 0;
          cancelAnimationFrame(animId);
        }
      },
      closePopup = () => {
        opacity = 0;
        popup.style.opacity = 0;
        popup.style.display = 'none';
      };

    btnPopup.forEach((elem) => {
      elem.addEventListener('click', () => {
        popup.style.opacity = 0;
        opacity = 0;
        popup.style.display = 'block';
        if (document.documentElement.clientWidth > 768) {
          animId = requestAnimationFrame(animatePopupStart);
        } else {
          popup.style.opacity = 1;
          opacity = 1;
        }
      });
    });

    popup.addEventListener('click', (event) => {
      let target = event.target;

      if (target.classList.contains('popup-close')) {
        closePopup();
      } else {
        target = target.closest('.popup-content');

        if (!target) {
          closePopup();
        }
      }
    });
  };

  togglePopUp();

  /* scroll */

  const smoothScroll = () => {
    const menu = document.querySelector('menu'),
      serviceAnchor = document.querySelector('main a[href="#service-block"]');

    const scrollToId = (anchor) => {
      let elemId = anchor.getAttribute('href').slice(1);

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

    serviceAnchor.addEventListener('click', (event) => {
      event.preventDefault();
      scrollToId(serviceAnchor);
    });

  };

  smoothScroll();

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

  // slider

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

  const changeImg = () => {
    const command = document.querySelector('.command');
    let src = '';

    command.addEventListener('mouseover', (event) => {
      let target = event.target;

      if (target.matches('img.command__photo')) {
        src = target.src;
        target.src = target.dataset.img;
      }
    });

    command.addEventListener('mouseout', (event) => {
      let target = event.target;

      if (target.matches('img.command__photo')) {
        target.src = src;
      }
    });
  };

  changeImg();

  // check input

  const calcCheckInput = () => {
    const calc = document.querySelector('.calc-block');

    calc.addEventListener('input', (event) => {
      let target = event.target;

      if (target.matches('input')) {
        target.value = target.value.replace(/[\D]/, '');
      }
    });
  };

  calcCheckInput();

  // calc
  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');

    let animValue = 0,
      animId = 0;


    const countSum = () => {
      let total = 0,
        countValue = 1,
        dayValue = 1;

      const typeValue = calcType.options[calcType.selectedIndex].value,
        squareValue = +calcSquare.value;

      const totalAnimationDec = () => {
          animId = requestAnimationFrame(totalAnimationDec);

          if (animValue > total && ((animValue - total) / 10) > 10) {
            animValue -= (animValue - total) / 10;
            totalValue.textContent = Math.floor(animValue);
          } else {
            totalValue.textContent = total;
            animValue = total;
            cancelAnimationFrame(animId);
          }
        },
        totalAnimationInc = () => {
          animId = requestAnimationFrame(totalAnimationInc);

          if (animValue < total && ((total - animValue) / 10) > 10) {
            animValue += (total - animValue) / 10;
            totalValue.textContent = Math.floor(animValue);
          } else {
            totalValue.textContent = total;
            animValue = total;
            cancelAnimationFrame(animId);
          }
        };

      if (calcCount.value > 1) {
        countValue += (calcCount.value - 1) / 10;
      }

      if (calcDay.value && calcDay.value < 5) {
        dayValue *= 2;
      } else if (calcDay.value && calcDay.value < 10) {
        dayValue *= 1.5;
      }

      if (typeValue && squareValue) {
        total = price * typeValue * squareValue * countValue * dayValue;
        if (total > animValue) {
          requestAnimationFrame(totalAnimationInc);
        } else {
          requestAnimationFrame(totalAnimationDec);
        }
      }

    };

    calcBlock.addEventListener('change', (event) => {
      let target = event.target;

      if (target.matches('select') || target.matches('input')) {
        countSum();
      }
    });

  };

  calc(100);

});
