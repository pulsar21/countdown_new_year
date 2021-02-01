const newYear = '1 Jan 2022'

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secondsEl = document.getElementById('seconds');

const countdown = () => {
    const newYearDate = new Date(newYear);
    const currentDate = new Date();

    const totalSec = (newYearDate - currentDate) / 1000;

    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const mins = Math.floor(totalSec / 60) % 60;
    const seconds = Math.floor(totalSec % 60);

    daysEl.innerHTML = formatDate(days);
    hoursEl.innerHTML = formatDate(hours);
    minsEl.innerHTML = formatDate(mins);
    secondsEl.innerHTML = formatDate(seconds);

    console.log(seconds);

};

const formatDate = (value) => {
    return value < 10 ? `0${value}` : value;
}


countdown();

setInterval(countdown, 1000)
