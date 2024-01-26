// function isValidWalk(walk) {
//   //insert brilliant code here
//   let n = walk.filter((ch) => ch === 'n')
//   let s = walk.filter((ch) => ch === 's')
//   let w = walk.filter((ch) => ch === 'w')
//   let e = walk.filter((ch) => ch === 'e')

//   return walk.length === 10 && s.length = n.length && w.length === e.length

// }


// function alphabetPosition(text) {
//   let stre = ''
//   text = text.split('')
//   //console.log(text)

//   for (let str of text ) {
//     if (str.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && str.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0)) {

//     }
//   }

//   text = text.filter((str) => {str.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && str.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0)})
//   console.log(text)
//   for (let i = 0; i < text.length; i++) {
//     stre = stre + text[i].toLowerCase().charCodeAt(i) +  " "
//     //console.log(text)
//     //console.log(text.toLowerCase().charCodeAt(i) - 'a'.charCodeAt(0) + 1 )
//     // if (text[i].toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && text[i].toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0) ) {
//     //   console.log(text[i].toLowerCase().charCodeAt(i))
//     //   str = str + text[i].toLowerCase().charCodeAt(i) +  " "
      
//     // }

//   }
//   return stre;
// }


// function alphabetPosition(text) {
//   let str = ''
//   let arr = []
//   text = text.split('')
//   //console.log(text)
  

//   for (let x of text ) {
//     if (x.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && x.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0)) {
//         arr.push(x)
//     }
//   }
  

//   for (let i = 0 ; i < arr.length ; i++) {
//     //console.log(arr[i].toLowerCase().charCodeAt(0))
//     str = str + ( arr[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0) + 1 ) + ' '
//   }

//   str = str.slice(0,-1)

//   return str;
// }







// function persistence(num) {
//     let cmp = 1
//     let i = 0
//     while (num.toString().length > 1) {
//         let cmp = 1
//         for ( let x of num.toString() ) {
//             cmp *= +x

//         }
//         num = cmp
//         ++i
//         console.log(num + ' i')
//     }
//     return i;
// }








// function toCamelCase(str) {
  
  
//   if (!str) {
//     return str;
//   }

// //////////////////////////////////////
  

//     String.prototype.isUpperCase = function(){

//     if(this==this.toUpperCase() ){
//        return true;         // Checked
//     }
//     else return false;
//     }



//     function isNoLetter(x) {
//         return !(x.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && x.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0))  // Checked
//     }


//     String.prototype.replaceAt = function(index, replacement) {
//       return this.substr(0, index) + replacement + this.substr(index + replacement.length);
//     }

// //////////////////////////////////////

//     p = str[0].isUpperCase()

//     // d = str.split('').find(isNoLetter)

//     // console.log(`d = ${d}`)

//     let result = ''                                                                     // Checked

//     // let arr = str.split(d)

//     // console.log(`arr = ${arr}`)
  
  
// //////////////////////////////////////////

//     let arr = str.split('')
  
//     arr.forEach( (ch) => {
//         if ( isNoLetter(ch)) {
//             str = str.replaceAt(str.indexOf(ch), ' ')              //! не заменяет на пробелы (не менятся str)
//             console.log(`is no let { ${ch} } index ${str.indexOf(ch)}`)
//         }
//     })

    

//     console.log(`str - ${str}`)

//     arr = str.split(' ')

//     console.log(`arr - ${arr}`)

    


// ///////////////////////////////////////

//     //if ( arr[0][0].isUpperCase)

//     for (let word of arr) {
//         if (arr.indexOf(word) == 0 && !p) {
//             console.log('this is first word')
//             word.replaceAt(0, word[0].toUpperCase())
//             result += word                                                          
//             continue
//         }

//         word.replaceAt(0, word[0].toUpperCase())
//         console.log(`word - ${word}`)
//         result += word.replaceAt(0, word[0].toUpperCase())
//         console.log(`result - ${result}`)
//     }


// ///////////////////////////////////////

//     return result


// }







