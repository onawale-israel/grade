let Israel = 92
let Daniel = 84
let Ikmat = 82
let Treasure = 80

if (Israel >= 80 && Israel <= 100) {
    console.log("Israel got an A!")
}
if (Daniel >= 80 && Daniel <= 100) {
    console.log("Daniel got an A!")
}
if (Ikmat >= 80 && Ikmat <= 100) {
    console.log("Ikmat got an A!")
}
if (Treasure >= 80 && Treasure <= 100) {
    console.log("Treasure got an A!")
}

if (Israel >= 70 && Israel < 80) {
    console.log("Israel got a B!")
}
if (Daniel >= 70 && Daniel < 80) {
    console.log("Daniel got a B!")
}
if (Ikmat >= 70 && Ikmat < 80) {
    console.log("Ikmat got a B!")
}
if (Treasure >= 70 && Treasure < 80) {
    console.log("Treasure got a B!")
}

if (Israel >= 60 && Israel < 70) {
    console.log("Israel got a C!")
}
if (Daniel >= 60 && Daniel < 70) {
    console.log("Daniel got a C!")
}
if (Ikmat >= 60 && Ikmat < 70) {
    console.log("Ikmat got a C!")
}
if (Treasure >= 60 && Treasure < 70) {
    console.log("Treasure got a C!")
}

if (Israel >= 50 && Israel < 60) {
    console.log("Israel got a D!")
}
if (Daniel >= 50 && Daniel < 60) {
    console.log("Daniel got a D!")
}
if (Ikmat >= 50 && Ikmat < 60) {
    console.log("Ikmat got a D!")
}
if (Treasure >= 50 && Treasure < 60) {
    console.log("Treasure got a D!")
}

if (Israel < 50 && Israel >= 40) {
    console.log("Israel got an F!")
}
if (Daniel < 50 && Daniel >= 40) {
    console.log("Daniel got an F!")
}
if (Ikmat < 50 && Ikmat >= 40) {
    console.log("Ikmat got an F!")
}
if (Treasure < 50 && Treasure >= 40) {
    console.log("Treasure got an F!")
}

else if (Israel < 40 || Daniel < 40 || Ikmat < 40 || Treasure < 40) {
    console.log("You failed the class!")
}

grade = "A"

let label = grade == "B" ? "score is between 70 and 79" : "score is above 80";
console.log(label)

let intuition = { b: "dull", m: "mediocre", s: "smart", g: "genius" }

switch (intuition.m) {
    case intuition.b:
        console.log(intuition.b)
        break;
    case intuition.m:
         console.log(intuition.m)
        break;
    case intuition.s:
        console.log(intuition.s)
        break;
    case intuition.g:
        console.log(intuition.g)
        break;
    default:
        console.log("How smart do you think you are?")
}

a = 80
b = 70

function add(input1, input2) {
    return input1 + input2;
}
console.log(add(a, b))

function subtract(input1, input2) {
    return input1 - input2;
}
console.log(subtract(a, b))

function multiply(input1, input2) {
    return input1 * input2;
}
console.log(multiply(a, b))

function divide(input1, input2) {
    return input1 / input2;
}
console.log(Math.round(divide(a, b) * 100) / 100)

c = "Indivisibility"

function count(){
    for (let i = 0; i < c.length; i++) {
    return c.length;
    }
}
console.log(count())

a = "Hello"
b = "is Learning JavaScript"
function concatenate(input1, input2) {
    return input1 + " " + input2;
}
console.log(concatenate(a, b))


let name = "Israel"

name = "Daniel"

function greet(name) {
    return "Hello " + name + "!";
}

greet(name);
console.log(greet(name))