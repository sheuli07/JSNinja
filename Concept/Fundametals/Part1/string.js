
function abc(a,b){
    return a + b;
}

console.log(`1+2 = ${abc(1,2)}.`)
console.log(typeof(`1+2 = ${abc(1,2)}.`))

var contact = `List:
    *A
    *B
    *C`;
    
console.log(contact)

var contactList = `ListNo:\n *A\n *B\n`;
    
 console.log(contactList)


var name = 'Amar college name is BCET\n'
// name = ''
// var result = name.length

// var result = name.charAt(6)

// var result = name[0]

// var result = name.toLowerCase()
var result = name.slice(-2, 9)
var result1 = name.substring(-2, 9)
var result2 = name.substring(-2, 9)

console.log(result)
console.log(result1)
console.log(result2)

console.log("===================")

let str = 'As sly as a fox, as strong as an ox';

let target = 'as'; // let's look for it

let pos = 0;
while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;

  console.log( `Found at ${foundPos}` );
  pos = foundPos + 1; // continue the search from the next position
}
console.log("===================")

var string ='aABCDEFG'
var string_one = "aABCDEF"
var results = string.codePointAt(0)
var results1 = String.fromCodePoint(97)
var result2 = string.localeCompare(string_one)

console.log(results);
console.log(results1);
console.log(result2);