const daysTag = document.querySelector('.days-month')
const currentDate = document.querySelector('.current-date')
const prevIcon = document.querySelector('#prev');
const nextIcon = document.querySelector('#next');
console.log(daysTag)
console.log(currentDate)
let date = new Date()
let currentYear = date.getFullYear() 
let currentMonth = date.getMonth()

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay()
    const lastDateOfMonth = new Date(currentYear, currentMonth + 1, 0).getDate()
    const lastDayOfMonth = new Date(currentYear, currentMonth, lastDateOfMonth).getDay()
    const lastDateOfLastMonth = new Date(currentYear, currentMonth, 0).getDate();

    let liTagHtml = "";
    for (let i = firstDayOfMonth; i > 0; i--) {
        liTagHtml += `<li class="day-in-month inactive">${lastDateOfLastMonth - i + 1}</li>`
    }

    for (let i = 1; i <= lastDateOfMonth; i++) {
        let isToday = i === date.getDate() && currentMonth === new Date().getMonth() && currentYear === new Date().getFullYear() ? "active" : "";
        liTagHtml += `<li class="day-in-month ${isToday}">${i}</li>`
    }
    
    for (let i = lastDayOfMonth; i < 6; i++) {
        liTagHtml += `<li class="day-in-month inactive">${i - lastDayOfMonth + 1}</li>`
    }
    currentDate.innerHTML = `${months[currentMonth]} ${currentYear}`
    daysTag.innerHTML = liTagHtml

}

prevIcon.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar();
});

nextIcon.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar();
});


renderCalendar()