// function order(words){

//     let result = [];

//     let arr = words.split(' ')

//     for(x of arr) {
//         let i = +x.split('').filter((ch) => Number.isInteger(+ch))
//         result[i-1] = x
//     }

//     console.log(result)

//     // for (let i = 0; i < arr.length; i++){
//     //     result[]
//     // }

//     return result.join(' ');
// }



// function narcissistic(value) {

//     let arr = value.toString().split('')

//    //console.log(arr) 

//     let pow = arr.length

//     arr = arr.map( (n) => Math.pow(n, pow))

//    //console.log(arr)

//     let sum = arr.reduce(
//     (accumulator, currentValue) => accumulator + currentValue
//     );


//     return sum === +value;

//    //console.log(sumWithInitial)

// }




// var uniqueInOrder=function(iterable){
    
//     let result = []
//     let unqarr = []

//     for (let x of iterable){
//         if (!unqarr.includes(x)){
//             unqarr.push(x)
//             result.push(x)
//         }
//     }
//     return result
// }


// var uniqueInOrder=function(iterable){
    
//     let result = []
//     for (let i = 0; i < (iterable.length - 1); i++){
//         if (iterable[i] !== iterable[i+1]){
//             result.push(iterable[i])
//         }
//     }
//     if (iterable[iterable.length-1] !== iterable[iterable.length-2]) { result.push(iterable[-1]) }
//     return result;
// }


// function digPow(n, p){

//     let sum = 0
//     let arr = n.toString().split('')
//     for (let x of arr) {
//         sum += Math.pow(x,p)
//         p++
//     }
//     return sum % n !== 0 ? sum / n : -1
// }


// function tribonacci(signature,n){

//     // let seq = signature;
//     // let seq = [];


// /////////////////////////////////////////

//     if (n === 0) {
//         return [];
//     }


//     if (n < 4 ){
//         return signature.slice(0, n);
//     }

// ///////////////////////////////////////////

//     let seq = signature

//     for (let i = 3 ; i < n ; i++) {
//         seq.push(seq[i-3] + seq[i-2] + seq[i-1])
//     }

//     return seq;

// }


// function moveZeros(arr) {

//     let len = arr.filter((x) => x === 0).length

//     arr = arr.filter((x) => x !== 0).concat(new Array(len).fill(0))



//     return arr
// }




// function humanReadable (seconds) {
  
//     let arr = [0,0,0]
//     let result = ''

//     arr [0] = parseInt(seconds / 3600) 

//     seconds += seconds - arr[0]*3600

//     arr[1] = parseInt(seconds / 60)

//     seconds += seconds - arr[1]*60

//     arr[2] = parseInt(seconds / 60)

//     for (let x of arr) {
//         if ( x.toString().length === 1) {
//              arr[arr.indexOf(x)] = '0' + x.toString()
//         }
//     }
    
//     return arr.join(':')
// }



// function rgb(...arr) {

//     for (let x of arr) {
//         if (+x > 255) {
//             arr.splice(arr.indexOf(x),1,255)
//         } else if(+x < 0) {
//             arr.splice(arr.indexOf(x),1,0)
//         }
//     }

//     return arr.map((x) => {
//         if ( x.toString(16).length < 2 ){
//             return '0'+ x.toString(16).toUpperCase()
//         }
//         return x.toString(16).toUpperCase()

//     }).join('');

// }



// function dirReduc(arr){
  
    
//     let result = []
//     let myMap = new Map()
//     let n = 1

//     myMap.set('NORTH', 'SOUTH')
//     myMap.set('SOUTH', 'NORTH')
//     myMap.set('WEST', 'EAST')
//     myMap.set('EAST', 'WEST')
//     arr = arr.map((x) => x.toUpperCase())
    

//     while ( n > 0 && arr.length > 1){
//         for (let i = 0; i < arr.length-1; i++){
//             console.log(`//////// i = ${i}`)
//             console.log(`before: ${arr}`)
//             if ( arr[i] === myMap.get(arr[i+1]) ) {
//                 arr.splice(i, 2)
//                 n++
                
