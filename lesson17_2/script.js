'use strict';

const now = new Date(),
  dayOfWeek = now.getDay(),
  time = now.toLocaleTimeString('en-US'),
  newYear = new Date('2021'),
  daysToNewYear = Math.floor((newYear - now) / 1000 / 60 / 60 / 24),
  p = document.createElement('p'),
  weeks = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
  dayTime = (hours) => {
    if (hours >= 5 && hours <= 11) {
      return `Доброе утро`;
    }
    if (hours >= 12 && hours <= 16) {
      return `Добрый день`;
    }
    if (hours >= 17 && hours <= 21) {
      return `Добрый вечер`;
    }
    return `Доброй ночи`;
  };

document.body.append(p);

p.innerHTML = `${dayTime(now.getHours())}<br>
Сегодня: ${weeks[dayOfWeek]}<br>
Текущее время: ${time}<br>
До нового года осталось ${daysToNewYear} дней`;
