
test("get only completed tasks", () => {

    let props = {
        name: "Irina",
        age: 27,
        lessons: [{title: '1'}, {title: '2'}]
    }

    //const age = props.age;
    //const lessons = props.lessons;

    const {age, lessons} = props;


    expect(age).toBe(27);
    expect(lessons.length).toBe(2);

})