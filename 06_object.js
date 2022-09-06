//objects

const person = {
    name: "Ivan",
    age: 32,
    languages: ["ru", "en", "de"],
    greet: function(){
        console.log("greet from fperson")
    },
    greet2(){
        console.log("hi")
    },
    // 'complex key': 'complex value',
    //  ['key_'+(1+2)]: 'Computed value', //key_3
    info(){
        console.info('Инфо по имени', this.name)
        //console.info('Инфо по имени', person.name)
    }
}

// person.greet()
// person.greet2()
// console.log(person["complex key"])
// ageKey= 'key_3'
// console.log(person[ageKey])

// delete person[ageKey]

// person.age++

// person.languages.push("by")

// const name = person.name
// const age = person.age
// const languages = person.languages

//const {name, age: personAge = 10, languages} = person // destructuring assignment

//console.log(name, personAge, languages)



// for(let key in person){
//     if(person.hasOwnProperty(key)){
//     console.log('key:', key)
//     console.log('value:',person[key])
//     }
// }

// const keys = Object.keys(person)

// console.log(keys)
// keys.forEach((key)=>{
//         console.log('key:', key)
//         console.log('value:',person[key])
//         }
// )

//context

// console.log(person)
person.info()

const logger = {
    keys(){
        console.log('Object Keys', Object.keys(this))
    },

    keysAndValues() {
        const keys = Object.keys(this)


        keys.forEach((key)=>{
            console.log('key:', key)
            console.log('value:',this[key])

        })

    },

    keysAndValues2() {
        Object.keys(this).forEach((key)=>{
            console.log(`"${key}": ${this[key]}`)

        })

    },

    keysAndValues3() {
        Object.keys(this).forEach(function(key){
            console.log(`"${key}": ${this[key]}`)

        }.bind(this))
    },

    withParams(top = false, between = false, bottom=false){
        if (top){
           console.log('--------top--------') 
        }
        Object.keys(this).forEach(function(key, index, array){
            console.log(`"${key}": ${this[key]}`)
            if (between && index !== array.length - 1){
                console.log('-----------mid----------')
            }

        }.bind(this))
        if (bottom){
            console.log('--------------bot----------')
        }
    }
}

// const bound = logger.keys.bind(person)

// bound()



// logger.keysAndValues2.call(logger)
// logger.keysAndValues2.call(person)
// logger.keysAndValues3.call(person)
logger.withParams.call(person, true, true, true)
logger.withParams.apply(person, [true, true, true])