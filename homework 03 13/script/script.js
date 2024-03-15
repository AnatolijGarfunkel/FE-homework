//________1______________________________________________
console.log("1). ________________________________________");
console.log("");

let d = 7;
console.log(d);
console.log(`Квадрат = ${d**2}`);
console.log(`Куб = ${d**3}`);

//________2______________________________________________
console.log("");
console.log("2). ________________________________________");
console.log("");

let number1 = 0;
let number2 = 0;
number1 = Number(prompt("2)"));
number2 = Number(prompt("2)"));

console.log(`Первое число = ${number1}`);
console.log(`Второе число = ${number2}`);
console.log("");

if (number1 > number2) {

    console.log(`Сумма = ${number1 + number2}`);

} else if (number1 < number2) {

    console.log(`Произведение = ${number1 * number2}`);

} else {

    console.log("Числа одинаковые");

}

//________3______________________________________________
console.log("");
console.log("3). ________________________________________");
console.log("");

number1 = Number(prompt("3)"));
console.log(number1);
if (number1 > 0) {

    console.log(`Куб = ${number1**3}`);

}

//________4______________________________________________
console.log("");
console.log("4). ________________________________________");
console.log("");

number1 = Number(prompt("Количество учеников в классе"));
number2 = Number(prompt("Количество стульев в кабинете"));
console.log(`Количество учеников = ${number1}`);
console.log(`Количество стульев = ${number2}`);

if (number1 <= number2) {

    console.log("Стульев хватает");

} else {

    console.log("Стульев не хватает");

}

//________5______________________________________________
console.log("");
console.log("5). ________________________________________");
console.log("");

for (let i = 1; i < 10; i ++) {

    console.log(i);

}

// создание массива чисел.
// позволил себе прогуглить, как создавать слуйные числа.
// лень было от руки прописывать.
// это единственное, что подглядел.
console.log("");
console.log("Массив чисел.");
console.log("");

let numbers = [];

for (let i = 0; i < 10; i ++) {
    numbers.push(Math.round(Math.random() * 50));
}

for (let i = 0; i < numbers.length; i ++) {
    console.log(`numbers[${i}] = ${numbers[i]}`);;
}

//________6______________________________________________
console.log("");
console.log("6). ________________________________________");
console.log("");
console.log("Числа больше/равно 15");
console.log("");

for (let i = 0; i < numbers.length; i ++) {
    if (numbers[i] >= 15) {
        console.log(numbers[i]);
    }
}

//________7______________________________________________
console.log("");
console.log("7). ________________________________________");
console.log("");
console.log("Нечётные числа");
console.log("");

for (let i = 0; i < numbers.length; i ++) {

    if (numbers[i] % 2 != 0) {
        console.log(numbers[i]);
    }
}

//________8______________________________________________
console.log("");
console.log("8). ________________________________________");
console.log("");
console.log("Индекс кратный 3-ём.");
console.log("");

for (let i = 0; i < numbers.length; i ++) {
    if (i % 3 == 0 && i != 0) {
        console.log(`numbers[${i}] = ${numbers[i]}`);
    }
}

//________9______________________________________________
console.log("");
console.log("9). ________________________________________");
console.log("");
console.log("Сумма нечётных чисел.");
console.log("");

let sum = 0;
for (let i = 0; i < numbers.length; i ++) {

    if (numbers[i] % 2 != 0) {
        if (numbers[i] < 10) {
            console.log(`numbers[${i}] = ${numbers[i]} -  нечетное число ${sum} + ${numbers[i]} = ${sum += numbers[i]}`);
        } else {
            console.log(`numbers[${i}] = ${numbers[i]} - нечетное число ${sum} + ${numbers[i]} = ${sum += numbers[i]}`);
        }
    } else {
        console.log(`numbers[${i}] = ${numbers[i]}`);
    }
}

console.log(sum);

//________10_____________________________________________
console.log("");
console.log("10).  _______________________________________");
console.log("");
console.log("Разность суммы чётных и нечётных чисел.");
console.log("");

let evensum = 0;
let oddsum = 0;

for (let i = 0; i < numbers.length; i ++) {

    if (numbers[i] % 2 != 0) {
        if (numbers[i] < 10) {
            console.log(`numbers[${i}] = ${numbers[i]}    -   нечетное число    ${oddsum} + ${numbers[i]} = ${oddsum += numbers[i]}`);
        } else {
            console.log(`numbers[${i}] = ${numbers[i]}   -   нечетное число    ${oddsum} + ${numbers[i]} = ${oddsum += numbers[i]}`);
        }
    } else {
        if (numbers[i] < 10) {
            console.log(`numbers[${i}] = ${numbers[i]}    -   четное число      ${evensum} + ${numbers[i]} = ${evensum += numbers[i]}`);
        } else {
            console.log(`numbers[${i}] = ${numbers[i]}   -   четное число      ${evensum} + ${numbers[i]} = ${evensum += numbers[i]}`);
        }
    }
}

console.log("");
if (evensum > oddsum) {
    console.log(`Сумма чётных чисел ${evensum} - сумму нечётных чисел ${oddsum} = ${evensum - oddsum}`);
} else {
    console.log(`Сумма нечётных чисел ${oddsum} - сумму чётных чисел ${evensum} = ${oddsum - evensum}`);
}
