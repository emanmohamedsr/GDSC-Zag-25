
let getDateForm = document.querySelector("#get-date-form");
getDateForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const day = parseInt(document.querySelector("input[name='day']").value);
    const month = parseInt(document.querySelector("input[name='month']").value);
    const year = parseInt(document.querySelector("input[name='year']").value);
    if (!validDate(day, month, year))
        return;
    calculateAge(day, month, year);
    getDateForm.reset();
})

function validDay(day, month) {
    // monthsWith31Days = [1, 3, 5, 7, 8, 10, 12];
    let monthsWith30Days = [4, 6, 9, 11];
    let validationSpan = document.querySelector("input[name='day'] + span");
    if (isNaN(day)) {
        validationSpan.textContent = "This field is required";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    if (day < 1 || day > 31) {
        validationSpan.textContent = "Must be a valid day";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    if (monthsWith30Days.includes(month) && day > 30) {
        validationSpan.textContent = "Must be a valid date";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    if (month === 2 && day > 28) {
        validationSpan.textContent = "Must be a valid date";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    validationSpan.textContent = "";
    validationSpan.parentElement.classList.remove("invalid");
    return true;
}

function validMonth(month) {
    let validationSpan = document.querySelector("input[name='month'] + span");
    if (isNaN(month)) {
        validationSpan.textContent = "This field is required";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    if (month < 1 || month > 12) {
        validationSpan.textContent = "Must be a valid month";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    validationSpan.textContent = "";
    validationSpan.parentElement.classList.remove("invalid");
    return true;
}

function validYear(year) {
    let validationSpan = document.querySelector("input[name='year'] + span");
    let currentYear = new Date().getFullYear();
    if (isNaN(year)) {
        validationSpan.textContent = "This field is required";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    if (year >= currentYear) {
        validationSpan.textContent = "Must be in the past";
        validationSpan.parentElement.classList.add("invalid");
        return false;
    }
    validationSpan.textContent = "";
    validationSpan.parentElement.classList.remove("invalid");
    return true;
}

function validDate(day, month, year) {
    return (validDay(day, month) && validMonth(month) && validYear(year));
}


function calculateAge(day, month, year) {
    let birthDate = new Date(year, month - 1, day);
    let today = new Date();
    let actualYears = today.getFullYear() - birthDate.getFullYear();
    let actualMonths = today.getMonth() - birthDate.getMonth();
    let actualDays = today.getDate() - birthDate.getDate();
    if (actualDays < 0) {
        actualMonths--;
        let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
        actualDays += lastMonth.getDate();
    }
    if (actualMonths < 0) {
        actualYears--;
        actualMonths += 12;
    }
    displayAge(actualYears, actualMonths, actualDays);
}

function displayAge(years, months, days) {
    let yearsSpan = document.querySelector('#age-display .years span ');
    let monthsSpan = document.querySelector('#age-display .months span');
    let daysSpan = document.querySelector('#age-display .days span');

    yearsSpan.textContent = years;
    monthsSpan.textContent = months;
    daysSpan.textContent = days;
}

// function reset(yearsSpan, monthsSpan, daysSpan) {
//     yearsSpan.textContent = "--";
//     monthsSpan.textContent = "--";
//     daysSpan.textContent = "--";
// }


//  {
//     margin: 0;
//     padding: 0;
//     box- sizing: border - box;
// }

// :root {
//     /* primary colors  */
//     Purple: hsl(259, 100 %, 65 %);
//     Light - red: hsl(0, 100 %, 67 %);
//     /* Neutral */
//     White: hsl(0, 0 %, 100 %);
//     Off - white: hsl(0, 0 %, 94 %);
//     Light - grey: hsl(0, 0 %, 86 %);
//     Smokey - grey: hsl(0, 1 %, 44 %);
//     Off - black: hsl(0, 0 %, 8 %);
//     /* Input Font Size */
//     input - font - size: 32px;
// }

// /* get fonts */
// @font-face {
//     font - family: "Poppins-Bold";
//     src: url("../assets/fonts/Poppins-Bold.ttf") format("truetype");
// }

// @font-face {
//     font - family: "Poppins-BoldItalic";
//     src: url("../assets/fonts/Poppins-BoldItalic.ttf") format("truetype");
// }

// @font-face {
//     font - family: "Poppins-ExtraBold";
//     src: url("../assets/fonts/Poppins-ExtraBold.ttf") format("truetype");
// }

// @font-face {
//     font - family: "Poppins-ExtraBoldItalic";
//     src: url("../assets/fonts/Poppins-ExtraBoldItalic.ttf") format("truetype");
// }

// @font-face {
//     font - family: "Poppins-Italic";
//     src: url("../assets/fonts/Poppins-Italic.ttf") format("truetype");
// }

// @font-face {
//     font - family: "Poppins-Regular";
//     src: url("../assets/fonts/Poppins-Regular.ttf") format("truetype");
// }