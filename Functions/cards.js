let count = 0;

function cardCounter(card) {

  if (card === 2 || card === 3 || card === 4 || card === 5 || card === 6) {
    count += 1;

  } else if (card === 10 || card === "J" || card === "Q" || card === "K" || card === "A") {
    count -= 1;
  }

  return count > 0 ? `${count} Bet` : `${count} Hold`;
}

console.log(cardCounter(90));

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