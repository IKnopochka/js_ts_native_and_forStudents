const people = [
    {name: "Andrey Petrov", age: 34},
    {name: "Alexander Ivanov", age: 24},
    {name: "Dmitry Sidorov", age: 18}
]

const transformator = (man: any) => (
    {
        stack: ["css, html", "js", "react"],
        firstName: man.split(" ")[0],
        lastName: man.split(" ")[1],
    }
)


//Нужно получить:
const devs = [
    {
        stack: ["css, html", "js", "react"],
        firstName: "Andrew",
        lastName: "Ivanov",
    },
    {
        stack: ["css, html", "js", "react"],
        firstName: "Alexander",
        lastName: "Petrov",
    },
    {
        stack: ["css, html", "js", "react"],
        firstName: "Dmitry",
        lastName: "Sidorov",
    }
]

//correct way to get it

const devs1 = people.map(transformator)