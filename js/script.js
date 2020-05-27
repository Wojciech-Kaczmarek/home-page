console.time("answer time");






const heading = document.querySelector(".main__header-js");
heading.innerHTML = "Black Hole";

document.querySelector(".main__header-description--js").innerHTML = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam id voluptates eveniet, maxime quaerat vero pariatur aliquam illum suscipit iure beatae vel veniam porro sequi, ut unde quis tempore in.";

function calculate(myNumber) {
    console.log(`Dostałem ${myNumber}`);
    myNumber = myNumber * 7;
    return myNumber
}


console.timeLog("answer time");





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

console.log(console);



console.timeEnd("answer time");

/*
 console.time("answer time");
alert("Click to continue");
console.timeLog("answer time");
alert("Do a bunch of other stuff...");
console.timeEnd("answer time");
*/