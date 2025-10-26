import { getRandomNumber } from "./math.js";

export class NumberGuessingGame {
  constructor(min = 1, max = 100) {
    this.min = min;
    this.max = max;
    this.targetNumber = 0;
    this.attempts = 0;
    this.isGameOver = false;
    this.startNewGame();
  }

  startNewGame() {
    this.targetNumber = getRandomNumber(this.min, this.max);
    this.attempts = 0;
    this.isGameOver = false;
  }

  makeGuess(guess) {
    if (this.isGameOver) {
      return { success: false, message: "Гра закінчена. Почніть нову гру." };
    }

    this.attempts++;

    if (guess === this.targetNumber) {
      this.isGameOver = true;
      return {
        success: true,
        message: `Вітаємо! Ви вгадали число ${this.targetNumber} за ${this.attempts} спроб.`,
      };
    } else if (guess < this.targetNumber) {
      return {
        success: false,
        message: "Занадто мало! Спробуйте більше число.",
      };
    } else {
      return {
        success: false,
        message: "Занадто багато! Спробуйте менше число.",
      };
    }
  }

  getGameState() {
    return {
      targetNumber: this.targetNumber,
      attempts: this.attempts,
      isGameOver: this.isGameOver,
    };
  }
}
