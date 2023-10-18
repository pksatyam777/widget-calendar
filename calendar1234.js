// calendar-widget.js

(function () {
    function injectStyles(css) {
        var style = document.createElement('style');
        style.type = 'text/css';
        style.innerHTML = css;
        document.head.appendChild(style);
    }

    // Inject the CSS styles
    injectStyles(`
        html {
            font-family: sans-serif;
            font-size: 15px;
            line-height: 1.4;
            color: #444;
        }

        body {
            margin: 0;
            background: #504f4f;
            font-size: 1em;
        }

        .wrapper {
            margin: 15px auto;
            max-width: 1100px;
        }

        .container-calendar {
            background: #ffffff;
            padding: 15px;
            max-width: 475px;
            margin: 0 auto;
            overflow: auto;
        }

        .button-container-calendar button {
            cursor: pointer;
            display: inline-block;
            zoom: 1;
            background: #00a2b7;
            color: #fff;
            border: 1px solid #0aa2b5;
            border-radius: 4px;
            padding: 5px 10px;
        }

        .table-calendar {
            border-collapse: collapse;
            width: 100%;
        }

        .table-calendar td, .table-calendar th {
            padding: 5px;
            border: 1px solid #e2e2e2;
            text-align: center;
            vertical-align: top;
        }

        .date-picker.selected {
            font-weight: bold;
            outline: 1px dashed #00BCD4;
        }

        .date-picker.selected span {
            border-bottom: 2px solid currentColor;
        }

        /* sunday */
        .date-picker:nth-child(1) {
            color: red;
        }

        /* friday */
        .date-picker:nth-child(6) {
            color: green;
        }

        #monthAndYear {
            text-align: center;
            margin-top: 0;
        }

        .button-container-calendar {
            position: relative;
            margin-bottom: 1em;
            overflow: hidden;
            clear: both;
        }

        #previous {
            float: left;
        }

        #next {
            float: right;
        }

        .footer-container-calendar {
            margin-top: 1em;
            border-top: 1px solid #dadada;
            padding: 10px 0;
        }

        .footer-container-calendar select {
            cursor: pointer;
            display: inline-block;
            zoom: 1;
            background: #ffffff;
            color: #585858;
            border: 1px solid #bfc5c5;
            border-radius: 3px;
            padding: 5px 1em;
        }
    `);
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
        console.log("hello")
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
