const cars = ["mazda", "ford", "bmw","mersedec"]
const fib = [1, 2, 3, 5, 8, 13]

// cars.push("lada")

// cars.shift()

// cars.pop()

// console.log(cars)

// console.log(cars.length)

cars.reverse()

console.log(cars)

const text = "asdfg"

console.log(text.split("").reverse().join(""))

const people = [{name: "Ivan", budget: 3000}, {name: "Ira", budget:2000}]

const index = people.findIndex(function(person){
    return person.budget < 3000
})

const persona = people.find(unit => unit.budget >= 3000)

console.log(persona)

console.log(people[index])

console.log(cars.includes("mazda"))

const upperCaseCars = cars.map(car => {
    return car.toLocaleUpperCase()
})

// const pow2fib = fib.map(number => Math.pow(number,2)).map(number => Math.sqrt(number))

const pow2 = number => number**2

const pow2fib = fib.map(pow2).filter(number => number < 20)


const allBudget = people
.filter(person => person.budget > 2000)
.reduce((acc, person) => {
    acc += person.budget
    return acc
}, 0)


console.log(allBudget)