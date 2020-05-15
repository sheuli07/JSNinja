
var a = 12;
var b = 24
console.log(a + b) //addition
console.log(b - a) //subtraction
console.log(a * b) //multipication
console.log( b/a) // division
console.log( b % a) // The modulus operator (%) returns the division remainder.
console.log(2 ** 3 **2) //The exponentiation operator (**) raises the first operand to the power of the second operand. 
console.log("=====================")
//postfix & prefix increment
function abc(){
    var x = 5;
    var y = x++; 
    var z = ++x
    console.log(y)
    console.log(z)
}
abc();

//postfix & prefix decrement
function testdecrement(){
    var x = 5;
    var y = x--; 
    var z = --x
    console.log(y)
    console.log(z)
}
testdecrement();

