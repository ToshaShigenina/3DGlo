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
