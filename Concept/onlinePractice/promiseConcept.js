let fryingProcess = () =>
    new Promise((resolve, reject) => {
        console.log("i am in frying process");
        var sec = 0;

        let timer1 = setInterval(() => {
            ++sec;
            console.log("Frying " + sec);
        }, 1000);

        // setTimeout(()=> {
        //     clearInterval(timer1)
        //     console.log("Gas over")
        //     reject("Frying Incomplete")
        // }, 10000)

        setTimeout(() => {
            clearInterval(timer1);
            resolve("Frying Done");
        }, 15000);
    });

let getReadyMasala = () =>
    new Promise((resolve, reject) => {
        console.log("Chili powder and turmeric powder added");
        var sec = 0;

        let timer2 = setInterval(() => {
            ++sec;
            console.log("Preparing Masala " + sec);
        }, 1000);

        // setTimeout(()=> {
        //     clearInterval(timer2)
        //     resolve("Masala Ready")
        // }, 10000)

        setTimeout(() => {
            clearInterval(timer2);
            reject("Mind changed, will eat veg");
        }, 10000);
    });

let chickenKosa = () =>
    new Promise((resolve, reject) => {
        console.log("Chiken Added in Masala");
        var sec = 0;

        let timer2 = setInterval(() => {
            ++sec;
            console.log("Kosa Hochhe " + sec);
        }, 1000);

        setTimeout(() => {
            clearInterval(timer2);
            resolve("Ready to serve");
        }, 15000);
    });

// console.log(getReadyMasala())

// fryingProcess()
//     .then(res=> {
//         console.log(res)
//         return getReadyMasala()

//     })
//     .then((result)=>{
//         console.log(result)

//     })
//     .catch(err => {
//         console.log(err)
//         console.log("stop cooking, Manage cylinder first")

//     });

// (async()=> {

//     try {
//         let y = await fryingProcess()
//         console.log(y)
//         let z =  await getReadyMasala()
//         console.log(z)

//     }catch(e){
//         console.log(e)
//         console.log("stop cooking, Manage cylinder first")
//     }

// })()

// const func = async ()=> {
//     try {
//         let y = await fryingProcess()
//         console.log(y)
//         let z =  await getReadyMasala()
//         console.log(z)

//     }catch(e){
//         console.log(e)
//         console.log("stop cooking, Manage cylinder first")
//     }

// }

// func()

// console.log("hey")

Promise.all([
    fryingProcess(),
    getReadyMasala().catch((e) => {
        console.log("Error in masala but i am handling it");
        return e;
    }),
])
    .then((r) => {
        console.log("Suucess");
        console.log(r);
        // return chickenKosa()
    })
    // .then((res)=>{
    //     console.log(res)
    // })
    .catch((e) => {
        console.log("Error");
        console.log(e);
    });

// Promise.race([fryingProcess(), getReadyMasala()])
//     .then(r => {
//         console.log("One completed so I am resolved")
//         console.log(r)
//     })
//     .catch(e=> {
//         console.log(e)
//     })
