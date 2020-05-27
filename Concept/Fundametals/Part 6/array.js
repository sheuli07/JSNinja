//how to create array
// var arr = new Array()
// console.log(arr)
// var arr1 = []
// console.log(arr1)


//// Initializing while declaring 
// var house = ["1bhk", "2bhk", "3bhk", "4bhk", "5bhk"]
// console.log(house[0])


// var house = new Array(4)  // Creates an array of 4 undefined elements
// house[0]="1rk"    // Now assign values 
// house[1]="2rk"
// house[2]="3rk"
// house[3]="4rk"
// console.log(house)


// Storing number, boolean, strings in an Array  
// var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
// console.log(house)
// console.log(house.length)

// var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
// var new_house = house.push("mana")  //push() adds items to the end.
// console.log(house)
// console.log(new_house)

// var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
// var new_house1 = house.pop()  //pop() adds items to the end.
// console.log(house)
// console.log(new_house1)

// var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
// var new_house2 = house.pop()  //pop() adds items to the end.
// console.log(house)
// console.log(new_house2)

// var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
// var new_house3 = house.shift()  //shift() removes the element from the beginning and returns it.
// console.log(house)
// console.log(new_house3)


// var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
// var new_house4 = house.unshift("joy")  //unshift(...items) adds items to the beginning..
// console.log(house)
// console.log(new_house4)

// var house = ["1BHK", 25000, "2BHK", 50000, "Rent", true];  
// var new_house5 = house.indexOf(25000)
// var new_house6 = house.lastIndexOf("Rent")
// console.log(new_house5)
// console.log(new_house6)


// const array1 = [1, 2, 3];  // includes

// console.log(array1.includes(2));

// const pets = ['cat', 'dog', 'bat'];

// console.log(pets.includes('cat'));

// console.log(pets.includes('at'));


// var arr = [10,20,30,40]
// var arr2 = [100,200,300,400]

// var result = arr2.concat(arr) //concat() method does not change the existing arrays. It always returns a new array.
// console.log(result)

// var reverse_result = arr.reverse()  //reverse
// console.log(reverse_result)


// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var result = fruits.splice(1, 2, "banana", "grapes")
// console.log(result)

//--------------The slice() method creates a new array. It does not remove any elements from the source array.---------------------
// var citrus = fruits.slice(1); 
// console.log(fruits)
// console.log(citrus)

//-----------forEach()------------------
// var fruits = ["apple", "orange", "cherry"];
// fruits.forEach(abc)

// function abc(item){
// console.log(item)
// }

//-----------map()------------------

// var num = [30,40,50]

// // console.log(num.map(x=> x*2))

// var new_array = num.map(function abc(val, index){
//     return{key:index, value:val*val}; 
//     });
// console.log(new_array);

//--------find()---------------------------

// let array = [10,20,30,40]
// console.log(array.find(x=> x>10))

//---------------------reduce()--------------

var arr = [10,20,30,40]

function sumofarray (sum, num){
    return sum + num
}

function abc(item){
    console.log(arr.reduce(sumofarray))
}

abc()


//--------------sort()--------

// const months = ['March', 'Jan', 'Feb', 'Dec'];
const months = [100, 6, 90,5,100,1];
months.sort()
console.log(months)

