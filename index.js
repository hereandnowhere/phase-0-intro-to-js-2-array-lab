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

function destructivelyRemoveFirstCat(cats){
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

function removeLastCat(cats){
    const copyOfCats = cats.slice(0,-1)
    return copyOfCats;
}

function removeFirstCat(cats){
    const copyOfCats = cats.slice(1)
    return copyOfCats;
}