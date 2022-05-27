// Заднание 1
// let a = prompt("Скажите привет")
// alert(a);

// Задание 2
// let num = +prompt('Введите первое число');
// let num1 = +prompt('Введите второе число');
// let num2 = +prompt('Введите третье число');
// alert(num + num1 + num2);

// Задание 3
// let userName = prompt("Как вас зовут?");
// let userAge = prompt("Ваш возраст?");
// if (userAge >= 18) {
//   alert(`Добро пожаловать ${userName}!`);
// } else {
//   alert(`Простите ${userName} доступ закрыт!`);
// }
// Вариант 2 (с тернарным оператором)
// let result =
//   userAge >= 18
//     ? `Добро пожаловать ${userName}!`
//     : `Простите ${userName} доступ закрыт!`;
// alert(result);

// Задание 4       (C тернарным оператором что то не понял как решить)
// let quastion = confirm("Хотите ввести название блока?");
// if (quastion === false) {
//   alert("Элементу не присвоен класс");
// } else if (quastion === true) {
//   let nameBlock = prompt("Введите название блока");
//   let quastion1 = confirm("Хотите ввести название элемента?");
//   if (quastion1 === false) {
//     alert(nameBlock);
//   } else if (quastion1 === true) {
//     let nameElement = prompt("Введите название элемента");
//     let quastion2 = confirm("Хотите ввести название модификатора?");
//     if (quastion2 === false) {
//       alert(nameBlock + " " + nameElement);
//     } else if (quastion2 === true) {
//       let nameMode = prompt("Введите название модификатора");
//       console.log(nameBlock + " " + nameElement + " " + nameMode);
//     } else {
//       console.log(nameBlock + " " + nameElement);
//     }
//   }
// }

// Задача 5
let enterFirstNum = +prompt("Введите первое число");
let enterSecondtNum = +prompt("Введите второе число");
let action = prompt("выберите нужную арифметическую операцию");
// if (action === "+") {
//   alert(enterFirstNum + enterSecondtNum);
// } else if (action === "-") {
//   alert(enterFirstNum - enterSecondtNum);
// } else if (action === "*") {
//   alert(enterFirstNum * enterSecondtNum);
// } else if (action === "/") {
//   alert(enterFirstNum / enterSecondtNum);
// } else {
//   alert("операция не выбрана");
// }

// С тернарным оператором (разобрался методом тыка)
let result =
  action == "+"
    ? enterFirstNum + enterSecondtNum
    : action == "-"
    ? enterFirstNum - enterSecondtNum
    : action == "*"
    ? enterFirstNum * enterSecondtNum
    : action == "/"
    ? enterFirstNum / enterSecondtNum
    : "Операция не выбрана";
console.log(result);
