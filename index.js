const cats = ["Milo", "Otis", "Garfield"];

function beforeEach(cats){
    cats.length = 0;
    cats.push("Milo", "Otis", "Garfield")
    return cats;
}

function destructivelyAppendCat(name){
    cats.push(name)
    return cats;
}

function destructivelyPrependCat(name){
    cats.unshift(name)
    return cats;
}

function destructivelyRemoveLastCat(name){
    cats.pop(name)
    return cats;
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
    return cats;
}

function appendCat(name){
    const copyOfCats = [...cats, `${name}`]
    return copyOfCats;
}

function prependCat(name){
    const copyOfCats = [`${name}`, ...cats]
    return copyOfCats;
}

function removeLastCat(name){
    const copyOfCats = cats.slice(0,-1)
    return copyOfCats;
}

function removeFirstCat(name){
    const copyOfCats = cats.slice(1)
    return copyOfCats;
}

console.log(beforeEach(cats));

console.log(destructivelyAppendCat("Ralph"));
console.log(beforeEach(cats));

console.log(destructivelyPrependCat("Bob"));
console.log(beforeEach(cats));

console.log(destructivelyRemoveLastCat());
console.log(beforeEach(cats));

console.log(destructivelyRemoveFirstCat());
console.log(beforeEach(cats));

console.log(appendCat("Broom"));

console.log(prependCat("Arnold"));

console.log(removeLastCat());

console.log(removeFirstCat());