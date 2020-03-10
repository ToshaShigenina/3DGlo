const checkInput = (elemParent, reg, selector = 'input') => {
  elemParent.addEventListener('input', (event) => {
    let target = event.target;

    if (target.matches(selector)) {
      target.value = target.value.replace(reg, '');
    }
  });
};

export default checkInput;
