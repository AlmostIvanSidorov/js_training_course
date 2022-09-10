// The DOM is often referred to as the DOM tree, and consists of a tree of objects called nodes.
//  In the Introduction to the DOM, we went over what the Document Object Model (DOM) is,
//   how to access the document object and modify its properties with the console,
//    and the difference between HTML source code and the DOM.

// window.prompt('Как тебя зовут?')

const heading = document.getElementById('hello')

// const heading2 = document.getElementsByTagName('h2')[0]

const heading2 = document.querySelector('h2')

const heading3 = heading2.nextElementSibling

const h2List = document.querySelectorAll('h2')

const heading4 = document.querySelector('h3')
const heading5 = document.querySelector('h4')

console.log(heading5)

console.dir(heading.id)

console.dir(heading.textContent)

// setInterval(()=>{setTimeout(()=> {
//     addStylesTo(heading, phrase='Changed from java')
// }, 1500)
//         addStylesTo(heading, phrase='Changed from java')
//     }, 1500)
// },2500)

// setTimeout(()=> {
//     addStylesTo(heading, phrase='Changed from java')
// }, 1500)

setTimeout(()=> {
    addStylesTo(h2List[1], 'Changed from java','yellow','3rem')
}, 1500)

setTimeout(()=> {
    addStylesTo(heading)
}, 1500)

addStylesTo(heading4.children[0],'HTML')
addStylesTo(heading5.querySelector('a'), 'CSS')

function addStylesTo(node,phrase = "Hi:)", color= 'red', fontSize) {
    node.textContent = phrase

    node.style.color = color

    node.style.textAlign = 'center'

    node.style.backgroundColor = 'black'

    node.style.padding = '2rem'

    node.style.display = 'block'

    node.style.width = '100%'

    if (fontSize) {
        node.style.fontSize = fontSize
    }
}

swithBackgroundColor(heading)
swithBackgroundColor2(h2List[1])

function swithBackgroundColor(node){
    node.onclick = () =>  {
        if (node.style.color === 'red'){
            node.style.color = 'blue'
        }else{
            node.style.color = 'red' 
        }
    }

}

function swithBackgroundColor2(node){
    node.addEventListener('dblclick' ,() =>  {
        if (node.style.color === 'yellow'){
            node.style.color = 'blue'
        }else{
            node.style.color = 'yellow' 
        }
    })

}