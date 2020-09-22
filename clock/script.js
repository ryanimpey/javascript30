document.addEventListener("DOMContentLoaded", () => {
    const secondHand = document.querySelector('.hand-second');
    const minuteHand = document.querySelector('.hand-minute');
    const hourHand = document.querySelector('.hand-hour');

    const secondTimer = setInterval(() => {
        const time = new Date();

        secondHand.style.transform = `rotate(${((time.getSeconds() / 60) * 360) + 90}deg)`; // +90 due to initial offset in style.css
        minuteHand.style.transform =`rotate(${((time.getMinutes() / 60) * 360) + 90}deg)`
        hourHand.style.transform = `rotate(${((time.getHours() / 12) * 360) + 90}deg)`


    }, 1000)
});