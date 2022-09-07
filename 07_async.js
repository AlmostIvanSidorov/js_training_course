//asynchrony

//event loop

// const timeout = setTimeout(()=> {
// // clearTimeout(timeout)
// console.log('After timeout')
// }, 2500)

// // clearTimeout(timeout)


// const interval = setInterval(()=> {
//     console.log('After timeout2')
//     }, 1000)

const delay = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
    setTimeout( () => {
        // resolve()
        reject('Error321')
    }, wait)
  })
  return promise
}

// delay(2500)
// .then(()=>{
//     console.log('After 2 sec')
// })
// .catch()
// .finally(()=>{
//     console.log('After 2 finally')
// })

const getData = () => new Promise( resolve => resolve([
    1,1,2,3,5,8,13
]))

// getData().then(data => console.log(data))

async function asyncExample(){
    try{
        await delay(3000)
        const data = await getData()
        console.log('Data', data)
    }
    catch (e){
        console.log(e)
    }
    finally {
        console.log('finally')
    }

}

asyncExample()