//             }
//             console.log(`after ${arr}`)
             
//             console.log(`n = ${n}`)
//         } 
//         n--
//     }




//     console.log(`////////`)

//     return arr;

// }



// d = {'+': (a,b) => a+b, '-': (a,b) => a-b , '*': (a,b) => a*b, ':': (a,b) => Math.ceil(a/b),}

// function zero(x) {
//     this.value = 0
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function one(x) {
//     this.value = 1
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function two(x) {
//     this.value = 2
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function three(x) {
//     this.value = 3
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function four(x) {
//     this.value = 4
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function five(x) {
//     this.value = 5
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function six(x) {
//     this.value = 6
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function seven(x) {
//     this.value = 7
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function eight(x) {
//     this.value = 8
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }
// function nine(x) {
//     this.value = 9
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// }

// function plus() {
//     let value = '+'
//     return value + num
// }
// function minus() {
//     let value = '-'
//     return value + num
// }
// function times() {
//     let value = '*'
//     return value + num
// }
// function dividedBy() {
//     let value = ':'
//     return value + num
// }




// /////////////////////////////////////


// let num1 = function number(result) {
//     this.value = 1
//     if ( result === undefined) {return this.value}
//     return result;
// };

// let num2 = function number(result) {
//     this.value = 2
//     if ( result === undefined) {return this.value}
//     return result;
// };


// function plus(num) {
//     return value + num.value
// }

// ////////////////////////////////////////



// function operator(num) {
//     return self.value + num
// }


// function test(a){
//     let self = this
//     return a
// }


// ////////////////////////

// d = {'+': (a,b) => a+b, '-': (a,b) => a-b , '*': (a,b) => a*b, ':': (a,b) => a/b,}



// let num1 = function number(x) {
//     this.value = 1
//     if ( x === undefined) {return this.value}
//     return d[x[0]](this.value, +x[1]);
// };



// function operator(num) {
//     let value = '+'
//     return value + num
// }



// nuber0(operator(nuber1()))










// function rot13(message){
//     return message.split(' ').map( (word) => {return word.split('').map( (letter) => { return itIsLetter(letter) ? replChar(letter) : letter } ).join('')}).join(' ')
// }



// function replChar(char) {
//     if ( char === char.toUpperCase() ) {
//         return ( char.charCodeAt(0) + 13 ) <= 90 ? String.fromCharCode(char.charCodeAt(0) + 13) : String.fromCharCode(64 + char.charCodeAt(0) + 13 - 90)
//     }

//     return ( char.charCodeAt(0) + 13 ) <= 122 ? String.fromCharCode(char.charCodeAt(0) + 13) : String.fromCharCode(96 + char.charCodeAt(0) + 13 - 122)
// }


// function itIsLetter(x) {
//     if (x.toLowerCase().charCodeAt(0) >= 'a'.charCodeAt(0) && x.toLowerCase().charCodeAt(0) <= 'z'.charCodeAt(0)) {
//         return true 
//     }
//     return false
// }








// function generateHashtag (str) {
    
//     if (str.split('').filter( (x) => x !== ' ' ).length === 0) { return false }
//     str = str.replace(/ +/g, ' ')
//     console.log(str)
//     console.log(str.split(' '))
//     str = str.split(' ').filter( (x) => x !== '' ).map( (word) => {
//         let arr = word.split('')
//         console.log(`arr = ${arr}`)
//         console.log(`word[0] = ${word[0]}`)
//         arr.splice(0, 1, word[0].toUpperCase())
//         return arr.join('')
//     }).join('')
//     //str = '#' + str.split('').filter((x) => x !== ' ').join('')
//     // console.log(`str.lenght = ${str.length}`)
//     str = '#' + str
//     return str.length <= 140 ? str : false
// }










// var maxSequence = function(arr){
    
//     let max_arr = []
//     let max_summ = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < (arr.length - i); j++) {
//             console.log(arr.slice(i+j))
//         }
//         console.log('/////////////////////')
//     }
// }

// var maxSequence = function(arr){
    
//     let max_arr = []
//     let max_summ = 0

//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 1+i; j < arr.length+1; j++) {
//             //console.log(arr.slice(i,j))
//             let temp = arr.slice(i,j).reduce(function(a, b){ return a + b;}, 0)
//             if ( temp > max_summ ) { max_summ = temp; max_arr = arr.slice(i,j)}
//         }
//         //console.log('/////////////////////')
//     }
//     return max_summ
// }



// maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])





// function cakes(recipe, available) {
    
//     let min = 5000000;
//     let recipe_ingredients = Object.keys(recipe)
//     let available_ingredients = Object.keys(available)

//     console.log(Object.keys(recipe))

//     for (let x of recipe_ingredients ) {
//         if ( !available_ingredients.includes(x) ){
//             return 0;
//         }
//         console.log(x)
//         if ( Math.floor(available[x]/recipe[x]) < min ) { min = Math.floor(available[x]/recipe[x]) }

//     }


//     return min;
// }







// function F_(n) {

//     let arr = [0,1]

//     for (let i = 0; i < n-2; i++) {
//         if ()
//         arr.push(arr[i] + arr[i+1])
//     }

//     return arr;
// }






// let arrFib = [0,1]


// let F =  function(n){

//     if ( arrFib[n-1] !== undefined){
//         return arrFib[n-1]
//     }

//     for (let i = arrFib.length - 1 ; i < n - 1; i++){
//         arrFib[i+1] = arrFib[i] + arrFib[ i - 1]
//         console.log()
//     }


//     return arrFib[n-1]
// }


// function productFib(prod){

//     for (let i = 0; i < Infinity; i++){
//         if (F(i) * F(i+1) > prod){
//             return [F(i), F(i+1) , false]
//         }
//         if (F(i) * F(i+1) === prod){
//             return [F(i), F(i+1) , true]
//         }
//     }
// }



// let F =  function(n){

//     this.cash = [0,1]

 
//     if ( this.cash[n-1] !== undefined){
//         return this.cash[n-1]
//     }

//     for (let i = this.cash.length - 1 ; i < n - 1; i++) {
//         this.cash[i+1] = this.cash[i] + this.cash[ i - 1]
//         console.log(` i counting #${i} element`)
//     }


//     return this.cash[n-1]
// }


// F.cash = [0,1]









// function firstNonRepeatingLetter(s) {

//     for (let i = 0; i < s.length; i++){
//         for ( let j = i + 1; i < s.length - 1; i++){
//             if (s.charAt(i) === s.charAt(j) ) {}
//         }
//     }
// }



// function firstNonRepeatingLetter(s) {

//     for (let i = 0; i < s.length; i++){
//         if ( s.toLowerCase().split('').filter( (x) => x === s.toLowerCase().charAt(i) ).length === 1 ) {
//             return s.charAt(i)
//         }
//     }
//     return ''
// }





// function firstNonRepeatingLetter(s) {
//     s.split("").map( (char) => {
//         if ( s.toLowerCase().split('').filter( (x) => x === char ).length === 0 ) {
//             return char
//         }
//     })
    
// }



// function sumOfDig(n) {
//     return n.split('').reduce((sum, ch) => sum + (+ch), 0);
// }

// function orderWeight(str) {
//     str = str.split(' ').sort( (a, b) => sumOfDig(a) - sumOfDig(b) );
//     return str.split(' ').filter( (a,b) => {
//         if (sumOfDig(a) === sumOfDig(b)){
//             if (a.length > b.length){return 1}
//             if (a.length < b.length){return -1} 
//         }
//         return 0 
//     }).join(' ');
// }


//let sumOfDig = (n) => n.split('').reduce((sum, ch) => sum + (+ch), 0)

//let orderWeight = (str) => str.split(' ').sort( (a, b) => sumOfDig(a) - sumOfDig(b) ).join(' ')

/////////////////////////////////////////////////////////////////////////////////////////

// function sumOfDig(n) {
//     if (typeof n !== typeof ''){ 
//         console.log(typeof n) 
//         console.log(` n = ${n}`)
//     } 
 
//     return n.split('').reduce((sum, ch) => sum + (+ch), 0);
// }

// function orderWeight(str) {
//     str = str.split(' ').sort( (a, b) => sumOfDig(a) - sumOfDig(b) );
//     //console.log(str)
//     return str.join(' ');
// }





// function sumOfDig(n) {
// //     if (typeof n !== typeof ''){ 
// //         console.log(typeof n) 
// //         console.log(` n = ${n}`)
// //     } 
  
//     n = n.toString()
//     console.log(typeof n) 
//     console.log(` n = ${n}`)
 
//     return n.split('').reduce((sum, ch) => sum + (+ch), 0);
// }

// function orderWeight(str) {
//     str = str.split(' ').sort( (a, b) => sumOfDig(a) - sumOfDig(b) );
//     //console.log(str)
//     return str.sort( (a,b) => {
//         if (sumOfDig(a) === sumOfDig(b)){
//             return a.localeCompare(b)
//         }
//         return 0 
//     }).join(' ');
// }


////////////////////////////////////////////////////////////////////////////////////////////////////




// function scramble(str1, str2) {

//     let set1 = new Set(str1.split(''))
//     let set2 = new Set(str2.split(''))
    
//     for (let x of set2) { 
//         if (!set1.has(x)) { return false} 
//     }

//     let arr = str1.split('')
//     let arr1 = []

//     for (let x of str2) {
//         if (arr.includes(x)){
//             delete arr[arr.indexOf(x)]
//             arr1.push(x)
//         }
//         if (arr1.join('') === str2) { return true}
//     }

//     //if (arr1.join('') === str2) { return true}

//     return false;
// }










 
// function domainName(url){
//     let reg = / \/\/ | www\.      /
// }



// function domainName(url){
//     let reg = /[a-z\-]*(?=\.com)/g
//     return url.match(reg)[0]
// }



// function domainName(url){
//     let reg = /[a-z\-]*(?=\.com)/
//     console.log(typeof url.match(reg))
//     console.log(url.match(reg))
      
//     return [...url.match(reg)]
// }





// function removeUrlAnchor(url){
//     return url.split(/#/)[0]
// }





// function incrementString (str) {

//     let n = str.match(/\d+(?:\b)/) 

//     if (n == null ) {
//         return str + 1;
//     }

//     n = n[0]

//     let x = +n + 1
//     console.log(`n = ${n} n.length = ${n.length} /// x = ${x} x.toString().length = ${x.toString().length} `)
//     console.log(n.length - x.toString().length )
//     if (n.length > x.toString().length ) {
//         x = '0'.repeat(n.length - x.toString().length ) + x;
//     }
//     x = x.toString()
//     console.log(`${typeof x} x = ${x}`)
//     console.log(`${typeof str.replace(str.match(/\d+(?:\b)/)[0], x)}  ${str.replace(str.match(/\d+(?:\b)/)[0], x)}`)
//     console.log(str.match(/\d+(?:\b)/)[0])
//     console.log(str.replace(str.match(/\d+(?:\b)/)[0], x))
//     let b = str.replace(str.match(/\d+(?:\b)/)[0], x)
//     console.log(typeof b)
    
//     //return  str.replace(str.match(/\d+(?:\b)/)[0], x)
//     return b

// }





// function incrementString (str) {
//     let n = str.match(/\d+(?:\b)/) 
//     if (n == null ) {
//         return str + 1;
//     }
//     n = n[0]
//     let x = +n + 1
//     if (n.length > x.toString().length ) {
//         x = '0'.repeat(n.length - x.toString().length ) + x;
//     } else  { x = x.toString() }
//     return str.replace(/\d+(?:\b)/, x)
// }






// function zeros (n) {
//     if ( n < 0 ) { return NaN }
//     if (n == 0) { return 1}
//     let x = 1
//     for (let i = 2; i <= n; i++) {
//         x = x * i
//     }
//     return x;
// }


// function zeros (n) {
//     let x = 0
//     for (let i = 0; n/Math.pow(5,i) > 1; i++ ){
//         x += Math.floor(n/Math.pow(5,i))
//     }
//     return n
// }







// function perimeter(n) {

//     let arrFib = [0,1]

//     function F(n){

//         if ( arrFib[n-1] !== undefined){
//             return arrFib[n-1]
//         }

//         for (let i = arrFib.length - 1 ; i < n - 1; i++){
//             arrFib[i+1] = arrFib[i] + arrFib[ i - 1]
//         }


//         return arrFib[n-1]
//     }

//     F(n+2)

//     console.log(arrFib)

//     return arrFib.reduce((a,c)=> a + c)*4
// }



// function primeFactors(n){

//     let primeNumAr = (function primeNumAr(N) {
        
//         let arr = []
//         for (let i = 0; i <= N; i++) arr.push(i)

//         for (let j = 2; j*j <= N; ++j) {
//             if (arr.includes(j)){
//                 console.log(`j = ${j}`)
//                 for (let k = j*j; k <= N; k += j*(j-1)) {
//                     console.log(`   k = ${k}`)
//                     delete arr[k]
//                 }
//             }
//         }

//         return arr.filter( (x) => x !== undefined).slice(2)

//     } )(n)


//     function mapFilter(map){

//         for (let x of map){
//             if (x == 0 || x[1] == 0) {map.delete(x[0])}
//         }
        
//         return map
//     }

//     let m = new Map()

//     //console.log(`prime num --- ${primeNumAr}`)


//     for(let div of primeNumAr) {
//         if ( !(n > 1) ) break;
//         m.set(div,  0)
//         while (n % div == 0){
//             n = n / div
//             m.set(div, m.get(div) + 1)
//         }
//     }

//     m = mapFilter(m)

//     let result = ''

//     //console.log(m)

//     for (let x of m){
//         //console.log(`x = ${x}`)
//         if (x[1] == 1) {result += `(${x[0]})`}
//         else { result += `(${x[0]}**${x[1]})` }
//     }

//     return result
// }




// function primeFactors(n){

//     let primeNumAr = (function primeNumAr(N) {
        
//         let arr = []
//         for (let i = 0; i <= N; i++) arr.push(i)

//         let set = new Set(arr)

//         for (let j = 2; j*j <= N; ++j) {
//             if (set.has(j)){
//                 console.log(`j = ${j}`)
//                 for (let k = j*j; k <= N; k += j*(j-1)) {
//                     console.log(`   k = ${k}`)
//                     set.delete(k)
//                 }
//             }
//         }
//             arr = [...set].sort((a,b) => a-b)

//         return arr.filter( (x) => x !== undefined).slice(2)

//     } )(n)


//     function mapFilter(map){

//         for (let x of map){
//             if (x == 0 || x[1] == 0) {map.delete(x[0])}
//         }
        
//         return map
//     }

//     let m = new Map()

//     console.log(`prime num --- ${primeNumAr}`)

//     if (primeNumAr[primeNumAr.length -1] == n ) {return `(${n})`}


//     for(let div of primeNumAr) {
//         if ( !(n > 1) || div > Math.sqrt(n)) break;
//         m.set(div,  0)
//         while (n % div == 0){
//             n = n / div
//             m.set(div, m.get(div) + 1)
//         }
//     }

//     m = mapFilter(m)

//     let result = ''

//     //console.log(m)

//     for (let x of m){
//         //console.log(`x = ${x}`)
//         if (x[1] == 1) {result += `(${x[0]})`}
//         else { result += `(${x[0]}**${x[1]})` }
//     }

//     return result
// }





function primeFactors(n){

    let primeNumAr = (function primeNumAr(N) {
        
        let arr = []
        for (let i = 0; i <= N; i++) arr.push(i)

        let set = new Set(arr)

        for (let j = 2; j*j <= N; ++j) {
            if (set.has(j)){
               // console.log(`j = ${j}`)
                for (let k = j*j; k <= N; k += j*(j-1)) {
                    //console.log(`   k = ${k}`)
                    set.delete(k)
                }
            }
        }
            arr = [...set].sort((a,b) => a-b)

        return arr.filter( (x) => x !== undefined).slice(2)

    } )(n)


    function mapFilter(map){

        for (let x of map){
            if (x == 0 || x[1] == 0) {map.delete(x[0])}
        }
        
        return map
    }

    let m = new Map()

    console.log(`prime num --- ${primeNumAr}`)

    if (primeNumAr[primeNumAr.length -1] == n ) {return `(${n})`}


    for(let div of primeNumAr) {
        if ( !(n > 1)) break;
        m.set(div,  0)
        while (n % div == 0){
            n = n / div
            m.set(div, m.get(div) + 1)
        }
    }





    m = mapFilter(m)

    let result = ''

    //console.log(m)

    for (let x of m){
        //console.log(`x = ${x}`)
        if (x[1] == 1) {result += `(${x[0]})`}
        else { result += `(${x[0]}**${x[1]})` }
    }

    return result
}


//////////


// function primeFactors(n){

// //     let primeNumAr = (function primeNumAr(N) {
        
// //         let arr = []
// //         for (let i = 0; i <= N; i++) arr.push(i)

// //         let set = new Set(arr)

// //         for (let j = 2; j*j <= N; ++j) {
// //             if (set.has(j)){
// //                 //console.log(`j = ${j}`)
// //                 for (let k = j*j; k <= N; k += j*(j-1)) {
// //                     //console.log(`   k = ${k}`)
// //                     set.delete(k)
// //                 }
// //             }
// //         }
// //             arr = [...set].sort((a,b) => a-b)

// //         return arr.filter( (x) => x !== undefined).slice(2)

// //     } )(n)
    
    
//     let primeNumAr = []
//     for (let i = 0; i <= n; i++) primeNumAr.push(i)
//     primeNumAr = primeNumAr.slice(2)


//     function mapFilter(map){

//         for (let x of map){
//             if (x == 0 || x[1] == 0) {map.delete(x[0])}
//         }
        
//         return map
//     }

//     let m = new Map()

//     //console.log(`prime num --- ${primeNumAr}`)

//     //if (primeNumAr[primeNumAr.length -1] == n ) {return `(${n})`}


//     for(let div of primeNumAr) {
//         //if ( !(n > 1) || div > Math.sqrt(n)+1) break;
//         if ( !(n > 1) ) break;
//         console.log(`div = ${div}`)
//         m.set(div,  0)
//         while (n % div == 0){
//             n = n / div
//             m.set(div, m.get(div) + 1)
//         }
//     }

//     m = mapFilter(m)

//     let result = ''

//     //console.log(m)

//     for (let x of m){
//         //console.log(`x = ${x}`)
//         if (x[1] == 1) {result += `(${x[0]})`}
//         else { result += `(${x[0]}**${x[1]})` }
//     }

//     return result
// }





// function primeFactors(n){

//     function primes(N) {
//         let res = [2];
//         for (let i = 3; i < N; i+=2) {
//         let isPrime = true;
//         for (let k = 0, limit = Math.sqrt(i); res[k] <= limit; ++k) {
//             let d = res[k];
//             if (i % d == 0) {isPrime = false;break;}
//         }
//         if (isPrime) res.push(i);
//         }
//     return res;
//     }


//     let primeNumAr = primes(n)


//     function mapFilter(map){

//         for (let x of map){
//             if (x == 0 || x[1] == 0) {map.delete(x[0])}
//         }
        
//         return map
//     }

//     let m = new Map()

//     console.log(`prime num --- ${primeNumAr}`)

//     if (primeNumAr[primeNumAr.length -1] == n ) {return `(${n})`}


//     for(let div of primeNumAr) {
//         // if ( !(n > 1) || div > Math.sqrt(n)) break;
//         if ( !(n > 1)) break;
//         m.set(div,  0)
//         while (n % div == 0){
//             n = n / div
//             m.set(div, m.get(div) + 1)
//         }
//     }





//     m = mapFilter(m)

//     let result = ''

//     //console.log(m)

//     for (let x of m){
//         //console.log(`x = ${x}`)
//         if (x[1] == 1) {result += `(${x[0]})`}
//         else { result += `(${x[0]}**${x[1]})` }
//     }

//     return result
// }






//////////////////////////////////////////////////////////////////////////////


// function pickPeaks(arr){

//     let result = new Object();
//     result.pos = []
//     result.peaks = []

//     if (arr.length == 0) { return {pos: [], peaks: []}}

//     for (let i = 1; i < arr.length-1; i++){
        
//         if (arr[i] > arr[i-1] && arr[i] > arr[i+1]) {
//             result.pos.push(i)
//             result.peaks.push(arr[i])
//         } 
//         else {
//             if (arr[i] == arr[i+1]){
//                 if ( i > 1 && i < arr.length-2){
//                     let j = i
//                     while(arr[j] == arr[j+1]){
//                         j++
//                         if(arr[j] > arr[j+1]){
//                             result.pos.push(i)
//                             result.peaks.push(arr[i])
//                         } else if (arr[j] < arr[j+1]) { break }
                        
//                     }
//                 }
//             }
//         }

//         // if (i > 1 && arr[i] == arr[i-1] && arr[i] == arr[i+1] && i < arr.length-1){
//         //     let check = true
//         //     for (let j = i; j < arr.length; i++) {
//         //         if (arr[j] > arr[i]) {check = false}
//         //     }
//         //     if (check == true) {
//         //        result.pos.push(i)
//         //         result.peaks.push(arr[i]) 
//         //     }
//         // }

        



//     }

//     return result 
// }



/////////////////////////////////////////////////////////////////////////////////





// function wordsToObject(input) {
//     input = input.split(' ')
//     let str = '['
//     for (let i = 0; i < input.length - 2; i += 2){
//         str += `{name : '${input[i]}', id : '${input[i+1]}'},`
//     }
//     str = str.slice(0,-1)
//     str += ']'
//     return str

// }


// '[{name : \'red\', id : \'1\'},{name : \'yellow\', id : \'2\'},{name : \'black\', id : \'3\'},{name : \'white\', id : \'4\'}]'
// '[{name : \'red\', id : \'1\'}, {name : \'yellow\', id : \'2\'}, {name : \'black\', id : \'3\'}, {name : \'white\', id : \'4\'}]'






// function validatePIN (pin) {
//     return pin.match(/(^[0-9]{4}$)|(^[0-9]{6}$)/) == null ? false : true
// }



// function solution(str){
//     if(str === ""){return []}
//     if (str.length % 2 == 0) {return str.match(/\w{2}/g)}
//     else{ return (str + '_').match(/\w{2}/g) }
//     return str ? [] : str.length % 2 == 0 ? str.match(/\w{2}/g) : (str + '_').match(/\w{2}/g)
// }



// function countSmileys(arr) {
//     return arr.reduce((acc, cur) => {});   
// }



// function countSmileys(arr) {
//     return arr == [] ? 0 : arr.reduce(function (acc, cur) {if(/(:|;)+(-|~)?(\)|D)+/.test(cur)){acc++}}, 0 );   
// }

// function countSmileys(arr) {
//     let count = 0
//     for (let x of arr) {
//         if(/(:|;)+(-|~)?(\)|D)+/.test(x)){count++}
//     }
//     return count
// }





let getWeekDay = (date) => {
    let arr = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
    return arr[date.getDay() == 0 ? 6 : date.getDay() -1];
}


function getLastDayOfMonth(year, month) {
    let date = new Date(year, month)
    let mon = month
    while (mon == month) {
        date.setDate(date.getDate() + 1)
        mon = date.getMonth()
    }
    date.setDate(date.getDate() -1)
    return date.getDate()
}



 