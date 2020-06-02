let fonion = function(){
    return new Promise((resolve)=>{
        console.log(' Onion frying started ')
    
        setTimeout(function() {
            console.log(' Onion frying completed ')
            resolve(' Onion frying completed ')
        }, 1000 * 30);
    })
    
}

let fginger = function(){
    
    return new Promise((resolve)=>{
        console.log(' ginger frying started ')
    
        setTimeout(function() {
            console.log(' ginger frying completed ')
            resolve(' ginger frying completed ')
        }, 1000 * 30);
    })
}

let fgarlic =  function(){

    return new Promise((resolve)=>{
        console.log(' garlic frying started ')
    
        setTimeout(function() {
            console.log(' garlic frying completed ')
            resolve('  garlic frying completed  ')
        }, 1000 * 30);
    })
}

let fmasala = function(){
    return new Promise((resolve)=>{
        console.log(' fmasala started ')
    
        setTimeout(function() {
            console.log(' fmasala completed ')
            resolve('  fmasala frying completed  ')
        }, 1000 * 7);
    })
}

let chickenkosa = function(fmasalares){
    return new Promise((resolve)=>{
        console.log(' chickenkosa started ')
    
        setTimeout(function() {
            console.log(' chickenkosa completed ')
            resolve('  fmasala frying completed  ')
        }, 1000 * 8);
    })
}

async function  fcook(){
    
    // let onres = await fonion();
    // let ongin = await fginger();
    // let ongar = await fgarlic();
    
     let res = await Promise.all([fonion(), fginger(), fgarlic()])
        
    
    let masala = await fmasala(res);
    let chicke = await chickenkosa(masala)
    
    console.log('lets serve')
}

fcook()
