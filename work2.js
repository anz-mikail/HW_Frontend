//------------------------------------ Задание № 1 --------------------------------------------

function evenNumb (list) {
    let even = 0,
        odd = 0,
        zero = 0;

    for (let i = 0; i < list.length; i++) {
        if (typeof list[i] === 'number' && !isNaN(list[i])) {
            if (list[i] === 0) {
                zero += 1;
            } else if (list[i] % 2 === 0) {
                even += 1;
            } else {
                odd += 1;
            }
        }
    }
    console.log('количество чётных чисел: ', even)
    console.log('количество нечётных чисел: ', odd)
    console.log('количество нулей: ', zero)
}

const arr = [0, null, NaN, 0, 1, 2, 4, "str"]


evenNumb(arr);

//------------------------------------ Задание № 2 --------------------------------------------

function simpleNumb (value) {
    if (0 < value && value <= 1000 && typeof value === 'number') {
        if (value % 2 === 0) {
            console.log(`число ${value} простое!`);
        } else {
            console.log(`число ${value} сложное!`);
        }
    } else if ( typeof value !== 'number' ) {
        console.log('введите число!')
    } else
        console.log('Данные не верны!');
}

simpleNumb(111)

//------------------------------------ Задание № 3 --------------------------------------------

function secondNumb(numb1) {
    return function (numb2) {
        return numb1 + numb2;
    };
}

const numbSum = secondNumb(7);

console.log(numbSum(6));

//------------------------------------ Задание № 4 --------------------------------------------

function sumTimer (a, b) {
    let counter = a;

    let timer = setInterval(function () {
        console.log(counter);
        if (counter >= b) {
            clearInterval(timer);
        }
        counter++
    }, 1000)
}

sumTimer (5, 15)

//------------------------------------ Задание № 5 --------------------------------------------


const exponentiation = (x, n) => console.log(x ** n);

exponentiation(4, 4);