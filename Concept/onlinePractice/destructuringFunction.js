//let a,b, rest;
// [a, b, ...rest] = [10, 20, 30, 40 ,50]
// const {a, b, ...rest} = {a:10, b:20, c:30, d:40}

// console.log(a)
// console.log(b)
// console.log(rest)

// let obj = {
//     I: `sheuli`,
//     u: `shree`,
//     role: `jsdev`
// }

// let { role, I, iu } = obj

// I = `shree`

// console.log(obj.I, obj.u, obj.role)

// console.log(I)
// console.log(role)
// console.log(obj)




// let obj= {
//     name: 'Joy',
//     classs: '5'
// }

// function abc({name, classs}){
//     // console.log(obj)
//     // console.log(name)
//     // console.log(classs)
    
//     name = 'Priyanka'
    
// }

// abc(obj)

// console.log(obj)


// function objdes(){
//     return {
//         you: `she`,
//         role: `jsdev`
//     }
// }

// let {you, role} = objdes()
// console.log(you, role)

// let obj= {
//     name: 'Joy',
//     classs: '5'
// };

// ({ name: client_name } = obj)
// // let client_name = name;
// console.log(client_name)


// let obj = {
//      name: 'Joy',
//     classs: '5',
//     occ: 'student'
// }

// let {classs, ...rest} = obj
// console.log(classs, rest)

// -----------------------------------------------------------------

// let arr = [3, 6, 7, 9, 3]

// let [, , c, ...rest] = arr

// console.log( c, rest)

// let array = [4, 6, 3]

// function abc(arr){
    // console.log(arr)
    // b=90
    // arr[1] = 90
    //arr
// }

// abc(array)
// console.log(array)



// ---------------------how work it is---------------

let obj ={
    name:"sheuli",
    age: 25,
    live: "blr"
}

// let { name, age } = obj //similar

let name = {...obj}["name"] //similar
let age = {...obj}["age"]

name = "shghgggdgghdgds"


console.log(obj.name)
