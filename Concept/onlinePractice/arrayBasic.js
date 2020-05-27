// -------------- Array-------------------

// var arr = new Array(5)
// arr[0]=10
// arr[1]=20
// arr[2]=30
// arr[3]=40
// arr[4]=50
// console.log(arr)

// var arr1 = [100,200,300, "sheuli", 50.01, true, null, NaN, undefined]
// var arr2 = [100,200,300, "sheuli", 50.01, true, null, NaN, undefined]
// console.log(arr1)

// var fruit = [1, "sheuli", 70, "sheuli", true, null, NaN, undefined]
// console.log(fruit)

// var result = fruit.push("Joy")
// var result = fruit.pop()
// var result = fruit.shift()
// var result = fruit.unshift("Joy")
// var result = fruit.indexOf("sheuli", 2)
// var result = fruit.lastIndexOf("sheuli", -2)
// var result1 = fruit.indexOf(null)
// var result = fruit.includes(null)
// var result = fruit.concat(arr1)
// var result = fruit.reverse()
// var result1 = [...fruit, ...arr1]

// console.log(fruit)
// console.log(result1)
// console.log(result)


// delete fruit[1]

// console.log(fruit)




//------------------------------------------------------------

// splice( index, deletecount, [... itemlist] )


// var arr = [100,200,300, "sheuli", 50.01, true, null, NaN, undefined]

// var result = arr.splice(1, 2)

// var result = [...arr].splice(arr.length - 1, 1)

// var result = arr.splice(2, 3, "joydeep", "hiiiii")

// var result = arr.splice(arr.length, 0, "jjjjjhjhj")

// var result = arr.splice(0, 0, "jjjjjhjhj")

// var result = arr.splice(-3, 2, "jjjjjhjhj")

// console.log(result)
// console.log(arr)


//------------------------------------------------------------

// slice(start, end) -- end excluded

// var arr = [100,200,300, "sheuli", 50.01, true, null, NaN, undefined]

// var result = arr.slice(2, 6)


// console.log(result)

// console.log(arr)



//---------------------------------------------
//join method
//isArray()

// var arr = [ 1, 4, 5, 6]

// console.log(Array.isArray(arr))

// var str = `wyeiwueyri,uweyriwue,yruwy`
// console.log(str.split(''))

// let res = arr.join(',')

// console.log(typeof res)
// console.log(arr)

//--------------------------------------------------------------

// Data Manipulation

// ---- forEach----

// https://medium.com/front-end-weekly/3-things-you-didnt-know-about-the-foreach-loop-in-js-ff02cec465b1

// const clientList = [
//     {
//       id:427365427,
//       name: "SAP",
//       branch: 'KOLKATA',
//       currency: 'INR'
//     },
//     {
//       id:7834763847,
//       name: "Global",
//       branch: 'BLR',
//       currency: 'USD'
//     },
//     {
//       id:347872734,
//       name: "HUL",
//       branch: 'ASSAM',
//       currency: 'INR'
//     }
// ]


// clientList.forEach( every => {
//     console.log(every.name, ' | ', every.currency)
// })


// var arr = ["banana", "orange", "mango"]
// arr.forEach(abc)
// clientList.forEach(abc)
// function abc(item, index, array){
//     <tr>
//         <td>{item.name}</td>
//         <td>{item.branch}</td>
//         <td>{item.currency}</td>
//     </tr>
//     console.log(item)
//     // console.log(index)
//     // console.log(array)
// }

//-------------------map()--------------------

// var arr = [10,20,30]

// var result = arr.map( (item, index, array) => item *2)
// console.log( arr )

// var result1 = arr.forEach( (item, index, array) => {
//     arr[index] = arr[index] *3
// })
// console.log(arr)

// console.log(result)
// console.log(result1)

// arr.map((item,index)=>{
//     console.log(`index is ${index} and value is ${item*index}`)
// })


// let array = [
//         [2, 5, 7],
//         9,
//         [5, 7, 4],
//         [2, 9, 4],
        
//     ]
    
// array.map(item => {
//     console.log('here1')
//     console.log(item)
//     // if(Array.isArray(item)){
//     //      item.forEach( slice => {
//     //     console.log('here2')
//     //     console.log(slice)
//     // })
//     // }
//     Array.isArray(item) && item.forEach( slice => {
//         console.log('here2')
//         console.log(slice)
//     })
// })


//------find()--------------------

// const clientList = [
//     {
//       id:427365427,
//       name: "SAP",
//       branch: 'KOLKATA',
//       currency: 'INR'
//     },
//     {
//       id:7834763847,
//       name: "Global",
//       branch: 'BLR',
//       currency: 'USD'
//     },
//     {
//       id:347872734,
//       name: "HUL",
//       branch: 'ASSAM',
//       currency: 'INR'
//     },
//     {
//       id:347872734,
//       name: "ITC",
//       branch: 'KOLKATA',
//       currency: 'INR'
//     }
// ]

// var arr = [10,20,30,40]

// // var result = arr.filter(item => item > 30)

// // var result1 = clientList.filter( item => item.branch === 'KOLKATAA')

// // console.log(result)
// // console.log(result1)

// // console.log(arr.find(item => item > 20))

// // console.log(clientList.find( item => item.branch === 'KOLKATA'))

// // console.log(arr.filter(item => item > 20))

// // console.log(clientList.filter( item => item.branch === 'KOLKATA'))

// var arr = [10,20,30,40]

// let res = arr.filter(abc)
// let res1 = arr.filter( item => true )

// function abc(item){
    
//         return true
    
// }

// console.log(res)

//------reduce()--------



// var arr = [10,20,30,40]

// let res = arr.reduce( (accumulator, item, index, array) => {return accumulator + item}, 10 )
// console.log(res)

// function sum(a, b)
// {
//   return a +b; 
// }

// console.log(arr.reduce(s um)) 



// var month =["december","jan", "march", "feb", "aeaasdead" ]

// var arr = [521, 77, 8, 1, 6, 9]
// month.sort()
// console.log(month)

// arr.sort((first, second) => first - second)
// console.log(arr)

// some() and every()

var arr = [ 2, 56, 34, 23, 81]

var res = arr.some( item => item < 80 )

var res1 = arr.every( item => item < 80)

console.log(res)
console.log(res1)










