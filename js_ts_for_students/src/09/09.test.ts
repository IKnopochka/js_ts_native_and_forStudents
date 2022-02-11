type UserType = {
    name: string
    age: number
}

function incAge(u: UserType) {
    u.age++;
}

test("big test", () => {

    let user = {
        name: "Irina",
        age: 27
    }

    incAge(user)

    expect(user.age).toBe(28);

    const s = user;

    s.age = 1000;

    expect(user.age).toBe(1000);

})

test("array test", () => {

    let user = [
        {
            name: "Irina",
            age: 27
        }
    ]

    const man = user;

    man.push({name: "Michail", age: 10})

    expect(user[1]).toEqual({name: "Michail", age: 10});

})

test("value type test", () => {

    let userCount = 100;
    let adminsCount = userCount;


    expect(user[1]).toEqual({name: "Michail", age: 10});

})