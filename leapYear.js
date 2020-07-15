function leapYear(strtYear, endYear) {
    let yeardata = [];
    for (var i = strtYear; i < endYear; i++) {
        if (i % 400 == 0 || i % 100 != 0 && i % 4 == 0) {
            yeardata.push(i + ' is a leap year.....');
        } else {
            yeardata.push(i + ' is not a leap year.....');
        }
    }
    return yeardata;
}


console.log(leapYear(2000, 2200));

// let year = 3000;
// for (i = 2000; i < year; i++) {
//     if (i % 400 == 0) {
//         console.log(year[i]);
//     } else if (i % 100 != 0 && i % 4 == 0) {
//         console.log(i);
//     } else {
//         console.log(i);
//     }
// }

// function leapYear(year) {
//     if (year % 400 == 0) {
//         return year + ' is a leap year.....';
//     } else if (year % 100 != 0 && year % 4 == 0) {
//         return year + ' is a leap year.....';
//     } else {
//         return year + ' is not a leap year.....';
//     }
// }

// console.log(leapYear(2004));


// function getLeapYears(countStart, countEnd) {
//     const leapYears = [];
//     const fromYear = countStart;
//     const toYear = countEnd;
//     for (let i = fromYear; i <= toYear; i++) {
//         if (i % 4 == 0 && i % 100 !== 100 || i % 400 == 0) {
//             leapYears.push(i + ": is a leap year ");
//         } else {
//             leapYears.push(i + ": is not a leap year ");
//         }
//     }
//     return leapYears;
// }
// console.log(getLeapYears(2000, 2020));