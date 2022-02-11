const names = ['Bob', 'Alex', 'Donald', 'John', 'ann', 100, 5]

console.log(names.sort())

const numbers = [100, 3333, 3, 9, 42, 1010]

const compare = (a , b) => {
    if (a < b) {
        return -1
    } else {
        return 1
    }
}

const compare1 = (a , b) => a - b;

console.log(numbers.sort(compare).reverse())
