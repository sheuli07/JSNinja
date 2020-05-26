//            --------------- Closures ------------------


// var a= 10;
// function abc(){
//     var b = 20
    
//     function sum(){
//         var c = 30;
        
//         console.log(`sum is ${a+b+c}`)
//     }
//     sum();
// }
// abc();

// Closure is a javascript feature

// function outer(){
//     var a = 10; 
    
//     function inner(){
//         var b = 20
//         console.log(`The sum is ${a+b}`)
//     }
//     return inner
// }

// var first_call = outer()
// var second_call = outer()

// first_call()
// second_call()

// console.log(typeof first_call)

var d = 90;
function outer(){
    var a = 10
    var b = 20
    var e = d;
    function inner(){
        var c = 30
        console.log(`a: ${a} | b: ${b} | c: ${c} | d: ${d} | e: ${e}`)
        a++;
        c++;
        d++;
        e++;
    }
    return inner;
}

var first_call = outer()
var second_call = outer()

first_call()  //10,20,30,90,90
first_call() // 11, 20, 30, 91,91
first_call() // 12,20,30, 92, 92

second_call() // 10,20,30, 93, 90 
second_call() // 11,20,30, 94, 91  



