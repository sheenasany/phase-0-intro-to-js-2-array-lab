const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat(name) {
    cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    cats.shift();
}

function appendCat(name) {
    const newcats = [...cats, "Broom"];
    return (newcats);
}

function prependCat(name) {
    const newcats = ["Arnold", ...cats];
    return (newcats);
}

function removeLastCat() {
    return (cats.slice(0, cats.length - 1));
}

function removeFirstCat() {
    return (cats.slice(1));
}
