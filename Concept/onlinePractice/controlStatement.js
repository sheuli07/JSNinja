// var age =18;

// if(age>19){
//     console.log("yes, i am in")
// }else if (age>=18){
//     console.log("yes, i am 18")
// }else{
//     console.log("i am out")
// }

// if("1"){
//     console.log("hey")
// }else{
//     console.log("Bye")
// }

// var result = age>10 ? console.log("hey") : console.log("Bye")

// var result = age>19 ? console.log("hey") : 
//             age>=18 ? console.log("yes, i am 18"): console.log("nothing")

// var age =10;
// switch(age){
    
//     case 10:
//         console.log("10")
//         break;
        
//     case 15:
//         console.log("15")
//         break;
        
//     case 18:
//         console.log("18")
//         break;
        
//     default:
//         console.log("default")
// }

// var age = 10

// if(age< 18)
//     console.log('im in')
// else
//     console.log('im out')




// var first = '18'
// var second = false

// if(first === 18)
//     console.log('true value')
// else
//     console.log('false value')

// function abc(){
//     return {
//         name: 'she',
//         role: 'jsdev                                                                                            '
//     }
// }

// function xyz(){
//     return 'byeeeee'
// }

// var age = 18
// var result = age>10 ? `${abc()} appended 1` : `${xyz() } appended 2`

// console.log(result) 


// function abc(args){
//     let a, b;
    
//     switch(args){
//         case 10:
            // console.log("10")
            // break;
//              a = 90;
//              b = 100
//             return a+b;
        
//         case 15:
//             // console.log("15")
//             // break;
//             return 'I am 15 years old'
//         case 18:
//             // console.log("18")
//             // break;
//              a = 10;
//              b = 80
//             return a+b;
//         default:
//             // console.log("default")
//             return 'I am default years old'
//     }
// }

// var result = abc(18)
// console.log(result)


// var a = 10;
// for(let i=0; i<5; i++){
    
//     if(i==3){
//         continue;
//     }
//     a = a+i;
// }
// console.log(a)
//10,11,13,17

// let a =10
// while(a < 10){
//     console.log('hey1')
//     // a++;
// }

// do{
//   console.log('hey2') 
// }while(a < 10)

// let obj = {
//     name: 'she',
//     role: 'jsdev'
// }

// for( key in obj){
//   console.log(obj[key]) 
// }

// let arr = [1, 4, 9, 5]
// arr.any = 90

// for(i in arr){
//     console.log(i, ' | ' , arr[i])
//     // console.log()
// }

// let arr1 = [1, 4, 9, 5]

// for(i of arr){
//     console.log(i)
// }


// var a =5
// for(i=0; i<5; i++){
//     let b = a+i
// }
// console.log(b)

// var and let behave within a loop

var fnArray = []

for(let i = 0; i<=3; i++){
    
    console.log(`Now value of i is: ${i}`)
    fnArray[i] = function(){
        console.log(`Now value of i is: ${i}`)
    }
    
}



let count = 0
while(count <= 3){
    fnArray[count]();
    count++;
}




























