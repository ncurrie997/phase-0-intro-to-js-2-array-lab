// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
]
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const appNewCats = [...cats, "Broom"]
    return appNewCats;
}

function prependCat(name) {
    const preNewCat = ["Arnold", ...cats];
    return preNewCat;
}

function removeLastCat() {
    return cats.slice(0, cats.length-1);
    
}

function removeFirstCat() {
    return cats.slice(1);
}