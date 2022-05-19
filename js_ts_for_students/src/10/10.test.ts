import {AddOneBookToUser, ChangeOneBookToUser, UserWithBooksType} from "./10";

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

    const movedUser = ChangeOneBookToUser(user, 'css', 'ts')

    expect(user).not.toBe(movedUser)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[1]).toBe('ts')
    expect(user.books.length).toBe(3)
})