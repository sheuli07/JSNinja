// function abc(a,b){
//     console.log(a+b)
// }

// abc(5,9);


// let fn = function abc(){
//     console.log('hey')
// }

// fn()

// function outside(){
//     var x = 5;
//     function inside(a){
//         console.log(x*10)
        
//     }
//     inside(10);
// }
// outside()

// let n =(a,b)=> {return a+b}

// n(4,5)

// var myfunction = function(){
//     console.log("hiiii")
// }
// 

// myfunction();

// var obj = {
//     name: "sheuli",
//     sub: "javascript",
//     display_one: function(){
//         console.log(this.sub)
//     },
//     display_two: ()=>{
//         console.log(this.sub)
//     }
// }

// obj.display_one();
// obj.display_two();


// let user ={
//     show: ()=>{
//         console.log(arguments)
//     }
// }

// user.show(1,2,3,4)

// function abc(a,b){
//     this.a = a;
//     this.b = b;
//     return a*b;
// }

// var x = new abc(6, 5)
// console.log(x)

// var user = (a, b)=>{
//     this.a = a 
//     this.b = b 
//     return a+b
// }

// var x = new user(4, 8)


// function abc(){
//     console.log('hey')
// }

// abc();

//IIFE
// (function(){
//     console.log(`I'm anonymous`)
// })()
//IIFE 

// let fn = a => { console.log('hey'); return a+10; }

// console.log(fn(9))


// let fn = a => ({
//     name: 'me',
//     role: 'dev'
// })

// console.log(fn())

// "this" is not bound
// let playerList = {team: "india"}

// let others = {team: "Aus"}

// function abc(){
//     console.log(this.team)
// }

// playerList.display = abc
// others.info = abc

// playerList.display();
// others.info();


// let playerList = {
//     team: "india",
//     display: function(){
//         let x = ()=> console.log(this.team)
//         x();
//     }
// }
// playerList.display()

// function name(val, bhut){
//     // console.log("hiiii")
//     let res = val * 10;
//     var name = "sheuli"
//     bhut(res)
// }

// function xyz(name){
//     // console.log(`hello ${name}`)
//     console.log(`calculated val: ${name}`)
// }

// name(9, xyz)

// function a (fn, fn2c){
    //Does some operation of 3s
    
    //res obtained
    // fn(res, fn2c)
// }

// function b(res, fn){
    // Does some operation of 5s
    // res of a
    
    // resofb
    
    // fn(resofb)
// }

// function c(resofb){
    // Does some operation of 7s
    // res of b
    
    // return res
// }

// a(b, c)

//Callback hell

// async/await


// function a (){
    //Does some operation of 3s
    
    //res obtained
// }

// function b(resofa){
    // Does some operation of 5s
    // res of a
    
   
// }

// function c(resofb){
    // Does some operation of 7s
    // res of b
    
    // return res
// }

// let exe = async ()=> {
//     let resofa = await a()
//     let resofb = await b(resofa)
//     let resofc = await c(resofb)
    
//     return resofc
// }

// exe()