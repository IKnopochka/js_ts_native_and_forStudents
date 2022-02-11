
// @ts-ignore
test("should take old men older then 90", () => {
    const ages = [18, 20, 22, 1, 100, 90, 14];
    const oldAges = ages.filter(a => a > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test("get only completed tasks", () => {
    const tasks = [
        {id: 1, title: "Bread", isDone:false},
        {id: 2, title: "Milk", isDone:true},
        {id: 3, title: 'Salt', isDone:false},
        {id: 4, title: 'Sugar', isDone:true}
    ]

    const completedtasks = tasks.filter(task => task.isDone)
    expect(completedtasks.length).toBe(2);
    expect(completedtasks[0].id).toBe(2);
    expect(completedtasks[1].id).toBe(4);
})