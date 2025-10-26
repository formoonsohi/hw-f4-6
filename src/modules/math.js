// Функція для додавання двох чисел
export function add(a, b) {
  return a + b;
}

// Функція для множення двох чисел
export function multiply(a, b) {
  return a * b;
}

// Функція для піднесення до степеня
export function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Функція для знаходження випадкового числа в діапазоні
export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функція для перевірки чи число парне
export function isEven(num) {
  return num % 2 === 0;
}
