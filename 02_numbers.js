//number
const num = 42
const num2 = 11.11
const pow = 10e3

console.log(Number.MAX_SAFE_INTEGER)

console.log(Math.pow(2,53)-1)
stringInt = '42'
console.log(Number.parseInt(stringInt)+2)

console.log(+stringInt+2)

console.log(stringInt+2)

console.log(0.4 + 0.2)

console.log((0.4 + 0.2).toFixed(4))
console.log(parseFloat((0.4 + 0.2).toFixed(4)))

//BigInt

console.log(Number.MAX_SAFE_INTEGER)

console.log(typeof 900719925474099999n)

//Math

console.log(Math.PI)

console.log(Math.max(1,2,4,5,1,4))

console.log(Math.round(20.5))

console.log(Math.random())

//Example

function getRandomBetween(min, max) {
    return Math.floor(Math.random()*(max - min + 1) + min)
}

console.log(getRandomBetween(10, 15))