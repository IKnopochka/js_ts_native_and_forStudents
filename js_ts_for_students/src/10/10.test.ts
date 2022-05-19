import {MoveUser, UserWithLaptopType} from "./10";

test ('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Mouse',
        address: {
            title: 'Cat'
        },
        laptop: {
            title: 'Mac'
        }
    }

    const movedUser = MoveUser(user, 'Kitty')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.title).toBe('Kitty')
    expect(user.address.title).toBe('Cat')
})