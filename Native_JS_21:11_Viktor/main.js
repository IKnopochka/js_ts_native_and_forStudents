const students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 120
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

const getName = s => s.name;

const itMap = (array, callback) => {
    const newArr = [];
    for (let i = 0; i < array.length; i++) {
        const result = callback(array[i]);
        newArr[i] = result;
    }
    return newArr;
}
 console.log(itMap(students, getName))

console.log(students.map(s => s))
console.log(students.map(s => ({...s})))
