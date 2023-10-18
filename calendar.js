// calendar-widget.js

(function () {
    // Create a function for the calendar widget
    function createCalendar(container, color) {
        // Get the current date
        const today = new Date();
        const year = today.getFullYear();
        const month = today.getMonth();

        // Create a new Date object for the first day of the month
        const firstDayOfMonth = new Date(year, month, 1);

        // Create a table for the calendar
        const calendarTable = document.createElement('table');

        // Create the header row
        const headerRow = calendarTable.insertRow();
        const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        daysOfWeek.forEach(day => {
            const cell = headerRow.insertCell();
            cell.textContent = day;
        });

        // Calculate the number of days in the month
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // Create rows and cells for the days
        let dayCounter = 1;
        for (let i = 0; i < 6; i++) {
            const row = calendarTable.insertRow();
            for (let j = 0; j < 7; j++) {
                if (i === 0 && j < firstDayOfMonth.getDay()) {
                    // Add empty cells for days before the first day of the month
                    const cell = row.insertCell();
                } else if (dayCounter <= daysInMonth) {
                    // Create cells for the days of the month
                    const cell = row.insertCell();
                    cell.textContent = dayCounter;
                    dayCounter++;
                }
            }
        }

        // Set the background color based on the color prop
        calendarTable.style.backgroundColor = color;

        // Append the calendar to the container
        container.appendChild(calendarTable);
    }

    // Export the createCalendar function to be accessible by users
    window.createCalendar = createCalendar;
})();
