// var result = null;
// var test = "student are intelligent and are very and good and rerere"
// var x = result.concat(result).concat(test).concat(result) // chaining
// it is not possible to apply some built in function on null or undefined, So we have to guard all these thing to handle error.

// var x = test.replace(/and/g, '&')
// console.log(test.length)

// console.log(x)
// console.log(typeof(x))

// let b=90
// function abc(){
//     a = 30;
//     let b = 40;
// }
// abc();
// console.log(a)
// console.log(b)


//var a; // hoisting
//var a; //declaration
//a = 6; // Initialization


//console.log(a) // use

// abc(6);
// function abc(val){
//     console.log(val)
// }


// JS only hoist declaration not Initialization
// let can not be hoisted. (only var)




// console.log(a)

// a = 6;
// var a;


// let a = 5;
// var b = 5;

// a += b + 8 + ''; //* unexpected behaviour in case of += . will look into it

// console.log(a)
// console.log(typeof(a))

// var c = ++a + --b

// var d = c++

// if(true){
//   let e = a++
//   console.log(e)
//   console.log(a)
// }

// var c = a++ // 




// console.log(c)
// // console.log(a)

// console.log( 3 != '3') // value is equal sp false
// console.log( 3 !== '3')  // type is not equal // true


// let a = true
// let b = true
// let c = false
// let d = false

// // let e = a && d || b && a


// let e = 'Cat' && false

//let e = 0 || 'Cat'

// let e = ! null

// console.log( e )

// false && anything = false ( right side won't be executed )
// true || some = true 

// function fn (){
//     console.log(' hey there')
//     return true
// }

// true && true && fn() && true && true && true && console.log('hey there 2')

// let a = true ?? 'key'

// console.log( a )

// function fn(){
//     console.log('retre')
// }

// var a = 45646.87688

// var b = parseFloat(a.toFixed(1)).toString().length

// console.log(b)
// console.log(typeof(b))