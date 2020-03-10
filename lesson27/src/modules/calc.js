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
