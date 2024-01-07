function updateCountdown() {
    const now = new Date();
    const targetDate = new Date('September 1, 2029 00:00:00');
    // Calculate the difference in milliseconds
    const total = Date.parse(targetDate) - Date.parse(now);
    
    // Convert the difference to total seconds, minutes, hours, and days
    const totalSeconds = Math.floor(total / 1000);
    const totalMinutes = Math.floor(totalSeconds / 60);
    const totalHours = Math.floor(totalMinutes / 60);
    const totalDays = Math.floor(totalHours / 24);
    
    // Remaining time units for the first row
    const seconds = Math.floor(totalSeconds % 60);
    const minutes = Math.floor(totalMinutes % 60);
    const hours = Math.floor(totalHours % 24);
    const days = Math.floor(totalDays);
    
    // Calculate years, months, and weeks based on total days
    const years = Math.floor(totalDays / 365);
    const months = Math.floor((totalDays % 365) / 30);
    const weeks = Math.floor((totalDays % 365) % 30 / 7);
    const remainingDays = totalDays % 7; // Remaining days after full weeks

    // Update the countdown for the first row (days, hours, minutes, seconds)
    document.getElementById('days').querySelector('.number').innerText = days;
    document.getElementById('hours').querySelector('.number').innerText = hours;
    document.getElementById('minutes').querySelector('.number').innerText = minutes;
    document.getElementById('seconds').querySelector('.number').innerText = seconds;
    
    // Update the extended countdown for the second row (years, months, weeks, remaining days)
    document.getElementById('years').querySelector('.number').innerText = years;
    document.getElementById('months').querySelector('.number').innerText = months;
    document.getElementById('weeks').querySelector('.number').innerText = weeks;
    document.getElementById('total-days').querySelector('.number').innerText = remainingDays;

    if (total <= 0) {
        clearInterval(timeinterval);
    }
}

let timeinterval = setInterval(updateCountdown, 1000);
