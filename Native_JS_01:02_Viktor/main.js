const todoListId_1 = "23hg-87kf"
const todoListId_2 = "89hg-64sf"

const todoLists = [
    {
        id: todoListId_1,
        title: 'What to learn',
        filter: 'all',
        /*tasks: [
            {id: '45uk', title: 'HTML', isDone: true},
            {id: '323J', title: 'CSS', isDone: true},
            {id: '95VB', title: 'React', isDone: true}
        ]*/
    },
    {
        id: todoListId_2,
        title: 'What to buy',
        filter: 'all',
        /*tasks: [
            {id: '78DS', title: 'Meat', isDone: true},
            {id: '02DD', title: 'Milk', isDone: false},
            {id: '54fs', title: 'Rice', isDone: true}
        ]*/
    }
]

const tasks = {
    [todoListId_1]: [
        {id: '45uk', title: 'HTML', isDone: true},
        {id: '323J', title: 'CSS', isDone: false},
        {id: '95VB', title: 'React', isDone: true}
    ],
    [todoListId_2] : [
        {id: '78DS', title: 'Meat', isDone: true},
        {id: '02DD', title: 'Milk', isDone: false},
        {id: '54fs', title: 'Rice', isDone: true}
    ]
}

console.log(tasks[todoListId_1])
console.log(tasks[todoListId_1].filter(t => t.isDone === false))
console.log([...tasks[todoListId_1]])
console.log([...tasks[todoListId_1]] === tasks[todoListId_1])
console.log([...tasks[todoListId_1], {id: '53ds', title: 'Re', isDone: false}])

console.log({...tasks, [todoListId_1] : [...tasks[todoListId_1], {id: '03ds', title: 'Rerfgeve', isDone: false}]})
console.log({...tasks})

//reduce

const nums = [1,2,3,4,5]
//sum of elements
console.log(nums.reduce((sum, presentElement) => sum + presentElement, 0))
//max element
console.log(nums.reduce((max, el) => max > el ? max : el ))

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

//sum of scores of all students
console.log(students.reduce((sum, st) => sum + st.scores, 0))
//the best st
console.log(students.reduce((best, st) => best.scores > st.scores ? best : st))


console.log(students.reduce((arr, st) => {return arr.concat({...st, scores: st.scores + 10})},[]))
console.log(students.reduce((data, st) => {
    data[st.name] = [st.age, st.scores]
    return data} ,{}))

const string = "!!Hi!!!"
console.log(string.split('i')[0] + 'i')
//console.log(string.split('i').filter(s => s !== '!').join(''))
