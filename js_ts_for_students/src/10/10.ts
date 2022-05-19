export type UserType = {
    name: string,
    address: {
        title: string
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export const MoveUser = (object: UserWithLaptopType, name: string) => {
    const copy = {
        ...object,
        address: {...object.address}
    }
    copy.address.title = name;

    return copy;

};
