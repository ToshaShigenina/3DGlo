'use strict';
window.addEventListener('DOMContentLoaded', () => {

  //timer

  countTimer();

  //menu

  toggleMenu();

  //popup

  togglePopUp();

  /* scroll */

  smoothScroll();

  // tab

  tabs();

  // slider

  slider();

  // hover image

  changeImg();

  // calc

  const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block'),
      calcType = document.querySelector('.calc-type'),
      calcSquare = document.querySelector('.calc-square'),
      calcDay = document.querySelector('.calc-day'),
      calcCount = document.querySelector('.calc-count'),
      totalValue = document.getElementById('total');

    checkInput(calcBlock, /[\D]/);

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

  // send ajax form

  const sendForm = () => {
    const errorMessage = "Что-то пошло не так...",
      loadMessage = "Загрузка...",
      successMessage = 'Спасибо! Мы скоро с вами свяжемся!';

    const form1 = document.getElementById('form1'),
      form2 = document.getElementById('form2'),
      form3 = document.getElementById('form3');

    checkInput(form1, /[^\+\d]/, 'input[name="user_phone"]');
    checkInput(form1, /[^А-Яа-яЁё\ ]/, 'input[name="user_name"]');

    checkInput(form2, /[^\+\d]/, 'input[name="user_phone"]');
    checkInput(form2, /[^А-Яа-яЁё\ ]/, 'input[name="user_name"]');
    checkInput(form2, /[^А-Яа-яЁё\ ]/, 'input[name="user_message"]');

    checkInput(form3, /[^\+\d]/, 'input[name="user_phone"]');
    checkInput(form3, /[^А-Яа-яЁё\ ]/, 'input[name="user_name"]');


    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: #fff;';

    const postData = (body) => {
        return fetch('./server.php', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(body)
        });
      },
      clearInput = (form) => {
        [...form.elements].forEach((elem) => {
          if (elem.matches('input')) {
            elem.value = '';
          }
        });
      },
      readForm = (form, event) => {
        event.preventDefault();
        form.append(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form);
        let body = {};

        formData.forEach((val, key) => {
          body[key] = val;
        });

        postData(body)
          .then((response) => {
            if (response.status !== 200) {
              throw new Error(response.statusText);
            }
            statusMessage.textContent = successMessage;
          })
          .catch((error) => {
            statusMessage.textContent = errorMessage;
          });

        clearInput(form);
      };

    form1.addEventListener('submit', (event) => {
      readForm(form1, event);
    });

    form2.addEventListener('submit', (event) => {
      readForm(form2, event);
    });

    form3.addEventListener('submit', (event) => {
      readForm(form3, event);
    });

  };

  sendForm();

});
