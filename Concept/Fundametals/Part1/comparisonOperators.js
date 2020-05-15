//loose equality operator(equal to)

var age = 18
var age = (age == 18)
console.log(age)
console.log("===============")

//strict checking(equal value and equal type)
var result = '100'
var result = (result === 100)
console.log(result)
console.log("===============")

// Inequality(not equal) & strict inequality(not equal value or not equal type)
var a = 18, b = '18'; 
// var z = a!== b
// console.log(z)
if(a!= b){
    console.log("hello inequality")
}else{
    console.log("hii inequality")
}
if(a!== b){
    console.log("hello strict inequality")
}else{
    console.log("hii strict inequality")
}
console.log("===============")
//greater than & greater than equal to
var val_one = 90, val_two = 91;
if(val_one >= val_two){
    // if(val_one <= val_two){
    console.log("value AAAAAAAAAAA")
}else{
    console.log("value BBBBBBBB")
}



