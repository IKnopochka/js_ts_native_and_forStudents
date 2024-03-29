// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

export function sum(...nums: Array<number>): number {
    // console.log(nums)
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
    }
    return sum
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number,b: number,c: number): string {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    if (a + b > c && a + c > b && b + c > a) {
        if (a === b && b === c) {
            return '10'
        } else if (a === b || b === c || c === a){
          return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number{
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    let numInString = number.toString().split('')
    let sum = 0;
    for (let i = 0; i < numInString.length; i++) {
        sum += parseInt(numInString[i], 10)
    }
    return sum
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался

    /*for (let i = 0; i < arr.length; i++){
        if(i % 2 === 0) {
            sumEven += arr[i]
        } else {
            sumOdd += arr[i]
        }
    }
    return sumEven > sumOdd*/
    let sumEven = 0;
    let sumOdd = 0;
    arr.map(m => arr.indexOf(m) % 2 === 0 ? sumEven += m : sumOdd += m)
    return sumEven > sumOdd
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return array.filter(n => n > 0 && Number.isInteger(n)).map(m => m**2)
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): number {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    /*if (N == 1) return 1
    return N + sumFirstNumbers(N-1)*/
    return N * (N + 1) / 2
}

// ...и "лапку" вверх!!!!


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let result = []
    for (let i = 0; i < banknotes.length; i++) {
        let x = Math.floor(amountOfMoney / banknotes[i])
        for (let j = x; j > 0; j--){
            result.push(banknotes[i])
        }
        amountOfMoney %= banknotes[i]
    }
    return result
}