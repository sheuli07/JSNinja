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
