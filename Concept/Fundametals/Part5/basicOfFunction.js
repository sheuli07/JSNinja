//declaration of function

// function calculation(a, b){
//     console.log (a + b)
// }
// calculation(4,5)

//A nested function example

// function subject(student){

//     function studentname(){
//         var room = 10;
//         console.log(`Total student is ${room * student}`)
//     function studentList(absent){
//         console.log(`Absent student is ${(room *student)/ absent}`) 
//     }
//     studentList(50);
//     }
//     studentname();
// }
// subject(100);

// scope chain

// function outside() {
//     var x= 5;
//     function inside(x) {
//         console.log(x*6) 
        
//     }
//     inside(10)
// }
// outside();

//Array of functions

// function fn1(){
//     console.log('Hi');
// }

// function fn2(){
//     console.log('Hello');
// }

// function fn3(){
//     console.log('Bye');
// }

// var arrayFunction = {
//     fn1,
//     fn2,
//     fn3
// }

// function callarrayFunction(){
//     console.log(arrayFunction[0]("Sheuli")
// }
// callarrayFunction();

//arrow function

// function result(a,b){
// return a*b
// }
// console.log(result(4, 5))

// let result1 = (a,b)=> a*b  //without curly braces
// console.log(result1(5, 5))

// let result2 = (a,b)=> {   // with curly braces
//     // var multi = a*b
//     return a*b;
// }
// console.log(result2(10, 5))

//ANONYMOUS function

// var myFunction = function(){
//         let a= 10;
//         let b= 20;
//         console.log(`The result is ${b-a}`)
// }
// myFunction();

//difference
//Unlike regular functions, arrow functions do not have their own this.

// let student = {
//     name: "Sheuli",
//     subject:"Javascript",
//     displayInfo : ()=>{
//         console.log(this.name)
//     },
//     info2: function(){
//         console.log(this.subject)
//     }
// }
// student.displayInfo()
// student.info2()

// Arguments objects are not available in arrow functions, but are available in regular functions.

// let user = {
//     show(){
//         console.log(arguments)
//     }
// }
// console.log(1,2,3);  // 1,2,3

// let user1={
//     show_arr: ()=>{
//         console.log(...arguments)

//     }
// }
// user.show_arr(4,5,6)  //give error

//the arrow functions are only ‘callable’ and not constructible. But regular function has both

// let mycar = function(){
// console.log(arguments)
// }

// var x = new mycar(2,3,4,5);   // 2,3,4,5

// let mycar1 = ()=>{
//     console.log(arguments)
// }

// var y = new mycar1(9,8,7)  // mycar1 is not a constructor



//how "this" work in js

// let user={
//     name: "sheuli",
//     hobby: "cricket",
//     details(){
//         console.log( this.name );
//         console.log( user.hobby)
//     }
// }
// user.details();


// let new_user={
//     name: "sheuli",
//     hobby: "cricket",
//     detailsnew(){
//         // console.log( this.name );  //sheuli
//         console.log(new_user.name)  //error
//     }
// }

// let user2 = new_user
// new_user = null;

// user2.detailsnew(); 


//"this" is not bound

// let playerList = {team: "india"}

// let otherList = {team: "Srilanka"}

// function abc(){
//     console.log( this.team )
// }

// playerList.display = abc;
// otherList.display1 = abc;

// playerList.display();
// otherList.display1();


// Arrow functions have no "this"... here arrow() uses this from the outer user.sayHi() method.

// let user ={
//     name: "sheuli",
//     vill: "bowrah",

//     abc(){
//     let arrow = ()=> console.log(this.vill);
//     arrow();
//     }
// }

// user.abc();


//CALLBACK FUNCTION

// function sum(a,b, callback){
//     console.log(`sum is ${a+b}`)
//     callback();
// }

//     function disp(){     //1st way to call another function
//         console.log("after sum function this function will called")
// }

// sum(30, 40, disp);

// sum(20, 30, function disp(){  // another way to call function 
//     console.log("another way to call a function using callback")
// })

// function greeting(name) {
//     console.log('Hello ' + name);
//   }
  
//   function processUserInput(callback) {
//     var name = "sheuli"
//     callback(name);
//   }
  
//   processUserInput(greeting);

//CLOSURE EXAMPLE

// var i =10;
// function outerFunction(){
//     var j = 20;
//     console.log(`The result is ${j/i}`);

//     function innerFunction(){
//         var k = 30
//         console.log(`Total value is ${ (j/i) * k}`)
//     }
//     innerFunction();
// };

// outerFunction();


// function constructor

// function user(name, state){
// this.name = name;
// this.state = state 

// }

// let display = new user("ram", "wb")

// console.log(display)
// console.log(display.name)
// console.log(display.state)


// Destructuring assignment

// let a, b, rest;
// [a, b] = [10, 20]
// [a, b, ...rest] = [10, 20, 30, 40, 50, 60]
// ({a, b, ...rest} = {a:20, b:30, c:40, d:50})
                                                                                                                                                                                               
// console.log(a);
// console.log(b);
// console.log(rest);

// const x = [1, 2, 3, 4]
// const [a, b] = x;

// console.log(a)
// console.log(b)

// const foo =["sheuli", "joydeep", "priyanka", "mana"] //Array destructuring

// const [x, y, z] = foo;
// console.log(x)
// console.log(y)
// console.log(z)



// let a, b;   //default value example

// [a=2, b=5] = [10, 17];
// console.log(a); 
// console.log(b); 


// let r=15; // swapping value
// let s=20;

// [r, s] = [s, r]
// console.log(r); 
// console.log(s); 


// function abc(){   //Parsing an array returned from a function
//     return [3, 4, 5, 6];
// }

// let [a, b, c, d] = abc()
// let [a, b, , d] = abc()  // we can Ignore some returned values

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);


// Object destructuring

// let user ={
//     name: "sheuli",
//     age: 25
// }

// const {name, age} = user

// console.log(name)
// console.log(age)


//REST Parameters

// function abc(...input){
//     let sum = 0;
//     for(let i of input){
//      sum +=i
//     }
//     return sum;
// }

// console.log(abc(1,2, 4))

// console.log(abc(1,2, 4, 5, 10, 6))


// function showName(firstName, lastName, ...titles) {
//     console.log( firstName + ' ' + lastName ); 

//     console.log( titles ); 
//     console.log( titles[0] ); 
//     console.log( titles[1] );
//     console.log( titles.length );
//   }
  
//   showName("sheuli", "Mondal", "Bowrah", "Jara", "WB");

