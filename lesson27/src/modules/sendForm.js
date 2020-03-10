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
