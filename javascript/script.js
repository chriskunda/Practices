const Player = (name, marker) => ({ name, marker });

const Gameboard = (() => {
  const board = Array(9).fill("");

  const getBoard = () => [...board];

  const placeMark = (index, marker) => {
    if (!Number.isInteger(index) || index < 0 || index >= board.length) {
      return false;
    }

    if (board[index] !== "") {
      return false;
    }

    board[index] = marker;
    return true;
  };

  const resetBoard = () => {
    board.fill("");
  };

  return { getBoard, placeMark, resetBoard };
})();

const GameController = (() => {
  const winningLines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const scores = {
    X: 0,
    O: 0,
    ties: 0,
  };

  let players = [Player("Player X", "X"), Player("Player O", "O")];
  let activePlayer = players[0];
  let gameOver = false;
  let winner = null;

  const cleanName = (name, fallback) => {
    const trimmedName = name.trim();
    return trimmedName === "" ? fallback : trimmedName;
  };

  const startGame = (playerXName = "Player X", playerOName = "Player O") => {
    players = [
      Player(cleanName(playerXName, "Player X"), "X"),
      Player(cleanName(playerOName, "Player O"), "O"),
    ];

    activePlayer = players[0];
    gameOver = false;
    winner = null;
    Gameboard.resetBoard();

    return getState();
  };

  const switchPlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };

  const getWinningLine = () => {
    const board = Gameboard.getBoard();

    return (
      winningLines.find(([first, second, third]) => {
        return board[first] !== "" && board[first] === board[second] && board[first] === board[third];
      }) || null
    );
  };

  const boardIsFull = () => {
    return Gameboard.getBoard().every((cell) => cell !== "");
  };

  const playRound = (index) => {
    if (gameOver) {
      return {
        accepted: false,
        message: "Start a new game to keep playing.",
        ...getState(),
      };
    }

    const acceptedMove = Gameboard.placeMark(index, activePlayer.marker);

    if (!acceptedMove) {
      return {
        accepted: false,
        message: "Choose an empty square.",
        ...getState(),
      };
    }

    const winningLine = getWinningLine();

    if (winningLine) {
      winner = activePlayer;
      gameOver = true;
      scores[activePlayer.marker] += 1;

      return {
        accepted: true,
        message: `${winner.name} wins!`,
        ...getState(),
      };
    }

    if (boardIsFull()) {
      gameOver = true;
      scores.ties += 1;

      return {
        accepted: true,
        message: "It is a tie.",
        ...getState(),
      };
    }

    switchPlayerTurn();

    return {
      accepted: true,
      message: `${activePlayer.name}'s turn (${activePlayer.marker})`,
      ...getState(),
    };
  };

  const getState = () => ({
    board: Gameboard.getBoard(),
    players: [...players],
    activePlayer,
    gameOver,
    winner,
    winningLine: getWinningLine(),
    scores: { ...scores },
  });

  return { startGame, playRound, getState };
})();

const DisplayController = (() => {
  const setupForm = document.querySelector("#setup-form");
  const playerXInput = document.querySelector("#player-x");
  const playerOInput = document.querySelector("#player-o");
  const statusDisplay = document.querySelector("#status");
  const cells = [...document.querySelectorAll(".cell")];
  const xScore = document.querySelector("#x-score");
  const oScore = document.querySelector("#o-score");
  const tieScore = document.querySelector("#tie-score");

  const updateScoreboard = (scores) => {
    xScore.textContent = scores.X;
    oScore.textContent = scores.O;
    tieScore.textContent = scores.ties;
  };

  const updateStatus = (state, fallbackMessage) => {
    if (fallbackMessage) {
      statusDisplay.textContent = fallbackMessage;
      return;
    }

    if (state.winner) {
      statusDisplay.textContent = `${state.winner.name} wins!`;
      return;
    }

    if (state.gameOver) {
      statusDisplay.textContent = "It is a tie.";
      return;
    }

    statusDisplay.textContent = `${state.activePlayer.name}'s turn (${state.activePlayer.marker})`;
  };

  const renderBoard = (state) => {
    cells.forEach((cell, index) => {
      const marker = state.board[index];
      const isWinningCell = state.winningLine?.includes(index);

      cell.textContent = marker;
      cell.disabled = marker !== "" || state.gameOver;
      cell.classList.toggle("x", marker === "X");
      cell.classList.toggle("o", marker === "O");
      cell.classList.toggle("winning-cell", Boolean(isWinningCell));
      cell.setAttribute("aria-label", marker ? `Square ${index + 1}: ${marker}` : `Square ${index + 1}: empty`);
    });
  };

  const render = (message = "") => {
    const state = GameController.getState();
    renderBoard(state);
    updateScoreboard(state.scores);
    updateStatus(state, message);
  };

  const handleCellClick = (event) => {
    const index = Number(event.currentTarget.dataset.index);
    const result = GameController.playRound(index);
    render(result.message);
  };

  const handleStartGame = (event) => {
    event.preventDefault();
    const state = GameController.startGame(playerXInput.value, playerOInput.value);
    render(`${state.activePlayer.name}'s turn (${state.activePlayer.marker})`);
  };

  const init = () => {
    setupForm.addEventListener("submit", handleStartGame);
    cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
    GameController.startGame(playerXInput.value, playerOInput.value);
    render();
  };

  return { init };
})();

DisplayController.init();
