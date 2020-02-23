'use strict';
window.addEventListener('DOMContentLoaded', () => {

  const countTimer = (deadline) => {
    const timerHours = document.getElementById('timer-hours'),
      timerMinutes = document.getElementById('timer-minutes'),
      timerSeconds = document.getElementById('timer-seconds');

    const beautifyTime = (time) => {
      if (time > 0 && time < 10) {
        return `0${time}`;
      } else if (time <= 0) {
        return `00`;
      }
      return time;
    };

    let day = 24 * 60 * 60; //24 hours

    const getTimeRemaning = () => {
        const dateStop = new Date(deadline).getTime(),
          dateNow = new Date().getTime(),
          timeRemaining = (dateStop - dateNow) / 1000,
          seconds = beautifyTime(Math.floor(timeRemaining % 60)),
          minutes = beautifyTime(Math.floor((timeRemaining / 60) % 60)),
          hours = beautifyTime(Math.floor(timeRemaining / 60 / 60));

        return {
          hours,
          minutes,
          seconds
        };
      },
      dayTimer = () => {
        day--;
        if (day < 0) {
          day = 24 * 60 * 60;
        }

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
  //dayTimer();

});
