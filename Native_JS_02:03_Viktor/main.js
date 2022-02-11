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


const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

//отсортировать студенов по успеваемости
console.log(students.sort((a, b) => b.scores - a.scores))

//alphabetically
console.log(students.sort((a, b) => a.name <= b.name ? -1 : 1))