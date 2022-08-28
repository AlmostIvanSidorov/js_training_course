const name = 'Ivan'

const age = 32

// const output = 'Hi, my name is ' + name + ' my age ' + age

// const output2 = `Hi, my name is  ${name} my age ${age < 30 ? 'less than' :'more than'} 30 :)`

// console.log(output2)

// const output = `
//     <div>This is div</div>
//     <p>This is p</p>
// `

// console.log(output)

// console.log(output.length)
// console.log(output.toUpperCase())
// console.log(output.indexOf('i'))
// console.log(output.length > 30)

// console.log(output.repeat(3))

// console.log(output.trim().startsWith('<div>'))

function logPerson(s,name, age) {
    if (age < 5) {
        name = name + ' the small'
    }
    return `${s[0]}${name}${s[1]}${age}`
}

personName = 'Ivan'

personAge = 32

personName2 = 'Stepa'

personAge2 = 0

const output = logPerson`Name: ${personName}, Age: ${personAge}`
const output2 = logPerson`Name: ${personName2}, Age: ${personAge2}`
console.log(output)
console.log(output2)
