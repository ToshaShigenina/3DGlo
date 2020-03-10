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

export default countTimer;
