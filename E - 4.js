//---------------------------------- Задание № 1 -----------------------------------

function hostFunc(object) {
    console.log(object);
}

const obj1 = {
    a: 1,
    b: 2,
    c: "str"
}

hostFunc(obj1);

//---------------------------------- Задание № 2 -----------------------------------

const str1 = 'a'

const str2 = 'f'

function strInObj(str, object) {
    console.log(str in object);
}

strInObj(str1, obj1)

strInObj(str2, obj1)

//---------------------------------- Задание № 3 -----------------------------------

function newObject() {
     let obj = Object.create(null);
     console.log(obj);
}

newObject()

//---------------------------------- Задание № 4 -----------------------------------

function ChekElectro(name, on) {
    this.name = name;
    this.on = on;
    if (this.on) {
        console.log(`${name} в сети`);
    }
    else {
        console.log(`${name} не в сети`);
    }
}

ChekElectro.prototype.electricConsumption = function (power) {
    if (this.on) {
        if (power > 50) {
            console.log(`${this.name} потребляет много энергии`);
        }
        else {
            console.log(`${this.name} потребляет мало энергии`);
        }
    }
    else {
        console.log(`включите ${this.name} в сеть`);
    }
}

const computer = new ChekElectro('компьютер', true)
const desk_lamp = new ChekElectro('настольная лампа', true)
const vacuum_cleaner = new ChekElectro('пылесос', false)


computer.electricConsumption(68)
desk_lamp.electricConsumption(7)
vacuum_cleaner.electricConsumption(55)

//---------------------------------- Задание № 5 -----------------------------------

class ElectroTehnic {
    constructor (name, on) {
        this.name = name;
        this.on = on;
        if (this.on) {
            console.log(`${name} в сети`);
        } else {
            console.log(`${name} не в сети`);
        }
    }
}

class Consumption extends ElectroTehnic {
    function (power) {
        if (this.on) {
            if (power > 50) {
                console.log(`${this.name} потребляет много энергии`);
            }
            else {
                console.log(`${this.name} потребляет мало энергии`);
            }
        }
        else {
            console.log(`включите ${this.name} в сеть`);
        }
    }
}

const computer2 = new Consumption('компьютер2', true,)
const desk_lamp2 = new Consumption('настольная лампа2', true)
const vacuum_cleaner2 = new Consumption('пылесос2', false)

computer2.function(56)
desk_lamp2.function(4)
vacuum_cleaner2.function(70)