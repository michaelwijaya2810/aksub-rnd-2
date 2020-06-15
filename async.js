//Promise, Callback, Async Await
const promiseFunction=new Promise((resolve, reject)=>{
    resolve(1)
    reject("failed")
})

promiseFunction.then((resolve)=>resolve+1).then((resolve)=>console.log(resolve));
// const callbackHell=()=>{
//     setTimeout(()=>{
//         console.log("Function 1 success");
//         setTimeout(()=>{
//             console.log("Function 2 success");
//             setTimeout(()=>{
//                 console.log("Function 3 success");
//                 setTimeout(()=>{
//                     console.log("Function 4 success");
//                     setTimeout(()=>{
//                         console.log("Function 5 success");
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }

// callbackHell();

