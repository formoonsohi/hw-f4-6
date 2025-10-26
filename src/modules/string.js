// Функція для обертання тексту
export function reverseString(str) {
  return str.split("").reverse().join("");
}

// Функція для перетворення першої літери кожного слова у велику
export function capitalizeWords(str) {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

// Функція для підрахунку слів у тексті
export function countWords(str) {
  return str
    .trim()
    .split(/\s+/)
    .filter((word) => word.length > 0).length;
}

// Функція для перевірки чи текст є паліндромом
export function isPalindrome(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-zа-яё0-9]/g, "");
  return cleanStr === cleanStr.split("").reverse().join("");
}

// Функція для обрізки тексту
export function truncate(str, maxLength) {
  return str.length > maxLength ? str.substring(0, maxLength) + "..." : str;
}
