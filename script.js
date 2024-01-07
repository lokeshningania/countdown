function updateCountdown() {
    const targetDate = new Date('September 1, 2029 00:00:00').getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    document.getElementById('days').querySelector('.number').innerText = days;
    document.getElementById('hours').querySelector('.number').innerText = hours;
    document.getElementById('minutes').querySelector('.number').innerText = minutes;
}

setInterval(updateCountdown, 1000);
