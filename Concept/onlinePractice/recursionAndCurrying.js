//Recursion Example


// function sum(num){
//     if(num == 0){
//         return num;
//     }else{
//         return num + sum(num - 1)
//     }
// }


// var result = sum(3)
// console.log(result);

// function power(x, n){ //x-> base and n->power
//     if(n==1){
//         return x;
//     }else{
//         return x* power(x, n-1)  
//     }
// }
// var result = power(2,4)
// console.log(result)  //  16

//Date Time Object and Its Methods(not all)
// var a = new Date()
// var n = a.getFullYear()

// var epoch = new Date().getTime()
// console.log(n);
// EPOCH Time

// console.log(epoch)


// function abc(f){
//     return function a1(a){
//       return function b1(b){
//           return f(a,b)
//       }; 
//     };
        
// };

// function sum(a, b){
//     return a+b
// }

// let curriedSum = abc(sum)

// console.log(curriedSum(1)(2));
// console.log(curriedSum(1)(2));


//Currying example

function volume(l, h, w){
    // console.log(w)
    // 
    return l*h*w;
}

let vol = volume(4, 7)

// console.log(vol)

function curVol(firstargs){
    return (secondargs)=>{
        return (thirdargs)=>{
            return (fourthone)=>{
                return firstargs * secondargs * thirdargs * fourthone
            }
        }
    }
}


let currRes = curVol(4)(5)(5)(2)
// let currRes2 = currRes(5)




//console.log(currRes)
















































