function dogAgeInHumanYears() {
    var dogAge = prompt("how old is your dog?");

    var humanAge = ((dogAge - 2) * 4) + 21;
    alert("your dog is " + humanAge + " years old in human years");
}

function helloAlert() {
    var name = prompt("what is your name:");

    var firstChar = name.slice(0, 1);
    var upperCasefirstChar = firstChar.toUpperCase();
    var restOfName = name.slice(1, name.lenth);
    restOfName = restOfName.toLowerCase();
    var capitalizedName = upperCasefirstChar + restOfName;

    alert("hello " + capitalizedName);
}

function lifeInWeeks(age) {
    var restLife = 90 - age;
    var days = restLife * 365;
    var weeks = restLife * 52;
    var months = restLife * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}

// string = tekst ' ; number ; bigint => 2*53 ; boolean = true false ; null ; undefined ; symbol

function getMilk(money, cost) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    console.log("buy " + calcBattles(money, cost) + " bottles of milk")

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return calcChange(money, cost);
}

function calcBattles(startingMoney, costPerBottle) {
    var numberOfBottles = Math.floor(startingMoney / costPerBottle);
    return numberOfBottles;
}

function calcChange(startingAmount, costPerBottle) {
    var change = startingAmount % costPerBottle;
    return change;
}

console.log("Hello master, hire is your " + getMilk(11, 1.5) + " change.")


function getBeer(euro) {
    var beerCost = Math.floor(euro / 0.99);
    console.log("you can have " + beerCost + " for it");
}

function bmiCalculator(weight, height) {
    var bmi = weight / (height * height);
    return Math.round(bmi);
}

function loveCalculator() {
    prompt("What is your name?");
    prompt("What is their name?");

    var loveScore = Math.random();
    loveScore = loveScore * 100;
    loveScore = Math.floor(loveScore) + 1;
    console.log("Your love score is " + loveScore + "%");
}