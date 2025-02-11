const monthYear = document.getElementById("month-year");
const calendarDates = document.getElementById("calendar-dates");
const prevMonth = document.getElementById("prev-month");
const nextMonth = document.getElementById("next-month");

let currentDate = new Date();

function renderCalendar(date) {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();

    // Onyesha mwezi na mwaka
    monthYear.textContent = date.toLocaleString("default", { month: "long", year: "numeric" });

    // Safisha tarehe za awali
    calendarDates.innerHTML = "";

    // Ongeza nafasi tupu kabla ya tarehe ya kwanza
    for (let i = 0; i < firstDay; i++) {
        calendarDates.innerHTML += `<div class="empty"></div>`;
    }

    // Ongeza tarehe zote za mwezi
    for (let day = 1; day <= lastDate; day++) {
        const today = new Date();
        const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();

        calendarDates.innerHTML += `<div class="${isToday ? "today" : ""}">${day}</div>`;
    }
}

// Event listeners kwa mishale ya kwenda mbele/nyuma
prevMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
});

nextMonth.addEventListener("click", () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
});

// Anzisha kalenda
renderCalendar(currentDate);
