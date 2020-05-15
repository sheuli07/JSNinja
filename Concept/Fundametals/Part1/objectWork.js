//premitive data type
// let a= 5;
// let b=a;
// b = 9;
// console.log(a)
// console.log(b)

// reference data type

// let obj1 = {
//     student: "Sheuli",
//     rollno: 100
// }
// obj2 = {...obj1};  //using spread operator we can change reference data type location

// obj2 = JSON.parse(JSON.stringify(obj1));

// obj2.student = 'Babai'
// console.log(obj1);
// console.log(obj2)

//object comparison

// let object1 = {   
//     name: "sheuli",
//     subject: "Javascript",
//     dataArray: [1, 2, 3, 4],
//     objnew: {
//         x: "hi",
//         y: [6,7,8,9]
//     }
// }

// object2 = object1;
// console.log(object1 === object2) //true (same memory location)

// let object2 = {
//     name: "sheuli",
//     subject: "Javascript",
//     dataArray: [1, 2, 3, 4],
//     objnew: {
//         x: "hi",
//         y: [6,7,8,9]
//     }
// }

// console.log(object1)
// console.log(object2)
// console.log(object1 === object2) // false (bcz of different memory location)
// console.log(object1.name === object2.name) //true
// console.log(object1['objnew'] === object2['objnew']); //false
// console.log(object1['objnew']['x'] === object2['objnew']['x']); //true
// console.log(typeof(object1.dataArray));
// console.log(typeof(object2.dataArray));
// console.log(object1['objnew']['x'].dataArray === object2['objnew']['x'].dataArray) //true


//object create
// let obj1 = {}
// let obj2 = new Object();
// function student(){

// }
// let obj3 = new student();

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


//object litteral syntax

// let result = {
//     name: "Sheuli Mondal",
//     subject: "Javascript",
//     marks: "60",
//     100:100,
//     "all student":  "Yes,",
//     displayResult: function(){
//         console.log(`${result["all student"]}The student ${result.name} got marks ${result.marks} out of ${result['100']} in ${result.subject}` )
//     }
// }
// result.displayResult();

//object constructor

// const result = new Object();
// result.name = "Joydeep";
// result.surname="Mondal";
// result.age=10;
// result.displayResult = function(){
//     console.log(`My Name is ${result.name} ${result.surname} and my age is ${result.age}`)
// }

// result.displayResult();

//Constructor

// function Market(clothes, price, quantity){
// this.clothes = clothes;
// this.price = price;
// this.quantity = quantity;
// }

// var bill = new Market("Saree", 120, 5)

// console.log(`My ${bill.quantity} ${bill.clothes} bill is ${bill.price * bill.quantity}`);



// let animal1 = {
//     mammel: "snake",
//     domestic:"cow",
//     birds: "parrot",
//     objectnew:{
//         type:"snake",
//         a: "cobra",
//         poison:{
//             x: "Yes",
//             y: "No"
//         }
//     }
// }


// let animal2 = animal1;
// let animal2 = {...animal1, objectnew: {...animal1.objectnew}};
// animal2.birds="crow"

// console.log(animal1);
// console.log(animal2)
// console.log(animal1.objectnew === animal2.objectnew)


// var animal2 = {
//     mammel: "snake",
//     domestic:"cow",
//     birds: "parrot",
//     objectnew:{
//         type:"snake",
//         a: "cobra",
//         poison:{
//             x: "Yes",
//             y: "No"
//         }
//     }
// }

// let checklength = (Object.keys(animal2).length) // check length
// console.log(checklength)

//for..in

// let details = {
//     type : "Buisness"
    
// }

// var details1 = Object.create(details)
// details1.name = "Gopal";
// details1.address = "Bowrah";

// for (let key in details1){
//     console.log(key)  // give result only properties
    // console.log(details1[key]) // give result properties value
// }

//delete

// let details = {
//     type : "Buisness"
    
// }

// console.log(details.type);

// delete details.type;
// console.log(details.type)