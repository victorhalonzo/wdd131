const DAYS = 6;
const today = new Date();
//console.log(today.getDate());

for (let index = 0; index < DAYS; index++) {
    let day = today.getDate() + index + 1;
    let nextday = new Date();
    nextday.setDate(day);
    let nameDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(nextday);
    console.log(nameDay)
}