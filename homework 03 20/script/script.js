let menu = {
    width: 200,
    hight: 300,
    title: "my menu"
};

// первую задачу не совсем понял. поидее должен быть цикл, с помощью которого можно было бы пройтись по всем свойствам и менять их, но такого нет. for..in для этого не подходит. а вызывать свойства через индекс не возможно.

let arr = [
    {
    id: 1,
    title: "bicycle",
    price: 45000,
    discount: 10
    },
    {
    id: 2,
    title: "roller-skates",
    price: 15000,
    discount: 5
    },
    {
    id: 3,
    title: "Kick scooter",
    price: 10000,
    discount: 30
    },
    {
    id: 4,
    title: "skis",
    price: 25000,
    discount: 20
    },
    {
    id: 5,
    title: "skate",
    price: 10000,
    discount: 0
}
];

console.log("");
console.log("2.1");
console.log("");

for (let i = 0; i < arr.length; i ++) {
    console.log(arr[i]["title"]);

}

console.log("");
console.log("2.2");
console.log("");

for (let i = 0; i < arr.length; i ++) {
    console.log(`${arr[i]["title"]} ${arr[i]["price"]}`);
}

console.log("");
console.log("2.3");
console.log("");

for (let i = 0; i < arr.length; i ++) {
    console.log(`${arr[i]["title"]} ${arr[i]["discount"]}`);
}

// console.log("");
// console.log("ФУНКЦИИ");
// console.log("1");
// console.log("");

// function checkTwoNumbers(a, b) {
//     if (a % 2 != 0) {
//         if (b % 2 != 0) {
//             return (a + b);
//         } else {
//             return a;
//         }
//     }
//     if (b % 2 != 0) {

//         return b;
//     }
//     if (a % 2 == 0 && b % 2 == 0) {
//         let sum = (a * b);
//         return sum; 
//     }
// }

// console.log( checkTwoNumbers( Number(prompt()), Number(prompt()) ) );


// console.log("");
// console.log("2");
// console.log("");

// function calcSecondsToDays(a) {
//     return (a / 60 / 60 / 24);
// }

// console.log( calcSecondsToDays( Number(prompt()) ) );

// console.log("");
// console.log("3");
// console.log("");

// function isPrime(a) {
//     for (let i = 2; i < a; i ++) {
//         if (a % i == 0) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log( isPrime( Number( prompt() ) ) );

// console.log("");
// console.log("4");
// console.log("");

// function showMinNumber(a, b) {
//     if (a < b) {
//         console.log(a);
//     }
//     else if (b < a) {
//         console.log(b);
//     }
// }

// showMinNumber ( Number ( prompt() ), Number ( prompt () ) );

console.log("");
console.log("5");
console.log("");

function getArray (a, b) {
    if (b < a) {
        let temp = a;
        a = b; 
        b = temp;
    }
    let numbers = [];
    for (let i = a; i <= b; i ++) {
        numbers.push(i);
    }
    return numbers;
}

let numbers = getArray (Number ( prompt()), Number( prompt() ) );

console.log(numbers);