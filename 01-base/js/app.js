// let num = 42
// let firstName =  "Vladislav"
// const isProgrammer = true

// // num = 10
// // firstName = 'Max'

// // // isProgrammer = false       //error 




// //Can do

// let $ = 'test'
// let $num = 42
// let _ = 49
// let _num = 12 
// let num_ = 12

// let my_num = 34 // no Ok 
// let myNum = 34 // Ok



// // Restricted 

// // let 42num = '11'
// // let my-num = 1 


// // alert(firstName)

// console.log('Test:',firstName)
// console.log(num +10)

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num 
// console.log(num)

// const fullName = firstName + ' Minin'

// console.log(fullName)


const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')

const submitBtm = document.getElementById('submit')

const plusBtm = document.getElementById('plus')
const minusBtm = document.getElementById('minus')
const multBtm = document.getElementById('mult')
const devBtm = document.getElementById('dev')


const resultElement = document.getElementById('result')

let action = '+'


// console.log(result.textContent)
// console.log(input1.value)
// console.log(input1)
// console.log(input2)
// console.log(input2.value)
// console.log(typeof sum)

plusBtm.onclick = function () {
    action = '+'
}

minusBtm.onclick = function () {
    action = '-'
}

multBtm.onclick = function () {
    action = '*'
}

devBtm.onclick = function () {
    action = '/'
}





function printResult(result) {
    if (result < 0) {
        resultElement.style.color = 'blue'
    } else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent =  result
}

function computeNumersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+'){
        return num1 + num2
    } else if (actionSymbol == '-') {return num1 - num2}
    else if (actionSymbol == '*') { return num1 * num2}
    else {return num1 / num2 }

}



submitBtm.onclick = function () {
    const result = computeNumersWithAction(input1, input2, action)
    printResult(result)

    // if (action == '+' ) {
    //     // const sum = Number(input1.value) + Number(input2.value)
    //     // printResult(sum) 

    // } else {
    //     // const sum = Number(input1.value) - Number(input2.value)
    //     // printResult(sum) 

    // }
}





