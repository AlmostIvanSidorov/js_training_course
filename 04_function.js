//Functions


//Function Declaration
console.log(greet('Ivan'))

function greet(name) {
    return `Hello ${name}!!!`
}



// Function Expression
const greet2 = function greet2(name) { 
    console.log(`Hello ${name}!`)
}

greet2('Ira')

console.log(typeof greet)

console.dir(greet) // may take a look on function and function is an Object


//Anonimus functions
// let counter = 0

// const interval = setInterval( function(){
//     if (counter === 5) {
//         //clearInterval(interval)
//         console.log('Hi!')
//         counter = 0
//     }else{
//     console.log(++counter)
//     }
// }, 1000)

//Arrow functions

function greet(name) {

}

const arrow = (name) => {
    console.log(`Hi ${name}`)
}


const arrow2 = (name) => console.log(`Hi ${name}`)

arrow('Morty')

arrow('Ricky')

// Default param

const sum = (a=1,b=2) => console.log(a+b)

sum()
sum(4,7)

const sumAll = (...all) => {
    let result = 0
    for (let num of all){
        result += num
    }

    return console.log(result)
}

sumAll(1,2,3,4,5)

// recurse?

function createMember(lastName) {
    return function(name) {
        console.log(name + lastName)
    }
}

const logWithLastName = createMember('Sidorov')

logWithLastName('Ivan ')
logWithLastName('Ira ')