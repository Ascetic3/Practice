

// Theory

// const array = [1, 2, 3, 4, 42]

// console.log(array)

const inputElement = document.getElementById('title')
const createBtm = document.getElementById('create')
const listElement = document.getElementById('list')
// const notes = ['first','second']

// function getNoteTemplate(title) {
//     return `
//     <li>
//         <span class = "item__title">${title}</span>
//         <span class="btm-block">
//             <span class="btn btn-small btm-succes">&#x2713</span>
//             <span class="btn btn-small btm-delete">&times</span>
//         </span>
//     </li> 
//     `
    
// }

// function render() {
//     // for (let i = 0; i < notes.length; i++) {
//     //     listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i]))  
//     // }

//     for (let note of notes) {
//         listElement.insertAdjacentHTML('beforeend',getNoteTemplate(note))  
//     }
// }



createBtm.onclick = function () {
    // listElement.innerHTML  = 
    if (inputElement.value.length === 0){
        return
    }
    
    const newNote = {
        title: inputElement.value,
        completed: false,
    }

    notes.push(newNote)

    listElement.insertAdjacentHTML(
        'beforeend',
        getNoteTemplate(newNote, (notes.length - 1)) 
    )
    inputElement.value = ''
}






const notes = [
    {
        title: 'first',
        completed: false,
    },

    {
        title: 'second',
        completed: true,
    },

]

function render() {
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend',getNoteTemplate(notes[i], i))
    }

}

function getNoteTemplate(note, index) {
    return `
    <li>
        <span class = "item__title ${note.completed ? 'text-decoration-line-through' : ''}" >${note.title}</span>
        <span class="btm-block">
            <span data-type="toggle" class="btn   btn-${note.completed ? 'warning' : 'succes'}" data-index="${index}">&#x2713</span>
            <span class="btn btn-small btm-delete" data-type="remove" data-index="${index}" >&times</span>
        </span>
    </li> 
    `
    
}

listElement.onclick = function (event) {
    
    if (event.target.dataset.index){
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
            // notes[index].value = getNoteTemplate(notes[index], index)
        } else if (type === 'remove'){
            notes.splice(index, 1)
        }
    }

    render()



}

render()