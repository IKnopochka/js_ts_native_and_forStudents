type UserType = {
    name: string
    age: number
}

function incAge (u: UserType) {
    u.age ++;
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