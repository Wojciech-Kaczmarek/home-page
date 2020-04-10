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

//helloAlert();

// string = tekst ' ; number ; bigint => 2*53 ; boolean = true false ; null ; undefined ; symbol

function getMilk(money) {
    console.log("leaveHouse");
    console.log("moveRight");
    console.log("moveRight");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveUp");
    console.log("moveRight");
    console.log("moveRight");

    var numberOfBottles = Math.floor(money / 1.5);
    console.log("buy " + numberOfBottles + " buttle of milk");

    console.log("moveLeft");
    console.log("moveLeft");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveDown");
    console.log("moveLeft");
    console.log("moveLeft");
    console.log("enterHouse");

    return money % 1.5;

}

function getBeer(euro) {
    var beerCost = (euro * 0.99);
    console.log("you need to have " + beerCost + " euro for it");
}

function lifeInWeeks(age) {
    var restLife = 90 - age;
    var days = restLife * 365;
    var weeks = restLife * 52;
    var months = restLife * 12;

    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.");
}