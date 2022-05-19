import {UpdateCompanyTitle, UserWithBooksType, UserWithCompaniesType} from "./10";

test ('add new books to user', () => {
    let user: UserWithBooksType & UserWithCompaniesType = {
        name: 'Mouse',
        address: {
            title: 'Cat'
        },
        laptop: {
            title: 'Mac'
        },
        books: ['React', 'css', 'HTML'],
        companies: [
            {id: 1, title: 'Apple'},
            {id: 2, title: 'Microsoft'},
            {id: 2, title: 'Epam'}
        ]
    }

    const userCopy = UpdateCompanyTitle(user, 2, 'LinkedIn')

    expect(user).not.toBe(userCopy)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(user.companies[1].title).toBe('Microsoft')
    expect(userCopy.companies[1].title).toBe('LinkedIn')
    expect(userCopy.companies.length).toBe(3)
})