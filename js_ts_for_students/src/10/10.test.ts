import {RemoveOneBookFromUser, UserWithBooksType} from "./10";

test ('add new books to user', () => {
    let user: UserWithBooksType = {
        name: 'Mouse',
        address: {
            title: 'Cat'
        },
        laptop: {
            title: 'Mac'
        },
        books: ['React', 'css', 'HTML']
    }

    const movedUser = RemoveOneBookFromUser(user, 'css')

    expect(user).not.toBe(movedUser)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[1]).toBe('HTML')
    expect(movedUser.books).toStrictEqual(['React', 'HTML'])
    expect(movedUser.books.length).toBe(2)
})