console.time("answer time");


/* navigation */

const menu = document.querySelector('.menu--js');

menu.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})

/* navigation */

const greet = (age, name) => {

    console.log(`witaj ${name} masz ${age}`);
}


const heading = document.querySelector(".main__header-js");
heading.innerHTML = "Black Hole";

document.querySelector(".main__header-description--js").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id voluptates eveniet, maxime quaerat vero pariatur aliquam illum suscipit iure beatae vel veniam porro sequi, ut unde quis tempore in.";

function calculate(myNumber) {
    console.log(`Dostałem ${myNumber}`);
    myNumber = myNumber * 7;
    return myNumber
}


console.timeLog("answer time");


const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed !!!`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    isLightOn: true,
    age: 1,
    comander: {
        name: 'Darth Vader',
        age: 44,
    }
}

const admin = {
    alwaysOnDuty: true,
    name: 'Sephiroth',
    
}

const myPropety = 'name';

const showMeProperty = (myPropety) => {
    console.log(`Twoja wlasnosc ${myPropety} to: ${deathStar[myPropety]}`);
}


function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

createContent('.section__header--js', 'nie piatek');

const a = (querySelectorContent, content) => {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}

a('.section__header--sjs', 'nie sobota');

const myRange = document.querySelector('.range--js');
/* myRange.value */


function whoIsOlder() {
    if (deathStar.age > deathStar.comander.age) {
        console.log('GŚ jest starsza');
    } else if (deathStar.age === deathStar.comander.age) {
        console.log('GŚ i V maja tyle samo lat');
    } else {
        console.log('Vader jest starszy');
    }
}

console.log(console);
console.log(deathStar);
deathStar.fire('kiss');

showMeProperty('isOperating');

console.timeEnd("answer time");


/*
 console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
*/