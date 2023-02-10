let a = prompt ("Введите значение");
a = +a;

if (isNaN(a)) {
    console.log("NaN");
}

else {
    console.log(typeof a);
}

if (a% 2===0) {
    console.log("чётное");
}

else if (a% 1===0) {
    console.log("нечётное");
}

else {
    alert ("Упс, кажется, вы ошиблись");
}