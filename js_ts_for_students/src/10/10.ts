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
    return {
        ...object,
        address: {
            ...object.address,
            title: name}
    }

};
export const UpgradeUserLaptop = (object: UserWithLaptopType, name: string) => {
    return {
        ...object,
        laptop: {
            ...object.laptop,
            title: name
        }
    }
};
