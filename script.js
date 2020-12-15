'use strict'

//Task 1

let first = +prompt("Введите первое значение", "");
let second = +prompt("Введите второе значение", "");

if ((isFinite(first) && (isFinite(second)))) {
    let result = first.toString(second);
    alert (result);
} else {
    alert ("Not a number");
}

//Task 2

let first = prompt("Введите первое значение", "");
let second = prompt("Введите второе значение", "");

let parseFirst = parseInt(first);
let parseSecond = parseInt(second);

if ((!isNaN(parseFirst)) && (!isNaN(parseSecond))) {
    let third = prompt("Введите третье значение", "");

    alert(third);
    alert(parseFirst + parseSecond);
    alert(parseFirst / parseSecond);
} else {
    alert ('Not a number');
}