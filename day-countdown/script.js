const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const loadingEl = document.getElementById("loading");
const containerEl = document.getElementsByClassName("container")[0];

const someDay = new Date(2022, 11, 24);

function countdown() {
    let now = new Date();

    let diff = someDay - now;

    const days = Math.floor(diff / 1000 / 60 / 60 / 24);
    const hours = Math.floor(diff / 1000 / 60 / 60 % 24);
    const minutes = Math.floor(diff / 1000 / 60 % 60);
    const seconds = Math.floor(diff / 1000 % 60);

    
    daysEl.innerHTML = days.toString();
    hoursEl.innerHTML = hours.toString().padStart(2,'0');
    minutesEl.innerHTML = minutes.toString().padStart(2, '0');
    secondsEl.innerHTML = seconds.toString().padStart(2, '0');

}

setInterval(countdown, 1000);

setTimeout(() => {
    loadingEl.remove();
    containerEl.style.display = 'flex';
}, 1000);
