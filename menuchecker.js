let lunches = [];

const addLunchToEnd = (arr, str) => {
  arr.push(str);

  console.log(`${str} added to the end of the lunch menu.`);

  return arr;
};


const addLunchToStart = (arr, str) => {
  arr.unshift(str);

  console.log(`${str} added to the start of the lunch menu.`);

  return arr;
};


const removeLastLunch = (arr) => {

  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removed = arr.pop();

  console.log(`${removed} removed from the end of the lunch menu.`);

  return arr;
};


const removeFirstLunch = (arr) => {

  if (arr.length === 0) {
    console.log("No lunches to remove.");
    return arr;
  }

  const removed = arr.shift();

  console.log(`${removed} removed from the start of the lunch menu.`);

  return arr;
};


const getRandomLunch = (arr) => {

  if (arr.length === 0) {
    console.log("No lunches available.");
    return;
  }

  const randomItem =
    arr[Math.floor(Math.random() * arr.length)];

  console.log(`Randomly selected lunch: ${randomItem}`);
};


const showLunchMenu = (arr) => {

  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log(`Menu items: ${arr.join(", ")}`);
  }

};