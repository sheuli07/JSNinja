//----------------------if-else statement-----------------------

// var age = 18;

// if(age > 10){
    //inside block
// console.log("You are elegible")
// }
// console.log(age)

// if(age > 20){
// console.log("You are elegible")
// }else{
//     console.log("You are not elegible")
// }

// if(age > 20){
//     console.log("You are elegible")
//     }else if (age == 18){
//         console.log("You are elegible 2")
//     }else{
//         console.log("You are not elegible")
//     }

// if(1){
//     console.log("hi mana")
// }else{
//     console.log("Bye mana")
// }


//-------------------ternary Operator-----------------------

// var age ="bgdhgdshgsdh";
// var age = 20
// var result = age>20 ? console.log("cool") :console.log("left");

// var result = age>20 ? console.log("greater than 20") :
//                 age < 20 ? console.log("less than 20"):
//                 age == 20 ? console.log("equal 20"): 
//                 console.log("What an unusual age!")


//-------------Switch case----------------------

// let i =9;
// switch(i){
//     case 0:
//         console.log("0")
//         break;
//     case 1:
//         console.log("1")
//         break;
//     case 2:
//         console.log("2")  
//         break;
//     case 5:
//         console.log("5")  
//         break;
//      case 9:
//         console.log("9")  
//         break; 
//     default:
//         console.log("nothing") 
// }


//---break and continue concept in loop

// var i = 10;
// count = 0;
// for(i=1; i<10; i++){
//     if(i===5){
//         // console.log("hiiii")
//         // break;
//         continue;
//     }
//     console.log("hiiii")
//     count++;
// }
// console.log(count)


// let a = 10;

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     continue;
//   }
//   a = a + i; 
// }

// console.log(a);
//0,1,2,3,4,5,6,7,8,9
//10,11,13,,17,22,28,35,43,52


// Check how var and let behave within a loop.

// let a =10;
// for (let i = 0; i < 5; i++) {
//     var b = a+i; 
     
//     }
//     console.log(b)
    // console.log(a)

//important
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

