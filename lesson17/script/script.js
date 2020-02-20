'use strict';
window.addEventListener('DOMContentLoaded', () => {

  function countTimer(deadline) {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');


    const getTimeRemaning = () => {
        const dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = Math.floor(timeRemaining % 60),
          minutes = Math.floor((timeRemaining / 60) % 60),
          hours = Math.floor(timeRemaining / 60 / 60);

        return {
          hours,
          minutes,
          seconds
        };
      },
      updateClock = () => {

      };



    const timer = getTimeRemaning();

    timerHours.textContent = timer.hours;
    timerMinutes.textContent = timer.minutes;
    timerSeconds.textContent = timer.seconds;

  }

  countTimer(`22 february 2020`);

});
