const month = ["Jan", "Feb", "Mar",
    "Apr", "May", "Jun",
    "Jul", "Aug", "Sep",
    "Oct", "Nov", "Dec"];

const now = document.querySelector('.now');
const countdown = document.querySelector('.countdown');
const items = document.querySelectorAll('.countdown-format h4');

let dateTime = new Date();
now.textContent = `Today is ${dateTime.getDate()} ${month[dateTime.getMonth()]} 
                ${dateTime.getFullYear()} ${dateTime.getHours()}:${dateTime.getMinutes()}`;

const futureTime = (new Date(2024, 00, 01)).getTime();
// const futureTime = (new Date(2023, 00, 17)).getTime();

function getRemainingTime() {
    const today = (new Date()).getTime();
    const t = futureTime - today;


    // values in ms
    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    // calculate all values
    let days = t / oneDay;
    days = Math.floor(days);

    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    // set values array
    const values = [days, hours, minutes, seconds];

    function format(item) {
        if (item < 10) {
            return item = `0${item}`;
        }
        return item;
    }

    items.forEach(function (item, index) {
        item.innerHTML = format(values[index]);
    })
    if (t < 0) {
        clearInterval(count);
        countdown.innerHTML = `<h4 class="expired">Owww! the countdown is over!</h4>`;
    }
}

//countdown 
let count = setInterval(getRemainingTime, 1000)

getRemainingTime();