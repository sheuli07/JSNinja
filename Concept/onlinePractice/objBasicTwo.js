// Object is a referenced data type not a primitive one;

// var a = 5;
// var b = a;

// a = 9;

// console.log(a)
// console.log(b)

// Spread Operator


// let obj1 = {
//     name: 'she',
//     roll: 'jsdev'
// }

// console.log(typeof obj1)
// console.log( JSON.stringify(obj1))
// let objstr = JSON.stringify(obj1);
// console.log(obj1)
// console.log(JSON.parse(JSON.stringify( obj1 )))
// console.log(obj1 === JSON.parse(JSON.stringify( obj1 )))

// let obj2 = obj1

// let obj2 = JSON.parse( JSON.stringify(obj1) )
// let obj3 = {...obj1}

// obj3.name = 'joy'
// obj2.name = 'shree'

// console.log(obj1 === obj2)

// obj2.name = 'shree'

// console.log(obj1)
// console.log(obj2)
// console.log(obj3)


// let obj1 = {
//     name: 'she',
//     roll: 'jsdev',
//     what: {
//         prop: 'see here'
//     }
// }

// let obj2 = {...obj1 } // spread operator

// obj2.name = 'shree'
// obj2.what.prop = 'why is this happening?'

// console.log(obj1)
// console.log('-------------------')
// console.log(obj2)



// let obj1 = {
//     name: 'she',
//     roll: 'jsdev',
//     a: {
//         b: 'c',
//         d:{
//             e: 'f'
//         }
//     }
    
// }

// console.log(obj1 === {...obj1})

// let obj2 = {...obj1, a: {...obj1.a}}
// console.log(obj1.d === obj2.d)

// console.log(obj1)
// console.log(obj2)


// let number = [ 1, 3, 5, 4 ]
// let number2 = [...number]

// number2[1] = 10

// console.log(number)
// console.log(number2)


// let arr1 = [ 2, 4, 5]

// let arr2= [1, 3, ...arr1, 7, 9]

// console.log(arr1)
// console.log(arr2)



// let obj1 = {
//     name: 'she',
//     roll: 'jsdev'
// }

// //delete operator**;


// delete obj2.name

// console.log(obj1)
// console.log(obj2)



// let obj1 = {
//     name: 'she',
//     roll: 'jsdev',
//     surname: 'mondal'
// }

// for( key in obj1){
//     console.log(key)
//     console.log(obj1[key])
// }

// console.log(Object.keys(obj1).map(elem => obj1[elem]))


//-------------------------test------------------------------

// let obj1 = {
//     name: 'she',
//     roll: 'jsdev',
//     objnew:{
//         ab: 'bc',
//         jk:{
//             who: 'me'
//         }
//     },
//     objnew2:{
//         ty: 'poi'
//     }
// }

// let a=0;
// for(key in obj1){
//     a++;
    //hasOwnProperty
    // console.log(key)
// }
// console.log(a)


// console.log(Object.keys(obj1).length)  //checking object length


// let obj2 = {
//     ...obj1,
//     ui:'learning',
//     name: 'shree',
//     objnew:{
//         ...obj1.objnew,
//         jk:{
//             ...obj1.objnew.jk
//         }
//     },
//     objnew2: {
//         ...obj1.objnew2
        
//     }
// }

// console.log(obj1.objnew.jk === obj2.objnew.jk)
// console.log(obj2)


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
//     },
//     fr:{
//         nm: 'uio'
//     }
// }

// let animal2 = {}

// for ( let key in animal1){
//     //console.log(animal1[key])
//     // console.log(typeof animal1[key])
//     if(typeof animal1[key] === 'object'){
//         animal2[key] = {...animal1[key]}
       
//     }else{
//         animal2[key] = animal1[key]
//     }
// }
// let animal2 = {...animal1}
// console.log(animal2)

// let animal2 = {...animal1, animal1.};

// console.log(animal1.objectnew === animal2.objectnew)








