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
        scores: 85
    },
    {
        name: "Michael",
        age: 20,
        isMarried: false,
        scores: 89
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
]

const newArr = students.map((st) => st.name);
console.log(newArr);

const newHi = students.map((st) => `<li> Hi, ${st.name}! you have ${st.scores} scores. </li> `);
console.log(newHi);

