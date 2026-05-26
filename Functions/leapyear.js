const isLeapYear = (check) => {
  if ((check % 400 === 0) || (check % 100 !== 0 && check % 4 === 0)) {
    return `${check} is a leap year.`;
  } else {
    return `${check} is not a leap year.`;
  }
}

let year = 2000;
let result = isLeapYear(year);

console.log(result);