// Функція для створення елемента
export function createElement(tag, className, text = "") {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (text) element.textContent = text;
  return element;
}

// Функція для додавання елемента до DOM
export function appendToParent(parentId, element) {
  const parent = document.getElementById(parentId);
  if (parent) {
    parent.appendChild(element);
  }
}

// Функція для оновлення тексту елемента
export function updateElementText(elementId, text) {
  const element = document.getElementById(elementId);
  if (element) {
    element.textContent = text;
  }
}

// Функція для показу/приховування елемента
export function toggleElementVisibility(elementId, show) {
  const element = document.getElementById(elementId);
  if (element) {
    element.style.display = show ? "block" : "none";
  }
}

// Функція для очищення вмісту елемента
export function clearElement(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.innerHTML = "";
  }
}
