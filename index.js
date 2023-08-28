const cats = ['Milo', 'Otis', 'Garfield']

const destructivelyAppendCat = (name) => {
    return cats.push(name)
}

const destructivelyPrependCat = (name) => {
    return cats.unshift(name)
}

const destructivelyRemoveLastCat = () => {
    return cats.pop()
}

const destructivelyRemoveFirstCat = () => {
    return cats.shift()
}

const appendCat = (name) => {
    return [...cats, name]
}

const prependCat = (name) => {
    return [name, ...cats]
}

const removeLastCat = () => {
    return cats.slice(0, cats.length - 1)
}

const removeFirstCat = () => {
    return cats.slice(1)
}