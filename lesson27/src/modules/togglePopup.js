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

export default togglePopUp;
