// calendar-widget.js

(function () {
    // Helper function to generate a range of years
    function generate_year_range(start, end) {
        var years = "";
        for (var year = start; year <= end; year++) {
            years += "<option value='" + year + "'>" + year + "</option>";
        }
        return years;
    }

    // Helper function to determine the number of days in a month
    function daysInMonth(iMonth, iYear) {
        return 32 - new Date(iYear, iMonth, 32).getDate();
    }

    // Create the calendar
    function createCalendar(container, color) {
        // Get the current date
        var today = new Date();
        var currentMonth = today.getMonth();
        var currentYear = today.getFullYear();
        var selectYear = document.createElement("select");
        var selectMonth = document.createElement("select");

        // Generate the year range
        var createYear = generate_year_range(1970, 2050);

        // Create the calendar HTML structure
        var calendarHTML = `
            <h3 id="monthAndYear"></h3>
            <div class="button-container-calendar">
                <button id="previous">&#8249;</button>
                <button id="next">&#8250;</button>
            </div>
            <table class="table-calendar" id="calendar" data-lang="en">
                <thead id="thead-month"></thead>
                <tbody id="calendar-body"></tbody>
            </table>
            <div class="footer-container-calendar">
                <label for="month">Jump To: </label>
            </div>
        `;

        container.innerHTML = calendarHTML;

        selectYear.id = "year";
        selectYear.innerHTML = createYear;

        selectMonth.id = "month";
        selectMonth.innerHTML = `
            <option value=0>Jan</option>
            <option value=1>Feb</option>
            <option value=2>Mar</option>
            <option value=3>Apr</option>
            <option value=4>May</option>
            <option value=5>Jun</option>
            <option value=6>Jul</option>
            <option value=7>Aug</option>
            <option value=8>Sep</option>
            <option value=9>Oct</option>
            <option value=10>Nov</option>
            <option value=11>Dec</option>
        `;

        var footerContainer = document.querySelector(".footer-container-calendar");
        footerContainer.appendChild(selectMonth);
        footerContainer.appendChild(selectYear);

        // Rest of your calendar generation code
        // ...

        // Initialize the calendar
        showCalendar(currentMonth, currentYear);

        // Export functions
        window.next = next;
        window.previous = previous;
        window.jump = jump;
    }

    window.createCalendar = createCalendar;
})();
