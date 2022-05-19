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

export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
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
export const AddNewBookToUser = (object: UserWithBooksType, title: string[]) => {
    return {
        ...object,
        books: [...object.books.concat(title)]
    };
};
export const AddOneBookToUser = (object: UserWithBooksType, title: string) => {

    return {
        ...object,
        books: [...object.books, title]
    };
};
export const ChangeOneBookToUser = (object: UserWithBooksType, oldTitle: string, newTitle: string) => {

    /*const copy = {
        ...object,
        books: [...object.books],
    };
copy.books[copy.books.indexOf(oldTitle)] = newTitle*/

    const copy = {
        ...object,
        books: object.books.map(m => m === oldTitle ? newTitle : m)
    };


    return copy
};
export const RemoveOneBookFromUser = (array: UserWithBooksType, title: string) => {


    return {
        ...array,
        books: array.books.filter(f => f !== title)
    };
};
