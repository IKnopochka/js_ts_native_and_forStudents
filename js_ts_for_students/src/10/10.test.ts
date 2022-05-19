import {MoveUser, UpgradeUserLaptop, UserWithLaptopType} from "./10";

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

    const movedUser = UpgradeUserLaptop(user, 'Mac Pro')

    expect(user).not.toBe(movedUser)
    expect(user.laptop).not.toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)
    expect(movedUser.laptop.title).toBe('Mac Pro')
    expect(user.laptop.title).toBe('Mac')
})