let questions = [
  {
    category: "Science",
    question: "What planet is known as the Red Planet?",
    choices: ["Mars", "Earth", "Venus"],
    answer: "Mars"
  },

  {
    category: "Math",
    question: "What is 5 + 5?",
    choices: ["10", "15", "20"],
    answer: "10"
  },

  {
    category: "Geography",
    question: "What is the capital of France?",
    choices: ["Paris", "London", "Rome"],
    answer: "Paris"
  },

  {
    category: "Sports",
    question: "How many players are on a soccer team?",
    choices: ["11", "7", "5"],
    answer: "11"
  },

  {
    category: "History",
    question: "Who discovered America?",
    choices: ["Christopher Columbus", "Napoleon", "Julius Caesar"],
    answer: "Christopher Columbus"
  }
];

const getRandomQuestion = (quest) => {
  const randomObject =
    quest[Math.floor(Math.random() * quest.length)];

  return randomObject;
};

const getRandomComputerChoice = (arr) => {
  const randomChoice =
    arr[Math.floor(Math.random() * arr.length)];

  return randomChoice;
};

const getResults = (quest, comp) => {
  if (comp === quest.answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${quest.answer}`;
  }
};