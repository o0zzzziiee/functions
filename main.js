function sayHello(name) {
  return "Привет, " + name + "!";
}

console.log(sayHello("Anna"));
function greetUser(name, timeOfDay) {
  if (!timeOfDay) {
    timeOfDay = "день";
  }
  let greeting = "Добрый";
  if (timeOfDay === "утро") {
    greeting = "Доброе";
  }
  return greeting + " " + timeOfDay + ", " + name + "!";
}
console.log(greetUser("Анна"));
console.log(greetUser("Иван", "утро"));

function isEven(number) {
  if (isNaN(number)) {
    return "Пожалуйста, введите число";
  } else if (number % 2 == 0) {
    return "чётное";
  } else {
    return "нечётное";
  }
}
4. Функция + Условие + Цикл
Напишите функцию repeatText, которая принимает строку text и число n.
Если n меньше 1, функция должна возвращать "Неверное значение n".
Если n больше или равно 1, функция должна возвращать строку, где text повторяется n раз через пробел.
Пример вызова:

repeatText('Привет', 3); // "Привет Привет Привет"
repeatText('Привет', 0); // "Неверное значение n"

function repeatText(text, n) {
  if (n < 1) {
    return "Неверное значение n";
  } else {
    let iteration = "";
    for (let i = 0; i < n; i++) {
      iteration += text;
      if (i < n - 1) {
        iteration += " ";
      }
    }
    return iteration;
  }
}

function square(x) {
  return "Квадрат числа " + x + " равен " + x ** 2;
}

let y = square;

console.log(y(4));
