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
