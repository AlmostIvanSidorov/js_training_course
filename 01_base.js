//alert("Hello World!")

// Переменные camelCase
// const isProgramer = true //boolean
//const lastName = 'Sidorov' //string
//let age = 26 //number

//age = 28

//const _private = 'private'

//console.log('Person name:' + lastName + ' Person age:' + age)

//const lastName = prompt("Write your last name")

//alert('Person name:' + lastName + ' Person age:' + age)

// const currentYear = 2022
// const birthAge = 1990

// let c = 32
// c += 10

// const age = currentYear - birthAge()

// console.log(c)

//4 типа данных

const isProgramer = true

console.log(typeof isProgramer)

courseStatus = 'pending'

if (courseStatus === 'pending') {
    console.log(1)
} else if (courseStatus === 'ready'){
    console.log(2)
}

const isReady = false

// if (isReady){
//     console.log('ready')
// } else {
//     console.log('not ready')
// }


//Тернарное выражение

isReady ? console.log('ready'):console.log('not readyyyy')

//functions

// function yourAge(year) {
//     return console.log(2022-year)
//     }

// yourAge(1990)
// yourAge(1980)

//massive

function logConsole(yourFunc) {
    return console.log(yourFunc)
}

const cars = ["i","am","who"]

logConsole(cars)
logConsole(cars[1])
logConsole(cars[4])
//loops

for (let i=0; i < cars.length; i++) {
    logConsole(cars[i])
}

for (let car of cars) {
    logConsole(car)
}

const person = {
    lastName: 'Sidorov',
    name: 'Ivan',
    languages: ['ru','en'],
    hasWife: true,
    greet: function() {
       return console.log('greet')
    }

}

person.greet()