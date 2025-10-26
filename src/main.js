// Імпорт функцій з модулів
import { add, multiply, power } from "./modules/math.js";
import {
  reverseString,
  capitalizeWords,
  countWords,
} from "./modules/string.js";
import { updateElementText, toggleElementVisibility } from "./modules/dom.js";
import { NumberGuessingGame } from "./modules/game.js";

// Ініціалізація гри
const game = new NumberGuessingGame(1, 100);

// Обробники подій для математичних операцій
document.getElementById("add").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = add(num1, num2);
  updateElementText("math-result", `Результат: ${num1} + ${num2} = ${result}`);
});

document.getElementById("multiply").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = multiply(num1, num2);
  updateElementText("math-result", `Результат: ${num1} × ${num2} = ${result}`);
});

document.getElementById("power").addEventListener("click", () => {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const result = power(num1, num2);
  updateElementText("math-result", `Результат: ${num1}^${num2} = ${result}`);
});

// Обробники подій для роботи з текстом
document.getElementById("reverse").addEventListener("click", () => {
  const text = document.getElementById("text-input").value;
  const result = reverseString(text);
  updateElementText("string-result", `Обернений текст: ${result}`);
});

document.getElementById("capitalize").addEventListener("click", () => {
  const text = document.getElementById("text-input").value;
  const result = capitalizeWords(text);
  updateElementText("string-result", `Текст з великими літерами: ${result}`);
});

document.getElementById("count").addEventListener("click", () => {
  const text = document.getElementById("text-input").value;
  const result = countWords(text);
  updateElementText("string-result", `Кількість слів: ${result}`);
});

// Обробники подій для гри
document.getElementById("guess-btn").addEventListener("click", () => {
  const guessInput = document.getElementById("guess-input");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    updateElementText("game-result", "Будь ласка, введіть число від 1 до 100");
    return;
  }

  const result = game.makeGuess(guess);
  updateElementText("game-result", result.message);

  if (result.success) {
    toggleElementVisibility("new-game", true);
    document.getElementById("guess-btn").disabled = true;
  }

  guessInput.value = "";
  guessInput.focus();
});

document.getElementById("new-game").addEventListener("click", () => {
  game.startNewGame();
  updateElementText(
    "game-result",
    "Нова гра розпочата! Вгадайте число від 1 до 100"
  );
  toggleElementVisibility("new-game", false);
  document.getElementById("guess-btn").disabled = false;
  document.getElementById("guess-input").value = "";
  document.getElementById("guess-input").focus();
});

// Ініціалізація при завантаженні сторінки
document.addEventListener("DOMContentLoaded", () => {
  updateElementText("game-result", "Вгадайте число від 1 до 100");
  document.getElementById("guess-input").focus();
});
